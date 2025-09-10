'use client';

import React from 'react';
import { maitriseContent } from '@/data/maitriseContent';

export default function EcoleSection() {
  const { ecole } = maitriseContent;

  return (
    <div style={{
      background: 'linear-gradient(135deg, #1a1340 0%, #252454 100%)',
      position: 'relative',
      padding: '100px 20px',
      color: '#ffffff'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '3fr 2fr',
          gap: '80px',
          alignItems: 'center'
        }}>
          {/* Content */}
          <div>
            <div style={{
              display: 'inline-block',
              background: 'rgba(212, 165, 116, 0.2)',
              border: '1px solid rgba(212, 165, 116, 0.3)',
              color: '#D4A574',
              backdropFilter: 'blur(10px)',
              padding: '8px 20px',
              borderRadius: '24px',
              fontSize: '14px',
              fontWeight: '700',
              marginBottom: '24px'
            }}>
              Nouveau {ecole.partenariat.annee}
            </div>

            <h2 style={{
              fontSize: '48px',
              fontWeight: '300',
              marginBottom: '24px'
            }}>
              {ecole.titre}
            </h2>

            <p style={{
              fontSize: '20px',
              lineHeight: '1.8',
              marginBottom: '32px',
              opacity: '0.95'
            }}>
              {ecole.description}
            </p>

            <div style={{
              background: 'rgba(212, 165, 116, 0.1)',
              border: '1px solid rgba(212, 165, 116, 0.2)',
              borderRadius: '16px',
              padding: '24px',
              marginBottom: '40px',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '700',
                marginBottom: '8px',
                color: '#D4A574'
              }}>
                Partenariat avec le {ecole.partenariat.institution}
              </h3>
              <p style={{ opacity: '0.9' }}>
                {ecole.partenariat.type} pour enrichir la formation vocale d excellence.
              </p>
            </div>

            <h3 style={{
              fontSize: '20px',
              fontWeight: '700',
              marginBottom: '24px'
            }}>
              Programme de formation
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {ecole.programme.map((item, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: '0'
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#040A23">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: '16px', opacity: '0.95' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div style={{
            background: 'rgba(212, 165, 116, 0.08)',
            borderRadius: '24px',
            padding: '48px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '120px',
              marginBottom: '24px',
              background: 'linear-gradient(45deg, #FFD700, #FFA500)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              ♫
            </div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '700',
              marginBottom: '16px'
            }}>
              Formation d'excellence
            </h3>
            <p style={{
              fontSize: '16px',
              opacity: '0.9',
              lineHeight: '1.6'
            }}>
              Une opportunité unique pour les jeunes talents de développer leur art vocal
              au plus haut niveau, au cœur de la tradition musicale de la Cathédrale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}