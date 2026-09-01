import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { LegalContent } from "@/components/legal-content";
import { PageBanner } from "@/components/page-banner";
import { getDictionary } from "@/lib/i18n/locale";

export async function generateMetadata(): Promise<Metadata> {
  const { dict } = await getDictionary();

  return {
    title: dict.privacyPage.meta.title,
    description: dict.privacyPage.meta.description,
  };
}

export default async function PolitikaPrivatnostiPage() {
  const { locale, dict } = await getDictionary();
  const copy = dict.privacyPage;

  return (
    <>
      <main>
        <PageBanner
          dict={dict}
          locale={locale}
          currentPath="/politika-privatnosti"
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
