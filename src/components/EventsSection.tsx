'use client';

import React from 'react';
import EventCard from './EventCard';

const EventsSection = () => {
  const events = [
    {
      id: 1,
      date: { day: "15", month: "AOÛT" },
      time: "19h30",
      title: "Chapelle musicale",
      category: "Music",
      description: "Nobis sunt autem laboriosam, rem sint et ad hic sint quos exercitationem nisi corrupti earum totam ipsum aliquid et.",
      image: "/images/event1.jpg",
      ctaText: "Réserver",
      featured: true
    },
    {
      id: 2,
      date: { day: "18", month: "AOÛT" },
      time: "10h30",
      title: "Chantre",
      category: "Music",
      description: "Nobis sunt autem laboriosam, rem sint et ad hic sint quos exercitationem nisi corrupti earum totam ipsum aliquid et.",
      image: "/images/event2.jpg",
      ctaText: "Réserver"
    },
    {
      id: 3,
      date: { day: "25", month: "AOÛT" },
      time: "19h30",
      title: "Chœur Cath'voix",
      category: "Music",
      description: "Nobis sunt autem laboriosam, rem sint et ad hic sint quos exercitationem nisi corrupti earum totam ipsum aliquid et.",
      image: "/images/event3.jpg",
      ctaText: "Réserver"
    },
    {
      id: 4,
      date: { day: "28", month: "AOÛT" },
      time: "19h30",
      title: "Sion Festival",
      category: "Concert",
      description: "Nobis sunt autem laboriosam, rem sint et ad hic sint quos exercitationem nisi corrupti earum totam ipsum aliquid et.",
      image: "/images/event4.jpg",
      ctaText: "Réserver"
    }
  ];

  return (
    <section 
      id="agenda"
      className="section-white"
      style={{
        backgroundColor: 'var(--color-white)',
        padding: 'var(--spacing-3xl) 0',
      }}
    >
      <div style={{
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 var(--spacing-lg)',
      }}>
        {/* Header de section */}
        <div style={{
          textAlign: 'center',
          marginBottom: 'var(--spacing-2xl)',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-spectral)',
            fontSize: 'var(--text-h1)',
            fontWeight: 'var(--font-extrabold)',
            color: 'var(--color-gold)',
            marginBottom: 'var(--spacing-md)',
            letterSpacing: '-1px',
          }}>
            Agenda et billetterie
          </h2>
          
          {/* Filtres */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--spacing-md)',
            marginTop: 'var(--spacing-xl)',
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
              }}>
                FILTRER :
              </label>
              <select style={{
                padding: '8px 16px',
                border: '1px solid rgba(26, 19, 64, 0.1)',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--color-white)',
                fontFamily: 'var(--font-outfit)',
                fontSize: 'var(--text-small)',
                color: 'var(--color-navy)',
                cursor: 'pointer',
                outline: 'none',
              }}>
                <option>MOIS</option>
                <option>Août</option>
                <option>Septembre</option>
                <option>Octobre</option>
              </select>
              <select style={{
                padding: '8px 16px',
                border: '1px solid rgba(26, 19, 64, 0.1)',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--color-white)',
                fontFamily: 'var(--font-outfit)',
                fontSize: 'var(--text-small)',
                color: 'var(--color-navy)',
                cursor: 'pointer',
                outline: 'none',
              }}>
                <option>TYPE D&apos;EVENT</option>
                <option>Concert</option>
                <option>Festival</option>
                <option>Cantate</option>
              </select>
              <select style={{
                padding: '8px 16px',
                border: '1px solid rgba(26, 19, 64, 0.1)',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--color-white)',
                fontFamily: 'var(--font-outfit)',
                fontSize: 'var(--text-small)',
                color: 'var(--color-navy)',
                cursor: 'pointer',
                outline: 'none',
              }}>
                <option>BUDGET</option>
                <option>Gratuit</option>
                <option>0-20 CHF</option>
                <option>20-50 CHF</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grille d'événements - Layout asymétrique comme maquette */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: 'var(--spacing-lg)',
          marginBottom: 'var(--spacing-2xl)',
        }}>
          {events.map((event, index) => (
            <div 
              key={event.id}
              style={{
                gridColumn: index === 0 ? 'span 1' : 'span 1', // Simple grid pour éviter SSR issues
              }}
            >
              <EventCard {...event} featured={index === 0} />
            </div>
          ))}
        </div>

        {/* Bouton voir plus */}
        <div style={{
          textAlign: 'center',
          marginTop: 'var(--spacing-2xl)',
        }}>
          <a 
            href="/agenda-billetterie"
            className="btn-outline"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '14px 40px',
              backgroundColor: 'transparent',
              color: 'var(--color-gold)',
              border: '2px solid var(--color-gold)',
              borderRadius: 'var(--radius-sm)',
              fontFamily: 'var(--font-outfit)',
              fontWeight: 'var(--font-medium)',
              fontSize: 'var(--text-base)',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all var(--transition-base)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-gold)';
              e.currentTarget.style.color = 'var(--color-white)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--color-gold)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Voir tous les événements
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;