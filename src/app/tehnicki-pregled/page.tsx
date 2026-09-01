import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { InspectionContent } from "@/components/inspection-content";
import { PageBanner } from "@/components/page-banner";
import { getDictionary } from "@/lib/i18n/locale";

export async function generateMetadata(): Promise<Metadata> {
  const { dict } = await getDictionary();

  return {
    title: dict.inspectionPage.meta.title,
    description: dict.inspectionPage.meta.description,
  };
}

export default async function TehnickiPregledPage() {
  const { locale, dict } = await getDictionary();
  const copy = dict.inspectionPage;

  return (
    <>
      <main>
        <PageBanner
          dict={dict}
          locale={locale}
          currentPath="/tehnicki-pregled"
          kicker={copy.kicker}
          title={copy.title}
          lead={copy.lead}
        />
        <InspectionContent copy={copy} hours={dict.hours} />
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
