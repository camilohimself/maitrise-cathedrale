'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import fasComposers from '@/data/fasComposers.json';

const FASHeroCarouselFinal = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedEra, setSelectedEra] = useState('');

  // Récupérer les époques musicales
  const eras = fasComposers.eras;

  // 10 photos optimisées pour le carousel épique
  const carouselImages = [
    {
      src: '/images/carousel/carousel-1.jpg',
      alt: 'Chœur en concentration avant performance',
      title: 'Moments de Grâce',
      description: 'L\'intimité des préparatifs dans la cathédrale'
    },
    {
      src: '/images/carousel/carousel-2.jpg',
      alt: 'Concert avec orchestre et chœur',
      title: 'Grande Formation',
      description: 'Orchestre et chœur unis dans l\'art sacré'
    },
    {
      src: '/images/carousel/carousel-3.jpg',
      alt: 'Performance en cours dans la cathédrale',
      title: 'Excellence Musicale',
      description: 'Vingt années d\'art sacré authentique'
    },
    {
      src: '/images/carousel/carousel-4.jpg',
      alt: 'Choristes en action',
      title: 'Voix d\'Exception',
      description: 'Talent et passion au service de la musique sacrée'
    },
    {
      src: '/images/carousel/carousel-5.jpg',
      alt: 'Ambiance de concert',
      title: 'Atmosphère Unique',
      description: 'L\'émotion partagée dans un lieu d\'exception'
    },
    {
      src: '/images/carousel/carousel-6.jpg',
      alt: 'Vue d\'ensemble concert',
      title: 'Public Conquis',
      description: 'Des concerts qui marquent les esprits'
    },
    {
      src: '/images/carousel/carousel-7.jpg',
      alt: 'Performance intimiste',
      title: 'Moments Privilégiés',
      description: 'La proximité entre artistes et public'
    },
    {
      src: '/images/carousel/carousel-8.jpg',
      alt: 'Chœur en formation',
      title: 'Formation d\'Elite',
      description: 'L\'excellence transmise aux jeunes talents'
    },
    {
      src: '/images/carousel/carousel-9.jpg',
      alt: 'Chœur Novantica',
      title: 'Chœur Novantica',
      description: 'Ensemble invité prestigieux du festival'
    },
    {
      src: '/images/carousel/carousel-10.jpg',
      alt: 'Stile Antico',
      title: 'Stile Antico',
      description: 'L\'excellence internationale au FAS'
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isPlaying, carouselImages.length]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  }, [carouselImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  }, [carouselImages.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      overflow: 'hidden',
      background: '#000'
    }}>
      {/* Images Carousel avec effet fade élégant */}
      <div style={{
        position: 'absolute',
        inset: 0
      }}>
        {carouselImages.map((image, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: currentSlide === index ? 1 : 0
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'brightness(0.7) contrast(1.1) saturate(1.2)'
              }}
              priority={index === 0 || index === 1}
              quality={85}
              onError={(e) => {
                console.error('Erreur chargement image:', image.src);
              }}
            />
            
            {/* Overlay gradient sophistiqué */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(107, 70, 193, 0.6) 0%, rgba(139, 92, 246, 0.4) 50%, rgba(0, 0, 0, 0.7) 100%)',
              zIndex: 1
            }} />
          </div>
        ))}
      </div>

      {/* Contenu Hero avec animation */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
        padding: '0 40px'
      }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '800px'
        }}>
          
          {/* Badge Festival */}
          <div style={{
            display: 'inline-block',
            padding: '12px 32px',
            background: 'rgba(167, 139, 250, 0.9)',
            color: '#1A1A1A',
            fontSize: '0.9rem',
            fontWeight: '700',
            letterSpacing: '0.15em',
            borderRadius: '50px',
            marginBottom: '2rem',
            textTransform: 'uppercase',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(167, 139, 250, 0.3)',
            boxShadow: '0 8px 32px rgba(167, 139, 250, 0.3)'
          }}>
            Festival d'Art Sacré • 20ème Édition
          </div>

          {/* Titre Principal */}
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            fontWeight: '300',
            letterSpacing: '-0.02em',
            lineHeight: '0.95',
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-spectral), Georgia, serif',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
            color: 'white'
          }}>
            {carouselImages[currentSlide].title}
          </h1>

          {/* Description dynamique */}
          <p style={{
            fontSize: '1.3rem',
            fontWeight: '300',
            opacity: '0.95',
            marginBottom: '3rem',
            letterSpacing: '0.02em',
            lineHeight: '1.4',
            color: 'white',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
          }}>
            {carouselImages[currentSlide].description}
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button style={{
              padding: '16px 40px',
              background: 'linear-gradient(45deg, #5B21B6, #6B46C1)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              letterSpacing: '0.05em',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 8px 32px rgba(107, 70, 193, 0.4)',
              textTransform: 'uppercase'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 16px 48px rgba(107, 70, 193, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(107, 70, 193, 0.4)';
            }}>
              Programme 2025-2026
            </button>
            
            <button style={{
              padding: '16px 40px',
              background: 'transparent',
              color: 'white',
              border: '2px solid rgba(167, 139, 250, 0.6)',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '500',
              letterSpacing: '0.05em',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              textTransform: 'uppercase'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(167, 139, 250, 0.2)';
              e.currentTarget.style.borderColor = '#A78BFA';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(167, 139, 250, 0.6)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              Billetterie
            </button>
          </div>
        </div>
      </div>

      {/* Controls Navigation */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '12px',
        zIndex: 3
      }}>
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: currentSlide === index ? '40px' : '12px',
              height: '4px',
              background: currentSlide === index 
                ? 'linear-gradient(90deg, #A78BFA, #C4B5FD)' 
                : 'rgba(255, 255, 255, 0.4)',
              border: 'none',
              borderRadius: '2px',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseEnter={(e) => {
              if (currentSlide !== index) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.7)';
              }
            }}
            onMouseLeave={(e) => {
              if (currentSlide !== index) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.4)';
              }
            }}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        style={{
          position: 'absolute',
          left: '40px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(0, 0, 0, 0.3)',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          color: 'white',
          fontSize: '1.5rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          zIndex: 3,
          backdropFilter: 'blur(10px)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(107, 70, 193, 0.8)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(0, 0, 0, 0.3)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
        }}
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        style={{
          position: 'absolute',
          right: '40px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(0, 0, 0, 0.3)',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          color: 'white',
          fontSize: '1.5rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          zIndex: 3,
          backdropFilter: 'blur(10px)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(107, 70, 193, 0.8)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(0, 0, 0, 0.3)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
        }}
      >
        ›
      </button>

      {/* Play/Pause Toggle */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        style={{
          position: 'absolute',
          top: '40px',
          right: '40px',
          background: 'rgba(0, 0, 0, 0.3)',
          border: 'none',
          borderRadius: '8px',
          padding: '12px 16px',
          color: 'white',
          fontSize: '0.9rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          zIndex: 3,
          backdropFilter: 'blur(10px)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(107, 70, 193, 0.8)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(0, 0, 0, 0.3)';
        }}
      >
        {isPlaying ? '⏸' : '▶'}
      </button>

      {/* Timeline Interactive Renaissance → Moderne */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.8) 100%)',
        padding: '40px 0 20px 0',
        zIndex: 4,
        backdropFilter: 'blur(20px)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 40px'
        }}>
          {/* Titre timeline */}
          <div style={{
            textAlign: 'center',
            marginBottom: '30px'
          }}>
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: '600',
              color: 'white',
              marginBottom: '8px',
              fontFamily: 'var(--font-spectral), Georgia, serif'
            }}>
              Voyage Musical à Travers les Siècles
            </h3>
            <p style={{
              fontSize: '0.9rem',
              color: 'rgba(255, 255, 255, 0.7)',
              fontStyle: 'italic'
            }}>
              De la Renaissance à l'époque moderne
            </p>
          </div>

          {/* Timeline interactive */}
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            {/* Ligne de connexion */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '0',
              right: '0',
              height: '2px',
              background: 'linear-gradient(90deg, #D4AF37 0%, #D2374C 35%, #B8860B 65%, #FF6B9D 100%)',
              transform: 'translateY(-50%)',
              zIndex: 1
            }} />

            {/* Points d'époque */}
            {eras.map((era, index) => (
              <div
                key={era.name}
                style={{
                  position: 'relative',
                  zIndex: 2,
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onClick={() => setSelectedEra(selectedEra === era.name ? '' : era.name)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) translateY(0)';
                }}
              >
                {/* Point d'époque */}
                <div style={{
                  width: selectedEra === era.name ? '20px' : '16px',
                  height: selectedEra === era.name ? '20px' : '16px',
                  background: `linear-gradient(45deg, ${era.color}, ${era.color}dd)`,
                  borderRadius: '50%',
                  border: `3px solid ${selectedEra === era.name ? 'white' : 'rgba(255, 255, 255, 0.5)'}`,
                  boxShadow: `0 0 ${selectedEra === era.name ? '20px' : '10px'} ${era.color}60`,
                  transition: 'all 0.3s ease',
                  margin: '0 auto 12px auto'
                }} />

                {/* Label époque */}
                <div style={{
                  textAlign: 'center',
                  minWidth: '120px'
                }}>
                  <div style={{
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: selectedEra === era.name ? era.color : 'white',
                    marginBottom: '4px',
                    transition: 'color 0.3s ease'
                  }}>
                    {era.name}
                  </div>
                  <div style={{
                    fontSize: '0.7rem',
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontStyle: 'italic'
                  }}>
                    {era.period}
                  </div>
                </div>

                {/* Info détaillée (apparaît au clic) */}
                {selectedEra === era.name && (
                  <div style={{
                    position: 'absolute',
                    top: '-80px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: `linear-gradient(135deg, ${era.color}20, ${era.color}10)`,
                    border: `1px solid ${era.color}40`,
                    borderRadius: '12px',
                    padding: '12px 16px',
                    minWidth: '200px',
                    textAlign: 'center',
                    backdropFilter: 'blur(15px)',
                    animation: 'fadeInScale 0.4s ease-out'
                  }}>
                    <div style={{
                      fontSize: '0.8rem',
                      color: era.color,
                      fontWeight: '600',
                      marginBottom: '6px'
                    }}>
                      {era.characteristics}
                    </div>
                    <div style={{
                      fontSize: '0.7rem',
                      color: 'rgba(255, 255, 255, 0.8)'
                    }}>
                      Compositeurs: {era.composers.length} représenté{era.composers.length > 1 ? 's' : ''}
                    </div>
                    
                    {/* Flèche */}
                    <div style={{
                      position: 'absolute',
                      bottom: '-6px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 0,
                      height: 0,
                      borderLeft: '6px solid transparent',
                      borderRight: '6px solid transparent',
                      borderTop: `6px solid ${era.color}40`
                    }} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Message guide */}
          <div style={{
            textAlign: 'center',
            fontSize: '0.8rem',
            color: 'rgba(255, 255, 255, 0.6)',
            fontStyle: 'italic'
          }}>
            Cliquez sur une époque pour découvrir ses caractéristiques
          </div>
        </div>
      </div>
    </section>
  );
};

export default FASHeroCarouselFinal;