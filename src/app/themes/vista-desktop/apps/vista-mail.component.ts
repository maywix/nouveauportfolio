import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
  computed,
  signal,
} from "@angular/core";
import {
  EDUCATION,
  EDUCATION_LABEL,
  EXPERIENCES,
  EXPERIENCES_LABEL,
  PROFILE,
  TIMELINE_CHRONO,
  TimelineEntry,
} from "../../../data/portfolio.data";
import { VdIconComponent } from "../vista-icons.component";

type Folder = "inbox" | "experience" | "education";

/** « Courrier » : le parcours sous forme d'une boîte de réception à 3 volets. */
@Component({
  selector: "vd-mail",
  standalone: true,
  imports: [VdIconComponent],
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./vista-mail.component.html",
  styleUrl: "./vista-mail.component.css",
})
export class VdMailComponent implements OnChanges {
  @Input() props: Record<string, unknown> = {};

  readonly profile = PROFILE;
  readonly folders: Array<{ id: Folder; label: string; count: number }> = [
    { id: "inbox", label: "Boîte de réception", count: TIMELINE_CHRONO.length },
    { id: "experience", label: EXPERIENCES_LABEL, count: EXPERIENCES.length },
    { id: "education", label: EDUCATION_LABEL, count: EDUCATION.length },
  ];

  readonly folder = signal<Folder>("inbox");
  readonly selected = signal<TimelineEntry | null>(null);
  readonly read = signal<ReadonlySet<string>>(new Set());

  readonly messages = computed(() => {
    const all = [...TIMELINE_CHRONO].reverse();
    switch (this.folder()) {
      case "experience":
        return all.filter((m) => m.kind === "experience");
      case "education":
        return all.filter((m) => m.kind === "education");
      default:
        return all;
    }
  });

  readonly unread = computed(
    () => TIMELINE_CHRONO.filter((m) => !this.read().has(m.title)).length
  );

  readonly folderTitle = computed(
    () => this.folders.find((f) => f.id === this.folder())!.label
  );

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes["props"]) {
      return;
    }
    const select = this.props["select"] as string | undefined;
    const entry = TIMELINE_CHRONO.find((m) => m.title === select);
    if (entry) {
      this.folder.set("inbox");
      this.choose(entry);
    }
  }

  go(folder: Folder): void {
    this.folder.set(folder);
    this.selected.set(null);
  }

  choose(entry: TimelineEntry): void {
    this.selected.set(entry);
    this.read.update((set) => new Set(set).add(entry.title));
  }

  isUnread(entry: TimelineEntry): boolean {
    return !this.read().has(entry.title);
  }

  onKey(event: KeyboardEvent): void {
    const list = this.messages();
    const current = this.selected();
    const index = current ? list.indexOf(current) : -1;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      this.choose(list[Math.min(list.length - 1, index + 1)]);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      this.choose(list[Math.max(0, index - 1)]);
    }
  }

  newMessage(): string {
    return `mailto:${this.profile.email}`;
  }

  askAbout(entry: TimelineEntry | null): string {
    const subject = entry
      ? `À propos de : ${entry.title}`
      : "Une question sur votre parcours";
    return `mailto:${this.profile.email}?subject=${encodeURIComponent(subject)}`;
  }

  kindLabel(entry: TimelineEntry): string {
    return entry.kind === "experience" ? EXPERIENCES_LABEL : EDUCATION_LABEL;
  }
}
