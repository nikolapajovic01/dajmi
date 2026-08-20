import Link from "next/link";
import { PHONE } from "@/lib/site-config";
import type { Dictionary, Locale } from "@/lib/i18n/dictionaries";
import { LanguageSwitcher } from "./language-switcher";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";

export function Hero({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-navy text-white min-[821px]:min-h-[min(720px,100dvh)] min-[1181px]:min-h-[min(860px,100dvh)]">
      <div className="absolute inset-0" aria-hidden="true">
        <video
          className="size-full object-cover object-center motion-reduce:hidden"
          src="/hero.mp4"
          poster="/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,32,56,.42)_0%,rgba(15,32,56,.86)_70%)] min-[821px]:bg-[linear-gradient(90deg,rgba(15,32,56,.84)_0%,rgba(15,32,56,.62)_46%,rgba(15,32,56,.32)_100%)]"
      />

      <header className="relative z-[3] flex items-center justify-between gap-8 px-[22px] py-3.5 min-[821px]:justify-start min-[821px]:gap-8 min-[821px]:border-b min-[821px]:border-white/16 min-[821px]:px-10 min-[821px]:py-4 min-[1181px]:gap-14 min-[1181px]:px-[72px]">
        <Logo ariaLabel={dict.logoHome} />

        <nav
          aria-label={dict.nav.main}
          className="hidden flex-1 items-center justify-end gap-6 text-sm font-medium min-[821px]:flex min-[1181px]:gap-9 min-[1181px]:text-[15px]"
        >
          {dict.nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={link.href === "/" ? "page" : undefined}
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

      <div className="relative z-[2] flex flex-1 items-end px-[22px] pb-12 min-[821px]:px-10 min-[821px]:pb-16 min-[1181px]:px-[72px] min-[1181px]:pb-20">
        <div className="max-w-[830px]">
          <p className="mb-[18px] font-display text-[11px] font-semibold tracking-[0.22em] text-white/82 uppercase min-[821px]:mb-[26px] min-[821px]:text-xs min-[821px]:tracking-[0.24em]">
            {dict.hero.kicker}
          </p>

          <h1 className="text-balance font-display text-[40px] leading-[1.08] font-bold tracking-[-0.015em] text-white min-[821px]:text-[clamp(40px,5.3vw,76px)] min-[821px]:leading-[1.04] min-[821px]:tracking-[-0.02em]">
            {dict.hero.titleLine1}
            <br />
            {dict.hero.titleLine2}
          </h1>

          <p className="mt-4 max-w-[560px] text-base leading-relaxed text-white/86 min-[821px]:hidden">
            {dict.hero.leadMobile}
          </p>
          <p className="mt-[26px] hidden max-w-[560px] text-xl leading-relaxed text-white/86 min-[821px]:block">
            {dict.hero.leadDesktop}
          </p>

          <div className="mt-7 flex flex-col gap-[11px] min-[821px]:mt-11 min-[821px]:flex-row min-[821px]:flex-wrap min-[821px]:gap-4">
            <Link
              href="/zakazivanje"
              className="bg-navy-accent px-[34px] py-[17px] text-center font-display text-base font-semibold tracking-[0.03em] text-white transition-colors hover:bg-white hover:text-navy min-[821px]:w-auto min-[821px]:py-[18px]"
            >
              {dict.hero.book}
            </Link>
            <a
              href={PHONE.href}
              className="border border-white/60 px-[34px] py-[17px] text-center font-display text-base font-semibold tracking-[0.03em] text-white transition-colors hover:bg-white/12 min-[821px]:w-auto min-[821px]:py-[18px]"
            >
              {dict.hero.call}
            </a>
          </div>

          <p className="mt-[22px] flex items-center gap-3 text-[12.5px] tracking-[0.04em] text-white/75 min-[821px]:mt-[34px] min-[821px]:text-sm min-[821px]:tracking-[0.06em]">
            <span className="flex-none border border-white/35 px-2.5 py-1.5 font-display text-[10px] font-bold tracking-[0.14em] text-white min-[821px]:px-3 min-[821px]:text-[11px] min-[821px]:tracking-[0.16em]">
              A+
            </span>
            {dict.hero.rating}
          </p>
        </div>
      </div>
    </section>
  );
}
