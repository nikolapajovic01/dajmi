export const locales = ["cnr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "cnr";
export const LOCALE_COOKIE = "dajmi-locale";

export function isLocale(value: string | undefined | null): value is Locale {
  return value === "cnr" || value === "en";
}

const cnr = {
  meta: {
    title: "D.A.J.M.I. - Ovlašćeni Škoda servis, Herceg Novi",
    description:
      "Ovlašćeni Škoda servis u Herceg Novom. Dugogodišnja tradicija, originalni dijelovi i sertifikovani tehničari.",
    ogAlt: "Ulaz u D.A.J.M.I. kompleks u Sutorini, Herceg Novi",
  },
  logoHome: "D.A.J.M.I. - početna",
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
  },
  about: {
    kicker: "D.A.J.M.I. ukratko",
    titleLine1: "Jedna kompanija.",
    titleLine2: "Sve za vaš put.",
    body: "Više od dvije decenije gradimo povjerenje vozača u Herceg Novom. D.A.J.M.I. na jednom mjestu objedinjuje Taxi More, ovlašćeni Škoda servis i tehnički pregled.",
    cta: "Upoznajte kompaniju",
    lightbox: "Uvećana fotografija",
    close: "Zatvori uvećanu fotografiju",
    prev: "Prethodna fotografija",
    next: "Sljedeća fotografija",
    photos: {
      building: "Glavna zgrada D.A.J.M.I. ovlašćenog Škoda servisa",
      complex: "D.A.J.M.I. kompleks u Herceg Novom iz vazduha",
      workshop: "Savremeno opremljena D.A.J.M.I. servisna radionica",
      expandBuilding: "Proširi fotografiju glavne D.A.J.M.I. zgrade",
      expandComplex: "Proširi fotografiju D.A.J.M.I. kompleksa",
      expandWorkshop: "Proširi fotografiju D.A.J.M.I. servisne radionice",
    },
  },
  units: {
    kicker: "Naše poslovne cjeline",
    titleLine1: "Tri cjeline.",
    titleLine2: "Jedan standard usluge.",
    body: "Od prvog poziva do registracije vozila, D.A.J.M.I. povezuje usluge koje svakodnevno pokreću Herceg Novi.",
    items: [
      {
        number: "01",
        name: "Taxi More",
        description:
          "Pouzdan gradski i međugradski prijevoz, dostupan svakog dana za siguran dolazak na svaku adresu.",
        href: "https://taximore.com",
        cta: "Upoznajte Taxi More",
        image: "/taximore/IMG_4317.webp",
        alt: "Taxi More BYD vozila ispred kompleksa u Sutorini",
      },
      {
        number: "02",
        name: "D.A.J.M.I. servis",
        description:
          "Ovlašćeni Škoda servis sa sertifikovanim tehničarima, originalnim dijelovima i savremenom dijagnostikom.",
        href: "/usluge",
        cta: "Istražite servis",
        image: "/prilaz.webp",
        alt: "Prilaz D.A.J.M.I. Škoda servisu",
      },
      {
        number: "03",
        name: "Tehnički pregled i registracija",
        description:
          "Kompletna provjera vozila i podrška pri registraciji, efikasno završeni na jednom mjestu.",
        href: "/tehnicki-pregled",
        cta: "Saznajte više",
        image: "/tehnicki.webp",
        alt: "Tehnički pregled vozila u D.A.J.M.I. centru",
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
    title: "Uđite u D.A.J.M.I.",
    body: "Prošetajte našim servisnim centrom i upoznajte prostor, opremu i kapacitete koji stoje iza svake usluge.",
    iframeTitle: "Virtuelna 360° šetnja kroz D.A.J.M.I. servisni centar",
    start: "Pokrenite obilazak",
    startAria: "Pokrenite 360° obilazak D.A.J.M.I. servisnog centra",
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
  hours: {
    title: "Radno vrijeme",
    weekdays: { days: "Pon-Pet", time: "08:00 - 16:00" },
    saturday: { days: "Sub", time: "08:00 - 13:00" },
    sunday: { days: "Ned", time: "zatvoreno" },
  },
  contactPage: {
    meta: {
      title: "Kontakt - D.A.J.M.I.",
      description:
        "Kontaktirajte D.A.J.M.I. u Herceg Novom: telefoni i emailovi po odjeljenjima, radno vrijeme, lokacija i kontakt forma.",
    },
    kicker: "Kontakt",
    title: "Javite nam se.",
    lead: "Tu smo za sva pitanja o servisu, tehničkom pregledu i ostalim uslugama. Pozovite, pišite ili nas posjetite u Sutorini, Herceg Novi.",
    channels: {
      title: "Ostanimo u kontaktu",
      info: "Informacije",
      desk: "Desk",
      service: "Servis",
      accounting: "Računovodstvo",
      inspection: "Tehnički pregled",
    },
    location: {
      title: "Gdje nas pronaći",
      value: "Sutorina, Herceg Novi, Crna Gora",
      map: "Otvorite u Google mapama",
    },
    form: {
      title: "Pošaljite upit",
      note: "Dugme otvara vaš email program sa popunjenom porukom.",
      unavailable: "Forma trenutno nije u funkciji. Pozovite nas ili pišite na email.",
      name: "Ime i prezime",
      email: "Email",
      phone: "Telefon (opcionalno)",
      department: {
        label: "Odjeljenje",
        info: "Informacije",
        service: "Servis",
        inspection: "Tehnički pregled",
      },
      message: "Poruka",
      submit: "Pošaljite email",
      subject: "Upit sa sajta D.A.J.M.I.",
    },
  },
  servicesPage: {
    meta: {
      title: "Usluge - D.A.J.M.I.",
      description:
        "Ovlašćeni Škoda servis u Herceg Novom: mehanika, elektrika, dijagnostika, reglaža trapa, vulkanizer i limarsko-farbarska radionica za sve marke.",
    },
    kicker: "Usluge",
    title: "Ovlašćeni Škoda servis.",
    lead: "Sertifikovani tehničari, originalni dijelovi i savremena dijagnostika. Servisiramo Škodu i sve ostale marke.",
    items: [
      {
        name: "Servis i dijagnostika",
        lead: "Licencirani programi i alati",
        body: "Devet radnih mjesta sa dizalicama, za putnička i komercijalna vozila. Mehaničarske i električarske usluge, auto klima i dijagnostika - sa originalnim dijelovima i alatom koji prati svaki model, uključujući vozila u garantnom periodu.",
        alt: "D.A.J.M.I. servisna radionica sa dizalicama i radnim mjestima",
      },
      {
        name: "Reglaža trapa",
        lead: "Fabrički ugao na sva četiri točka",
        body: "Centriranjem trapa osiguravamo da sva četiri točka budu pod jednakim uglom na putu. Kad su točkovi podešeni onako kako je fabrika predvidjela, vozilo se stabilnije i predvidljivije ponaša pri skretanju, a gume se troše ravnomjernije.",
        alt: "Radno mjesto za reglažu trapa u D.A.J.M.I. servisu",
      },
      {
        name: "Vulkanizerske usluge",
        lead: "Montaža i balansiranje",
        body: "Opremljeni smo za montažu svih vrsta guma i dijagnostičko-statičko balansiranje, sa prikazom greške u oscilaciji gume ili felge. Kvalitetne gume možemo osigurati po pristupačnoj cijeni.",
        alt: "Vulkanizerska oprema za montažu i balansiranje guma",
      },
      {
        name: "Limarsko-farbarska radionica",
        lead: "Termalna komora za lakiranje",
        body: "Moderne dizalice, alati i termalna komora za lakiranje osiguravaju visok kvalitet i originalni izgled lakiranih površina vašeg automobila.",
        alt: "Limarsko-farbarska radionica D.A.J.M.I. sa vozilom na dizalici",
      },
    ],
    inspection: {
      kicker: "Posebna cjelina",
      title: "Tehnički pregled i registracija.",
      body: "Redovni i vanredni pregled, registracija i osiguranje obavljate u istoj kući, na posebnom odjeljenju.",
      cta: "Saznajte više",
      alt: "Tehnički pregled vozila u D.A.J.M.I. centru",
    },
    cta: {
      kicker: "Servis",
      title: "Zakažite termin.",
      body: "Pozovite servis ili pošaljite upit.",
      book: "Pošaljite upit",
      call: "Pozovite servis",
    },
  },
  inspectionPage: {
    meta: {
      title: "Tehnički pregled - D.A.J.M.I.",
      description:
        "Tehnički pregled automobila i motora u Herceg Novom: redovni i vanredni pregled, registracija i osiguranje.",
    },
    kicker: "Tehnički pregled",
    title: "Pregled, registracija i osiguranje.",
    lead: "Posebno odjeljenje u Sutorini. Automobili i motori, u istoj kući sa servisom.",
    hero: {
      lead: "Sutorina, Herceg Novi",
      title: "Dođite na pregled.",
      body: "Redovni i vanredni tehnički pregled automobila i motora. Pozovite odjeljenje ili dođite u radnom vremenu.",
      alt: "Tehnički pregled vozila u D.A.J.M.I. centru",
      call: "Pozovite odjeljenje",
    },
    offerings: {
      kicker: "Šta možete obaviti",
      items: [
        {
          lead: "Pregled",
          title: "Redovni i vanredni.",
          body: "Tehnički pregled automobila i motora. Pri dolasku, kvalifikovani radnici daju savjet o održavanju vozila.",
        },
        {
          lead: "Registracija",
          title: "Nova i produženje.",
          body: "Pomoć oko registracije i produženja registracije, na istom mjestu.",
        },
        {
          lead: "Osiguranje",
          title: "Polisa uz pregled.",
          body: "Uz pregled vam pomažemo i oko ugovaranja kvalitetne polise osiguranja.",
        },
      ],
    },
    service: {
      lead: "Ako treba popravka",
      title: "Servis je u istoj kući.",
      body: "Ako pregled zatraži rad na vozilu, ne idete drugdje. Ovlašćeni Škoda servis je u istom kompleksu.",
      cta: "Pogledajte usluge servisa",
      alt: "D.A.J.M.I. servisna radionica",
    },
    contact: {
      kicker: "Odjeljenje",
      title: "Zakažite pregled.",
      body: "Ovo je broj tehničkog pregleda, ne servisa.",
      hours: "Radno vrijeme",
      place: "Lokacija",
      location: "Sutorina, Herceg Novi",
      map: "Prikaži na mapi",
      book: "Pošaljite upit",
    },
  },
  aboutPage: {
    meta: {
      title: "O nama - D.A.J.M.I.",
      description:
        "D.A.J.M.I. u Herceg Novom: više od dvije decenije, ovlašćeni Škoda servis, tehnički pregled i Taxi More na jednom mjestu.",
    },
    kicker: "O nama",
    title: "Jedna kompanija. Sve za vaš put.",
    lead: "Više od dvije decenije u Herceg Novom. Taxi More, ovlašćeni Škoda servis i tehnički pregled - u Sutorini.",
    story:
      "Ovlašćeni smo servisni partner za Škodu, a radionicu otvaramo i svim drugim markama. Tehničari se usavršavaju u trening centrima uvoznika. U radionici je devet mjesta sa dizalicama, originalni dijelovi i licencirani alati - garancija ostaje i u garantnom periodu.",
    photo: {
      kicker: "Kompleks",
      title: "Sutorina, Herceg Novi.",
      alt: "D.A.J.M.I. kompleks u Herceg Novom iz vazduha",
      storyAlt: "Servisna hala D.A.J.M.I. kompleksa u Sutorini",
    },
    video: {
      play: "Pustite snimak",
      playAria: "Pustite video snimak D.A.J.M.I. kompleksa",
      iframeTitle: "Video snimak D.A.J.M.I. kompleksa u Sutorini",
    },
    cta: {
      kicker: "Kontakt",
      title: "Javite nam se.",
      body: "Za servis, tehnički pregled ili informacije - tu smo u Sutorini.",
      book: "Kontakt",
    },
  },
  galleryPage: {
    meta: {
      title: "Galerija - D.A.J.M.I.",
      description:
        "Fotografije D.A.J.M.I. kompleksa u Sutorini: zgrada, radionica, tehnički pregled i Taxi More.",
    },
    kicker: "Galerija",
    title: "Kompleks u Sutorini.",
    lead: "Zgrada, radionica, tehnički pregled i Taxi More.",
    lightbox: "Uvećana fotografija",
    close: "Zatvori uvećanu fotografiju",
    prev: "Prethodna fotografija",
    next: "Sljedeća fotografija",
    expand: "Prikaži fotografiju",
    groups: {
      complex: "Kompleks",
      workshop: "Radionica",
      taxi: "Taxi More",
    },
    photos: {
      building: {
        caption: "Zgrada",
        alt: "Glavna zgrada D.A.J.M.I. ovlašćenog Škoda servisa",
      },
      hall: {
        caption: "Servisna hala",
        alt: "Servisna hala D.A.J.M.I. kompleksa u Sutorini",
      },
      aerial: {
        caption: "Kompleks",
        alt: "D.A.J.M.I. kompleks u Herceg Novom iz vazduha",
      },
      aerialPark: {
        caption: "Parking",
        alt: "D.A.J.M.I. kompleks i parking u Sutorini iz vazduha",
      },
      entrance: {
        caption: "Prilaz",
        alt: "Prilaz D.A.J.M.I. Škoda servisu",
      },
      inspection: {
        caption: "Tehnički pregled",
        alt: "Tehnički pregled vozila u D.A.J.M.I. centru",
      },
      workshop: {
        caption: "Radionica",
        alt: "Savremeno opremljena D.A.J.M.I. servisna radionica",
      },
      diagnostics: {
        caption: "Servis i dijagnostika",
        alt: "D.A.J.M.I. servisna radionica sa dizalicama i radnim mjestima",
      },
      alignment: {
        caption: "Reglaža trapa",
        alt: "Radno mjesto za reglažu trapa u D.A.J.M.I. servisu",
      },
      tires: {
        caption: "Vulkanizer",
        alt: "Vulkanizerska oprema za montažu i balansiranje guma",
      },
      bodywork: {
        caption: "Limarsko-farbarska",
        alt: "Limarsko-farbarska radionica D.A.J.M.I. sa vozilom na dizalici",
      },
      desk: {
        caption: "Desk",
        alt: "Servisni desk i zona čekanja u D.A.J.M.I.",
      },
      climate: {
        caption: "Auto klima",
        alt: "Servis auto klime u D.A.J.M.I. radionici",
      },
      crew: {
        caption: "Tehničari",
        alt: "Tehničari u D.A.J.M.I. servisnoj radionici",
      },
      paint: {
        caption: "Lakirnica",
        alt: "Mješanje laka u D.A.J.M.I. limarsko-farbarskoj radionici",
      },
      taxi: {
        caption: "Taxi More",
        alt: "Taxi More vozilo ispred zgrade sa brojem 19730",
      },
      fleet: {
        caption: "Flota",
        alt: "Taxi More BYD flota na parkingu u Sutorini",
      },
      charging: {
        caption: "Punjenje",
        alt: "Taxi More BYD na punjaču u Sutorini",
      },
      interior: {
        caption: "Kabina",
        alt: "Unutrašnjost Taxi More BYD vozila",
      },
      dispatch: {
        caption: "19730",
        alt: "Taxi More flota ispred zgrade sa brojem 19730",
      },
      lineup: {
        caption: "Vozila",
        alt: "Red Taxi More BYD vozila u Sutorini",
      },
    },
    cta: {
      kicker: "Kontakt",
      title: "Javite nam se.",
      body: "Za servis, tehnički pregled ili informacije - tu smo u Sutorini.",
      book: "Kontakt",
    },
  },
  privacyPage: {
    meta: {
      title: "Politika privatnosti - D.A.J.M.I.",
      description: "Kako D.A.J.M.I. tretira podatke koje ostavite preko sajta.",
    },
    kicker: "Pravno",
    title: "Politika privatnosti.",
    lead: "Samo ono što sajt stvarno radi. Nema analitičkih ni marketinških kolačića.",
    updated: "Ažurirano 1. septembra 2026.",
    sections: [
      {
        heading: "Ko obrađuje podatke",
        body: [
          "\"COMPANY D.A.J.M.I.\" d.o.o. (PIB 02434296, matični broj 5-0254363/021), sa sjedištem u Sutorini, Herceg Novi, Crna Gora. Za pitanja o podacima pišite na info@dajmi.me ili pozovite +382 31 670 240.",
        ],
      },
      {
        heading: "Kontakt i upiti",
        body: [
          "Kontakt forma na sajtu trenutno nije u funkciji. Upite šaljete pozivom ili emailom na objavljene brojeve i adrese: info@dajmi.me, servis@dajmi.me ili tehnickipregled@dajmi.me.",
          "Ako nas pozovete ili pišete na objavljene brojeve i adrese, te poruke ostaju u našoj pošti i telefoniji dok ih ne riješimo i ne obrišemo.",
        ],
      },
      {
        heading: "Kolačići",
        body: [
          "Sajt postavlja samo kolačić dajmi-locale, da zapamti izbor jezika (MNE ili EN). Traje do godinu dana i potreban je za rad prekidača jezika.",
          "Ne koristimo kolačiće za analitiku, oglase ni praćenje.",
        ],
      },
      {
        heading: "Sadržaj sa drugih servisa",
        body: [
          "Na Kontaktu se učitava Google mapa. Na O nama, kad pustite snimak, učitava se Vimeo. Na početnoj, kad pokrenete 360° obilazak, učitava se virtuelna tura. Linkovi ka Taxi More vode na taximore.com.",
          "Ti servisi mogu postaviti vlastite kolačiće po svojim pravilima, koj ih mi ne kontrolišemo.",
        ],
      },
      {
        heading: "Vaša prava",
        body: [
          "Možete tražiti uvid, ispravku ili brisanje podataka koje imamo o vama. Pišite na info@dajmi.me.",
        ],
      },
    ],
  },
  termsPage: {
    meta: {
      title: "Uslovi korišćenja - D.A.J.M.I.",
      description: "Pravila korišćenja D.A.J.M.I. sajta.",
    },
    kicker: "Pravno",
    title: "Uslovi korišćenja.",
    lead: "Sajt je informacija o uslugama. Ugovor se pravi u servisu ili na tehničkom pregledu.",
    updated: "Ažurirano 1. septembra 2026.",
    sections: [
      {
        heading: "Podaci o firmi",
        body: [
          "Sajt vodi \"COMPANY D.A.J.M.I.\" d.o.o., sa sjedištem na adresi Jadranska br. 63, Sutorina, Herceg Novi, Crna Gora. PIB: 02434296, matični broj: 5-0254363/021, PDV broj: 90/31-01011-7. Društvo je upisano kod Privrednog suda u Podgorici.",
          "Servisni kompleks koji posjećujete nalazi se u Sutorini, Herceg Novi.",
        ],
      },
      {
        heading: "Sajt",
        body: [
          "Ove stranice predstavljaju D.A.J.M.I. u Sutorini, Herceg Novi. Tekst, cijene ako se pojave i opisi usluga su informativni. Nisu ponuda ni ugovor.",
        ],
      },
      {
        heading: "Sadržaj",
        body: [
          "Tekst, fotografije i video na sajtu pripadaju D.A.J.M.I., osim gdje je navedeno drugačije. Ne kopirajte ih za svoj sajt ili oglas bez naše saglasnosti.",
        ],
      },
      {
        heading: "Linkovi",
        body: [
          "Sajt vodi i na tuđe adrese: taximore.com, Google mape, Vimeo i 360° turu. Za taj sadržaj važe njihova pravila.",
        ],
      },
      {
        heading: "Odgovornost",
        body: [
          "Trudimo se da podaci budu tačni. Ako nešto zastari ili se raspoloživost usluge promijeni, važi ono što potvrdimo telefonom ili u kompleksu.",
        ],
      },
      {
        heading: "Kontakt",
        body: [
          "Pitanja o sajtu: info@dajmi.me, +382 31 670 240. Sutorina, Herceg Novi.",
        ],
      },
    ],
  },
  footer: {
    blurb: "Ovlašćeni Škoda servis u Herceg Novom.",
    navTitle: "Navigacija",
    navAria: "Footer navigacija",
    unitsTitle: "Poslovne cjeline",
    unitsAria: "Poslovne cjeline",
    contactTitle: "Kontakt",
    location: "Sutorina, Herceg Novi, Crna Gora",
    legal: "\"COMPANY D.A.J.M.I.\" d.o.o. · PIB 02434296 · MB 5-0254363/021",
    privacy: "Politika privatnosti",
    terms: "Uslovi korišćenja",
    backToTop: "Nazad na vrh",
    nav: [
      { href: "/", label: "Početna" },
      { href: "/o-nama", label: "O nama" },
      { href: "/usluge", label: "Usluge" },
      { href: "/galerija", label: "Galerija" },
      { href: "https://taximore.com", label: "Taxi More" },
      { href: "/kontakt", label: "Kontakt" },
    ],
    units: [
      { href: "/usluge", label: "Ovlašćeni Škoda servis" },
      { href: "/tehnicki-pregled", label: "Tehnički pregled" },
      { href: "https://taximore.com", label: "Taxi More" },
    ],
  },
  language: {
    label: "Jezik",
    cnr: "MNE",
    en: "EN",
  },
  notFound: {
    kicker: "404",
    title: "Ova stranica ne postoji.",
    lead: "Link je možda zastario. Vratite se na početnu ili nas nazovite.",
    home: "Početna",
    contact: "Kontakt",
  },
} as const;

const en = {
  meta: {
    title: "D.A.J.M.I. - Authorised Škoda service, Herceg Novi",
    description:
      "Authorised Škoda service in Herceg Novi. Long-standing tradition, genuine parts and certified technicians.",
    ogAlt: "Entrance to the D.A.J.M.I. complex in Sutorina, Herceg Novi",
  },
  logoHome: "D.A.J.M.I. - home",
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
  },
  about: {
    kicker: "D.A.J.M.I. at a glance",
    titleLine1: "One company.",
    titleLine2: "Everything for your journey.",
    body: "For more than two decades we have been earning drivers’ trust in Herceg Novi. D.A.J.M.I. brings Taxi More, authorised Škoda service and technical inspection together in one place.",
    cta: "Discover the company",
    lightbox: "Enlarged photograph",
    close: "Close enlarged photograph",
    prev: "Previous photograph",
    next: "Next photograph",
    photos: {
      building: "Main building of the D.A.J.M.I. authorised Škoda service",
      complex: "Aerial view of the D.A.J.M.I. complex in Herceg Novi",
      workshop: "Fully equipped D.A.J.M.I. service workshop",
      expandBuilding: "Enlarge photo of the main D.A.J.M.I. building",
      expandComplex: "Enlarge photo of the D.A.J.M.I. complex",
      expandWorkshop: "Enlarge photo of the D.A.J.M.I. workshop",
    },
  },
  units: {
    kicker: "Our business units",
    titleLine1: "Three units.",
    titleLine2: "One standard of service.",
    body: "From the first call to vehicle registration, D.A.J.M.I. connects the services that keep Herceg Novi moving every day.",
    items: [
      {
        number: "01",
        name: "Taxi More",
        description:
          "Reliable city and intercity transport, available every day for a safe arrival at every address.",
        href: "https://taximore.com",
        cta: "Discover Taxi More",
        image: "/taximore/IMG_4317.webp",
        alt: "Taxi More BYD vehicles in front of the complex in Sutorina",
      },
      {
        number: "02",
        name: "D.A.J.M.I. service",
        description:
          "Authorised Škoda service with certified technicians, genuine parts and modern diagnostics.",
        href: "/usluge",
        cta: "Explore the workshop",
        image: "/prilaz.webp",
        alt: "Approach to the D.A.J.M.I. Škoda service",
      },
      {
        number: "03",
        name: "Technical inspection and registration",
        description:
          "Complete vehicle inspection and registration support, finished efficiently in one place.",
        href: "/tehnicki-pregled",
        cta: "Learn more",
        image: "/tehnicki.webp",
        alt: "Vehicle technical inspection at the D.A.J.M.I. centre",
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
    title: "Step inside D.A.J.M.I.",
    body: "Walk through our service centre and discover the space, equipment and capacity behind every service.",
    iframeTitle: "Virtual 360° walkthrough of the D.A.J.M.I. service centre",
    start: "Start the tour",
    startAria: "Start the 360° tour of the D.A.J.M.I. service centre",
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
  hours: {
    title: "Opening hours",
    weekdays: { days: "Mon-Fri", time: "08:00 - 16:00" },
    saturday: { days: "Sat", time: "08:00 - 13:00" },
    sunday: { days: "Sun", time: "closed" },
  },
  contactPage: {
    meta: {
      title: "Contact - D.A.J.M.I.",
      description:
        "Contact D.A.J.M.I. in Herceg Novi: department phone numbers and emails, opening hours, location and a contact form.",
    },
    kicker: "Contact",
    title: "Get in touch.",
    lead: "We're here for any questions about service, technical inspection and other services. Call, write or visit us in Sutorina, Herceg Novi.",
    channels: {
      title: "Stay in touch",
      info: "Information",
      desk: "Desk",
      service: "Service",
      accounting: "Accounting",
      inspection: "Technical inspection",
    },
    location: {
      title: "Where to find us",
      value: "Sutorina, Herceg Novi, Montenegro",
      map: "Open in Google Maps",
    },
    form: {
      title: "Send an enquiry",
      note: "The button opens your email app with the message pre-filled.",
      unavailable: "The form is temporarily unavailable. Call us or send an email.",
      name: "Full name",
      email: "Email",
      phone: "Phone (optional)",
      department: {
        label: "Department",
        info: "Information",
        service: "Service",
        inspection: "Technical inspection",
      },
      message: "Message",
      submit: "Send email",
      subject: "Enquiry from the D.A.J.M.I. website",
    },
  },
  servicesPage: {
    meta: {
      title: "Services - D.A.J.M.I.",
      description:
        "Authorised Škoda service in Herceg Novi: mechanics, electrics, diagnostics, wheel alignment, tyres and a bodywork and paint workshop for all brands.",
    },
    kicker: "Services",
    title: "Authorised Škoda service.",
    lead: "Certified technicians, genuine parts and modern diagnostics. We service Škoda and every other brand.",
    items: [
      {
        name: "Service and diagnostics",
        lead: "Licensed software and tools",
        body: "Nine work bays with lifts, for passenger and commercial vehicles. Mechanical and electrical work, air conditioning and diagnostics - with genuine parts and the tools that match each model, including vehicles still in the warranty period.",
        alt: "D.A.J.M.I. service workshop with lifts and work bays",
      },
      {
        name: "Wheel alignment",
        lead: "Factory angles on all four wheels",
        body: "Wheel alignment brings all four wheels to an even angle on the road. When they sit as the factory intended, the vehicle steers more stably and predictably, and tyres wear more evenly.",
        alt: "Wheel alignment bay at D.A.J.M.I.",
      },
      {
        name: "Tyre service",
        lead: "Fitting and balancing",
        body: "We are equipped to fit all types of tyres and to carry out diagnostic-static balancing, showing any imbalance in the tyre or rim. We can also supply quality tyres at a fair price.",
        alt: "Tyre fitting and balancing equipment",
      },
      {
        name: "Bodywork and paint workshop",
        lead: "A thermal booth for painting",
        body: "Modern lifts, tools and a thermal paint booth ensure a high finish and the original look of painted surfaces on your car.",
        alt: "D.A.J.M.I. bodywork and paint workshop with a vehicle on a lift",
      },
    ],
    inspection: {
      kicker: "A separate unit",
      title: "Technical inspection and registration.",
      body: "Regular and extraordinary inspections, registration and insurance are handled in the same house, in a dedicated department.",
      cta: "Find out more",
      alt: "Vehicle technical inspection at the D.A.J.M.I. centre",
    },
    cta: {
      kicker: "Service",
      title: "Book an appointment.",
      body: "Call the workshop or send an enquiry.",
      book: "Send an enquiry",
      call: "Call the workshop",
    },
  },
  inspectionPage: {
    meta: {
      title: "Technical inspection - D.A.J.M.I.",
      description:
        "Technical inspection of cars and motorcycles in Herceg Novi: regular and extraordinary inspection, registration and insurance.",
    },
    kicker: "Technical inspection",
    title: "Inspection, registration and insurance.",
    lead: "A dedicated department in Sutorina. Cars and motorcycles, in the same house as the workshop.",
    hero: {
      lead: "Sutorina, Herceg Novi",
      title: "Come in for an inspection.",
      body: "Regular and extraordinary technical inspection of cars and motorcycles. Call the department or come during opening hours.",
      alt: "Vehicle technical inspection at the D.A.J.M.I. centre",
      call: "Call the department",
    },
    offerings: {
      kicker: "What you can do here",
      items: [
        {
          lead: "Inspection",
          title: "Regular and extraordinary.",
          body: "Technical inspection of cars and motorcycles. When you arrive, qualified staff advise you on keeping the vehicle in good condition.",
        },
        {
          lead: "Registration",
          title: "New and renewal.",
          body: "Help with registration and renewing registration, in the same place.",
        },
        {
          lead: "Insurance",
          title: "A policy with the inspection.",
          body: "Alongside the inspection, we also help you arrange a quality insurance policy.",
        },
      ],
    },
    service: {
      lead: "If a repair is needed",
      title: "The workshop is in the same house.",
      body: "If the inspection calls for work on the vehicle, you do not go elsewhere. The authorised Škoda service is in the same complex.",
      cta: "See workshop services",
      alt: "D.A.J.M.I. service workshop",
    },
    contact: {
      kicker: "Department",
      title: "Book an inspection.",
      body: "This is the technical inspection number, not the workshop.",
      hours: "Opening hours",
      place: "Location",
      location: "Sutorina, Herceg Novi",
      map: "Show on map",
      book: "Send an enquiry",
    },
  },
  aboutPage: {
    meta: {
      title: "About - D.A.J.M.I.",
      description:
        "D.A.J.M.I. in Herceg Novi: more than two decades, authorised Škoda service, technical inspection and Taxi More in one place.",
    },
    kicker: "About",
    title: "One company. Everything for your journey.",
    lead: "More than two decades in Herceg Novi. Taxi More, authorised Škoda service and technical inspection - in Sutorina.",
    story:
      "We are an authorised service partner for Škoda, and the workshop is open to every other brand as well. Technicians train at importer centres. The workshop has nine lift bays, genuine parts and licensed tools - warranty cover stays in place during the warranty period.",
    photo: {
      kicker: "The complex",
      title: "Sutorina, Herceg Novi.",
      alt: "Aerial view of the D.A.J.M.I. complex in Herceg Novi",
      storyAlt: "Service hall of the D.A.J.M.I. complex in Sutorina",
    },
    video: {
      play: "Play the film",
      playAria: "Play the video of the D.A.J.M.I. complex",
      iframeTitle: "Video of the D.A.J.M.I. complex in Sutorina",
    },
    cta: {
      kicker: "Contact",
      title: "Get in touch.",
      body: "For service, technical inspection or information - we are in Sutorina.",
      book: "Contact",
    },
  },
  galleryPage: {
    meta: {
      title: "Gallery - D.A.J.M.I.",
      description:
        "Photographs of the D.A.J.M.I. complex in Sutorina: the building, workshop, technical inspection and Taxi More.",
    },
    kicker: "Gallery",
    title: "The complex in Sutorina.",
    lead: "The building, workshop, technical inspection and Taxi More.",
    lightbox: "Enlarged photograph",
    close: "Close the enlarged photograph",
    prev: "Previous photograph",
    next: "Next photograph",
    expand: "View photograph",
    groups: {
      complex: "The complex",
      workshop: "Workshop",
      taxi: "Taxi More",
    },
    photos: {
      building: {
        caption: "Building",
        alt: "Main building of the authorised D.A.J.M.I. Škoda service",
      },
      hall: {
        caption: "Service hall",
        alt: "Service hall of the D.A.J.M.I. complex in Sutorina",
      },
      aerial: {
        caption: "The complex",
        alt: "Aerial view of the D.A.J.M.I. complex in Herceg Novi",
      },
      aerialPark: {
        caption: "Parking",
        alt: "Aerial view of the D.A.J.M.I. complex and parking in Sutorina",
      },
      entrance: {
        caption: "Approach",
        alt: "Approach to the D.A.J.M.I. Škoda service",
      },
      inspection: {
        caption: "Technical inspection",
        alt: "Vehicle technical inspection at the D.A.J.M.I. centre",
      },
      workshop: {
        caption: "Workshop",
        alt: "D.A.J.M.I. service workshop",
      },
      diagnostics: {
        caption: "Service and diagnostics",
        alt: "D.A.J.M.I. service workshop with lifts and work bays",
      },
      alignment: {
        caption: "Wheel alignment",
        alt: "Wheel alignment bay at the D.A.J.M.I. service",
      },
      tires: {
        caption: "Tyres",
        alt: "Tyre fitting and balancing equipment",
      },
      bodywork: {
        caption: "Bodywork and paint",
        alt: "D.A.J.M.I. bodywork and paint workshop with a vehicle on a lift",
      },
      desk: {
        caption: "Desk",
        alt: "Service desk and waiting area at D.A.J.M.I.",
      },
      climate: {
        caption: "Air conditioning",
        alt: "Air-conditioning service in the D.A.J.M.I. workshop",
      },
      crew: {
        caption: "Technicians",
        alt: "Technicians in the D.A.J.M.I. service workshop",
      },
      paint: {
        caption: "Paint shop",
        alt: "Paint mixing in the D.A.J.M.I. bodywork and paint workshop",
      },
      taxi: {
        caption: "Taxi More",
        alt: "Taxi More vehicle in front of the building with number 19730",
      },
      fleet: {
        caption: "Fleet",
        alt: "Taxi More BYD fleet in the parking lot in Sutorina",
      },
      charging: {
        caption: "Charging",
        alt: "Taxi More BYD at a charger in Sutorina",
      },
      interior: {
        caption: "Cabin",
        alt: "Interior of a Taxi More BYD vehicle",
      },
      dispatch: {
        caption: "19730",
        alt: "Taxi More fleet in front of the building with number 19730",
      },
      lineup: {
        caption: "Vehicles",
        alt: "A row of Taxi More BYD vehicles in Sutorina",
      },
    },
    cta: {
      kicker: "Contact",
      title: "Get in touch.",
      body: "For service, technical inspection or information - we are in Sutorina.",
      book: "Contact",
    },
  },
  privacyPage: {
    meta: {
      title: "Privacy policy - D.A.J.M.I.",
      description: "How D.A.J.M.I. treats data you leave through the website.",
    },
    kicker: "Legal",
    title: "Privacy policy.",
    lead: "Only what this site actually does. No analytics or advertising cookies.",
    updated: "Updated 1 September 2026.",
    sections: [
      {
        heading: "Who processes the data",
        body: [
          "\"COMPANY D.A.J.M.I.\" d.o.o. (Tax ID 02434296, registration number 5-0254363/021), registered in Sutorina, Herceg Novi, Montenegro. For questions about your data, write to info@dajmi.me or call +382 31 670 240.",
        ],
      },
      {
        heading: "Contact and enquiries",
        body: [
          "The contact form on the site is currently unavailable. Send enquiries by phone or email to the published numbers and addresses: info@dajmi.me, servis@dajmi.me or tehnickipregled@dajmi.me.",
          "If you call or write to the published numbers and addresses, those messages stay in our mail and phone records until we resolve them and delete them.",
        ],
      },
      {
        heading: "Cookies",
        body: [
          "The site sets only the dajmi-locale cookie, to remember the language (MNE or EN). It lasts up to one year and is needed for the language switcher.",
          "We do not use cookies for analytics, ads or tracking.",
        ],
      },
      {
        heading: "Content from other services",
        body: [
          "The Contact page loads a Google map. On About, playing the film loads Vimeo. On the homepage, starting the 360° tour loads the virtual walkthrough. Taxi More links go to taximore.com.",
          "Those services may set their own cookies under their own rules, which we do not control.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "You can ask to see, correct or delete data we hold about you. Write to info@dajmi.me.",
        ],
      },
    ],
  },
  termsPage: {
    meta: {
      title: "Terms of use - D.A.J.M.I.",
      description: "Rules for using the D.A.J.M.I. website.",
    },
    kicker: "Legal",
    title: "Terms of use.",
    lead: "This site is information about our services. A contract is made at the workshop or the inspection.",
    updated: "Updated 1 September 2026.",
    sections: [
      {
        heading: "Company information",
        body: [
          "This site is run by \"COMPANY D.A.J.M.I.\" d.o.o., registered at Jadranska br. 63, Sutorina, Herceg Novi, Montenegro. Tax ID (PIB): 02434296, registration number (matični broj): 5-0254363/021, VAT number: 90/31-01011-7. The company is registered with the Commercial Court in Podgorica.",
          "The service complex you visit is located in Sutorina, Herceg Novi.",
        ],
      },
      {
        heading: "The site",
        body: [
          "These pages present D.A.J.M.I. in Sutorina, Herceg Novi. Text, any prices that appear and service descriptions are information. They are not an offer or a contract.",
        ],
      },
      {
        heading: "Content",
        body: [
          "Text, photographs and video on the site belong to D.A.J.M.I., except where stated otherwise. Do not copy them for your own site or advert without our consent.",
        ],
      },
      {
        heading: "Links",
        body: [
          "The site also leads to other addresses: taximore.com, Google Maps, Vimeo and the 360° tour. Their own rules apply to that content.",
        ],
      },
      {
        heading: "Liability",
        body: [
          "We try to keep the information accurate. If something is out of date or availability changes, what we confirm by phone or at the complex applies.",
        ],
      },
      {
        heading: "Contact",
        body: [
          "Questions about the site: info@dajmi.me, +382 31 670 240. Sutorina, Herceg Novi.",
        ],
      },
    ],
  },
  footer: {
    blurb: "Authorised Škoda service in Herceg Novi.",
    navTitle: "Navigation",
    navAria: "Footer navigation",
    unitsTitle: "Business units",
    unitsAria: "Business units",
    contactTitle: "Contact",
    location: "Sutorina, Herceg Novi, Montenegro",
    legal: "\"COMPANY D.A.J.M.I.\" d.o.o. · Tax ID 02434296 · Reg. No. 5-0254363/021",
    privacy: "Privacy policy",
    terms: "Terms of use",
    backToTop: "Back to top",
    nav: [
      { href: "/", label: "Home" },
      { href: "/o-nama", label: "About" },
      { href: "/usluge", label: "Services" },
      { href: "/galerija", label: "Gallery" },
      { href: "https://taximore.com", label: "Taxi More" },
      { href: "/kontakt", label: "Contact" },
    ],
    units: [
      { href: "/usluge", label: "Authorised Škoda service" },
      { href: "/tehnicki-pregled", label: "Technical inspection" },
      { href: "https://taximore.com", label: "Taxi More" },
    ],
  },
  language: {
    label: "Language",
    cnr: "MNE",
    en: "EN",
  },
  notFound: {
    kicker: "404",
    title: "This page does not exist.",
    lead: "The link may be out of date. Go back to the homepage or call us.",
    home: "Home",
    contact: "Contact",
  },
} as const;

export const dictionaries = { cnr, en };
export type Dictionary = typeof cnr;
