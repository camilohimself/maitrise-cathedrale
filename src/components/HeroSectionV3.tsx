'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HeroSectionV3 = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Auto-rotate sections
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % 3);
    }, 4000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const sections = [
    {
      title: "École Maîtrisienne",
      subtitle: "Formation d'excellence pour jeunes talents",
      image: "/images/hero-choir.jpg"
    },
    {
      title: "Ensemble Vocal",
      subtitle: "Performances d'art sacré d'exception",
      image: "/images/hero-choir.jpg"
    },
    {
      title: "Festival d'Art Sacré",
      subtitle: "20 ans d'émotion et de spiritualité",
      image: "/images/hero-choir.jpg"
    }
  ];

  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      backgroundColor: '#0A0A0A',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      
      {/* Architecture de Cathédrale - Arrière plan */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
      }}>
        {/* Colonnes gothiques stylisées */}
        <div style={{
          position: 'absolute',
          left: '10%',
          top: 0,
          bottom: 0,
          width: '2px',
          background: 'linear-gradient(180deg, transparent 0%, rgba(184, 134, 11, 0.3) 20%, rgba(184, 134, 11, 0.6) 50%, rgba(184, 134, 11, 0.3) 80%, transparent 100%)',
          transform: `translateY(${scrollY * 0.3}px)`,
        }} />
        
        <div style={{
          position: 'absolute',
          right: '10%',
          top: 0,
          bottom: 0,
          width: '2px',
          background: 'linear-gradient(180deg, transparent 0%, rgba(139, 0, 0, 0.3) 20%, rgba(139, 0, 0, 0.6) 50%, rgba(139, 0, 0, 0.3) 80%, transparent 100%)',
          transform: `translateY(${scrollY * -0.2}px)`,
        }} />

        {/* Arc gothique central */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '300px',
          border: '1px solid rgba(184, 134, 11, 0.2)',
          borderRadius: '150px 150px 0 0',
          opacity: 0.6,
        }} />

        {/* Image de fond avec transition */}
        <div style={{
          position: 'absolute',
          inset: 0,
          transition: 'opacity 1s ease-in-out',
        }}>
          <Image
            src={sections[currentSection].image}
            alt="Cathédrale"
            fill
            style={{
              objectFit: 'cover',
              opacity: 0.3,
              transform: `scale(${1 + scrollY * 0.0002})`,
              transition: 'transform 0.1s ease-out',
            }}
            priority
            quality={85}
          />
        </div>

        {/* Overlay architectural */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 70%),
            linear-gradient(135deg, rgba(139, 0, 0, 0.1) 0%, transparent 50%, rgba(184, 134, 11, 0.1) 100%)
          `,
        }} />
      </div>

      {/* Contenu principal avec transition narrative */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        maxWidth: '900px',
        padding: '0 2rem',
        width: '100%',
      }}>
        
        {/* Logo/Symbole central */}
        <div style={{
          width: '120px',
          height: '120px',
          margin: '0 auto 3rem',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(184, 134, 11, 0.2) 0%, rgba(139, 0, 0, 0.2) 100%)',
          border: '2px solid rgba(184, 134, 11, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          animation: 'pulse 3s infinite',
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            background: 'linear-gradient(45deg, var(--color-gold), #8B0000)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            fontFamily: 'var(--font-spectral)',
            fontSize: '1.5rem',
            fontWeight: '700',
          }}>
            M
          </div>
          
          {/* Anneaux rotatifs */}
          <div style={{
            position: 'absolute',
            inset: '-10px',
            border: '1px solid rgba(184, 134, 11, 0.3)',
            borderRadius: '50%',
            animation: 'rotate 20s linear infinite',
          }} />
        </div>

        {/* Titre principal animé */}
        <h1 style={{
          fontFamily: 'var(--font-spectral)',
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: '400',
          color: '#FFFFFF',
          marginBottom: '1rem',
          lineHeight: 1.2,
          letterSpacing: '1px',
          textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
          opacity: 0,
          animation: 'fadeInUp 1.5s ease-out 0.5s forwards',
        }}>
          MAÎTRISE DE LA CATHÉDRALE
          <br />
          <span style={{
            fontSize: '0.7em',
            color: 'var(--color-gold)',
            fontWeight: '300',
            letterSpacing: '3px',
          }}>
            NOTRE-DAME DE SION
          </span>
        </h1>

        {/* Section rotative avec contenu narratif */}
        <div style={{
          height: '120px',
          marginBottom: '3rem',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {sections.map((section, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: currentSection === index ? 1 : 0,
                transform: currentSection === index ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 1s ease-in-out',
              }}
            >
              <h2 style={{
                fontFamily: 'var(--font-spectral)',
                fontSize: '1.8rem',
                fontWeight: '600',
                color: 'var(--color-gold)',
                marginBottom: '0.5rem',
                textAlign: 'center',
              }}>
                {section.title}
              </h2>
              <p style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: '1.1rem',
                fontWeight: '300',
                color: 'rgba(255, 255, 255, 0.8)',
                textAlign: 'center',
                maxWidth: '600px',
              }}>
                {section.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation par points */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '3rem',
          opacity: 0,
          animation: 'fadeIn 1s ease-out 1.2s forwards',
        }}>
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSection(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: '2px solid rgba(184, 134, 11, 0.4)',
                background: currentSection === index ? 'var(--color-gold)' : 'transparent',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>

        {/* CTAs avec design architectural */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          opacity: 0,
          animation: 'fadeInUp 1s ease-out 1s forwards',
        }}>
          <a 
            href="/maitrise"
            style={{
              display: 'inline-block',
              padding: '16px 32px',
              backgroundColor: 'transparent',
              color: 'var(--color-gold)',
              border: '2px solid var(--color-gold)',
              fontFamily: 'var(--font-outfit)',
              fontWeight: '500',
              fontSize: '0.95rem',
              textDecoration: 'none',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.4s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-gold)';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--color-gold)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Découvrir la Maîtrise
          </a>

          <a 
            href="https://billetterie-externe.com/maitrise-cathedrale"
            style={{
              display: 'inline-block',
              padding: '16px 32px',
              backgroundColor: '#8B0000',
              color: '#FFFFFF',
              border: '2px solid #8B0000',
              fontFamily: 'var(--font-outfit)',
              fontWeight: '500',
              fontSize: '0.95rem',
              textDecoration: 'none',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              position: 'relative',
              transition: 'all 0.4s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#8B0000';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#8B0000';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Nos Événements
          </a>
        </div>
      </div>

      {/* Éléments décoratifs flottants */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '5%',
        width: '4px',
        height: '60px',
        background: 'linear-gradient(180deg, transparent, var(--color-gold), transparent)',
        transform: `translateY(${Math.sin(Date.now() * 0.001) * 10}px)`,
        opacity: 0.4,
      }} />

      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '8%',
        width: '30px',
        height: '30px',
        border: '1px solid rgba(139, 0, 0, 0.3)',
        transform: `rotate(${scrollY * 0.1}deg)`,
        opacity: 0.5,
      }} />

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 30px rgba(184, 134, 11, 0.3); }
          50% { transform: scale(1.05); box-shadow: 0 0 40px rgba(184, 134, 11, 0.5); }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          section > div:last-child > div:last-child {
            flex-direction: column !important;
            gap: 1rem !important;
          }
          
          section > div:last-child > div:last-child a {
            width: 100% !important;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSectionV3;