# Content to confirm with Stephane

Flagged during the migration from the live Joomla/HikaShop site
(time-for-you.be) — deliberately not resolved silently. See
`project-brief.md` and `content-nl.md` for the full source material.

## 1. Lomi Lomi price discrepancy

The live Prijzen page shows two price tables side by side with slightly
different numbers — every price matches except Lomi Lomi:

- Table A: Lomi Lomi **€120**
- Table B: Lomi Lomi **€125**

This site currently uses **€125** (from `content-nl.md`'s canonical list,
used in `src/content/treatments/lomi-lomi.json` and reflected on
`/prijzen`). Needs Stephane's confirmation before launch.

## 2. "Belly Lomi" vs "Zwangerschapsmassage" naming

- The booking form's massage-type dropdown (`/contacteer-mij`) lists
  **"Belly Lomi"** — see `src/config/booking-form.ts`.
- The treatments page lists **"Zwangerschapsmassage"** with a "Lomi style"
  blurb — see `src/content/treatments/zwangerschapsmassage.json`.

These are likely the same treatment under two different names. Confirm
which name Stephane wants to use everywhere, then unify it across both the
booking form options and the treatment entry.

## 3. Webshop catalog is a placeholder

The live site's Webshopje category pages only showed 3 category
thumbnails — individual product names, prices, and photos weren't visible
without a working shop backend (counts seen: Oliën 8, Producten 1,
Aroma's 3).

The 5 products currently in `src/content/products/` (Lavendel
massageolie, Zoete amandelolie, Amber aromadiffuser, Kalmerende body
butter, Rozenkwarts massagesteen) are placeholder examples carried over
from the earlier approved wireframe — **not the real catalog**. Their
prices are estimates, not confirmed. Real catalog (names, prices, photos)
still needed from Stephane before this page is launch-ready.

## 4. Reviews — only page 1 migrated

The live site has ~60 reviews across 5 pages (~12 per page). Only page
1's 12 reviews are in `src/content/reviews/` so far. The remaining 4
pages need to be migrated the same way once available.

## 5. Review star ratings are assumed

The live site's reviews don't carry a numeric star rating — only text,
author, and date. Every review in `src/content/reviews/` currently defaults
to **5/5 stars** (`rating` field in `src/content.config.ts`) since all
migrated reviews are strongly positive testimonials. Confirm with Stephane
whether real per-review ratings exist anywhere, otherwise this default
stands.
