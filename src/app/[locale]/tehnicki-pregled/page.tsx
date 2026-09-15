import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { InspectionContent } from "@/components/inspection-content";
import { PageBanner } from "@/components/page-banner";
import { getDictionary, requireLocale } from "@/lib/i18n/locale";
import { pageMetadata } from "@/lib/i18n/metadata";

const PATH = "/tehnicki-pregled";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = requireLocale((await params).locale);
  const { dict } = getDictionary(locale);

  return pageMetadata(locale, PATH, dict.inspectionPage.meta, dict.meta.ogAlt);
}

export default async function TehnickiPregledPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = requireLocale((await params).locale);
  const { dict } = getDictionary(locale);
  const copy = dict.inspectionPage;

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
        <InspectionContent copy={copy} hours={dict.hours} locale={locale} />
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
