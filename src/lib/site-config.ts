export const SITE = {
  name: "DAJMI",
  title: "DAJMI — Ovlašćeni Škoda servis, Herceg Novi",
  description:
    "Ovlašćeni Škoda servis u Herceg Novom. Dugogodišnja tradicija, originalni delovi i sertifikovani tehničari.",
  locale: "sr-Latn-ME",
};

export const PHONE = {
  display: "+382 31 350 100",
  href: "tel:+38231350100",
};

export const NAV_LINKS = [
  { href: "/", label: "Početna" },
  { href: "/o-nama", label: "O nama" },
  { href: "/usluge", label: "Usluge" },
  { href: "/tehnicki-pregled", label: "Tehnički pregled" },
  { href: "/galerija", label: "Galerija" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const FACTS = [
  { num: "25+", label: "godina tradicije" },
  { num: "Pon–Sub", label: "08:00 — 17:00" },
] as const;
