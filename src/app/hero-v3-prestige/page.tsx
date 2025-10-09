'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroV3Prestige() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1340 100%)',
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
        VERSION 3 - PRESTIGE
      </div>

      {/* Cadre doré décoratif */}
      <div style={{
        position: 'absolute',
        inset: '4rem',
        border: '2px solid rgba(212, 165, 116, 0.2)',
        borderRadius: '8px',
        pointerEvents: 'none'
      }} />

      {/* Ornements dorés coins */}
      <div style={{
        position: 'absolute',
        top: '3rem',
        left: '3rem',
        width: '60px',
        height: '60px',
        borderTop: '3px solid #D4A574',
        borderLeft: '3px solid #D4A574'
      }} />
      <div style={{
        position: 'absolute',
        top: '3rem',
        right: '3rem',
        width: '60px',
        height: '60px',
        borderTop: '3px solid #D4A574',
        borderRight: '3px solid #D4A574'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '3rem',
        left: '3rem',
        width: '60px',
        height: '60px',
        borderBottom: '3px solid #D4A574',
        borderLeft: '3px solid #D4A574'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '3rem',
        right: '3rem',
        width: '60px',
        height: '60px',
        borderBottom: '3px solid #D4A574',
        borderRight: '3px solid #D4A574'
      }} />

      {/* Badge prestige */}
      <div style={{
        background: 'rgba(212, 165, 116, 0.1)',
        border: '1px solid rgba(212, 165, 116, 0.3)',
        borderRadius: '50px',
        padding: '8px 24px',
        marginBottom: '3rem',
        color: '#D4A574',
        fontFamily: 'var(--font-outfit)',
        fontSize: '0.9rem',
        fontWeight: '600',
        letterSpacing: '2px',
        textTransform: 'uppercase'
      }}>
        Depuis 2004
      </div>

      {/* Logo prestigieux */}
      <div style={{
        position: 'relative',
        width: '550px',
        height: '550px',
        marginBottom: '3rem',
        filter: 'drop-shadow(0 20px 60px rgba(212, 165, 116, 0.3))',
        padding: '2rem',
        background: 'radial-gradient(circle, rgba(212, 165, 116, 0.05) 0%, transparent 70%)',
        borderRadius: '50%'
      }}>
        <Image
          src="/images/logo-mc-negatif.png"
          alt="Maîtrise Cathédrale de Sion"
          fill
          style={{ objectFit: 'contain', padding: '2rem' }}
        />
      </div>

      {/* Titre prestige */}
      <h1 style={{
        fontFamily: 'var(--font-spectral)',
        fontSize: '4rem',
        fontWeight: '700',
        color: 'white',
        textAlign: 'center',
        marginBottom: '1rem',
        letterSpacing: '0.02em',
        lineHeight: 1.2
      }}>
        Maîtrise Cathédrale de Sion
      </h1>

      {/* Séparateur doré */}
      <div style={{
        width: '80px',
        height: '2px',
        background: 'linear-gradient(90deg, transparent 0%, #D4A574 50%, transparent 100%)',
        marginBottom: '1.5rem'
      }} />

      {/* Baseline raffinée */}
      <p style={{
        fontFamily: 'var(--font-spectral)',
        fontSize: '1.6rem',
        fontWeight: '400',
        fontStyle: 'italic',
        color: '#D4A574',
        textAlign: 'center',
        marginBottom: '4rem',
        letterSpacing: '0.03em'
      }}>
        Voix d'exception au cœur de la Cathédrale
      </p>

      {/* CTAs prestige */}
      <div style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'center'
      }}>
        <Link
          href="/soutenir/amis-maitrise"
          style={{
            padding: '18px 45px',
            background: '#D4A574',
            color: '#1a1340',
            borderRadius: '4px',
            fontFamily: 'var(--font-outfit)',
            fontWeight: '600',
            fontSize: '1.1rem',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            display: 'inline-block',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            boxShadow: '0 8px 30px rgba(212, 165, 116, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(212, 165, 116, 0.5)';
            e.currentTarget.style.background = '#FFA500';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(212, 165, 116, 0.3)';
            e.currentTarget.style.background = '#D4A574';
          }}
        >
          Devenir Ami
        </Link>

        <Link
          href="/fas"
          style={{
            padding: '18px 45px',
            background: 'transparent',
            color: '#D4A574',
            border: '2px solid #D4A574',
            borderRadius: '4px',
            fontFamily: 'var(--font-outfit)',
            fontWeight: '600',
            fontSize: '1.1rem',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            display: 'inline-block',
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(212, 165, 116, 0.15)';
            e.currentTarget.style.borderColor = '#FFA500';
            e.currentTarget.style.color = '#FFA500';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = '#D4A574';
            e.currentTarget.style.color = '#D4A574';
          }}
        >
          Festival d'Art Sacré
        </Link>
      </div>
    </section>
  );
}
