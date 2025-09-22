'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const FASHeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // 10 photos sélectionnées pour le teaser épique
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
      alt: 'Concert de Gala',
      title: 'Concert de Gala',
      description: 'L\'excellence internationale au FAS'
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000); // Change toutes les 4 secondes
    
    return () => clearInterval(interval);
  }, [isPlaying, carouselImages.length]);

  // Skip preload - affichage immédiat
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  }, [carouselImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  }, [carouselImages.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  if (!isLoaded) {
    return (
      <div style={{
        position: 'relative',
        height: '100vh',
        background: 'linear-gradient(135deg, #6B46C1 0%, #8B5CF6 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '50px',
            height: '50px',
            border: '3px solid rgba(255,255,255,0.3)',
            borderTop: '3px solid white',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 20px'
          }}></div>
          <p>Chargement du festival...</p>
        </div>
      </div>
    );
  }

  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      overflow: 'hidden',
      background: '#000'
    }}>
      {/* Images Carousel avec transitions cinématiques */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        transition: 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: `translateX(-${currentSlide * 100}%)`
      }}>
        {carouselImages.map((image, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              flexShrink: 0
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
              priority={index === 0}
              quality={90}
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
          maxWidth: '800px',
          transform: `translateY(${currentSlide % 2 === 0 ? '0' : '-20px'})`,
          transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
          opacity: 1
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

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default FASHeroCarousel;