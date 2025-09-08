import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import EventsSection from '@/components/EventsSection';
import MediaSection from '@/components/MediaSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <EventsSection />
      <MediaSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}