import FASComplementaryEvents from '@/components/FASComplementaryEvents';

export const metadata = {
  title: "Preview - Découvrez aussi (Rorate + Vespérales) | Test Local",
  description: "Page de prévisualisation pour la section complémentaire du Festival d'Art Sacré"
};

export default function FASPreviewComplementary() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#1a1340',
      position: 'relative'
    }}>
      {/* Badge de test en haut */}
      <div style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(255, 193, 7, 0.95)',
        color: '#1a1340',
        padding: '12px 24px',
        borderRadius: '30px',
        fontWeight: '700',
        fontSize: '0.9rem',
        zIndex: 9999,
        boxShadow: '0 4px 20px rgba(255, 193, 7, 0.4)',
        border: '2px solid #1a1340',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>
        🎨 Mode Prévisualisation - Section "Découvrez aussi"
      </div>

      {/* Espacement pour badge */}
      <div style={{ height: '80px' }} />

      {/* Composant à tester */}
      <FASComplementaryEvents />

      {/* Footer info technique */}
      <div style={{
        padding: '40px',
        background: 'rgba(0, 0, 0, 0.5)',
        borderTop: '1px solid rgba(255, 193, 7, 0.2)',
        textAlign: 'center'
      }}>
        <p style={{
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '0.9rem',
          marginBottom: '8px'
        }}>
          <strong>📋 Checklist validation visuelle :</strong>
        </p>
        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: '0.85rem'
        }}>
          <span>✅ Icônes lucide-react (Flame + Music)</span>
          <span>✅ Grid 2 colonnes responsive</span>
          <span>✅ Placeholders photos visibles</span>
          <span>✅ 6 dates listées (3+3)</span>
          <span>✅ Palette cohérente (Or #FFC107 + Gold #D4A574)</span>
        </div>
      </div>
    </main>
  );
}
