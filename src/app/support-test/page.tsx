import SupportSectionV1Opera from '@/components/SupportSection_V1_Opera';
import SupportSectionV2Museum from '@/components/SupportSection_V2_Museum';
import SupportSectionV3Minimal from '@/components/SupportSection_V3_Minimal';

export default function SupportTestPage() {
  return (
    <main style={{ paddingTop: '80px' }}>
      {/* Version 1: Opera Prestige */}
      <div style={{
        padding: '40px 20px',
        background: '#1a1340',
        color: 'white',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-spectral)',
          fontSize: '2rem',
          marginBottom: '10px',
        }}>
          Version 1: Opera Prestige
        </h2>
        <p style={{
          fontFamily: 'var(--font-outfit)',
          fontSize: '0.95rem',
          opacity: 0.8,
        }}>
          Inspiration: Metropolitan Opera, La Scala · Ligne horizontale élégante, icônes minimales, or & noir
        </p>
      </div>
      <SupportSectionV1Opera />

      {/* Version 2: Museum Raffiné */}
      <div style={{
        padding: '40px 20px',
        background: '#1a1340',
        color: 'white',
        textAlign: 'center',
        marginTop: '60px',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-spectral)',
          fontSize: '2rem',
          marginBottom: '10px',
        }}>
          Version 2: Museum Raffiné
        </h2>
        <p style={{
          fontFamily: 'var(--font-outfit)',
          fontSize: '0.95rem',
          opacity: 0.8,
        }}>
          Inspiration: MoMA, Tate Modern · Grid 2 colonnes, numérotation, typographie fine, espacement généreux
        </p>
      </div>
      <SupportSectionV2Museum />

      {/* Version 3: Minimal Brutal */}
      <div style={{
        padding: '40px 20px',
        background: '#1a1340',
        color: 'white',
        textAlign: 'center',
        marginTop: '60px',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-spectral)',
          fontSize: '2rem',
          marginBottom: '10px',
        }}>
          Version 3: Minimal Brutal
        </h2>
        <p style={{
          fontFamily: 'var(--font-outfit)',
          fontSize: '0.95rem',
          opacity: 0.8,
        }}>
          Inspiration: Bristol Cathedral, Swiss Design · Liste horizontale pure, efficacité maximale, zéro fioritures
        </p>
      </div>
      <SupportSectionV3Minimal />

      {/* Espace final */}
      <div style={{ height: '80px' }}></div>
    </main>
  );
}
