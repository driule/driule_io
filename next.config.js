/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // Custom domain (driule.io) - no basePath needed
}

module.exports = nextConfig

