import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/paths";

export function Logo({
  locale,
  className = "",
  imageClassName = "h-[76px] min-[821px]:h-[92px]",
  ariaLabel = "D.A.J.M.I. - početna",
}: {
  locale: Locale;
  className?: string;
  imageClassName?: string;
  ariaLabel?: string;
}) {
  return (
    <Link
      href={withLocale(locale, "/")}
      aria-label={ariaLabel}
      className={`flex items-center ${className}`}
    >
      <Image
        src="/dajmi-logo-transparent.png"
        alt="D.A.J.M.I."
        width={500}
        height={500}
        className={`w-auto -translate-x-[17.4%] brightness-0 invert ${imageClassName}`}
        priority
      />
    </Link>
  );
}
