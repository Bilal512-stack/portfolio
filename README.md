# Portfolio – Nguele Issa

React + TypeScript + Vite.

## Lancer

```bash
pnpm install
pnpm dev        # développement
pnpm build      # build de production dans dist/
```

## Modifier le contenu

- `src/data/projects.ts` : tes projets (titre, texte, technos, `repo`, `demo`, `image`)
- `src/data/profile.ts` : présentation, email, pseudo GitHub, compétences, parcours
- `public/projects/` : captures d'écran des projets (ex : `kwantabit.png`, puis `image: "/projects/kwantabit.png"`)

## Déployer sur Vercel

Pousse le dossier sur GitHub, puis importe le dépôt sur Vercel. Il détecte Vite tout seul
(commande de build `pnpm build`, dossier de sortie `dist`).
