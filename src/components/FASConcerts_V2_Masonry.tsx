'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FASConcerts_V2_Masonry = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
      featured: true,
      size: "large"
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
      color: "#8B7BB8",
      size: "medium"
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
      color: "#FF6B9D",
      size: "small"
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
      color: "#D2374C",
      size: "medium"
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
      prestige: true,
      size: "large"
    }
  ];

  const getSizeStyles = (size: string) => {
    switch (size) {
      case 'large':
        return {
          gridColumn: 'span 2',
          gridRow: 'span 2',
          height: '500px'
        };
      case 'medium':
        return {
          gridColumn: 'span 1',
          gridRow: 'span 2',
          height: '400px'
        };
      case 'small':
        return {
          gridColumn: 'span 1',
          gridRow: 'span 1',
          height: '250px'
        };
      default:
        return {
          height: '300px'
        };
    }
  };

  return (
    <section style={{
      backgroundColor: '#0f0f0f',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 20% 80%, rgba(212, 55, 76, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)',
        animation: 'float 20s ease-in-out infinite'
      }} />

      <div className="container">
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{
            display: 'inline-block',
            padding: '12px 30px',
            backgroundColor: 'rgba(212, 175, 55, 0.15)',
            border: '2px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '50px',
            color: '#D4AF37',
            fontFamily: 'var(--font-outfit)',
            fontSize: '14px',
            fontWeight: '700',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '40px'
          }}>
            ✨ CONCERTS EXCEPTIONNELS ✨
          </div>

          <h2 style={{
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: '300',
            color: 'white',
            marginBottom: '30px',
            fontFamily: 'var(--font-spectral)',
            textShadow: '0 4px 20px rgba(0,0,0,0.8)'
          }}>
            Festival d'Art Sacré
          </h2>

          <p style={{
            fontSize: '1.3rem',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Découvrez nos 5 concerts d'exception dans un format visuel immersif
          </p>
        </div>

        {/* Masonry Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '25px',
          maxWidth: '1400px',
          margin: '0 auto',
          gridAutoRows: '200px'
        }}>
          {concerts.map((concert, index) => (
            <div
              key={concert.id}
              style={{
                ...getSizeStyles(concert.size),
                position: 'relative',
                borderRadius: '25px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: hoveredCard === concert.id ? 'scale(1.02) translateY(-10px)' : 'scale(1) translateY(0)',
                boxShadow: hoveredCard === concert.id
                  ? `0 30px 60px ${concert.color}44, 0 0 0 3px ${concert.color}88`
                  : '0 10px 30px rgba(0,0,0,0.5)',
                filter: hoveredCard !== null && hoveredCard !== concert.id ? 'brightness(0.7) blur(1px)' : 'brightness(1) blur(0)',
                zIndex: hoveredCard === concert.id ? 10 : 1
              }}
              onMouseEnter={() => setHoveredCard(concert.id)}
              onMouseLeave={() => setHoveredCard(null)}
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
                    transform: hoveredCard === concert.id ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
              </div>

              {/* Gradient Overlays */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(135deg, ${concert.color}22 0%, transparent 40%, #000000aa 100%)`
              }} />

              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.95) 100%)'
              }} />

              {/* Prestige Badge */}
              {concert.prestige && (
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  backgroundColor: concert.color,
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '700',
                  letterSpacing: '1px',
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
                padding: concert.size === 'large' ? '40px' : concert.size === 'medium' ? '30px' : '20px',
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
                  fontSize: concert.size === 'large' ? '1.8rem' : concert.size === 'medium' ? '1.4rem' : '1.2rem',
                  fontWeight: '600',
                  marginBottom: '8px',
                  lineHeight: 1.2,
                  textShadow: '0 2px 10px rgba(0,0,0,0.8)'
                }}>
                  {concert.title}
                </h3>

                {/* Subtitle */}
                <p style={{
                  fontSize: concert.size === 'large' ? '1.1rem' : '0.95rem',
                  color: concert.color,
                  marginBottom: '12px',
                  fontWeight: '500',
                  textShadow: '0 2px 8px rgba(0,0,0,0.8)'
                }}>
                  {concert.subtitle}
                </p>

                {/* Date/Time */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  fontSize: '0.9rem',
                  opacity: 0.9,
                  marginBottom: concert.size === 'large' ? '15px' : '10px'
                }}>
                  <span style={{
                    padding: '4px 10px',
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    borderRadius: '12px',
                    backdropFilter: 'blur(10px)'
                  }}>
                    📅 {concert.date}
                  </span>
                  <span style={{
                    padding: '4px 10px',
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    borderRadius: '12px',
                    backdropFilter: 'blur(10px)'
                  }}>
                    🕐 {concert.time}
                  </span>
                </div>

                {/* Description (only for large cards) */}
                {concert.size === 'large' && (
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.8)',
                    lineHeight: 1.5,
                    marginBottom: '20px'
                  }}>
                    {concert.description}
                  </p>
                )}

                {/* Hover reveal - More info */}
                <div style={{
                  opacity: hoveredCard === concert.id ? 1 : 0,
                  transform: hoveredCard === concert.id ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  color: concert.color,
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}>
                  <span>Découvrir ce concert</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '8px' }}>
                    <path d="M7 17l10-10M17 7H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Animated border on hover */}
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '25px',
                background: `linear-gradient(45deg, ${concert.color}, transparent, ${concert.color})`,
                padding: '3px',
                opacity: hoveredCard === concert.id ? 1 : 0,
                transition: 'opacity 0.3s ease'
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '22px',
                  backgroundColor: 'transparent'
                }} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Global */}
        <div style={{
          textAlign: 'center',
          marginTop: '80px'
        }}>
          <Link
            href="https://billetterie-externe.com/maitrise-cathedrale"
            target="_blank"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '20px 40px',
              backgroundColor: '#D4AF37',
              color: 'white',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.2rem',
              transition: 'all 0.4s ease',
              boxShadow: '0 8px 30px rgba(212, 175, 55, 0.4)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(212, 175, 55, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(212, 175, 55, 0.4)';
            }}
          >
            <span>Réserver vos places maintenant</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '12px' }}>
              <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* Keyframes for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(1deg); }
          66% { transform: translateY(-10px) rotate(-1deg); }
        }

        @media (max-width: 768px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="gridColumn"] {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
            height: 300px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FASConcerts_V2_Masonry;