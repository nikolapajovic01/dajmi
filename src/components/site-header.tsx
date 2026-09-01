import Link from "next/link";
import { PHONE } from "@/lib/site-config";
import type { Dictionary, Locale } from "@/lib/i18n/dictionaries";
import { LanguageSwitcher } from "./language-switcher";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";

export function SiteHeader({
  dict,
  locale,
  currentPath,
  className = "",
}: {
  dict: Dictionary;
  locale: Locale;
  currentPath: string;
  className?: string;
}) {
  return (
    <header
      className={`relative z-[3] flex items-center justify-between gap-8 px-[22px] py-3.5 min-[821px]:justify-start min-[821px]:gap-8 min-[821px]:border-b min-[821px]:border-white/16 min-[821px]:px-10 min-[821px]:py-4 min-[1181px]:gap-14 min-[1181px]:px-[72px] ${className}`}
    >
      <Logo ariaLabel={dict.logoHome} />

      <nav
        aria-label={dict.nav.main}
        className="hidden flex-1 items-center justify-end gap-6 text-sm font-medium min-[821px]:flex min-[1181px]:gap-9 min-[1181px]:text-[15px]"
      >
        {dict.nav.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={link.href === currentPath ? "page" : undefined}
            className="text-white/78 transition-colors hover:text-white aria-[current=page]:text-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-3 min-[821px]:gap-6">
        <LanguageSwitcher locale={locale} label={dict.language.label} />
        <a
          href={PHONE.href}
          className="hidden flex-none items-center gap-2.5 border border-white/45 px-[22px] py-3 font-display text-sm font-semibold tracking-[0.04em] text-white transition-colors before:size-1.5 before:rounded-full before:bg-white before:content-[''] hover:bg-white hover:text-navy hover:before:bg-navy min-[821px]:flex"
        >
          {PHONE.display}
        </a>
        <MobileNav
          links={dict.nav.links}
          labels={{
            open: dict.nav.open,
            close: dict.nav.close,
            mobile: dict.nav.mobile,
          }}
        />
      </div>
    </header>
  );
}
