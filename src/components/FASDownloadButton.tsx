'use client';

import { Download } from 'lucide-react';
import { useGATracking } from '@/hooks/useGATracking';

const FASDownloadButton = () => {
  const { trackEvent } = useGATracking();

  const handleDownload = () => {
    trackEvent('pdf_download', {
      pdf_name: 'Programme FAS 2025-2026',
      pdf_url: '/downloads/programme-fas-2025-2026.pdf'
    });
  };

  return (
    <section style={{
      background: 'linear-gradient(180deg, #1a1340 0%, #0a0a1a 100%)',
      padding: 'clamp(40px, 8vw, 60px) clamp(16px, 5vw, 40px)',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        {/* Background subtle glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(212, 165, 116, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div style={{
          position: 'relative',
          zIndex: 1
        }}>
          {/* Title */}
          <h3 style={{
            fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
            fontWeight: '300',
            color: 'white',
            marginBottom: '12px',
            fontFamily: 'var(--font-spectral), Georgia, serif'
          }}>
            Programme complet
          </h3>

          <p style={{
            fontSize: 'clamp(0.95rem, 2.2vw, 1rem)',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: 'clamp(24px, 5vw, 32px)',
            maxWidth: '600px',
            margin: '0 auto clamp(24px, 5vw, 32px)'
          }}>
            Téléchargez le programme complet du Festival d'Art Sacré 2025-2026 au format PDF pour l'imprimer ou le partager.
          </p>

          {/* Download Button */}
          <a
            href="/downloads/programme-fas-2025-2026.pdf"
            download="Programme-FAS-2025-2026.pdf"
            onClick={handleDownload}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: 'clamp(14px, 3vw, 18px) clamp(28px, 6vw, 40px)',
              background: 'linear-gradient(135deg, #D4A574 0%, #C89860 100%)',
              color: '#1a1340',
              fontSize: 'clamp(1rem, 2.2vw, 1.1rem)',
              fontWeight: '600',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(212, 165, 116, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(212, 165, 116, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(212, 165, 116, 0.3)';
            }}
          >
            <Download size={20} strokeWidth={2.5} />
            <span>Télécharger le programme (PDF)</span>
          </a>

          {/* File info */}
          <p style={{
            fontSize: 'clamp(0.8rem, 1.8vw, 0.85rem)',
            color: 'rgba(255, 255, 255, 0.5)',
            marginTop: '16px'
          }}>
            PDF — 220 KB — Format imprimable
          </p>
        </div>
      </div>
    </section>
  );
};

export default FASDownloadButton;
