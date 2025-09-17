import FASHeroCarouselFinal from '@/components/FASHeroCarouselFinal';
import FASConcertsSection from '@/components/FASConcertsSection';
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
      <FASConcertsSection />
      <FASArtistesSection />
      <FASEventSection />
      <FASRorateSection />
    </main>
  );
}