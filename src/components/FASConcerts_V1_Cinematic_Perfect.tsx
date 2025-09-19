'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FASConcerts_V1_Cinematic_Perfect = () => {
  const [currentHero, setCurrentHero] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

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

  // Animation d'entrée
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Auto-rotation du hero
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % concerts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay, concerts.length]);

  const currentConcert = concerts[currentHero];

  return (
    <section style={{
      backgroundColor: '#000000',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Hero Section Ultra-Cinématique */}
      <div style={{
        position: 'relative',
        height: '85vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Background Image avec Parallax */}
        <div style={{
          position: 'absolute',
          inset: '-10%',
          transition: 'all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          transform: isLoaded ? 'scale(1.05)' : 'scale(1.15)'
        }}>
          <Image
            src={currentConcert.heroImage}
            alt={currentConcert.title}
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'brightness(0.35) contrast(1.3) saturate(1.1)'
            }}
            priority
          />
        </div>

        {/* Overlays Cinématiques */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse at 70% 30%, ${currentConcert.color}15 0%, transparent 50%),
                       linear-gradient(135deg, ${currentConcert.color}08 0%, transparent 40%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,0.95) 100%)`
        }} />

        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 20%, transparent 60%, rgba(0,0,0,0.8) 85%, rgba(0,0,0,0.95) 100%)'
        }} />

        {/* Film Grain Effect */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" opacity="0.05"/%3E%3C/svg%3E")',
          pointerEvents: 'none',
          opacity: 0.3
        }} />

        {/* Content Principal */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 60px',
          width: '100%',
          transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
          opacity: isLoaded ? 1 : 0,
          transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s'
        }}>
          <div style={{
            maxWidth: '900px'
          }}>
            {/* Badge Catégorie Premium */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '14px 28px',
              background: `linear-gradient(135deg, ${currentConcert.color} 0%, ${currentConcert.color}cc 100%)`,
              borderRadius: '50px',
              fontSize: '13px',
              fontWeight: '700',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '32px',
              boxShadow: `0 8px 32px ${currentConcert.color}44, inset 0 1px 0 rgba(255,255,255,0.2)`,
              border: `1px solid ${currentConcert.color}66`,
              color: 'white',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)`,
                pointerEvents: 'none'
              }} />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ position: 'relative', zIndex: 1 }}>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span style={{ position: 'relative', zIndex: 1 }}>
                {currentConcert.category}
                {currentConcert.prestige && ' PRESTIGE'}
              </span>
            </div>

            {/* Titre Principal */}
            <h1 style={{
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              fontWeight: '200',
              fontFamily: 'var(--font-spectral)',
              marginBottom: '24px',
              lineHeight: 0.95,
              color: 'white',
              textShadow: '0 8px 32px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6)',
              letterSpacing: '-0.02em'
            }}>
              {currentConcert.title}
            </h1>

            {/* Sous-titre Élégant */}
            <p style={{
              fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
              fontWeight: '400',
              color: currentConcert.color,
              marginBottom: '32px',
              textShadow: '0 4px 16px rgba(0,0,0,0.8)',
              fontStyle: 'italic',
              lineHeight: 1.3,
              maxWidth: '800px'
            }}>
              {currentConcert.subtitle}
            </p>

            {/* Informations Date/Heure Premium */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              marginBottom: '40px',
              flexWrap: 'wrap'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 20px',
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '30px',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.12)',
                fontSize: '1.1rem',
                color: 'white',
                fontWeight: '500'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: currentConcert.color,
                  boxShadow: `0 0 12px ${currentConcert.color}`
                }} />
                📅 {currentConcert.date}
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 20px',
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '30px',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.12)',
                fontSize: '1.1rem',
                color: 'white',
                fontWeight: '500'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: currentConcert.color,
                  boxShadow: `0 0 12px ${currentConcert.color}`
                }} />
                🕐 {currentConcert.time}
              </div>
            </div>

            {/* Description */}
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.6,
              marginBottom: '48px',
              maxWidth: '700px',
              textShadow: '0 2px 8px rgba(0,0,0,0.8)'
            }}>
              {currentConcert.description}
            </p>

            {/* CTA Premium */}
            <Link
              href="https://billetterie-externe.com/maitrise-cathedrale"
              target="_blank"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '16px',
                padding: '20px 40px',
                background: `linear-gradient(135deg, ${currentConcert.color} 0%, ${currentConcert.color}dd 100%)`,
                color: 'white',
                borderRadius: '60px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.2rem',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                boxShadow: `0 12px 40px ${currentConcert.color}40, inset 0 1px 0 rgba(255,255,255,0.2)`,
                border: `1px solid ${currentConcert.color}66`,
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                e.currentTarget.style.boxShadow = `0 20px 60px ${currentConcert.color}60, inset 0 1px 0 rgba(255,255,255,0.2)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = `0 12px 40px ${currentConcert.color}40, inset 0 1px 0 rgba(255,255,255,0.2)`;
              }}
            >
              <div style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)`,
                pointerEvents: 'none'
              }} />
              <span style={{ position: 'relative', zIndex: 1 }}>Réserver maintenant</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ position: 'relative', zIndex: 1 }}>
                <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Navigation Dots Premium */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          right: '60px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          zIndex: 20
        }}>
          {concerts.map((concert, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentHero(index);
                setIsAutoPlay(false);
                setTimeout(() => setIsAutoPlay(true), 8000);
              }}
              style={{
                width: index === currentHero ? '4px' : '3px',
                height: index === currentHero ? '40px' : '20px',
                borderRadius: '2px',
                border: 'none',
                backgroundColor: index === currentHero ? concert.color : 'rgba(255,255,255,0.4)',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                boxShadow: index === currentHero ? `0 0 20px ${concert.color}80` : 'none',
                opacity: index === currentHero ? 1 : 0.6
              }}
            />
          ))}
        </div>
      </div>

      {/* Timeline Section Perfectionnée */}
      <div style={{
        backgroundColor: '#0a0a0a',
        padding: '120px 0',
        position: 'relative'
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.03) 1px, transparent 0)',
          backgroundSize: '60px 60px'
        }} />

        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 60px'
        }}>
          {/* Header Section */}
          <div style={{
            textAlign: 'center',
            marginBottom: '100px'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 24px',
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)',
              borderRadius: '30px',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              color: '#D4AF37',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '32px',
              backdropFilter: 'blur(10px)'
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              CALENDRIER COMPLET
            </div>

            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: '200',
              color: 'white',
              marginBottom: '24px',
              fontFamily: 'var(--font-spectral)',
              letterSpacing: '-0.02em'
            }}>
              Nos cinq concerts d'exception
            </h2>

            <p style={{
              fontSize: '1.2rem',
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Du 30 novembre 2025 au 4 janvier 2026, découvrez notre programmation exceptionnelle
            </p>
          </div>

          {/* Timeline Premium */}
          <div style={{
            position: 'relative',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {/* Ligne centrale */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '0',
              bottom: '0',
              width: '3px',
              background: 'linear-gradient(180deg, transparent 0%, #D4AF37 20%, #D2374C 50%, #8B7BB8 80%, transparent 100%)',
              transform: 'translateX(-50%)',
              borderRadius: '2px'
            }} />

            {concerts.map((concert, index) => (
              <div
                key={concert.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: index === concerts.length - 1 ? '0' : '120px',
                  flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${0.2 + index * 0.1}s`
                }}
              >
                {/* Content Card */}
                <div style={{
                  flex: 1,
                  padding: index % 2 === 0 ? '0 80px 0 0' : '0 0 0 80px'
                }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.03)',
                    padding: '40px',
                    borderRadius: '24px',
                    border: `1px solid ${concert.color}22`,
                    backdropFilter: 'blur(20px)',
                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = `0 24px 60px ${concert.color}20`;
                    e.currentTarget.style.borderColor = `${concert.color}44`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = `${concert.color}22`;
                  }}
                  >
                    {/* Gradient subtil */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(135deg, ${concert.color}08 0%, transparent 60%)`,
                      pointerEvents: 'none'
                    }} />

                    <div style={{ position: 'relative', zIndex: 2 }}>
                      {/* Date */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '20px'
                      }}>
                        <div style={{
                          padding: '8px 16px',
                          backgroundColor: concert.color,
                          color: 'white',
                          borderRadius: '20px',
                          fontSize: '13px',
                          fontWeight: '700',
                          letterSpacing: '0.5px'
                        }}>
                          {concert.date}
                        </div>
                        <div style={{
                          padding: '8px 16px',
                          backgroundColor: 'rgba(255,255,255,0.08)',
                          color: 'white',
                          borderRadius: '20px',
                          fontSize: '13px',
                          fontWeight: '500'
                        }}>
                          {concert.time}
                        </div>
                      </div>

                      {/* Titre */}
                      <h3 style={{
                        fontSize: '1.8rem',
                        fontWeight: '600',
                        color: 'white',
                        marginBottom: '12px',
                        lineHeight: 1.2
                      }}>
                        {concert.title}
                      </h3>

                      {/* Sous-titre */}
                      <p style={{
                        fontSize: '1.1rem',
                        color: concert.color,
                        marginBottom: '20px',
                        fontStyle: 'italic',
                        fontWeight: '500'
                      }}>
                        {concert.subtitle}
                      </p>

                      {/* Description */}
                      <p style={{
                        fontSize: '1rem',
                        color: 'rgba(255,255,255,0.75)',
                        lineHeight: 1.6,
                        marginBottom: '24px'
                      }}>
                        {concert.description}
                      </p>

                      {/* Badge catégorie */}
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '6px 14px',
                        background: `linear-gradient(135deg, ${concert.color}22 0%, ${concert.color}11 100%)`,
                        borderRadius: '15px',
                        border: `1px solid ${concert.color}33`,
                        color: concert.color,
                        fontSize: '12px',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        {concert.prestige && '★ '}
                        {concert.category}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dot central */}
                <div style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: concert.color,
                  borderRadius: '50%',
                  border: '4px solid #0a0a0a',
                  zIndex: 10,
                  boxShadow: `0 0 24px ${concert.color}66, inset 0 1px 0 rgba(255,255,255,0.2)`,
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'white',
                    borderRadius: '50%'
                  }} />
                </div>

                {/* Image */}
                <div style={{
                  flex: 1,
                  padding: index % 2 === 0 ? '0 0 0 80px' : '0 80px 0 0'
                }}>
                  <div style={{
                    position: 'relative',
                    height: '280px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: `2px solid ${concert.color}33`,
                    transition: 'all 0.4s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = concert.color;
                    e.currentTarget.style.boxShadow = `0 12px 40px ${concert.color}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${concert.color}33`;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  >
                    <Image
                      src={concert.cardImage}
                      alt={concert.title}
                      fill
                      style={{
                        objectFit: 'cover',
                        transition: 'transform 0.6s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(45deg, ${concert.color}15 0%, transparent 50%)`
                    }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Final Section */}
      <div style={{
        backgroundColor: '#000000',
        padding: '80px 0',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.08) 0%, transparent 70%)'
        }} />

        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 60px',
          position: 'relative',
          zIndex: 2
        }}>
          <h3 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '300',
            color: 'white',
            marginBottom: '24px',
            fontFamily: 'var(--font-spectral)'
          }}>
            Réservez dès maintenant
          </h3>

          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '40px',
            lineHeight: 1.6
          }}>
            Ne manquez pas cette programmation exceptionnelle. Places limitées.
          </p>

          <Link
            href="https://billetterie-externe.com/maitrise-cathedrale"
            target="_blank"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '16px',
              padding: '18px 36px',
              background: 'linear-gradient(135deg, #D4AF37 0%, #D4AF37dd 100%)',
              color: 'white',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem',
              transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              boxShadow: '0 12px 40px rgba(212, 175, 55, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
              border: '1px solid rgba(212, 175, 55, 0.6)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(212, 175, 55, 0.5), inset 0 1px 0 rgba(255,255,255,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(212, 175, 55, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)';
            }}
          >
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)',
              pointerEvents: 'none'
            }} />
            <span style={{ position: 'relative', zIndex: 1 }}>Billetterie officielle</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ position: 'relative', zIndex: 1 }}>
              <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="padding: 0 60px"] {
            padding: 0 20px !important;
          }

          div[style*="flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'"] {
            flex-direction: column !important;
          }

          div[style*="padding: index % 2 === 0 ? '0 80px 0 0' : '0 0 0 80px'"] {
            padding: 0 !important;
            margin-bottom: 30px;
          }

          div[style*="padding: index % 2 === 0 ? '0 0 0 80px' : '0 80px 0 0'"] {
            padding: 0 !important;
          }

          div[style*="height: 85vh"] {
            height: 70vh !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FASConcerts_V1_Cinematic_Perfect;