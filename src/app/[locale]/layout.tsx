import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { locales } from "@/lib/i18n/dictionaries";
import { getDictionary, requireLocale } from "@/lib/i18n/locale";
import { pageMetadata } from "@/lib/i18n/metadata";
import { SITE } from "@/lib/site-config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = requireLocale(raw);
  const { dict } = getDictionary(locale);

  return {
    metadataBase: new URL(SITE.url),
    applicationName: SITE.name,
    ...pageMetadata(locale, "/", dict.meta, dict.meta.ogAlt),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = requireLocale(raw);
  const { dict } = getDictionary(locale);

  return (
    <>
      <JsonLd dict={dict} />
      {children}
    </>
  );
}
