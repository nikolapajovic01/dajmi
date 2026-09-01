import { SITEMAP_PAGES, sitemapUrl } from "@/lib/sitemap-pages";

export function GET() {
  const urls = SITEMAP_PAGES.map((page) => `  <url>\n    <loc>${sitemapUrl(page.path)}</loc>\n  </url>`).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
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
