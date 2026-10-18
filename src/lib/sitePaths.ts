const ROOT_PATH = '/';
const TRAILING_SLASH_PATTERN = /\/$/;

// Astro's configured base path without a trailing slash ("" when the site is served from the root).
const SITE_BASE = import.meta.env.BASE_URL.replace(TRAILING_SLASH_PATTERN, '');

/** Prefixes an absolute site path (e.g. "/prijzen") with the configured base path. */
export function buildSitePath(path: string): string {
  return `${SITE_BASE}${path}`;
}

/** Removes the base path and trailing slash from a URL pathname, so it can be compared with config paths. */
export function stripSiteBase(pathname: string): string {
  const withoutBase = pathname.startsWith(SITE_BASE) ? pathname.slice(SITE_BASE.length) : pathname;
  return withoutBase.replace(TRAILING_SLASH_PATTERN, '') || ROOT_PATH;
}
