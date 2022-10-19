/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["placeimg.com"],
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
