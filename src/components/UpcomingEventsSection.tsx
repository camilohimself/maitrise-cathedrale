'use client';

import React, { memo, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { events } from '@/data/eventsData';
import { EVENT_TYPE_ICONS } from '@/data/uiConstants';

const UpcomingEventsSection = memo(() => {
  // Performance Dr Claude: Memoization des événements
  const upcomingEvents = useMemo(() => 
    events
      .filter(event => event.featured || event.category === 'Concert' || event.category === 'Festival')
      .slice(0, 4),
    [events]
  );

  // Performance Dr Claude: Fonction externalisée
  const getEventTypeIcon = useCallback((category: string) => {
    return EVENT_TYPE_ICONS[category] || EVENT_TYPE_ICONS.Concert;
  }, []);

  const getPriceColor = (price: string) => {
    if (price.toLowerCase().includes('gratuit') || price.toLowerCase().includes('libre')) {
      return '#28A745';
    }
    return '#B8860B';
  };

  return (
    <section style={{
      backgroundColor: '#FFFFFF',
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
            backgroundColor: 'rgba(184, 134, 11, 0.1)',
            color: '#B8860B',
            borderRadius: '25px',
            fontFamily: 'var(--font-outfit)',
            fontSize: '0.9rem',
            fontWeight: '600',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>
            Saison 2024-2025
          </div>

          <h2 style={{
            fontFamily: 'var(--font-spectral)',
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '700',
            color: '#8B0000',
            marginBottom: '1rem',
            lineHeight: 1.2,
          }}>
            Prochains Concerts
          </h2>

          <p style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '1.2rem',
            fontWeight: '300',
            color: '#666',
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
                backgroundColor: '#FAFAFA',
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
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.borderColor = 'rgba(139, 0, 0, 0.2)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(139, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = '#FAFAFA';
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
                  backgroundColor: '#8B0000',
                  borderRadius: '50%',
                  boxShadow: '0 0 0 3px rgba(139, 0, 0, 0.2)',
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
                  backgroundColor: '#8B0000',
                  borderRadius: '50%',
                  color: '#FFFFFF',
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
                      {getEventTypeIcon(event.category)}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-outfit)',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      color: '#B8860B',
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
                    color: '#8B0000',
                    marginBottom: '0.5rem',
                    lineHeight: 1.3,
                  }}>
                    {event.title}
                  </h3>

                  {/* Heure et lieu */}
                  <div style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '0.9rem',
                    color: '#666',
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
                color: '#666',
                lineHeight: 1.5,
                marginBottom: '1.5rem',
              }}>
                {event.description.length > 120 
                  ? `${event.description.substring(0, 120)}...`
                  : event.description
                }
              </p>

              {/* Footer avec prix et CTA */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <div style={{
                  fontFamily: 'var(--font-outfit)',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: getPriceColor(event.price),
                }}>
                  {event.price}
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#8B0000',
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
              color: '#8B0000',
              border: '2px solid #8B0000',
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
              e.currentTarget.style.backgroundColor = '#8B0000';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#8B0000';
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