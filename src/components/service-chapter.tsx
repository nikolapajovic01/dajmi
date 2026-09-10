"use client";

import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";
import { useReveal } from "@/lib/use-reveal";

export function ServiceChapter({
  name,
  lead,
  body,
  alt,
  src,
  reverse,
  priority = false,
  href,
  cta,
  tone = "light",
  locale,
}: {
  name: string;
  lead: string;
  body: string;
  alt: string;
  src: string;
  reverse: boolean;
  priority?: boolean;
  href?: string;
  cta?: string;
  tone?: "light" | "dark";
  locale?: Locale;
}) {
  const ref = useReveal<HTMLElement>(0.18);
  const dark = tone === "dark";
  const linkHref = href && locale ? withLocale(locale, href) : href;

  return (
    <article
      ref={ref}
      className="grid min-[821px]:grid-cols-2 min-[821px]:min-h-[480px] min-[1181px]:min-h-[540px]"
    >
      <div
        className={`service-image-reveal group relative aspect-[16/9] overflow-hidden min-[821px]:aspect-auto min-[821px]:min-h-full ${
          dark ? "bg-white/5" : "bg-navy/5"
        } ${reverse ? "min-[821px]:order-2 service-image-from-right" : ""}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 820px) 100vw, 50vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div
        className={`service-copy-reveal flex flex-col justify-center px-[22px] py-10 min-[821px]:py-14 ${
          reverse
            ? "min-[821px]:pr-10 min-[821px]:pl-[22px] min-[1181px]:pr-14 min-[1181px]:pl-[72px]"
            : "min-[821px]:pl-10 min-[821px]:pr-[22px] min-[1181px]:pl-14 min-[1181px]:pr-[72px]"
        }`}
      >
        <p
          className={`font-display text-[11px] font-semibold tracking-[0.22em] uppercase min-[821px]:text-xs ${
            dark ? "text-white/55" : "text-navy/48"
          }`}
        >
          {lead}
        </p>
        <h2 className="mt-4 max-w-[420px] text-balance font-display text-[28px] leading-[1.08] font-bold tracking-[-0.03em] min-[821px]:text-[clamp(30px,3vw,42px)]">
          {name}
        </h2>
        <p
          className={`mt-5 max-w-[460px] text-[15px] leading-[1.7] min-[821px]:mt-6 min-[821px]:text-base ${
            dark ? "text-white/62" : "text-navy/62"
          }`}
        >
          {body}
        </p>
        {linkHref && cta ? (
          <Link
            href={linkHref}
            className={`group/link mt-7 inline-flex w-fit items-center gap-4 border-b pb-2.5 font-display text-sm font-semibold tracking-[0.06em] uppercase transition-colors ${
              dark
                ? "border-white/45 hover:border-white hover:text-white"
                : "border-navy hover:border-navy-accent hover:text-navy-accent"
            }`}
          >
            {cta}
            <svg
              aria-hidden="true"
              viewBox="0 0 28 12"
              className="h-3 w-7 transition-transform duration-300 group-hover/link:translate-x-1.5"
              fill="none"
            >
              <path d="M0 6h26M21 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
        ) : null}
      </div>
    </article>
  );
}
