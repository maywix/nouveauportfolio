import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

type TimelineEntry = {
  title: string;
  organisation: string;
  period: string;
  details: string;
};

@Component({
  selector: "app-timeline",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./timeline.component.html",
  styleUrl: "./timeline.component.css",
})
export class TimelineComponent {
  readonly experiences: TimelineEntry[] = [
    {
      title: "Stage – Développement web",
      organisation: "Entreprise Vassil Sculptures à Meaux",
      period: "Juin 2025 – Août 2025",
      details:
        "Refonte entière d'un site Web en HTML, CSS, JavaScript, PHP et MySQL (plus de détails sur ce stage dans mes projets).",
    },
    {
      title: "Stage de découverte de l'INA",
      organisation: "Fondation diversité et culture, égalité des chances.",
      period: "Mai 2024",
      details:
        "J'ai eu l'immense chance de pouvoir assister à ce stage lors de mon année de Terminale. Le but était de découvrir le monde de l'audiovisuel et de la production à travers le bâtiment de l'INA à Paris.",
    },
    {
      title: "Stage de 3ème",
      organisation: "Fonderie d'art Chapon à Bobigny",
      period: "Décembre 2020",
      details:
        "Stage dans une fonderie d'art de bronze. J'y ai appris des techniques comme le moulage ou la ciselure.",
    },
  ];

  readonly education: TimelineEntry[] = [
    {
      title: "BUT MMI (Métiers du Multimédia et de l'Internet)",
      organisation: "IUT de Meaux, Université Gustave Eiffel",
      period: "Septembre 2024 – Maintenant",
      details:
        "Spécialisation développement web et dispositifs interactifs. Formation qui lie audiovisuel et développement web.",
    },
    {
      title: "Baccalauréat technologique STI2D",
      organisation: "Lycée Pierre de Coubertin à Meaux",
      period: "Septembre 2022 – Juillet 2024",
      details:
        "Spécialité SIN (Systèmes d'Information et Numérique). Option audiovisuel. Bac avec mention Assez Bien.",
    },
  ];
}
