// Content collection schemas for the Time For You website.
// See project-brief.md for the source of these shapes.
//
// Astro's Content Layer API requires this file at src/content.config.ts
// (not src/content/config.ts) and a loader per collection. Each collection
// here is one JSON file per entry, so the `glob` loader is the right fit —
// it derives each entry's id from its filename (e.g. "lomi-lomi.json" ->
// id "lomi-lomi"), which matches our slug convention.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const treatments = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/treatments' }),
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    shortDescription: z.string(),
    price: z.number(),
    // Present only for treatments that already have long-form detail copy.
    // The rest fall back to a "more info coming soon" message on their
    // detail page — see src/pages/behandelingen/[slug].astro.
    fullDescription: z.string().optional(),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/products' }),
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    category: z.enum(['olien', 'producten', 'aromas']),
    price: z.number(),
  }),
});

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/reviews' }),
  schema: z.object({
    author: z.string(),
    date: z.string(), // dd-mm-yy, as shown on the live site
    text: z.string(),
    // The live site's reviews don't carry a numeric rating — every entry
    // currently defaults to 5 (see CONTENT_TODO.md). Override per-entry
    // once real per-review ratings are available.
    rating: z.number().min(1).max(5).default(5),
  }),
});

export const collections = { treatments, products, reviews };
