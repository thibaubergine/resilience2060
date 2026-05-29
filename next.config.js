/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/petroleum/assets/:path*',
        destination: 'https://petroleum-inky.vercel.app/assets/:path*',
      },
      {
        source: '/petroleum/:file.:ext',
        destination: 'https://petroleum-inky.vercel.app/:file.:ext',
      },
      {
        source: '/petroleum',
        destination: 'https://petroleum-inky.vercel.app/index.html',
      },
      {
        source: '/petroleum/:path*',
        destination: 'https://petroleum-inky.vercel.app/index.html',
      },
    ]
  },
}
module.exports = nextConfignextConfig
