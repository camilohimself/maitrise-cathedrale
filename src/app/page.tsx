import HeroFestivalCountdown from '@/components/HeroFestivalCountdown';
import FASProgrammeSection from '@/components/FASProgrammeSection';
import MaitriseAboutCondensed from '@/components/MaitriseAboutCondensed';
import NewsletterSupportCombined from '@/components/NewsletterSupportCombined';

export const metadata = {
  title: "Maîtrise de la Cathédrale de Sion | École de chant et Festival d'Art Sacré",
  description: "École de chant liturgique, Ensemble Vocal, cantates de Bach et Festival d'Art Sacré à la Cathédrale de Sion. Concerts, liturgie et formation musicale en Valais depuis 2004."
};

export default function Home() {
  return (
    <>
      <HeroFestivalCountdown />
      <FASProgrammeSection />
      <MaitriseAboutCondensed />
      <NewsletterSupportCombined />
    </>
  );
}