import FASHeroCarouselFinal from '@/components/FASHeroCarouselFinal';
import FASActualitesSection from '@/components/FASActualitesSection';
import FASArtistesSection from '@/components/FASArtistesSection';
import FASEventSection from '@/components/FASEventSection';
import FASRorateSection from '@/components/FASRorateSection';

export default function FAS() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#1a1340',
      position: 'relative'
    }}>
      <FASHeroCarouselFinal />
      <FASActualitesSection />
      <FASArtistesSection />
      <FASEventSection />
      <FASRorateSection />
    </main>
  );
}