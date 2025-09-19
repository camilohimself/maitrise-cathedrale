import FASHeroCinematic from '@/components/FASHeroCinematic';
import FASConcertsList from '@/components/FASConcertsList';
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
      <FASHeroCinematic />
      <FASConcertsList />
      <FASArtistesSection />
      <FASEventSection />
      <FASRorateSection />
    </main>
  );
}