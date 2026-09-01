import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { LegalContent } from "@/components/legal-content";
import { PageBanner } from "@/components/page-banner";
import { getDictionary } from "@/lib/i18n/locale";

export async function generateMetadata(): Promise<Metadata> {
  const { dict } = await getDictionary();

  return {
    title: dict.termsPage.meta.title,
    description: dict.termsPage.meta.description,
  };
}

export default async function UsloviKoriscenjaPage() {
  const { locale, dict } = await getDictionary();
  const copy = dict.termsPage;

  return (
    <>
      <main>
        <PageBanner
          dict={dict}
          locale={locale}
          currentPath="/uslovi-koriscenja"
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
