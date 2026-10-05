import { NgTemplateOutlet } from "@angular/common";
import {
  AfterViewInit,
  Component,
  DestroyRef,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
  computed,
  effect,
  inject,
  signal,
} from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import {
  EDUCATION_LABEL,
  EXPERIENCES_LABEL,
  PROFILE,
  PROJECT_CATEGORIES,
  ProjectCategory,
  ProjectItem,
  SKILL_AREAS,
  SkillAreaId,
  TIMELINE_CHRONO,
  hueFromText,
  projectsOf,
} from "../../data/portfolio.data";
import { ThemeService } from "../../core/theme.service";
import { AeroBuddyComponent } from "../../shared/aero-buddy.component";

type PageId = "accueil" | "projets" | "competences" | "parcours" | "contact";

const AREA_HUE: Record<SkillAreaId, number> = {
  design: 318,
  video: 22,
  ux: 268,
  front: 190,
  back: 128,
  frameworks: 222,
};

const AREA_GLYPH: Record<SkillAreaId, string> = {
  design: "palette",
  video: "film",
  ux: "sliders",
  front: "globe",
  back: "db",
  frameworks: "layers",
};

/**
 * Thème « Aero Cinéma » : application plein écran sombre façon Windows
 * Media Center / Media Player 11 — menu géant, coverflow à reflets, playlist,
 * barre de lecture.
 */
@Component({
  selector: "app-aero-cinema",
  standalone: true,
  imports: [NgTemplateOutlet, AeroBuddyComponent],
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./aero-cinema.component.html",
  styleUrl: "./aero-cinema.component.css",
})
export class AeroCinemaComponent implements AfterViewInit {
  readonly profile = PROFILE;
  readonly categories = PROJECT_CATEGORIES;
  readonly areas = SKILL_AREAS;
  readonly timeline = TIMELINE_CHRONO;
  readonly experiencesLabel = EXPERIENCES_LABEL;
  readonly educationLabel = EDUCATION_LABEL;

  readonly pages: Array<{ id: PageId; label: string }> = [
    { id: "accueil", label: "accueil" },
    { id: "projets", label: "projets" },
    { id: "competences", label: "compétences" },
    { id: "parcours", label: "parcours" },
    { id: "contact", label: "contact" },
  ];

  /* ---- état global ---- */
  readonly page = signal<PageId>("accueil");
  readonly pageIndex = computed(() =>
    this.pages.findIndex((p) => p.id === this.page())
  );
  readonly shift = signal(0);
  readonly calm = signal(
    typeof matchMedia === "function" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  readonly imgFailed = signal(false);
  readonly now = signal(new Date());

  /* ---- projets ---- */
  readonly category = signal<ProjectCategory>("video");
  readonly items = computed(() => projectsOf(this.category()));
  readonly index = signal(0);
  readonly current = computed(() => this.items()[this.index()]);
  readonly theater = signal<ProjectItem | null>(null);

  /* ---- compétences ---- */
  readonly areaIndex = signal(0);
  readonly area = computed(() => this.areas[this.areaIndex()]);
  readonly playingSkill = signal<string | null>(null);

  /* ---- parcours ---- */
  readonly tIndex = signal(this.timeline.length - 1);
  readonly tCurrent = computed(() => this.timeline[this.tIndex()]);
  readonly tPct = computed(
    () => (this.tIndex() / (this.timeline.length - 1)) * 100
  );
  readonly autoplay = signal(false);

  @ViewChildren("stripItem") private stripItems!: QueryList<ElementRef<HTMLElement>>;
  @ViewChild("closeBtn") private closeBtn?: ElementRef<HTMLButtonElement>;

  private readonly sanitizer = inject(DomSanitizer);
  private readonly themeService = inject(ThemeService);
  private readonly destroyRef = inject(DestroyRef);
  private pointerStart: { x: number; y: number } | null = null;
  private lastWheel = 0;
  private autoplayTimer = 0;

  private readonly onKey = (event: KeyboardEvent): void => this.handleKey(event);
  private readonly onResize = (): void => this.measureStrip();

  constructor() {
    effect(() => {
      this.page();
      this.autoplay();
      requestAnimationFrame(() => this.measureStrip());
    });

    effect(() => {
      window.clearInterval(this.autoplayTimer);
      if (this.autoplay() && this.page() === "parcours") {
        this.autoplayTimer = window.setInterval(() => {
          this.tIndex.update((i) => (i + 1) % this.timeline.length);
        }, 4200);
      }
    });

    const clock = window.setInterval(() => this.now.set(new Date()), 15000);
    window.addEventListener("keydown", this.onKey);
    window.addEventListener("resize", this.onResize);
    this.destroyRef.onDestroy(() => {
      window.clearInterval(clock);
      window.clearInterval(this.autoplayTimer);
      window.removeEventListener("keydown", this.onKey);
      window.removeEventListener("resize", this.onResize);
    });
  }

  ngAfterViewInit(): void {
    this.measureStrip();
    document.fonts?.ready.then(() => this.measureStrip());
  }

  /* ---------------------------------------------------------------- */
  /* Navigation                                                          */
  /* ---------------------------------------------------------------- */

  go(id: PageId): void {
    this.theater.set(null);
    this.page.set(id);
  }

  step(delta: number): void {
    const n = this.pages.length;
    const next = (this.pageIndex() + delta + n) % n;
    this.go(this.pages[next].id);
  }

  private measureStrip(): void {
    const el = this.stripItems?.get(this.pageIndex())?.nativeElement;
    if (!el) {
      return;
    }
    const pad = Math.max(20, Math.min(120, window.innerWidth * 0.07));
    this.shift.set(pad - el.offsetLeft);
  }

  get clock(): string {
    return this.now().toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  get date(): string {
    return this.now().toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  }

  /* ---------------------------------------------------------------- */
  /* Projets                                                             */
  /* ---------------------------------------------------------------- */

  pick(category: ProjectCategory): void {
    this.category.set(category);
    this.index.set(0);
  }

  moveCover(delta: number): void {
    const n = this.items().length;
    this.index.update((i) => Math.min(n - 1, Math.max(0, i + delta)));
  }

  stepCategory(delta: number): void {
    const n = this.categories.length;
    const i = this.categories.findIndex((c) => c.value === this.category());
    this.pick(this.categories[(i + delta + n) % n].value);
  }

  hue(item: ProjectItem): number {
    const base = this.categories.find((c) => c.value === item.category)!.hue;
    return hueFromText(item.title, base) % 360;
  }

  activate(item: ProjectItem): void {
    if (item.embedUrl) {
      this.theater.set(item);
      requestAnimationFrame(() => this.closeBtn?.nativeElement.focus());
    } else if (item.link) {
      window.open(item.link, "_blank", "noopener,noreferrer");
    }
  }

  safe(url: string | undefined): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `${url}?autoplay=1&rel=0`
    );
  }

  onFlowDown(event: PointerEvent): void {
    this.pointerStart = { x: event.clientX, y: event.clientY };
  }

  onFlowUp(event: PointerEvent): void {
    const start = this.pointerStart;
    this.pointerStart = null;
    if (!start) {
      return;
    }
    const dx = event.clientX - start.x;
    if (Math.abs(dx) > 44 && Math.abs(dx) > Math.abs(event.clientY - start.y)) {
      this.moveCover(dx < 0 ? 1 : -1);
    }
  }

  onFlowWheel(event: WheelEvent): void {
    const dominant =
      Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
    if (Math.abs(dominant) < 6) {
      return;
    }
    event.preventDefault();
    const now = performance.now();
    if (now - this.lastWheel > 220) {
      this.lastWheel = now;
      this.moveCover(dominant > 0 ? 1 : -1);
    }
  }

  /* ---------------------------------------------------------------- */
  /* Compétences                                                         */
  /* ---------------------------------------------------------------- */

  selectArea(i: number): void {
    const n = this.areas.length;
    this.areaIndex.set((i + n) % n);
    this.playingSkill.set(null);
  }

  areaHue(id: SkillAreaId): number {
    return AREA_HUE[id];
  }

  areaGlyph(id: SkillAreaId): string {
    return AREA_GLYPH[id];
  }

  pad(n: number): string {
    return n < 10 ? `0${n}` : `${n}`;
  }

  togglePlay(skill: string): void {
    this.playingSkill.update((current) => (current === skill ? null : skill));
  }

  /* ---------------------------------------------------------------- */
  /* Parcours                                                            */
  /* ---------------------------------------------------------------- */

  markerPct(i: number): number {
    return (i / (this.timeline.length - 1)) * 100;
  }

  moveTimeline(delta: number): void {
    const n = this.timeline.length;
    this.tIndex.update((i) => Math.min(n - 1, Math.max(0, i + delta)));
  }

  shortDate(period: string): string {
    const abbreviations: Record<string, string> = {
      janvier: "janv.",
      février: "févr.",
      septembre: "sept.",
      octobre: "oct.",
      novembre: "nov.",
      décembre: "déc.",
      juillet: "juil.",
    };
    const start = period.split("–")[0].trim();
    const [month, year] = start.split(" ");
    const key = month.toLowerCase();
    return `${abbreviations[key] ?? key} ${year ?? ""}`.trim();
  }

  /* ---------------------------------------------------------------- */
  /* Clavier                                                             */
  /* ---------------------------------------------------------------- */

  private handleKey(event: KeyboardEvent): void {
    const target = event.target as HTMLElement | null;
    if (
      this.themeService.panelOpen() ||
      event.ctrlKey ||
      event.altKey ||
      event.metaKey ||
      target?.closest("input, textarea, select, [contenteditable='true']")
    ) {
      return;
    }

    if (event.key === "Escape" && this.theater()) {
      this.theater.set(null);
      return;
    }
    if (this.theater()) {
      return;
    }

    const page = this.page();
    switch (event.key) {
      case "PageDown":
        event.preventDefault();
        this.step(1);
        break;
      case "PageUp":
        event.preventDefault();
        this.step(-1);
        break;
      case "ArrowRight":
      case "ArrowLeft": {
        const d = event.key === "ArrowRight" ? 1 : -1;
        event.preventDefault();
        if (page === "projets") {
          this.moveCover(d);
        } else if (page === "parcours") {
          this.moveTimeline(d);
        } else if (page === "competences") {
          this.selectArea(this.areaIndex() + d);
        } else {
          this.step(d);
        }
        break;
      }
      case "ArrowUp":
      case "ArrowDown":
        if (page === "projets") {
          event.preventDefault();
          this.stepCategory(event.key === "ArrowDown" ? 1 : -1);
        }
        break;
      case "Enter":
        if (page === "projets" && target?.tagName !== "BUTTON" && target?.tagName !== "A") {
          const item = this.current();
          if (item) {
            this.activate(item);
          }
        }
        break;
      default:
        if (/^[1-5]$/.test(event.key)) {
          this.go(this.pages[Number(event.key) - 1].id);
        }
    }
  }
}
