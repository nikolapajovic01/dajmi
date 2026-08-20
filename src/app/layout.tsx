import type { Metadata } from "next";
import { Archivo, Barlow } from "next/font/google";
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

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={SITE.locale} className={`${archivo.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  );
}
