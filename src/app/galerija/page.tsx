import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { GalleryContent } from "@/components/gallery-content";
import { PageBanner } from "@/components/page-banner";
import { getDictionary } from "@/lib/i18n/locale";

export async function generateMetadata(): Promise<Metadata> {
  const { dict } = await getDictionary();

  return {
    title: dict.galleryPage.meta.title,
    description: dict.galleryPage.meta.description,
  };
}

export default async function GalerijaPage() {
  const { locale, dict } = await getDictionary();
  const copy = dict.galleryPage;

  return (
    <>
      <main>
        <PageBanner
          dict={dict}
          locale={locale}
          currentPath="/galerija"
          kicker={copy.kicker}
          title={copy.title}
          lead={copy.lead}
        />
        <GalleryContent copy={copy} />
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
