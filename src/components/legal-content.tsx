type LegalCopy = {
  updated: string;
  sections: readonly { heading: string; body: readonly string[] }[];
};

export function LegalContent({ copy }: { copy: LegalCopy }) {
  return (
    <section className="bg-[#f4f3ef] px-[22px] py-16 text-navy min-[821px]:px-10 min-[821px]:py-20 min-[1181px]:px-[72px] min-[1181px]:py-24">
      <p className="font-display text-[11px] font-semibold tracking-[0.22em] text-navy/45 uppercase">
        {copy.updated}
      </p>

      <div className="mt-10 max-w-[680px]">
        {copy.sections.map((section) => (
          <article key={section.heading} className="border-t border-navy/12 py-8 first:pt-0 first:border-t-0">
            <h2 className="font-display text-[22px] leading-tight font-bold tracking-[-0.03em] min-[821px]:text-[26px]">
              {section.heading}
            </h2>
            {section.body.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 text-[15px] leading-[1.7] text-navy/62 min-[821px]:text-base"
              >
                {paragraph}
              </p>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}
