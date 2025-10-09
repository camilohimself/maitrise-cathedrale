'use client';

import React from 'react';
import Image from 'next/image';

/**
 * VERSION 2 : BAROQUE DORÉ
 * - Richesse visuelle avec ornements dorés
 * - Overlay sombre avec accents lumineux
 * - Typographie classique avec empattements
 * - Inspiration : orgues baroques, retables dorés, lumière de vitraux
 */
const HeroVersion2_BaroqueDore = () => {
  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: '#0A0A0A',
    }}>
      {/* Image de fond avec traitement dramatique */}
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
            filter: 'brightness(0.7) contrast(1.1) saturate(1.2)',
          }}
          priority
          quality={85}
        />

        {/* Overlay baroque avec dégradés riches */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.6) 70%),
            linear-gradient(135deg,
              rgba(26, 19, 64, 0.7) 0%,
              rgba(0, 0, 0, 0.85) 50%,
              rgba(212, 165, 116, 0.3) 100%
            )
          `,
        }} />

        {/* Motifs ornementaux dorés */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, var(--color-gold) 50%, transparent 100%)',
          opacity: 0.5,
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, var(--color-gold) 50%, transparent 100%)',
          opacity: 0.5,
        }} />

        {/* Halo lumineux doré */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(212, 165, 116, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }} />
      </div>

      {/* Contenu principal */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        maxWidth: '950px',
        padding: '0 2rem',
        width: '100%',
      }}>

        {/* Ornement supérieur */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '2rem',
        }}>
          <div style={{
            width: '60px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, var(--color-gold) 100%)',
          }} />
          <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-gold)" opacity="0.8">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <div style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '0.7rem',
            fontWeight: '500',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-gold)',
          }}>
            Depuis 2004
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-gold)" opacity="0.8">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <div style={{
            width: '60px',
            height: '1px',
            background: 'linear-gradient(90deg, var(--color-gold) 0%, transparent 100%)',
          }} />
        </div>

        {/* Titre baroque avec serif élégant */}
        <h1 style={{
          fontFamily: 'var(--font-spectral)',
          fontSize: 'clamp(2.8rem, 7vw, 6.5rem)',
          fontWeight: '600',
          color: '#FFFFFF',
          marginBottom: '1.5rem',
          lineHeight: 1.15,
          letterSpacing: '0.01em',
          textShadow: '0 4px 30px rgba(212, 165, 116, 0.5), 0 2px 10px rgba(0, 0, 0, 0.8)',
        }}>
          <span style={{
            display: 'block',
            fontSize: '0.55em',
            fontWeight: '300',
            fontStyle: 'italic',
            color: 'var(--color-gold)',
            marginBottom: '0.5rem',
            letterSpacing: '0.05em',
          }}>
            Maîtrise de la
          </span>
          Cathédrale de Sion
        </h1>

        {/* Citation latine dorée */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '2.5rem',
        }}>
          <div style={{
            width: '40px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(212, 165, 116, 0.6) 100%)',
          }} />
          <p style={{
            fontFamily: 'var(--font-spectral)',
            fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
            fontWeight: '400',
            fontStyle: 'italic',
            color: 'rgba(212, 165, 116, 0.95)',
            lineHeight: 1.6,
          }}>
            Musica Sacra • Vox Caelestis
          </p>
          <div style={{
            width: '40px',
            height: '1px',
            background: 'linear-gradient(90deg, rgba(212, 165, 116, 0.6) 0%, transparent 100%)',
          }} />
        </div>

        {/* Sous-titre descriptif */}
        <p style={{
          fontFamily: 'var(--font-outfit)',
          fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
          fontWeight: '300',
          color: 'rgba(255, 255, 255, 0.85)',
          maxWidth: '700px',
          margin: '0 auto 3rem',
          lineHeight: 1.7,
        }}>
          École de chant liturgique, Cantates de Bach et Festival d'Art Sacré au cœur des Alpes valaisannes
        </p>

        {/* CTAs baroques */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <a
            href="/maitrise"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '17px 40px',
              background: 'linear-gradient(135deg, var(--color-gold) 0%, #C19660 100%)',
              color: 'var(--color-navy)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '4px',
              fontFamily: 'var(--font-outfit)',
              fontWeight: '600',
              fontSize: '0.95rem',
              letterSpacing: '0.03em',
              textDecoration: 'none',
              transition: 'all 0.4s ease',
              boxShadow: '0 4px 20px rgba(212, 165, 116, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(212, 165, 116, 0.5)';
              e.currentTarget.style.background = 'linear-gradient(135deg, #E6C068 0%, var(--color-gold) 100%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(212, 165, 116, 0.3)';
              e.currentTarget.style.background = 'linear-gradient(135deg, var(--color-gold) 0%, #C19660 100%)';
            }}
          >
            La Maîtrise
          </a>

          <a
            href="/fas"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '17px 40px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: '#FFFFFF',
              border: '1px solid rgba(212, 165, 116, 0.5)',
              borderRadius: '4px',
              fontFamily: 'var(--font-outfit)',
              fontWeight: '600',
              fontSize: '0.95rem',
              letterSpacing: '0.03em',
              textDecoration: 'none',
              transition: 'all 0.4s ease',
              backdropFilter: 'blur(10px)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.backgroundColor = 'rgba(212, 165, 116, 0.2)';
              e.currentTarget.style.borderColor = 'var(--color-gold)';
              e.currentTarget.style.color = 'var(--color-gold)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(212, 165, 116, 0.5)';
              e.currentTarget.style.color = '#FFFFFF';
            }}
          >
            Festival 2025-2026
          </a>
        </div>
      </div>

      {/* Ornement inférieur avec scroll */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.75rem',
        opacity: 0.7,
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2">
          <path d="M12 5v14m0 0l-5-5m5 5l5-5" />
        </svg>
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(180deg, var(--color-gold) 0%, transparent 100%)',
          animation: 'scrollGlow 2s ease-in-out infinite',
        }} />
      </div>

      <style jsx>{`
        @keyframes scrollGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default HeroVersion2_BaroqueDore;
