/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US"
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload "
          }
        ]
      }  
    ]
  },
  async rewrites() {
    return [
        {
          source: '/.well-known/webfinger',
          destination: '/api/.well-known/webfinger'
        }
    ];
  }
}

module.exports = nextConfig
