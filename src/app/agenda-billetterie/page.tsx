'use client';

import React, { useState, useMemo } from 'react';
import EventCard from '@/components/EventCard';
import Newsletter from '@/components/Newsletter';
import { events, getEventsByCategory, getEventsByMonth, getEventsByPrice } from '@/data/eventsData';

export default function AgendaBilletterie() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  // Filtrage des événements
  const filteredEvents = useMemo(() => {
    let filtered = [...events];

    // Filtre par recherche
    if (searchTerm) {
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtre par mois
    if (selectedMonth) {
      filtered = filtered.filter(event => event.date.month === selectedMonth);
    }

    // Filtre par catégorie
    if (selectedCategory) {
      filtered = filtered.filter(event => event.category === selectedCategory);
    }

    // Filtre par prix
    if (selectedPriceRange) {
      filtered = getEventsByPrice(selectedPriceRange).filter(event => 
        filtered.some(f => f.id === event.id)
      );
    }

    return filtered;
  }, [searchTerm, selectedMonth, selectedCategory, selectedPriceRange]);

  return (
    <main style={{
      backgroundColor: 'var(--color-white)',
      minHeight: '100vh',
    }}>
      {/* Section principale */}
      <section style={{
        backgroundColor: 'var(--color-cream)',
        padding: 'var(--spacing-3xl) 0 var(--spacing-2xl)',
      }}>
        <div style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: '0 var(--spacing-lg)',
        }}>
          {/* Titre principal */}
          <div style={{
            textAlign: 'center',
            marginBottom: 'var(--spacing-2xl)',
          }}>
            <h1 style={{
              fontFamily: 'var(--font-spectral)',
              fontSize: 'var(--text-hero)',
              fontWeight: 'var(--font-extrabold)',
              color: '#B8860B',
              marginBottom: 'var(--spacing-md)',
              letterSpacing: '-2px',
            }}>
              Agenda et billetterie
            </h1>
          </div>

          {/* Barre de recherche */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 'var(--spacing-xl)',
          }}>
            <div style={{
              position: 'relative',
              maxWidth: '500px',
              width: '100%',
            }}>
              <input
                type="text"
                placeholder="RECHERCHER :"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 50px 14px 20px',
                  backgroundColor: 'var(--color-white)',
                  border: '1px solid rgba(26, 19, 64, 0.1)',
                  borderRadius: '25px',
                  fontFamily: 'var(--font-outfit)',
                  fontSize: 'var(--text-base)',
                  color: 'var(--color-navy)',
                  outline: 'none',
                  transition: 'all var(--transition-base)',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#B8860B';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(184, 134, 11, 0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(26, 19, 64, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
              {/* Icône de recherche */}
              <div style={{
                position: 'absolute',
                right: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#B8860B',
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Filtres */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--spacing-md)',
            marginBottom: 'var(--spacing-2xl)',
            flexWrap: 'wrap',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-xs)',
            }}>
              <label style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: 'var(--text-small)',
                color: 'var(--color-navy)',
                opacity: 0.7,
                fontWeight: 'var(--font-medium)',
              }}>
                FILTRER :
              </label>
              
              {/* Filtre Mois */}
              <select 
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                style={{
                  padding: '8px 16px',
                  border: '1px solid rgba(26, 19, 64, 0.1)',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--color-white)',
                  fontFamily: 'var(--font-outfit)',
                  fontSize: 'var(--text-small)',
                  color: 'var(--color-navy)',
                  cursor: 'pointer',
                  outline: 'none',
                }}
              >
                <option value="">MOIS</option>
                <option value="AOÛT">Août</option>
                <option value="SEPT">Septembre</option>
                <option value="OCT">Octobre</option>
                <option value="NOV">Novembre</option>
                <option value="DÉC">Décembre</option>
              </select>

              {/* Filtre Type */}
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                style={{
                  padding: '8px 16px',
                  border: '1px solid rgba(26, 19, 64, 0.1)',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--color-white)',
                  fontFamily: 'var(--font-outfit)',
                  fontSize: 'var(--text-small)',
                  color: 'var(--color-navy)',
                  cursor: 'pointer',
                  outline: 'none',
                }}
              >
                <option value="">TYPE D&apos;EVENT</option>
                <option value="Concert">Concert</option>
                <option value="Festival">Festival</option>
                <option value="Cantate">Cantate</option>
                <option value="Formation">Formation</option>
                <option value="Famille">Famille</option>
                <option value="Spectacle">Spectacle</option>
              </select>

              {/* Filtre Budget */}
              <select 
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                style={{
                  padding: '8px 16px',
                  border: '1px solid rgba(26, 19, 64, 0.1)',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--color-white)',
                  fontFamily: 'var(--font-outfit)',
                  fontSize: 'var(--text-small)',
                  color: 'var(--color-navy)',
                  cursor: 'pointer',
                  outline: 'none',
                }}
              >
                <option value="">BUDGET</option>
                <option value="free">Gratuit</option>
                <option value="low">0-25 CHF</option>
                <option value="medium">25-40 CHF</option>
                <option value="high">40+ CHF</option>
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

          {/* Liste d'événements - Layout vertical pour cards horizontales */}
          {filteredEvents.length > 0 ? (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0px', // Pas de gap car les cards ont déjà leur marginBottom
              marginBottom: 'var(--spacing-3xl)',
              maxWidth: '900px', // Largeur maximale pour les cards horizontales
              margin: '0 auto var(--spacing-3xl) auto',
            }}>
              {filteredEvents.map((event) => (
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
                />
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
                  setSelectedCategory('');
                  setSelectedPriceRange('');
                }}
                style={{
                  marginTop: 'var(--spacing-lg)',
                  padding: '12px 24px',
                  backgroundColor: '#8B0000',
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
    </main>
  );
}