import FASHeroCinematic from '@/components/FASHeroCinematic';
import FASConcertsList from '@/components/FASConcertsList';
import FASArtistesSection from '@/components/FASArtistesSection';
import FASEventSection from '@/components/FASEventSection';
import FASRorateSection from '@/components/FASRorateSection';

export default function FASHeroFusion() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#1a1340',
      position: 'relative'
    }}>
      {/* Header de test */}
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 9999,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '12px 20px',
        borderRadius: '25px',
        fontSize: '14px',
        fontWeight: '600',
        border: '2px solid #D4A574'
      }}>
🎬 HERO CINÉMATIQUE : Style V1 + Contenu FAS
      </div>

      {/* Hero cinématique : Style V1 + Contenu FAS */}
      <FASHeroCinematic />

      {/* Liste complète des 5 concerts */}
      <FASConcertsList />

      {/* Sections normales - SANS section concerts redondante */}
      <FASArtistesSection />
      <FASEventSection />
      <FASRorateSection />
    </main>
  );
}