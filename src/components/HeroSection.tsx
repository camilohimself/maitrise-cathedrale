'use client';

import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: 'var(--color-black)',
    }}>
      {/* Background Image avec Overlay sombre comme maquette */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
      }}>
        <Image
          src="/images/hero-choir.webp"
          alt="Chœur de la Maîtrise en performance"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          priority
          quality={90}
        />
        {/* Overlay gradient sombre pour lisibilité */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(4, 10, 35, 0.4) 0%, rgba(4, 10, 35, 0.6) 50%, rgba(4, 10, 35, 0.8) 100%)',
        }} />
      </div>

      {/* Contenu Hero */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        maxWidth: 'var(--container-max)',
        padding: '0 var(--spacing-lg)',
        width: '100%',
      }}>
        {/* Titre principal XXL comme maquette */}
        <h1 style={{
          fontFamily: 'var(--font-spectral)',
          fontSize: 'var(--text-hero)',
          fontWeight: 'var(--font-extrabold)',
          color: 'var(--color-white)',
          marginBottom: 'var(--spacing-lg)',
          lineHeight: 1.1,
          letterSpacing: '-2px',
          animation: 'fadeInUp 0.8s ease-out',
        }}>
          Festival<br />
          d&apos;Art Sacré
        </h1>

        {/* Sous-titre */}
        <p style={{
          fontFamily: 'var(--font-outfit)',
          fontSize: 'var(--text-large)',
          fontWeight: 'var(--font-light)',
          color: 'var(--color-white)',
          opacity: 0.9,
          maxWidth: '600px',
          margin: '0 auto var(--spacing-xl)',
          lineHeight: 1.6,
          animation: 'fadeInUp 0.8s ease-out 0.2s both',
        }}>
          De novembre à janvier, laissez-vous porter<br />
          par l&apos;émotion des concerts sacrées
        </p>

        {/* Bouton CTA principal */}
        <a 
          href="/fas/programmation"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px 48px',
            backgroundColor: 'var(--color-gold)',
            color: 'var(--color-white)',
            border: 'none',
            borderRadius: 'var(--radius-sm)',
            fontFamily: 'var(--font-outfit)',
            fontWeight: 'var(--font-semibold)',
            fontSize: 'var(--text-base)',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'all var(--transition-base)',
            animation: 'fadeInUp 0.8s ease-out 0.4s both',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
            e.currentTarget.style.boxShadow = 'var(--shadow-gold)';
            e.currentTarget.style.filter = 'brightness(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.filter = 'brightness(1)';
          }}
        >
          Découvrir le programme
        </a>
      </div>

      {/* Indicateur scroll (optionnel) */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2,
        animation: 'bounce 2s infinite',
      }}>
        <svg 
          width="24" 
          height="40" 
          viewBox="0 0 24 40" 
          fill="none"
          style={{ opacity: 0.6 }}
        >
          <rect x="1" y="1" width="22" height="38" rx="11" stroke="var(--color-white)" strokeWidth="2"/>
          <circle cx="12" cy="10" r="3" fill="var(--color-white)">
            <animate attributeName="cy" values="10;20;10" dur="1.5s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(10px);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;