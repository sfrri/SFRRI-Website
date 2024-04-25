/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/webp'],
      },
    experimental: {
        optimizePackageImports: ['@emotion/cache'],
        optimizePackageImports: ['@emotion/react'],
        optimizePackageImports: ['@emotion/styled'],
        optimizePackageImports: ['@maptiler/leaflet-maptilersdk'],
        optimizePackageImports: ['@mui/icons-material'],
        optimizePackageImports: ['@mui/material'],
        optimizePackageImports: ['@next/bundle-analyzer'],
        optimizePackageImports: ['"@react-google-maps/api'],
        optimizePackageImports: ['isomorphic-dompurify'],
        optimizePackageImports: ['leaflet'],
        optimizePackageImports: ['next'],
        optimizePackageImports: ['react'],
        optimizePackageImports: ['react-dom'],
        optimizePackageImports: ['react-markdown'],
        optimizePackageImports: ['rehype-external-links'],
        optimizePackageImports: ['rehype-raw'],
      },
};

// const withBundleAnalyzer = require('@next/bundle-analyzer')()
// const withBundleAnalyzer = () => import ('@next/bundle-analyzer')
 
// export default process.env.ANALYZE === 'true' ? withBundleAnalyzer(nextConfig) : nextConfig

//   npx cross-env ANALYZE=true npm run build
// module.exports = {
//     experimental: {
//       optimizePackageImports: ['@emotion/cache'],
//       optimizePackageImports: ['@emotion/react'],
//       optimizePackageImports: ['@emotion/styled'],
//       optimizePackageImports: ['@maptiler/leaflet-maptilersdk'],
//       optimizePackageImports: ['@mui/icons-material'],
//       optimizePackageImports: ['@mui/material'],
//       optimizePackageImports: ['@next/bundle-analyzer'],
//       optimizePackageImports: ['"@react-google-maps/api'],
//     },
//   }

export default nextConfig;
