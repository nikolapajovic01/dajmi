import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { GalleryContent } from "@/components/gallery-content";
import { PageBanner } from "@/components/page-banner";
import { getDictionary, requireLocale } from "@/lib/i18n/locale";
import { localeAlternates } from "@/lib/i18n/metadata";

const PATH = "/galerija";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = requireLocale((await params).locale);
  const { dict } = getDictionary(locale);

  return {
    title: dict.galleryPage.meta.title,
    description: dict.galleryPage.meta.description,
    alternates: localeAlternates(locale, PATH),
  };
}

export default async function GalerijaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = requireLocale((await params).locale);
  const { dict } = getDictionary(locale);
  const copy = dict.galleryPage;

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
        <GalleryContent copy={copy} locale={locale} />
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
