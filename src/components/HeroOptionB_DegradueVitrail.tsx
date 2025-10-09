'use client';

import React from 'react';
import Image from 'next/image';

/**
 * OPTION B : DÉGRADÉ CATHÉDRALE (Effet vitrail)
 * - Dégradé vertical navy → transparent → navy foncé
 * - Touches de couleur subtiles (rouge, violet, or)
 * - Textes blancs avec halos dorés
 * - Inspiration : lumière de vitraux, architecture gothique
 */
const HeroOptionB_DegradueVitrail = () => {
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
            filter: 'brightness(0.8) contrast(1.1) saturate(1.1)',
          }}
          priority
          quality={90}
        />

        {/* Dégradé vertical cathédrale */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(180deg,
              rgba(26, 19, 64, 0.8) 0%,
              rgba(26, 19, 64, 0.3) 30%,
              transparent 50%,
              rgba(0, 0, 0, 0.4) 70%,
              rgba(26, 19, 64, 0.85) 100%
            )
          `,
        }} />

        {/* Touches de couleur vitrail (rouge, violet, or) */}
        <div style={{
          position: 'absolute',
          top: '15%',
          right: '20%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(227, 50, 65, 0.15) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '15%',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(107, 70, 193, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }} />
        <div style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(212, 165, 116, 0.1) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }} />

        {/* Lignes architecturales verticales */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '2px',
          height: '100%',
          background: 'linear-gradient(180deg, transparent 0%, rgba(212, 165, 116, 0.25) 50%, transparent 100%)',
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

        {/* Titre blanc avec halo doré */}
        <h1 style={{
          fontFamily: 'var(--font-spectral)',
          fontSize: 'clamp(2.2rem, 6vw, 5rem)',
          fontWeight: '800',
          color: '#FFFFFF',
          marginBottom: '0.75rem',
          lineHeight: 1,
          letterSpacing: '-0.02em',
          textShadow: '0 0 40px rgba(212, 165, 116, 0.4), 0 4px 20px rgba(0, 0, 0, 0.6), 0 2px 8px rgba(0, 0, 0, 0.4)',
          whiteSpace: 'nowrap',
        }}>
          Maîtrise Cathédrale
        </h1>

        {/* "de Sion" doré avec halo intense */}
        <div style={{
          fontFamily: 'var(--font-spectral)',
          fontSize: 'clamp(1.76rem, 4.8vw, 4rem)',
          fontWeight: '800',
          color: 'var(--color-gold)',
          marginBottom: '1.5rem',
          textShadow: '0 0 30px rgba(212, 165, 116, 0.8), 0 0 60px rgba(212, 165, 116, 0.4), 0 4px 15px rgba(0, 0, 0, 0.5)',
          letterSpacing: '-0.01em',
        }}>
          de Sion
        </div>

        {/* Sous-titre blanc lumineux */}
        <p style={{
          fontFamily: 'var(--font-outfit)',
          fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
          fontWeight: '300',
          color: 'rgba(255, 255, 255, 0.95)',
          maxWidth: '700px',
          margin: '0 auto 3rem',
          lineHeight: 1.6,
          textShadow: '0 0 20px rgba(255, 255, 255, 0.3), 0 2px 10px rgba(0, 0, 0, 0.5)',
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

      {/* Styles mobiles responsive */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            min-height: 80vh !important;
            height: auto !important;
            padding: 120px 1.5rem 80px !important;
          }
        }

        @media (max-width: 640px) {
          section {
            min-height: 70vh !important;
            padding: 100px 1rem 60px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroOptionB_DegradueVitrail;
