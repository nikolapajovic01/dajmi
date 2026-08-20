import { setLocale } from "@/lib/i18n/actions";
import type { Locale } from "@/lib/i18n/dictionaries";

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
  return (
    <div
      role="group"
      aria-label={label}
      className="flex flex-none items-center gap-1.5 font-display text-[11px] font-semibold tracking-[0.16em] whitespace-nowrap"
    >
      {OPTIONS.map((option, index) => {
        const active = option.value === locale;

        return (
          <span key={option.value} className="flex items-center gap-1.5">
            {index > 0 ? (
              <span aria-hidden="true" className="text-white/28">
                /
              </span>
            ) : null}
            <form action={setLocale}>
              <input type="hidden" name="locale" value={option.value} />
              <button
                type="submit"
                aria-pressed={active}
                className={
                  active
                    ? "cursor-default text-white"
                    : "text-white/48 transition-colors hover:text-white"
                }
              >
                {option.label}
              </button>
            </form>
          </span>
        );
      })}
    </div>
  );
}
