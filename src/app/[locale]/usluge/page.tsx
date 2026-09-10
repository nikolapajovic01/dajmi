import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { ServicesContent } from "@/components/services-content";
import { getDictionary, requireLocale } from "@/lib/i18n/locale";
import { localeAlternates } from "@/lib/i18n/metadata";

const PATH = "/usluge";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = requireLocale((await params).locale);
  const { dict } = getDictionary(locale);

  return {
    title: dict.servicesPage.meta.title,
    description: dict.servicesPage.meta.description,
    alternates: localeAlternates(locale, PATH),
  };
}

export default async function UslugePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = requireLocale((await params).locale);
  const { dict } = getDictionary(locale);
  const copy = dict.servicesPage;

  return (
    <>
      <main>
        <PageBanner
          dict={dict}
          locale={locale}
          currentPath={PATH}
          kicker={copy.kicker}
          title={copy.title}
          lead={copy.lead}
        />
        <ServicesContent copy={copy} hours={dict.hours} locale={locale} />
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
