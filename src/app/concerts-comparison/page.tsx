import UpcomingEventsSection from '@/components/UpcomingEventsSection';
import UpcomingEventsSectionInverted from '@/components/UpcomingEventsSection_Inverted';

export default function ConcertsComparisonPage() {
  return (
    <main style={{ paddingTop: '80px' }}>
      {/* Version Actuelle */}
      <div style={{
        padding: '30px 20px',
        background: '#1a1340',
        color: 'white',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-spectral)',
          fontSize: '1.75rem',
          marginBottom: '8px',
          fontWeight: '400',
        }}>
          Version Actuelle
        </h2>
        <p style={{
          fontFamily: 'var(--font-outfit)',
          fontSize: '0.9rem',
          opacity: 0.7,
        }}>
          Fond blanc, typographie navy/rouge, cards crème
        </p>
      </div>
      <UpcomingEventsSection />

      {/* Version Inversée */}
      <div style={{
        padding: '30px 20px',
        background: '#1a1340',
        color: 'white',
        textAlign: 'center',
        marginTop: '0',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-spectral)',
          fontSize: '1.75rem',
          marginBottom: '8px',
          fontWeight: '400',
        }}>
          Version Inversée (Proposée)
        </h2>
        <p style={{
          fontFamily: 'var(--font-outfit)',
          fontSize: '0.9rem',
          opacity: 0.7,
        }}>
          Fond rouge gradient, typographie blanche, cards glassmorphism, contraste fort
        </p>
      </div>
      <UpcomingEventsSectionInverted />

      {/* Espace final */}
      <div style={{ height: '60px', background: '#f5f5f5' }}></div>
    </main>
  );
}
