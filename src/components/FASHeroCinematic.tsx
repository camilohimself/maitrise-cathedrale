'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const FASHeroCinematic = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // Labels français corrects pour les catégories
  const getCategoryLabel = (category: string) => {
    const labels: { [key: string]: string } = {
      'OUVERTURE': 'Grande première',
      'VOCAL': 'Pur a cappella',
      'JEUNESSE': 'Relève talentueuse',
      'BAROQUE': 'Trésors vénitiens',
      'PRESTIGE': 'Événement exceptionnel'
    };
    return labels[category] || category;
  };

  // Vrais concerts FAS avec style cinématique
  const concerts = [
    {
      id: 1,
      title: "Stile Antico",
      collaboration: "En collaboration avec les Riches Heures de Valère",
      subtitle: "Palestrina - Le Prince de la Musique",
      date: "4 janvier 2026",
      time: "17:00",
      category: "PRESTIGE",
      description: "Concert exceptionnel du prestigieux ensemble britannique dans un programme consacré à Giovanni Pierluigi da Palestrina.",
      heroImage: "/images/artistes/stile-antico/stile-antico-1-hero.webp",
      color: "#D4AF37",
      prestige: true
    },
    {
      id: 2,
      title: "Ensemble Vocal de la Maîtrise & Ensemble Barberine",
      subtitle: "Le baroque au féminin : Chiara Margarita Cozzolani",
      date: "30 novembre 2025",
      time: "17:00",
      category: "OUVERTURE",
      description: "Concert d'ouverture avec l'Ensemble Vocal de la Maîtrise et l'Ensemble Barberine.",
      heroImage: "/images/artistes/ensemble-vocal-instrumental/evi-1-hero.webp",
      color: "#D2374C"
    },
    {
      id: 3,
      title: "Chœur Novantiqua",
      subtitle: "Ex tenebris lux : Gesualdo, Bruckner, Poulenc",
      date: "7 décembre 2025",
      time: "17:00",
      category: "VOCAL",
      description: "Programme a cappella raffiné autour de Gesualdo, Bruckner et Poulenc.",
      heroImage: "/images/artistes/choeur-novantiqua/novantiqua-1-hero.webp",
      color: "#8B7BB8"
    },
    {
      id: 4,
      title: "École Maîtrisienne & Chœur des collèges",
      subtitle: "Au ciel et sur la terre : les voix de la jeunesse",
      date: "21 décembre 2025",
      time: "17:00",
      category: "JEUNESSE",
      description: "Concert mettant à l'honneur la jeunesse avec l'École Maîtrisienne.",
      heroImage: "/images/artistes/ecole-maitrisienne/ecole-stamm-hero.webp",
      color: "#FF6B9D"
    },
    {
      id: 5,
      title: "Ensemble Ad Astra & Collectif 7 Sed Unum",
      subtitle: "Vivaldi ou Noël à Venise",
      date: "26 décembre 2025",
      time: "20:00",
      category: "BAROQUE",
      description: "Les célèbres Gloria et Magnificat de Vivaldi dans leurs versions originales.",
      heroImage: "/images/artistes/ensemble-ad-astra/ad-astra-1-hero.webp",
      color: "#D2374C"
    }
  ];

  // Animation d'entrée
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Auto-play
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % concerts.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isPlaying, concerts.length]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % concerts.length);
  }, [concerts.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + concerts.length) % concerts.length);
  }, [concerts.length]);

  const currentConcert = concerts[currentSlide];

  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, var(--color-purple) 0%, var(--color-purple-dark) 100%)',
      transform: isLoaded ? 'translateY(0)' : 'translateY(50px)',
      opacity: isLoaded ? 1 : 0,
      transition: 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }}>
      {/* Images avec transitions cinématiques */}
      {concerts.map((concert, index) => (
        <div
          key={concert.id}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: index === currentSlide ? 1 : 0,
            transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)',
            transition: 'all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            zIndex: index === currentSlide ? 2 : 1
          }}
        >
          <Image
            src={concert.heroImage}
            alt={concert.title}
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center'
            }}
            priority={index === 0}
          />

          {/* Overlay violet dynamique */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(
              135deg,
              rgba(107, 70, 193, 0.7) 0%,
              rgba(91, 33, 182, 0.85) 50%,
              rgba(75, 25, 150, 0.9) 100%
            )`,
            zIndex: 3
          }} />

          {/* Effets de lumière cinématiques */}
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '-10%',
            width: '120%',
            height: '60%',
            background: 'radial-gradient(ellipse at center, rgba(212, 165, 116, 0.15) 0%, transparent 70%)',
            transform: 'rotate(-15deg)',
            zIndex: 4,
            opacity: index === currentSlide ? 1 : 0,
            transition: 'opacity 2s ease'
          }} />
        </div>
      ))}

      {/* Contenu principal */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 4rem'
      }}>
        <div style={{
          maxWidth: '900px',
          textAlign: 'center',
          color: 'white',
          transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
          opacity: isLoaded ? 1 : 0,
          transition: 'all 1s ease 0.5s'
        }}>
          {/* Titre principal avec contraste renforcé */}
          <h1 style={{
            fontSize: 'clamp(1.5rem, 8vw, 5rem)',
            fontWeight: '300',
            marginBottom: '1rem',
            fontFamily: 'var(--font-spectral)',
            lineHeight: '1.1',
            color: 'white',
            textShadow: '0 6px 25px rgba(0, 0, 0, 0.8), 0 2px 8px rgba(0, 0, 0, 0.9)',
            transform: 'translateY(0)',
            animation: 'fadeInUp 1s ease 0.8s both'
          }}>
            {currentConcert.title}
          </h1>

          {/* Collaboration - style générique de film */}
          {currentConcert.collaboration && (
            <p style={{
              fontSize: 'clamp(0.85rem, 2vw, 1rem)',
              fontWeight: '400',
              marginBottom: '0.8rem',
              color: 'rgba(255, 255, 255, 0.85)',
              fontStyle: 'italic',
              letterSpacing: '0.03em',
              transform: 'translateY(0)',
              animation: 'fadeInUp 1s ease 1s both'
            }}>
              {currentConcert.collaboration}
            </p>
          )}

          {/* Sous-titre élégant */}
          <h2 style={{
            fontSize: 'clamp(0.95rem, 3vw, 2rem)',
            fontWeight: '400',
            marginBottom: '1.8rem',
            color: 'var(--color-gold)',
            fontStyle: 'italic',
            opacity: 0.95,
            transform: 'translateY(0)',
            animation: 'fadeInUp 1s ease 1.1s both'
          }}>
            {currentConcert.subtitle}
          </h2>

          {/* Date et heure en premier */}
          <div style={{
            textAlign: 'center',
            marginBottom: '1.2rem',
            transform: 'translateY(0)',
            animation: 'fadeInUp 1s ease 1.2s both'
          }}>
            <div style={{
              fontSize: '1.4rem',
              fontWeight: '600',
              color: 'white',
              fontFamily: 'var(--font-outfit)',
              textShadow: '0 4px 15px rgba(0, 0, 0, 0.8)',
              letterSpacing: '0.02em'
            }}>
              {currentConcert.date} • {currentConcert.time}
            </div>
          </div>

          {/* Description après la date */}
          <p style={{
            fontSize: '1.25rem',
            lineHeight: '1.5',
            marginBottom: '2.5rem',
            opacity: 0.92,
            maxWidth: '650px',
            margin: '0 auto 2.5rem',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
            transform: 'translateY(0)',
            animation: 'fadeInUp 1s ease 1.4s both'
          }}>
            {currentConcert.description}
          </p>

          {/* Bouton CTA avec effet hero */}
          <a
            href="https://www.booking-corner.com/cmsscripts/bookOnline.aspx?lang=fr&eco=cathedralesion&num=6395"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '1.25rem 3.5rem',
              background: 'var(--color-gold)',
              color: 'white',
              border: 'none',
              borderRadius: '35px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              boxShadow: '0 10px 30px rgba(212, 165, 116, 0.4)',
              transform: 'translateY(0)',
              animation: 'fadeInUp 1s ease 1.6s both',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(212, 165, 116, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(212, 165, 116, 0.4)';
            }}
          >
            Réserver maintenant →
          </a>
        </div>
      </div>

      {/* Navigation flèches cinématiques */}
      <button
        onClick={prevSlide}
        style={{
          position: 'absolute',
          left: '3rem',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '4rem',
          height: '4rem',
          borderRadius: '50%',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          background: 'rgba(255, 255, 255, 0.1)',
          color: 'white',
          fontSize: '1.5rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          zIndex: 10,
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
        }}
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        style={{
          position: 'absolute',
          right: '3rem',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '4rem',
          height: '4rem',
          borderRadius: '50%',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          background: 'rgba(255, 255, 255, 0.1)',
          color: 'white',
          fontSize: '1.5rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          zIndex: 10,
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
        }}
      >
        ›
      </button>

      {/* Contrôle play/pause */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        style={{
          position: 'absolute',
          top: '3rem',
          right: '3rem',
          width: '3rem',
          height: '3rem',
          borderRadius: '50%',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          background: 'rgba(255, 255, 255, 0.1)',
          color: 'white',
          fontSize: '1rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          zIndex: 10,
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
        }}
      >
        {isPlaying ? '⏸️' : '▶️'}
      </button>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Optimisations mobile Hero FAS */
        @media (max-width: 768px) {
          section {
            min-height: 80vh !important;
            height: auto !important;
          }

          /* Boutons navigation réduits (48px → 44px min Apple HIG) */
          button[style*="4rem"] {
            width: 2.75rem !important;
            height: 2.75rem !important;
            font-size: 1.1rem !important;
          }

          /* Dots navigation plus petits */
          div[style*="bottom"][style*="3rem"] {
            bottom: 1.5rem !important;
            gap: 0.5rem !important;
          }

          /* Flèches repositionnées - iOS safe-area */
          button[style*="left: 3rem"] {
            left: max(0.5rem, env(safe-area-inset-left)) !important;
          }

          button[style*="right: 3rem"] {
            right: max(0.5rem, env(safe-area-inset-right)) !important;
          }

          /* Play/pause repositionné */
          button[style*="top: 3rem"][style*="right: 3rem"] {
            top: 1rem !important;
            right: 1rem !important;
            width: 2.75rem !important;
            height: 2.75rem !important;
          }
        }

        @media (max-width: 640px) {
          section {
            min-height: auto !important;
            height: auto !important;
            padding: 100px 1rem 80px !important;
          }

          /* Boutons navigation min 44px (Apple HIG) */
          button[style*="left"] {
            width: 2.75rem !important;
            height: 2.75rem !important;
            font-size: 1rem !important;
            left: 0.5rem !important;
          }

          button[style*="right"] {
            width: 2.75rem !important;
            height: 2.75rem !important;
            font-size: 1rem !important;
            right: 0.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FASHeroCinematic;