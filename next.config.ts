import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects() {
    return [
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
