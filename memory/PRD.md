# Quantum — RV University Physics & Quantum Computing Club

## Current direction (updated 2026-11-18)

> A public, frontend-only club website for RV University's Physics & Quantum Computing Club.
> No login, no faculty portal. Four pages: Home, About, Books, News. One type family across
> the site (IBM Plex Sans), light theme by default with a dark toggle, small fixed navbar,
> black footer.

## Pages

- **Home** — hero, mission split, CSS Bloch-sphere visual, lead physics story, three-book
  shelf, join CTA.
- **About** — what the club does, the three faculty leads with portrait avatars.
- **Books** (`/resources`) — six quantum mechanics texts, each linking to the publisher:
  Griffiths (CUP), Sakurai & Napolitano (CUP), Shankar (Springer), Nielsen & Chuang (CUP),
  Feynman Lectures Vol. III (Caltech, free), Dirac (OUP). Covers from Open Library.
- **News** (`/updates`) — recent Quanta Magazine physics stories with images and outbound links.

## Stack

- React 19 + CRA/CRACO, React Router v7, Tailwind + shadcn/ui primitives, lucide-react.
- Fonts: IBM Plex Sans only (body, headings, eyebrows). `.font-serif` / `.font-mono`
  utilities are overridden in `index.css` so every face resolves to the same family.
- Theme: `ThemeContext` — defaults to light, persists under `quantum-theme-v2`.
- Data: `src/data/seed.js` (`FACULTY`, `BOOKS`, `NEWS`).

## What was removed

- Faculty login page, faculty dashboard, `/faculty` routes and footer portal link.
- Notes / PPT categories, fake download counters and toasts.
- Equation ticker, invented club statistics, blog photo gallery, sample posthog snippet.
- Playfair Display / Jura / JetBrains Mono and the per-section font overrides.

## Backlog

- Replace placeholder faculty portraits with real photos and add designations/research areas.
- Optionally move `BOOKS` / `NEWS` data behind a small CMS or JSON file per page.
- Add a contact form (currently `mailto:`).
