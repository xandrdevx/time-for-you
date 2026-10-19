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
- **No site-wide colour theme:** the page is neutral; the logo colours (`--block-*` variables in `src/styles/global.css`) are only used inside blocks (hero, cards, newsletter, footer, buttons). Logo lives in `src/assets/images/logo-time-for-you.png` and is shown in full in the `Header` (the name is part of the logo, no extra name text, small border radius); logo constants are in `SITE_LOGO` (`src/config/siteConfig.ts`).
- Hard rules: the navbar never wraps (hamburger below 64rem, one line with scaling font/gaps from 64rem); titles must not wrap where it hurts layout (clamp() font sizes, `nowrap` where needed). Test on mobile too.
- Home starts with a photo carousel (`PhotoCarousel.astro`, `carousel.css`, slides from `src/lib/homeCarouselSlides.ts`) directly under the navbar, then the teal hero block (title + tagline, no button). Slides = every image in `src/assets/images/home-carousel/`, ordered by file name (use numeric prefixes, e.g. `01-massage-neck-and-shoulders.jpg`); alt texts per file name in `HOME_CAROUSEL` (`src/config/homeContent.ts`). No text over slides; the only overlay is the progress dots, centred at the bottom of the photo (white ring + halo, active dot blue). The carousel renders nothing while the folder is empty. It currently holds 4 photos (01–04, moved from `claude-input-files/c1–c4`).
- Home middle/bottom now mirror the original-site screenshots (`claude-input-files/home-mid.png`, `home-bottom.png`): grey band with white panel + overlapping photo, big-logo newsletter band (blue button), slim dark-green footer with © and social icons. Contact details and opening hours are not in the footer; they live in the solid `TopBar.astro` (`top-bar.css`) above the navbar (social icons left, location/phone/email/hours right; never over a photo; the WhatsApp icon is left out until a valid link exists). Missing: brick texture, woman photo behind the newsletter, visitor counter.
- Home welcome card has a photo (`src/assets/images/home-welcome.jpg`, config `HOME_WELCOME_IMAGE`). **Rule:** photos always sit in the normal flow (grid child), never behind the navbar or over text; no absolute/negative positioning. Still missing from the client: the massage hero photo and the newsletter background photo (only screenshots in `claude-input-files/`).
- Plan: `PLAN.md`; wireframes for all 9 pages plus the header: `docs/wireframes/`.
- If `npm run build` fails with "Cannot find native binding", run `npm install` (node_modules was installed on another platform).
- Wie ben ik (`/wie-ben-ik`) mirrors the original page (https://www.time-for-you.be/index.php/wie-ben-ik): a full-width banner photo directly under the navbar (`src/assets/images/wie-ben-ik/banner.jpg`, config `WHO_AM_I_BANNER`, cropped with `object-fit: cover`; on the original — `claude-input-files/wbi-banner.png` — the navbar and title sit on the photo, here it stays in the normal flow without text over it), then directly a grey band (no separate title bar or breadcrumb: the client found that too much) with a white panel (text left, portrait right; portrait below the text on mobile). Copy and image config live in `src/config/whoAmIContent.ts` (`WHO_AM_I_CONTENT`, `WHO_AM_I_IMAGE`), styles in `src/styles/who-am-i.css`. The portrait is `src/assets/images/wie-ben-ik/ikke.jpg`. The paragraphs are the site owner's real copy from `claude-input-files/wie-ben-ik-text.md`, verbatim, grouped as on the owner's screenshots (`claude-input-files/wbi-tekst-1..3.png`): `paragraphs` is a list of paragraphs, each a list of lines joined with `<br>`; the closing line comes from `SITE_CLOSING_LINE` and is not repeated in the paragraphs. The text column follows those screenshots 1:1: serif text in the heading colour, a big "Wie ben ik?" `h1` on top (the page's only title), the welcome line as plain text (`welcomeLine`), and the closing line large and dark (not red/italic/uppercase).
- **Open item for the client:** the logo is still to be supplied.
- **Open questions:** opening hours "Ma-Do : 18h30" kept verbatim (ask about a closing time); the WhatsApp link `wa.me/Stephane` looks invalid and is left out of `SOCIAL_LINKS`.
- Newsletter form is UI only; storage in D1 is not built yet.

## Deployment (GitHub Pages)

- The site is currently published on **GitHub Pages** (static, `dist/`) via `.github/workflows/deploy.yml` (checkout → `npm ci` → `npm run build` → `upload-pages-artifact` → `deploy-pages`). Cloudflare stays the planned target for backend features.
- **Repo setting required:** GitHub → Settings → Pages → Source = **GitHub Actions**. With "Deploy from a branch", Jekyll runs on the raw repo and fails on the `---` blocks of `.astro` files.
- `public/.nojekyll` is copied into `dist/` as an extra guard against Jekyll processing.
- `astro.config.mjs` sets `site` and `base` (defaults `https://xandrdevx.github.io` + `/time-for-you`; override with env `SITE_URL` / `SITE_BASE_PATH`). With a custom domain on the root use `SITE_BASE_PATH=/` and add a `CNAME` in `public/`.
- Internal links must go through `buildSitePath()` (`src/lib/sitePaths.ts`); never hardcode `href="/..."`. Use `stripSiteBase()` to compare `Astro.url.pathname` with config paths.

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
