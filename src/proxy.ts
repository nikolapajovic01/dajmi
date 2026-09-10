import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.[^/]+$/;

function withLocaleHeader(response: NextResponse, locale: "cnr" | "en") {
  response.headers.set("x-dajmi-locale", locale);
  return response;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/sitemap.xml" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xsl" ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (pathname === "/cnr" || pathname.startsWith("/cnr/")) {
    const bare = pathname === "/cnr" ? "/" : pathname.slice(4);
    const url = request.nextUrl.clone();
    url.pathname = bare === "" ? "/" : bare;
    return NextResponse.redirect(url, 301);
  }

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return withLocaleHeader(NextResponse.next(), "en");
  }

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? "/cnr" : `/cnr${pathname}`;
  return withLocaleHeader(NextResponse.rewrite(url), "cnr");
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
