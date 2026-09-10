"use client";

import Image from "next/image";
import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n/dictionaries";
import { useReveal } from "@/lib/use-reveal";
import { PHONE } from "@/lib/site-config";
import { withLocale } from "@/lib/i18n/paths";
import { AboutVideo } from "./about-video";
import { ServiceChapter } from "./service-chapter";

const UNIT_DELAY = ["", "about-reveal-delay-1", "about-reveal-delay-2"] as const;

export function AboutContent({
  about,
  units,
  copy,
  locale,
}: {
  about: Dictionary["about"];
  units: Dictionary["units"];
  copy: Dictionary["aboutPage"];
  locale: Locale;
}) {
  const storyRef = useReveal<HTMLElement>(0.18);
  const videoRef = useReveal<HTMLElement>(0.16);
  const unitsRef = useReveal<HTMLElement>(0.16);
  const ctaRef = useReveal<HTMLElement>(0.2);

  return (
    <>
      <section
        ref={storyRef}
        aria-labelledby="about-story-title"
        className="grid bg-[#f4f3ef] text-navy min-[821px]:grid-cols-2 min-[821px]:min-h-[480px] min-[1181px]:min-h-[540px]"
      >
        <div className="service-image-reveal group relative aspect-[16/9] overflow-hidden bg-navy/5 min-[821px]:aspect-auto">
          <Image
            src="/dajmi55.webp"
            alt={copy.photo.storyAlt}
            fill
            sizes="(max-width: 820px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>

        <div className="service-copy-reveal flex flex-col justify-center px-[22px] py-10 min-[821px]:px-10 min-[821px]:py-14 min-[1181px]:px-[72px]">
          <h2
            id="about-story-title"
            className="font-display text-[13px] font-bold tracking-[0.16em] text-navy uppercase min-[821px]:text-sm"
          >
            {about.kicker}
          </h2>
          <p className="mt-5 max-w-[460px] text-[15px] leading-[1.7] text-navy/62 min-[821px]:mt-6 min-[821px]:text-base">
            {about.body}
          </p>
          <p className="mt-5 max-w-[460px] text-[15px] leading-[1.7] text-navy/62 min-[821px]:text-base">
            {copy.story}
          </p>
        </div>
      </section>

      <section aria-label={copy.place.kicker} className="bg-[#f4f3ef] text-navy">
        <ServiceChapter
          lead={copy.place.kicker}
          name={copy.place.title}
          body={copy.place.body}
          alt={copy.place.alt}
          src="/galerija/AQ5A9187.webp"
          reverse
        />
      </section>

      <section ref={videoRef} aria-labelledby="about-video-title" className="bg-[#f4f3ef] text-navy">
        <div className="px-[22px] min-[821px]:px-10 min-[1181px]:px-[72px]">
          <div className="about-copy-reveal border-t border-navy/18 pt-5">
            <p className="font-display text-[11px] font-semibold tracking-[0.22em] uppercase min-[821px]:text-xs">
              {copy.photo.kicker}
            </p>
            <h2
              id="about-video-title"
              className="mt-4 font-display text-[28px] leading-tight font-bold tracking-[-0.03em] min-[821px]:text-[clamp(32px,3.2vw,44px)]"
            >
              {copy.photo.title}
            </h2>
          </div>
        </div>

        <div className="about-image-reveal about-reveal-delay-1 mt-8 min-[821px]:mt-9">
          <AboutVideo copy={copy.video} posterAlt={copy.photo.alt} />
        </div>
      </section>

      <section
        ref={unitsRef}
        aria-labelledby="about-units-title"
        className="bg-[#f4f3ef] px-[22px] pt-16 pb-16 text-navy min-[821px]:px-10 min-[821px]:pt-20 min-[821px]:pb-20 min-[1181px]:px-[72px] min-[1181px]:pt-24 min-[1181px]:pb-24"
      >
        <div className="about-copy-reveal border-t border-navy/18 pt-5">
          <h2
            id="about-units-title"
            className="font-display text-[13px] font-bold tracking-[0.16em] text-navy uppercase min-[821px]:text-sm"
          >
            {units.kicker}
          </h2>
        </div>

        <ul className="mt-8 min-[821px]:mt-10">
          {units.items.map((unit, index) => {
            const href = unit.href;
            const external = href.startsWith("http");

            return (
              <li
                key={unit.name}
                className={`about-copy-reveal grid gap-2 border-t border-navy/12 py-7 min-[821px]:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] min-[821px]:items-baseline min-[821px]:gap-12 min-[821px]:py-8 ${UNIT_DELAY[index] ?? ""}`}
              >
                <p className="font-display text-[13px] font-semibold tracking-[0.14em] text-navy/45 uppercase">
                  {unit.name}
                </p>
                <div>
                  <p className="max-w-[520px] text-[15px] leading-[1.7] text-navy/62 min-[821px]:text-base">
                    {unit.description}
                  </p>
                  <Link
                    href={withLocale(locale, href)}
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="group mt-4 inline-flex items-center gap-3 border-b border-navy pb-1.5 font-display text-xs font-semibold tracking-[0.08em] uppercase transition-colors hover:border-navy-accent hover:text-navy-accent"
                  >
                    {unit.cta}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 28 12"
                      className="h-3 w-7 transition-transform duration-300 group-hover:translate-x-1.5"
                      fill="none"
                    >
                      <path d="M0 6h26M21 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section ref={ctaRef} aria-labelledby="about-cta-title" className="bg-navy text-white">
        <div className="flex flex-col gap-8 px-[22px] py-14 min-[821px]:flex-row min-[821px]:items-end min-[821px]:justify-between min-[821px]:px-10 min-[821px]:py-16 min-[1181px]:px-[72px]">
          <div className="about-copy-reveal max-w-[560px]">
            <p className="font-display text-[11px] font-semibold tracking-[0.22em] text-white/55 uppercase min-[821px]:text-xs">
              {copy.cta.kicker}
            </p>
            <h2
              id="about-cta-title"
              className="mt-3 font-display text-[28px] leading-tight font-bold tracking-[-0.03em] min-[821px]:text-[clamp(32px,3.2vw,44px)]"
            >
              {copy.cta.title}
            </h2>
            <p className="mt-3 max-w-[420px] text-[15px] leading-[1.65] text-white/62">
              {copy.cta.body}
            </p>
          </div>

          <div className="about-copy-reveal about-reveal-delay-1 flex flex-col gap-3 min-[600px]:flex-row min-[600px]:items-center">
            <Link
              href={withLocale(locale, "/kontakt")}
              className="bg-white px-8 py-[15px] text-center font-display text-sm font-semibold tracking-[0.04em] text-navy transition-colors hover:bg-navy-accent hover:text-white min-[821px]:px-9 min-[821px]:py-4"
            >
              {copy.cta.book}
            </Link>
            <a
              href={PHONE.href}
              className="border border-white/45 px-8 py-[15px] text-center font-display text-sm font-semibold tracking-[0.04em] transition-colors hover:bg-white/12 min-[821px]:px-9 min-[821px]:py-4"
            >
              {PHONE.display}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
