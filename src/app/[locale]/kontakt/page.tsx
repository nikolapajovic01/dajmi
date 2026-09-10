import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { OpeningHours } from "@/components/opening-hours";
import { PageBanner } from "@/components/page-banner";
import { getDictionary, requireLocale } from "@/lib/i18n/locale";
import { localeAlternates } from "@/lib/i18n/metadata";
import { CONTACTS, LOCATION } from "@/lib/site-config";

const PATH = "/kontakt";
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(LOCATION.mapQuery)}`;
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(LOCATION.mapQuery)}&output=embed`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = requireLocale((await params).locale);
  const { dict } = getDictionary(locale);

  return {
    title: dict.contactPage.meta.title,
    description: dict.contactPage.meta.description,
    alternates: localeAlternates(locale, PATH),
  };
}

export default async function KontaktPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = requireLocale((await params).locale);
  const { dict } = getDictionary(locale);
  const copy = dict.contactPage;

  return (
    <>
      <main>
        <PageBanner
          dict={dict}
          locale={locale}
          currentPath={PATH}
          kicker={copy.kicker}
          title={copy.title}
          lead={copy.lead}
        />

        <section aria-labelledby="contact-details-title" className="bg-[#f4f3ef] text-navy">
          <div className="px-[22px] py-16 min-[821px]:px-10 min-[821px]:py-20 min-[1181px]:px-[72px] min-[1181px]:py-24">
            <div className="grid items-start gap-12 min-[821px]:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] min-[821px]:gap-14 min-[1181px]:gap-20">
              <div>
                <div className="border-t border-navy/18 pt-5">
                  <h2
                    id="contact-details-title"
                    className="font-display text-[13px] font-bold tracking-[0.16em] text-navy uppercase min-[821px]:text-sm"
                  >
                    {copy.channels.title}
                  </h2>
                </div>

                <ul className="mt-8 min-[821px]:mt-10">
                  {CONTACTS.map((contact) => (
                    <li
                      key={contact.key}
                      className="grid gap-2 border-t border-navy/12 py-6 min-[821px]:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] min-[821px]:items-baseline min-[821px]:gap-8 min-[821px]:py-7"
                    >
                      <p className="font-display text-[13px] font-semibold tracking-[0.14em] text-navy/50 uppercase">
                        {copy.channels[contact.key]}
                      </p>
                      <div>
                        <a
                          href={contact.phone.href}
                          className="block font-display text-[22px] leading-none font-semibold tracking-[-0.02em] transition-colors hover:text-navy-accent min-[821px]:text-[26px]"
                        >
                          {contact.phone.display}
                        </a>
                        <a
                          href={contact.email.href}
                          className="mt-2 inline-block text-[15px] text-navy/58 transition-colors hover:text-navy-accent"
                        >
                          {contact.email.display}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="border-t border-navy/18 pt-5">
                  <p className="font-display text-[11px] font-semibold tracking-[0.22em] uppercase min-[821px]:text-xs">
                    {copy.form.title}
                  </p>
                </div>
                <div className="mt-8 min-[821px]:mt-10">
                  <ContactForm copy={copy.form} />
                </div>
              </div>
            </div>

            <div className="mt-14 border-t border-navy/18 pt-8 min-[821px]:mt-16 min-[821px]:grid min-[821px]:grid-cols-[minmax(0,0.32fr)_minmax(0,1fr)] min-[821px]:items-end min-[821px]:gap-10 min-[821px]:pt-10 min-[1181px]:mt-20 min-[1181px]:gap-16">
              <h2 className="font-display text-[13px] font-bold tracking-[0.16em] text-navy uppercase min-[821px]:text-sm">
                {dict.hours.title}
              </h2>
              <OpeningHours
                hours={dict.hours}
                layout="detail"
                className="mt-6 min-[821px]:mt-0"
              />
            </div>
          </div>
        </section>

        <section aria-labelledby="contact-location-title" className="bg-navy text-white">
          <div className="flex flex-col gap-5 px-[22px] pt-12 pb-8 min-[821px]:flex-row min-[821px]:items-end min-[821px]:justify-between min-[821px]:px-10 min-[821px]:pt-14 min-[821px]:pb-9 min-[1181px]:px-[72px]">
            <div>
              <p className="font-display text-[11px] font-semibold tracking-[0.22em] text-white/55 uppercase min-[821px]:text-xs">
                {copy.location.title}
              </p>
              <h2
                id="contact-location-title"
                className="mt-3 font-display text-[28px] leading-tight font-bold tracking-[-0.03em] min-[821px]:text-[clamp(30px,3vw,40px)]"
              >
                {copy.location.value}
              </h2>
            </div>

            <a
              href={MAP_LINK}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 font-display text-[11px] font-semibold tracking-[0.08em] text-white/72 uppercase transition-colors hover:text-white"
            >
              {copy.location.map}
              <svg
                aria-hidden="true"
                viewBox="0 0 28 12"
                className="h-3 w-7 transition-transform duration-300 group-hover:translate-x-1.5"
                fill="none"
              >
                <path d="M0 6h26M21 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>
          </div>

          <div className="relative h-[280px] overflow-hidden min-[821px]:h-[380px] min-[1181px]:h-[440px]">
            <iframe
              src={MAP_EMBED_SRC}
              title={copy.location.value}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="size-full border-0 grayscale"
            />
          </div>
        </section>
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
