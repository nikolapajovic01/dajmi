import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n/dictionaries";
import { SiteHeader } from "./site-header";

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

      <SiteHeader dict={dict} locale={locale} currentPath="/" />

      <div className="relative z-[2] flex flex-1 items-end px-[22px] pb-24 min-[821px]:px-10 min-[821px]:pb-32 min-[1181px]:px-[72px] min-[1181px]:pb-36">
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

          <Link
            href="/kontakt"
            className="mt-7 block bg-navy-accent px-[34px] py-[17px] text-center font-display text-base font-semibold tracking-[0.03em] text-white transition-colors hover:bg-white hover:text-navy min-[821px]:mt-11 min-[821px]:inline-block min-[821px]:py-[18px]"
          >
            {dict.hero.book}
          </Link>
        </div>
      </div>
    </section>
  );
}
