'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroV2Cinematique() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1340 50%, #2a2050 100%)',
      padding: '6rem 2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Badge version */}
      <div style={{
        position: 'fixed',
        top: '2rem',
        left: '2rem',
        background: '#D4A574',
        color: '#1a1340',
        padding: '8px 20px',
        borderRadius: '30px',
        fontFamily: 'var(--font-outfit)',
        fontSize: '0.85rem',
        fontWeight: '600',
        zIndex: 1000
      }}>
        VERSION 2 - CINÉMATIQUE
      </div>

      {/* Effet de lumière */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '800px',
        background: 'radial-gradient(circle, rgba(212, 165, 116, 0.15) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      {/* Logo monumental avec glow */}
      <div style={{
        position: 'relative',
        width: '600px',
        height: '600px',
        marginBottom: '3rem',
        filter: 'drop-shadow(0 0 80px rgba(212, 165, 116, 0.4))'
      }}>
        <Image
          src="/images/logo-mc-negatif.png"
          alt="Maîtrise Cathédrale de Sion"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* Titre cinématique */}
      <h1 style={{
        fontFamily: 'var(--font-spectral)',
        fontSize: '4.5rem',
        fontWeight: '800',
        color: 'white',
        textAlign: 'center',
        marginBottom: '1rem',
        letterSpacing: '-0.03em',
        lineHeight: 1.1,
        textShadow: '0 4px 30px rgba(0, 0, 0, 0.5)'
      }}>
        Maîtrise Cathédrale de Sion
      </h1>

      {/* Baseline lumineuse */}
      <p style={{
        fontFamily: 'var(--font-outfit)',
        fontSize: '1.8rem',
        fontWeight: '300',
        color: '#D4A574',
        textAlign: 'center',
        marginBottom: '4rem',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        textShadow: '0 0 30px rgba(212, 165, 116, 0.5)'
      }}>
        Voix d'exception au cœur de la Cathédrale
      </p>

      {/* CTAs dramatiques */}
      <div style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'center'
      }}>
        <Link
          href="/soutenir/amis-maitrise"
          style={{
            padding: '20px 50px',
            background: 'linear-gradient(135deg, #D4A574 0%, #FFA500 100%)',
            color: '#1a1340',
            borderRadius: '50px',
            fontFamily: 'var(--font-outfit)',
            fontWeight: '700',
            fontSize: '1.2rem',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            display: 'inline-block',
            boxShadow: '0 10px 40px rgba(212, 165, 116, 0.4)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 15px 50px rgba(212, 165, 116, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 10px 40px rgba(212, 165, 116, 0.4)';
          }}
        >
          Devenir Ami
        </Link>

        <Link
          href="/fas"
          style={{
            padding: '20px 50px',
            background: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            border: '2px solid rgba(212, 165, 116, 0.5)',
            borderRadius: '50px',
            fontFamily: 'var(--font-outfit)',
            fontWeight: '600',
            fontSize: '1.2rem',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            display: 'inline-block',
            backdropFilter: 'blur(10px)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(212, 165, 116, 0.2)';
            e.currentTarget.style.borderColor = '#D4A574';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.borderColor = 'rgba(212, 165, 116, 0.5)';
          }}
        >
          Festival d'Art Sacré
        </Link>
      </div>
    </section>
  );
}
