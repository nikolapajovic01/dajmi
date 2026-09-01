import type { Dictionary } from "@/lib/i18n/dictionaries";
import { CONTACTS, EMAIL, HOURS, LOCATION, PHONE, SITE } from "@/lib/site-config";

const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(LOCATION.mapQuery)}`;

function contactByKey(key: (typeof CONTACTS)[number]["key"]) {
  return CONTACTS.find((entry) => entry.key === key)!;
}

export function localBusinessJsonLd(dict: Dictionary) {
  const service = contactByKey("service");
  const inspection = contactByKey("inspection");

  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    image: `${SITE.url}/og.jpg`,
    logo: `${SITE.url}/dajmi-logo-transparent.png`,
    telephone: PHONE.href.replace("tel:", ""),
    email: EMAIL.display,
    taxID: SITE.taxId,
    vatID: SITE.vatId,
    description: dict.meta.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: LOCATION.area,
      addressRegion: LOCATION.city,
      addressCountry: "ME",
    },
    areaServed: {
      "@type": "City",
      name: LOCATION.city,
    },
    hasMap: MAP_URL,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: HOURS.weekday.opens,
        closes: HOURS.weekday.closes,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: HOURS.saturday.opens,
        closes: HOURS.saturday.closes,
      },
    ],
    department: [
      {
        "@type": "AutoRepair",
        name: dict.contactPage.channels.service,
        telephone: service.phone.href.replace("tel:", ""),
        email: service.email.display,
      },
      {
        "@type": "AutomotiveBusiness",
        name: dict.contactPage.channels.inspection,
        telephone: inspection.phone.href.replace("tel:", ""),
        email: inspection.email.display,
      },
    ],
  };
}
