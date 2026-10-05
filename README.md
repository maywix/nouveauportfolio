# nouveauportfolio

Application Angular découpée en composants pour le portfolio de Maxime Farruggia.

## Démarrage rapide

1. Installer les dépendances :
   ```bash
   npm install
   ```
2. Lancer le serveur de développement :
   ```bash
   npm start
   ```
3. Ouvrir le navigateur sur `http://localhost:4200/`.

## Notes

- TailwindCSS et GSAP sont chargés via CDN / dépendance npm pour conserver la configuration initiale.
- Le HTML d'origine est réparti dans plusieurs composants Angular (`src/app/components`).
- Les animations (overlay, héro et reveal des sections) sont gérées avec GSAP au sein des composants.

## Thèmes : mode normal + 3 versions Frutiger Aero

Le site existe en **4 apparences**, sélectionnables depuis un panneau d'administration :

| Thème (`id`)    | Nom           | Principe                                                                                                                                                     |
| --------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `classic`       | Mode normal   | Le site d'origine, inchangé.                                                                                                                                 |
| `vista-desktop` | Vista Desktop | Le portfolio est un **bureau Windows Vista** : fond Aurora, fenêtres Aero Glass (déplaçables, redimensionnables), menu Démarrer avec recherche, Flip 3D, sidebar. Chaque section est une appli (Explorateur, Panneau de configuration, Courrier, Discussion, Lecteur). |
| `aero-horizon`  | Aero Horizon  | Frutiger Aero « nature » : ciel, soleil, nuages, collines, bulles de savon, verre blanc, boutons gel, parcours en cours d'eau.                                |
| `aero-cinema`   | Aero Cinéma   | Application plein écran sombre façon **Media Center / Media Player 11** : menu géant, coverflow à reflets, compétences en playlist, parcours en barre de lecture. |

### Utiliser le panneau admin

- Ouvrir : ajouter `#admin` à l'URL (`https://…/#admin`) ou presser **Ctrl + Alt + A**.
- Mot de passe par défaut : **`aero`** → à changer (voir ci-dessous).
- Cliquer sur une carte pour activer un thème (effet immédiat). Une puce flottante reste visible en mode admin :
  **Admin** (rouvre le panneau) et **Mode normal** (retour immédiat au site d'origine, depuis n'importe quel thème).
- Le choix est mémorisé **dans le navigateur de l'admin uniquement** (`localStorage`). Les visiteurs voient toujours `publicTheme`.

### Publier un thème pour tous les visiteurs

Dans `src/app/config/site.config.ts`, changer `publicTheme` (le bouton « Copier la config » d'une carte
fournit la ligne exacte), puis rebuild/redéployer :

```ts
publicTheme: "aero-horizon",
```

### Changer le mot de passe

`adminPasscodeHash` est l'empreinte SHA-256 de `maywix:<mot de passe>`. Pour en générer une, dans la console du navigateur :

```js
crypto.subtle
  .digest("SHA-256", new TextEncoder().encode("maywix:MON_MOT_DE_PASSE"))
  .then((b) => console.log([...new Uint8Array(b)].map((x) => x.toString(16).padStart(2, "0")).join("")));
```

> ⚠ Il s'agit d'un verrou **côté client** : il masque la personnalisation, il ne protège aucune donnée sensible.

### Organisation du code

```
src/app/
  app.component.*            sélecteur de thème (@switch + @defer : les thèmes Aero sont chargés à la demande)
  config/                    site.config.ts (thème public, mot de passe) · themes.ts (registre)
  core/theme.service.ts      thème actif, session admin, localStorage, attribut <html data-theme>
  admin/                     panneau « Personnalisation » + puce flottante
  data/portfolio.data.ts     contenu partagé par les 3 thèmes Aero
  shared/aero-buddy.*        mascotte « gel » en SVG (recolorable)
  themes/
    classic/                 layout d'origine (logique GSAP déplacée depuis l'ancien AppComponent)
    vista-desktop/           gestionnaire de fenêtres + apps (explorateur, panneau, courrier, discussion, lecteur)
    aero-horizon/
    aero-cinema/
src/assets/aero/buddy-green.webp   mascotte de la page d'accueil d'Aero Cinéma (PNG/WebP à canal alpha)
```

- Les thèmes Aero n'utilisent **pas** Tailwind : tout est en CSS préfixé (`vd-`, `ah-`, `ac-`, `mwa-`), robuste face au preflight de Tailwind.
- Le contenu du mode normal reste dans ses composants d'origine ; les thèmes Aero lisent `data/portfolio.data.ts`
  (penser à y reporter une modification de contenu si on veut qu'elle apparaisse partout).
- Raccourcis d'Aero Cinéma : `←` `→` (élément), `↑` `↓` (catégorie), `PgUp` `PgDn` ou `1`–`5` (sections), `Entrée` (lire/ouvrir), `Échap`.
- Le budget de taille par style de composant (`angular.json`) a été relevé à 30 ko / 50 ko pour les thèmes (chargés à la demande, sans effet sur le poids initial).
- `dist/` est versionné dans ce dépôt : il n'est **pas** régénéré ici, relancer `npm run build` avant de déployer.
