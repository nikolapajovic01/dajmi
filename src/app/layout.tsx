import type { Metadata } from "next";
import { Archivo, Barlow } from "next/font/google";
import { getDictionary, htmlLang } from "@/lib/i18n/locale";
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
  const { dict } = await getDictionary();

  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const { locale } = await getDictionary();

  return (
    <html
      lang={htmlLang(locale)}
      className={`${archivo.variable} ${barlow.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
