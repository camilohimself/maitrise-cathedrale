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
  // Redirections 301 permanentes (SEO cleanup - ancien site WordPress)
  async redirects() {
    return [
      // Actualité → Festival (1,330 vues)
      {
        source: '/actualite',
        destination: '/fas',
        permanent: true,
      },
      {
        source: '/actualite/',
        destination: '/fas',
        permanent: true,
      },
      // Festival d'Art Sacré (207 + 95 = 302 vues)
      {
        source: '/festival-dart-sacre',
        destination: '/fas',
        permanent: true,
      },
      {
        source: '/festival-dart-sacre/',
        destination: '/fas',
        permanent: true,
      },
      {
        source: '/20eme-festival-dart-sacre',
        destination: '/fas',
        permanent: true,
      },
      {
        source: '/20eme-festival-dart-sacre/',
        destination: '/fas',
        permanent: true,
      },
      // École Maîtrisienne (176 vues)
      {
        source: '/lecole-maitrisienne',
        destination: '/maitrise',
        permanent: true,
      },
      {
        source: '/lecole-maitrisienne/',
        destination: '/maitrise',
        permanent: true,
      },
      // Ensemble Vocal et Instrumental (161 vues)
      {
        source: '/lensemble-vocal-et-instrumental',
        destination: '/maitrise',
        permanent: true,
      },
      {
        source: '/lensemble-vocal-et-instrumental/',
        destination: '/maitrise',
        permanent: true,
      },
      // Cycle des concerts (158 vues)
      {
        source: '/le-cycle-des-concerts-2',
        destination: '/agenda-billetterie',
        permanent: true,
      },
      {
        source: '/le-cycle-des-concerts-2/',
        destination: '/agenda-billetterie',
        permanent: true,
      },
      // Organistes (133 vues)
      {
        source: '/les-organistes',
        destination: '/maitrise',
        permanent: true,
      },
      {
        source: '/les-organistes/',
        destination: '/maitrise',
        permanent: true,
      },
      // Animations liturgiques (126 vues)
      {
        source: '/les-animations-liturgiques',
        destination: '/maitrise',
        permanent: true,
      },
      {
        source: '/les-animations-liturgiques/',
        destination: '/maitrise',
        permanent: true,
      },
      // Fondation (102 vues)
      {
        source: '/la-fondation',
        destination: '/maitrise',
        permanent: true,
      },
      {
        source: '/la-fondation/',
        destination: '/maitrise',
        permanent: true,
      },
      // Directeur musical (95 vues)
      {
        source: '/le-directeur-musical',
        destination: '/maitrise',
        permanent: true,
      },
      {
        source: '/le-directeur-musical/',
        destination: '/maitrise',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
