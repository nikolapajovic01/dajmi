import type { Dictionary, Locale } from "@/lib/i18n/dictionaries";
import { SiteHeader } from "./site-header";

export function PageBanner({
  dict,
  locale,
  currentPath,
  kicker,
  title,
  lead,
}: {
  dict: Dictionary;
  locale: Locale;
  currentPath: string;
  kicker: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="relative flex flex-col bg-navy text-white">
      <SiteHeader dict={dict} locale={locale} currentPath={currentPath} />

      <div className="px-[22px] pt-12 pb-10 min-[821px]:px-10 min-[821px]:pt-16 min-[821px]:pb-14 min-[1181px]:px-[72px] min-[1181px]:pt-20 min-[1181px]:pb-16">
        <p className="font-display text-[11px] font-semibold tracking-[0.22em] text-white/78 uppercase min-[821px]:text-xs min-[821px]:tracking-[0.24em]">
          {kicker}
        </p>

        <h1 className="mt-4 max-w-[760px] text-balance font-display text-[38px] leading-[1.08] font-bold tracking-[-0.025em] min-[821px]:mt-5 min-[821px]:text-[clamp(40px,4.4vw,60px)] min-[821px]:leading-[1.03]">
          {title}
        </h1>

        {lead ? (
          <p className="mt-5 max-w-[560px] text-base leading-[1.7] text-white/78 min-[821px]:mt-6 min-[821px]:text-lg">
            {lead}
          </p>
        ) : null}
      </div>
    </section>
  );
}
