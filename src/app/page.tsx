import { AboutPreview } from "@/components/about-preview";
import { BusinessUnits } from "@/components/business-units";
import { ContactLocation } from "@/components/contact-location";
import { ElectricFleet } from "@/components/electric-fleet";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";
import { VirtualTour } from "@/components/virtual-tour";
import { getDictionary } from "@/lib/i18n/locale";

export default async function Home() {
  const { locale, dict } = await getDictionary();

  return (
    <>
      <main>
        <Hero dict={dict} locale={locale} />
        <AboutPreview copy={dict.about} />
        <BusinessUnits copy={dict.units} />
        <ElectricFleet copy={dict.fleet} />
        <VirtualTour copy={dict.tour} />
        <ContactLocation copy={dict.cta} />
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
