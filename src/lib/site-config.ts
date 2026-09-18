export const SITE = {
  name: "D.A.J.M.I.",
  legalName: '"COMPANY D.A.J.M.I." d.o.o.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dajmi.me",
  taxId: "02434296",
  registrationNumber: "5-0254363/021",
  vatId: "90/31-01011-7",
} as const;

export const ENQUIRY_DEPARTMENTS = ["info", "service", "inspection"] as const;
export type EnquiryDepartment = (typeof ENQUIRY_DEPARTMENTS)[number];
export const CONTACT_FORM_ENABLED = true;

export const PHONE = {
  display: "+382 31 670 240",
  href: "tel:+38231670240",
};

export const EMAIL = {
  display: "info@dajmi.me",
  href: "mailto:info@dajmi.me",
};

export const LOCATION = {
  city: "Herceg Novi",
  area: "Sutorina",
  streetAddress: "Jadranska br. 63",
  postalCode: "85347",
  country: "Crna Gora",
  mapQuery: "DAJMI Sutorina Herceg Novi",
  latitude: 42.4688319,
  longitude: 18.4820324,
} as const;

export const HOURS = {
  weekday: { opens: "08:00", closes: "16:00" },
  saturday: { opens: "08:00", closes: "13:00" },
} as const;

export const TAXI_PHONE = {
  display: "19730",
  href: "tel:19730",
} as const;

export const TAXI_SITE = {
  href: "https://taximore.com",
} as const;

export const CONTACTS = [
  {
    key: "info",
    phone: { display: "+382 31 670 240", href: "tel:+38231670240" },
    email: { display: "info@dajmi.me", href: "mailto:info@dajmi.me" },
  },
  {
    key: "desk",
    phone: { display: "+382 31 670 243", href: "tel:+38231670243" },
    email: { display: "desk@dajmi.me", href: "mailto:desk@dajmi.me" },
  },
  {
    key: "service",
    phone: { display: "+382 31 670 244", href: "tel:+38231670244" },
    email: { display: "servis@dajmi.me", href: "mailto:servis@dajmi.me" },
  },
  {
    key: "accounting",
    phone: { display: "+382 31 670 245", href: "tel:+38231670245" },
    email: { display: "racunovodstvo@dajmi.me", href: "mailto:racunovodstvo@dajmi.me" },
  },
  {
    key: "inspection",
    phone: { display: "+382 31 350 756", href: "tel:+38231350756" },
    email: { display: "tehnickipregled@dajmi.me", href: "mailto:tehnickipregled@dajmi.me" },
  },
  {
    key: "hiring",
    phone: { display: "+382 67 679 730", href: "tel:+38267679730" },
  },
] as const;
