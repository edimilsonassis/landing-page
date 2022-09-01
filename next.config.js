/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'scontent.ftjl2-1.fna.fbcdn.net',
      'images.unsplash.com',
      'apdash.themetags.com'
    ],
  },
}

module.exports = nextConfig
