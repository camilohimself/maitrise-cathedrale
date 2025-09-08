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
      backgroundColor: '#000'
    }}>
      {/* Background Image avec Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1
      }}>
        <Image
          src="/images/hero-bg.jpg"
          alt="Cathédrale de Sion"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          priority
        />
        {/* Gradient Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.7) 100%)'
        }}></div>
      </div>

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        textAlign: 'center',
        color: '#fff'
      }}>
        {/* Subtitle */}
        <p style={{
          fontSize: '18px',
          fontWeight: '500',
          color: '#D2AB5F',
          marginBottom: '20px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          fontFamily: 'var(--font-family)',
          animation: 'fadeInUp 0.8s ease-out'
        }}>
          La Maîtrise de la Cathédrale de Sion
        </p>

        {/* Main Title */}
        <h1 style={{
          fontSize: 'clamp(36px, 5vw, 56px)',
          fontWeight: '800',
          lineHeight: '1.2',
          marginBottom: '30px',
          fontFamily: 'var(--font-family)',
          animation: 'fadeInUp 0.8s ease-out 0.2s both'
        }}>
          Voix d&apos;exception<br />
          au cœur de la Cathédrale
        </h1>

        {/* Description */}
        <p style={{
          fontSize: '20px',
          fontWeight: '400',
          lineHeight: '1.6',
          maxWidth: '700px',
          margin: '0 auto 40px',
          color: 'rgba(255, 255, 255, 0.9)',
          fontFamily: 'var(--font-family)',
          animation: 'fadeInUp 0.8s ease-out 0.4s both'
        }}>
          De jeunes chanteurs passionnés, formés dès le plus jeune âge, 
          unissent leurs voix pour faire vibrer la cathédrale au rythme du chant sacré.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          animation: 'fadeInUp 0.8s ease-out 0.6s both'
        }}>
          <a 
            href="#agenda"
            style={{
              padding: '14px 32px',
              backgroundColor: '#D2AB5F',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              display: 'inline-block',
              fontFamily: 'var(--font-family)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(210, 171, 95, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Découvrir nos concerts
          </a>
          
          <a 
            href="#maitrise"
            style={{
              padding: '14px 32px',
              backgroundColor: 'transparent',
              border: '2px solid #fff',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              display: 'inline-block',
              fontFamily: 'var(--font-family)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#fff';
              e.currentTarget.style.color = '#000';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            En savoir plus
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2,
        animation: 'bounce 2s infinite'
      }}>
        <svg 
          width="30" 
          height="50" 
          viewBox="0 0 30 50" 
          fill="none"
          style={{ cursor: 'pointer' }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <rect x="1" y="1" width="28" height="48" rx="14" stroke="#D2AB5F" strokeWidth="2"/>
          <circle cx="15" cy="15" r="4" fill="#D2AB5F" style={{
            animation: 'scrollDown 2s infinite'
          }}/>
        </svg>
      </div>

      {/* Animations */}
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
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }

        @keyframes scrollDown {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(20px);
            opacity: 0.5;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;