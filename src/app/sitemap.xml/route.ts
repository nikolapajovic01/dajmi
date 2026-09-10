import { SITEMAP_PAGES, sitemapUrl } from "@/lib/sitemap-pages";
import { withLocale } from "@/lib/i18n/paths";

export function GET() {
  const urls = SITEMAP_PAGES.map((page) => {
    const cnrPath = withLocale("cnr", page.path);
    const enPath = withLocale("en", page.path);
    const cnrLoc = sitemapUrl(cnrPath);
    const enLoc = sitemapUrl(enPath);

    return `  <url>
    <loc>${cnrLoc}</loc>
    <xhtml:link rel="alternate" hreflang="cnr" href="${cnrLoc}" />
    <xhtml:link rel="alternate" hreflang="en" href="${enLoc}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${cnrLoc}" />
  </url>
  <url>
    <loc>${enLoc}</loc>
    <xhtml:link rel="alternate" hreflang="cnr" href="${cnrLoc}" />
    <xhtml:link rel="alternate" hreflang="en" href="${enLoc}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${cnrLoc}" />
  </url>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
