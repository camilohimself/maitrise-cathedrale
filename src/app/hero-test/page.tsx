'use client';

import React, { useState } from 'react';
import HeroSectionV1 from '@/components/HeroSectionV1';
import HeroSectionV2 from '@/components/HeroSectionV2';
import HeroSectionV3 from '@/components/HeroSectionV3';

export default function HeroTest() {
  const [currentVersion, setCurrentVersion] = useState(1);

  const versions = [
    { 
      id: 1, 
      name: 'Cinématique', 
      description: 'Parallax dramatique avec overlay sophistiqué',
      component: <HeroSectionV1 />
    },
    { 
      id: 2, 
      name: 'Minimaliste', 
      description: 'Design épuré avec micro-interactions premium',
      component: <HeroSectionV2 />
    },
    { 
      id: 3, 
      name: 'Immersif', 
      description: 'Architecture gothique avec animations 3D',
      component: <HeroSectionV3 />
    }
  ];

  return (
    <div style={{ position: 'relative' }}>
      
      {/* Navigation des versions */}
      <div style={{
        position: 'fixed',
        top: '100px',
        right: '20px',
        zIndex: 1000,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        padding: '20px',
        borderRadius: '12px',
        border: '1px solid rgba(139, 0, 0, 0.2)',
        backdropFilter: 'blur(10px)',
        minWidth: '280px',
      }}>
        <h3 style={{
          fontFamily: 'var(--font-spectral)',
          fontSize: '1.2rem',
          fontWeight: '600',
          color: '#8B0000',
          marginBottom: '16px',
          textAlign: 'center',
        }}>
          🎭 Hero Versions Test
        </h3>
        
        {versions.map((version) => (
          <button
            key={version.id}
            onClick={() => setCurrentVersion(version.id)}
            style={{
              display: 'block',
              width: '100%',
              padding: '12px 16px',
              marginBottom: '8px',
              backgroundColor: currentVersion === version.id ? '#8B0000' : 'transparent',
              color: currentVersion === version.id ? '#FFFFFF' : '#8B0000',
              border: '2px solid #8B0000',
              borderRadius: '8px',
              fontFamily: 'var(--font-outfit)',
              fontWeight: '500',
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'left',
            }}
            onMouseEnter={(e) => {
              if (currentVersion !== version.id) {
                e.currentTarget.style.backgroundColor = 'rgba(139, 0, 0, 0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (currentVersion !== version.id) {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            <div style={{ fontWeight: '600', marginBottom: '2px' }}>
              V{version.id} - {version.name}
            </div>
            <div style={{ 
              fontSize: '0.75rem', 
              opacity: 0.8,
              color: currentVersion === version.id ? 'rgba(255,255,255,0.8)' : '#666'
            }}>
              {version.description}
            </div>
          </button>
        ))}

        <div style={{
          marginTop: '16px',
          padding: '12px',
          backgroundColor: 'rgba(184, 134, 11, 0.1)',
          borderRadius: '6px',
          fontSize: '0.8rem',
          color: '#666',
          fontFamily: 'var(--font-outfit)',
        }}>
          💡 <strong>Tips:</strong> Testez le scroll, les hovers et les animations sur chaque version
        </div>
      </div>

      {/* Affichage de la version sélectionnée */}
      <div style={{
        transition: 'opacity 0.5s ease-in-out',
        opacity: 1,
      }}>
        {versions.find(v => v.id === currentVersion)?.component}
      </div>

      {/* Boutons navigation rapide en bas */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        display: 'flex',
        gap: '12px',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: '12px 20px',
        borderRadius: '50px',
        backdropFilter: 'blur(10px)',
      }}>
        {versions.map((version) => (
          <button
            key={version.id}
            onClick={() => setCurrentVersion(version.id)}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: currentVersion === version.id ? '#B8860B' : 'rgba(255, 255, 255, 0.2)',
              color: currentVersion === version.id ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
              border: 'none',
              fontFamily: 'var(--font-spectral)',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              if (currentVersion !== version.id) {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
              }
            }}
            onMouseLeave={(e) => {
              if (currentVersion !== version.id) {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              }
            }}
          >
            {version.id}
          </button>
        ))}
      </div>
    </div>
  );
}