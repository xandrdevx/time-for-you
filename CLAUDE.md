# CLAUDE.md

This file gives Claude Code context for working in this repository.

## Project overview

Rebuild of **time-for-you.be**, a massage business website (original: https://www.time-for-you.be/). Built with **Astro**, hosted on **Cloudflare**.

- Site content/UI is in **Dutch** (existing audience).
- All code — variable/function names, comments, commit messages — is written in **English**, regardless of the prompt language or the site's language.

## Tech stack

- **Framework:** Astro (built on Vite)
- **Deployment/hosting:** Cloudflare Pages
- **Backend logic:** Cloudflare Workers (API routes, payment flow)
- **Database:** Cloudflare D1
- **File/photo storage:** Cloudflare R2
- **Language:** TypeScript preferred

> Cloudflare was chosen specifically because it can be used for free in commercial/production use — keep an eye on file size and usage limits (especially R2/Workers free-tier caps) when adding dependencies or assets.

## Commands

```bash
npm run dev       # local dev server
npm run build     # production build
npm run preview   # preview production build
```

## Status

- Astro project is set up (static output, no Cloudflare adapter yet). Built: `Header`, `Footer`, `NewsletterSignup`, `BaseLayout`, Home (`/`) and Wie ben ik (`/wie-ben-ik`).
- Restyled with a soft palette from the logo (teal, turquoise, mint, cream; variables in `src/styles/global.css`). Logo lives in `src/assets/images/logo-time-for-you.png` and is used in the `Header` (lotus crop + name); logo constants are in `SITE_LOGO` (`src/config/siteConfig.ts`).
- Plan: `PLAN.md`; wireframes for all 9 pages plus the header: `docs/wireframes/`.
- If `npm run build` fails with "Cannot find native binding", run `npm install` (node_modules was installed on another platform).
- **Open item for the client:** supply the original "Wie ben ik?" text, the logo and the photo ("Ikke 1.jpg"). Until then `src/config/whoAmIContent.ts` and `src/pages/wie-ben-ik.astro` contain TODO placeholders.
- **Open questions:** opening hours "Ma-Do : 18h30" kept verbatim (ask about a closing time); the WhatsApp link `wa.me/Stephane` looks invalid and is left out of `SOCIAL_LINKS`.
- Newsletter form is UI only; storage in D1 is not built yet.

## Architecture notes

- `src/assets/images/` holds images that go through Astro's image optimisation (logo).
- `src/config/` holds site constants and verbatim page copy; `src/types/` shared types; `src/layouts/BaseLayout.astro` wraps every page; styles are in `src/styles/` (`global.css` theme + one file per page/component).

- Astro pages/components render the public site.
- Cloudflare Workers handle backend logic: API routes, webshop payment flow.
- Cloudflare D1 stores structured data: products, orders, reviews, newsletter subscribers.
- Cloudflare R2 stores product/shop photos.

## Features in scope

- **Webshop** — needs a payment flow + database-backed product/order data.
- **Reviews section** — customer reviews on the site.
- **Newsletter** — name + email signup, plus a way to send update mails to subscribers.
- **Photo management** — v1 is manual: the site owner emails photos, they get added to the files by hand. A possible v2 is an admin upload flow (there's already a separate prototype for letting the site owner self-edit the site — check that before building a new admin panel from scratch).

## Conventions

- Prefer clear, typed, OOP-friendly code where it fits Astro's structure (components/services), rather than one big procedural file.
- Keep the codebase lean — avoid heavy dependencies given the Cloudflare free-tier constraints.
- **Naming:** use human-friendly, descriptive names for every variable, function, and constant — no single-letter or cryptic abbreviations unless it's a truly trivial/local index.
- **No magic numbers (or strings):** every meaningful value gets a named constant instead of being inlined. If a value is likely to change or is reused (prices, limits, timeouts, breakpoints, API endpoints, etc.), put it in a dedicated config file (e.g. `config.ts` / `constants.ts`) rather than scattering it through the code.
- **Always try to make everything as dynamic as possible**

## Styling / CSS

- Each page gets **its own CSS file**, scoped to that page's content.
- One **global CSS file** holds the theme (colors, fonts, spacing scale, resets) and any truly shared/base styles — every page builds on top of this rather than repeating it.
- The site must be **mobile-friendly**: build layouts responsively (fluid widths, sensible breakpoints in the global theme file, touch-friendly tap targets) rather than desktop-only with an afterthought fix.

## Folder structure

- Organize by clear separation of concerns so anything can be found quickly — don't dump unrelated things in one folder.
- Give every file and folder a clear, descriptive name that says what's inside it (avoid vague names like `utils2` or `stuff`).
- Suggested starting shape (adjust to Astro's actual conventions once the repo exists):
  - `src/pages/` — one file per route
  - `src/components/` — reusable UI components
  - `src/styles/` — `global.css` (theme/reset) + one CSS file per page/component
  - `src/config/` — constants and config values (prices, limits, API endpoints, etc.)
  - `src/lib/` or `src/services/` — backend logic (Workers handlers, D1/R2 access)
  - `src/types/` — shared TypeScript types

## Version control / GitHub

- The project is hosted on **GitHub**; repo setup, branches, and remotes are managed manually by the developer for now.
- **Git permissions for Claude Code:** not yet defined. By default, don't assume permission to run git commands (commit, push, branch, etc.) — this section will be filled in later with exactly which git actions are allowed.

---

*This file was drafted from project notes before the repo existed — update the Commands and Architecture sections once real scripts/folder structure are in place.*
