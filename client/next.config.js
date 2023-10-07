/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.example.com",
      },
    ],
  },
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
