# L'Aubergeade — site web

Site vitrine du restaurant L'Aubergeade (bistrot français, 17 rue Chaligny,
75012 Paris), construit avec Next.js (App Router), TypeScript et Tailwind CSS.

Refonte du site précédent (une page sur la plateforme Eatbu/DISH) : mêmes
informations (carte, horaires, adresse, mentions légales), design propre à la
marque.

## Développement

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app` — layout, page et métadonnées SEO (App Router)
- `src/components` — sections de la page (Hero, Menu, À propos, Contact, ...)
- `src/data/site.ts` — contenu du site : coordonnées, horaires, carte complète
  avec les prix, mentions légales — source unique de vérité pour le contenu

## Notes

- La galerie utilise des emplacements visuels temporaires en attendant de
  vraies photographies du restaurant (salle, terrasse, plats, équipe).
- Les formulaires de réservation et de contact ouvrent un e-mail pré-rempli
  (`mailto:`), le site étant statique et sans backend.
- La carte des lieux utilise l'intégration Google Maps standard (sans clé
  API).

## Build

```bash
npm run build
npm run lint
```
