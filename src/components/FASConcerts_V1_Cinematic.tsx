'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FASConcerts_V1_Cinematic = () => {
  const [currentHero, setCurrentHero] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const concerts = [
    {
      id: 1,
      title: "Ensemble vocal de la Maîtrise & Ensemble Barberine",
      subtitle: "Le baroque au féminin : Chiara Margarita Cozzolani",
      date: "30 novembre 2025",
      time: "17:00",
      category: "OUVERTURE",
      description: "Concert d'ouverture avec l'ensemble vocal de la Maîtrise et l'Ensemble Barberine, un des meilleurs ensembles actuels pour ce style de musique.",
      heroImage: "/images/artistes/ecole-maitrisienne/ecole-1-hero.webp",
      cardImage: "/images/artistes/ecole-maitrisienne/ecole-1-card.webp",
      color: "#D2374C",
      featured: true
    },
    {
      id: 2,
      title: "Chœur Novantiqua",
      subtitle: "Ex tenebris lux : Gesualdo, Bruckner, Poulenc",
      date: "7 décembre 2025",
      time: "17:00",
      category: "VOCAL",
      description: "Programme a cappella raffiné autour de Gesualdo, Bruckner et Poulenc, précédé d'une conférence de Marie Favre.",
      heroImage: "/images/artistes/choeur-novantiqua/novantiqua-1-hero.webp",
      cardImage: "/images/artistes/choeur-novantiqua/novantiqua-1-card.webp",
      color: "#8B7BB8"
    },
    {
      id: 3,
      title: "École maîtrisienne & Chœur des collèges",
      subtitle: "Au ciel et sur la terre : les voix de la jeunesse",
      date: "21 décembre 2025",
      time: "17:00",
      category: "JEUNESSE",
      description: "Concert mettant à l'honneur la jeunesse avec l'École Maîtrisienne et le Chœur des Collèges de Sion.",
      heroImage: "/images/artistes/ecole-maitrisienne/ecole-2-hero.webp",
      cardImage: "/images/artistes/ecole-maitrisienne/ecole-2-card.webp",
      color: "#FF6B9D"
    },
    {
      id: 4,
      title: "Ensemble Ad Astra & Collectif 7 Sed Unum",
      subtitle: "Vivaldi ou Noël à Venise",
      date: "26 décembre 2025",
      time: "17:00",
      category: "BAROQUE",
      description: "Les célèbres Gloria et Magnificat de Vivaldi dans leurs versions originales pour voix de femmes.",
      heroImage: "/images/artistes/ecole-maitrisienne/ecole-1-hero.webp",
      cardImage: "/images/artistes/ecole-maitrisienne/ecole-1-card.webp",
      color: "#D2374C"
    },
    {
      id: 5,
      title: "Stile Antico",
      subtitle: "Palestrina, prince de la musique",
      date: "4 janvier 2026",
      time: "17:00",
      category: "PRESTIGE",
      description: "Concert exceptionnel du prestigieux ensemble britannique dans un programme consacré à Palestrina.",
      heroImage: "/images/artistes/stile-antico/stile-antico-1-hero.webp",
      cardImage: "/images/artistes/stile-antico/stile-antico-1-card.webp",
      color: "#D4AF37",
      prestige: true
    }
  ];

  // Auto-rotation du hero
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % concerts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlay, concerts.length]);

  const currentConcert = concerts[currentHero];

  return (
    <section style={{
      backgroundColor: '#0a0a0a',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Hero Cinematic */}
      <div style={{
        position: 'relative',
        height: '70vh',
        overflow: 'hidden'
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          transition: 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          <Image
            src={currentConcert.heroImage}
            alt={currentConcert.title}
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'brightness(0.4) contrast(1.2)'
            }}
            priority
          />
        </div>

        {/* Gradient Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(45deg, ${currentConcert.color}22 0%, transparent 50%, #00000088 100%)`
        }} />

        {/* Content Hero */}
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          right: '5%',
          color: 'white',
          zIndex: 2
        }}>
          <div style={{
            maxWidth: '800px'
          }}>
            {/* Category Badge */}
            <div style={{
              display: 'inline-block',
              padding: '8px 20px',
              backgroundColor: currentConcert.color,
              color: 'white',
              borderRadius: '25px',
              fontSize: '0.9rem',
              fontWeight: '700',
              letterSpacing: '1px',
              marginBottom: '20px',
              textTransform: 'uppercase',
              boxShadow: `0 4px 20px ${currentConcert.color}44`
            }}>
              {currentConcert.category}
              {currentConcert.prestige && ' ★'}
            </div>

            {/* Title */}
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '300',
              fontFamily: 'var(--font-spectral)',
              marginBottom: '16px',
              lineHeight: 1.1,
              textShadow: '0 4px 20px rgba(0,0,0,0.8)'
            }}>
              {currentConcert.title}
            </h2>

            {/* Subtitle */}
            <p style={{
              fontSize: '1.4rem',
              fontWeight: '400',
              color: currentConcert.color,
              marginBottom: '20px',
              textShadow: '0 2px 10px rgba(0,0,0,0.8)'
            }}>
              {currentConcert.subtitle}
            </p>

            {/* Date & Time */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '30px',
              fontSize: '1.1rem'
            }}>
              <span style={{
                padding: '8px 16px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                📅 {currentConcert.date}
              </span>
              <span style={{
                padding: '8px 16px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                🕐 {currentConcert.time}
              </span>
            </div>

            {/* CTA */}
            <Link
              href="https://billetterie-externe.com/maitrise-cathedrale"
              target="_blank"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '16px 32px',
                backgroundColor: currentConcert.color,
                color: 'white',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                boxShadow: `0 8px 30px ${currentConcert.color}44`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = `0 12px 40px ${currentConcert.color}66`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = `0 8px 30px ${currentConcert.color}44`;
              }}
            >
              <span>Réserver maintenant</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '10px' }}>
                <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Navigation Dots */}
        <div style={{
          position: 'absolute',
          bottom: '30px',
          right: '5%',
          display: 'flex',
          gap: '12px',
          zIndex: 3
        }}>
          {concerts.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentHero(index);
                setIsAutoPlay(false);
                setTimeout(() => setIsAutoPlay(true), 5000);
              }}
              style={{
                width: index === currentHero ? '40px' : '12px',
                height: '12px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: index === currentHero ? concerts[index].color : 'rgba(255,255,255,0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div style={{
        backgroundColor: '#111111',
        padding: '80px 0',
        position: 'relative'
      }}>
        <div className="container">
          <h3 style={{
            fontSize: '2.5rem',
            fontWeight: '300',
            color: 'white',
            textAlign: 'center',
            marginBottom: '60px',
            fontFamily: 'var(--font-spectral)'
          }}>
            Calendrier des concerts
          </h3>

          {/* Timeline */}
          <div style={{
            position: 'relative',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {/* Timeline Line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '0',
              bottom: '0',
              width: '2px',
              background: 'linear-gradient(180deg, var(--color-gold), #D2374C, var(--color-gold))',
              transform: 'translateX(-50%)'
            }} />

            {concerts.map((concert, index) => (
              <div
                key={concert.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '60px',
                  flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
                }}
              >
                {/* Content */}
                <div style={{
                  flex: 1,
                  padding: '0 40px'
                }}>
                  <div style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    padding: '30px',
                    borderRadius: '20px',
                    border: `2px solid ${concert.color}44`,
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = `0 20px 40px ${concert.color}33`;
                    e.currentTarget.style.borderColor = concert.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = `${concert.color}44`;
                  }}
                  >
                    <div style={{
                      fontSize: '0.9rem',
                      color: concert.color,
                      fontWeight: '600',
                      marginBottom: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      {concert.date} • {concert.time}
                    </div>
                    <h4 style={{
                      fontSize: '1.4rem',
                      fontWeight: '600',
                      color: 'white',
                      marginBottom: '8px'
                    }}>
                      {concert.title}
                    </h4>
                    <p style={{
                      fontSize: '1rem',
                      color: concert.color,
                      marginBottom: '15px'
                    }}>
                      {concert.subtitle}
                    </p>
                    <p style={{
                      fontSize: '0.9rem',
                      color: 'rgba(255,255,255,0.7)',
                      lineHeight: 1.6
                    }}>
                      {concert.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: concert.color,
                  borderRadius: '50%',
                  border: '4px solid #111111',
                  zIndex: 2,
                  boxShadow: `0 0 20px ${concert.color}66`
                }} />

                {/* Image */}
                <div style={{
                  flex: 1,
                  padding: '0 40px'
                }}>
                  <div style={{
                    position: 'relative',
                    height: '200px',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    border: `3px solid ${concert.color}44`
                  }}>
                    <Image
                      src={concert.cardImage}
                      alt={concert.title}
                      fill
                      style={{
                        objectFit: 'cover',
                        transition: 'all 0.3s ease'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(45deg, ${concert.color}22 0%, transparent 100%)`
                    }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FASConcerts_V1_Cinematic;