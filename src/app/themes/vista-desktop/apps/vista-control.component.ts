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
import { SKILL_AREAS, SkillAreaId } from "../../../data/portfolio.data";
import { VdIconComponent } from "../vista-icons.component";
import { VistaWm } from "../vista-wm.service";

const AREA_ICON: Record<SkillAreaId, string> = {
  design: "palette",
  video: "film",
  ux: "skills",
  front: "globe",
  back: "database",
  frameworks: "layers",
};

const AREA_TEXT: Record<SkillAreaId, string> = {
  design: "Photographie, illustration, mise en page et 3D",
  video: "Montage vidéo et animation",
  ux: "Maquettes et prototypes d'interfaces",
  front: "Les langages du navigateur",
  back: "Serveur, bases de données et langages",
  frameworks: "Outils de mise en forme",
};

interface FlatSkill {
  name: string;
  area: string;
  family: string;
  icon: string;
}

/** « Panneau de configuration » : les compétences en catégories de liens. */
@Component({
  selector: "vd-control",
  standalone: true,
  imports: [VdIconComponent],
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./vista-control.component.html",
  styleUrl: "./vista-control.component.css",
})
export class VdControlComponent implements OnChanges {
  @Input() props: Record<string, unknown> = {};

  readonly areas = SKILL_AREAS;
  readonly classic = signal(false);
  readonly query = signal("");
  readonly flash = signal<string | null>(null);

  private readonly wm = inject(VistaWm);

  readonly filtered = computed(() => {
    const q = this.query().trim().toLowerCase();
    return this.areas
      .map((area) => ({
        area,
        skills: area.skills.filter(
          (skill) =>
            !q ||
            skill.toLowerCase().includes(q) ||
            area.title.toLowerCase().includes(q)
        ),
      }))
      .filter((entry) => entry.skills.length);
  });

  readonly flat = computed<FlatSkill[]>(() =>
    this.filtered()
      .flatMap(({ area, skills }) =>
        skills.map((name) => ({
          name,
          area: area.title,
          family: area.family,
          icon: AREA_ICON[area.id],
        }))
      )
      .sort((a, b) => a.name.localeCompare(b.name, "fr"))
  );

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes["props"]) {
      return;
    }
    const highlight = this.props["highlight"] as string | undefined;
    if (highlight) {
      this.query.set("");
      this.flash.set(highlight);
      window.setTimeout(() => this.flash.set(null), 2600);
    }
  }

  icon(id: SkillAreaId): string {
    return AREA_ICON[id];
  }

  text(id: SkillAreaId): string {
    return AREA_TEXT[id];
  }

  onSearch(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }

  openProjects(): void {
    this.wm.open("explorer");
  }

  openContact(): void {
    this.wm.open("messenger");
  }
}
