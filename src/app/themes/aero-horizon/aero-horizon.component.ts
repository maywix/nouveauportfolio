import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  ViewEncapsulation,
  computed,
  inject,
  signal,
} from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import {
  EDUCATION_LABEL,
  EXPERIENCES_LABEL,
  NAV_LABELS,
  PROFILE,
  PROJECT_CATEGORIES,
  ProjectCategory,
  ProjectItem,
  SKILL_AREAS,
  SkillAreaId,
  TIMELINE_CHRONO,
  groupProjects,
  hueFromText,
  projectsOf,
} from "../../data/portfolio.data";
import { AeroBuddyComponent } from "../../shared/aero-buddy.component";

interface Bubble {
  size: number;
  left: number;
  duration: number;
  delay: number;
  sway: number;
}

const AREA_TONE: Record<SkillAreaId, string> = {
  design: "pink",
  video: "orange",
  ux: "violet",
  front: "aqua",
  back: "lime",
  frameworks: "blue",
};

/**
 * Thème « Aero Horizon » : Frutiger Aero « nature » — ciel, soleil, nuages,
 * collines, bulles de savon, verre blanc et boutons gel.
 */
@Component({
  selector: "app-aero-horizon",
  standalone: true,
  imports: [AeroBuddyComponent],
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./aero-horizon.component.html",
  styleUrl: "./aero-horizon.component.css",
})
export class AeroHorizonComponent implements AfterViewInit, OnDestroy {
  readonly profile = PROFILE;
  readonly categories = PROJECT_CATEGORIES;
  readonly areas = SKILL_AREAS;
  readonly families = ["Design/Création", "Développement web"];
  readonly experiencesLabel = EXPERIENCES_LABEL;
  readonly educationLabel = EDUCATION_LABEL;
  readonly timeline = [...TIMELINE_CHRONO].reverse();

  readonly nav = [
    { id: "accueil", label: "Accueil" },
    { id: "competences", label: NAV_LABELS.competences },
    { id: "projets", label: NAV_LABELS.projets },
    { id: "parcours", label: NAV_LABELS.parcours },
    { id: "contact", label: NAV_LABELS.contact },
  ];

  readonly orbs = [
    { label: this.profile.chips[0], tone: "aqua" },
    { label: this.profile.chips[1], tone: "lime" },
    { label: this.profile.chips[2], tone: "sky" },
    { label: this.profile.chips[3], tone: "amber" },
  ];

  readonly bubbles: Bubble[] = Array.from({ length: 22 }, (_, i) => ({
    size: 14 + ((i * 37) % 70),
    left: (i * 47 + 8) % 100,
    duration: 16 + ((i * 13) % 22),
    delay: -((i * 7) % 30),
    sway: 10 + ((i * 11) % 30),
  }));

  readonly active = signal("accueil");
  readonly category = signal<ProjectCategory>("video");
  readonly playing = signal<string | null>(null);
  readonly copied = signal(false);

  readonly groups = computed(() =>
    groupProjects(projectsOf(this.category()))
  );

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly zone = inject(NgZone);
  private readonly sanitizer = inject(DomSanitizer);
  private observer?: IntersectionObserver;
  private revealObserver?: IntersectionObserver;
  private frame = 0;
  private copyTimer = 0;
  private readonly onPointer = (event: PointerEvent): void => {
    if (this.frame) {
      return;
    }
    this.frame = requestAnimationFrame(() => {
      this.frame = 0;
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      const el = this.host.nativeElement;
      el.style.setProperty("--mx", x.toFixed(3));
      el.style.setProperty("--my", y.toFixed(3));
    });
  };

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      const root = this.host.nativeElement;

      // Section active (scroll-spy)
      this.observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (visible) {
            this.zone.run(() => this.active.set(visible.target.id));
          }
        },
        { rootMargin: "-35% 0px -45% 0px", threshold: [0, 0.2, 0.5] }
      );
      root
        .querySelectorAll<HTMLElement>("section[id]")
        .forEach((section) => this.observer!.observe(section));

      // Apparition progressive
      this.revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in");
              this.revealObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      root
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((el) => this.revealObserver!.observe(el));

      window.addEventListener("pointermove", this.onPointer, { passive: true });
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.revealObserver?.disconnect();
    window.removeEventListener("pointermove", this.onPointer);
    window.clearTimeout(this.copyTimer);
    cancelAnimationFrame(this.frame);
  }

  tone(id: SkillAreaId): string {
    return AREA_TONE[id];
  }

  areasOf(family: string) {
    return this.areas.filter((area) => area.family === family);
  }

  hue(item: ProjectItem): number {
    const base = this.categories.find((c) => c.value === item.category)!.hue;
    return hueFromText(item.title, base) % 360;
  }

  select(category: ProjectCategory): void {
    this.category.set(category);
    this.playing.set(null);
  }

  safe(url: string | undefined): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `${url}?autoplay=1&rel=0`
    );
  }

  scrollTrack(event: Event, direction: number): void {
    const group = (event.currentTarget as HTMLElement).closest(".ah-group");
    const track = group?.querySelector<HTMLElement>(".ah-track");
    track?.scrollBy({ left: direction * 320, behavior: "smooth" });
  }

  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.profile.email);
    } catch {
      window.prompt("Copie l'adresse :", this.profile.email);
    }
    this.copied.set(true);
    window.clearTimeout(this.copyTimer);
    this.copyTimer = window.setTimeout(() => this.copied.set(false), 2000);
  }

  toTop(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
