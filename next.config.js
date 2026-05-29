/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/petroleum',
          destination: 'https://petroleum-inky.vercel.app/petroleum',
        },
        {
          source: '/petroleum/:path*',
          destination: 'https://petroleum-inky.vercel.app/petroleum/:path*',
        },
      ],
    }
  },
}
module.exports = nextConfignextConfignextConfig
