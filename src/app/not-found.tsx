import Link from "next/link";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { getDictionary } from "@/lib/i18n/locale";
import { PHONE } from "@/lib/site-config";

export default async function NotFound() {
  const { locale, dict } = await getDictionary();
  const copy = dict.notFound;

  return (
    <>
      <main>
        <PageBanner
          dict={dict}
          locale={locale}
          currentPath=""
          kicker={copy.kicker}
          title={copy.title}
          lead={copy.lead}
        />

        <section className="bg-[#f4f3ef] px-[22px] py-14 text-navy min-[821px]:px-10 min-[821px]:py-16 min-[1181px]:px-[72px]">
          <div className="flex flex-col gap-3 min-[600px]:flex-row min-[600px]:items-center">
            <Link
              href="/"
              className="bg-navy px-8 py-[15px] text-center font-display text-sm font-semibold tracking-[0.04em] text-white transition-colors hover:bg-navy-accent"
            >
              {copy.home}
            </Link>
            <Link
              href="/kontakt"
              className="border border-navy/22 px-8 py-[15px] text-center font-display text-sm font-semibold tracking-[0.04em] text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
            >
              {copy.contact}
            </Link>
            <a
              href={PHONE.href}
              className="px-2 py-[15px] text-center font-display text-sm font-semibold tracking-[0.04em] text-navy/70 transition-colors hover:text-navy"
            >
              {PHONE.display}
            </a>
          </div>
        </section>
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
