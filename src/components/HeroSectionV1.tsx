'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HeroSectionV1 = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: '#000',
    }}>
      {/* Background parallax avec multiple layers */}
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
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'transform 0.1s ease-out',
          }}
          priority
          quality={80}
        />
        
        {/* Overlay dramatique progressif */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(135deg, 
              rgba(227, 50, 65, 0.6) 0%,
              rgba(0, 0, 0, 0.8) 40%,
              rgba(227, 50, 65, 0.4) 70%,
              rgba(0, 0, 0, 0.9) 100%
            )
          `,
        }} />

        {/* Motif géométrique subtil */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at 30% 70%, rgba(212, 165, 116, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 30%, rgba(227, 50, 65, 0.1) 0%, transparent 50%)
          `,
        }} />
      </div>

      {/* Contenu principal */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        maxWidth: '1000px',
        padding: '0 2rem',
        width: '100%',
      }}>
        
        {/* Badge premium */}
        <div style={{
          display: 'inline-block',
          padding: '8px 24px',
          backgroundColor: 'rgba(212, 165, 116, 0.2)',
          border: '1px solid rgba(212, 165, 116, 0.4)',
          borderRadius: '50px',
          color: 'var(--color-gold)',
          fontFamily: 'var(--font-outfit)',
          fontSize: '14px',
          fontWeight: '600',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          marginBottom: '2rem',
          animation: 'glow 2s ease-in-out infinite alternate',
        }}>
          Bienvenue
        </div>

        {/* Titre monumentale */}
        <h1 style={{
          fontFamily: 'var(--font-spectral)',
          fontSize: 'clamp(2.5rem, 7vw, 6rem)',
          fontWeight: '800',
          color: '#FFFFFF',
          marginBottom: '1.5rem',
          lineHeight: 0.95,
          letterSpacing: '-2px',
          textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
          animation: 'fadeInScale 1.2s ease-out',
        }}>
          Bienvenue à la Maîtrise
          <br />
          <span style={{
            background: 'linear-gradient(135deg, var(--color-gold) 0%, #DAA520 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Cathédrale de Sion
          </span>
        </h1>

        {/* Sous-titre avec effet typewriter */}
        <p style={{
          fontFamily: 'var(--font-outfit)',
          fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
          fontWeight: '300',
          color: 'rgba(255, 255, 255, 0.9)',
          maxWidth: '700px',
          margin: '0 auto 3rem',
          lineHeight: 1.6,
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
          animation: 'fadeInUp 1s ease-out 0.3s both',
        }}>
          Voix d'exception au cœur du Valais
          <br />
          <span style={{ color: 'var(--color-gold)', fontWeight: '400' }}>
            École de chant • Ensemble vocal • Art sacré
          </span>
        </p>

        {/* CTAs premium */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          animation: 'fadeInUp 1s ease-out 0.6s both',
        }}>
          <a 
            href="https://billetterie-externe.com/maitrise-cathedrale"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '18px 40px',
              backgroundColor: 'var(--color-red)',
              color: '#FFFFFF',
              border: 'none',
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
            <span>Découvrir nos concerts</span>
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

      {/* Scroll indicator élégant */}
      <div style={{
        position: 'absolute',
        bottom: '3rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2,
        animation: 'bounce 2s infinite',
        cursor: 'pointer',
      }}>
        <div style={{
          width: '2px',
          height: '40px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.2))',
          margin: '0 auto 8px',
        }} />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.7 }}>
          <path d="M7 10l5 5 5-5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: translateY(30px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes glow {
          from { box-shadow: 0 0 20px rgba(212, 165, 116, 0.3); }
          to { box-shadow: 0 0 30px rgba(212, 165, 116, 0.5); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default HeroSectionV1;