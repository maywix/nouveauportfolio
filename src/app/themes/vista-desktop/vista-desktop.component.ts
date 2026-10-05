import { DecimalPipe } from "@angular/common";
import {
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
  computed,
  inject,
  signal,
} from "@angular/core";
import { ThemeService } from "../../core/theme.service";
import {
  PROFILE,
  PROJECTS,
  SKILL_AREAS,
  TIMELINE_CHRONO,
} from "../../data/portfolio.data";
import { AeroBuddyComponent } from "../../shared/aero-buddy.component";
import { VdControlComponent } from "./apps/vista-control.component";
import { VdExplorerComponent } from "./apps/vista-explorer.component";
import { VdMailComponent } from "./apps/vista-mail.component";
import { VdMessengerComponent } from "./apps/vista-messenger.component";
import { VdPlayerComponent } from "./apps/vista-player.component";
import { VdWelcomeComponent } from "./apps/vista-welcome.component";
import { VdClockComponent, VdTrayClockComponent } from "./vista-clock.component";
import {
  VdIconComponent,
  VdSpriteComponent,
} from "./vista-icons.component";
import { VdWindowComponent } from "./vista-window.component";
import { APP_DEFS, AppId, VistaWm } from "./vista-wm.service";

interface DesktopIcon {
  id: string;
  label: string;
  icon: string;
  run: () => void;
}

interface SearchEntry {
  label: string;
  hint: string;
  icon: string;
  run: () => void;
}

const BOOT_KEY = "mw.vd.booted";

const SHORT_LABEL: Record<AppId, string> = {
  welcome: "Bienvenue",
  explorer: "Projets",
  control: "Compétences",
  mail: "Parcours",
  messenger: "Contact",
  player: "Lecteur",
};

const AREA_ICON: Record<string, string> = {
  design: "palette",
  video: "film",
  ux: "skills",
  front: "globe",
  back: "database",
  frameworks: "layers",
};

const CATEGORY_ICON: Record<string, string> = {
  video: "film",
  graphic: "palette",
  threeD: "cube",
  web: "globe",
};

/**
 * Thème « Vista Desktop » : le portfolio est un bureau avec fond Aurora,
 * fenêtres Aero Glass, barre des tâches, menu Démarrer, sidebar et Flip 3D.
 */
@Component({
  selector: "app-vista-desktop",
  standalone: true,
  imports: [
    DecimalPipe,
    AeroBuddyComponent,
    VdSpriteComponent,
    VdIconComponent,
    VdWindowComponent,
    VdClockComponent,
    VdTrayClockComponent,
    VdWelcomeComponent,
    VdExplorerComponent,
    VdControlComponent,
    VdMailComponent,
    VdMessengerComponent,
    VdPlayerComponent,
  ],
  providers: [VistaWm],
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./vista-desktop.component.html",
  styleUrl: "./vista-desktop.component.css",
})
export class VistaDesktopComponent implements OnInit, OnDestroy {
  readonly wm = inject(VistaWm);
  readonly theme = inject(ThemeService);
  readonly profile = PROFILE;
  readonly shortLabel = SHORT_LABEL;

  @ViewChild("desk", { static: true }) private deskRef!: ElementRef<HTMLElement>;
  @ViewChild("searchInput") private searchInput?: ElementRef<HTMLInputElement>;
  @ViewChild("flipLayer") private flipLayer?: ElementRef<HTMLElement>;

  readonly bootState = signal<"on" | "out" | "off">("off");
  readonly shutting = signal<"normal" | "restart" | null>(null);
  readonly startOpen = signal(false);
  readonly allPrograms = signal(false);
  readonly query = signal("");
  readonly selectedIcon = signal<string | null>(null);
  readonly flipOpen = signal(false);
  readonly flipIndex = signal(0);
  readonly trashOpen = signal(false);
  readonly copyProgress = signal<number | null>(null);
  readonly coarse = signal(false);

  readonly icons: DesktopIcon[] = [
    { id: "projects", label: "Projets", icon: "projects", run: () => this.wm.open("explorer") },
    { id: "skills", label: "Compétences", icon: "skills", run: () => this.wm.open("control") },
    { id: "mail", label: "Parcours", icon: "mail", run: () => this.wm.open("mail") },
    { id: "chat", label: "Contact", icon: "messenger", run: () => this.wm.open("messenger") },
    { id: "cv", label: "CV-Maxime-Farruggia.pdf", icon: "pdf", run: () => this.downloadCv() },
    { id: "trash", label: "Corbeille", icon: "trash", run: () => this.trashOpen.set(true) },
  ];

  readonly pinned: Array<{ app: AppId; text: string }> = [
    { app: "welcome", text: "Premiers pas et présentation" },
    { app: "explorer", text: "Vidéo, graphic design, 3D, web" },
    { app: "control", text: "Outils et langages maîtrisés" },
    { app: "mail", text: "Expériences et formation" },
    { app: "messenger", text: "Discuter / me contacter" },
    { app: "player", text: "Mes vidéos" },
  ];

  readonly appDefs = APP_DEFS;

  readonly flipWindows = computed(() =>
    [...this.wm.windows()].sort((a, b) => b.z - a.z)
  );

  readonly calendar = this.buildCalendar();

  readonly results = computed<SearchEntry[]>(() => {
    const q = this.query().trim().toLowerCase();
    if (!q) {
      return [];
    }
    const found: SearchEntry[] = [];
    for (const app of Object.keys(APP_DEFS) as AppId[]) {
      const def = APP_DEFS[app];
      if (def.title.toLowerCase().includes(q)) {
        found.push({
          label: def.title,
          hint: "Programme",
          icon: def.icon,
          run: () => this.wm.open(app),
        });
      }
    }
    for (const area of SKILL_AREAS) {
      for (const skill of area.skills) {
        if (skill.toLowerCase().includes(q)) {
          found.push({
            label: skill,
            hint: `Compétence · ${area.title}`,
            icon: AREA_ICON[area.id],
            run: () => this.wm.open("control", { highlight: skill }),
          });
        }
      }
    }
    for (const project of PROJECTS) {
      if (
        project.title.toLowerCase().includes(q) ||
        project.group.toLowerCase().includes(q)
      ) {
        found.push({
          label: project.title,
          hint: `Projet · ${project.group}`,
          icon: CATEGORY_ICON[project.category],
          run: () =>
            this.wm.open("explorer", {
              category: project.category,
              select: project.title,
            }),
        });
      }
    }
    for (const entry of TIMELINE_CHRONO) {
      if (
        entry.title.toLowerCase().includes(q) ||
        entry.organisation.toLowerCase().includes(q)
      ) {
        found.push({
          label: entry.title,
          hint: `Parcours · ${entry.period}`,
          icon: "mail",
          run: () => this.wm.open("mail", { select: entry.title }),
        });
      }
    }
    return found.slice(0, 9);
  });

  private readonly zone = inject(NgZone);
  private readonly timers: number[] = [];
  private mqCompact?: MediaQueryList;
  private mqCoarse?: MediaQueryList;
  private resizeObserver?: ResizeObserver;
  private readonly onCompactChange = (e: MediaQueryListEvent): void =>
    this.wm.compact.set(e.matches);
  private readonly onCoarseChange = (e: MediaQueryListEvent): void =>
    this.coarse.set(e.matches);

  ngOnInit(): void {
    this.mqCompact = window.matchMedia("(max-width: 760px)");
    this.mqCoarse = window.matchMedia("(pointer: coarse)");
    this.wm.compact.set(this.mqCompact.matches);
    this.coarse.set(this.mqCoarse.matches);
    this.mqCompact.addEventListener("change", this.onCompactChange);
    this.mqCoarse.addEventListener("change", this.onCoarseChange);

    this.measure();
    this.zone.runOutsideAngular(() => {
      this.resizeObserver = new ResizeObserver(() =>
        this.zone.run(() => this.measure())
      );
      this.resizeObserver.observe(this.deskRef.nativeElement);
    });

    this.startSession(!this.hasBooted());
  }

  ngOnDestroy(): void {
    this.timers.forEach((id) => window.clearTimeout(id));
    this.mqCompact?.removeEventListener("change", this.onCompactChange);
    this.mqCoarse?.removeEventListener("change", this.onCoarseChange);
    this.resizeObserver?.disconnect();
  }

  /* ---------------------------------------------------------------- */
  /* Session : écran de bienvenue, arrêt, redémarrage                   */
  /* ---------------------------------------------------------------- */

  private hasBooted(): boolean {
    try {
      return sessionStorage.getItem(BOOT_KEY) === "1";
    } catch {
      return false;
    }
  }

  private startSession(withBoot: boolean): void {
    if (withBoot) {
      this.bootState.set("on");
      this.later(() => this.finishBoot(), 2400);
    } else {
      this.later(() => this.wm.open("welcome"), 120);
    }
  }

  finishBoot(): void {
    if (this.bootState() !== "on") {
      return;
    }
    try {
      sessionStorage.setItem(BOOT_KEY, "1");
    } catch {
      /* ignoré */
    }
    this.bootState.set("out");
    this.wm.open("welcome");
    this.later(() => this.bootState.set("off"), 600);
  }

  shutdown(): void {
    this.closeStart();
    const admin = this.theme.isAdmin();
    this.shutting.set(admin ? "normal" : "restart");
    this.later(() => {
      if (admin) {
        this.theme.resetToNormal();
      } else {
        this.wm.closeAll();
        this.shutting.set(null);
        this.startSession(true);
      }
    }, 1500);
  }

  private later(fn: () => void, ms: number): void {
    this.timers.push(window.setTimeout(fn, ms));
  }

  /* ---------------------------------------------------------------- */
  /* Bureau                                                              */
  /* ---------------------------------------------------------------- */

  private measure(): void {
    const el = this.deskRef.nativeElement;
    this.wm.area.set({ w: el.clientWidth, h: el.clientHeight });
  }

  onDeskDown(event: PointerEvent): void {
    const target = event.target as HTMLElement;
    if (target === this.deskRef.nativeElement || target.classList.contains("vd-icons")) {
      this.selectedIcon.set(null);
    }
    this.closeStart();
  }

  onIconClick(icon: DesktopIcon): void {
    if (this.wm.compact() || this.coarse()) {
      icon.run();
    } else {
      this.selectedIcon.set(icon.id);
    }
  }

  showDesktop(): void {
    const anyVisible = this.wm.windows().some((w) => !w.minimized);
    if (anyVisible) {
      this.wm.minimizeAll();
    } else {
      this.wm.restoreAll();
    }
    this.closeStart();
  }

  glow(event: PointerEvent): void {
    const el = event.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  }

  /* ---------------------------------------------------------------- */
  /* Menu Démarrer                                                       */
  /* ---------------------------------------------------------------- */

  toggleStart(): void {
    if (this.startOpen()) {
      this.closeStart();
      return;
    }
    this.flipOpen.set(false);
    this.startOpen.set(true);
    this.later(() => this.searchInput?.nativeElement.focus(), 60);
  }

  closeStart(): void {
    if (this.startOpen()) {
      this.startOpen.set(false);
      this.allPrograms.set(false);
      this.query.set("");
    }
  }

  downloadCvFromStart(): void {
    this.closeStart();
    this.downloadCv();
  }

  runFromStart(fn: () => void): void {
    this.closeStart();
    fn();
  }

  openApp(app: AppId): void {
    this.runFromStart(() => this.wm.open(app));
  }

  onSearch(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }

  onSearchEnter(): void {
    const first = this.results()[0];
    if (first) {
      this.runFromStart(first.run);
    }
  }

  openAdmin(): void {
    this.closeStart();
    this.theme.openPanel();
  }

  /* ---------------------------------------------------------------- */
  /* Flip 3D                                                             */
  /* ---------------------------------------------------------------- */

  openFlip(): void {
    this.closeStart();
    if (!this.wm.windows().length) {
      return;
    }
    this.flipIndex.set(this.flipWindows().length > 1 ? 1 : 0);
    this.flipOpen.set(true);
    this.later(() => this.flipLayer?.nativeElement.focus(), 30);
  }

  flipRel(index: number): number {
    const n = this.flipWindows().length;
    return (index - this.flipIndex() + n) % n;
  }

  flipStep(delta: number): void {
    const n = this.flipWindows().length;
    if (n) {
      this.flipIndex.update((i) => (i + delta + n) % n);
    }
  }

  flipCommit(index = this.flipIndex()): void {
    const target = this.flipWindows()[index];
    this.flipOpen.set(false);
    if (target) {
      this.wm.focus(target.id);
    }
  }

  onFlipKey(event: KeyboardEvent): void {
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
      case "Tab":
        event.preventDefault();
        this.flipStep(event.shiftKey && event.key === "Tab" ? -1 : 1);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        this.flipStep(-1);
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        this.flipCommit();
        break;
      case "Escape":
        this.flipOpen.set(false);
        break;
    }
  }

  onFlipWheel(event: WheelEvent): void {
    event.preventDefault();
    this.flipStep(event.deltaY > 0 ? 1 : -1);
  }

  onEscape(): void {
    if (this.flipOpen()) {
      this.flipOpen.set(false);
    } else if (this.trashOpen()) {
      this.trashOpen.set(false);
    } else {
      this.closeStart();
    }
  }

  /* ---------------------------------------------------------------- */
  /* Téléchargement du CV avec la boîte de copie                         */
  /* ---------------------------------------------------------------- */

  downloadCv(): void {
    if (this.copyProgress() !== null) {
      return;
    }
    this.copyProgress.set(0);
    const id = window.setInterval(() => {
      const next = (this.copyProgress() ?? 0) + 7 + Math.random() * 9;
      if (next >= 100) {
        window.clearInterval(id);
        this.copyProgress.set(100);
        const a = document.createElement("a");
        a.href = PROFILE.cv;
        a.download = "CV-Maxime-Farruggia.pdf";
        a.click();
        this.later(() => this.copyProgress.set(null), 450);
      } else {
        this.copyProgress.set(next);
      }
    }, 110);
    this.timers.push(id);
  }

  /* ---------------------------------------------------------------- */
  /* Calendrier du gadget                                                */
  /* ---------------------------------------------------------------- */

  private buildCalendar(): {
    title: string;
    days: Array<{ n: number | null; today: boolean }>;
  } {
    const now = new Date();
    const first = new Date(now.getFullYear(), now.getMonth(), 1);
    const total = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const offset = (first.getDay() + 6) % 7; // lundi = 0
    const days: Array<{ n: number | null; today: boolean }> = [];
    for (let i = 0; i < offset; i++) {
      days.push({ n: null, today: false });
    }
    for (let d = 1; d <= total; d++) {
      days.push({ n: d, today: d === now.getDate() });
    }
    return {
      title: now.toLocaleDateString("fr-FR", { month: "long", year: "numeric" }),
      days,
    };
  }
}
