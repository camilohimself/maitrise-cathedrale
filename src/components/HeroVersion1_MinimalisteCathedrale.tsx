'use client';

import React from 'react';
import Image from 'next/image';

/**
 * VERSION 1 : MINIMALISTE CATHÉDRALE
 * - Tons clairs et aérés (blanc cassé, beige, or subtil)
 * - Typographie monumentale avec beaucoup d'espace
 * - Image lumineuse avec overlay léger
 * - Inspiration : architecture gothique, lumière naturelle
 */
const HeroVersion1_MinimalisteCathedrale = () => {
  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: '#FAF9F7',
    }}>
      {/* OPTION A : Overlay sombre élégant */}
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
            filter: 'brightness(0.85) contrast(1.05)',
          }}
          priority
          quality={90}
        />

        {/* Overlay navy/noir subtil et élégant */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(26, 19, 64, 0.7) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(26, 19, 64, 0.75) 100%)',
        }} />

        {/* Lignes architecturales dorées plus visibles */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1px',
          height: '100%',
          background: 'linear-gradient(180deg, transparent 0%, rgba(212, 165, 116, 0.3) 50%, transparent 100%)',
        }} />
        <div style={{
          position: 'absolute',
          top: 0,
          left: '30%',
          width: '1px',
          height: '100%',
          background: 'linear-gradient(180deg, transparent 0%, rgba(212, 165, 116, 0.2) 50%, transparent 100%)',
        }} />
        <div style={{
          position: 'absolute',
          top: 0,
          left: '70%',
          width: '1px',
          height: '100%',
          background: 'linear-gradient(180deg, transparent 0%, rgba(212, 165, 116, 0.2) 50%, transparent 100%)',
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

        {/* Badge doré sur fond semi-transparent */}
        <div style={{
          display: 'inline-block',
          padding: '0.5rem 1.5rem',
          marginBottom: '2rem',
          border: '1px solid rgba(212, 165, 116, 0.5)',
          borderRadius: '30px',
          fontFamily: 'var(--font-outfit)',
          fontSize: '0.75rem',
          fontWeight: '600',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--color-gold)',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
        }}>
          Fondée en 2004
        </div>

        {/* Titre blanc pur - Une seule ligne */}
        <h1 style={{
          fontFamily: 'var(--font-spectral)',
          fontSize: 'clamp(2.2rem, 6vw, 5rem)',
          fontWeight: '800',
          color: '#FFFFFF',
          marginBottom: '0.75rem',
          lineHeight: 1,
          letterSpacing: '-0.02em',
          textShadow: '0 4px 20px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(0, 0, 0, 0.3)',
          whiteSpace: 'nowrap',
        }}>
          Maîtrise Cathédrale
        </h1>

        {/* "de Sion" doré lumineux - 20% plus petit */}
        <div style={{
          fontFamily: 'var(--font-spectral)',
          fontSize: 'clamp(1.76rem, 4.8vw, 4rem)',
          fontWeight: '800',
          background: 'linear-gradient(135deg, var(--color-gold) 0%, #E6C068 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          display: 'inline-block',
          marginBottom: '1.5rem',
          textShadow: '0 4px 20px rgba(212, 165, 116, 0.5)',
          letterSpacing: '-0.01em',
          filter: 'drop-shadow(0 2px 8px rgba(212, 165, 116, 0.5))',
        }}>
          de Sion
        </div>

        {/* Sous-titre blanc élégant */}
        <p style={{
          fontFamily: 'var(--font-outfit)',
          fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
          fontWeight: '300',
          color: 'rgba(255, 255, 255, 0.95)',
          maxWidth: '700px',
          margin: '0 auto 3rem',
          lineHeight: 1.6,
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
        }}>
          Voix d'exception au cœur du Valais
        </p>

        {/* CTAs identiques version actuelle */}
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
              position: 'relative',
              overflow: 'hidden',
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

      {/* Scroll indicator minimaliste */}
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
        opacity: 0.4,
      }}>
        <div style={{
          fontFamily: 'var(--font-outfit)',
          fontSize: '0.7rem',
          fontWeight: '400',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--color-navy)',
        }}>
          Défiler
        </div>
        <div style={{
          width: '1px',
          height: '30px',
          backgroundColor: 'var(--color-navy)',
          animation: 'scrollLine 2s ease-in-out infinite',
        }} />
      </div>

      <style jsx>{`
        @keyframes scrollLine {
          0%, 100% { opacity: 0; transform: translateY(-10px); }
          50% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default HeroVersion1_MinimalisteCathedrale;
