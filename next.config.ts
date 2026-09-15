import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects() {
    return [
      {
        // Canonical host is the apex — avoid www/apex duplicate-content indexing.
        source: "/:path*",
        has: [{ type: "host", value: "www.dajmi.me" }],
        destination: "https://dajmi.me/:path*",
        permanent: true,
      },
      {
        // The old single-page site's only URL indexed by Google — preserve its ranking.
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/zakazivanje",
        destination: "/kontakt",
        permanent: false,
      },
      {
        source: "/taxi-more",
        destination: "https://taximore.com",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
