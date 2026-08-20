export const SITE = {
  name: "DAJMI",
};

export const PHONE = {
  display: "+382 31 350 100",
  href: "tel:+38231350100",
};

export const LOCATION = {
  city: "Herceg Novi",
  country: "Crna Gora",
  mapQuery: "DAJMI Herceg Novi",
} as const;

export const HOURS = {
  days: "Pon–Sub",
  time: "08:00 — 17:00",
} as const;

export const TAXI_PHONE = {
  display: "19730",
  href: "tel:19730",
} as const;

export const TAXI_SITE = {
  href: "https://taximore.com",
} as const;

export const CONTACTS = [
  { label: "Servis", ...PHONE },
  { label: "Tehnički pregled", ...PHONE },
  { label: "Taxi More", ...TAXI_PHONE },
] as const;
