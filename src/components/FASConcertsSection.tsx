'use client';

import React from 'react';
import fasEvents from '@/data/fasEvents.json';

const FASConcertsSection = () => {
  // Récupérer les 5 concerts principaux du FAS depuis le JSON
  const mainConcerts = fasEvents.events.slice(0, 5);

  const formatDate = (dateStr: string | undefined) => {
    if (!dateStr) return { day: '?', month: '?' };
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.toLocaleDateString('fr-FR', { month: 'short' }).toUpperCase();
    return { day: day.toString(), month };
  };

  return (
    <section style={{
      background: 'linear-gradient(135deg, var(--color-navy) 0%, var(--color-purple-dark) 50%, var(--color-navy) 100%)',
      padding: '120px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Motif décoratif */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 30%, rgba(167, 139, 250, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(107, 70, 193, 0.15) 0%, transparent 50%)
        `,
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        position: 'relative',
        zIndex: 2
      }}>
        {/* En-tête */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(167, 139, 250, 0.2)',
            border: '1px solid rgba(167, 139, 250, 0.3)',
            borderRadius: '50px',
            padding: '12px 28px',
            marginBottom: '24px'
          }}>
            <span style={{
              color: 'var(--color-purple-light)',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              20ème édition
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: '800',
            color: 'var(--color-white)',
            marginBottom: '20px',
            lineHeight: '1.1',
            fontFamily: 'var(--font-spectral)'
          }}>
            Concerts du Festival
          </h2>

          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Cinq rendez-vous d'exception qui marquent cette édition anniversaire
          </p>
        </div>

        {/* Grille des concerts */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {mainConcerts.map((concert, index) => {
            const dateInfo = formatDate(concert.date);
            const isMainEvent = index === 0 || index === 4; // Premier et dernier highlighted

            return (
              <div
                key={concert.id}
                style={{
                  background: isMainEvent
                    ? 'linear-gradient(135deg, rgba(107, 70, 193, 0.3), rgba(91, 33, 182, 0.2))'
                    : 'rgba(255, 255, 255, 0.05)',
                  border: isMainEvent
                    ? '2px solid var(--color-purple)'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '24px',
                  padding: '32px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(107, 70, 193, 0.3)';
                  e.currentTarget.style.borderColor = 'var(--color-purple-light)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = isMainEvent
                    ? 'var(--color-purple)'
                    : 'rgba(255, 255, 255, 0.1)';
                }}
              >
                {/* Badge date */}
                <div style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  background: 'var(--color-purple)',
                  borderRadius: '16px',
                  padding: '8px 16px',
                  minWidth: '80px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    color: 'white',
                    fontSize: '20px',
                    fontWeight: '700',
                    lineHeight: '1'
                  }}>
                    {dateInfo.day}
                  </div>
                  <div style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '12px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {dateInfo.month}
                  </div>
                </div>

                {/* Contenu */}
                <div style={{ marginBottom: '24px' }}>
                  <h3 style={{
                    color: 'var(--color-white)',
                    fontSize: '24px',
                    fontWeight: '700',
                    marginBottom: '8px',
                    lineHeight: '1.3',
                    paddingRight: '100px'
                  }}>
                    {concert.title}
                  </h3>

                  {concert.subtitle && (
                    <p style={{
                      color: 'var(--color-purple-light)',
                      fontSize: '16px',
                      fontWeight: '600',
                      marginBottom: '12px'
                    }}>
                      {concert.subtitle}
                    </p>
                  )}

                  <p style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '14px',
                    lineHeight: '1.5',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {concert.description}
                  </p>
                </div>

                {/* Footer avec heure et CTA */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 'auto'
                }}>
                  <div style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}>
                    {concert.time} • {concert.duration} min
                  </div>

                  <button style={{
                    background: 'var(--color-purple)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '10px 20px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--color-purple-dark)';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--color-purple)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}>
                    Réserver
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>

                {/* Badge prestige pour événements principaux */}
                {isMainEvent && (
                  <div style={{
                    position: 'absolute',
                    top: '-1px',
                    left: '24px',
                    background: 'linear-gradient(135deg, var(--color-gold), var(--color-gold-hover))',
                    color: 'var(--color-navy)',
                    padding: '6px 16px',
                    borderRadius: '0 0 12px 12px',
                    fontSize: '12px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    ★ Prestige
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA global */}
        <div style={{
          textAlign: 'center',
          marginTop: '60px'
        }}>
          <a
            href="/agenda-billetterie"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              background: 'linear-gradient(135deg, var(--color-purple), var(--color-purple-dark))',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '16px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 32px rgba(107, 70, 193, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(107, 70, 193, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(107, 70, 193, 0.3)';
            }}
          >
            Voir tous les concerts
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FASConcertsSection;