import type { Metadata } from "next";
import { Outfit, Spectral } from "next/font/google";
import "./globals.css";
import "@/styles/global-responsive.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import SkipLink from "@/components/SkipLink";
import CookieBanner from "@/components/cookies/CookieBanner";

// OUTFIT pour UI/Navigation (remplace Inter)
const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial', 'sans-serif'],
});

// SPECTRAL pour titres/contenu (remplace Playfair)
const spectral = Spectral({
  subsets: ["latin"],
  variable: '--font-spectral',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  fallback: ['Georgia', 'Times New Roman', 'serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://maitrise-cathedrale.vercel.app'),
  title: {
    default: 'Maîtrise de la Cathédrale de Sion - École de chant et musique sacrée',
    template: '%s | Maîtrise Cathédrale Sion'
  },
  description: 'École de chant d\'excellence au cœur du Valais. Formation musicale, Ensemble Vocal et chant grégorien dans la tradition de la Cathédrale Notre-Dame de Sion. Cantates de Bach, Festival d\'art sacré.',
  keywords: ['maîtrise', 'cathédrale', 'sion', 'chant', 'musique sacrée', 'école', 'formation', 'bach', 'grégorien', 'valais', 'suisse', 'festival art sacré', 'Ensemble Vocal'],
  authors: [{ name: 'Maîtrise de la Cathédrale de Sion' }],
  creator: 'Maîtrise de la Cathédrale de Sion',
  publisher: 'Fondation Maîtrise Cathédrale Sion',
  category: 'education',
  classification: 'Music Education, Sacred Music, Cultural Institution',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  openGraph: {
    type: 'website',
    locale: 'fr_CH',
    url: 'https://maitrise-cathedrale.vercel.app',
    siteName: 'Maîtrise de la Cathédrale de Sion',
    title: 'Maîtrise de la Cathédrale de Sion - École de chant et musique sacrée',
    description: 'École de chant d\'excellence au cœur du Valais. Formation musicale, Ensemble Vocal et chant grégorien dans la tradition de la Cathédrale Notre-Dame de Sion.',
    images: [
      {
        url: '/images/hero-photo.jpg',
        width: 1200,
        height: 630,
        alt: 'Chœur de la Maîtrise de la Cathédrale de Sion en répétition',
        type: 'image/jpeg',
      },
      {
        url: '/images/logo-maitrise.png',
        width: 400,
        height: 400,
        alt: 'Logo Maîtrise Cathédrale Sion',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@maitrisesion',
    creator: '@maitrisesion',
    title: 'Maîtrise de la Cathédrale de Sion',
    description: 'École de chant d\'excellence au cœur du Valais. Formation musicale et chant grégorien.',
    images: ['/images/hero-photo.jpg'],
  },
  alternates: {
    languages: {
      'fr-CH': 'https://maitrise-cathedrale.vercel.app',
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
  applicationName: 'Maîtrise Cathédrale Sion',
  referrer: 'origin-when-cross-origin',
  bookmarks: ['https://maitrise-cathedrale.vercel.app/maitrise', 'https://maitrise-cathedrale.vercel.app/fas'],
  appLinks: {
    web: {
      url: 'https://maitrise-cathedrale.vercel.app',
      should_fallback: true,
    },
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
        
        <main
          id="main-content"
          role="main"
          aria-label="Contenu principal"
          style={{ minHeight: 'calc(100vh - 80px)' }}
        >
          {children}
        </main>

        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}