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
      subtitle: "Palestrina, prince de la musique",
      date: "4 janvier 2026",
      time: "17:00",
      category: "PRESTIGE",
      description: "Concert exceptionnel du prestigieux ensemble britannique dans un programme consacré à Palestrina.",
      heroImage: "/images/artistes/stile-antico/stile-antico-1-hero.webp",
      color: "#D4AF37",
      prestige: true
    },
    {
      id: 2,
      title: "Ensemble vocal de la Maîtrise & Ensemble Barberine",
      subtitle: "Le baroque au féminin : Chiara Margarita Cozzolani",
      date: "30 novembre 2025",
      time: "17:00",
      category: "OUVERTURE",
      description: "Concert d'ouverture avec l'ensemble vocal de la Maîtrise et l'Ensemble Barberine.",
      heroImage: "/images/artistes/ecole-maitrisienne/ecole-1-hero.webp",
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
      title: "École maîtrisienne & Chœur des collèges",
      subtitle: "Au ciel et sur la terre : les voix de la jeunesse",
      date: "21 décembre 2025",
      time: "17:00",
      category: "JEUNESSE",
      description: "Concert mettant à l'honneur la jeunesse avec l'École Maîtrisienne.",
      heroImage: "/images/artistes/ecole-maitrisienne/ecole-2-hero.webp",
      color: "#FF6B9D"
    },
    {
      id: 5,
      title: "Ensemble Ad Astra & Collectif 7 Sed Unum",
      subtitle: "Vivaldi ou Noël à Venise",
      date: "26 décembre 2025",
      time: "17:00",
      category: "BAROQUE",
      description: "Les célèbres Gloria et Magnificat de Vivaldi dans leurs versions originales.",
      heroImage: "/images/artistes/ecole-maitrisienne/ecole-1-hero.webp",
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
          {/* Badge catégorie avec effet */}
          <div style={{
            display: 'inline-block',
            marginBottom: '2rem',
            padding: '0.75rem 2rem',
            background: currentConcert.prestige
              ? 'linear-gradient(45deg, var(--color-gold), #E6C068)'
              : 'rgba(255, 255, 255, 0.15)',
            color: currentConcert.prestige ? 'var(--color-purple-dark)' : 'white',
            borderRadius: '30px',
            fontSize: '0.9rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: currentConcert.prestige
              ? '0 8px 25px rgba(212, 165, 116, 0.4)'
              : '0 8px 25px rgba(255, 255, 255, 0.1)',
            transform: 'translateY(0)',
            animation: 'fadeInUp 1s ease 0.8s both'
          }}>
{currentConcert.prestige ? '⭐ Événement exceptionnel' : `🎭 ${getCategoryLabel(currentConcert.category)}`}
          </div>

          {/* Titre principal avec contraste renforcé */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontWeight: '300',
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-spectral)',
            lineHeight: '1.1',
            color: 'white',
            textShadow: '0 6px 25px rgba(0, 0, 0, 0.8), 0 2px 8px rgba(0, 0, 0, 0.9)',
            transform: 'translateY(0)',
            animation: 'fadeInUp 1s ease 1s both'
          }}>
            {currentConcert.title}
          </h1>

          {/* Sous-titre élégant */}
          <h2 style={{
            fontSize: 'clamp(1.2rem, 3vw, 2rem)',
            fontWeight: '400',
            marginBottom: '2.5rem',
            color: 'var(--color-gold)',
            fontStyle: 'italic',
            opacity: 0.95,
            transform: 'translateY(0)',
            animation: 'fadeInUp 1s ease 1.2s both'
          }}>
            {currentConcert.subtitle}
          </h2>

          {/* Informations sans pastilles - typographie claire */}
          <div style={{
            textAlign: 'center',
            marginBottom: '2.5rem',
            transform: 'translateY(0)',
            animation: 'fadeInUp 1s ease 1.4s both'
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

          {/* Description */}
          <p style={{
            fontSize: '1.25rem',
            lineHeight: '1.7',
            marginBottom: '3rem',
            opacity: 0.92,
            maxWidth: '650px',
            margin: '0 auto 3rem',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
            transform: 'translateY(0)',
            animation: 'fadeInUp 1s ease 1.6s both'
          }}>
            {currentConcert.description}
          </p>

          {/* Bouton CTA avec effet hero */}
          <button style={{
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
            animation: 'fadeInUp 1s ease 1.8s both'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(212, 165, 116, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(212, 165, 116, 0.4)';
          }}>
            Réserver maintenant →
          </button>
        </div>
      </div>

      {/* Navigation élégante */}
      <div style={{
        position: 'absolute',
        bottom: '3rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '0.75rem',
        zIndex: 10
      }}>
        {concerts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: index === currentSlide ? '3rem' : '1rem',
              height: '1rem',
              borderRadius: '0.5rem',
              border: 'none',
              background: index === currentSlide
                ? 'var(--color-gold)'
                : 'rgba(255, 255, 255, 0.4)',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              boxShadow: index === currentSlide
                ? '0 4px 15px rgba(212, 165, 116, 0.4)'
                : '0 2px 8px rgba(0, 0, 0, 0.1)'
            }}
          />
        ))}
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
      `}</style>
    </section>
  );
};

export default FASHeroCinematic;