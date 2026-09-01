import type { Metadata } from "next";
import { Archivo, Barlow } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { getDictionary, htmlLang } from "@/lib/i18n/locale";
import { SITE } from "@/lib/site-config";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
});

export async function generateMetadata(): Promise<Metadata> {
  const { dict, locale } = await getDictionary();

  return {
    metadataBase: new URL(SITE.url),
    title: dict.meta.title,
    description: dict.meta.description,
    applicationName: SITE.name,
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: locale === "cnr" ? "cnr_ME" : "en_US",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [
        {
          url: "/og.jpg",
          width: 1200,
          height: 630,
          alt: dict.meta.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: ["/og.jpg"],
    },
    icons: {
      icon: "/dajmi-logo-transparent.png",
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const { locale, dict } = await getDictionary();

  return (
    <html
      lang={htmlLang(locale)}
      className={`${archivo.variable} ${barlow.variable}`}
    >
      <body>
        <JsonLd dict={dict} />
        {children}
      </body>
    </html>
  );
}
