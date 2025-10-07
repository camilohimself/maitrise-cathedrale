import HeroSectionV1 from '@/components/HeroSectionV1';
import FASHighlightSection from '@/components/FASHighlightSection';
import UpcomingEventsSection from '@/components/UpcomingEventsSection';
import MaitriseAboutSection from '@/components/MaitriseAboutSection';
import SupportSection from '@/components/SupportSection';
import Newsletter from '@/components/Newsletter';

export const metadata = {
  title: "Maîtrise de la Cathédrale de Sion | École de chant et Festival d'Art Sacré",
  description: "École de chant liturgique, ensemble vocal, cantates de Bach et Festival d'Art Sacré à la Cathédrale de Sion. Concerts, liturgie et formation musicale en Valais depuis 2004."
};

export default function Home() {
  return (
    <>
      <HeroSectionV1 />
      <MaitriseAboutSection />
      <FASHighlightSection />
      <UpcomingEventsSection />
      <Newsletter />
      <SupportSection />
    </>
  );
}