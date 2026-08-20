import Image from "next/image";
import { TAXI_SITE } from "@/lib/site-config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function ElectricFleet({ copy }: { copy: Dictionary["fleet"] }) {
  return (
    <section
      aria-labelledby="electric-fleet-title"
      className="relative flex min-h-[460px] items-end overflow-hidden bg-navy text-white min-[821px]:min-h-[500px] min-[821px]:items-center min-[1181px]:min-h-[540px]"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/bydflota.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[72%_center]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,32,56,.28)_0%,rgba(15,32,56,.82)_84%)] min-[821px]:bg-[linear-gradient(90deg,rgba(15,32,56,.88)_0%,rgba(15,32,56,.58)_40%,rgba(15,32,56,.16)_100%)]"
      />

      <div className="relative z-[1] w-full max-w-[640px] px-[22px] py-12 min-[821px]:px-10 min-[821px]:py-14 min-[1181px]:px-[72px]">
        <p className="font-display text-[11px] font-semibold tracking-[0.22em] text-white/78 uppercase min-[821px]:text-xs min-[821px]:tracking-[0.24em]">
          {copy.kicker}
        </p>

        <h2
          id="electric-fleet-title"
          className="mt-5 max-w-[560px] text-balance font-display text-[36px] leading-[1.04] font-bold tracking-[-0.03em] min-[821px]:mt-6 min-[821px]:text-[clamp(40px,3.8vw,54px)]"
        >
          {copy.title}
        </h2>

        <p className="mt-4 max-w-[460px] text-[15px] leading-[1.65] text-white/78 min-[821px]:mt-5 min-[821px]:text-base">
          {copy.body}
        </p>

        <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-white/18 pt-5 font-display text-[13px] font-medium tracking-[0.04em] text-white/72 min-[821px]:mt-7 min-[821px]:text-sm">
          {copy.facts.map((fact, index) => (
            <span key={fact} className="inline-flex items-center gap-3">
              {index > 0 ? (
                <span aria-hidden="true" className="text-white/28">
                  ·
                </span>
              ) : null}
              {fact}
            </span>
          ))}
        </p>

        <a
          href={TAXI_SITE.href}
          target="_blank"
          rel="noreferrer"
          className="group mt-8 inline-flex w-full items-center justify-between gap-5 bg-white px-6 py-4 font-display text-sm font-semibold tracking-[0.04em] text-navy transition-colors hover:bg-navy-accent hover:text-white min-[600px]:w-fit min-[600px]:min-w-[300px]"
        >
          {copy.cta}
          <svg
            aria-hidden="true"
            viewBox="0 0 28 12"
            className="h-3 w-7 transition-transform duration-300 group-hover:translate-x-1.5"
            fill="none"
          >
            <path
              d="M0 6h26M21 1l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
