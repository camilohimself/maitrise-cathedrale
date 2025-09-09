'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import fasEvents from '@/data/fasEvents.json';

interface Event {
  id: number;
  title: string;
  subtitle?: string;
  type: string;
  date?: string;
  dates?: string[];
  day: string;
  time: string;
  duration: number;
  description: string;
  artists: string[];
  featured: boolean;
  category: string;
  image: string;
  prestige?: boolean;
  conference?: {
    speaker: string;
    title: string;
    time: string;
  };
  special?: string;
}

interface Category {
  id: string;
  name: string;
  color: string;
  description: string;
}

export default function Programmation() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const events: Event[] = fasEvents.events as Event[];
  const categories: Category[] = fasEvents.categories as Category[];
  const festival = fasEvents.festival;

  // Filtrer les événements
  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      return selectedCategory === 'all' || event.category === selectedCategory;
    });
  }, [events, selectedCategory]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long'
    });
  };

  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #040A23 0%, #1a1a2e 50%, #16213e 100%)',
      position: 'relative'
    }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '80px 20px 60px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #D2374C 0%, #FF6B9D 100%)',
        color: 'white'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(45deg, #D4AF37 0%, #F4D03F 100%)',
            color: '#1B1B2F',
            fontSize: '1rem',
            fontWeight: '700',
            letterSpacing: '0.1em',
            padding: '8px 24px',
            borderRadius: '50px',
            marginBottom: '2rem',
            textTransform: 'uppercase'
          }}>
            {festival.edition}
          </div>
          
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: '900',
            letterSpacing: '-0.02em',
            lineHeight: '0.9',
            marginBottom: '1.5rem',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
          }}>
            Programmation
          </h1>
          
          <p style={{
            fontSize: '1.2rem',
            fontWeight: '300',
            opacity: '0.9',
            marginBottom: '2rem',
            letterSpacing: '0.05em'
          }}>
            {festival.period}
          </p>
          
          <p style={{
            fontSize: '1rem',
            lineHeight: '1.6',
            opacity: '0.85',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Une programmation d'exception pour célébrer 20 ans d'art sacré
          </p>
        </div>
      </section>

      {/* Filtres */}
      <section style={{ padding: '40px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <label style={{
            display: 'block',
            fontSize: '0.9rem',
            fontWeight: '600',
            color: '#D4AF37',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem'
          }}>
            RECHERCHER PAR CATÉGORIE:
          </label>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <button
              onClick={() => setSelectedCategory('all')}
              style={{
                padding: '12px 24px',
                border: selectedCategory === 'all' ? '2px solid #D2374C' : '2px solid #333',
                borderRadius: '50px',
                background: selectedCategory === 'all' ? '#D2374C' : 'transparent',
                color: selectedCategory === 'all' ? 'white' : '#D4AF37',
                fontWeight: '500',
                fontSize: '0.9rem',
                letterSpacing: '0.05em',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            >
              TOUS
            </button>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                style={{
                  padding: '12px 24px',
                  border: selectedCategory === category.id ? `2px solid ${category.color}` : '2px solid #333',
                  borderRadius: '50px',
                  background: selectedCategory === category.id ? category.color : 'transparent',
                  color: selectedCategory === category.id ? 'white' : '#D4AF37',
                  fontWeight: '500',
                  fontSize: '0.9rem',
                  letterSpacing: '0.05em',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                {category.name.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille d'événements */}
      <section style={{ padding: '40px 20px 80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {filteredEvents.map((event) => (
              <article
                key={event.id}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                  transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                  border: event.featured ? '2px solid #D2374C' : event.prestige ? '2px solid #D4AF37' : '2px solid transparent',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.15)';
                }}
              >
                {/* Barre de couleur en haut */}
                {event.featured && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(135deg, #D2374C 0%, #FF6B9D 100%)',
                    zIndex: 1
                  }} />
                )}
                {event.prestige && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(45deg, #D4AF37 0%, #F4D03F 100%)',
                    zIndex: 1
                  }} />
                )}

                {/* Image de l'événement */}
                <div style={{ position: 'relative', height: '250px', overflow: 'hidden' }}>
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={370}
                    height={250}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                  />
                  
                  {/* Overlay date/heure */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'rgba(27, 27, 47, 0.9)',
                    color: 'white',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minWidth: '80px'
                  }}>
                    <div style={{
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      letterSpacing: '0.05em',
                      marginBottom: '4px',
                      opacity: '0.8'
                    }}>
                      {event.day}
                    </div>
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: '700',
                      color: '#F4D03F'
                    }}>
                      {event.time}
                    </div>
                  </div>

                  {/* Badge prestigieux */}
                  {event.prestige && (
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'linear-gradient(45deg, #D4AF37 0%, #F4D03F 100%)',
                      color: '#1B1B2F',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      fontSize: '0.7rem',
                      fontWeight: '700',
                      letterSpacing: '0.1em'
                    }}>
                      ⭐ PRESTIGE
                    </div>
                  )}

                  {/* Badge 20ème édition */}
                  {event.featured && (
                    <div style={{
                      position: 'absolute',
                      bottom: '1rem',
                      right: '1rem',
                      background: '#D2374C',
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '50px',
                      fontSize: '0.9rem',
                      fontWeight: '700',
                      boxShadow: '0 4px 20px rgba(210, 55, 76, 0.3)'
                    }}>
                      20ème
                    </div>
                  )}
                </div>

                {/* Contenu de l'événement */}
                <div style={{ padding: '2rem' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}>
                    <span style={{
                      display: 'inline-block',
                      background: categories.find(cat => cat.id === event.category)?.color || '#8B7BB8',
                      color: 'white',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase'
                    }}>
                      {categories.find(cat => cat.id === event.category)?.name}
                    </span>
                    
                    {event.date && (
                      <time style={{
                        fontSize: '0.9rem',
                        color: '#666',
                        fontWeight: '500'
                      }}>
                        {formatDate(event.date)}
                      </time>
                    )}
                  </div>

                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#1B1B2F',
                    marginBottom: '0.5rem',
                    lineHeight: '1.2'
                  }}>
                    {event.title}
                  </h3>
                  
                  {event.subtitle && (
                    <p style={{
                      fontSize: '1rem',
                      color: '#D2374C',
                      fontWeight: '500',
                      marginBottom: '1rem',
                      lineHeight: '1.3'
                    }}>
                      {event.subtitle}
                    </p>
                  )}

                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1rem'
                  }}>
                    {event.artists.map((artist, index) => (
                      <span
                        key={index}
                        style={{
                          background: '#F8F9FA',
                          color: '#1B1B2F',
                          padding: '6px 12px',
                          borderRadius: '16px',
                          fontSize: '0.8rem',
                          fontWeight: '500'
                        }}
                      >
                        {artist}
                      </span>
                    ))}
                  </div>

                  {event.conference && (
                    <div style={{
                      background: '#FAF9F6',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      marginBottom: '1rem',
                      borderLeft: '4px solid #D4AF37'
                    }}>
                      <span style={{
                        display: 'block',
                        fontSize: '0.8rem',
                        color: '#666',
                        fontWeight: '500',
                        marginBottom: '4px'
                      }}>
                        Conférence précédente:
                      </span>
                      <span style={{
                        fontWeight: '600',
                        color: '#1B1B2F'
                      }}>
                        {event.conference.speaker}
                      </span>
                    </div>
                  )}

                  {event.special && (
                    <div style={{
                      background: '#FAF9F6',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      marginBottom: '1rem',
                      borderLeft: '4px solid #D4AF37'
                    }}>
                      <span style={{
                        fontStyle: 'italic',
                        color: '#D2374C',
                        fontWeight: '500'
                      }}>
                        {event.special}
                      </span>
                    </div>
                  )}

                  <p style={{
                    color: '#666',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem'
                  }}>
                    {event.description.length > 120 
                      ? event.description.substring(0, 120) + '...'
                      : event.description
                    }
                  </p>

                  {/* Actions */}
                  <div style={{
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'center'
                  }}>
                    <button style={{
                      padding: '12px 20px',
                      borderRadius: '12px',
                      fontWeight: '600',
                      fontSize: '0.9rem',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      border: 'none',
                      background: '#D2374C',
                      color: 'white',
                      boxShadow: '0 4px 20px rgba(210, 55, 76, 0.2)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#B32843';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 30px rgba(210, 55, 76, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#D2374C';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(210, 55, 76, 0.2)';
                    }}>
                      Réserver
                    </button>
                    <button style={{
                      padding: '12px 20px',
                      borderRadius: '12px',
                      fontWeight: '600',
                      fontSize: '0.9rem',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      background: 'transparent',
                      color: '#1B1B2F',
                      border: '2px solid #1B1B2F'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#1B1B2F';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#1B1B2F';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}>
                      En savoir plus
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}