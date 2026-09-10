import type { Metadata } from "next";
import type { Locale } from "./dictionaries";
import { withLocale } from "./paths";
import { SITE } from "@/lib/site-config";

/** Canonical + hreflang alternates for a bare (unprefixed) path like `/o-nama`. */
export function localeAlternates(locale: Locale, path: string): Metadata["alternates"] {
  const cnrPath = withLocale("cnr", path);
  const enPath = withLocale("en", path);

  return {
    canonical: withLocale(locale, path),
    languages: {
      cnr: cnrPath,
      en: enPath,
      "x-default": cnrPath,
    } as Record<string, string>,
  };
}

export function absoluteUrl(path: string) {
  return new URL(path, SITE.url).toString();
}
