'use client';

import React from 'react';

export default function ChoeurGregorienSection() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #FAFAF9 0%, #F0F0F0 100%)',
      position: 'relative',
      padding: '100px 20px',
      color: '#1a1340'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 3fr',
          gap: '80px',
          alignItems: 'center'
        }}>
          {/* Visual Element */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.1) 0%, rgba(227, 50, 65, 0.05) 100%)',
            borderRadius: '24px',
            padding: '48px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(212, 165, 116, 0.2)',
            textAlign: 'center',
            position: 'relative'
          }}>
            <div style={{
              fontSize: '120px',
              marginBottom: '24px',
              background: 'linear-gradient(45deg, var(--color-gold), #E33241)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              ✠
            </div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '700',
              marginBottom: '16px',
              color: '#1a1340'
            }}>
              Tradition Séculaire
            </h3>
            <p style={{
              fontSize: '16px',
              opacity: '0.8',
              lineHeight: '1.6',
              color: '#1a1340'
            }}>
              Le chant grégorien, héritage musical millénaire de l'Église,
              trouve sa voix authentique dans notre ensemble de voix masculines.
            </p>
            
            {/* Badge messe mensuelle */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(227, 50, 65, 0.1)',
              border: '1px solid rgba(227, 50, 65, 0.3)',
              color: '#E33241',
              padding: '6px 16px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '700'
            }}>
              4ème dimanche
            </div>
          </div>

          {/* Content */}
          <div>
            <div style={{
              display: 'inline-block',
              background: 'rgba(212, 165, 116, 0.15)',
              border: '1px solid rgba(212, 165, 116, 0.4)',
              color: 'var(--color-gold)',
              backdropFilter: 'blur(10px)',
              padding: '8px 20px',
              borderRadius: '24px',
              fontSize: '14px',
              fontWeight: '700',
              marginBottom: '24px'
            }}>
              Chant Sacré
            </div>

            <h2 style={{
              fontSize: '48px',
              fontWeight: '300',
              marginBottom: '24px',
              color: '#1a1340'
            }}>
              Le Chœur Grégorien
            </h2>

            <p style={{
              fontSize: '20px',
              lineHeight: '1.8',
              marginBottom: '32px',
              opacity: '0.9',
              color: '#1a1340'
            }}>
              Le Chœur Grégorien de la Maîtrise de la Cathédrale est un ensemble de voix masculines 
              qui interprète le grand trésor du chant grégorien. Son répertoire est essentiellement 
              axé sur le plain chant, mais aussi sur le chant a capella du Moyen-Âge.
            </p>

            {/* Horaire de messe */}
            <div style={{
              background: 'rgba(227, 50, 65, 0.08)',
              border: '1px solid rgba(227, 50, 65, 0.2)',
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
                Animation liturgique
              </h3>
              <p style={{ 
                opacity: '0.9', 
                color: '#1a1340',
                marginBottom: '12px'
              }}>
                Le Chœur grégorien anime la messe de dix heures le quatrième dimanche du mois.
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

            <h3 style={{
              fontSize: '20px',
              fontWeight: '700',
              marginBottom: '24px',
              color: '#1a1340'
            }}>
              Répertoire traditionnel
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                "Plain-chant authentique",
                "Chant a capella du Moyen-Âge",
                "Répertoire liturgique traditionnel",
                "Interprétation selon les manuscrits anciens"
              ].map((item, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    background: 'linear-gradient(45deg, var(--color-gold), #E33241)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: '0'
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <span style={{ 
                    fontSize: '16px', 
                    opacity: '0.9',
                    color: '#1a1340'
                  }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}