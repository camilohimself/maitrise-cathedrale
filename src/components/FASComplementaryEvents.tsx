'use client';

import { Flame, Music } from 'lucide-react';
import complementaryEvents from '@/data/complementaryEvents.json';

const FASComplementaryEvents = () => {
  const { rorate, vesperales } = complementaryEvents;

  return (
    <section style={{
      background: 'linear-gradient(180deg, #1a1340 0%, #0a0a1a 100%)',
      padding: '100px 40px',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '300',
            color: 'white',
            marginBottom: '16px',
            fontFamily: 'var(--font-spectral), Georgia, serif'
          }}>
            Découvrez aussi
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Traditions et moments de grâce qui enrichissent le Festival d'Art Sacré
          </p>
        </div>

        {/* Grid 2 colonnes */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '60px'
        }}>
          {/* RORATE */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '24px',
            padding: '48px',
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

            {/* Icon */}
            <div style={{
              marginBottom: '32px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.2), rgba(255, 140, 0, 0.1))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255, 193, 7, 0.3)'
              }}>
                <Flame size={28} color="#FFC107" strokeWidth={2} />
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  color: 'white',
                  fontFamily: 'var(--font-spectral), Georgia, serif',
                  marginBottom: '4px'
                }}>
                  {rorate.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#FFC107',
                  fontStyle: 'italic'
                }}>
                  {rorate.subtitle}
                </p>
              </div>
            </div>

            {/* Description */}
            <p style={{
              fontSize: '1rem',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.6',
              marginBottom: '32px'
            }}>
              {rorate.description}
            </p>

            {/* Photo bougies cathédrale */}
            <div style={{
              width: '100%',
              height: '200px',
              borderRadius: '16px',
              marginBottom: '32px',
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
                    gap: '16px',
                    padding: '16px',
                    background: 'rgba(255, 193, 7, 0.08)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 193, 7, 0.15)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {/* Date badge */}
                  <div style={{
                    minWidth: '70px',
                    textAlign: 'center',
                    padding: '12px',
                    background: 'rgba(255, 193, 7, 0.15)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 193, 7, 0.3)'
                  }}>
                    <div style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      color: '#FFC107',
                      lineHeight: '1'
                    }}>
                      {date.dayNumber}
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      color: 'rgba(255, 193, 7, 0.8)',
                      marginTop: '4px',
                      fontWeight: '600'
                    }}>
                      {date.month}
                    </div>
                  </div>

                  {/* Infos */}
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '0.9rem',
                      color: 'rgba(255, 255, 255, 0.6)',
                      marginBottom: '4px'
                    }}>
                      {date.day}
                    </div>
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: 'white'
                    }}>
                      {date.performers}
                    </div>
                  </div>

                  {/* Heure */}
                  <div style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#FFC107'
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
            borderRadius: '24px',
            padding: '48px',
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

            {/* Icon */}
            <div style={{
              marginBottom: '32px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.2), rgba(212, 165, 116, 0.1))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(212, 165, 116, 0.3)'
              }}>
                <Music size={28} color="#D4A574" strokeWidth={2} />
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  color: 'white',
                  fontFamily: 'var(--font-spectral), Georgia, serif',
                  marginBottom: '4px'
                }}>
                  {vesperales.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#D4A574',
                  fontStyle: 'italic'
                }}>
                  {vesperales.subtitle}
                </p>
              </div>
            </div>

            {/* Description */}
            <p style={{
              fontSize: '1rem',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.6',
              marginBottom: '32px'
            }}>
              {vesperales.description}
            </p>

            {/* Photo orgue cathédrale XVIIIe */}
            <div style={{
              width: '100%',
              height: '200px',
              borderRadius: '16px',
              marginBottom: '32px',
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
                    gap: '16px',
                    padding: '16px',
                    background: 'rgba(212, 165, 116, 0.08)',
                    borderRadius: '12px',
                    border: '1px solid rgba(212, 165, 116, 0.15)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {/* Date badge */}
                  <div style={{
                    minWidth: '70px',
                    textAlign: 'center',
                    padding: '12px',
                    background: 'rgba(212, 165, 116, 0.15)',
                    borderRadius: '12px',
                    border: '1px solid rgba(212, 165, 116, 0.3)'
                  }}>
                    <div style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      color: '#D4A574',
                      lineHeight: '1'
                    }}>
                      {date.dayNumber}
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      color: 'rgba(212, 165, 116, 0.8)',
                      marginTop: '4px',
                      fontWeight: '600'
                    }}>
                      {date.month}
                    </div>
                  </div>

                  {/* Infos */}
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '0.9rem',
                      color: 'rgba(255, 255, 255, 0.6)',
                      marginBottom: '4px'
                    }}>
                      {date.day}
                    </div>
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: 'white',
                      marginBottom: '2px'
                    }}>
                      {date.organist}
                    </div>
                    <div style={{
                      fontSize: '0.85rem',
                      color: 'rgba(212, 165, 116, 0.8)'
                    }}>
                      {date.title}
                    </div>
                  </div>

                  {/* Heure */}
                  <div style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#D4A574'
                  }}>
                    {date.time}
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
