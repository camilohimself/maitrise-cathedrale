'use client';

import React from 'react';
import FASConcerts_V1_Cinematic_Perfect from '@/components/FASConcerts_V1_Cinematic_Perfect';
import FASConcerts_V2_Masonry from '@/components/FASConcerts_V2_Masonry';
import FASConcerts_V3_Mobile_Cards from '@/components/FASConcerts_V3_Mobile_Cards';

export default function FASTestAllPage() {
  return (
    <div style={{
      backgroundColor: '#000',
      minHeight: '100vh'
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        padding: '40px 0',
        textAlign: 'center',
        borderBottom: '3px solid rgba(212, 175, 55, 0.5)'
      }}>
        <h1 style={{
          color: 'white',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: '300',
          marginBottom: '20px',
          fontFamily: 'var(--font-spectral)'
        }}>
          🎭 Comparaison des 3 Versions OSOM
        </h1>
        <p style={{
          color: 'rgba(255,255,255,0.7)',
          fontSize: '1.1rem',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Toutes les 3 versions affichées pour comparaison directe
        </p>
      </div>

      {/* Version 1 - Cinematic */}
      <div id="v1-cinematic" style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 100,
          backgroundColor: '#D2374C',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '25px',
          fontWeight: '600',
          fontSize: '14px',
          boxShadow: '0 4px 15px rgba(210, 55, 76, 0.4)'
        }}>
          🎬 VERSION 1 - CINEMATIC
        </div>
        <FASConcerts_V1_Cinematic_Perfect />
      </div>

      {/* Separator */}
      <div style={{
        height: '100px',
        background: 'linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 50%, #0a0a0a 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          width: '200px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(212, 175, 55, 0.5) 50%, transparent 100%)'
        }} />
      </div>

      {/* Version 2 - Masonry */}
      <div id="v2-masonry" style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 100,
          backgroundColor: '#8B7BB8',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '25px',
          fontWeight: '600',
          fontSize: '14px',
          boxShadow: '0 4px 15px rgba(139, 123, 184, 0.4)'
        }}>
          🧩 VERSION 2 - MASONRY
        </div>
        <FASConcerts_V2_Masonry />
      </div>

      {/* Separator */}
      <div style={{
        height: '100px',
        background: 'linear-gradient(180deg, #0f0f0f 0%, #0a0a0a 50%, #0f0f0f 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          width: '200px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(139, 123, 184, 0.5) 50%, transparent 100%)'
        }} />
      </div>

      {/* Version 3 - Mobile Cards */}
      <div id="v3-mobile" style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 100,
          backgroundColor: '#D4AF37',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '25px',
          fontWeight: '600',
          fontSize: '14px',
          boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)'
        }}>
          📱 VERSION 3 - MOBILE CARDS
        </div>
        <FASConcerts_V3_Mobile_Cards />
      </div>

      {/* Footer avec navigation */}
      <div style={{
        backgroundColor: '#1a1a1a',
        padding: '50px 0',
        textAlign: 'center',
        borderTop: '3px solid rgba(212, 175, 55, 0.5)'
      }}>
        <h3 style={{
          color: 'white',
          fontSize: '1.5rem',
          fontWeight: '600',
          marginBottom: '20px',
          fontFamily: 'var(--font-spectral)'
        }}>
          🏆 Laquelle préférez-vous ?
        </h3>

        <p style={{
          color: 'rgba(255,255,255,0.7)',
          fontSize: '1rem',
          marginBottom: '30px',
          maxWidth: '700px',
          margin: '0 auto 30px'
        }}>
          Chaque version offre une expérience unique avec vos vraies photos d'artistes optimisées
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
          marginBottom: '40px'
        }}>
          <a
            href="#v1-cinematic"
            style={{
              color: '#D2374C',
              textDecoration: 'none',
              padding: '12px 20px',
              border: '2px solid #D2374C',
              borderRadius: '25px',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
          >
            🎬 Voir V1 Cinematic
          </a>

          <a
            href="#v2-masonry"
            style={{
              color: '#8B7BB8',
              textDecoration: 'none',
              padding: '12px 20px',
              border: '2px solid #8B7BB8',
              borderRadius: '25px',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
          >
            🧩 Voir V2 Masonry
          </a>

          <a
            href="#v3-mobile"
            style={{
              color: '#D4AF37',
              textDecoration: 'none',
              padding: '12px 20px',
              border: '2px solid #D4AF37',
              borderRadius: '25px',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
          >
            📱 Voir V3 Mobile Cards
          </a>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap'
        }}>
          <a
            href="/fas"
            style={{
              color: 'rgba(255,255,255,0.7)',
              textDecoration: 'none',
              padding: '8px 16px',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '15px',
              fontSize: '12px',
              transition: 'all 0.3s ease'
            }}
          >
            ← Retour page FAS originale
          </a>

          <a
            href="/"
            style={{
              color: 'rgba(255,255,255,0.7)',
              textDecoration: 'none',
              padding: '8px 16px',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '15px',
              fontSize: '12px',
              transition: 'all 0.3s ease'
            }}
          >
            🏠 Accueil
          </a>
        </div>
      </div>

      {/* Scroll smooth styles */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}