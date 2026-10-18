# PLAN: Time For You

Goal: renew the site with a warm but professional feel. Texts and facts stay verbatim; layout and style are proposals. Full approved plan: `.archipel/PLAN.md`.

## Open item (client)
The original text of **Wie ben ik?**, the logo and the photo ("Ikke 1.jpg") still have to be supplied. Until then the page has marked TODO placeholders.

## Approach per page
| Page | Approach | Status |
|---|---|---|
| Home | One hero with a button, welcome text verbatim, newsletter | built |
| Wie ben ik? | Photo next to text, newsletter; text is a TODO | built (text pending) |
| Behandelingen | Card grid per massage type | wireframe |
| Prijzen | Price cards, prices from `src/config` | wireframe |
| Contacteer mij | Details, hours, form | wireframe |
| Webshopje | Product grid; D1 + R2 + payment flow | wireframe |
| Recensies | Review cards from D1 | wireframe |
| CadeauBon | Explanation + order button | wireframe |
| FAQ | Expandable questions (details/summary) | wireframe |

## Design
**No site-wide colour theme.** The page itself is neutral (near-white `#fcfbf9`, dark grey text, neutral headings and links). The logo colours (`--block-*` variables in `src/styles/global.css`) are used only inside blocks: deep teal `#0d6a8a` / `#0a5470` (hero, footer, buttons), mint `#d6eae4` (newsletter, photo), cream `#fdf3dc` (welcome and text cards), turquoise `#4fb0c6` (small accents). Blocks are rounded, inset from the page edges and have a soft shadow. Serif headings, sans-serif body; mobile first; one CSS file per page/component; constants in `src/config`.

Logo: `src/assets/images/logo-time-for-you.png` (optimised by `astro:assets`). The header shows the full logo (the name is part of the image) with a small border radius and no extra name text. A transparent/horizontal logo version from the client would be cleaner and more readable at header size.

No-wrap rules: the navigation stays on one line (hamburger below 64rem; from 64rem font size and gaps scale with the viewport and links are `nowrap`); titles use clamp() font sizes and `nowrap` where needed (hero title, "Welkom. Mijn naam is Stephane.").

## Improvements over the current site
One hero instead of five identical slides, a single menu, a visible contact button, labelled links, no stray text.

## Open questions
- Opening hours "Ma-Do : 18h30" are kept as is; ask the client whether to add a closing time.
- The WhatsApp link (`wa.me/Stephane`) looks invalid, so it is not included yet; ask for the real number.
