import HeroSectionV1 from '@/components/HeroSectionV1';
import FASHighlightSection from '@/components/FASHighlightSection';
import UpcomingEventsSection from '@/components/UpcomingEventsSection';
import MaitriseAboutSection from '@/components/MaitriseAboutSection';
import MediaDiscoverSection from '@/components/MediaDiscoverSection';
import SupportSection from '@/components/SupportSection';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <>
      <HeroSectionV1 />
      <MaitriseAboutSection />
      <FASHighlightSection />
      <MediaDiscoverSection />
      <UpcomingEventsSection />
      <Newsletter />
      <SupportSection />
    </>
  );
}