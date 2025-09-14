/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  basePath: '/browser-ocr',
  assetPrefix: '/browser-ocr/',
  },
}
 
module.exports = nextConfig