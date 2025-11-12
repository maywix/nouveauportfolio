import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

type ProjectCategory = "video" | "graphic" | "threeD" | "web";

type VideoSection = {
  title: string;
  items: Array<{
    title: string;
    description: string;
    embedUrl: string;
  }>;
};

type CarouselSlide = {
  title: string;
  description: string;
  link?: string;
};

type Carousel = {
  title: string;
  slides: CarouselSlide[];
};

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.css",
})
export class ProjectsComponent {
  readonly categoryOptions: Array<{ label: string; value: ProjectCategory }> = [
    { label: "Montage vidéo / Motion design", value: "video" },
    { label: "Graphic design", value: "graphic" },
    { label: "3D", value: "threeD" },
    { label: "Développement web", value: "web" },
  ];

  readonly videoSections: VideoSection[] = [
    {
      title: "Montage vidéo",
      items: [
        {
          title: "Aftermovie - Placeholder",
          description:
            "Montage dynamique avec transitions rythmées et sound design immersif.",
          embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          title: "Interview - Placeholder",
          description:
            "Montage d'interview avec habillage graphique et sous-titrage.",
          embedUrl: "https://www.youtube.com/embed/oHg5SJYRHA0",
        },
      ],
    },
    {
      title: "Motion design",
      items: [
        {
          title: "Explainer animé - Placeholder",
          description:
            "Séquence motion design illustrant un produit digital en flat design.",
          embedUrl: "https://www.youtube.com/embed/2vjPBrBU-TM",
        },
        {
          title: "Identité animée - Placeholder",
          description:
            "Animation de logo et typographie cinétique pour une direction artistique.",
          embedUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
        },
      ],
    },
  ];

  readonly graphicCarousels: Carousel[] = [
    {
      title: "Identités visuelles",
      slides: [
        {
          title: "Branding café",
          description:
            "Palette douce, packaging éco-responsable et déclinaisons réseaux.",
        },
        {
          title: "Rebrand tech",
          description:
            "Système modulaire, pictogrammes sur mesure et guidelines complètes.",
        },
        {
          title: "Studio photo",
          description:
            "Logo minimaliste, monogramme et brochures pour un studio créatif.",
        },
      ],
    },
    {
      title: "Affiches & print",
      slides: [
        {
          title: "Festival musique",
          description:
            "Affiche typographique avec textures grainées et déclinaisons web.",
        },
        {
          title: "Expo immersive",
          description:
            "Série d'affiches néon avec effets de profondeur et QR codes.",
        },
        {
          title: "Campagne associative",
          description:
            "Set de flyers et roll-ups en double langue, mise en page accessible.",
        },
      ],
    },
    {
      title: "Social media",
      slides: [
        {
          title: "Stories mode",
          description:
            "Animations verticales, typographie audacieuse et filtres photo.",
        },
        {
          title: "Lancements produit",
          description: "Carrousels Instagram avec mockups 3D et CTA optimisés.",
        },
        {
          title: "Calendrier éditorial",
          description:
            "Templates adaptables pour publications LinkedIn & TikTok.",
        },
      ],
    },
  ];

  readonly threeDCarousels: Carousel[] = [
    {
      title: "Modélisation",
      slides: [
        {
          title: "Mobilier futuriste",
          description:
            "Concept chaise générée dans Blender avec matériaux PBR.",
        },
        {
          title: "Architecture low-poly",
          description: "Scène urbaine stylisée optimisée pour le temps réel.",
        },
        {
          title: "VFX props",
          description: "Accessoires sci-fi, UV clean et textures 4K.",
        },
      ],
    },
    {
      title: "Rendu & lighting",
      slides: [
        {
          title: "Still life produits",
          description:
            "Set luxe avec HDRI, caustiques et depth of field réaliste.",
        },
        {
          title: "Environnement nocturne",
          description:
            "Lighting volumétrique et post-process dans Unreal Engine.",
        },
        {
          title: "Character rim light",
          description: "Portrait 3D stylisé, shading peau et rim dramatique.",
        },
      ],
    },
  ];

  readonly webCarousels: Carousel[] = [
    {
      title: "Applications web",
      slides: [
        {
          title: "Dashboard analytics",
          description: "Interface responsive avec charts custom et dark mode.",
          link: "https://example.com/dashboard",
        },
        {
          title: "Plateforme e-learning",
          description: "Parcours utilisateur gamifié, accessibilité niveau AA.",
          link: "https://example.com/e-learning",
        },
        {
          title: "Portail évènementiel",
          description: "Intégration Angular & API headless pour billetterie.",
          link: "https://example.com/event",
        },
      ],
    },
    {
      title: "Sites vitrines",
      slides: [
        {
          title: "Studio créatif",
          description:
            "Animations GSAP, typographie variable et assets optimisés.",
          link: "https://example.com/studio",
        },
        {
          title: "Restaurant gastronomique",
          description:
            "Menu interactif, réservation en ligne et micro-interactions.",
          link: "https://example.com/restaurant",
        },
        {
          title: "Portfolio photo",
          description: "Galerie masonry, lazy loading et mode clair/sombre.",
          link: "https://example.com/photo",
        },
      ],
    },
  ];

  readonly graphicIndices = this.graphicCarousels.map(() => 0);
  readonly threeDIndices = this.threeDCarousels.map(() => 0);
  readonly webIndices = this.webCarousels.map(() => 0);

  activeCategory: ProjectCategory = "video";
  readonly maxVisibility = 3;

  constructor(private readonly sanitizer: DomSanitizer) {}

  selectCategory(category: ProjectCategory): void {
    this.activeCategory = category;
  }

  previousSlide(group: "graphic" | "threeD" | "web", index: number): void {
    const { indices } = this.resolveGroup(group);
    indices[index] = Math.max(0, indices[index] - 1);
  }

  nextSlide(group: "graphic" | "threeD" | "web", index: number): void {
    const { carousels, indices } = this.resolveGroup(group);
    const total = carousels[index].slides.length;
    indices[index] = Math.min(total - 1, indices[index] + 1);
  }

  getSlide(group: "graphic" | "threeD" | "web", index: number): CarouselSlide {
    const { carousels, indices } = this.resolveGroup(group);
    return carousels[index].slides[indices[index]];
  }

  getCarouselStyles(
    group: "graphic" | "threeD" | "web",
    carouselIndex: number,
    slideIndex: number
  ): Record<string, string> {
    const { indices } = this.resolveGroup(group);
    const active = indices[carouselIndex];
    const offset = (active - slideIndex) / this.maxVisibility;
    const absOffset = Math.abs(active - slideIndex) / this.maxVisibility;
    const direction = Math.sign(active - slideIndex);
    const hidden = Math.abs(active - slideIndex) > this.maxVisibility;
    const faded = Math.abs(active - slideIndex) >= this.maxVisibility;
    const zIndex = (100 - Math.abs(active - slideIndex)).toString();

    return {
      "--active": active === slideIndex ? "1" : "0",
      "--offset": offset.toString(),
      "--direction": direction.toString(),
      "--abs-offset": absOffset.toString(),
      "pointer-events": active === slideIndex ? "auto" : "none",
      opacity: faded ? "0" : "1",
      display: hidden ? "none" : "block",
      "z-index": zIndex,
    };
  }

  canGoPrev(group: "graphic" | "threeD" | "web", index: number): boolean {
    const { indices } = this.resolveGroup(group);
    return indices[index] > 0;
  }

  canGoNext(group: "graphic" | "threeD" | "web", index: number): boolean {
    const { carousels, indices } = this.resolveGroup(group);
    return indices[index] < carousels[index].slides.length - 1;
  }

  toSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  private resolveGroup(group: "graphic" | "threeD" | "web"): {
    carousels: Carousel[];
    indices: number[];
  } {
    switch (group) {
      case "graphic":
        return {
          carousels: this.graphicCarousels,
          indices: this.graphicIndices,
        };
      case "threeD":
        return { carousels: this.threeDCarousels, indices: this.threeDIndices };
      case "web":
      default:
        return { carousels: this.webCarousels, indices: this.webIndices };
    }
  }
}
