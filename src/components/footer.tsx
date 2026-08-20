import Link from "next/link";
import { PHONE } from "@/lib/site-config";
import type { Dictionary, Locale } from "@/lib/i18n/dictionaries";
import { LanguageSwitcher } from "./language-switcher";
import { Logo } from "./logo";

export function Footer({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <footer className="border-t border-white/12 bg-[#0b1728] text-white">
      <div className="px-[22px] pt-16 pb-10 min-[821px]:px-10 min-[821px]:pt-20 min-[821px]:pb-12 min-[1181px]:px-[72px]">
        <div className="grid gap-12 min-[821px]:grid-cols-[minmax(220px,1.15fr)_repeat(3,minmax(0,0.85fr))] min-[821px]:gap-10 min-[1181px]:gap-16">
          <div className="max-w-[300px]">
            <Logo
              ariaLabel={dict.logoHome}
              imageClassName="h-[88px] min-[821px]:h-[108px]"
            />
            <p className="mt-6 text-[15px] leading-[1.7] text-white/52">
              {dict.footer.blurb}
            </p>
          </div>

          <nav aria-label={dict.footer.navAria}>
            <p className="font-display text-[10px] font-semibold tracking-[0.18em] text-white/38 uppercase">
              {dict.footer.navTitle}
            </p>
            <ul className="mt-5">
              {dict.footer.nav.map((link) => (
                <li key={link.label} className="border-b border-white/8 last:border-b-0">
                  <Link
                    href={link.href}
                    className="block py-2.5 text-[15px] text-white/72 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={dict.footer.unitsAria}>
            <p className="font-display text-[10px] font-semibold tracking-[0.18em] text-white/38 uppercase">
              {dict.footer.unitsTitle}
            </p>
            <ul className="mt-5">
              {dict.footer.units.map((link) => (
                <li key={link.label} className="border-b border-white/8 last:border-b-0">
                  <Link
                    href={link.href}
                    className="block py-2.5 text-[15px] text-white/72 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-display text-[10px] font-semibold tracking-[0.18em] text-white/38 uppercase">
              {dict.footer.contactTitle}
            </p>
            <ul className="mt-5">
              <li className="border-b border-white/8 py-2.5">
                <a
                  href={PHONE.href}
                  className="text-[15px] text-white/72 transition-colors hover:text-white"
                >
                  {PHONE.display}
                </a>
              </li>
              <li className="py-2.5 text-[15px] text-white/72">
                {dict.footer.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/12 pt-6 min-[821px]:mt-20 min-[821px]:flex-row min-[821px]:items-center min-[821px]:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <p className="text-[13px] text-white/38">
              © {new Date().getFullYear()} DAJMI
            </p>
            <LanguageSwitcher locale={locale} label={dict.language.label} />
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-white/45">
            <Link
              href="/politika-privatnosti"
              className="transition-colors hover:text-white"
            >
              {dict.footer.privacy}
            </Link>
            <Link
              href="/uslovi-koriscenja"
              className="transition-colors hover:text-white"
            >
              {dict.footer.terms}
            </Link>
            <a
              href="#"
              className="font-display text-[11px] font-semibold tracking-[0.12em] text-white/55 uppercase transition-colors hover:text-white"
            >
              {dict.footer.backToTop}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
