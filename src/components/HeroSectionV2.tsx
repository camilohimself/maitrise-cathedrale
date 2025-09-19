'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HeroSectionV2 = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#FAFAFA',
      overflow: 'hidden',
    }}>
      {/* Grid layout sophistiqué */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 3rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
        minHeight: '80vh',
      }}>
        
        {/* Colonne gauche - Contenu */}
        <div style={{
          position: 'relative',
          zIndex: 2,
        }}>
          
          {/* Numérotation élégante */}
          <div style={{
            position: 'absolute',
            top: '-2rem',
            left: 0,
            fontFamily: 'var(--font-spectral)',
            fontSize: '8rem',
            fontWeight: '200',
            color: 'rgba(227, 50, 65, 0.1)',
            lineHeight: 1,
            userSelect: 'none',
            zIndex: -1,
          }}>
            01
          </div>

          {/* Badge subtil */}
          <div style={{
            display: 'inline-block',
            padding: '4px 16px',
            backgroundColor: 'rgba(212, 165, 116, 0.1)',
            color: 'var(--color-red)',
            fontFamily: 'var(--font-outfit)',
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '2rem',
            opacity: 0,
            animation: 'fadeIn 0.8s ease-out 0.5s forwards',
          }}>
            École de Musique
          </div>

          {/* Titre épuré */}
          <h1 style={{
            fontFamily: 'var(--font-spectral)',
            fontSize: 'clamp(3.5rem, 6vw, 5.5rem)',
            fontWeight: '300',
            color: 'var(--color-red)',
            marginBottom: '1.5rem',
            lineHeight: 1.1,
            letterSpacing: '-2px',
            opacity: 0,
            animation: 'slideInUp 1s ease-out 0.2s forwards',
          }}>
            Maîtrise de la
            <br />
            <span style={{ fontWeight: '700' }}>Cathédrale</span>
          </h1>

          {/* Sous-titre raffiné */}
          <p style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '1.3rem',
            fontWeight: '300',
            color: '#666',
            maxWidth: '500px',
            marginBottom: '3rem',
            lineHeight: 1.7,
            opacity: 0,
            animation: 'slideInUp 1s ease-out 0.4s forwards',
          }}>
            Formation musicale et spirituelle d'exception dans le cadre unique 
            de la Cathédrale Notre-Dame de Sion.
          </p>

          {/* Statistiques élégantes */}
          <div style={{
            display: 'flex',
            gap: '3rem',
            marginBottom: '3rem',
            opacity: 0,
            animation: 'slideInUp 1s ease-out 0.6s forwards',
          }}>
            {[
              { number: '2004', label: 'Fondation' },
              { number: '150+', label: 'Concerts' },
              { number: '20ème', label: 'FAS Edition' },
            ].map((stat, index) => (
              <div key={index} style={{ textAlign: 'left' }}>
                <div style={{
                  fontFamily: 'var(--font-spectral)',
                  fontSize: '2rem',
                  fontWeight: '600',
                  color: 'var(--color-red)',
                  lineHeight: 1,
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontFamily: 'var(--font-outfit)',
                  fontSize: '0.9rem',
                  color: 'var(--color-gold)',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginTop: '4px',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA minimaliste */}
          <div style={{
            opacity: 0,
            animation: 'slideInUp 1s ease-out 0.8s forwards',
          }}>
            <a 
              href="https://billetterie-externe.com/maitrise-cathedrale"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '16px 0',
                color: 'var(--color-red)',
                textDecoration: 'none',
                fontFamily: 'var(--font-outfit)',
                fontWeight: '500',
                fontSize: '1rem',
                borderBottom: '2px solid transparent',
                transition: 'all 0.3s ease',
                transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderBottomColor = 'var(--color-red)';
                e.currentTarget.style.paddingLeft = '20px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderBottomColor = 'transparent';
                e.currentTarget.style.paddingLeft = '0px';
              }}
            >
              <span>Découvrir nos événements</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '12px', transition: 'transform 0.3s ease' }}>
                <path d="M7 17l10-10M17 7H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Colonne droite - Image avec effets */}
        <div style={{
          position: 'relative',
          height: '70vh',
          transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
          transition: 'transform 0.3s ease',
        }}>
          
          {/* Cadre décoratif */}
          <div style={{
            position: 'absolute',
            top: '-20px',
            left: '-20px',
            right: '20px',
            bottom: '20px',
            border: '1px solid rgba(212, 165, 116, 0.3)',
            zIndex: 1,
          }} />

          {/* Image principale */}
          <div style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            opacity: 0,
            animation: 'fadeInScale 1.2s ease-out 0.3s forwards',
          }}>
            <Image
              src="/images/hero-choir.jpg"
              alt="Maîtrise de la Cathédrale"
              fill
              style={{
                objectFit: 'cover',
                filter: 'grayscale(20%) contrast(1.1)',
              }}
              priority
              quality={90}
            />
            
            {/* Overlay subtil */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(227, 50, 65, 0.1) 0%, transparent 100%)',
            }} />
          </div>

          {/* Élément décoratif flottant */}
          <div style={{
            position: 'absolute',
            bottom: '2rem',
            right: '-1rem',
            width: '120px',
            height: '120px',
            background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.8) 0%, rgba(227, 50, 65, 0.8) 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            fontFamily: 'var(--font-outfit)',
            fontSize: '0.9rem',
            fontWeight: '600',
            textAlign: 'center',
            lineHeight: 1.2,
            transform: `rotate(${mousePosition.x * 0.5}deg)`,
            transition: 'transform 0.3s ease',
            opacity: 0,
            animation: 'fadeInRotate 1s ease-out 1s forwards',
          }}>
            Excellence<br />Musicale
          </div>
        </div>
      </div>

      {/* Lignes décoratives */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '100px',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)',
        opacity: 0.5,
      }} />

      <div style={{
        position: 'absolute',
        bottom: '30%',
        right: '10%',
        width: '80px',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--color-red), transparent)',
        opacity: 0.3,
      }} />

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(1.05); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes fadeInRotate {
          from { opacity: 0; transform: rotate(-10deg); }
          to { opacity: 1; transform: rotate(0deg); }
        }

        @media (max-width: 768px) {
          section > div {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            text-align: center !important;
            padding: 0 1.5rem !important;
          }
          
          section > div > div:first-child {
            order: 2;
          }
          
          section > div > div:last-child {
            order: 1;
            height: 40vh !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSectionV2;