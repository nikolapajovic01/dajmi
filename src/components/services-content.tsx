import Image from "next/image";
import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";
import { CONTACTS } from "@/lib/site-config";
import { OpeningHours } from "./opening-hours";
import { ServiceChapter } from "./service-chapter";

const SERVICE = CONTACTS.find((contact) => contact.key === "service")!;

const SERVICE_PHOTOS = [
  "/servis1.webp",
  "/reglaza.webp",
  "/vulkanizer.webp",
  "/limarski.webp",
] as const;

export function ServicesContent({
  copy,
  hours,
  locale,
}: {
  copy: Dictionary["servicesPage"];
  hours: Dictionary["hours"];
  locale: Locale;
}) {
  return (
    <>
      <section aria-label={copy.kicker} className="bg-[#f4f3ef] text-navy">
        {copy.items.map((item, index) => (
          <ServiceChapter
            key={item.name}
            name={item.name}
            lead={item.lead}
            body={item.body}
            alt={item.alt}
            src={SERVICE_PHOTOS[index]}
            reverse={index % 2 === 1}
            priority={index === 0}
          />
        ))}

        <ServiceChapter
          name={copy.inspection.title}
          lead={copy.inspection.kicker}
          body={copy.inspection.body}
          alt={copy.inspection.alt}
          src="/tehnicki.webp"
          reverse={copy.items.length % 2 === 1}
          href="/tehnicki-pregled"
          cta={copy.inspection.cta}
          locale={locale}
        />
      </section>

      <section
        aria-labelledby="services-cta-title"
        className="relative flex min-h-[360px] items-end overflow-hidden bg-navy text-white min-[821px]:min-h-[400px] min-[821px]:items-center min-[1181px]:min-h-[420px]"
      >
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/prilaz.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,32,56,.38)_0%,rgba(15,32,56,.86)_78%)] min-[821px]:bg-[linear-gradient(90deg,rgba(15,32,56,.9)_0%,rgba(15,32,56,.68)_42%,rgba(15,32,56,.28)_100%)]"
        />

        <div className="relative z-[1] w-full max-w-[640px] px-[22px] py-10 min-[821px]:px-10 min-[821px]:py-12 min-[1181px]:px-[72px]">
          <p className="font-display text-[11px] font-semibold tracking-[0.22em] text-white/78 uppercase min-[821px]:text-xs min-[821px]:tracking-[0.24em]">
            {copy.cta.kicker}
          </p>

          <h2
            id="services-cta-title"
            className="mt-4 text-balance font-display text-[32px] leading-[1.06] font-bold tracking-[-0.03em] min-[821px]:mt-5 min-[821px]:text-[clamp(34px,3.4vw,46px)] min-[821px]:leading-[1.04]"
          >
            {copy.cta.title}
          </h2>

          <p className="mt-4 max-w-[460px] text-[15px] leading-[1.65] text-white/78 min-[821px]:mt-5 min-[821px]:text-base">
            {copy.cta.body}
          </p>

          <OpeningHours
            hours={hours}
            className="mt-5 font-display text-[13px] tracking-[0.04em] text-white/58"
            dayClassName="text-white/80"
          />

          <div className="mt-6 flex flex-col gap-3 min-[600px]:flex-row min-[600px]:items-center min-[821px]:mt-6 min-[821px]:gap-4">
            <Link
              href={withLocale(locale, "/kontakt")}
              className="bg-white px-8 py-[15px] text-center font-display text-sm font-semibold tracking-[0.04em] text-navy transition-colors hover:bg-navy-accent hover:text-white min-[821px]:px-9 min-[821px]:py-4"
            >
              {copy.cta.book}
            </Link>
            <a
              href={SERVICE.phone.href}
              className="border border-white/55 px-8 py-[15px] text-center font-display text-sm font-semibold tracking-[0.04em] transition-colors hover:bg-white/12 min-[821px]:px-9 min-[821px]:py-4"
            >
              {copy.cta.call}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
