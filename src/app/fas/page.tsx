import FASHeroCinematic from '@/components/FASHeroCinematic';
import FASConcertsList from '@/components/FASConcertsList';
import FASArtistesSection from '@/components/FASArtistesSection';
import FASEventSection from '@/components/FASEventSection';
import FASRorateSection from '@/components/FASRorateSection';

export const metadata = {
  title: "Festival d'Art Sacré 2025-2026 | 20ème édition - Cathédrale de Sion",
  description: "20ème édition du Festival d'Art Sacré de Sion du 30 novembre 2025 au 4 janvier 2026. Stile Antico, Palestrina, Vivaldi et concerts exceptionnels à la Cathédrale de Sion en Valais."
};

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