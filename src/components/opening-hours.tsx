import type { Dictionary } from "@/lib/i18n/dictionaries";

const ROWS = ["weekdays", "saturday", "sunday"] as const;

export function OpeningHours({
  hours,
  layout = "compact",
  className = "",
  dayClassName = "",
}: {
  hours: Dictionary["hours"];
  layout?: "compact" | "detail";
  className?: string;
  dayClassName?: string;
}) {
  const rows = ROWS.map((key) => hours[key]);

  if (layout === "detail") {
    return (
      <ul className={`grid grid-cols-3 ${className}`}>
        {rows.map((row, index) => (
          <li
            key={row.days}
            className={`min-w-0 ${index > 0 ? "border-l border-navy/12 pl-5 min-[821px]:pl-8 min-[1181px]:pl-10" : "pr-4 min-[821px]:pr-7"}`}
          >
            <p className="font-display text-[11px] font-semibold tracking-[0.14em] text-navy/50 uppercase min-[821px]:text-[13px]">
              {row.days}
            </p>
            <p className="mt-2 font-display text-[15px] leading-snug font-semibold tracking-[-0.02em] min-[821px]:mt-3 min-[821px]:text-[22px] min-[821px]:leading-none min-[1181px]:text-[26px]">
              {row.time}
            </p>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={className}>
      {rows.map((row) => (
        <li key={row.days}>
          <span className={`font-display font-semibold ${dayClassName}`.trim()}>
            {row.days}
          </span>
          <span className="mx-2 opacity-30">·</span>
          {row.time}
        </li>
      ))}
    </ul>
  );
}
