import { cookies } from "next/headers";
import {
  defaultLocale,
  dictionaries,
  isLocale,
  LOCALE_COOKIE,
  type Dictionary,
  type Locale,
} from "./dictionaries";

export function htmlLang(locale: Locale) {
  return locale === "cnr" ? "cnr" : "en";
}

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const stored = cookieStore.get(LOCALE_COOKIE)?.value;
  return isLocale(stored) ? stored : defaultLocale;
}

export async function getDictionary(): Promise<{ locale: Locale; dict: Dictionary }> {
  const locale = await getLocale();
  return {
    locale,
    dict: dictionaries[locale] as Dictionary,
  };
}
