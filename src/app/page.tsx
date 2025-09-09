import HeroSectionV1 from '@/components/HeroSectionV1';
import EventsSection from '@/components/EventsSection';
import MediaSection from '@/components/MediaSection';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <>
      <HeroSectionV1 />
      <EventsSection />
      <MediaSection />
      <Newsletter />
    </>
  );
}