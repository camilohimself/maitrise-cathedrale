import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    qualities: [75, 80, 85, 90, 95], // Fix quality warning Dr Claude
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Optimisations performance Dr Claude  
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP', 'FCP'],
  },
};

export default nextConfig;
