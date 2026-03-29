# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` — dev server (localhost:3000)
- `npm run build` — production build (output in `build/`)
- `npm test` — run tests (Jest via react-scripts, interactive watch mode)
- `npm test -- --watchAll=false` — run tests non-interactively

## Deployment

Hosted on a DigitalOcean VPS with Apache. Deploy by running `npm run build` on the server, then `sudo systemctl restart apache2`. Apache serves the `build/` directory via SSL config at `/etc/apache2/sites-enabled/000-default-le-ssl.conf`. Domain is through NameCheap, SSL via Certbot.

## Architecture

Create React App project (React 18) with Emotion + MUI for styling and react-router-dom v6 for routing.

**Routes** (defined in `App.jsx`):
- `/` → Home (landing page with Navbar, Hero, About, Projects sections separated by Gradient dividers)
- `/resume` → Resume (PDF viewer using react-pdf)

**Key files:**
- `src/constants.js` — shared color palette (`colors`) and `projectsList` array used by the Projects component
- `src/components/shared/` — reusable components (Gradient dividers, styled Links)
- Each component lives in its own folder with `index.jsx` + `style.css`

**Styling approach:** Mix of plain CSS files (per-component `style.css`), Emotion's `css` prop (`/** @jsxImportSource @emotion/react */`), and MUI components. The `colors` object in `constants.js` is the source of truth for the color palette.
