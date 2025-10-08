'use client';

import React, { memo, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { maitriseEvents } from '@/data/maitriseEvents';
import { EVENT_TYPE_CONFIG } from '@/data/uiConstants';

/**
 * VERSION INVERSÉE: Fond rouge, typographie claire
 * Contraste similaire à la page Maîtrise mais inversé
 */

const UpcomingEventsSectionInverted = memo(() => {
  // Filtrer les événements à venir
  const upcomingEvents = useMemo(() => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();

    return maitriseEvents
      .filter(event => {
        const monthMap: { [key: string]: number } = {
          'OCT': 10, 'NOV': 11, 'DÉC': 12,
          'JAN': 1, 'FÉV': 2, 'MAR': 3, 'AVR': 4, 'MAI': 5, 'JUIN': 6
        };
        const eventMonth = monthMap[event.date.month];
        const eventDay = parseInt(event.date.day);
        const eventYear = eventMonth >= 10 ? 2025 : 2026;

        const eventDate = new Date(eventYear, eventMonth - 1, eventDay);
        const todayDate = new Date(currentYear, currentMonth - 1, currentDay);

        return eventDate >= todayDate;
      })
      .filter(event => event.type === 'concert' || event.type === 'fas')
      .filter(event => event.featured)
      .slice(0, 3);
  }, []);

  const getEventIcon = useCallback((category: string) => {
    const iconColor = '#ffffff'; // Blanc pour contraster avec fond rouge

    switch (category) {
      case 'Festival':
        return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>;
      case 'Concert':
        return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>;
      default:
        return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2"><path d="M8 5v14l11-7z"/></svg>;
    }
  }, []);

  return (
    <section style={{
      background: 'linear-gradient(135deg, #8B0000 0%, #A52A2A 100%)',
      padding: '100px 0 110px',
      position: 'relative',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
      }}>

        {/* Header inversé */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px',
        }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            color: '#ffffff',
            borderRadius: '25px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            fontFamily: 'var(--font-outfit)',
            fontSize: '0.85rem',
            fontWeight: '500',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}>
            Saison 2025-2026
          </div>

          <h2 style={{
            fontFamily: 'var(--font-spectral)',
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '400',
            color: '#ffffff',
            marginBottom: '16px',
            lineHeight: 1.2,
            letterSpacing: '0.5px',
          }}>
            Prochains concerts
          </h2>

          <p style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '1.1rem',
            fontWeight: '300',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '580px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            L'excellence musicale au cœur de la Cathédrale Notre-Dame de Sion
          </p>
        </div>

        {/* Cards inversées */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '60px',
        }}>
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              style={{
                background: 'rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(20px)',
                borderRadius: '16px',
                padding: '32px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                position: 'relative',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                // Change text colors on hover
                const title = e.currentTarget.querySelector('h3') as HTMLElement;
                const texts = e.currentTarget.querySelectorAll('p, div, span');
                if (title) title.style.color = 'var(--color-red)';
                texts.forEach((el: any) => {
                  if (!el.classList.contains('keep-white')) {
                    el.style.color = 'var(--color-navy)';
                  }
                });
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.boxShadow = 'none';
                // Reset colors
                const title = e.currentTarget.querySelector('h3') as HTMLElement;
                const texts = e.currentTarget.querySelectorAll('p, div, span');
                if (title) title.style.color = '#ffffff';
                texts.forEach((el: any) => {
                  if (!el.classList.contains('keep-white')) {
                    el.style.color = 'rgba(255, 255, 255, 0.9)';
                  }
                });
              }}
            >
              {/* Badge featured inversé */}
              {event.featured && (
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '10px',
                  height: '10px',
                  backgroundColor: '#D4A574',
                  borderRadius: '50%',
                  boxShadow: '0 0 0 3px rgba(212, 165, 116, 0.3)',
                }} />
              )}

              {/* Layout horizontal */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px',
                marginBottom: '20px',
              }}>
                {/* Date circle inversé */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '75px',
                  height: '75px',
                  background: 'rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '50%',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  color: '#ffffff',
                  flexShrink: 0,
                }}>
                  <span style={{
                    fontFamily: 'var(--font-spectral)',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    lineHeight: 1,
                  }}>
                    {event.date.day}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '0.7rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginTop: '4px',
                  }}>
                    {event.date.month}
                  </span>
                </div>

                <div style={{ flex: 1 }}>
                  {/* Catégorie */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '8px',
                  }}>
                    {getEventIcon(event.category)}
                    <span style={{
                      fontFamily: 'var(--font-outfit)',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: 'rgba(255, 255, 255, 0.8)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.2px',
                    }}>
                      {event.category}
                    </span>
                  </div>

                  {/* Titre */}
                  <h3 style={{
                    fontFamily: 'var(--font-spectral)',
                    fontSize: '1.35rem',
                    fontWeight: '600',
                    color: '#ffffff',
                    marginBottom: '8px',
                    lineHeight: 1.3,
                    transition: 'color 0.3s ease',
                  }}>
                    {event.title}
                  </h3>

                  {/* Collaboration */}
                  {event.collaboration && (
                    <div style={{
                      fontFamily: 'var(--font-outfit)',
                      fontSize: '0.85rem',
                      fontStyle: 'italic',
                      color: 'rgba(255, 255, 255, 0.7)',
                      marginBottom: '6px',
                      transition: 'color 0.3s ease',
                    }}>
                      {event.collaboration}
                    </div>
                  )}

                  {/* Heure et lieu */}
                  <div style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '0.875rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    marginTop: '12px',
                    transition: 'color 0.3s ease',
                  }}>
                    {event.time} • {event.location}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: '0.875rem',
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: 1.6,
                marginBottom: '20px',
                transition: 'color 0.3s ease',
              }}>
                {event.description.length > 110
                  ? `${event.description.substring(0, 110)}...`
                  : event.description
                }
              </p>

              {/* CTA */}
              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: '600',
                  fontSize: '0.875rem',
                  color: '#D4A574',
                  transition: 'all 0.3s ease',
                }} className="keep-white">
                  <span>Détails</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA inversé */}
        <div style={{ textAlign: 'center' }}>
          <Link
            href="/agenda-billetterie"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '16px 36px',
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              color: '#ffffff',
              border: '2px solid rgba(255, 255, 255, 0.4)',
              borderRadius: '50px',
              fontFamily: 'var(--font-outfit)',
              fontWeight: '600',
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.color = 'var(--color-red)';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span>Voir tous les événements</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
});

UpcomingEventsSectionInverted.displayName = 'UpcomingEventsSectionInverted';

export default UpcomingEventsSectionInverted;
