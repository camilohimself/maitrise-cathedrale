'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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

export default function FAS() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const events: Event[] = fasEvents.events as Event[];
  const categories: Category[] = fasEvents.categories as Category[];
  const festival = fasEvents.festival;

  // Données actualités
  const actualites = [
    {
      id: 1,
      title: "Découvrez nos concerts avec les chroniques de Rhône FM",
      link: "#",
      color: "#E33241"
    },
    {
      id: 2,
      title: "Le Sion Festival 2025",
      link: "#",
      color: "#E33241"
    },
    {
      id: 3,
      title: "Les Concerts à ne pas manquer cette année",
      link: "#",
      color: "#E33241"
    }
  ];

  // Données artistes temporaires
  const artistes = [
    {
      id: "stile-antico",
      name: "Stile Antico",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
      description: "Ensemble vocal britannique"
    },
    {
      id: "choeur-novantiqua",
      name: "Chœur Novantiqua",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      description: "Direction Bernard Héritier"
    },
    {
      id: "ensemble-vocal",
      name: "Ensemble Vocal",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400",
      description: "Maîtrise de la Cathédrale"
    },
    {
      id: "solistes",
      name: "Solistes",
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400",
      description: "Artistes invités"
    }
  ];

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
      background: '#1a1340',
      position: 'relative'
    }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '80px 20px 60px',
        textAlign: 'center',
        background: '#E33241',
        color: 'white'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-block',
            background: '#D4A574',
            color: '#1a1340',
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
            Festival d'Art Sacré
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

      {/* Section Actualités */}
      <section style={{ 
        padding: '60px 20px',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#E33241',
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            Actualités
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {actualites.map((actu) => (
              <Link 
                key={actu.id} 
                href={actu.link}
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  background: actu.color,
                  color: 'white',
                  padding: '40px 30px',
                  borderRadius: '20px',
                  minHeight: '180px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(227, 50, 65, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.12)';
                }}>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: '700',
                    lineHeight: '1.4',
                    margin: 0
                  }}>
                    {actu.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section Artistes */}
      <section style={{ 
        padding: '60px 20px',
        background: '#F5F0E8'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#E33241',
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            Artistes
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {artistes.map((artiste) => (
              <Link 
                key={artiste.id}
                href={`/fas/artiste/${artiste.id}`}
                style={{ textDecoration: 'none' }}
              >
                <article style={{
                  background: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                }}>
                  <div style={{ 
                    position: 'relative',
                    height: '220px',
                    overflow: 'hidden'
                  }}>
                    <Image
                      src={artiste.image}
                      alt={artiste.name}
                      width={250}
                      height={220}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                  </div>
                  <div style={{ padding: '20px' }}>
                    <h3 style={{
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      color: '#1a1340',
                      marginBottom: '8px'
                    }}>
                      {artiste.name}
                    </h3>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#666',
                      margin: 0
                    }}>
                      {artiste.description}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section Programmation (anciennement dans /programmation) */}
      <section style={{ 
        padding: '60px 20px',
        background: '#1a1340'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#D4A574',
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            Programmation Complète
          </h2>

          {/* Filtres */}
          <div style={{ marginBottom: '40px', textAlign: 'center' }}>
            <label style={{
              display: 'block',
              fontSize: '0.9rem',
              fontWeight: '600',
              color: '#D4A574',
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
                  border: selectedCategory === 'all' ? '2px solid #E33241' : '2px solid #333',
                  borderRadius: '50px',
                  background: selectedCategory === 'all' ? '#E33241' : 'transparent',
                  color: selectedCategory === 'all' ? 'white' : '#D4A574',
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
                    color: selectedCategory === category.id ? 'white' : '#D4A574',
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

          {/* Grille d'événements */}
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
                  border: event.featured ? '2px solid #E33241' : event.prestige ? '2px solid #D4A574' : '2px solid transparent',
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
                    background: '#E33241',
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
                    background: '#D4A574',
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
                    background: 'rgba(26, 19, 64, 0.9)',
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
                      color: '#D4A574'
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
                      background: '#D4A574',
                      color: '#1a1340',
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
                      background: '#E33241',
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '50px',
                      fontSize: '0.9rem',
                      fontWeight: '700',
                      boxShadow: '0 4px 20px rgba(227, 50, 65, 0.3)'
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
                    color: '#1a1340',
                    marginBottom: '0.5rem',
                    lineHeight: '1.2'
                  }}>
                    {event.title}
                  </h3>
                  
                  {event.subtitle && (
                    <p style={{
                      fontSize: '1rem',
                      color: '#E33241',
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
                          background: '#F5F0E8',
                          color: '#1a1340',
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
                      background: '#F5F0E8',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      marginBottom: '1rem',
                      borderLeft: '4px solid #D4A574'
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
                        color: '#1a1340'
                      }}>
                        {event.conference.speaker}
                      </span>
                    </div>
                  )}

                  {event.special && (
                    <div style={{
                      background: '#F5F0E8',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      marginBottom: '1rem',
                      borderLeft: '4px solid #D4A574'
                    }}>
                      <span style={{
                        fontStyle: 'italic',
                        color: '#E33241',
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
                      background: '#E33241',
                      color: 'white',
                      boxShadow: '0 4px 20px rgba(227, 50, 65, 0.2)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#C42E3C';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 30px rgba(227, 50, 65, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#E33241';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(227, 50, 65, 0.2)';
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
                      color: '#1a1340',
                      border: '2px solid #1a1340'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#1a1340';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#1a1340';
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