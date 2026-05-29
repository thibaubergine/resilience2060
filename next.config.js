/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/petroleum/:path*',
        destination: 'https://petroleum-inky.vercel.app/petroleum/:path*',
      },
    ]
  },
}
module.exports = nextConfig
  nextConfig
