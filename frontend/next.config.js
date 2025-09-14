/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  basePath: '/browser-ocr',
  assetPrefix: '/browser-ocr/', 
  images: {
    unoptimized: true,
  },
}
 
module.exports = nextConfig