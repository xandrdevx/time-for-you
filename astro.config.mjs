// Astro configuration for the Time For You website.
//
// NOTE on `output`: this phase of the project only ships static content
// (see project brief — Cloudflare Workers/D1/R2 come in a later phase).
// We still install and configure the Cloudflare adapter now, with
// `output: 'server'`, so the project never needs a structural rewrite when
// the webshop/booking backend is added. Every current page is static, so
// each one opts in to prerendering with `export const prerender = true;`.
// Future dynamic routes (API endpoints, server-rendered checkout, etc.)
// simply omit that line.
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    imageService: 'compile',
  }),
});
