'use client';

import React, { memo, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { maitriseEvents, getFeaturedEvents } from '@/data/maitriseEvents';
import { EVENT_TYPE_CONFIG } from '@/data/uiConstants';

const UpcomingEventsSection = memo(() => {
  // Filtrer les événements à venir - Utilise getUpcomingEvents() avec filtrage dynamique
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

  // Performance Dr Claude: Fonction externalisée
  const getEventIcon = useCallback((category: string) => {
    const config = EVENT_TYPE_CONFIG[category] || EVENT_TYPE_CONFIG.Concert;
    const iconType = config.icon;
    const color = config.color;
    
    // Retourner un SVG selon le type
    switch (iconType) {
      case 'star':
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>;
      case 'music':
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>;
      case 'note':
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>;
      case 'education':
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>;
      case 'community':
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
      default:
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M8 5v14l11-7z"/></svg>;
    }
  }, []);

  return (
    <section style={{
      backgroundColor: 'var(--color-white)',
      padding: '120px 0',
      position: 'relative',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
      }}>
        
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem',
        }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            backgroundColor: 'var(--color-gold-transparent)',
            color: 'var(--color-gold)',
            borderRadius: '25px',
            fontFamily: 'var(--font-outfit)',
            fontSize: '0.9rem',
            fontWeight: '600',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>
            Saison 2025-2026
          </div>

          <h2 style={{
            fontFamily: 'var(--font-spectral)',
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '700',
            color: 'var(--color-red)',
            marginBottom: '1rem',
            lineHeight: 1.2,
          }}>
            Prochains concerts
          </h2>

          <p style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '1.2rem',
            fontWeight: '300',
            color: 'var(--color-navy)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            L'excellence musicale au cœur de la Cathédrale Notre-Dame de Sion
          </p>
        </div>

        {/* Timeline des événements */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem',
        }}>
          {upcomingEvents.map((event, index) => (
            <div
              key={event.id}
              style={{
                backgroundColor: 'var(--color-cream)',
                borderRadius: '20px',
                padding: '2rem',
                border: '2px solid transparent',
                position: 'relative',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.backgroundColor = 'var(--color-white)';
                e.currentTarget.style.borderColor = 'rgba(227, 50, 65, 0.2)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(227, 50, 65, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = 'var(--color-cream)';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Badge featured */}
              {event.featured && (
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  width: '12px',
                  height: '12px',
                  backgroundColor: 'var(--color-red)',
                  borderRadius: '50%',
                  boxShadow: '0 0 0 3px rgba(227, 50, 65, 0.2)',
                }} />
              )}

              {/* Date circle */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.5rem',
                marginBottom: '1.5rem',
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  backgroundColor: 'var(--color-red)',
                  borderRadius: '50%',
                  color: 'var(--color-white)',
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
                    marginTop: '2px',
                  }}>
                    {event.date.month}
                  </span>
                </div>

                <div style={{ flex: 1 }}>
                  {/* Catégorie avec icône */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '0.5rem',
                  }}>
                    <span style={{ fontSize: '1.2rem' }}>
                      {getEventIcon(event.category)}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-outfit)',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      color: 'var(--color-gold)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}>
                      {event.category}
                    </span>
                  </div>

                  {/* Titre */}
                  <h3 style={{
                    fontFamily: 'var(--font-spectral)',
                    fontSize: '1.4rem',
                    fontWeight: '700',
                    color: 'var(--color-red)',
                    marginBottom: '0.5rem',
                    lineHeight: 1.3,
                  }}>
                    {event.title}
                  </h3>

                  {/* Collaboration */}
                  {event.collaboration && (
                    <div style={{
                      fontFamily: 'var(--font-outfit)',
                      fontSize: '0.85rem',
                      fontStyle: 'italic',
                      color: 'var(--color-navy)',
                      opacity: 0.8,
                      marginBottom: '0.3rem',
                    }}>
                      {event.collaboration}
                    </div>
                  )}

                  {/* Heure et lieu */}
                  <div style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '0.9rem',
                    color: 'var(--color-navy)',
                    marginBottom: '1rem',
                  }}>
                    <div>{event.time} • {event.location}</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: '0.9rem',
                color: 'var(--color-navy)',
                lineHeight: 1.5,
                marginBottom: '1.5rem',
              }}>
                {event.description.length > 120 
                  ? `${event.description.substring(0, 120)}...`
                  : event.description
                }
              </p>

              {/* Footer sans prix - uniquement CTA */}
              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'var(--color-red)',
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease',
                }}>
                  <span>Détails</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '6px', transition: 'transform 0.3s ease' }}>
                    <path d="M7 17l10-10M17 7H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA vers agenda complet */}
        <div style={{
          textAlign: 'center',
        }}>
          <Link
            href="/agenda-billetterie"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px 36px',
              backgroundColor: 'transparent',
              color: 'var(--color-red)',
              border: '2px solid var(--color-red)',
              borderRadius: '50px',
              fontFamily: 'var(--font-outfit)',
              fontWeight: '600',
              fontSize: '1rem',
              textDecoration: 'none',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-red)';
              e.currentTarget.style.color = 'var(--color-white)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--color-red)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>Voir tous les événements</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '10px' }}>
              <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
});

UpcomingEventsSection.displayName = 'UpcomingEventsSection';

export default UpcomingEventsSection;