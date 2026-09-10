import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { LegalContent } from "@/components/legal-content";
import { PageBanner } from "@/components/page-banner";
import { getDictionary, requireLocale } from "@/lib/i18n/locale";
import { localeAlternates } from "@/lib/i18n/metadata";

const PATH = "/politika-privatnosti";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = requireLocale((await params).locale);
  const { dict } = getDictionary(locale);

  return {
    title: dict.privacyPage.meta.title,
    description: dict.privacyPage.meta.description,
    alternates: localeAlternates(locale, PATH),
  };
}

export default async function PolitikaPrivatnostiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = requireLocale((await params).locale);
  const { dict } = getDictionary(locale);
  const copy = dict.privacyPage;

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
        <LegalContent copy={copy} />
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
