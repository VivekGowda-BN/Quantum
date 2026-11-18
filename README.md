# Quantum

The website for **Quantum**, the Theoretical Physics & Quantum Computing Club at RV University, Bengaluru.

A public, frontend-only site with four pages — Home, About, Books and News — written in React.

## Pages

- **Home** — hero, what the club does, a CSS Bloch-sphere visual, the latest physics story, and a short reading list.
- **About** — how the club runs, and the faculty leads.
- **Books** — a shelf of standard quantum mechanics texts, each linked to the publisher.
- **News** — recent physics stories from Quanta Magazine, with images and outbound links.

## Stack

- React 19 with Create React App / CRACO
- React Router v7
- Tailwind CSS with shadcn/ui primitives
- lucide-react icons
- IBM Plex Sans throughout, light theme by default with a dark toggle

## Project layout

```
frontend/          React application
  public/          static assets, favicon
  src/
    components/    navbar, footer, page hero, scroll-reveal wrapper
    context/       theme provider
    data/seed.js   faculty, book and news content
    pages/         Home, About, Books, News
backend/           FastAPI stub (not used by the deployed site)
memory/            project notes
```

## Run locally

```bash
cd frontend
npm install
npm start
```

The app runs at <http://localhost:3000>.

To build for production:

```bash
cd frontend
npm run build
```

## Deploy on Vercel

The site lives in `frontend/`, so when importing the repository into Vercel set:

- **Framework preset:** Create React App
- **Root Directory:** `frontend`
- **Build command:** `npm run build`
- **Output directory:** `build`

## Content

All faculty, book and news data is in [`frontend/src/data/seed.js`](frontend/src/data/seed.js). Update that file to change the people, the reading list or the stories shown on the site.

## Contact

quantum@rvu.edu.in
