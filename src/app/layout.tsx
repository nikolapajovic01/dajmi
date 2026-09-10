import { Archivo, Barlow } from "next/font/google";
import { headers } from "next/headers";
import { htmlLang, resolveLocale } from "@/lib/i18n/locale";
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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headerStore = await headers();
  const locale = resolveLocale(headerStore.get("x-dajmi-locale"));

  return (
    <html
      lang={htmlLang(locale)}
      className={`${archivo.variable} ${barlow.variable}`}
      style={{ colorScheme: "light" }}
    >
      <body>{children}</body>
    </html>
  );
}
