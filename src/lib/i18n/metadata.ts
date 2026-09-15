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
      "sr-ME": cnrPath,
      en: enPath,
      "x-default": cnrPath,
    } as Record<string, string>,
  };
}

export function absoluteUrl(path: string) {
  return new URL(path, SITE.url).toString();
}

/**
 * Full page metadata (title, description, alternates, OpenGraph, Twitter card).
 * Next.js does not deep-merge `openGraph`/`twitter` between a layout and a page,
 * so every route must set its own or it silently inherits the parent's — use this
 * on every `generateMetadata` instead of returning a bare title/description.
 */
export function pageMetadata(
  locale: Locale,
  path: string,
  meta: { title: string; description: string },
  ogAlt: string,
): Metadata {
  return {
    title: meta.title,
    description: meta.description,
    alternates: localeAlternates(locale, path),
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: locale === "cnr" ? "sr_ME" : "en_US",
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: "/og.jpg",
          width: 1200,
          height: 630,
          alt: ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/og.jpg"],
    },
  };
}
