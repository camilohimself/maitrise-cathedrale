'use client';

import React, { useState } from 'react';
import HeroVersion1_MinimalisteCathedrale from '@/components/HeroVersion1_MinimalisteCathedrale';
import HeroOptionB_DegradueVitrail from '@/components/HeroOptionB_DegradueVitrail';
import HeroOptionC_MinimalismeSombre from '@/components/HeroOptionC_MinimalismeSombre';

/**
 * PAGE DE TEST : 3 OPTIONS FOND SOMBRE
 * Option A : Overlay sombre élégant
 * Option B : Dégradé vitrail avec touches couleur
 * Option C : Minimalisme sombre ultra-contrasté
 */
export default function HeroTest() {
  const [activeVersion, setActiveVersion] = useState('A');

  return (
    <>
      {/* Barre de navigation fixe */}
      <div style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        display: 'flex',
        gap: '1rem',
        padding: '1rem',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(10px)',
        borderRadius: '50px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
        border: '1px solid rgba(212, 165, 116, 0.3)',
      }}>
        <button
          onClick={() => setActiveVersion('A')}
          style={{
            padding: '12px 24px',
            backgroundColor: activeVersion === 'A' ? 'var(--color-navy)' : 'transparent',
            color: activeVersion === 'A' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
            border: `2px solid ${activeVersion === 'A' ? 'var(--color-navy)' : 'rgba(255, 255, 255, 0.2)'}`,
            borderRadius: '30px',
            fontFamily: 'var(--font-outfit)',
            fontWeight: '600',
            fontSize: '0.9rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
        >
          A • Overlay élégant
        </button>
        <button
          onClick={() => setActiveVersion('B')}
          style={{
            padding: '12px 24px',
            backgroundColor: activeVersion === 'B' ? 'var(--color-purple)' : 'transparent',
            color: activeVersion === 'B' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
            border: `2px solid ${activeVersion === 'B' ? 'var(--color-purple)' : 'rgba(255, 255, 255, 0.2)'}`,
            borderRadius: '30px',
            fontFamily: 'var(--font-outfit)',
            fontWeight: '600',
            fontSize: '0.9rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
        >
          B • Vitrail
        </button>
        <button
          onClick={() => setActiveVersion('C')}
          style={{
            padding: '12px 24px',
            backgroundColor: activeVersion === 'C' ? 'var(--color-gold)' : 'transparent',
            color: activeVersion === 'C' ? 'var(--color-navy)' : 'rgba(255, 255, 255, 0.7)',
            border: `2px solid ${activeVersion === 'C' ? 'var(--color-gold)' : 'rgba(255, 255, 255, 0.2)'}`,
            borderRadius: '30px',
            fontFamily: 'var(--font-outfit)',
            fontWeight: '600',
            fontSize: '0.9rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
        >
          C • Ultra-sombre
        </button>
      </div>

      {/* Affichage conditionnel des options */}
      {activeVersion === 'A' && <HeroVersion1_MinimalisteCathedrale />}
      {activeVersion === 'B' && <HeroOptionB_DegradueVitrail />}
      {activeVersion === 'C' && <HeroOptionC_MinimalismeSombre />}

      {/* Légende descriptive en bas */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        maxWidth: '700px',
        padding: '1rem 1.5rem',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(15px)',
        borderRadius: '12px',
        textAlign: 'center',
        border: '1px solid rgba(212, 165, 116, 0.2)',
      }}>
        {activeVersion === 'A' && (
          <p style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '0.9rem',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 0.9)',
            margin: 0,
            lineHeight: 1.6,
          }}>
            <strong style={{ color: 'var(--color-gold)' }}>Option A • Overlay élégant</strong><br />
            Fond sombre navy/noir subtil • Textes blancs et dorés • Lignes architecturales dorées visibles
          </p>
        )}
        {activeVersion === 'B' && (
          <p style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '0.9rem',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 0.9)',
            margin: 0,
            lineHeight: 1.6,
          }}>
            <strong style={{ color: 'var(--color-purple)' }}>Option B • Dégradé vitrail</strong><br />
            Dégradé vertical cathédrale • Halos de couleur (rouge, violet, or) • Textes avec glow doré
          </p>
        )}
        {activeVersion === 'C' && (
          <p style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '0.9rem',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 0.9)',
            margin: 0,
            lineHeight: 1.6,
          }}>
            <strong style={{ color: 'var(--color-gold)' }}>Option C • Minimalisme sombre</strong><br />
            Overlay noir uniforme • Contraste ultra-fort • Grille architecturale dorée • Épure maximale
          </p>
        )}
      </div>
    </>
  );
}
