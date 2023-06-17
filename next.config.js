/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.sanity.io',
      'stephfoley.com',
      'localhost',
    ],
  }
}

module.exports = nextConfig
