'use client';

import React from 'react';
import { maitriseContent } from '@/data/maitriseContent';

export default function EnsembleSection() {
  const { evi } = maitriseContent;

  return (
    <div style={{
      background: 'linear-gradient(180deg, #f8f8f8 0%, #ffffff 100%)',
      padding: '100px 20px'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          background: 'linear-gradient(135deg, #E33241 0%, #ff6b7a 100%)',
          borderRadius: '32px',
          padding: '64px',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Background Pattern */}
          <div style={{
            position: 'absolute',
            top: '0',
            right: '0',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            transform: 'translate(100px, -100px)'
          }} />

          <div style={{ position: 'relative', zIndex: '1' }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: '300',
              marginBottom: '24px'
            }}>
              {evi.titre}
            </h2>

            <p style={{
              fontSize: '20px',
              lineHeight: '1.8',
              marginBottom: '32px',
              opacity: '0.95'
            }}>
              {evi.description}
            </p>

            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '32px',
              marginBottom: '48px',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                marginBottom: '16px',
                color: '#FFD700'
              }}>
                {evi.projet}
              </h3>
              <div style={{
                fontSize: '18px',
                opacity: '0.9',
                lineHeight: '1.6'
              }}>
                Un défi artistique et spirituel monumental, entrepris avec passion et rigueur.
              </div>
            </div>

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px'
            }}>
              {Object.entries(evi.stats).map(([key, value]) => (
                <div key={key} style={{
                  textAlign: 'center',
                  padding: '24px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  <div style={{
                    fontSize: '32px',
                    fontWeight: '700',
                    marginBottom: '8px',
                    color: '#FFD700'
                  }}>
                    {value}
                  </div>
                  <div style={{
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    opacity: '0.8'
                  }}>
                    {key === 'cantates' ? 'Cantates jouées' : 
                     key === 'musiciens' ? 'Musiciens' : 
                     'Concerts/an'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}