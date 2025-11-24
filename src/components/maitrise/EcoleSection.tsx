'use client';

import React from 'react';
import Image from 'next/image';
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
            <h2 style={{
              fontSize: '48px',
              fontWeight: '300',
              marginBottom: '24px',
              color: '#ffffff'
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

            {/* Liturgie box */}
            <div style={{
              background: 'rgba(227, 50, 65, 0.15)',
              border: '1px solid rgba(227, 50, 65, 0.3)',
              borderRadius: '16px',
              padding: '24px',
              marginBottom: '40px',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '700',
                marginBottom: '8px',
                color: '#E33241'
              }}>
                Liturgie
              </h3>
              <p style={{
                opacity: '0.9',
                marginBottom: '12px'
              }}>
                L'École Maîtrisienne chante la messe de dix heures le <strong>premier dimanche du mois</strong>.
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                color: 'var(--color-gold)',
                fontWeight: '600'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-gold)">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Cathédrale de Sion • 10h00
              </div>
            </div>

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
                marginBottom: '12px',
                color: 'var(--color-gold)'
              }}>
                Partenariat avec le {ecole.partenariat.institution}
              </h3>
              <p style={{ opacity: '0.9', lineHeight: '1.7' }}>
                {ecole.partenariat.description}
              </p>
            </div>

            <h3 style={{
              fontSize: '20px',
              fontWeight: '700',
              marginBottom: '24px',
              color: '#ffffff'
            }}>
              Programme de formation
            </h3>

            <div className="programme-list" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {ecole.programme.map((item, idx) => (
                <div key={idx} className="programme-item" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}>
                  <div className="bullet-icon" style={{
                    width: '32px',
                    height: '32px',
                    background: 'var(--color-gold)',
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
                  <span className="programme-text" style={{ fontSize: '16px', opacity: '0.95' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element with Photo */}
          <div className="card-glass desktop-only-block" style={{
            position: 'relative',
            padding: '0',
            overflow: 'hidden',
            borderRadius: '24px'
          }}>
            {/* Photo École Maîtrisienne */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '400px',
              overflow: 'hidden'
            }}>
              <Image
                src="/images/artistes/ecole-maitrisienne/ecole-stamm-hero.webp"
                alt="École Maîtrisienne de la Cathédrale"
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Overlay gradient pour texte lisible */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(26,19,64,0.9) 0%, rgba(26,19,64,0.3) 50%, transparent 100%)'
              }} />
            </div>

            {/* Texte overlay */}
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              padding: '32px',
              color: '#ffffff',
              zIndex: 2
            }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                marginBottom: '12px',
                color: '#ffffff'
              }}>
                Formation d'excellence
              </h3>
              <p style={{
                fontSize: '16px',
                opacity: '0.95',
                lineHeight: '1.6'
              }}>
                Une opportunité unique pour les jeunes talents de développer leur art vocal
                au plus haut niveau, au cœur de la tradition musicale de la Cathédrale.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          /* Masquer bloc image en mobile */
          .desktop-only-block {
            display: none !important;
          }

          /* Texte pleine largeur */
          .container > div {
            grid-template-columns: 1fr !important;
          }

          /* Programme de formation - Liste CSS pure mobile */
          .programme-list {
            display: block !important;
            padding-left: 20px !important;
            list-style-type: disc !important;
            margin: 0 !important;
          }

          .programme-item {
            display: list-item !important;
            margin-bottom: 8px !important;
            padding: 0 !important;
            background: transparent !important;
            border: none !important;
          }

          .bullet-icon {
            display: none !important;
          }

          .programme-text {
            display: inline !important;
            font-size: 15px !important;
            line-height: 1.76 !important;
            opacity: 0.95 !important;
            color: #ffffff !important;
          }

          .programme-item::marker {
            color: var(--color-gold);
          }
        }
      `}</style>
    </div>
  );
}