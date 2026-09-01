import type { Dictionary } from "@/lib/i18n/dictionaries";
import { localBusinessJsonLd } from "@/lib/json-ld";

export function JsonLd({ dict }: { dict: Dictionary }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd(dict)) }}
    />
  );
}
