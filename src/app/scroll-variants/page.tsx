'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ScrollVariantA from '@/components/scroll/ScrollVariantA';
import ScrollVariantB from '@/components/scroll/ScrollVariantB';
import ScrollVariantC from '@/components/scroll/ScrollVariantC';

export default function ScrollVariantsPage() {
  const [activeVariant, setActiveVariant] = useState<'A' | 'B' | 'C' | null>(null);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1340 0%, #2a2050 100%)',
      color: '#fff',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header */}
      <header style={{
        padding: '2rem',
        borderBottom: '1px solid rgba(212, 165, 116, 0.2)',
        position: 'sticky',
        top: 0,
        background: 'rgba(26, 19, 64, 0.95)',
        backdropFilter: 'blur(10px)',
        zIndex: 100
      }}>
        <Link href="/" style={{
          color: '#D4A574',
          textDecoration: 'none',
          fontSize: '0.9rem',
          fontWeight: 500
        }}>
          ← Retour à l'accueil
        </Link>
      </header>

      {/* Hero */}
      <section style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 700,
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #D4A574 0%, #FFD700 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Effets de Scroll
        </h1>
        <p style={{
          fontSize: '1.125rem',
          color: 'rgba(255, 255, 255, 0.8)',
          marginBottom: '3rem',
          lineHeight: 1.6
        }}>
          Testez les 3 variantes d'amélioration de l'expérience de scroll<br />
          pour le site Maîtrise de la Cathédrale de Sion
        </p>

        {/* Sélecteur de variantes */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {/* Variante A */}
          <button
            onClick={() => setActiveVariant(activeVariant === 'A' ? null : 'A')}
            style={{
              padding: '2rem',
              background: activeVariant === 'A'
                ? 'linear-gradient(135deg, #D4A574 0%, #B8935F 100%)'
                : 'rgba(212, 165, 116, 0.1)',
              border: activeVariant === 'A'
                ? '2px solid #D4A574'
                : '2px solid rgba(212, 165, 116, 0.3)',
              borderRadius: '12px',
              color: activeVariant === 'A' ? '#1a1340' : '#fff',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontWeight: 600,
              fontSize: '1rem'
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✨</div>
            <div style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Variante A</div>
            <div style={{ fontSize: '0.875rem', opacity: 0.9, fontWeight: 400 }}>
              Cathédrale Minimaliste
            </div>
            <div style={{ fontSize: '0.75rem', marginTop: '0.5rem', opacity: 0.8 }}>
              Bouton remonter sobre + fade élégant
            </div>
          </button>

          {/* Variante B */}
          <button
            onClick={() => setActiveVariant(activeVariant === 'B' ? null : 'B')}
            style={{
              padding: '2rem',
              background: activeVariant === 'B'
                ? 'linear-gradient(135deg, #D4A574 0%, #B8935F 100%)'
                : 'rgba(212, 165, 116, 0.1)',
              border: activeVariant === 'B'
                ? '2px solid #D4A574'
                : '2px solid rgba(212, 165, 116, 0.3)',
              borderRadius: '12px',
              color: activeVariant === 'B' ? '#1a1340' : '#fff',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontWeight: 600,
              fontSize: '1rem'
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚡</div>
            <div style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Variante B</div>
            <div style={{ fontSize: '0.875rem', opacity: 0.9, fontWeight: 400 }}>
              Progress Bar Élégante
            </div>
            <div style={{ fontSize: '0.75rem', marginTop: '0.5rem', opacity: 0.8 }}>
              Barre progression + bouton circulaire
            </div>
          </button>

          {/* Variante C */}
          <button
            onClick={() => setActiveVariant(activeVariant === 'C' ? null : 'C')}
            style={{
              padding: '2rem',
              background: activeVariant === 'C'
                ? 'linear-gradient(135deg, #D4A574 0%, #B8935F 100%)'
                : 'rgba(212, 165, 116, 0.1)',
              border: activeVariant === 'C'
                ? '2px solid #D4A574'
                : '2px solid rgba(212, 165, 116, 0.3)',
              borderRadius: '12px',
              color: activeVariant === 'C' ? '#1a1340' : '#fff',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontWeight: 600,
              fontSize: '1rem'
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎼</div>
            <div style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Variante C</div>
            <div style={{ fontSize: '0.875rem', opacity: 0.9, fontWeight: 400 }}>
              Expérience Immersive
            </div>
            <div style={{ fontSize: '0.75rem', marginTop: '0.5rem', opacity: 0.8 }}>
              Smooth scroll + parallax + vitrail
            </div>
          </button>
        </div>

        {activeVariant && (
          <div style={{
            padding: '1.5rem',
            background: 'rgba(212, 165, 116, 0.1)',
            borderRadius: '8px',
            border: '1px solid rgba(212, 165, 116, 0.3)',
            marginBottom: '2rem'
          }}>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              ✅ Variante <strong>{activeVariant}</strong> activée - Scrollez vers le bas pour tester l'effet
            </p>
          </div>
        )}
      </section>

      {/* Contenu de démonstration */}
      <section style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '4rem 2rem'
      }}>
        {[1, 2, 3, 4, 5].map((section) => (
          <div key={section} style={{
            marginBottom: '4rem',
            padding: '3rem 2rem',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            border: '1px solid rgba(212, 165, 116, 0.2)'
          }}>
            <h2 style={{
              fontSize: '2rem',
              color: '#D4A574',
              marginBottom: '1rem'
            }}>
              Section {section}
            </h2>
            <p style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '1rem'
            }}>
              Ceci est un exemple de contenu pour tester les effets de scroll.
              La Maîtrise de la Cathédrale de Sion propose une programmation musicale
              exceptionnelle tout au long de l'année.
            </p>
            <p style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.8)'
            }}>
              Avec son Festival d'Art Sacré, son Ensemble Vocal et Instrumental,
              et son École Maîtrisienne, elle rayonne en Valais et bien au-delà.
            </p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer style={{
        padding: '3rem 2rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(212, 165, 116, 0.2)',
        marginTop: '4rem'
      }}>
        <p style={{
          fontSize: '0.875rem',
          color: 'rgba(255, 255, 255, 0.6)',
          margin: 0
        }}>
          Page de test - Maîtrise de la Cathédrale de Sion
        </p>
      </footer>

      {/* Rendu conditionnel des variantes */}
      {activeVariant === 'A' && <ScrollVariantA />}
      {activeVariant === 'B' && <ScrollVariantB />}
      {activeVariant === 'C' && <ScrollVariantC />}
    </div>
  );
}
