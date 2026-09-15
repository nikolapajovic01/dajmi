import { notFound } from "next/navigation";
import {
  defaultLocale,
  dictionaries,
  isLocale,
  type Dictionary,
  type Locale,
} from "./dictionaries";

export function htmlLang(locale: Locale) {
  return locale === "cnr" ? "sr-ME" : "en";
}

export function resolveLocale(value: string | undefined | null): Locale {
  if (isLocale(value)) {
    return value;
  }
  return defaultLocale;
}

export function requireLocale(value: string | undefined | null): Locale {
  if (!isLocale(value)) {
    notFound();
  }
  return value;
}

export function getDictionary(locale: Locale): { locale: Locale; dict: Dictionary } {
  return {
    locale,
    dict: dictionaries[locale] as Dictionary,
  };
}
