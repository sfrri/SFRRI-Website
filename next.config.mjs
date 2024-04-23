/** @type {import('next').NextConfig} */
const nextConfig = {};

// const withBundleAnalyzer = require('@next/bundle-analyzer')()
const withBundleAnalyzer = () => import ('@next/bundle-analyzer')
 
export default process.env.ANALYZE === 'true' ? withBundleAnalyzer(nextConfig) : nextConfig

//   npx cross-env ANALYZE=true npm run build
