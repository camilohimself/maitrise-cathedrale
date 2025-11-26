'use client';

import React, { useState, useMemo } from 'react';
import EventCardResponsive from '@/components/EventCardResponsive';
import Newsletter from '@/components/Newsletter';
import { maitriseEvents } from '@/data/maitriseEvents';

export default function AgendaBilletterie() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [showAll, setShowAll] = useState(false);

  // Filtrage des événements
  const filteredEvents = useMemo(() => {
    // Filtrer les événements à venir (dynamique basé sur date actuelle)
    const upcomingEvents = maitriseEvents.filter(event => {
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Reset à minuit pour comparaison juste par jour

      // Convertir mois en numéro
      const monthMap: { [key: string]: number } = {
        'AOÛT': 8, 'SEPT': 9, 'OCT': 10, 'NOV': 11, 'DÉC': 12,
        'JAN': 1, 'FÉV': 2, 'MAR': 3, 'AVR': 4, 'MAI': 5, 'JUIN': 6
      };
      const monthNumber = monthMap[event.date.month] || 1;

      // Déterminer l'année (oct-déc = 2025, jan-juin = 2026)
      const eventYear = monthNumber >= 10 ? 2025 : 2026;

      // Créer date événement
      const eventDate = new Date(eventYear, monthNumber - 1, parseInt(event.date.day));
      eventDate.setHours(0, 0, 0, 0);

      // Garder uniquement événements d'aujourd'hui et futurs
      return eventDate >= today;
    });

    let filtered = [...upcomingEvents];

    // Filtre par recherche
    if (searchTerm) {
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.ensemble.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtre par mois
    if (selectedMonth) {
      filtered = filtered.filter(event => event.date.month === selectedMonth);
    }

    // Filtre par type d'événement (messe, concert, fas)
    if (selectedType) {
      filtered = filtered.filter(event => event.type === selectedType);
    }

    // Filtre par prix
    if (selectedPriceRange) {
      if (selectedPriceRange === 'free') {
        filtered = filtered.filter(event =>
          event.price.toLowerCase().includes('libre') ||
          event.price.toLowerCase().includes('gratuit')
        );
      } else if (selectedPriceRange === 'paid') {
        filtered = filtered.filter(event =>
          !event.price.toLowerCase().includes('libre') &&
          !event.price.toLowerCase().includes('gratuit')
        );
      }
    }

    // Tri chronologique des événements
    const sortedEvents = filtered.sort((a, b) => {
      const monthOrder: { [key: string]: number } = {
        'AOÛT': 8, 'SEPT': 9, 'OCT': 10, 'NOV': 11, 'DÉC': 12,
        'JAN': 13, 'FÉV': 14, 'MAR': 15, 'AVR': 16, 'MAI': 17, 'JUIN': 18
      };

      const monthA = monthOrder[a.date.month] || 99;
      const monthB = monthOrder[b.date.month] || 99;

      if (monthA !== monthB) return monthA - monthB;
      return parseInt(a.date.day) - parseInt(b.date.day);
    });

    return sortedEvents;
  }, [searchTerm, selectedMonth, selectedType, selectedPriceRange]);

  // Limiter l'affichage initial à 6 événements (sauf si filtres actifs)
  const hasActiveFilters = searchTerm || selectedMonth || selectedType || selectedPriceRange;
  const visibleEvents = useMemo(() => {
    // Si filtres actifs, montrer tous les résultats
    if (hasActiveFilters) return filteredEvents;
    // Sinon, limiter à 6 si showAll === false
    return showAll ? filteredEvents : filteredEvents.slice(0, 6);
  }, [filteredEvents, showAll, hasActiveFilters]);

  // Grouper les événements visibles par mois pour sticky headers
  const eventsByMonth = useMemo(() => {
    const groups: { [key: string]: typeof visibleEvents } = {};
    visibleEvents.forEach(event => {
      const monthKey = event.date.month;
      if (!groups[monthKey]) {
        groups[monthKey] = [];
      }
      groups[monthKey].push(event);
    });
    return groups;
  }, [visibleEvents]);

  // Mapping mois → nom complet pour headers
  const monthNames: { [key: string]: string } = {
    'OCT': 'Octobre 2025',
    'NOV': 'Novembre 2025',
    'DÉC': 'Décembre 2025',
    'JAN': 'Janvier 2026',
    'FÉV': 'Février 2026',
    'MAR': 'Mars 2026',
    'AVR': 'Avril 2026',
    'MAI': 'Mai 2026',
    'JUIN': 'Juin 2026'
  };

  return (
    <main style={{
      backgroundColor: 'var(--color-white)',
      minHeight: '100vh',
    }}>
      {/* Hero prestige cathédral - Layout 2 colonnes desktop avec photo background */}
      <section className="hero-section" style={{
        backgroundImage: 'url(/images/hero-agenda/solistes-orchestre-desktop.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        padding: '120px 0 80px',
        position: 'relative',
        minHeight: '500px',
      }}>
        {/* Overlay sombre pour lisibilité */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(26, 19, 64, 0.85) 0%, rgba(26, 19, 64, 0.7) 50%, rgba(26, 19, 64, 0.8) 100%)',
          zIndex: 1,
        }}></div>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 var(--spacing-lg)',
          position: 'relative',
          zIndex: 2,
        }}>
          {/* Container 2 colonnes */}
          <div className="hero-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center',
          }}>
            {/* Colonne gauche - Titre et texte */}
            <div className="hero-left">
              {/* Ornement supérieur */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{
                  width: '60px',
                  height: '1px',
                  background: 'linear-gradient(90deg, var(--color-gold), transparent)',
                  marginBottom: '20px',
                }}></div>
                <div style={{
                  fontFamily: 'var(--font-outfit)',
                  fontSize: '0.8rem',
                  fontWeight: '500',
                  letterSpacing: '2.5px',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold)',
                }}>
                  Saison 2025-2026
                </div>
              </div>

              {/* Titre majestueux */}
              <h1 style={{
                fontFamily: 'var(--font-spectral)',
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                fontWeight: '400',
                color: '#ffffff',
                marginBottom: '20px',
                letterSpacing: '0.5px',
                lineHeight: '1.2',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              }}>
                Agenda et billetterie
              </h1>
              <div style={{
                width: '40px',
                height: '2px',
                background: 'var(--color-gold)',
                marginBottom: '24px',
              }}></div>
              <p style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: '1.1rem',
                fontWeight: '300',
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: '1.8',
                maxWidth: '400px',
              }}>
                Messes solennelles · Concerts exceptionnels · Festival d'Art Sacré
              </p>
            </div>

            {/* Colonne droite - Recherche, CTA, Filtres */}
            <div className="hero-right" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '12px',
              padding: '32px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
              border: '1px solid rgba(212, 165, 116, 0.3)',
              backdropFilter: 'blur(10px)',
            }}>
            {/* Barre de recherche noble */}
            <div style={{
              position: 'relative',
              marginBottom: '28px',
            }}>
              <input
                type="text"
                placeholder="Rechercher un événement..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '16px 55px 16px 24px',
                  backgroundColor: '#fff',
                  border: '1px solid rgba(26, 19, 64, 0.12)',
                  borderRadius: '2px',
                  fontFamily: 'var(--font-outfit)',
                  fontSize: '0.95rem',
                  fontWeight: '300',
                  color: 'var(--color-navy)',
                  outline: 'none',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-gold)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(212, 165, 116, 0.12)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(26, 19, 64, 0.12)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.02)';
                }}
              />
              <div style={{
                position: 'absolute',
                right: '24px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--color-gold)',
                opacity: 0.5,
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
              </div>
            </div>

            {/* CTA Billetterie - Proéminent et centré */}
            <div style={{
              marginTop: '32px',
              marginBottom: '32px',
              textAlign: 'center'
            }}>
              <a
                href="https://www.booking-corner.com/cmsscripts/bookOnline.aspx?lang=fr&eco=cathedralesion&num=6395"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '18px 48px',
                  background: 'linear-gradient(135deg, var(--color-gold), #E6C068)',
                  color: 'var(--color-purple-dark)',
                  border: 'none',
                  borderRadius: '30px',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  fontFamily: 'var(--font-outfit)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  boxShadow: '0 8px 25px rgba(212, 165, 116, 0.35)',
                  letterSpacing: '0.02em'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 35px rgba(212, 165, 116, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(212, 165, 116, 0.35)';
                }}
              >
                Billetterie en ligne
              </a>
            </div>

            {/* Filtres discrets et élégants */}
            <div style={{
              display: 'flex',
              gap: '14px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                style={{
                  padding: '10px 18px',
                  border: '1px solid rgba(26, 19, 64, 0.15)',
                  borderRadius: '2px',
                  backgroundColor: '#fff',
                  fontFamily: 'var(--font-outfit)',
                  fontSize: '0.85rem',
                  fontWeight: '400',
                  color: 'var(--color-navy)',
                  cursor: 'pointer',
                  outline: 'none',
                  transition: 'all 0.2s ease',
                  minWidth: '140px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-gold)';
                  e.currentTarget.style.backgroundColor = '#fafafa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(26, 19, 64, 0.15)';
                  e.currentTarget.style.backgroundColor = '#fff';
                }}
              >
                <option value="">Tous les mois</option>
                <option value="OCT">Octobre 2025</option>
                <option value="NOV">Novembre 2025</option>
                <option value="DÉC">Décembre 2025</option>
                <option value="JAN">Janvier 2026</option>
                <option value="FÉV">Février 2026</option>
                <option value="MAR">Mars 2026</option>
                <option value="AVR">Avril 2026</option>
                <option value="MAI">Mai 2026</option>
                <option value="JUIN">Juin 2026</option>
              </select>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                style={{
                  padding: '10px 18px',
                  border: '1px solid rgba(26, 19, 64, 0.15)',
                  borderRadius: '2px',
                  backgroundColor: '#fff',
                  fontFamily: 'var(--font-outfit)',
                  fontSize: '0.85rem',
                  fontWeight: '400',
                  color: 'var(--color-navy)',
                  cursor: 'pointer',
                  outline: 'none',
                  transition: 'all 0.2s ease',
                  minWidth: '160px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-gold)';
                  e.currentTarget.style.backgroundColor = '#fafafa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(26, 19, 64, 0.15)';
                  e.currentTarget.style.backgroundColor = '#fff';
                }}
              >
                <option value="">Type d&apos;événement</option>
                <option value="messe">Messes</option>
                <option value="concert">Concerts</option>
                <option value="fas">Festival d&apos;Art Sacré</option>
              </select>

              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                style={{
                  padding: '10px 18px',
                  border: '1px solid rgba(26, 19, 64, 0.15)',
                  borderRadius: '2px',
                  backgroundColor: '#fff',
                  fontFamily: 'var(--font-outfit)',
                  fontSize: '0.85rem',
                  fontWeight: '400',
                  color: 'var(--color-navy)',
                  cursor: 'pointer',
                  outline: 'none',
                  transition: 'all 0.2s ease',
                  minWidth: '130px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-gold)';
                  e.currentTarget.style.backgroundColor = '#fafafa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(26, 19, 64, 0.15)';
                  e.currentTarget.style.backgroundColor = '#fff';
                }}
              >
                <option value="">Tarification</option>
                <option value="free">Entrée libre</option>
                <option value="paid">Payant</option>
              </select>
            </div>
            </div>{/* Fin hero-right */}
          </div>{/* Fin hero-grid */}
        </div>
      </section>

      {/* Section Événements */}
      <section style={{
        backgroundColor: 'var(--color-white)',
        padding: 'var(--spacing-2xl) 0',
      }}>
        <div style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: '0 var(--spacing-lg)',
        }}>
          {/* Compteur de résultats */}
          <div style={{
            marginBottom: 'var(--spacing-xl)',
            textAlign: 'center',
          }}>
            <p style={{
              fontFamily: 'var(--font-outfit)',
              fontSize: 'var(--text-base)',
              color: 'var(--color-navy)',
              opacity: 0.7,
            }}>
              {hasActiveFilters
                ? `${filteredEvents.length} événement${filteredEvents.length !== 1 ? 's' : ''} trouvé${filteredEvents.length !== 1 ? 's' : ''}`
                : showAll
                ? `${filteredEvents.length} événement${filteredEvents.length !== 1 ? 's' : ''} à venir`
                : `${visibleEvents.length} événements à venir (sur ${filteredEvents.length} au total)`
              }
            </p>
          </div>

          {/* Liste d'événements avec sticky month headers */}
          {visibleEvents.length > 0 ? (
            <div style={{
              maxWidth: '900px',
              margin: '0 auto var(--spacing-3xl) auto',
            }}>
              {Object.keys(eventsByMonth)
                .sort((a, b) => {
                  const monthOrder: { [key: string]: number } = {
                    'OCT': 10, 'NOV': 11, 'DÉC': 12,
                    'JAN': 13, 'FÉV': 14, 'MAR': 15, 'AVR': 16, 'MAI': 17, 'JUIN': 18
                  };
                  return (monthOrder[a] || 99) - (monthOrder[b] || 99);
                })
                .map((monthKey) => (
                  <div key={monthKey} style={{ marginBottom: '24px' }}>
                    {/* Sticky Month Header */}
                    <div
                      className="month-header"
                      style={{
                        position: 'sticky',
                        top: '80px', // Sous le header principal
                        zIndex: 15,
                        backgroundColor: 'var(--color-gold)',
                        padding: '12px 20px',
                        marginBottom: '16px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(212, 165, 116, 0.25)',
                      }}
                    >
                      <h3 style={{
                        fontFamily: 'var(--font-spectral)',
                        fontSize: '1.3rem',
                        fontWeight: '600',
                        color: 'var(--color-white)',
                        margin: 0,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                      }}>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ opacity: 0.9 }}
                        >
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                          <line x1="16" y1="2" x2="16" y2="6"/>
                          <line x1="8" y1="2" x2="8" y2="6"/>
                          <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        {monthNames[monthKey] || monthKey}
                      </h3>
                    </div>

                    {/* Events du mois */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0px',
                    }}>
                      {eventsByMonth[monthKey].map((event) => (
                        <EventCardResponsive
                          key={event.id}
                          date={{ day: event.date.day, month: event.date.month }}
                          time={event.time}
                          title={event.title}
                          subtitle={event.subtitle}
                          category={event.category}
                          description={event.description}
                          image={event.image}
                          price={event.price}
                          location={event.location}
                          ctaText="Réserver"
                          featured={event.featured}
                          programme={event.programme}
                          technicalInfo={event.technicalInfo}
                          ticketUrl={event.ticketUrl}
                        />
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          ) : null}

          {/* Bouton Voir plus/moins (uniquement si pas de filtres actifs et plus de 6 événements) */}
          {!hasActiveFilters && filteredEvents.length > 6 && visibleEvents.length > 0 && (
            <div style={{
              textAlign: 'center',
              marginTop: '40px',
              marginBottom: '40px',
            }}>
              <button
                onClick={() => setShowAll(!showAll)}
                style={{
                  padding: '14px 36px',
                  backgroundColor: 'transparent',
                  color: 'var(--color-gold)',
                  border: '2px solid var(--color-gold)',
                  borderRadius: '8px',
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: '600',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  minHeight: '48px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-gold)';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--color-gold)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {showAll ? '↑ Voir moins' : `↓ Voir tous les événements (${filteredEvents.length})`}
              </button>
            </div>
          )}

          {/* Message aucun résultat */}
          {visibleEvents.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: 'var(--spacing-3xl) var(--spacing-lg)',
            }}>
              <div style={{
                fontSize: '64px',
                marginBottom: 'var(--spacing-lg)',
                opacity: 0.3,
              }}>
                🎭
              </div>
              <h3 style={{
                fontFamily: 'var(--font-spectral)',
                fontSize: 'var(--text-h3)',
                fontWeight: 'var(--font-bold)',
                color: 'var(--color-navy)',
                marginBottom: 'var(--spacing-sm)',
              }}>
                Aucun événement trouvé
              </h3>
              <p style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: 'var(--text-base)',
                color: 'var(--color-navy)',
                opacity: 0.7,
                maxWidth: '500px',
                margin: '0 auto',
              }}>
                Essayez de modifier vos critères de recherche ou consultez tous nos événements.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedMonth('');
                  setSelectedType('');
                  setSelectedPriceRange('');
                }}
                style={{
                  marginTop: 'var(--spacing-lg)',
                  padding: '12px 24px',
                  backgroundColor: 'var(--color-red)',
                  color: 'var(--color-white)',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 'var(--font-medium)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-base)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(139, 0, 0, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Voir tous les événements
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* Styles responsive mobile - LESS IS MORE */}
      <style jsx>{`
        /* Hero Grid - 2 colonnes desktop, 1 colonne mobile */
        :global(.hero-grid) {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        :global(.hero-right) {
          background-color: rgba(255, 255, 255, 0.95);
          border-radius: 12px;
          padding: 32px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(212, 165, 116, 0.3);
          backdrop-filter: blur(10px);
        }

        @media (max-width: 968px) {
          /* Image mobile optimisée */
          :global(.hero-section) {
            background-image: url(/images/hero-agenda/solistes-orchestre-mobile.webp) !important;
            min-height: auto !important;
            padding: 100px 0 50px !important;
          }

          /* Hero grid - 1 colonne sur tablet/mobile */
          :global(.hero-grid) {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }

          :global(.hero-left) {
            text-align: center;
          }

          /* Masquer ornement supérieur (ligne dorée + Saison) sur mobile */
          :global(.hero-left > div:first-child) {
            display: none !important;
          }

          /* Masquer la barre dorée sous le titre sur mobile */
          :global(.hero-left h1 + div) {
            display: none !important;
          }

          :global(.hero-left p) {
            margin: 0 auto;
          }

          :global(.hero-right) {
            padding: 24px !important;
          }
        }

        @media (max-width: 768px) {
          /* Hero section - COMPACT */
          :global(.hero-section) {
            padding: 70px 0 40px !important;
          }

          :global(.hero-grid) {
            gap: 30px !important;
          }

          /* Titre principal H1 */
          :global(.hero-left h1) {
            font-size: 2rem !important;
            margin-bottom: 16px !important;
          }

          /* Sous-titre */
          :global(.hero-left p) {
            font-size: 0.95rem !important;
            line-height: 1.6 !important;
          }

          :global(.hero-right) {
            padding: 20px !important;
            border-radius: 8px !important;
          }

          /* Barre recherche */
          :global(.hero-right input) {
            padding: 12px 45px 12px 16px !important;
            font-size: 0.9rem !important;
          }

          /* CTA Billetterie - PROMINENT */
          :global(.hero-right a[href*="booking-corner"]) {
            padding: 16px 40px !important;
            font-size: 1.1rem !important;
            min-height: 48px;
            margin-top: 24px !important;
            margin-bottom: 24px !important;
            box-shadow: 0 12px 35px rgba(212, 165, 116, 0.5) !important;
          }

          /* Section événements - REDUCED PADDING (CORRIGÉ P1-10) */
          section:nth-of-type(2) {
            padding: 24px 0 !important;
          }

          /* Container événements - NO OVERFLOW (CORRIGÉ P1-9) */
          section:nth-of-type(2) > div {
            max-width: 100% !important;
            padding: 0 16px !important;
          }

          /* Cards container - SAFE WIDTH */
          section:nth-of-type(2) > div > div:nth-child(2) {
            max-width: 100% !important;
          }

          /* Compteur résultats */
          section:nth-of-type(2) > div > div:first-child p {
            font-size: 0.9rem !important;
          }
        }

        @media (max-width: 640px) {
          /* Hero ultra-compact */
          :global(.hero-section) {
            padding: 60px 0 30px !important;
          }

          :global(.hero-grid) {
            gap: 24px !important;
          }

          :global(.hero-left h1) {
            font-size: 1.75rem !important;
          }

          :global(.hero-left p) {
            font-size: 0.9rem !important;
          }

          :global(.hero-right) {
            padding: 16px !important;
          }

          /* Barre recherche */
          :global(.hero-right input) {
            padding: 10px 40px 10px 14px !important;
            font-size: 0.85rem !important;
          }

          /* CTA Billetterie - TACTILE 48px */
          :global(.hero-right a[href*="booking-corner"]) {
            padding: 14px 32px !important;
            font-size: 1rem !important;
            min-height: 48px;
            box-shadow: 0 10px 30px rgba(212, 165, 116, 0.45) !important;
          }

          /* Selects */
          :global(.hero-right select) {
            padding: 9px 12px !important;
            font-size: 0.8rem !important;
          }

          /* Section événements - MINIMAL PADDING */
          section:nth-of-type(2) {
            padding: 20px 0 !important;
          }

          /* Container - SAFE PADDING */
          section:nth-of-type(2) > div {
            padding: 0 12px !important;
          }

          /* Month headers - Compact mobile */
          :global(.month-header) {
            top: 60px !important;
            padding: 10px 16px !important;
            margin-bottom: 12px !important;
            border-radius: 6px !important;
          }

          :global(.month-header h3) {
            font-size: 1.1rem !important;
            gap: 8px !important;
          }

          :global(.month-header h3 svg) {
            width: 18px !important;
            height: 18px !important;
          }
        }
      `}</style>
    </main>
  );
}