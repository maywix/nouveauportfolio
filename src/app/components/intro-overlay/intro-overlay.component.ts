import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  NgZone,
  OnDestroy,
  Output,
  ViewChild,
} from "@angular/core";
import gsap from "gsap";

@Component({
  selector: "app-intro-overlay",
  standalone: true,
  templateUrl: "./intro-overlay.component.html",
  styleUrl: "./intro-overlay.component.css",
})
export class IntroOverlayComponent implements AfterViewInit, OnDestroy {
  @Output() closed = new EventEmitter<void>();

  @ViewChild("overlay", { static: true })
  private overlayRef!: ElementRef<HTMLDivElement>;

  @ViewChild("introVideo", { static: false })
  private videoRef?: ElementRef<HTMLVideoElement>;

  private hideTimeoutId?: number;
  private hasClosed = false;

  constructor(private readonly zone: NgZone) {}

  ngAfterViewInit(): void {
    this.attachVideoListeners();
    this.scheduleFallbackHide();
  }

  ngOnDestroy(): void {
    if (this.hideTimeoutId) {
      window.clearTimeout(this.hideTimeoutId);
    }
  }

  onSkip(event: Event): void {
    event.preventDefault();
    this.hideOverlay();
  }

  private attachVideoListeners(): void {
    const video = this.videoRef?.nativeElement;
    if (!video) {
      this.hideOverlay();
      return;
    }

    video.addEventListener("error", () => this.hideOverlay());
    video.addEventListener("ended", () => this.hideOverlay());
  }

  private scheduleFallbackHide(): void {
    this.zone.runOutsideAngular(() => {
      this.hideTimeoutId = window.setTimeout(() => {
        const video = this.videoRef?.nativeElement;
        if (!video || video.readyState < 2) {
          this.hideOverlay();
        }
      }, 3000);
    });
  }

  private hideOverlay(): void {
    if (this.hasClosed) {
      return;
    }
    this.hasClosed = true;

    const overlayEl = this.overlayRef.nativeElement;
    const video = this.videoRef?.nativeElement;

    this.zone.runOutsideAngular(() => {
      gsap.to(overlayEl, {
        autoAlpha: 0,
        duration: 0.6,
        onComplete: () => {
          overlayEl.classList.add("hidden");
          this.zone.run(() => {
            this.closed.emit();
          });
        },
      });

      try {
        video?.pause();
      } catch (error) {
        console.warn("Unable to pause intro video", error);
      }
    });
  }
}
