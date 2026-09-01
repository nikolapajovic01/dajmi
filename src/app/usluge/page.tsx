import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { ServicesContent } from "@/components/services-content";
import { getDictionary } from "@/lib/i18n/locale";

export async function generateMetadata(): Promise<Metadata> {
  const { dict } = await getDictionary();

  return {
    title: dict.servicesPage.meta.title,
    description: dict.servicesPage.meta.description,
  };
}

export default async function UslugePage() {
  const { locale, dict } = await getDictionary();
  const copy = dict.servicesPage;

  return (
    <>
      <main>
        <PageBanner
          dict={dict}
          locale={locale}
          currentPath="/usluge"
          kicker={copy.kicker}
          title={copy.title}
          lead={copy.lead}
        />
        <ServicesContent copy={copy} hours={dict.hours} />
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
