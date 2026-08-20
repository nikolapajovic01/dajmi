export const locales = ["cnr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "cnr";
export const LOCALE_COOKIE = "dajmi-locale";

export function isLocale(value: string | undefined | null): value is Locale {
  return value === "cnr" || value === "en";
}

const cnr = {
  meta: {
    title: "DAJMI — Ovlašćeni Škoda servis, Herceg Novi",
    description:
      "Ovlašćeni Škoda servis u Herceg Novom. Dugogodišnja tradicija, originalni dijelovi i sertifikovani tehničari.",
  },
  logoHome: "DAJMI — početna",
  nav: {
    main: "Glavna navigacija",
    mobile: "Mobilna navigacija",
    open: "Otvori meni",
    close: "Zatvori meni",
    links: [
      { href: "/", label: "Početna" },
      { href: "/o-nama", label: "O nama" },
      { href: "/usluge", label: "Usluge" },
      { href: "/tehnicki-pregled", label: "Tehnički pregled" },
      { href: "/galerija", label: "Galerija" },
      { href: "/kontakt", label: "Kontakt" },
    ],
  },
  hero: {
    kicker: "Herceg Novi · Crna Gora",
    titleLine1: "Sve na jednom mjestu",
    titleLine2: "za vaše vozilo",
    leadMobile: "Ovlašćeni Škoda servis u Herceg Novom.",
    leadDesktop:
      "Ovlašćeni Škoda servis u Herceg Novom. Dugogodišnja tradicija, originalni dijelovi i sertifikovani tehničari.",
    book: "Zakažite termin",
    call: "Pozovite nas",
    rating: "Bonitetna ocjena A+ · Ovlašćeni partner",
  },
  about: {
    kicker: "DAJMI ukratko",
    titleLine1: "Jedna kompanija.",
    titleLine2: "Sve za vaš put.",
    body: "Više od dvije decenije gradimo povjerenje vozača u Herceg Novom. DAJMI na jednom mjestu objedinjuje Taxi More, ovlašćeni Škoda servis i tehnički pregled.",
    cta: "Upoznajte kompaniju",
    lightbox: "Uvećana fotografija",
    close: "Zatvori uvećanu fotografiju",
    prev: "Prethodna fotografija",
    next: "Sljedeća fotografija",
    photos: {
      building: "Glavna zgrada DAJMI ovlašćenog Škoda servisa",
      complex: "DAJMI kompleks u Herceg Novom iz vazduha",
      workshop: "Savremeno opremljena DAJMI servisna radionica",
      expandBuilding: "Proširi fotografiju glavne DAJMI zgrade",
      expandComplex: "Proširi fotografiju DAJMI kompleksa",
      expandWorkshop: "Proširi fotografiju DAJMI servisne radionice",
    },
  },
  units: {
    kicker: "Naše poslovne cjeline",
    titleLine1: "Tri cjeline.",
    titleLine2: "Jedan standard usluge.",
    body: "Od prvog poziva do registracije vozila, DAJMI povezuje usluge koje svakodnevno pokreću Herceg Novi.",
    items: [
      {
        number: "01",
        name: "Taxi More",
        description:
          "Pouzdan gradski i međugradski prijevoz, dostupan svakog dana za siguran dolazak na svaku adresu.",
        href: "/taxi-more",
        cta: "Upoznajte Taxi More",
        image: "/bydTaxi.webp",
        alt: "Taxi More BYD vozilo u Herceg Novom",
      },
      {
        number: "02",
        name: "DAJMI servis",
        description:
          "Ovlašćeni Škoda servis sa sertifikovanim tehničarima, originalnim dijelovima i savremenom dijagnostikom.",
        href: "/usluge",
        cta: "Istražite servis",
        image: "/servis.webp",
        alt: "Ulaz u DAJMI Škoda servis",
      },
      {
        number: "03",
        name: "Tehnički pregled i registracija",
        description:
          "Kompletna provjera vozila i podrška pri registraciji, efikasno završeni na jednom mjestu.",
        href: "/tehnicki-pregled",
        cta: "Saznajte više",
        image: "/tehnicki.webp",
        alt: "Tehnički pregled vozila u DAJMI centru",
      },
    ],
  },
  fleet: {
    kicker: "Taxi More × BYD",
    title: "Tišina je nova energija grada.",
    body: "Nova BYD vozila Taxi More flote donose moderniju, tišu i udobniju vožnju ulicama Herceg Novog.",
    cta: "Posjetite Taxi More",
    facts: ["100% električni", "Tiša vožnja", "Nova generacija"],
  },
  tour: {
    kicker: "360° virtuelna šetnja",
    title: "Uđite u DAJMI.",
    body: "Prošetajte našim servisnim centrom i upoznajte prostor, opremu i kapacitete koji stoje iza svake usluge.",
    iframeTitle: "Virtuelna 360° šetnja kroz DAJMI servisni centar",
    start: "Pokrenite obilazak",
    startAria: "Pokrenite 360° obilazak DAJMI servisnog centra",
    explore: "Istražite prostor iz prve ruke",
    interactive: "Interaktivni prikaz",
    fullscreen: "Prikaz preko cijelog ekrana",
    enterFullscreen: "Cijeli ekran",
    exitFullscreen: "Zatvori cijeli ekran",
  },
  cta: {
    kicker: "Herceg Novi",
    title: "Vaše vozilo je u sigurnim rukama.",
    body: "Zakažite servisni termin ili nas kontaktirajte za sve potrebne informacije.",
    book: "Zakažite termin",
    call: "Pozovite nas",
    map: "Prikaži na mapi",
  },
  footer: {
    blurb: "Ovlašćeni Škoda servis u Herceg Novom.",
    navTitle: "Navigacija",
    navAria: "Footer navigacija",
    unitsTitle: "Poslovne cjeline",
    unitsAria: "Poslovne cjeline",
    contactTitle: "Kontakt",
    location: "Herceg Novi, Crna Gora",
    privacy: "Politika privatnosti",
    terms: "Uslovi korišćenja",
    backToTop: "Nazad na vrh",
    nav: [
      { href: "/", label: "Početna" },
      { href: "/o-nama", label: "O nama" },
      { href: "/usluge", label: "Usluge" },
      { href: "/taxi-more", label: "Taxi More" },
      { href: "/kontakt", label: "Kontakt" },
    ],
    units: [
      { href: "/usluge", label: "Ovlašćeni Škoda servis" },
      { href: "/usluge", label: "Servis svih marki" },
      { href: "/tehnicki-pregled", label: "Tehnički pregled" },
      { href: "/taxi-more", label: "Taxi More" },
    ],
  },
  language: {
    label: "Jezik",
    cnr: "MNE",
    en: "EN",
  },
} as const;

const en = {
  meta: {
    title: "DAJMI — Authorised Škoda service, Herceg Novi",
    description:
      "Authorised Škoda service in Herceg Novi. Long-standing tradition, genuine parts and certified technicians.",
  },
  logoHome: "DAJMI — home",
  nav: {
    main: "Main navigation",
    mobile: "Mobile navigation",
    open: "Open menu",
    close: "Close menu",
    links: [
      { href: "/", label: "Home" },
      { href: "/o-nama", label: "About" },
      { href: "/usluge", label: "Services" },
      { href: "/tehnicki-pregled", label: "Technical inspection" },
      { href: "/galerija", label: "Gallery" },
      { href: "/kontakt", label: "Contact" },
    ],
  },
  hero: {
    kicker: "Herceg Novi · Montenegro",
    titleLine1: "Everything in one place",
    titleLine2: "for your vehicle",
    leadMobile: "Authorised Škoda service in Herceg Novi.",
    leadDesktop:
      "Authorised Škoda service in Herceg Novi. Long-standing tradition, genuine parts and certified technicians.",
    book: "Book an appointment",
    call: "Call us",
    rating: "Credit rating A+ · Authorised partner",
  },
  about: {
    kicker: "DAJMI at a glance",
    titleLine1: "One company.",
    titleLine2: "Everything for your journey.",
    body: "For more than two decades we have been earning drivers’ trust in Herceg Novi. DAJMI brings Taxi More, authorised Škoda service and technical inspection together in one place.",
    cta: "Discover the company",
    lightbox: "Enlarged photograph",
    close: "Close enlarged photograph",
    prev: "Previous photograph",
    next: "Next photograph",
    photos: {
      building: "Main building of the DAJMI authorised Škoda service",
      complex: "Aerial view of the DAJMI complex in Herceg Novi",
      workshop: "Fully equipped DAJMI service workshop",
      expandBuilding: "Enlarge photo of the main DAJMI building",
      expandComplex: "Enlarge photo of the DAJMI complex",
      expandWorkshop: "Enlarge photo of the DAJMI workshop",
    },
  },
  units: {
    kicker: "Our business units",
    titleLine1: "Three units.",
    titleLine2: "One standard of service.",
    body: "From the first call to vehicle registration, DAJMI connects the services that keep Herceg Novi moving every day.",
    items: [
      {
        number: "01",
        name: "Taxi More",
        description:
          "Reliable city and intercity transport, available every day for a safe arrival at every address.",
        href: "/taxi-more",
        cta: "Discover Taxi More",
        image: "/bydTaxi.webp",
        alt: "Taxi More BYD vehicle in Herceg Novi",
      },
      {
        number: "02",
        name: "DAJMI service",
        description:
          "Authorised Škoda service with certified technicians, genuine parts and modern diagnostics.",
        href: "/usluge",
        cta: "Explore the workshop",
        image: "/servis.webp",
        alt: "Entrance to the DAJMI Škoda service",
      },
      {
        number: "03",
        name: "Technical inspection and registration",
        description:
          "Complete vehicle inspection and registration support, finished efficiently in one place.",
        href: "/tehnicki-pregled",
        cta: "Learn more",
        image: "/tehnicki.webp",
        alt: "Vehicle technical inspection at the DAJMI centre",
      },
    ],
  },
  fleet: {
    kicker: "Taxi More × BYD",
    title: "Silence is the city’s new energy.",
    body: "The new BYD vehicles in the Taxi More fleet bring a more modern, quieter and more comfortable ride through the streets of Herceg Novi.",
    cta: "Visit Taxi More",
    facts: ["100% electric", "Quieter drive", "New generation"],
  },
  tour: {
    kicker: "360° virtual walkthrough",
    title: "Step inside DAJMI.",
    body: "Walk through our service centre and discover the space, equipment and capacity behind every service.",
    iframeTitle: "Virtual 360° walkthrough of the DAJMI service centre",
    start: "Start the tour",
    startAria: "Start the 360° tour of the DAJMI service centre",
    explore: "Explore the space first-hand",
    interactive: "Interactive view",
    fullscreen: "Fullscreen available",
    enterFullscreen: "Fullscreen",
    exitFullscreen: "Close fullscreen",
  },
  cta: {
    kicker: "Herceg Novi",
    title: "Your vehicle is in safe hands.",
    body: "Book a service appointment or contact us for any information you need.",
    book: "Book an appointment",
    call: "Call us",
    map: "Show on map",
  },
  footer: {
    blurb: "Authorised Škoda service in Herceg Novi.",
    navTitle: "Navigation",
    navAria: "Footer navigation",
    unitsTitle: "Business units",
    unitsAria: "Business units",
    contactTitle: "Contact",
    location: "Herceg Novi, Montenegro",
    privacy: "Privacy policy",
    terms: "Terms of use",
    backToTop: "Back to top",
    nav: [
      { href: "/", label: "Home" },
      { href: "/o-nama", label: "About" },
      { href: "/usluge", label: "Services" },
      { href: "/taxi-more", label: "Taxi More" },
      { href: "/kontakt", label: "Contact" },
    ],
    units: [
      { href: "/usluge", label: "Authorised Škoda service" },
      { href: "/usluge", label: "Service for all brands" },
      { href: "/tehnicki-pregled", label: "Technical inspection" },
      { href: "/taxi-more", label: "Taxi More" },
    ],
  },
  language: {
    label: "Language",
    cnr: "MNE",
    en: "EN",
  },
} as const;

export const dictionaries = { cnr, en };
export type Dictionary = typeof cnr;
