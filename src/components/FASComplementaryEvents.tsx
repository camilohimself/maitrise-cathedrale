'use client';

import { Download } from 'lucide-react';
import complementaryEvents from '@/data/complementaryEvents.json';

const FASComplementaryEvents = () => {
  const { rorate, vesperales } = complementaryEvents;

  return (
    <section style={{
      background: 'linear-gradient(180deg, #1a1340 0%, #0a0a1a 100%)',
      padding: 'clamp(40px, 10vw, 100px) clamp(16px, 5vw, 40px)',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: 'clamp(40px, 8vw, 80px)'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            fontWeight: '300',
            color: 'white',
            marginBottom: '16px',
            fontFamily: 'var(--font-spectral), Georgia, serif'
          }}>
            Découvrez aussi
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '700px',
            margin: '0 auto',
            padding: '0 16px'
          }}>
            Traditions et moments de grâce qui enrichissent le Festival d'Art Sacré
          </p>
        </div>

        {/* Grid 2 colonnes */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
          gap: 'clamp(30px, 6vw, 60px)'
        }}>
          {/* RORATE */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: 'clamp(16px, 3vw, 24px)',
            padding: 'clamp(24px, 5vw, 48px)',
            border: '1px solid rgba(255, 193, 7, 0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Background image placeholder */}
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(255, 193, 7, 0.1) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(40px)',
              pointerEvents: 'none'
            }} />

            {/* Header Rorate */}
            <div style={{
              marginBottom: 'clamp(20px, 4vw, 32px)'
            }}>
              <h3 style={{
                fontSize: 'clamp(1.4rem, 4vw, 1.8rem)',
                fontWeight: '600',
                color: 'white',
                fontFamily: 'var(--font-spectral), Georgia, serif',
                marginBottom: '4px'
              }}>
                {rorate.title}
              </h3>
              <p style={{
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                color: '#FFC107',
                fontStyle: 'italic'
              }}>
                {rorate.subtitle}
              </p>
            </div>

            {/* Description */}
            <p style={{
              fontSize: 'clamp(0.95rem, 2vw, 1rem)',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.6',
              marginBottom: 'clamp(20px, 4vw, 32px)'
            }}>
              {rorate.description}
            </p>

            {/* Photo bougies cathédrale */}
            <div style={{
              width: '100%',
              height: 'clamp(160px, 25vw, 200px)',
              borderRadius: 'clamp(12px, 2vw, 16px)',
              marginBottom: 'clamp(20px, 4vw, 32px)',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(255, 193, 7, 0.2)'
            }}>
              <img
                src="/images/complementary/rorate-card.webp"
                alt="Messes du Rorate à la lueur des bougies"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
              {/* Overlay subtil */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 0%, rgba(255, 193, 7, 0.1) 100%)',
                pointerEvents: 'none'
              }} />
            </div>

            {/* Liste dates */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {rorate.dates.map((date) => (
                <div
                  key={date.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'clamp(10px, 2vw, 16px)',
                    padding: 'clamp(12px, 2.5vw, 16px)',
                    background: 'rgba(255, 193, 7, 0.08)',
                    borderRadius: 'clamp(8px, 1.5vw, 12px)',
                    border: '1px solid rgba(255, 193, 7, 0.15)',
                    transition: 'all 0.3s ease',
                    flexWrap: 'wrap'
                  }}
                >
                  {/* Date badge */}
                  <div style={{
                    minWidth: 'clamp(60px, 12vw, 70px)',
                    textAlign: 'center',
                    padding: 'clamp(8px, 2vw, 12px)',
                    background: 'rgba(255, 193, 7, 0.15)',
                    borderRadius: 'clamp(8px, 1.5vw, 12px)',
                    border: '1px solid rgba(255, 193, 7, 0.3)',
                    flexShrink: 0
                  }}>
                    <div style={{
                      fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                      fontWeight: '700',
                      color: '#FFC107',
                      lineHeight: '1'
                    }}>
                      {date.dayNumber}
                    </div>
                    <div style={{
                      fontSize: 'clamp(0.7rem, 1.5vw, 0.75rem)',
                      color: 'rgba(255, 193, 7, 0.8)',
                      marginTop: '4px',
                      fontWeight: '600'
                    }}>
                      {date.month}
                    </div>
                  </div>

                  {/* Infos */}
                  <div style={{ flex: '1 1 150px' }}>
                    <div style={{
                      fontSize: 'clamp(0.85rem, 1.8vw, 0.9rem)',
                      color: 'rgba(255, 255, 255, 0.6)',
                      marginBottom: '4px'
                    }}>
                      {date.day}
                    </div>
                    <div style={{
                      fontSize: 'clamp(0.95rem, 2vw, 1rem)',
                      fontWeight: '600',
                      color: 'white'
                    }}>
                      {date.performers}
                    </div>
                  </div>

                  {/* Heure */}
                  <div style={{
                    fontSize: 'clamp(0.95rem, 2vw, 1rem)',
                    fontWeight: '600',
                    color: '#FFC107',
                    flexShrink: 0
                  }}>
                    {date.time}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* VESPÉRALES D'ORGUE */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: 'clamp(16px, 3vw, 24px)',
            padding: 'clamp(24px, 5vw, 48px)',
            border: '1px solid rgba(212, 165, 116, 0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Background image placeholder */}
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(212, 165, 116, 0.1) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(40px)',
              pointerEvents: 'none'
            }} />

            {/* Header Vespérales */}
            <div style={{
              marginBottom: 'clamp(20px, 4vw, 32px)'
            }}>
              <h3 style={{
                fontSize: 'clamp(1.4rem, 4vw, 1.8rem)',
                fontWeight: '600',
                color: 'white',
                fontFamily: 'var(--font-spectral), Georgia, serif',
                marginBottom: '4px'
              }}>
                {vesperales.title}
              </h3>
              <p style={{
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                color: '#D4A574',
                fontStyle: 'italic'
              }}>
                {vesperales.subtitle}
              </p>
            </div>

            {/* Description */}
            <p style={{
              fontSize: 'clamp(0.95rem, 2vw, 1rem)',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.6',
              marginBottom: 'clamp(20px, 4vw, 32px)'
            }}>
              {vesperales.description}
            </p>

            {/* Photo orgue cathédrale XVIIIe */}
            <div style={{
              width: '100%',
              height: 'clamp(160px, 25vw, 200px)',
              borderRadius: 'clamp(12px, 2vw, 16px)',
              marginBottom: 'clamp(20px, 4vw, 32px)',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(212, 165, 116, 0.2)'
            }}>
              <img
                src="/images/complementary/vesperales-card.webp"
                alt="Orgue historique de la Cathédrale de Sion (XVIIIe siècle)"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
              {/* Overlay subtil */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 0%, rgba(212, 165, 116, 0.1) 100%)',
                pointerEvents: 'none'
              }} />
            </div>

            {/* Liste dates */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {vesperales.dates.map((date) => (
                <div
                  key={date.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'clamp(10px, 2vw, 16px)',
                    padding: 'clamp(12px, 2.5vw, 16px)',
                    background: 'rgba(212, 165, 116, 0.08)',
                    borderRadius: 'clamp(8px, 1.5vw, 12px)',
                    border: '1px solid rgba(212, 165, 116, 0.15)',
                    transition: 'all 0.3s ease',
                    flexWrap: 'wrap'
                  }}
                >
                  {/* Date badge */}
                  <div style={{
                    minWidth: 'clamp(60px, 12vw, 70px)',
                    textAlign: 'center',
                    padding: 'clamp(8px, 2vw, 12px)',
                    background: 'rgba(212, 165, 116, 0.15)',
                    borderRadius: 'clamp(8px, 1.5vw, 12px)',
                    border: '1px solid rgba(212, 165, 116, 0.3)',
                    flexShrink: 0
                  }}>
                    <div style={{
                      fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                      fontWeight: '700',
                      color: '#D4A574',
                      lineHeight: '1'
                    }}>
                      {date.dayNumber}
                    </div>
                    <div style={{
                      fontSize: 'clamp(0.7rem, 1.5vw, 0.75rem)',
                      color: 'rgba(212, 165, 116, 0.8)',
                      marginTop: '4px',
                      fontWeight: '600'
                    }}>
                      {date.month}
                    </div>
                  </div>

                  {/* Infos */}
                  <div style={{ flex: '1 1 150px' }}>
                    <div style={{
                      fontSize: 'clamp(0.85rem, 1.8vw, 0.9rem)',
                      color: 'rgba(255, 255, 255, 0.6)',
                      marginBottom: '4px'
                    }}>
                      {date.day}
                    </div>
                    <div style={{
                      fontSize: 'clamp(0.95rem, 2vw, 1rem)',
                      fontWeight: '600',
                      color: 'white',
                      marginBottom: '2px'
                    }}>
                      {date.organist}
                    </div>
                    <div style={{
                      fontSize: 'clamp(0.8rem, 1.7vw, 0.85rem)',
                      color: 'rgba(212, 165, 116, 0.8)'
                    }}>
                      {date.title}
                    </div>
                  </div>

                  {/* Heure + Programme */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    gap: '8px',
                    flexShrink: 0
                  }}>
                    <div style={{
                      fontSize: 'clamp(0.95rem, 2vw, 1rem)',
                      fontWeight: '600',
                      color: '#D4A574'
                    }}>
                      {date.time}
                    </div>
                    {date.programmeUrl && (
                      <a
                        href={date.programmeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '8px 12px',
                          background: 'rgba(212, 165, 116, 0.15)',
                          border: '1px solid rgba(212, 165, 116, 0.4)',
                          borderRadius: '8px',
                          color: '#D4A574',
                          fontSize: 'clamp(0.75rem, 1.5vw, 0.85rem)',
                          fontWeight: '500',
                          textDecoration: 'none',
                          transition: 'all 0.2s ease',
                          minHeight: '44px',
                          minWidth: '44px',
                          justifyContent: 'center'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(212, 165, 116, 0.25)';
                          e.currentTarget.style.borderColor = 'rgba(212, 165, 116, 0.6)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(212, 165, 116, 0.15)';
                          e.currentTarget.style.borderColor = 'rgba(212, 165, 116, 0.4)';
                        }}
                      >
                        <Download size={16} />
                        <span className="programme-text">Programme</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FASComplementaryEvents;
