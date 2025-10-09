import HeroOptionB_DegradueVitrail from '@/components/HeroOptionB_DegradueVitrail';
import FASHighlightSection from '@/components/FASHighlightSection';
import UpcomingEventsSection from '@/components/UpcomingEventsSection';
import MaitriseAboutSection from '@/components/MaitriseAboutSection';
import SupportSectionV2Museum from '@/components/SupportSection_V2_Museum';
import Newsletter from '@/components/Newsletter';

export const metadata = {
  title: "Maîtrise de la Cathédrale de Sion | École de chant et Festival d'Art Sacré",
  description: "École de chant liturgique, Ensemble Vocal, cantates de Bach et Festival d'Art Sacré à la Cathédrale de Sion. Concerts, liturgie et formation musicale en Valais depuis 2004."
};

export default function Home() {
  return (
    <>
      <HeroOptionB_DegradueVitrail />
      <MaitriseAboutSection />
      <FASHighlightSection />
      <UpcomingEventsSection />
      <Newsletter />
      <SupportSectionV2Museum />
    </>
  );
}