import type { Metadata } from "next";
import { Outfit, Spectral } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import SkipLink from "@/components/SkipLink";

// OUTFIT pour UI/Navigation (remplace Inter)
const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

// SPECTRAL pour titres/contenu (remplace Playfair)
const spectral = Spectral({ 
  subsets: ["latin"],
  variable: '--font-spectral',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://maitrise-cathedrale.ch'),
  title: {
    default: 'Maîtrise de la Cathédrale de Sion',
    template: '%s | Maîtrise de la Cathédrale de Sion'
  },
  description: 'La Maîtrise de la Cathédrale de Sion - École de chant et ensemble vocal d\'exception au cœur du Valais. Formation musicale et spirituelle depuis 2004.',
  keywords: ['Maîtrise', 'Cathédrale', 'Sion', 'Valais', 'Chant', 'École musicale', 'Ensemble vocal', 'Musique sacrée', 'Formation musicale', 'Fondation'],
  authors: [{ name: 'Fondation de la Maîtrise de la Cathédrale de Sion' }],
  creator: 'Fondation de la Maîtrise de la Cathédrale de Sion',
  publisher: 'Fondation de la Maîtrise de la Cathédrale de Sion',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_CH',
    url: 'https://maitrise-cathedrale.ch',
    siteName: 'Maîtrise de la Cathédrale de Sion',
    title: 'Maîtrise de la Cathédrale de Sion',
    description: 'École de chant et ensemble vocal d\'exception au cœur du Valais. Formation musicale et spirituelle depuis 2004.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Maîtrise de la Cathédrale de Sion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maîtrise de la Cathédrale de Sion',
    description: 'École de chant et ensemble vocal d\'exception au cœur du Valais.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${outfit.variable} ${spectral.variable}`}>
      <body className="font-sans antialiased">
        <SkipLink />
        
        <StructuredData type="organization" />
        <StructuredData type="musicGroup" />
        
        <Header />
        <Breadcrumbs />
        
        <main 
          id="main-content" 
          role="main"
          aria-label="Contenu principal"
          style={{ minHeight: 'calc(100vh - 80px)' }}
        >
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}