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
      {/* Hero Section Premium - Inspiration Royal Opera House */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #8B0000 0%, #A0002A 100%)',
        color: 'white',
        overflow: 'hidden'
      }}>
        {/* Background overlay pour sophistication */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(45deg, rgba(26, 26, 26, 0.3) 0%, rgba(0, 0, 0, 0.1) 100%)',
          zIndex: 1
        }} />
        
        {/* Hero Content */}
        <div style={{ 
          position: 'relative',
          zIndex: 2,
          maxWidth: '1200px', 
          margin: '0 auto',
          padding: '0 40px',
          textAlign: 'center'
        }}>
          {/* Badge Edition Premium */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'rgba(184, 134, 11, 0.9)',
            color: '#1A1A1A',
            fontSize: '0.9rem',
            fontWeight: '600',
            letterSpacing: '0.15em',
            padding: '12px 32px',
            borderRadius: '50px',
            marginBottom: '3rem',
            textTransform: 'uppercase',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(184, 134, 11, 0.3)',
            boxShadow: '0 8px 32px rgba(184, 134, 11, 0.2)'
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              background: '#1A1A1A',
              borderRadius: '50%',
              marginRight: '12px'
            }}></span>
            {festival.edition}
          </div>
          
          {/* Main Title - Typography premium */}
          <h1 style={{
            fontSize: 'clamp(3.5rem, 8vw, 6rem)',
            fontWeight: '300',
            letterSpacing: '-0.03em',
            lineHeight: '0.95',
            marginBottom: '2rem',
            fontFamily: 'var(--font-spectral), Georgia, serif',
            textShadow: '0 6px 40px rgba(0, 0, 0, 0.5)'
          }}>
            Festival d'Art
            <span style={{
              display: 'block',
              fontWeight: '700',
              background: 'linear-gradient(45deg, #B8860B, #DAA520)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Sacré
            </span>
          </h1>
          
          {/* Subtitle élégant */}
          <div style={{
            maxWidth: '700px',
            margin: '0 auto 3rem'
          }}>
            <p style={{
              fontSize: '1.4rem',
              fontWeight: '300',
              opacity: '0.95',
              marginBottom: '1.5rem',
              letterSpacing: '0.02em',
              lineHeight: '1.4'
            }}>
              {festival.period}
            </p>
            
            <div style={{
              width: '80px',
              height: '2px',
              background: 'linear-gradient(90deg, #B8860B, rgba(184, 134, 11, 0.3))',
              margin: '0 auto 2rem'
            }}></div>
            
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.6',
              opacity: '0.9',
              fontWeight: '400',
              letterSpacing: '0.01em'
            }}>
              Vingt années d'excellence musicale au cœur de la Cathédrale de Sion
            </p>
          </div>

          {/* CTA Buttons Premium */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button style={{
              padding: '16px 40px',
              background: 'linear-gradient(45deg, #B8860B, #DAA520)',
              color: '#1A1A1A',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              letterSpacing: '0.05em',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 8px 32px rgba(184, 134, 11, 0.3)',
              textTransform: 'uppercase'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 16px 48px rgba(184, 134, 11, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(184, 134, 11, 0.3)';
            }}>
              Programme Complet
            </button>
            
            <button style={{
              padding: '16px 40px',
              background: 'transparent',
              color: 'white',
              border: '2px solid rgba(255, 255, 255, 0.6)',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '500',
              letterSpacing: '0.05em',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              textTransform: 'uppercase'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.borderColor = 'white';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              Billetterie
            </button>
          </div>
        </div>

        {/* Scroll indicator subtil */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2
        }}>
          <div style={{
            width: '1px',
            height: '60px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.8), transparent)',
            margin: '0 auto',
            animation: 'pulse 2s ease-in-out infinite'
          }}></div>
        </div>
      </section>

      {/* Section Actualités Premium */}
      <section style={{ 
        padding: '100px 40px',
        background: '#F5F5F5',
        position: 'relative'
      }}>
        {/* Background pattern subtil */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(139, 0, 0, 0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px',
          opacity: 0.3
        }}></div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          {/* Header section sophistiqué */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{
              display: 'inline-block',
              padding: '8px 24px',
              background: 'rgba(139, 0, 0, 0.1)',
              border: '1px solid rgba(139, 0, 0, 0.2)',
              borderRadius: '50px',
              marginBottom: '24px'
            }}>
              <span style={{
                fontSize: '0.9rem',
                fontWeight: '600',
                color: '#8B0000',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}>
                À la Une
              </span>
            </div>
            
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: '300',
              color: '#1A1A1A',
              marginBottom: '24px',
              fontFamily: 'var(--font-spectral), Georgia, serif'
            }}>
              Actualités du
              <span style={{
                display: 'block',
                fontWeight: '700',
                color: '#8B0000'
              }}>Festival</span>
            </h2>
            
            <div style={{
              width: '60px',
              height: '2px',
              background: 'linear-gradient(90deg, #B8860B, rgba(184, 134, 11, 0.3))',
              margin: '0 auto'
            }}></div>
          </div>
          
          {/* Grid actualités premium */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: '2.5rem'
          }}>
            {actualites.map((actu, index) => (
              <Link 
                key={actu.id} 
                href={actu.link}
                style={{ textDecoration: 'none' }}
              >
                <article style={{
                  background: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  boxShadow: '0 8px 40px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(139, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 40px rgba(0, 0, 0, 0.08)';
                }}>
                  {/* Barre de couleur premium */}
                  <div style={{
                    height: '4px',
                    background: `linear-gradient(90deg, #8B0000, ${index % 2 === 0 ? '#B8860B' : '#A0002A'})`,
                    borderRadius: '2px 2px 0 0'
                  }}></div>
                  
                  {/* Contenu premium */}
                  <div style={{
                    padding: '40px 32px',
                    minHeight: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                    {/* Badge numéro */}
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      width: '32px',
                      height: '32px',
                      background: 'rgba(139, 0, 0, 0.1)',
                      border: '1px solid rgba(139, 0, 0, 0.2)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      color: '#8B0000'
                    }}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    
                    <div>
                      <h3 style={{
                        fontSize: '1.3rem',
                        fontWeight: '600',
                        lineHeight: '1.4',
                        color: '#1A1A1A',
                        marginBottom: '16px',
                        fontFamily: 'var(--font-spectral), Georgia, serif'
                      }}>
                        {actu.title}
                      </h3>
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginTop: '24px'
                    }}>
                      <span style={{
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: '#8B0000',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        En savoir plus
                      </span>
                      <span style={{
                        fontSize: '1.2rem',
                        color: '#B8860B'
                      }}>
                        →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section Artistes */}
      <section style={{ 
        padding: '100px 40px',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Header artistes premium */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{
              display: 'inline-block',
              padding: '8px 24px',
              background: 'rgba(139, 0, 0, 0.1)',
              border: '1px solid rgba(139, 0, 0, 0.2)',
              borderRadius: '50px',
              marginBottom: '24px'
            }}>
              <span style={{
                fontSize: '0.9rem',
                fontWeight: '600',
                color: '#8B0000',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}>
                Découvrez
              </span>
            </div>
            
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: '700',
              color: '#1A1A1A',
              marginBottom: '24px',
              fontFamily: 'var(--font-spectral), Georgia, serif'
            }}>
              Nos Artistes
            </h2>
            
            <div style={{
              width: '60px',
              height: '2px',
              background: 'linear-gradient(90deg, #B8860B, rgba(184, 134, 11, 0.3))',
              margin: '0 auto'
            }}></div>
          </div>
          
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

      {/* Section Événement du Moment - Premium */}
      <section style={{ 
        padding: '100px 40px',
        background: '#1a1340',
        position: 'relative'
      }}>
        {/* Background pattern élégant */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(30deg, rgba(184, 134, 11, 0.05) 25%, transparent 25%)',
          backgroundSize: '60px 60px'
        }}></div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          {/* Header section */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{
              display: 'inline-block',
              padding: '10px 28px',
              background: 'rgba(184, 134, 11, 0.15)',
              border: '1px solid rgba(184, 134, 11, 0.3)',
              borderRadius: '50px',
              marginBottom: '32px',
              backdropFilter: 'blur(10px)'
            }}>
              <span style={{
                fontSize: '0.9rem',
                fontWeight: '600',
                color: '#B8860B',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}>
                Ne manquez pas
              </span>
            </div>
            
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: '300',
              color: 'white',
              marginBottom: '24px',
              fontFamily: 'var(--font-spectral), Georgia, serif'
            }}>
              L'événement du
              <span style={{
                display: 'block',
                fontWeight: '700',
                background: 'linear-gradient(45deg, #B8860B, #DAA520)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Moment</span>
            </h2>
          </div>

          {/* Événement featured */}
          {events.length > 0 && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
              gap: '60px',
              alignItems: 'center'
            }}>
              {/* Image côté gauche */}
              <div style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
                transform: 'perspective(1000px) rotateY(-5deg)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}>
                <Image
                  src={events[0].image}
                  alt={events[0].title}
                  width={600}
                  height={400}
                  style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover'
                  }}
                />
                
                {/* Badge prestige premium */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'linear-gradient(45deg, #8B0000, #A0002A)',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '50px',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  boxShadow: '0 8px 32px rgba(139, 0, 0, 0.4)'
                }}>
                  ⭐ À ne pas manquer
                </div>
              </div>

              {/* Contenu côté droit */}
              <div>
                <div style={{
                  display: 'inline-block',
                  background: 'rgba(139, 0, 0, 0.2)',
                  color: '#8B0000',
                  padding: '8px 20px',
                  borderRadius: '50px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  marginBottom: '24px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  {events[0].day} • {events[0].time}
                </div>

                <h3 style={{
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                  fontWeight: '700',
                  color: 'white',
                  lineHeight: '1.2',
                  marginBottom: '20px',
                  fontFamily: 'var(--font-spectral), Georgia, serif'
                }}>
                  {events[0].title}
                </h3>

                {events[0].subtitle && (
                  <p style={{
                    fontSize: '1.2rem',
                    color: '#B8860B',
                    fontWeight: '500',
                    marginBottom: '24px',
                    lineHeight: '1.4'
                  }}>
                    {events[0].subtitle}
                  </p>
                )}

                <p style={{
                  fontSize: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6',
                  marginBottom: '32px'
                }}>
                  {events[0].description.substring(0, 200)}...
                </p>

                {/* Artists tags */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                  marginBottom: '40px'
                }}>
                  {events[0].artists.slice(0, 3).map((artist, index) => (
                    <span
                      key={index}
                      style={{
                        background: 'rgba(184, 134, 11, 0.2)',
                        color: '#B8860B',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        border: '1px solid rgba(184, 134, 11, 0.3)'
                      }}
                    >
                      {artist}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div style={{
                  display: 'flex',
                  gap: '16px',
                  flexWrap: 'wrap'
                }}>
                  <button style={{
                    padding: '16px 32px',
                    background: 'linear-gradient(45deg, #8B0000, #A0002A)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    boxShadow: '0 8px 32px rgba(139, 0, 0, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 16px 48px rgba(139, 0, 0, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(139, 0, 0, 0.3)';
                  }}>
                    Réserver maintenant
                  </button>

                  <Link 
                    href="/agenda-billetterie"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '16px 32px',
                      background: 'transparent',
                      color: '#B8860B',
                      border: '2px solid #B8860B',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontWeight: '500',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(184, 134, 11, 0.1)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    Voir tout l'agenda
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}