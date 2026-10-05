import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
  computed,
  inject,
  signal,
} from "@angular/core";
import {
  PROFILE,
  PROJECT_CATEGORIES,
  ProjectCategory,
  ProjectItem,
  groupProjects,
  hueFromText,
  projectsOf,
} from "../../../data/portfolio.data";
import { VdIconComponent } from "../vista-icons.component";
import { VistaWm } from "../vista-wm.service";

type ViewMode = "tiles" | "list" | "details";

const CATEGORY_ICON: Record<ProjectCategory, string> = {
  video: "film",
  graphic: "palette",
  threeD: "cube",
  web: "globe",
};

const VIEW_LABEL: Record<ViewMode, string> = {
  tiles: "Grandes icônes",
  list: "Liste",
  details: "Détails",
};

/** Explorateur de fichiers : les projets sont des « fichiers » à parcourir. */
@Component({
  selector: "vd-explorer",
  standalone: true,
  imports: [VdIconComponent],
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./vista-explorer.component.html",
  styleUrl: "./vista-explorer.component.css",
})
export class VdExplorerComponent implements OnChanges {
  @Input() props: Record<string, unknown> = {};

  readonly categories = PROJECT_CATEGORIES;
  readonly viewModes: ViewMode[] = ["tiles", "list", "details"];
  readonly viewLabel = VIEW_LABEL;
  readonly profile = PROFILE;

  readonly category = signal<ProjectCategory>("video");
  readonly view = signal<ViewMode>("tiles");
  readonly query = signal("");
  readonly selected = signal<ProjectItem | null>(null);
  readonly viewMenu = signal(false);
  readonly history = signal<ProjectCategory[]>(["video"]);
  readonly cursor = signal(0);

  readonly info = computed(
    () => this.categories.find((c) => c.value === this.category())!
  );

  readonly items = computed(() => {
    const q = this.query().trim().toLowerCase();
    return projectsOf(this.category()).filter(
      (item) =>
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.group.toLowerCase().includes(q)
    );
  });

  readonly groups = computed(() => groupProjects(this.items()));
  readonly canBack = computed(() => this.cursor() > 0);
  readonly canForward = computed(() => this.cursor() < this.history().length - 1);

  private readonly wm = inject(VistaWm);

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes["props"]) {
      return;
    }
    const category = this.props["category"] as ProjectCategory | undefined;
    if (category && category !== this.category()) {
      this.go(category);
    }
    const select = this.props["select"] as string | undefined;
    if (select) {
      const item = projectsOf(this.category()).find((p) => p.title === select);
      this.selected.set(item ?? null);
    }
  }

  icon(category: ProjectCategory): string {
    return CATEGORY_ICON[category];
  }

  hue(item: ProjectItem): number {
    return hueFromText(item.title, this.info().hue);
  }

  go(category: ProjectCategory, record = true): void {
    this.category.set(category);
    this.selected.set(null);
    this.query.set("");
    if (record) {
      const trimmed = this.history().slice(0, this.cursor() + 1);
      trimmed.push(category);
      this.history.set(trimmed);
      this.cursor.set(trimmed.length - 1);
    }
  }

  back(): void {
    if (this.canBack()) {
      this.cursor.update((c) => c - 1);
      this.go(this.history()[this.cursor()], false);
    }
  }

  forward(): void {
    if (this.canForward()) {
      this.cursor.update((c) => c + 1);
      this.go(this.history()[this.cursor()], false);
    }
  }

  select(item: ProjectItem, event?: Event): void {
    event?.stopPropagation();
    this.selected.set(item);
  }

  open(item: ProjectItem | null): void {
    if (!item) {
      return;
    }
    if (item.embedUrl) {
      this.wm.open("player", { video: item.title });
    } else if (item.link) {
      window.open(item.link, "_blank", "noopener,noreferrer");
    }
  }

  openLabel(item: ProjectItem | null): string {
    if (!item) {
      return "Ouvrir";
    }
    return item.embedUrl ? "Lire" : item.link ? "Ouvrir le site" : "Ouvrir";
  }

  canOpen(item: ProjectItem | null): boolean {
    return !!item && !!(item.embedUrl || item.link);
  }

  setView(mode: ViewMode): void {
    this.view.set(mode);
    this.viewMenu.set(false);
  }

  onSearch(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
    this.selected.set(null);
  }

  /** Navigation clavier dans la liste (flèches, Entrée). */
  onKey(event: KeyboardEvent): void {
    const list = this.items();
    if (!list.length) {
      return;
    }
    const current = this.selected();
    const index = current ? list.indexOf(current) : -1;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      this.selected.set(list[Math.min(list.length - 1, index + 1)]);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      this.selected.set(list[Math.max(0, index - 1)]);
    } else if (event.key === "Enter") {
      this.open(current);
    }
  }
}
