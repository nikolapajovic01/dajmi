import { defaultLocale, type Locale } from "./dictionaries";

/** Prefix an internal path for the active locale. External URLs pass through. */
export function withLocale(locale: Locale, path: string): string {
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:") ||
    path.startsWith("#")
  ) {
    return path;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;

  if (locale === "en") {
    if (normalized === "/") return "/en";
    return `/en${normalized}`;
  }

  return normalized;
}

/** Remove `/en` or `/cnr` prefix from a pathname. */
export function stripLocale(pathname: string): string {
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const rest = pathname.slice(3);
    return rest === "" ? "/" : rest;
  }

  if (pathname === "/cnr" || pathname.startsWith("/cnr/")) {
    const rest = pathname.slice(4);
    return rest === "" ? "/" : rest;
  }

  return pathname || "/";
}

/** Swap the locale segment while keeping the same page path. */
export function swapLocale(pathname: string, nextLocale: Locale): string {
  return withLocale(nextLocale, stripLocale(pathname));
}

export function localeFromPathname(pathname: string): Locale {
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return "en";
  }
  return defaultLocale;
}

export function localizeHref(
  locale: Locale,
  href: string,
): string {
  return withLocale(locale, href);
}
