import { ThemeId } from "./themes";

export const SITE_CONFIG: {
  /**
   * Thème vu par TOUS les visiteurs.
   * Le choix fait dans le panneau admin n'est mémorisé que dans le navigateur
   * de l'admin (localStorage) : pour publier un thème, change cette valeur
   * puis redéploie.
   */
  publicTheme: ThemeId;
  /**
   * Empreinte SHA-256 de « maywix:<mot de passe> ».
   * Mot de passe par défaut : `aero`  → à CHANGER.
   * Générer une nouvelle empreinte (dans la console du navigateur) :
   *   crypto.subtle.digest("SHA-256", new TextEncoder().encode("maywix:MOT_DE_PASSE"))
   *     .then(b => console.log([...new Uint8Array(b)].map(x => x.toString(16).padStart(2, "0")).join("")))
   *
   * ⚠ Ce verrou est purement côté client : il protège le bouton de
   * personnalisation, pas des données sensibles.
   */
  adminPasscodeHash: string;
} = {
  publicTheme: "classic",
  adminPasscodeHash:
    "e77f46d38863cde63b72ae28a5e9eb498ecb23085ad80d9eb1cb0ffbfc74952c",
};
