'use client';

import { useState, useEffect } from 'react';
import fasEvents from '@/data/fasEvents.json';

const FASRorateSection = () => {
  const [candleFlicker, setCandleFlicker] = useState(0);
  
  // Animation chandelles
  useEffect(() => {
    const interval = setInterval(() => {
      setCandleFlicker(Math.random() * 0.3 + 0.7);
    }, 2000 + Math.random() * 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Récupérer les données Rorate
  const rorateEvent = fasEvents.events.find(event => event.type === 'messe');

  const candleStyles = `
    @keyframes flicker {
      0%, 100% { opacity: 0.9; transform: scale(1) rotate(0deg); }
      25% { opacity: 0.8; transform: scale(1.02) rotate(1deg); }
      50% { opacity: 1; transform: scale(0.98) rotate(-0.5deg); }
      75% { opacity: 0.85; transform: scale(1.01) rotate(0.5deg); }
    }
    
    @keyframes candleGlow {
      0%, 100% { box-shadow: 0 0 20px rgba(255, 193, 7, 0.6), 0 0 40px rgba(255, 193, 7, 0.3); }
      50% { box-shadow: 0 0 30px rgba(255, 193, 7, 0.8), 0 0 60px rgba(255, 193, 7, 0.4); }
    }
    
    @keyframes ambientGlow {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 0.6; }
    }
  `;

  if (!rorateEvent) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: candleStyles }} />
      <section style={{
        background: 'linear-gradient(180deg, #000000 0%, #1a1340 100%)',
        position: 'relative',
        padding: '120px 40px',
        overflow: 'hidden',
        minHeight: '100vh'
      }}>
        {/* Ambiance mystique */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at 20% 30%, rgba(255, 193, 7, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 193, 7, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.8) 0%, transparent 60%)
          `,
          animation: 'ambientGlow 8s ease-in-out infinite'
        }} />

        {/* Particules dorées flottantes */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(2px 2px at 20px 30px, rgba(255, 193, 7, 0.4), transparent),
            radial-gradient(1px 1px at 40px 70px, rgba(255, 215, 0, 0.3), transparent),
            radial-gradient(1px 1px at 90px 40px, rgba(255, 193, 7, 0.2), transparent),
            radial-gradient(2px 2px at 130px 80px, rgba(255, 215, 0, 0.4), transparent)
          `,
          backgroundRepeat: 'repeat',
          backgroundSize: '150px 150px',
          animation: 'flicker 6s ease-in-out infinite'
        }} />

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          {/* Header mystique */}
          <div style={{
            textAlign: 'center',
            marginBottom: '80px'
          }}>
            {/* Badge spécial */}
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(45deg, #1B1B2F, #2D2D44)',
              border: '1px solid rgba(255, 193, 7, 0.3)',
              borderRadius: '50px',
              padding: '12px 28px',
              marginBottom: '32px',
              backdropFilter: 'blur(10px)'
            }}>
              <span style={{
                color: '#FFC107',
                fontSize: '0.9rem',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}>
                🕯️ Tradition Sacrée
              </span>
            </div>

            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '300',
              color: 'white',
              marginBottom: '24px',
              fontFamily: 'var(--font-spectral), Georgia, serif',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)'
            }}>
              Messes du
              <span style={{
                display: 'block',
                fontWeight: '700',
                background: 'linear-gradient(45deg, #FFC107, #FFD700)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginTop: '12px'
              }}>Rorate</span>
            </h2>

            <p style={{
              fontSize: '1.2rem',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
              fontStyle: 'italic'
            }}>
              "Dans la seule lumière des bougies, nos jeunes s'exercent à l'art du quatuor"
            </p>
          </div>

          {/* Contenu principal avec chandelles */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px',
            alignItems: 'center'
          }}>
            {/* Section chandelles */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              position: 'relative'
            }}>
              {/* Chandelles animées */}
              <div style={{
                display: 'flex',
                gap: '30px',
                marginBottom: '40px'
              }}>
                {[1, 2, 3, 4].map((candle, index) => (
                  <div 
                    key={candle}
                    style={{
                      position: 'relative',
                      animation: `flicker ${4 + index}s ease-in-out infinite ${index * 0.5}s`
                    }}
                  >
                    {/* Base chandelle */}
                    <div style={{
                      width: '12px',
                      height: `${80 + index * 20}px`,
                      background: 'linear-gradient(180deg, #F5DEB3 0%, #DDD5B8 100%)',
                      borderRadius: '6px',
                      position: 'relative',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.6)',
                    }}>
                      {/* Flamme */}
                      <div style={{
                        position: 'absolute',
                        top: '-15px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '8px',
                        height: '12px',
                        background: 'radial-gradient(ellipse, #FFD700 0%, #FFA500 50%, #FF4500 100%)',
                        borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                        animation: `candleGlow ${3 + index * 0.5}s ease-in-out infinite`,
                        opacity: candleFlicker
                      }} />
                      
                      {/* Lueur autour */}
                      <div style={{
                        position: 'absolute',
                        top: '-25px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '40px',
                        height: '40px',
                        background: 'radial-gradient(circle, rgba(255, 193, 7, 0.6) 0%, transparent 70%)',
                        borderRadius: '50%',
                        animation: `ambientGlow ${5 + index}s ease-in-out infinite`,
                        pointerEvents: 'none'
                      }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Citation mystique */}
              <div style={{
                background: 'rgba(0, 0, 0, 0.6)',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid rgba(255, 193, 7, 0.2)',
                backdropFilter: 'blur(20px)',
                textAlign: 'center'
              }}>
                <p style={{
                  color: '#FFC107',
                  fontSize: '1rem',
                  fontStyle: 'italic',
                  marginBottom: '12px',
                  fontWeight: '500'
                }}>
                  "Messes célébrées pendant l'Avent, généralement à l'aube"
                </p>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '0.9rem'
                }}>
                  Tradition séculaire de l'Église
                </p>
              </div>
            </div>

            {/* Informations événement */}
            <div>
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '20px',
                padding: '40px',
                border: '1px solid rgba(255, 193, 7, 0.2)',
                backdropFilter: 'blur(15px)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Effet de lueur */}
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  right: '-50%',
                  bottom: '-50%',
                  background: 'conic-gradient(from 0deg, transparent, rgba(255, 193, 7, 0.1), transparent, rgba(255, 193, 7, 0.1), transparent)',
                  animation: 'spin 20s linear infinite',
                  zIndex: -1
                }} />

                <div style={{
                  marginBottom: '24px'
                }}>
                  <span style={{
                    background: 'rgba(255, 193, 7, 0.2)',
                    color: '#FFC107',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    Liturgie Sacrée
                  </span>
                </div>

                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: '600',
                  color: 'white',
                  marginBottom: '16px',
                  fontFamily: 'var(--font-spectral), Georgia, serif'
                }}>
                  {rorateEvent.title}
                </h3>

                <p style={{
                  fontSize: '1.1rem',
                  color: '#FFC107',
                  marginBottom: '20px',
                  fontWeight: '500'
                }}>
                  {rorateEvent.subtitle}
                </p>

                <p style={{
                  fontSize: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6',
                  marginBottom: '24px'
                }}>
                  {rorateEvent.description}
                </p>

                {/* Détails pratiques */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                  gap: '16px',
                  marginBottom: '32px'
                }}>
                  <div style={{
                    textAlign: 'center',
                    padding: '16px',
                    background: 'rgba(255, 193, 7, 0.1)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 193, 7, 0.2)'
                  }}>
                    <div style={{
                      fontSize: '1.5rem',
                      color: '#FFC107',
                      marginBottom: '8px'
                    }}>🕐</div>
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: 'white',
                      marginBottom: '4px'
                    }}>07:00</div>
                    <div style={{
                      fontSize: '0.8rem',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}>À l'aube</div>
                  </div>

                  <div style={{
                    textAlign: 'center',
                    padding: '16px',
                    background: 'rgba(255, 193, 7, 0.1)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 193, 7, 0.2)'
                  }}>
                    <div style={{
                      fontSize: '1.5rem',
                      color: '#FFC107',
                      marginBottom: '8px'
                    }}>📅</div>
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: 'white',
                      marginBottom: '4px'
                    }}>4 Dimanches</div>
                    <div style={{
                      fontSize: '0.8rem',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}>Décembre</div>
                  </div>

                  <div style={{
                    textAlign: 'center',
                    padding: '16px',
                    background: 'rgba(255, 193, 7, 0.1)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 193, 7, 0.2)'
                  }}>
                    <div style={{
                      fontSize: '1.5rem',
                      color: '#FFC107',
                      marginBottom: '8px'
                    }}>⏱️</div>
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: 'white',
                      marginBottom: '4px'
                    }}>45 min</div>
                    <div style={{
                      fontSize: '0.8rem',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}>Durée</div>
                  </div>
                </div>

                {/* Artistes */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                  marginBottom: '32px'
                }}>
                  {rorateEvent.artists.map((artist, index) => (
                    <span
                      key={index}
                      style={{
                        background: 'rgba(255, 193, 7, 0.15)',
                        color: '#FFC107',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        border: '1px solid rgba(255, 193, 7, 0.3)'
                      }}
                    >
                      {artist}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button style={{
                  width: '100%',
                  padding: '16px',
                  background: 'linear-gradient(45deg, #1B1B2F, #2D2D44)',
                  color: '#FFC107',
                  border: '2px solid #FFC107',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(45deg, #FFC107, #FFD700)';
                  e.currentTarget.style.color = '#1B1B2F';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(255, 193, 7, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(45deg, #1B1B2F, #2D2D44)';
                  e.currentTarget.style.color = '#FFC107';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  🕯️ Assister aux Messes Rorate
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Animation rotation pour l'effet de lueur */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `
        }} />
      </section>
    </>
  );
};

export default FASRorateSection;