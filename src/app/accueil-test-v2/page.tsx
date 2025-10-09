import HeroOptionB_DegradueVitrail from '@/components/HeroOptionB_DegradueVitrail';
import FASHighlightSection from '@/components/FASHighlightSection';
import UpcomingEventsSection from '@/components/UpcomingEventsSection';
import SupportSectionV2Museum from '@/components/SupportSection_V2_Museum';
import Newsletter from '@/components/Newsletter';
import HeroLogoMinimaliste from '@/components/HeroLogoMinimaliste';

export default function AccueilTestV2() {
  return (
    <>
      {/* Hero violet ACTUEL - ON GARDE */}
      <HeroOptionB_DegradueVitrail />

      {/* NOUVEAU - Logo XXL Minimaliste qui remplace MaitriseAboutSection */}
      <HeroLogoMinimaliste />

      {/* Sections suivantes inchangées */}
      <FASHighlightSection />
      <UpcomingEventsSection />
      <Newsletter />
      <SupportSectionV2Museum />
    </>
  );
}
