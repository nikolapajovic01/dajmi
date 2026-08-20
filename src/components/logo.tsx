import Image from "next/image";
import Link from "next/link";

export function Logo({
  className = "",
  imageClassName = "h-[76px] min-[821px]:h-[92px]",
  ariaLabel = "DAJMI — početna",
}: {
  className?: string;
  imageClassName?: string;
  ariaLabel?: string;
}) {
  return (
    <Link href="/" aria-label={ariaLabel} className={`flex items-center ${className}`}>
      <Image
        src="/dajmi-logo.png"
        alt="DAJMI"
        width={500}
        height={500}
        className={`w-auto -translate-x-[17.4%] brightness-0 invert ${imageClassName}`}
        priority
      />
    </Link>
  );
}
