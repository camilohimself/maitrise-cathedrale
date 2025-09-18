'use client';

import React from 'react';

export default function ChapelleMusicaleSection() {
  const fetes = [
    { nom: "Saint-Joseph", date: "19 mars", icone: "⚜️" },
    { nom: "Ascension", date: "Variable", icone: "☁️" },
    { nom: "Assomption", date: "15 août", icone: "👑", special: true },
    { nom: "Immaculée Conception", date: "8 décembre", icone: "✨" }
  ];

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
              color: 'var(--color-gold)',
              backdropFilter: 'blur(10px)',
              padding: '8px 20px',
              borderRadius: '24px',
              fontSize: '14px',
              fontWeight: '700',
              marginBottom: '24px'
            }}>
              Renaissance
            </div>

            <h2 style={{
              fontSize: '48px',
              fontWeight: '300',
              marginBottom: '24px',
              color: '#ffffff'
            }}>
              La Chapelle Musicale
            </h2>

            <p style={{
              fontSize: '20px',
              lineHeight: '1.8',
              marginBottom: '32px',
              opacity: '0.95'
            }}>
              La Chapelle Musicale de la Maîtrise de la Cathédrale est un petit ensemble 
              d'une dizaine de chanteurs qui s'exprime habituellement a cappella dans 
              le grand répertoire de la musique de la Renaissance.
            </p>

            {/* Fêtes liturgiques */}
            <div style={{
              background: 'rgba(227, 50, 65, 0.1)',
              border: '1px solid rgba(227, 50, 65, 0.2)',
              borderRadius: '16px',
              padding: '24px',
              marginBottom: '40px',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '700',
                marginBottom: '16px',
                color: '#E33241'
              }}>
                Calendrier des célébrations
              </h3>
              <p style={{ 
                opacity: '0.9',
                marginBottom: '16px',
                fontSize: '14px'
              }}>
                Cette chapelle se produit habituellement lors des grandes fêtes liturgiques :
              </p>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px'
              }}>
                {fetes.map((fete, idx) => (
                  <div key={idx} style={{
                    background: fete.special 
                      ? 'rgba(212, 165, 116, 0.15)' 
                      : 'rgba(255, 255, 255, 0.05)',
                    border: fete.special 
                      ? '1px solid rgba(212, 165, 116, 0.3)' 
                      : '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    position: 'relative'
                  }}>
                    <span style={{ fontSize: '16px' }}>{fete.icone}</span>
                    <div>
                      <div style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: fete.special ? 'var(--color-gold)' : '#ffffff'
                      }}>
                        {fete.nom}
                      </div>
                      <div style={{
                        fontSize: '12px',
                        opacity: '0.8',
                        color: fete.special ? 'var(--color-gold)' : '#ffffff'
                      }}>
                        {fete.date}
                      </div>
                    </div>
                    {fete.special && (
                      <div style={{
                        position: 'absolute',
                        top: '4px',
                        right: '4px',
                        fontSize: '10px',
                        color: 'var(--color-gold)',
                        fontWeight: '700'
                      }}>
                        Patronale
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <h3 style={{
              fontSize: '20px',
              fontWeight: '700',
              marginBottom: '24px',
              color: '#ffffff'
            }}>
              Caractéristiques musicales
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                "Ensemble de 10 chanteurs expérimentés",
                "Répertoire Renaissance a cappella",
                "Interprétation authentique historique",
                "Fêtes liturgiques majeures"
              ].map((item, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    background: 'linear-gradient(45deg, var(--color-gold), #E6C068)',
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
            textAlign: 'center',
            position: 'relative'
          }}>
            <div style={{
              fontSize: '120px',
              marginBottom: '24px',
              background: 'linear-gradient(45deg, var(--color-gold), #E6C068)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              🎭
            </div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '700',
              marginBottom: '16px',
              color: '#ffffff'
            }}>
              Renaissance a cappella
            </h3>
            <p style={{
              fontSize: '16px',
              opacity: '0.9',
              lineHeight: '1.6'
            }}>
              Un ensemble de chambre d'exception qui fait revivre 
              les chefs-d'œuvre polyphoniques de la Renaissance 
              lors des plus grandes célébrations liturgiques.
            </p>

            {/* Badge Assomption */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(212, 165, 116, 0.2)',
              border: '1px solid rgba(212, 165, 116, 0.4)',
              color: 'var(--color-gold)',
              padding: '6px 16px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '700'
            }}>
              15 août - Patronale
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}