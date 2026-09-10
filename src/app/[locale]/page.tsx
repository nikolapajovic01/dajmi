import { AboutPreview } from "@/components/about-preview";
import { BusinessUnits } from "@/components/business-units";
import { ContactLocation } from "@/components/contact-location";
import { ElectricFleet } from "@/components/electric-fleet";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";
import { VirtualTour } from "@/components/virtual-tour";
import { getDictionary, requireLocale } from "@/lib/i18n/locale";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = requireLocale(raw);
  const { dict } = getDictionary(locale);

  return (
    <>
      <main>
        <Hero dict={dict} locale={locale} />
        <AboutPreview copy={dict.about} locale={locale} />
        <BusinessUnits copy={dict.units} locale={locale} />
        <ElectricFleet copy={dict.fleet} />
        <VirtualTour copy={dict.tour} />
        <ContactLocation copy={dict.cta} locale={locale} />
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
