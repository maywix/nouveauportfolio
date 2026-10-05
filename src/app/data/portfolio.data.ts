/**
 * Contenu du portfolio partagé par les thèmes Frutiger Aero.
 * (Le thème « classique » conserve ses propres données inline.)
 */

export const PROFILE = {
  firstName: "MAXIME",
  lastName: "FARRUGGIA",
  fullName: "Maxime Farruggia",
  role: "Motion designer & développeur web",
  chips: [
    "Montage Vidéo",
    "Développement Web",
    "3D",
    "Motion/Graphic Design",
  ],
  about:
    "Je suis Maxime, motion designer & développeur web. J'explore le design d'interfaces, la vidéo et l'expérience utilisateur.",
  contactIntro:
    "Une idée de projet ? Une collaboration ? N'hésitez pas à me contacter pour discuter de vos besoins.",
  cvText:
    "Je suis actuellement à la recherche d'un stage de 13 semaines dans le domaine de l'audiovisuel ou du développement web. Vous pouvez télécharger mon CV en cliquant sur le bouton ci-dessous.",
  availability: "Recherche un stage de 13 semaines",
  email: "farruggiamaxime@gmail.com",
  github: "https://github.com/maywix",
  linkedin: "https://www.linkedin.com/in/maxime-farruggia-24b015339/",
  cv: "assets/CV-Maxime-Farruggia.pdf",
};

/* ------------------------------------------------------------------ */
/* Compétences                                                          */
/* ------------------------------------------------------------------ */

export type SkillAreaId =
  | "design"
  | "video"
  | "ux"
  | "front"
  | "back"
  | "frameworks";

export interface SkillArea {
  id: SkillAreaId;
  /** Grande famille (Design/Création ou Développement web). */
  family: string;
  title: string;
  skills: string[];
}

export const SKILL_AREAS: SkillArea[] = [
  {
    id: "design",
    family: "Design/Création",
    title: "Design",
    skills: ["Photoshop", "Illustrator", "InDesign", "Lightroom", "Blender"],
  },
  {
    id: "video",
    family: "Design/Création",
    title: "Vidéo, Motion Design",
    skills: ["Premiere Pro", "After Effects"],
  },
  {
    id: "ux",
    family: "Design/Création",
    title: "UX/UI Design",
    skills: ["Figma"],
  },
  {
    id: "front",
    family: "Développement web",
    title: "Front-end",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "back",
    family: "Développement web",
    title: "Back-end",
    skills: ["PHP", "MySQL", "Python", "C++ / C# / Java"],
  },
  {
    id: "frameworks",
    family: "Développement web",
    title: "Frameworks",
    skills: ["Bootstrap", "Tailwind CSS"],
  },
];

/* ------------------------------------------------------------------ */
/* Projets                                                              */
/* ------------------------------------------------------------------ */

export type ProjectCategory = "video" | "graphic" | "threeD" | "web";

export interface ProjectCategoryInfo {
  value: ProjectCategory;
  label: string;
  /** Libellé court pour les petits espaces. */
  short: string;
  /** Teinte (0-360) utilisée pour les vignettes générées. */
  hue: number;
}

export const PROJECT_CATEGORIES: ProjectCategoryInfo[] = [
  {
    value: "video",
    label: "Montage vidéo / Motion design",
    short: "Vidéo & Motion",
    hue: 12,
  },
  { value: "graphic", label: "Graphic design", short: "Graphic design", hue: 285 },
  { value: "threeD", label: "3D", short: "3D", hue: 200 },
  { value: "web", label: "Développement web", short: "Web", hue: 135 },
];

/** Élément de projet à plat, indépendant de la catégorie. */
export interface ProjectItem {
  category: ProjectCategory;
  /** Nom du groupe (« Montage vidéo », « Identités visuelles »…). */
  group: string;
  groupDescription?: string;
  title: string;
  description: string;
  /** Pour les vidéos. */
  embedUrl?: string;
  /** Pour les sites web. */
  link?: string;
  /** Légende de type affichée dans les interfaces. */
  kind: string;
}

interface VideoSection {
  title: string;
  items: Array<{ title: string; description: string; embedUrl: string }>;
}

interface Carousel {
  title: string;
  description?: string;
  slides: Array<{ title: string; description: string; link?: string }>;
}

const VIDEO_SECTIONS: VideoSection[] = [
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

const GRAPHIC_CAROUSELS: Carousel[] = [
  {
    title: "Identités visuelles",
    description:
      "Brand books, déclinaisons print et cohérence multi-supports pour des marques en lancement.",
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
    description:
      "Campagnes grand format et séries limitées avec un soin porté aux textures et finitions.",
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
    description:
      "Templates dynamiques pensés pour engager les communautés sur tous les formats clés.",
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

const THREE_D_CAROUSELS: Carousel[] = [
  {
    title: "Modélisation",
    description:
      "Pièces détaillées ou low-poly, optimisées pour l'animation comme pour le temps réel.",
    slides: [
      {
        title: "Mobilier futuriste",
        description: "Concept chaise générée dans Blender avec matériaux PBR.",
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
    description:
      "Expérimentations autour des lumières, textures réalistes et ambiances narratives.",
    slides: [
      {
        title: "Still life produits",
        description:
          "Set luxe avec HDRI, caustiques et depth of field réaliste.",
      },
      {
        title: "Environnement nocturne",
        description: "Lighting volumétrique et post-process dans Unreal Engine.",
      },
      {
        title: "Character rim light",
        description: "Portrait 3D stylisé, shading peau et rim dramatique.",
      },
    ],
  },
];

const WEB_CAROUSELS: Carousel[] = [
  {
    title: "Applications web",
    description:
      "Interfaces orientées produit avec design systems maintenables et workflows fluides.",
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
    description:
      "Expériences immersives qui valorisent la marque tout en restant performantes.",
    slides: [
      {
        title: "Studio créatif",
        description: "Animations GSAP, typographie variable et assets optimisés.",
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

function fromCarousels(
  category: ProjectCategory,
  kind: string,
  carousels: Carousel[]
): ProjectItem[] {
  return carousels.flatMap((carousel) =>
    carousel.slides.map((slide) => ({
      category,
      group: carousel.title,
      groupDescription: carousel.description,
      title: slide.title,
      description: slide.description,
      link: slide.link,
      kind,
    }))
  );
}

export const PROJECTS: ProjectItem[] = [
  ...VIDEO_SECTIONS.flatMap((section) =>
    section.items.map(
      (item): ProjectItem => ({
        category: "video",
        group: section.title,
        title: item.title,
        description: item.description,
        embedUrl: item.embedUrl,
        kind: section.title === "Motion design" ? "Motion design" : "Vidéo",
      })
    )
  ),
  ...fromCarousels("graphic", "Moodboard & maquettes", GRAPHIC_CAROUSELS),
  ...fromCarousels("threeD", "Rendus & lighting", THREE_D_CAROUSELS),
  ...fromCarousels("web", "Site web", WEB_CAROUSELS),
];

export function projectsOf(category: ProjectCategory): ProjectItem[] {
  return PROJECTS.filter((project) => project.category === category);
}

/** Regroupe une liste de projets par nom de groupe (ordre conservé). */
export function groupProjects(
  items: ProjectItem[]
): Array<{ title: string; description?: string; items: ProjectItem[] }> {
  const groups: Array<{
    title: string;
    description?: string;
    items: ProjectItem[];
  }> = [];
  for (const item of items) {
    let group = groups.find((entry) => entry.title === item.group);
    if (!group) {
      group = { title: item.group, description: item.groupDescription, items: [] };
      groups.push(group);
    }
    group.items.push(item);
  }
  return groups;
}

/** Teinte stable (0-360) dérivée d'un texte, pour les vignettes générées. */
export function hueFromText(text: string, base = 0): number {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = (hash * 31 + text.charCodeAt(i)) % 360;
  }
  return (base + hash) % 360;
}

/* ------------------------------------------------------------------ */
/* Parcours                                                             */
/* ------------------------------------------------------------------ */

export interface TimelineEntry {
  kind: "experience" | "education";
  title: string;
  organisation: string;
  period: string;
  details: string;
  /** Date de début (AAAA-MM), pour le tri chronologique. */
  start: string;
}

export const EXPERIENCES: TimelineEntry[] = [
  {
    kind: "experience",
    title: "Stage – Développement web",
    organisation: "Entreprise Vassil Sculptures à Meaux",
    period: "Juin 2025 – Août 2025",
    start: "2025-06",
    details:
      "Refonte entière d'un site Web en HTML, CSS, JavaScript, PHP et MySQL (plus de détails sur ce stage dans mes projets).",
  },
  {
    kind: "experience",
    title: "Stage de découverte de l'INA",
    organisation: "Fondation diversité et culture, égalité des chances.",
    period: "Mai 2024",
    start: "2024-05",
    details:
      "J'ai eu l'immense chance de pouvoir assister à ce stage lors de mon année de Terminale. Le but était de découvrir le monde de l'audiovisuel et de la production à travers le bâtiment de l'INA à Paris.",
  },
  {
    kind: "experience",
    title: "Stage de 3ème",
    organisation: "Fonderie d'art Chapon à Bobigny",
    period: "Décembre 2020",
    start: "2020-12",
    details:
      "Stage dans une fonderie d'art de bronze. J'y ai appris des techniques comme le moulage ou la ciselure.",
  },
];

export const EDUCATION: TimelineEntry[] = [
  {
    kind: "education",
    title: "BUT MMI (Métiers du Multimédia et de l'Internet)",
    organisation: "IUT de Meaux, Université Gustave Eiffel",
    period: "Septembre 2024 – Maintenant",
    start: "2024-09",
    details:
      "Spécialisation développement web et dispositifs interactifs. Formation qui lie audiovisuel et développement web.",
  },
  {
    kind: "education",
    title: "Baccalauréat technologique STI2D",
    organisation: "Lycée Pierre de Coubertin à Meaux",
    period: "Septembre 2022 – Juillet 2024",
    start: "2022-09",
    details:
      "Spécialité SIN (Systèmes d'Information et Numérique). Option audiovisuel. Bac avec mention Assez Bien.",
  },
];

/** Tout le parcours, du plus ancien au plus récent. */
export const TIMELINE_CHRONO: TimelineEntry[] = [...EXPERIENCES, ...EDUCATION].sort(
  (a, b) => a.start.localeCompare(b.start)
);

export const EXPERIENCES_LABEL = "Expériences professionnelles";
export const EDUCATION_LABEL = "Formation & Diplômes";

export const NAV_LABELS = {
  presentation: "Présentation",
  competences: "Compétences",
  projets: "Projets",
  parcours: "Parcours",
  contact: "Contact",
};
