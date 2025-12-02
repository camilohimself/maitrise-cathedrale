'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { maitriseEvents } from '@/data/maitriseEvents';

/**
 * FAS PROGRAMME SECTION - Section unifiée Festival d'Art Sacré
 * Remplace FASHighlightSection + UpcomingEventsSectionOpera
 *
 * Desktop: Cards horizontales avec images
 * Mobile: Cards compactes sans images (gain scroll 80%)
 */

type FilterType = 'tous' | 'concert' | 'messe' | 'vesperale' | 'rorate';

interface EventType {
  id: string;
  type: string;
  date: { day: string; month: string };
  time: string;
  title: string;
  subtitle?: string;
  category: string;
  ensemble?: string;
  description: string;
  location: string;
  price: string;
  image: string;
  ticketUrl?: string;
  featured?: boolean;
  collaboration?: string;
}

const FASProgrammeSection = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('tous');

  // Filtres disponibles
  const filters: { key: FilterType; label: string; color: string }[] = [
    { key: 'tous', label: 'Tout voir', color: '#1a1340' },
    { key: 'concert', label: 'Concerts', color: '#6B46C1' },
    { key: 'vesperale', label: 'Vespérales', color: '#D4A574' },
    { key: 'rorate', label: 'Rorate', color: '#E33241' },
    { key: 'messe', label: 'Messes', color: '#1a1340' },
  ];

  // Mapping artiste slug pour liens
  const getArtistSlug = (eventId: string): string | null => {
    const slugMap: { [key: string]: string } = {
      'nov-30-concert-fas-ensemble': 'ensemble-vocal',
      'dec-07-concert-fas-novantiqua': 'choeur-novantiqua',
      'dec-21-concert-fas-colleges': 'ecole-maitrisienne',
      'dec-26-concert-ad-astra-fas': 'ensemble-ad-astra',
      'jan-04-concert-fas-stile-antico': 'stile-antico',
    };
    return slugMap[eventId] || null;
  };

  // Filtrer événements FAS uniquement (du 30 nov au 4 jan)
  const fasEvents = useMemo(() => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();

    const monthMap: { [key: string]: number } = {
      'NOV': 11, 'DÉC': 12, 'JAN': 1
    };

    return maitriseEvents
      .filter(event => {
        // Seulement événements FAS (type fas ou messe liturgique FAS)
        const isFAS = event.type === 'fas' ||
                      event.category?.includes('FAS') ||
                      event.category?.includes('Festival');
        if (!isFAS) return false;

        // Filtrer par date (après aujourd'hui)
        const eventMonth = monthMap[event.date.month];
        if (!eventMonth) return false;

        const eventDay = parseInt(event.date.day);
        const eventYear = eventMonth >= 10 ? 2025 : 2026;
        const eventDate = new Date(eventYear, eventMonth - 1, eventDay);
        const todayDate = new Date(currentYear, currentMonth - 1, currentDay);

        return eventDate >= todayDate;
      })
      .filter(event => {
        if (activeFilter === 'tous') return true;
        if (activeFilter === 'concert') {
          return event.title.includes('Novantiqua') ||
                 event.title.includes('Ad Astra') ||
                 event.title.includes('Stile Antico') ||
                 event.title.includes('École Maîtrisienne & Chœur') ||
                 event.title.includes('Ensemble Vocal');
        }
        if (activeFilter === 'vesperale') return event.title.includes('Vespérale');
        if (activeFilter === 'rorate') return event.title.includes('Rorate');
        if (activeFilter === 'messe') {
          return event.category?.includes('Messe') && !event.title.includes('Rorate');
        }
        return true;
      });
  }, [activeFilter]);

  // Obtenir le type d'événement pour le badge
  const getEventType = (event: EventType): { label: string; color: string } => {
    if (event.title.includes('Rorate')) return { label: 'Rorate', color: '#E33241' };
    if (event.title.includes('Vespérale')) return { label: 'Vespérale', color: '#D4A574' };
    if (event.category?.includes('Messe')) return { label: 'Messe', color: '#1a1340' };
    return { label: 'Concert', color: '#6B46C1' };
  };

  return (
    <section style={{
      backgroundColor: '#FAFAF9',
      padding: '80px 0 100px',
      position: 'relative',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem',
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem',
        }}>
          {/* Badge Festival en cours */}
          <div style={{
            display: 'inline-block',
            padding: '10px 24px',
            backgroundColor: 'rgba(107, 70, 193, 0.1)',
            border: '2px solid rgba(107, 70, 193, 0.3)',
            borderRadius: '50px',
            marginBottom: '1.5rem',
          }}>
            <span style={{
              fontFamily: 'var(--font-outfit)',
              fontSize: '0.8rem',
              fontWeight: '600',
              color: '#6B46C1',
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}>
              20e édition - Festival en cours
            </span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-spectral)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '600',
            color: '#1a1340',
            marginBottom: '0.75rem',
            lineHeight: 1.2,
          }}>
            Programme du Festival
          </h2>

          <p style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '1.1rem',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            Jusqu'au 4 janvier 2026 - Cathédrale de Sion
          </p>
        </div>

        {/* Filtres */}
        <div className="filters-container" style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.75rem',
          marginBottom: '3rem',
          flexWrap: 'wrap',
        }}>
          {filters.map(filter => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              style={{
                padding: '10px 20px',
                borderRadius: '25px',
                border: activeFilter === filter.key ? 'none' : '1px solid #ddd',
                backgroundColor: activeFilter === filter.key ? filter.color : 'white',
                color: activeFilter === filter.key ? 'white' : '#666',
                fontFamily: 'var(--font-outfit)',
                fontSize: '0.85rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Liste des événements */}
        <div className="events-list" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}>
          {fasEvents.map((event) => {
            const eventType = getEventType(event as EventType);
            const artistSlug = getArtistSlug(event.id);
            const linkHref = artistSlug ? `/fas/artiste/${artistSlug}` : '/fas';

            return (
              <article
                key={event.id}
                className="event-card"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '320px 1fr',
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid rgba(0,0,0,0.06)',
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Image - Desktop only */}
                <div className="event-image" style={{
                  position: 'relative',
                  height: '220px',
                  overflow: 'hidden',
                }}>
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  {/* Badge date sur l'image */}
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: '#1a1340',
                    color: 'white',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    textAlign: 'center',
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-spectral)',
                      fontSize: '1.5rem',
                      fontWeight: '600',
                      lineHeight: 1,
                    }}>
                      {event.date.day}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-outfit)',
                      fontSize: '0.65rem',
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

                {/* Contenu */}
                <div className="event-content" style={{
                  padding: '24px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                  {/* Header: Type + Heure */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '10px',
                  }}>
                    <span style={{
                      padding: '4px 10px',
                      backgroundColor: eventType.color,
                      color: 'white',
                      borderRadius: '4px',
                      fontFamily: 'var(--font-outfit)',
                      fontSize: '0.7rem',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}>
                      {eventType.label}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-outfit)',
                      fontSize: '0.85rem',
                      color: '#888',
                    }}>
                      {event.time}
                    </span>
                    {event.price === 'Entrée libre' && (
                      <span style={{
                        fontFamily: 'var(--font-outfit)',
                        fontSize: '0.75rem',
                        color: '#22c55e',
                        fontWeight: '500',
                      }}>
                        Entrée libre
                      </span>
                    )}
                  </div>

                  {/* Titre */}
                  <h3 style={{
                    fontFamily: 'var(--font-spectral)',
                    fontSize: '1.35rem',
                    fontWeight: '600',
                    color: '#1a1340',
                    marginBottom: '6px',
                    lineHeight: 1.3,
                  }}>
                    {event.title}
                  </h3>

                  {/* Sous-titre */}
                  {event.subtitle && (
                    <p style={{
                      fontFamily: 'var(--font-outfit)',
                      fontSize: '0.95rem',
                      fontStyle: 'italic',
                      color: '#D4A574',
                      marginBottom: '8px',
                    }}>
                      {event.subtitle}
                    </p>
                  )}

                  {/* Collaboration */}
                  {event.collaboration && (
                    <p style={{
                      fontFamily: 'var(--font-outfit)',
                      fontSize: '0.85rem',
                      color: '#666',
                      fontStyle: 'italic',
                      marginBottom: '8px',
                    }}>
                      {event.collaboration}
                    </p>
                  )}

                  {/* Description (tronquée) */}
                  <p className="event-description" style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '0.9rem',
                    color: '#666',
                    lineHeight: 1.5,
                    marginBottom: '16px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}>
                    {event.description}
                  </p>

                  {/* CTAs */}
                  <div style={{
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                  }}>
                    {event.ticketUrl && (
                      <a
                        href={event.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '10px 20px',
                          backgroundColor: '#D4A574',
                          color: 'white',
                          borderRadius: '6px',
                          fontFamily: 'var(--font-outfit)',
                          fontSize: '0.85rem',
                          fontWeight: '600',
                          textDecoration: 'none',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        Réserver - {event.price}
                      </a>
                    )}
                    <Link
                      href={linkHref}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontFamily: 'var(--font-outfit)',
                        fontSize: '0.85rem',
                        fontWeight: '500',
                        color: '#1a1340',
                        textDecoration: 'none',
                      }}
                    >
                      En savoir plus
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Version Mobile - Date inline (visible uniquement mobile) */}
                <div className="mobile-date" style={{
                  display: 'none',
                  padding: '12px 16px',
                  backgroundColor: '#1a1340',
                  color: 'white',
                  alignItems: 'center',
                  gap: '12px',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-spectral)',
                    fontSize: '1.25rem',
                    fontWeight: '600',
                  }}>
                    {event.date.day}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '0.7rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    color: '#D4A574',
                  }}>
                    {event.date.month}
                  </div>
                  <div style={{
                    marginLeft: 'auto',
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '0.85rem',
                  }}>
                    {event.time}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Message si aucun événement */}
        {fasEvents.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            color: '#666',
          }}>
            <p style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.1rem' }}>
              Aucun événement à venir pour ce filtre.
            </p>
          </div>
        )}

        {/* CTA vers programme complet */}
        <div style={{
          textAlign: 'center',
          marginTop: '3rem',
        }}>
          <Link
            href="/fas"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '16px 32px',
              backgroundColor: '#6B46C1',
              color: 'white',
              borderRadius: '30px',
              fontFamily: 'var(--font-outfit)',
              fontWeight: '600',
              fontSize: '0.95rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            Voir le programme complet
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* Styles responsive */}
      <style jsx>{`
        /* MOBILE - Cards compactes sans images */
        @media (max-width: 768px) {
          .event-card {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto auto !important;
          }

          .event-image {
            display: none !important;
          }

          .mobile-date {
            display: flex !important;
            order: -1;
          }

          .event-content {
            padding: 16px !important;
          }

          .event-content h3 {
            font-size: 1.1rem !important;
          }

          .event-description {
            display: none !important;
          }

          .filters-container {
            gap: 0.5rem !important;
          }

          .filters-container button {
            padding: 8px 14px !important;
            font-size: 0.8rem !important;
          }
        }

        /* Hover desktop */
        @media (min-width: 769px) {
          .event-card:hover {
            box-shadow: 0 12px 40px rgba(0,0,0,0.1);
            transform: translateY(-4px);
          }
        }

        /* Extra small mobile */
        @media (max-width: 480px) {
          section {
            padding: 60px 0 80px !important;
          }

          .event-content {
            padding: 14px !important;
          }

          .filters-container button {
            padding: 6px 12px !important;
            font-size: 0.75rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FASProgrammeSection;
