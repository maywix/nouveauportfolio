import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  QueryList,
  ViewChildren,
} from "@angular/core";
import gsap from "gsap";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./hero.component.html",
  styleUrl: "./hero.component.css",
})
export class HeroComponent implements AfterViewInit {
  readonly firstNameLetters = "MAXIME".split("");
  readonly lastNameLetters = "FARRUGGIA".split("");
  readonly chips = [
    "Montage Vidéo",
    "Développement Web",
    "3D",
    "Motion/Graphic Design",
  ];

  @ViewChildren("heroWord")
  private heroWords!: QueryList<ElementRef<HTMLElement>>;

  @ViewChildren("heroLetter")
  private heroLetters!: QueryList<ElementRef<HTMLElement>>;

  private viewInitialized = false;
  private animationQueued = false;

  constructor(private readonly zone: NgZone) {}

  ngAfterViewInit(): void {
    this.viewInitialized = true;

    this.zone.runOutsideAngular(() => {
      this.heroWords.forEach((word: ElementRef<HTMLElement>) => {
        word.nativeElement.style.visibility = "hidden";
        gsap.set(word.nativeElement, { letterSpacing: "0rem", opacity: 0 });
      });
      this.heroLetters.forEach((letter: ElementRef<HTMLElement>) => {
        gsap.set(letter.nativeElement, { opacity: 0 });
      });
    });

    if (this.animationQueued) {
      this.animationQueued = false;
      this.playIntroAnimation();
    }
  }

  animateIntro(): void {
    this.animationQueued = true;

    if (!this.viewInitialized) {
      return;
    }

    this.animationQueued = false;
    this.playIntroAnimation();
  }

  private playIntroAnimation(): void {
    this.zone.runOutsideAngular(() => {
      const words = this.heroWords
        .toArray()
        .map((word: ElementRef<HTMLElement>) => word.nativeElement);
      const letters = this.heroLetters
        .toArray()
        .map((letter: ElementRef<HTMLElement>) => letter.nativeElement);

      if (!words.length || !letters.length) {
        return;
      }

      words.forEach((word: HTMLElement) => {
        word.style.visibility = "visible";
      });

      gsap.set(words, { letterSpacing: "0rem", opacity: 0 });
      gsap.set(letters, { opacity: 0 });

      gsap.to(letters, {
        opacity: 1,
        duration: 0.4,
        stagger: 0.05,
      });

      gsap.to(words, {
        letterSpacing: "1.2rem",
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        onComplete: () => {
          gsap.to(words, {
            letterSpacing: "0.6rem",
            duration: 0.6,
            ease: "elastic.out(1, 0.6)",
            stagger: 0.1,
          });
        },
      });
    });
  }
}
