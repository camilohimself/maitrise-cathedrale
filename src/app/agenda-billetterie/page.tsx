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
    // Filtrer d'abord les événements à venir (11 septembre 2025 et après)
    const today = new Date();
    const upcomingEvents = maitriseEvents.filter(event => {
      // Si nous sommes en septembre, ne garder que les événements du 11 et après
      if (today.getMonth() === 8) { // Septembre = mois 8 (0-indexed)
        if (event.date.month === 'SEPT') {
          return parseInt(event.date.day) >= 11;
        }
        // Garder tous les événements des mois suivants
        return !['AOÛT'].includes(event.date.month);
      }
      return true;
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

    return filtered;
  }, [searchTerm, selectedMonth, selectedType, selectedPriceRange]);

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
              color: 'var(--color-gold)',
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
                  e.currentTarget.style.borderColor = 'var(--color-gold)';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(212, 165, 116, 0.1)';
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
                color: 'var(--color-gold)',
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
                <option value="JAN">Janvier</option>
                <option value="FÉV">Février</option>
                <option value="MAR">Mars</option>
                <option value="AVR">Avril</option>
                <option value="MAI">Mai</option>
                <option value="JUIN">Juin</option>
              </select>

              {/* Filtre Type */}
              <select 
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
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
                <option value="">TYPE D&apos;ÉVÉNEMENT</option>
                <option value="messe">Messe</option>
                <option value="concert">Concert</option>
                <option value="fas">Festival d&apos;Art Sacré</option>
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
                  setSelectedType('');
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