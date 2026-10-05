export type ThemeId =
  | "classic"
  | "vista-desktop"
  | "aero-horizon"
  | "aero-cinema";

export interface ThemeInfo {
  id: ThemeId;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
}

/** Registre des thèmes affichés dans le panneau d'administration. */
export const THEMES: ThemeInfo[] = [
  {
    id: "classic",
    name: "Mode normal",
    tagline: "Ton site actuel",
    description:
      "Le portfolio d'origine : teal profond, jaune pâle, typographie aérée et animations GSAP.",
    tags: ["Teal & jaune", "Minimal"],
  },
  {
    id: "vista-desktop",
    name: "Vista Desktop",
    tagline: "Le portfolio est un bureau Windows Vista",
    description:
      "Fond Aurora, fenêtres Aero Glass déplaçables, menu Démarrer, barre des tâches, sidebar, Flip 3D. Chaque section est une application (Explorateur, Panneau de configuration, Mail, Messenger, Media Player).",
    tags: ["Fenêtres", "Aero Glass", "Skeuomorphe"],
  },
  {
    id: "aero-horizon",
    name: "Aero Horizon",
    tagline: "Ciel, bulles et gloss Web 2.0",
    description:
      "Landing lumineuse façon Frutiger Aero « nature » : ciel bleu, collines vertes, bulles flottantes, mascotte gel, onglets aqua et timeline en cours d'eau.",
    tags: ["Nature", "Bulles", "Clair"],
  },
  {
    id: "aero-cinema",
    name: "Aero Cinéma",
    tagline: "Media Center sombre et reflets",
    description:
      "Application plein écran façon Windows Media Center / Media Player 11 : menu géant, coverflow avec reflets, compétences en playlist, parcours en barre de lecture.",
    tags: ["Sombre", "Coverflow", "Cinéma"],
  },
];

export function isThemeId(value: unknown): value is ThemeId {
  return THEMES.some((theme) => theme.id === value);
}
