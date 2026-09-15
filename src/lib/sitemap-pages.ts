import { SITE } from "@/lib/site-config";

/** Date of the last commit that changed page content (dictionaries.ts). Bump on every content change. */
export const CONTENT_LAST_MODIFIED = "2026-09-15";

export const SITEMAP_PAGES = [
  { path: "/", title: "Početna" },
  { path: "/o-nama", title: "O nama" },
  { path: "/usluge", title: "Usluge" },
  { path: "/tehnicki-pregled", title: "Tehnički pregled" },
  { path: "/galerija", title: "Galerija" },
  { path: "/kontakt", title: "Kontakt" },
  { path: "/politika-privatnosti", title: "Politika privatnosti" },
  { path: "/uslovi-koriscenja", title: "Uslovi korišćenja" },
] as const;

export function sitemapUrl(path: string) {
  return new URL(path, SITE.url).toString();
}
