import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { locales } from "@/lib/i18n/dictionaries";
import { getDictionary, requireLocale } from "@/lib/i18n/locale";
import { localeAlternates } from "@/lib/i18n/metadata";
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
    title: dict.meta.title,
    description: dict.meta.description,
    applicationName: SITE.name,
    alternates: localeAlternates(locale, "/"),
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: locale === "cnr" ? "cnr_ME" : "en_US",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [
        {
          url: "/og.jpg",
          width: 1200,
          height: 630,
          alt: dict.meta.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: ["/og.jpg"],
    },
    icons: {
      icon: "/dajmi-logo-transparent.png",
    },
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
