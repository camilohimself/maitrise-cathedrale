'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroLogoMinimaliste() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#FAFAF9',
      padding: '6rem 2rem',
      position: 'relative'
    }}>
      {/* Logo XXL centré */}
      <div style={{
        position: 'relative',
        width: '500px',
        height: '500px',
        marginBottom: '4rem',
        filter: 'drop-shadow(0 20px 60px rgba(0, 0, 0, 0.08))'
      }}>
        <Image
          src="/images/logo-mc-couleur.png"
          alt="Maîtrise Cathédrale de Sion"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* Titre épuré */}
      <h1 style={{
        fontFamily: 'var(--font-spectral)',
        fontSize: '3.5rem',
        fontWeight: '700',
        color: '#1a1340',
        textAlign: 'center',
        marginBottom: '1.5rem',
        letterSpacing: '-0.02em',
        lineHeight: 1.2
      }}>
        Maîtrise Cathédrale de Sion
      </h1>

      {/* Baseline élégante */}
      <p style={{
        fontFamily: 'var(--font-outfit)',
        fontSize: '1.5rem',
        fontWeight: '300',
        color: '#D4A574',
        textAlign: 'center',
        marginBottom: '4rem',
        letterSpacing: '0.02em'
      }}>
        Voix d'exception au cœur de la Cathédrale
      </p>

      {/* CTAs minimalistes */}
      <div style={{
        display: 'flex',
        gap: '1.5rem',
        alignItems: 'center'
      }}>
        <Link
          href="/soutenir/amis-maitrise"
          style={{
            padding: '18px 40px',
            background: '#1a1340',
            color: 'white',
            borderRadius: '8px',
            fontFamily: 'var(--font-outfit)',
            fontWeight: '600',
            fontSize: '1.1rem',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            display: 'inline-block'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(26, 19, 64, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Devenir Ami
        </Link>

        <Link
          href="/fas"
          style={{
            padding: '18px 40px',
            background: 'transparent',
            color: '#D4A574',
            border: '2px solid #D4A574',
            borderRadius: '8px',
            fontFamily: 'var(--font-outfit)',
            fontWeight: '600',
            fontSize: '1.1rem',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            display: 'inline-block'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#D4A574';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#D4A574';
          }}
        >
          Festival d'Art Sacré
        </Link>
      </div>
    </section>
  );
}
