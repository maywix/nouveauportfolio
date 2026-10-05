import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
  computed,
  inject,
  signal,
} from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { ProjectItem, projectsOf } from "../../../data/portfolio.data";
import { VdIconComponent } from "../vista-icons.component";

/** « Lecteur multimédia » : lit les vidéos du portfolio (YouTube embarqué). */
@Component({
  selector: "vd-player",
  standalone: true,
  imports: [VdIconComponent],
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./vista-player.component.html",
  styleUrl: "./vista-player.component.css",
})
export class VdPlayerComponent implements OnChanges {
  @Input() props: Record<string, unknown> = {};
  @ViewChild("frame") private frame?: ElementRef<HTMLIFrameElement>;

  readonly playlist: ProjectItem[] = projectsOf("video");
  readonly index = signal(0);
  readonly playing = signal(true);

  readonly current = computed(() => this.playlist[this.index()]);

  readonly src = computed<SafeResourceUrl>(() => {
    const url = `${this.current().embedUrl}?autoplay=1&rel=0&enablejsapi=1`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  });

  private readonly sanitizer = inject(DomSanitizer);

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes["props"]) {
      return;
    }
    const title = this.props["video"] as string | undefined;
    const i = this.playlist.findIndex((item) => item.title === title);
    if (i >= 0 && i !== this.index()) {
      this.play(i);
    }
  }

  play(i: number): void {
    this.index.set(i);
    this.playing.set(true);
  }

  next(): void {
    this.play((this.index() + 1) % this.playlist.length);
  }

  prev(): void {
    this.play((this.index() - 1 + this.playlist.length) % this.playlist.length);
  }

  toggle(): void {
    const next = !this.playing();
    this.playing.set(next);
    this.frame?.nativeElement.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func: next ? "playVideo" : "pauseVideo",
        args: "",
      }),
      "*"
    );
  }
}
