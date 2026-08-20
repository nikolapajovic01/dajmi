import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function BusinessUnits({ copy }: { copy: Dictionary["units"] }) {
  return (
    <section
      aria-labelledby="business-units-title"
      className="bg-navy px-[22px] py-12 text-white min-[821px]:px-10 min-[821px]:py-14 min-[1181px]:px-[72px] min-[1181px]:py-16"
    >
      <div className="border-t border-white/16 pt-5">
        <p className="font-display text-[11px] font-semibold tracking-[0.22em] text-white/65 uppercase min-[821px]:text-xs">
          {copy.kicker}
        </p>
      </div>

      <div className="mt-7 grid gap-5 min-[821px]:mt-8 min-[821px]:grid-cols-[minmax(0,1.15fr)_minmax(0,.85fr)] min-[821px]:items-end min-[821px]:gap-12 min-[1181px]:gap-16">
        <h2
          id="business-units-title"
          className="max-w-[760px] text-balance font-display text-[38px] leading-[1.08] font-bold tracking-[-0.025em] min-[821px]:text-[clamp(44px,4.2vw,66px)] min-[821px]:leading-[1.02]"
        >
          {copy.titleLine1}
          <br />
          {copy.titleLine2}
        </h2>
        <p className="max-w-[520px] text-base leading-[1.7] text-white/62 min-[821px]:pb-1 min-[1181px]:text-[17px]">
          {copy.body}
        </p>
      </div>

      <div className="mt-10 grid gap-10 min-[821px]:mt-12 min-[821px]:grid-cols-3 min-[821px]:items-stretch min-[821px]:gap-5 min-[1181px]:gap-8">
        {copy.items.map((unit) => (
          <article
            key={unit.number}
            className="group flex h-full flex-col border-t border-white/18 pt-5"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
              <Image
                src={unit.image}
                alt={unit.alt}
                fill
                sizes="(max-width: 820px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(7,17,31,.42)_100%)]"
              />
              <span className="absolute right-4 bottom-4 font-display text-[11px] font-semibold tracking-[0.16em] text-white/72 min-[1181px]:right-5 min-[1181px]:bottom-5">
                {unit.number}
              </span>
            </div>

            <div className="flex flex-1 flex-col pt-6 min-[1181px]:pt-7">
              <h3 className="text-balance font-display text-2xl leading-tight font-semibold tracking-[-0.02em] min-[1181px]:text-[28px]">
                {unit.name}
              </h3>
              <p className="mt-4 max-w-[440px] text-[15px] leading-[1.65] text-white/58">
                {unit.description}
              </p>
              <Link
                href={unit.href}
                className="mt-auto inline-flex w-fit items-center gap-4 border-b border-white/45 pt-5 pb-2 font-display text-xs font-semibold tracking-[0.08em] uppercase transition-colors hover:border-white hover:text-white"
              >
                {unit.cta}
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
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
