"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n/dictionaries";
import { swapLocale } from "@/lib/i18n/paths";

const OPTIONS: { value: Locale; label: string }[] = [
  { value: "cnr", label: "MNE" },
  { value: "en", label: "EN" },
];

export function LanguageSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname() || "/";

  return (
    <div
      role="group"
      aria-label={label}
      className="flex flex-none items-center gap-1.5 font-display text-[11px] font-semibold tracking-[0.16em] whitespace-nowrap"
    >
      {OPTIONS.map((option, index) => {
        const active = option.value === locale;
        const href = swapLocale(pathname, option.value);

        return (
          <span key={option.value} className="flex items-center gap-1.5">
            {index > 0 ? (
              <span aria-hidden="true" className="text-white/28">
                /
              </span>
            ) : null}
            {active ? (
              <span aria-current="true" className="cursor-default text-white">
                {option.label}
              </span>
            ) : (
              <Link
                href={href}
                className="text-white/48 transition-colors hover:text-white"
                hrefLang={option.value === "cnr" ? "sr-ME" : "en"}
              >
                {option.label}
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
}
