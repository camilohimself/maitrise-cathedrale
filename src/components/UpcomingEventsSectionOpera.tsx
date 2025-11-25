'use client';

import React, { memo, useMemo, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { maitriseEvents } from '@/data/maitriseEvents';

/**
 * UPCOMING EVENTS - Style Opera de Paris
 * Cards horizontales luxe: Image 40% | Contenu 60%
 * Mobile: Stack vertical
 */

const UpcomingEventsSectionOpera = memo(() => {
  // Mapping event ID -> image path
  const getEventImage = useCallback((eventId: string): string => {
    const imageMap: { [key: string]: string } = {
      'nov-30-concert-fas-ensemble': '/images/hero-photo.webp',
      'dec-07-concert-fas-novantiqua': '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
      'dec-21-concert-fas-colleges': '/images/artistes/ecole-maitrisienne/ecole-1-card.webp',
      'dec-26-concert-ad-astra-fas': '/images/artistes/ensemble-ad-astra/ad-astra-1-card.webp',
      'jan-04-concert-fas-stile-antico': '/images/artistes/stile-antico-1-card.webp',
    };
    return imageMap[eventId] || '/images/hero-photo.webp';
  }, []);

  // Mapping event ID -> artist slug
  const getArtistSlug = useCallback((eventId: string): string | null => {
    const slugMap: { [key: string]: string } = {
      'nov-30-concert-fas-ensemble': 'ensemble-vocal',
      'dec-07-concert-fas-novantiqua': 'choeur-novantiqua',
      'dec-21-concert-fas-colleges': 'ecole-maitrisienne',
      'dec-26-concert-ad-astra-fas': 'ensemble-ad-astra',
      'jan-04-concert-fas-stile-antico': 'stile-antico',
    };
    return slugMap[eventId] || null;
  }, []);

  // Filter upcoming events
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

  return (
    <section style={{
      backgroundColor: '#FFFFFF',
      padding: '100px 0',
      position: 'relative',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
      }}>

        {/* Header - Style Opera epure */}
        <div style={{
          marginBottom: '4rem',
        }}>
          <span style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '0.75rem',
            fontWeight: '500',
            color: '#D4A574',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            display: 'block',
            marginBottom: '1rem',
          }}>
            Saison 2025-2026
          </span>

          <h2 style={{
            fontFamily: 'var(--font-spectral)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '400',
            color: '#1a1340',
            marginBottom: '0.5rem',
            lineHeight: 1.2,
          }}>
            Prochains concerts
          </h2>
        </div>

        {/* Events list - Horizontal cards */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}>
          {upcomingEvents.map((event, index) => {
            const artistSlug = getArtistSlug(event.id);
            const eventImage = getEventImage(event.id);
            const linkHref = artistSlug ? `/fas/artiste/${artistSlug}` : '/agenda-billetterie';

            return (
              <Link
                key={event.id}
                href={linkHref}
                className="opera-event-card"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '380px 1fr',
                  gap: '0',
                  backgroundColor: '#FAFAF9',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: '1px solid rgba(26, 19, 64, 0.06)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(26, 19, 64, 0.12)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Image */}
                <div style={{
                  position: 'relative',
                  height: '280px',
                  overflow: 'hidden',
                }}>
                  <Image
                    src={eventImage}
                    alt={event.title}
                    fill
                    style={{
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease',
                    }}
                  />
                  {/* Date badge sur l'image */}
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    backgroundColor: '#1a1340',
                    color: '#FFFFFF',
                    padding: '12px 16px',
                    borderRadius: '4px',
                    textAlign: 'center',
                    minWidth: '70px',
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-spectral)',
                      fontSize: '1.75rem',
                      fontWeight: '600',
                      lineHeight: 1,
                    }}>
                      {event.date.day}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-outfit)',
                      fontSize: '0.7rem',
                      fontWeight: '500',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginTop: '4px',
                      color: '#D4A574',
                    }}>
                      {event.date.month}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div style={{
                  padding: '32px 40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                  {/* Category badge */}
                  <span style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '0.7rem',
                    fontWeight: '500',
                    color: '#D4A574',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    marginBottom: '12px',
                  }}>
                    {event.category}
                  </span>

                  {/* Title */}
                  <h3 style={{
                    fontFamily: 'var(--font-spectral)',
                    fontSize: '1.5rem',
                    fontWeight: '500',
                    color: '#1a1340',
                    marginBottom: '8px',
                    lineHeight: 1.3,
                  }}>
                    {event.title}
                  </h3>

                  {/* Collaboration */}
                  {event.collaboration && (
                    <p style={{
                      fontFamily: 'var(--font-outfit)',
                      fontSize: '0.9rem',
                      fontStyle: 'italic',
                      color: '#666',
                      marginBottom: '12px',
                    }}>
                      {event.collaboration}
                    </p>
                  )}

                  {/* Time & Location */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '16px',
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '0.85rem',
                    color: '#888',
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 6v6l4 2"/>
                      </svg>
                      {event.time}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      {event.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '0.9rem',
                    color: '#666',
                    lineHeight: 1.6,
                    marginBottom: '20px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}>
                    {event.description}
                  </p>

                  {/* CTA */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '0.85rem',
                    fontWeight: '500',
                    color: '#1a1340',
                    transition: 'color 0.3s ease',
                  }}>
                    <span>En savoir plus</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA vers agenda */}
        <div style={{
          textAlign: 'center',
          marginTop: '4rem',
        }}>
          <Link
            href="/agenda-billetterie"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '16px 40px',
              backgroundColor: 'transparent',
              color: '#1a1340',
              border: '1px solid #1a1340',
              borderRadius: '30px',
              fontFamily: 'var(--font-outfit)',
              fontWeight: '500',
              fontSize: '0.9rem',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1a1340';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#1a1340';
            }}
          >
            <span>Voir tous les evenements</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 900px) {
          :global(.opera-event-card) {
            grid-template-columns: 1fr !important;
          }

          :global(.opera-event-card) > div:first-child {
            height: 220px !important;
          }

          :global(.opera-event-card) > div:last-child {
            padding: 24px !important;
          }
        }

        @media (max-width: 640px) {
          section {
            padding: 60px 0 !important;
          }

          :global(.opera-event-card) > div:first-child {
            height: 180px !important;
          }

          :global(.opera-event-card) > div:last-child {
            padding: 20px !important;
          }

          :global(.opera-event-card) h3 {
            font-size: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
});

UpcomingEventsSectionOpera.displayName = 'UpcomingEventsSectionOpera';

export default UpcomingEventsSectionOpera;
