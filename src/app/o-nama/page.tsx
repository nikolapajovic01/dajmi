import type { Metadata } from "next";
import { AboutContent } from "@/components/about-content";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { getDictionary } from "@/lib/i18n/locale";

export async function generateMetadata(): Promise<Metadata> {
  const { dict } = await getDictionary();

  return {
    title: dict.aboutPage.meta.title,
    description: dict.aboutPage.meta.description,
  };
}

export default async function ONamaPage() {
  const { locale, dict } = await getDictionary();
  const copy = dict.aboutPage;

  return (
    <>
      <main>
        <PageBanner
          dict={dict}
          locale={locale}
          currentPath="/o-nama"
          kicker={copy.kicker}
          title={copy.title}
          lead={copy.lead}
        />
        <AboutContent about={dict.about} units={dict.units} copy={copy} />
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
