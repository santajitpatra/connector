/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["assets.acme.com", "avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
