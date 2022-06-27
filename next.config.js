const STUDIO_REWRITE = {
  source: "/studio/:path*",
  destination:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333/studio/:path*"
      : "/studio/index.html",
      
};


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: () => [STUDIO_REWRITE],
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ['picsum.photos', 'cdn.sanity.io'],
  },

}

module.exports = nextConfig
