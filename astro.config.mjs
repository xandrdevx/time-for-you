import { defineConfig } from 'astro/config';

// Deployment target. Override via environment variables (see .github/workflows/deploy.yml).
// With a custom domain on the root, set SITE_BASE_PATH to "/" and SITE_URL to that domain.
const DEFAULT_SITE_URL = 'https://xandrdevx.github.io';
const DEFAULT_SITE_BASE_PATH = '/time-for-you';

export default defineConfig({
  site: process.env.SITE_URL ?? DEFAULT_SITE_URL,
  base: process.env.SITE_BASE_PATH ?? DEFAULT_SITE_BASE_PATH,
});
