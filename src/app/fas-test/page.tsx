'use client';

import React, { useState } from 'react';
import FASConcerts_V1_Cinematic from '@/components/FASConcerts_V1_Cinematic';
import FASConcerts_V2_Masonry from '@/components/FASConcerts_V2_Masonry';
import FASConcerts_V3_Mobile_Cards from '@/components/FASConcerts_V3_Mobile_Cards';

export default function FASTestPage() {
  const [currentVersion, setCurrentVersion] = useState<'v1' | 'v2' | 'v3'>('v1');

  const versions = [
    {
      id: 'v1' as const,
      name: 'V1 - Cinematic',
      description: 'Style cinématographique avec timeline et hero rotatif',
      color: '#D2374C'
    },
    {
      id: 'v2' as const,
      name: 'V2 - Masonry',
      description: 'Grille masonry moderne avec cartes flottantes',
      color: '#8B7BB8'
    },
    {
      id: 'v3' as const,
      name: 'V3 - Mobile Cards',
      description: 'Carrousel 3D tactile optimisé mobile',
      color: '#D4AF37'
    }
  ];

  const renderCurrentVersion = () => {
    switch (currentVersion) {
      case 'v1':
        return <FASConcerts_V1_Cinematic />;
      case 'v2':
        return <FASConcerts_V2_Masonry />;
      case 'v3':
        return <FASConcerts_V3_Mobile_Cards />;
      default:
        return <FASConcerts_V1_Cinematic />;
    }
  };

  return (
    <>
      {/* Fixed Header */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(10px)',
        padding: '20px 0',
        borderBottom: '2px solid rgba(212, 175, 55, 0.3)',
        pointerEvents: 'auto'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          textAlign: 'center'
        }}>
          <h1 style={{
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '20px',
            fontFamily: 'var(--font-spectral)'
          }}>
            🎭 Test des 3 Versions OSOM - Concerts FAS
          </h1>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => {
                console.log('V1 clicked');
                setCurrentVersion('v1');
              }}
              style={{
                padding: '12px 24px',
                borderRadius: '25px',
                border: currentVersion === 'v1' ? '2px solid #D2374C' : '2px solid rgba(255,255,255,0.2)',
                backgroundColor: currentVersion === 'v1' ? '#D2374C' : 'rgba(255,255,255,0.1)',
                color: 'white',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                pointerEvents: 'auto',
                zIndex: 10001
              }}
            >
              <div>V1 - Cinematic</div>
              <div style={{ fontSize: '10px', opacity: 0.8, marginTop: '2px' }}>
                Style cinématographique avec timeline et hero rotatif
              </div>
            </button>

            <button
              onClick={() => {
                console.log('V2 clicked');
                setCurrentVersion('v2');
              }}
              style={{
                padding: '12px 24px',
                borderRadius: '25px',
                border: currentVersion === 'v2' ? '2px solid #8B7BB8' : '2px solid rgba(255,255,255,0.2)',
                backgroundColor: currentVersion === 'v2' ? '#8B7BB8' : 'rgba(255,255,255,0.1)',
                color: 'white',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                pointerEvents: 'auto',
                zIndex: 10001
              }}
            >
              <div>V2 - Masonry</div>
              <div style={{ fontSize: '10px', opacity: 0.8, marginTop: '2px' }}>
                Grille masonry moderne avec cartes flottantes
              </div>
            </button>

            <button
              onClick={() => {
                console.log('V3 clicked');
                setCurrentVersion('v3');
              }}
              style={{
                padding: '12px 24px',
                borderRadius: '25px',
                border: currentVersion === 'v3' ? '2px solid #D4AF37' : '2px solid rgba(255,255,255,0.2)',
                backgroundColor: currentVersion === 'v3' ? '#D4AF37' : 'rgba(255,255,255,0.1)',
                color: 'white',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                pointerEvents: 'auto',
                zIndex: 10001
              }}
            >
              <div>V3 - Mobile Cards</div>
              <div style={{ fontSize: '10px', opacity: 0.8, marginTop: '2px' }}>
                Carrousel 3D tactile optimisé mobile
              </div>
            </button>
          </div>

          <div style={{
            marginTop: '15px',
            padding: '10px 20px',
            backgroundColor: 'rgba(212, 175, 55, 0.1)',
            borderRadius: '15px',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            display: 'inline-block'
          }}>
            <span style={{
              color: '#D4AF37',
              fontSize: '12px',
              fontWeight: '500'
            }}>
              💡 Actuellement : {currentVersion === 'v1' ? 'V1 - Cinematic' : currentVersion === 'v2' ? 'V2 - Masonry' : 'V3 - Mobile Cards'}
            </span>
          </div>
        </div>
      </div>

      {/* Content with top margin */}
      <div style={{ marginTop: '140px' }}>
        {renderCurrentVersion()}
      </div>

      {/* Navigation Footer */}
      <div style={{
        backgroundColor: '#1a1a1a',
        padding: '30px 0',
        textAlign: 'center',
        borderTop: '2px solid rgba(212, 175, 55, 0.3)'
      }}>
        <p style={{
          color: 'rgba(255,255,255,0.7)',
          fontSize: '14px',
          marginBottom: '15px'
        }}>
          🚀 Testez et expérimentez - Impact visuel maximum avec les vraies photos des artistes
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap'
        }}>
          <a
            href="/fas"
            style={{
              color: '#D4AF37',
              textDecoration: 'none',
              padding: '8px 16px',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '15px',
              fontSize: '12px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            ← Retour page FAS originale
          </a>

          <a
            href="/"
            style={{
              color: '#D2374C',
              textDecoration: 'none',
              padding: '8px 16px',
              border: '1px solid rgba(210, 55, 76, 0.3)',
              borderRadius: '15px',
              fontSize: '12px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(210, 55, 76, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            🏠 Accueil
          </a>
        </div>
      </div>
    </>
  );
}