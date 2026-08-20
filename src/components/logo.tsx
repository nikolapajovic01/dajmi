import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="DAJMI — početna"
      className={`flex items-center gap-3.5 ${className}`}
    >
      <span
        aria-hidden="true"
        className="relative flex size-7 flex-none items-center justify-center bg-white after:size-2.5 after:bg-navy after:content-[''] min-[821px]:size-[34px] min-[821px]:after:size-3"
      />
      <span className="font-display text-[19px] font-bold tracking-[0.28em] text-white min-[821px]:text-[23px] min-[821px]:tracking-[0.3em]">
        DAJMI
      </span>
    </Link>
  );
}
