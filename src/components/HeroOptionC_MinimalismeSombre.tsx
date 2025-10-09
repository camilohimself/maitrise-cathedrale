'use client';

import React from 'react';
import Image from 'next/image';

/**
 * OPTION C : MINIMALISME SOMBRE
 * - Overlay noir/navy uniforme mais léger (image visible)
 * - Textes blancs ultra-contrastés
 * - Lignes architecturales dorées plus marquées
 * - Inspiration : musées modernes, épure maximale, contraste fort
 */
const HeroOptionC_MinimalismeSombre = () => {
  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: '#000000',
    }}>
      {/* Image de fond */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
      }}>
        <Image
          src="/images/hero-photo.jpg"
          alt="Maîtrise Cathédrale de Sion"
          fill
          style={{
            objectFit: 'cover',
            filter: 'brightness(0.75) contrast(1.15) grayscale(0.1)',
          }}
          priority
          quality={90}
        />

        {/* Overlay uniforme noir/navy léger */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(10, 10, 15, 0.6)',
        }} />

        {/* Lignes architecturales dorées marquées */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '2px',
          height: '100%',
          background: 'linear-gradient(180deg, transparent 0%, rgba(212, 165, 116, 0.5) 50%, transparent 100%)',
          boxShadow: '0 0 20px rgba(212, 165, 116, 0.3)',
        }} />
        <div style={{
          position: 'absolute',
          top: 0,
          left: '25%',
          width: '1px',
          height: '100%',
          background: 'linear-gradient(180deg, transparent 0%, rgba(212, 165, 116, 0.3) 50%, transparent 100%)',
        }} />
        <div style={{
          position: 'absolute',
          top: 0,
          left: '75%',
          width: '1px',
          height: '100%',
          background: 'linear-gradient(180deg, transparent 0%, rgba(212, 165, 116, 0.3) 50%, transparent 100%)',
        }} />

        {/* Grille subtile en haut et bas */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(212, 165, 116, 0.2) 50%, transparent 100%)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(212, 165, 116, 0.2) 50%, transparent 100%)',
        }} />
      </div>

      {/* Contenu principal */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        maxWidth: '900px',
        padding: '0 2rem',
        width: '100%',
      }}>

        {/* Badge minimaliste */}
        <div style={{
          display: 'inline-block',
          padding: '0.4rem 1.2rem',
          marginBottom: '2rem',
          border: '1px solid rgba(212, 165, 116, 0.6)',
          borderRadius: '2px',
          fontFamily: 'var(--font-outfit)',
          fontSize: '0.7rem',
          fontWeight: '500',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--color-gold)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(10px)',
        }}>
          Est. 2004
        </div>

        {/* Titre blanc ultra-contrasté */}
        <h1 style={{
          fontFamily: 'var(--font-spectral)',
          fontSize: 'clamp(2.2rem, 6vw, 5rem)',
          fontWeight: '800',
          color: '#FFFFFF',
          marginBottom: '0.75rem',
          lineHeight: 1,
          letterSpacing: '-0.02em',
          textShadow: '0 6px 30px rgba(0, 0, 0, 0.8), 0 3px 12px rgba(0, 0, 0, 0.6)',
          whiteSpace: 'nowrap',
        }}>
          Maîtrise Cathédrale
        </h1>

        {/* "de Sion" doré vif */}
        <div style={{
          fontFamily: 'var(--font-spectral)',
          fontSize: 'clamp(1.76rem, 4.8vw, 4rem)',
          fontWeight: '800',
          color: 'var(--color-gold)',
          marginBottom: '1.5rem',
          textShadow: '0 4px 20px rgba(212, 165, 116, 0.6), 0 2px 10px rgba(0, 0, 0, 0.8)',
          letterSpacing: '-0.01em',
        }}>
          de Sion
        </div>

        {/* Ligne horizontale dorée */}
        <div style={{
          width: '80px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, var(--color-gold) 50%, transparent 100%)',
          margin: '2rem auto',
          boxShadow: '0 0 10px rgba(212, 165, 116, 0.4)',
        }} />

        {/* Sous-titre blanc pur */}
        <p style={{
          fontFamily: 'var(--font-outfit)',
          fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
          fontWeight: '300',
          color: '#FFFFFF',
          maxWidth: '700px',
          margin: '0 auto 3rem',
          lineHeight: 1.6,
          textShadow: '0 3px 15px rgba(0, 0, 0, 0.8)',
        }}>
          Voix d'exception au cœur du Valais
        </p>

        {/* CTAs identiques */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <a
            href="/agenda-billetterie"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '18px 40px',
              backgroundColor: '#FFFFFF',
              color: 'var(--color-red)',
              border: '2px solid var(--color-red)',
              borderRadius: '50px',
              fontFamily: 'var(--font-outfit)',
              fontWeight: '600',
              fontSize: '16px',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(227, 50, 65, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(227, 50, 65, 0.2)';
            }}
          >
            <span>Liturgie</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '8px' }}>
              <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <a
            href="/fas"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '18px 40px',
              backgroundColor: 'var(--color-purple)',
              color: '#FFFFFF',
              border: '2px solid var(--color-purple)',
              borderRadius: '50px',
              fontFamily: 'var(--font-outfit)',
              fontWeight: '600',
              fontSize: '16px',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              backdropFilter: 'blur(10px)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
              e.currentTarget.style.backgroundColor = 'var(--color-purple-dark)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(107, 70, 193, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.backgroundColor = 'var(--color-purple)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Festival d'Art Sacré
          </a>
        </div>
      </div>

      {/* Scroll indicator géométrique */}
      <div style={{
        position: 'absolute',
        bottom: '2.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        opacity: 0.5,
      }}>
        <div style={{
          width: '1px',
          height: '40px',
          backgroundColor: 'rgba(212, 165, 116, 0.6)',
          animation: 'scrollFade 2.5s ease-in-out infinite',
        }} />
        <div style={{
          width: '8px',
          height: '8px',
          border: '1px solid var(--color-gold)',
          borderRadius: '50%',
          backgroundColor: 'transparent',
        }} />
      </div>

      <style jsx>{`
        @keyframes scrollFade {
          0%, 100% { opacity: 0.2; height: 30px; }
          50% { opacity: 1; height: 50px; }
        }
      `}</style>
    </section>
  );
};

export default HeroOptionC_MinimalismeSombre;
