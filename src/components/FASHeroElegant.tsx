'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Concert {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  image: string;
  description: string;
  prestige?: boolean;
}

export default function FASHeroElegant() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const concerts: Concert[] = [
    {
      id: 1,
      title: "Concert de Gala",
      subtitle: "« The Golden Renaissance – Le Prince de la Musique »",
      date: "4 janvier 2026",
      time: "17:00",
      image: "/images/artistes/stile-antico/stile-antico-1-hero.webp",
      description: "Concert exceptionnel du prestigieux ensemble britannique dans un programme consacré à Giovanni Pierluigi da Palestrina.",
      prestige: true
    },
    {
      id: 2,
      title: "Chœur de chambre de Namur",
      subtitle: "Le baroque au féminin : Chiara Margarita Cozzolani",
      date: "15 février 2026",
      time: "20:00",
      image: "/images/artistes/choeur-namur/choeur-namur-1-hero.webp",
      description: "Redécouverte de la compositrice milanaise du XVIIe siècle, véritable pionnière de la musique sacrée."
    },
    {
      id: 3,
      title: "Chœur Novantiqua",
      subtitle: "Ex tenebris lux : Gesualdo, Bruckner, Poulenc",
      date: "21 mars 2026",
      time: "20:00",
      image: "/images/artistes/choeur-novantiqua/novantiqua-1-hero.webp",
      description: "Un voyage musical des ténèbres vers la lumière à travers trois compositeurs d'exception."
    },
    {
      id: 4,
      title: "Maîtrise de la Cathédrale",
      subtitle: "Au ciel et sur la terre : les voix de la jeunesse",
      date: "18 avril 2026",
      time: "20:00",
      image: "/images/artistes/maitrise-cathedrale/maitrise-1-hero.webp",
      description: "Les jeunes voix de la Maîtrise dans un programme célébrant l'innocence et la spiritualité."
    },
    {
      id: 5,
      title: "Ensemble Vocal de Lausanne",
      subtitle: "Vivaldi ou Noël à Venise",
      date: "20 décembre 2026",
      time: "17:00",
      image: "/images/artistes/ensemble-lausanne/lausanne-1-hero.webp",
      description: "Célébration de Noël dans la tradition vénitienne avec les plus belles pages de Vivaldi."
    }
  ];

  // Auto-rotation des concerts
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % concerts.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [concerts.length]);

  const currentConcert = concerts[currentIndex];

  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, var(--color-purple) 0%, var(--color-purple-dark) 100%)'
    }}>
      {/* Image de fond avec overlay violet */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1
      }}>
        <Image
          src={currentConcert.image}
          alt={currentConcert.title}
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          priority
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(107, 70, 193, 0.85) 0%, rgba(91, 33, 182, 0.9) 100%)',
          zIndex: 2
        }} />
      </div>

      {/* Contenu principal */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 2rem'
      }}>
        <div style={{
          maxWidth: '800px',
          textAlign: 'center',
          color: 'white'
        }}>
          {/* Badge prestige */}
          {currentConcert.prestige && (
            <div style={{
              display: 'inline-block',
              marginBottom: '2rem',
              padding: '0.5rem 1.5rem',
              background: 'linear-gradient(45deg, var(--color-gold), #E6C068)',
              color: 'var(--color-purple-dark)',
              borderRadius: '25px',
              fontSize: '0.9rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              boxShadow: '0 4px 20px rgba(212, 165, 116, 0.3)'
            }}>
              ⭐ PRESTIGE PRESTIGE
            </div>
          )}

          {/* Titre principal */}
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: '300',
            marginBottom: '1rem',
            fontFamily: 'var(--font-spectral)',
            lineHeight: '1.1'
          }}>
            {currentConcert.title}
          </h1>

          {/* Sous-titre */}
          <h2 style={{
            fontSize: 'clamp(1.2rem, 3vw, 2rem)',
            fontWeight: '400',
            marginBottom: '2rem',
            color: 'var(--color-gold)',
            fontStyle: 'italic'
          }}>
            {currentConcert.subtitle}
          </h2>

          {/* Informations date/heure */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '25px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <span style={{ fontSize: '1.2rem' }}>📅</span>
              <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>{currentConcert.date}</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '25px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <span style={{ fontSize: '1.2rem' }}>🕒</span>
              <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>{currentConcert.time}</span>
            </div>
          </div>

          {/* Description */}
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.6',
            marginBottom: '3rem',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}>
            {currentConcert.description}
          </p>

          {/* Bouton CTA */}
          <button style={{
            padding: '1rem 3rem',
            background: 'var(--color-gold)',
            color: 'white',
            border: 'none',
            borderRadius: '30px',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 25px rgba(212, 165, 116, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(212, 165, 116, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(212, 165, 116, 0.3)';
          }}>
            Réserver maintenant →
          </button>
        </div>
      </div>

      {/* Indicateurs de navigation */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '0.5rem',
        zIndex: 4
      }}>
        {concerts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: index === currentIndex ? '2rem' : '0.75rem',
              height: '0.75rem',
              borderRadius: '0.5rem',
              border: 'none',
              background: index === currentIndex
                ? 'var(--color-gold)'
                : 'rgba(255, 255, 255, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>

      {/* Navigation flèches */}
      <button
        onClick={() => setCurrentIndex((prev) => (prev - 1 + concerts.length) % concerts.length)}
        style={{
          position: 'absolute',
          left: '2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '3rem',
          height: '3rem',
          borderRadius: '50%',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          background: 'rgba(255, 255, 255, 0.1)',
          color: 'white',
          fontSize: '1.2rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          zIndex: 4,
          backdropFilter: 'blur(10px)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        }}
      >
        ‹
      </button>

      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % concerts.length)}
        style={{
          position: 'absolute',
          right: '2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '3rem',
          height: '3rem',
          borderRadius: '50%',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          background: 'rgba(255, 255, 255, 0.1)',
          color: 'white',
          fontSize: '1.2rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          zIndex: 4,
          backdropFilter: 'blur(10px)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        }}
      >
        ›
      </button>
    </section>
  );
}