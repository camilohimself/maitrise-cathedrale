import FASHeroSection from '@/components/FASHeroSection';
import FASActualitesSection from '@/components/FASActualitesSection';
import FASArtistesSection from '@/components/FASArtistesSection';
import FASEventSection from '@/components/FASEventSection';

export default function FAS() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#1a1340',
      position: 'relative'
    }}>
      <FASHeroSection />
      <FASActualitesSection />
      <FASArtistesSection />
      <FASEventSection />
    </main>
  );
}