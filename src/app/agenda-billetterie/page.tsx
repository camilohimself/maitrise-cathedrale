'use client';

import React, { useState, useMemo } from 'react';
import EventCard from '@/components/EventCard';
import Newsletter from '@/components/Newsletter';
import { maitriseEvents } from '@/data/maitriseEvents';

export default function AgendaBilletterie() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  // Filtrage des événements
  const filteredEvents = useMemo(() => {
    // Filtrer les événements à venir (depuis septembre 2025)
    const upcomingEvents = maitriseEvents.filter(event => {
      // Exclure les événements passés (août et septembre 2025)
      const pastMonths = ['AOÛT', 'SEPT'];
      return !pastMonths.includes(event.date.month);
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

  // Grouper les événements par mois pour sticky headers
  const eventsByMonth = useMemo(() => {
    const groups: { [key: string]: typeof filteredEvents } = {};
    filteredEvents.forEach(event => {
      const monthKey = event.date.month;
      if (!groups[monthKey]) {
        groups[monthKey] = [];
      }
      groups[monthKey].push(event);
    });
    return groups;
  }, [filteredEvents]);

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
      {/* Hero prestige cathédral */}
      <section style={{
        background: 'linear-gradient(180deg, #fafbfc 0%, #ffffff 100%)',
        padding: '100px 0 70px',
        position: 'relative',
        borderBottom: '1px solid rgba(212, 165, 116, 0.15)',
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 var(--spacing-lg)',
        }}>
          {/* Ornement supérieur */}
          <div style={{
            textAlign: 'center',
            marginBottom: '24px',
          }}>
            <div style={{
              display: 'inline-block',
              width: '60px',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)',
              marginBottom: '24px',
            }}></div>
            <div style={{
              fontFamily: 'var(--font-outfit)',
              fontSize: '0.8rem',
              fontWeight: '500',
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              color: 'var(--color-gold)',
              marginBottom: '8px',
            }}>
              Saison 2025-2026
            </div>
          </div>

          {/* Titre majestueux */}
          <div style={{
            textAlign: 'center',
            marginBottom: '50px',
          }}>
            <h1 style={{
              fontFamily: 'var(--font-spectral)',
              fontSize: 'clamp(2.75rem, 5vw, 3.75rem)',
              fontWeight: '400',
              color: 'var(--color-navy)',
              marginBottom: '20px',
              letterSpacing: '0.5px',
              lineHeight: '1.25',
            }}>
              Agenda et billetterie
            </h1>
            <div style={{
              width: '40px',
              height: '2px',
              background: 'var(--color-gold)',
              margin: '0 auto 24px',
            }}></div>
            <p style={{
              fontFamily: 'var(--font-outfit)',
              fontSize: '1.05rem',
              fontWeight: '300',
              color: 'var(--color-navy)',
              opacity: 0.75,
              lineHeight: '1.8',
              maxWidth: '560px',
              margin: '0 auto',
            }}>
              Messes solennelles · Concerts exceptionnels · Festival d'Art Sacré
            </p>
          </div>

          {/* Recherche et filtres raffinés */}
          <div style={{
            maxWidth: '820px',
            margin: '0 auto',
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
          </div>
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
              {filteredEvents.length} événement{filteredEvents.length !== 1 ? 's' : ''} trouvé{filteredEvents.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Liste d'événements avec sticky month headers */}
          {filteredEvents.length > 0 ? (
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
                        <span style={{ fontSize: '1.5rem' }}>📅</span>
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
                        <EventCard
                          key={event.id}
                          date={{ day: event.date.day, month: event.date.month }}
                          time={event.time}
                          title={event.title}
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
          ) : (
            /* Message aucun résultat */
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
        @media (max-width: 768px) {
          /* Hero section - COMPACT */
          section:first-of-type {
            padding: 60px 0 40px !important;
          }

          /* Ornements - MASQUER */
          section:first-of-type > div > div:first-child > div:first-child {
            display: none !important;
          }

          /* Surtitre "Saison 2025-2026" */
          section:first-of-type > div > div:first-child > div:nth-child(2) {
            font-size: 0.7rem !important;
            letter-spacing: 1.5px !important;
            margin-bottom: 6px !important;
          }

          /* Titre principal H1 */
          section:first-of-type h1 {
            font-size: 2rem !important;
            margin-bottom: 16px !important;
          }

          /* Ligne dorée sous titre */
          section:first-of-type h1 + div {
            width: 30px !important;
            margin-bottom: 16px !important;
          }

          /* Sous-titre */
          section:first-of-type p {
            font-size: 0.95rem !important;
            line-height: 1.6 !important;
            max-width: 100% !important;
          }

          /* Container filtres */
          section:first-of-type > div > div:last-child {
            max-width: 100% !important;
          }

          /* Barre recherche */
          section:first-of-type input {
            padding: 12px 45px 12px 16px !important;
            font-size: 0.9rem !important;
          }

          /* Icône recherche */
          section:first-of-type input + div svg {
            width: 16px !important;
            height: 16px !important;
          }

          /* CTA Billetterie - COMPACT */
          section:first-of-type a[href*="booking-corner"] {
            padding: 14px 32px !important;
            font-size: 1rem !important;
            margin-top: 24px !important;
            margin-bottom: 24px !important;
          }

          /* Filtres - VERTICAL STACK */
          section:first-of-type > div > div:last-child > div:last-child {
            flex-direction: column !important;
            gap: 10px !important;
            align-items: stretch !important;
          }

          /* Selects filtres */
          section:first-of-type select {
            min-width: 100% !important;
            padding: 10px 14px !important;
            font-size: 0.85rem !important;
          }

          /* CTA Billetterie - PROMINENT (CORRIGÉ P2-14) */
          section:first-of-type a[href*="booking-corner"] {
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
          section:first-of-type {
            padding: 40px 0 30px !important;
          }

          section:first-of-type h1 {
            font-size: 1.75rem !important;
          }

          section:first-of-type p {
            font-size: 0.9rem !important;
          }

          /* Barre recherche */
          section:first-of-type input {
            padding: 10px 40px 10px 14px !important;
            font-size: 0.85rem !important;
          }

          /* CTA Billetterie - TACTILE 48px (CORRIGÉ P2-14) */
          section:first-of-type a[href*="booking-corner"] {
            padding: 14px 32px !important;
            font-size: 1rem !important;
            min-height: 48px;
            box-shadow: 0 10px 30px rgba(212, 165, 116, 0.45) !important;
          }

          /* Selects */
          section:first-of-type select {
            padding: 9px 12px !important;
            font-size: 0.8rem !important;
          }

          /* Section événements - MINIMAL PADDING (CORRIGÉ P1-10) */
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

          :global(.month-header h3 span) {
            font-size: 1.25rem !important;
          }
        }
      `}</style>
    </main>
  );
}