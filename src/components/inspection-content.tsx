"use client";

import Image from "next/image";
import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";
import { useReveal } from "@/lib/use-reveal";
import { CONTACTS } from "@/lib/site-config";
import { OpeningHours } from "./opening-hours";
import { ServiceChapter } from "./service-chapter";

const INSPECTION = CONTACTS.find((contact) => contact.key === "inspection")!;
const CARD_DELAY = ["", "about-reveal-delay-1", "about-reveal-delay-2"] as const;

export function InspectionContent({
  copy,
  hours,
  locale,
}: {
  copy: Dictionary["inspectionPage"];
  hours: Dictionary["hours"];
  locale: Locale;
}) {
  const heroRef = useReveal<HTMLElement>(0.18);
  const offeringsRef = useReveal<HTMLElement>(0.16);
  const ctaRef = useReveal<HTMLElement>(0.2);

  return (
    <>
      <section
        ref={heroRef}
        aria-labelledby="inspection-hero-title"
        className="grid bg-[#f4f3ef] text-navy min-[821px]:grid-cols-2 min-[821px]:min-h-[480px] min-[1181px]:min-h-[540px]"
      >
        <div className="service-image-reveal group relative aspect-[16/9] overflow-hidden bg-navy/5 min-[821px]:aspect-auto">
          <Image
            src="/saSajta/tehnickipregled.webp"
            alt={copy.hero.alt}
            fill
            priority
            sizes="(max-width: 820px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>

        <div className="service-copy-reveal flex flex-col justify-center px-[22px] py-10 min-[821px]:px-10 min-[821px]:py-14 min-[1181px]:px-14 min-[1181px]:py-16">
          <p className="font-display text-[11px] font-semibold tracking-[0.22em] text-navy/48 uppercase min-[821px]:text-xs">
            {copy.contact.kicker}
          </p>
          <h2
            id="inspection-hero-title"
            className="mt-4 max-w-[420px] text-balance font-display text-[28px] leading-[1.08] font-bold tracking-[-0.03em] min-[821px]:text-[clamp(30px,3vw,42px)]"
          >
            {copy.hero.title}
          </h2>
          <p className="mt-5 max-w-[460px] text-[15px] leading-[1.7] text-navy/62 min-[821px]:mt-6 min-[821px]:text-base">
            {copy.hero.body}
          </p>
          <a
            href={INSPECTION.phone.href}
            aria-label={copy.hero.call}
            className="mt-7 block font-display text-[28px] leading-none font-semibold tracking-[-0.02em] transition-colors hover:text-navy-accent min-[821px]:mt-8 min-[821px]:text-[34px]"
          >
            {INSPECTION.phone.display}
          </a>
          <a
            href={INSPECTION.email.href}
            className="mt-3 inline-block text-[15px] text-navy/55 transition-colors hover:text-navy-accent"
          >
            {INSPECTION.email.display}
          </a>
          <p className="mt-2 max-w-[360px] text-[13px] leading-[1.55] text-navy/42">
            {copy.contact.body}
          </p>
        </div>
      </section>

      <section
        ref={offeringsRef}
        aria-labelledby="inspection-offerings-title"
        className="bg-[#f4f3ef] px-[22px] pt-16 pb-16 text-navy min-[821px]:px-10 min-[821px]:pt-20 min-[821px]:pb-20 min-[1181px]:px-[72px] min-[1181px]:pt-24 min-[1181px]:pb-24"
      >
        <div className="about-copy-reveal border-t border-navy/18 pt-5">
          <h2
            id="inspection-offerings-title"
            className="font-display text-[13px] font-bold tracking-[0.16em] text-navy uppercase min-[821px]:text-sm"
          >
            {copy.offerings.kicker}
          </h2>
        </div>

        <ol className="mt-8 grid gap-5 min-[821px]:mt-10 min-[821px]:grid-cols-3 min-[821px]:items-stretch min-[821px]:gap-5 min-[1181px]:gap-8">
          {copy.offerings.items.map((item, index) => (
            <li
              key={item.lead}
              className={`about-copy-reveal flex h-full flex-col border border-navy/12 px-5 py-6 min-[821px]:px-6 min-[821px]:py-7 min-[1181px]:px-7 min-[1181px]:py-8 ${CARD_DELAY[index] ?? ""}`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-display text-[13px] font-semibold tracking-[0.14em] text-navy/45 uppercase">
                  {item.lead}
                </p>
                <span className="font-display text-[12px] font-semibold tracking-[0.14em] text-navy/32">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 font-display text-[22px] leading-tight font-semibold tracking-[-0.02em] min-[821px]:text-[24px] min-[1181px]:text-[26px]">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-[15px] leading-[1.7] text-navy/58 min-[821px]:text-base">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-label={copy.service.title} className="bg-navy text-white">
        <ServiceChapter
          name={copy.service.title}
          lead={copy.service.lead}
          body={copy.service.body}
          alt={copy.service.alt}
          src="/servis1.webp"
          reverse
          href="/usluge"
          cta={copy.service.cta}
          tone="dark"
          locale={locale}
        />
      </section>

      <section
        ref={ctaRef}
        aria-labelledby="inspection-cta-title"
        className="border-t border-white/12 bg-[#0b1728] text-white"
      >
        <div className="flex flex-col gap-8 px-[22px] py-14 min-[821px]:flex-row min-[821px]:items-end min-[821px]:justify-between min-[821px]:px-10 min-[821px]:py-16 min-[1181px]:px-[72px]">
          <div className="about-copy-reveal max-w-[560px]">
            <p className="font-display text-[11px] font-semibold tracking-[0.22em] text-white/55 uppercase min-[821px]:text-xs">
              {copy.contact.kicker}
            </p>
            <h2
              id="inspection-cta-title"
              className="mt-3 font-display text-[28px] leading-tight font-bold tracking-[-0.03em] min-[821px]:text-[clamp(32px,3.2vw,44px)]"
            >
              {copy.contact.title}
            </h2>
            <p className="mt-3 max-w-[420px] text-[15px] leading-[1.65] text-white/62">
              {copy.hero.lead}
            </p>
            <OpeningHours
              hours={hours}
              className="mt-4 text-[15px] text-white/62"
              dayClassName="text-white"
            />
          </div>

          <div className="about-copy-reveal about-reveal-delay-1 flex flex-col gap-3 min-[600px]:flex-row min-[600px]:items-center">
            <a
              href={INSPECTION.phone.href}
              className="bg-white px-8 py-[15px] text-center font-display text-sm font-semibold tracking-[0.04em] text-navy transition-colors hover:bg-navy-accent hover:text-white min-[821px]:px-9 min-[821px]:py-4"
            >
              {copy.hero.call}
            </a>
            <Link
              href={withLocale(locale, "/kontakt")}
              className="border border-white/45 px-8 py-[15px] text-center font-display text-sm font-semibold tracking-[0.04em] transition-colors hover:bg-white/12 min-[821px]:px-9 min-[821px]:py-4"
            >
              {copy.contact.book}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
