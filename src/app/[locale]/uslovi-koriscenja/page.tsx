import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { LegalContent } from "@/components/legal-content";
import { PageBanner } from "@/components/page-banner";
import { getDictionary, requireLocale } from "@/lib/i18n/locale";
import { pageMetadata } from "@/lib/i18n/metadata";

const PATH = "/uslovi-koriscenja";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = requireLocale((await params).locale);
  const { dict } = getDictionary(locale);

  return pageMetadata(locale, PATH, dict.termsPage.meta, dict.meta.ogAlt);
}

export default async function UsloviKoriscenjaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = requireLocale((await params).locale);
  const { dict } = getDictionary(locale);
  const copy = dict.termsPage;

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
