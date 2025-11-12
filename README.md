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
