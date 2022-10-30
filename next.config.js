/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placeimg.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placeimg.com',
      },
    ],
  },
}

module.exports = nextConfig
