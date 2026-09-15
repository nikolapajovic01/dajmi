import type { Metadata } from "next";
import { AboutContent } from "@/components/about-content";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { getDictionary, requireLocale } from "@/lib/i18n/locale";
import { pageMetadata } from "@/lib/i18n/metadata";

const PATH = "/o-nama";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = requireLocale((await params).locale);
  const { dict } = getDictionary(locale);

  return pageMetadata(locale, PATH, dict.aboutPage.meta, dict.meta.ogAlt);
}

export default async function ONamaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = requireLocale((await params).locale);
  const { dict } = getDictionary(locale);
  const copy = dict.aboutPage;

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
        <AboutContent about={dict.about} units={dict.units} copy={copy} locale={locale} />
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
