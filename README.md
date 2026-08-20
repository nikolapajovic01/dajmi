# DAJMI

Sajt za DAJMI — ovlašćeni Škoda servis u Herceg Novom. Next.js (App Router) + Tailwind CSS.

Trenutno je implementirana samo hero sekcija (`src/components/hero.tsx`); ostale stranice (usluge, o nama, galerija, kontakt) i navigacioni linkovi su placeholderi za dalji razvoj.

## Razvoj

```bash
npm install
npm run dev
```

Otvori [http://localhost:3000](http://localhost:3000).

## Struktura

- `src/app` — rute (App Router)
- `src/components` — UI komponente (`hero`, `mobile-nav`, `logo`)
- `src/lib/site-config.ts` — sadržaj koji se lako menja (telefon, navigacija, statistike)
- `public/hero.mp4`, `public/hero-poster.jpg` — video pozadina hero sekcije

## Deploy

Projekat je deployovan na [Vercel](https://vercel.com).
