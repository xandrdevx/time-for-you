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
Sand, terracotta and sage palette; serif headings, sans-serif body; mobile first; theme in `src/styles/global.css`, one CSS file per page/component; constants in `src/config`.

## Improvements over the current site
One hero instead of five identical slides, a single menu, a visible contact button, labelled links, no stray text.

## Open questions
- Opening hours "Ma-Do : 18h30" are kept as is; ask the client whether to add a closing time.
- The WhatsApp link (`wa.me/Stephane`) looks invalid, so it is not included yet; ask for the real number.
