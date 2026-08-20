import Image from "next/image";
import Link from "next/link";
import { LOCATION, PHONE } from "@/lib/site-config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(LOCATION.mapQuery)}`;

export function ContactLocation({ copy }: { copy: Dictionary["cta"] }) {
  return (
    <section
      aria-labelledby="contact-cta-title"
      className="relative flex min-h-[360px] items-end overflow-hidden bg-navy text-white min-[821px]:min-h-[400px] min-[821px]:items-center min-[1181px]:min-h-[420px]"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/herceg-novi.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,32,56,.38)_0%,rgba(15,32,56,.86)_78%)] min-[821px]:bg-[linear-gradient(90deg,rgba(15,32,56,.9)_0%,rgba(15,32,56,.68)_42%,rgba(15,32,56,.28)_100%)]"
      />

      <div className="relative z-[1] w-full max-w-[640px] px-[22px] py-10 min-[821px]:px-10 min-[821px]:py-12 min-[1181px]:px-[72px]">
        <p className="font-display text-[11px] font-semibold tracking-[0.22em] text-white/78 uppercase min-[821px]:text-xs min-[821px]:tracking-[0.24em]">
          {copy.kicker}
        </p>

        <h2
          id="contact-cta-title"
          className="mt-4 text-balance font-display text-[32px] leading-[1.06] font-bold tracking-[-0.03em] min-[821px]:mt-5 min-[821px]:text-[clamp(34px,3.4vw,46px)] min-[821px]:leading-[1.04]"
        >
          {copy.title}
        </h2>

        <p className="mt-4 max-w-[460px] text-[15px] leading-[1.65] text-white/78 min-[821px]:mt-5 min-[821px]:text-base">
          {copy.body}
        </p>

        <div className="mt-6 flex flex-col gap-3 min-[600px]:flex-row min-[600px]:items-center min-[821px]:mt-6 min-[821px]:gap-4">
          <Link
            href="/zakazivanje"
            className="bg-white px-8 py-[15px] text-center font-display text-sm font-semibold tracking-[0.04em] text-navy transition-colors hover:bg-navy-accent hover:text-white min-[821px]:px-9 min-[821px]:py-4"
          >
            {copy.book}
          </Link>
          <a
            href={PHONE.href}
            className="border border-white/55 px-8 py-[15px] text-center font-display text-sm font-semibold tracking-[0.04em] transition-colors hover:bg-white/12 min-[821px]:px-9 min-[821px]:py-4"
          >
            {copy.call}
          </a>
        </div>

        <a
          href={MAP_LINK}
          target="_blank"
          rel="noreferrer"
          className="group mt-4 inline-flex items-center gap-3 font-display text-[11px] font-semibold tracking-[0.08em] text-white/72 uppercase transition-colors hover:text-white"
        >
          {copy.map}
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
