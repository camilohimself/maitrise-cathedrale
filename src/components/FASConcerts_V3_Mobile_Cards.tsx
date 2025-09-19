'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FASConcerts_V3_Mobile_Cards = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const concerts = [
    {
      id: 1,
      title: "Ensemble vocal de la Maîtrise & Ensemble Barberine",
      subtitle: "Le baroque au féminin : Chiara Margarita Cozzolani",
      shortTitle: "Ensemble Barberine",
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
      shortTitle: "Chœur Novantiqua",
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
      shortTitle: "École maîtrisienne",
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
      shortTitle: "Ensemble Ad Astra",
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
      shortTitle: "Stile Antico",
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

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % concerts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay, concerts.length]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % concerts.length);
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + concerts.length) % concerts.length);
    }

    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % concerts.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + concerts.length) % concerts.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  return (
    <section style={{
      backgroundColor: '#0a0a0a',
      padding: '60px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
        backgroundSize: '50px 50px',
        opacity: 0.3
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>

        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '50px'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '8px 20px',
            backgroundColor: 'rgba(212, 175, 55, 0.1)',
            borderRadius: '25px',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            color: '#D4AF37',
            fontSize: '14px',
            fontWeight: '600',
            marginBottom: '30px'
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            ÉDITION 2025-2026
          </div>

          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '300',
            color: 'white',
            marginBottom: '20px',
            fontFamily: 'var(--font-spectral)'
          }}>
            Nos 5 Concerts d'Exception
          </h2>

          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            Découvrez notre programmation en parcourant nos cartes interactives
          </p>
        </div>

        {/* Main Carousel */}
        <div style={{
          position: 'relative',
          maxWidth: '900px',
          margin: '0 auto'
        }}>

          {/* Cards Container */}
          <div
            style={{
              position: 'relative',
              height: '500px',
              perspective: '1000px'
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {concerts.map((concert, index) => {
              const position = (index - currentSlide + concerts.length) % concerts.length;
              const isActive = position === 0;
              const isPrev = position === concerts.length - 1;
              const isNext = position === 1;

              let transform = '';
              let opacity = 0;
              let zIndex = 1;

              if (isActive) {
                transform = 'translateX(0) rotateY(0deg) scale(1)';
                opacity = 1;
                zIndex = 10;
              } else if (isPrev) {
                transform = 'translateX(-60%) rotateY(45deg) scale(0.8)';
                opacity = 0.6;
                zIndex = 5;
              } else if (isNext) {
                transform = 'translateX(60%) rotateY(-45deg) scale(0.8)';
                opacity = 0.6;
                zIndex = 5;
              } else {
                transform = 'translateX(0) rotateY(90deg) scale(0.6)';
                opacity = 0;
                zIndex = 1;
              }

              return (
                <div
                  key={concert.id}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '350px',
                    height: '450px',
                    marginLeft: '-175px',
                    marginTop: '-225px',
                    borderRadius: '25px',
                    overflow: 'hidden',
                    transform,
                    opacity,
                    zIndex,
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    boxShadow: isActive
                      ? `0 25px 50px ${concert.color}44, 0 0 0 2px ${concert.color}66`
                      : '0 15px 30px rgba(0,0,0,0.5)'
                  }}
                  onClick={() => {
                    if (!isActive) {
                      setCurrentSlide(index);
                      setIsAutoPlay(false);
                      setTimeout(() => setIsAutoPlay(true), 8000);
                    }
                  }}
                >
                  {/* Background Image */}
                  <div style={{
                    position: 'absolute',
                    inset: 0
                  }}>
                    <Image
                      src={concert.cardImage}
                      alt={concert.title}
                      fill
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                        transition: 'transform 0.6s ease',
                        transform: isActive ? 'scale(1.05)' : 'scale(1)'
                      }}
                    />
                  </div>

                  {/* Overlays */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(45deg, ${concert.color}33 0%, transparent 50%, rgba(0,0,0,0.8) 100%)`
                  }} />

                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.9) 100%)'
                  }} />

                  {/* Prestige Badge */}
                  {concert.prestige && (
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      backgroundColor: concert.color,
                      color: 'white',
                      padding: '6px 12px',
                      borderRadius: '15px',
                      fontSize: '11px',
                      fontWeight: '700',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      boxShadow: `0 4px 15px ${concert.color}66`,
                      zIndex: 3
                    }}>
                      ★ PRESTIGE
                    </div>
                  )}

                  {/* Content */}
                  <div style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    padding: '30px',
                    color: 'white',
                    zIndex: 2
                  }}>
                    {/* Category */}
                    <div style={{
                      display: 'inline-block',
                      padding: '6px 14px',
                      backgroundColor: concert.color,
                      borderRadius: '15px',
                      fontSize: '11px',
                      fontWeight: '700',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      marginBottom: '15px',
                      boxShadow: `0 4px 15px ${concert.color}44`
                    }}>
                      {concert.category}
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontSize: '1.4rem',
                      fontWeight: '600',
                      marginBottom: '8px',
                      lineHeight: 1.2,
                      textShadow: '0 2px 10px rgba(0,0,0,0.8)'
                    }}>
                      {concert.shortTitle}
                    </h3>

                    {/* Subtitle */}
                    <p style={{
                      fontSize: '0.95rem',
                      color: concert.color,
                      marginBottom: '15px',
                      fontWeight: '500',
                      textShadow: '0 2px 8px rgba(0,0,0,0.8)',
                      lineHeight: 1.3
                    }}>
                      {concert.subtitle}
                    </p>

                    {/* Date/Time */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      fontSize: '0.85rem',
                      marginBottom: '15px'
                    }}>
                      <span style={{
                        padding: '4px 10px',
                        backgroundColor: 'rgba(255,255,255,0.15)',
                        borderRadius: '10px',
                        backdropFilter: 'blur(10px)'
                      }}>
                        📅 {concert.date}
                      </span>
                      <span style={{
                        padding: '4px 10px',
                        backgroundColor: 'rgba(255,255,255,0.15)',
                        borderRadius: '10px',
                        backdropFilter: 'blur(10px)'
                      }}>
                        🕐 {concert.time}
                      </span>
                    </div>

                    {/* Active card only: Description */}
                    {isActive && (
                      <p style={{
                        fontSize: '0.85rem',
                        color: 'rgba(255,255,255,0.8)',
                        lineHeight: 1.4,
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? 'translateY(0)' : 'translateY(10px)',
                        transition: 'all 0.3s ease 0.3s'
                      }}>
                        {concert.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              zIndex: 20
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <button
            onClick={nextSlide}
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              zIndex: 20
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '15px',
          marginTop: '40px'
        }}>
          {concerts.map((concert, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlay(false);
                setTimeout(() => setIsAutoPlay(true), 8000);
              }}
              style={{
                width: currentSlide === index ? '40px' : '12px',
                height: '12px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: currentSlide === index ? concert.color : 'rgba(255,255,255,0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: currentSlide === index ? `0 4px 15px ${concert.color}66` : 'none'
              }}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div style={{
          textAlign: 'center',
          marginTop: '50px'
        }}>
          <Link
            href="https://billetterie-externe.com/maitrise-cathedrale"
            target="_blank"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '16px 32px',
              backgroundColor: concerts[currentSlide].color,
              color: 'white',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem',
              transition: 'all 0.4s ease',
              boxShadow: `0 8px 25px ${concerts[currentSlide].color}44`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
              e.currentTarget.style.boxShadow = `0 12px 35px ${concerts[currentSlide].color}66`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = `0 8px 25px ${concerts[currentSlide].color}44`;
            }}
          >
            <span>Réserver maintenant</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '10px' }}>
              <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* Mobile-specific styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          button[style*="left: 20px"], button[style*="right: 20px"] {
            display: none !important;
          }
        }

        @media (max-width: 480px) {
          div[style*="width: 350px"] {
            width: 300px !important;
            margin-left: -150px !important;
          }

          div[style*="height: 450px"] {
            height: 400px !important;
            margin-top: -200px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FASConcerts_V3_Mobile_Cards;