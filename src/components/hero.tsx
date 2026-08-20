import Link from "next/link";
import { FACTS, NAV_LINKS, PHONE } from "@/lib/site-config";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-navy text-white min-[821px]:min-h-[min(720px,90dvh)] min-[1181px]:min-h-[min(860px,88dvh)]">
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

      <header className="relative z-[3] flex items-center justify-between gap-8 px-[22px] py-[22px] min-[821px]:justify-start min-[821px]:gap-8 min-[821px]:border-b min-[821px]:border-white/16 min-[821px]:px-10 min-[821px]:py-[30px] min-[1181px]:gap-14 min-[1181px]:px-[72px]">
        <Logo />

        <nav
          aria-label="Glavna navigacija"
          className="hidden flex-1 items-center justify-end gap-6 text-sm font-medium min-[821px]:flex min-[1181px]:gap-9 min-[1181px]:text-[15px]"
        >
          {NAV_LINKS.map((link) => (
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

        <a
          href={PHONE.href}
          className="hidden flex-none items-center gap-2.5 border border-white/45 px-[22px] py-3 font-display text-sm font-semibold tracking-[0.04em] text-white transition-colors before:size-1.5 before:rounded-full before:bg-white before:content-[''] hover:bg-white hover:text-navy hover:before:bg-navy min-[821px]:flex"
        >
          {PHONE.display}
        </a>

        <MobileNav />
      </header>

      <div className="relative z-[2] flex flex-1 items-end px-[22px] pb-[112px] min-[821px]:px-10 min-[821px]:pb-[88px] min-[1181px]:px-[72px] min-[1181px]:pb-[112px]">
        <div className="max-w-[830px]">
          <p className="mb-[18px] flex items-center gap-3.5 font-display text-[11px] font-semibold tracking-[0.22em] text-white/82 uppercase min-[821px]:mb-[26px] min-[821px]:text-xs min-[821px]:tracking-[0.24em] min-[821px]:before:h-px min-[821px]:before:w-11 min-[821px]:before:bg-white/55 min-[821px]:before:content-['']">
            Herceg Novi · Crna Gora
          </p>

          <h1 className="text-balance font-display text-[40px] leading-[1.08] font-bold tracking-[-0.015em] text-white min-[821px]:text-[clamp(40px,5.3vw,76px)] min-[821px]:leading-[1.04] min-[821px]:tracking-[-0.02em]">
            Sve na jednom mestu
            <br />
            za vaše vozilo
          </h1>

          <p className="mt-4 max-w-[560px] text-base leading-relaxed text-white/86 min-[821px]:hidden">
            Ovlašćeni Škoda servis u Herceg Novom.
          </p>
          <p className="mt-[26px] hidden max-w-[560px] text-xl leading-relaxed text-white/86 min-[821px]:block">
            Ovlašćeni Škoda servis u Herceg Novom. Dugogodišnja tradicija,
            originalni delovi i sertifikovani tehničari.
          </p>

          <div className="mt-7 flex flex-col gap-[11px] min-[821px]:mt-11 min-[821px]:flex-row min-[821px]:flex-wrap min-[821px]:gap-4">
            <Link
              href="/zakazivanje"
              className="bg-navy-accent px-[34px] py-[17px] text-center font-display text-base font-semibold tracking-[0.03em] text-white transition-colors hover:bg-white hover:text-navy min-[821px]:w-auto min-[821px]:py-[18px]"
            >
              Zakažite termin
            </Link>
            <a
              href={PHONE.href}
              className="border border-white/60 px-[34px] py-[17px] text-center font-display text-base font-semibold tracking-[0.03em] text-white transition-colors hover:bg-white/12 min-[821px]:w-auto min-[821px]:py-[18px]"
            >
              Pozovite nas
            </a>
          </div>

          <p className="mt-[22px] flex items-center gap-3 text-[12.5px] tracking-[0.04em] text-white/75 min-[821px]:mt-[34px] min-[821px]:text-sm min-[821px]:tracking-[0.06em]">
            <span className="flex-none border border-white/35 px-2.5 py-1.5 font-display text-[10px] font-bold tracking-[0.14em] text-white min-[821px]:px-3 min-[821px]:text-[11px] min-[821px]:tracking-[0.16em]">
              A+
            </span>
            Bonitetna ocena A+ · Ovlašćeni partner
          </p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-[2] flex min-[821px]:inset-x-auto min-[821px]:right-0">
        {FACTS.map((fact) => (
          <div
            key={fact.label}
            className="flex-1 border-r border-line bg-white px-[22px] py-[18px] last:border-r-0 min-[821px]:flex-none min-[821px]:px-7 min-[821px]:py-[22px] min-[1181px]:px-10 min-[1181px]:py-[26px]"
          >
            <div className="font-display text-[18px] font-bold text-navy min-[821px]:text-[26px]">
              {fact.num}
            </div>
            <div className="mt-0.5 text-xs tracking-[0.04em] text-grey min-[821px]:mt-1 min-[821px]:text-[13px]">
              {fact.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
