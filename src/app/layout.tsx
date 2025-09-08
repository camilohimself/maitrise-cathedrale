import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}