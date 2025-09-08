import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Maîtrise de la Cathédrale de Sion",
  description: "Voix d'exception au cœur de la Cathédrale - Chœur de jeunes chanteurs passionnés, formés dès le plus jeune âge",
  keywords: "maîtrise, cathédrale, sion, chœur, musique sacrée, chant grégorien",
  openGraph: {
    title: "Maîtrise de la Cathédrale de Sion",
    description: "Voix d'exception au cœur de la Cathédrale",
    images: ["/og-image.jpg"],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <Breadcrumbs />
        <main style={{ minHeight: 'calc(100vh - 80px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}