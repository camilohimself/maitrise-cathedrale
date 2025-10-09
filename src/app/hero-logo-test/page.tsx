'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroLogoTest() {
  const [selectedVersion, setSelectedVersion] = useState(1);

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', padding: '2rem 0' }}>
      {/* Navigation versions */}
      <div style={{
        position: 'fixed',
        top: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        display: 'flex',
        gap: '1rem',
        background: 'rgba(0, 0, 0, 0.8)',
        padding: '1rem',
        borderRadius: '50px',
        backdropFilter: 'blur(10px)'
      }}>
        <button
          onClick={() => setSelectedVersion(1)}
          style={{
            padding: '12px 24px',
            background: selectedVersion === 1 ? 'var(--color-gold)' : 'transparent',
            color: selectedVersion === 1 ? '#1a1340' : 'white',
            border: '2px solid var(--color-gold)',
            borderRadius: '30px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          V1 - Minimaliste
        </button>
        <button
          onClick={() => setSelectedVersion(2)}
          style={{
            padding: '12px 24px',
            background: selectedVersion === 2 ? 'var(--color-gold)' : 'transparent',
            color: selectedVersion === 2 ? '#1a1340' : 'white',
            border: '2px solid var(--color-gold)',
            borderRadius: '30px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          V2 - Cinématique
        </button>
        <button
          onClick={() => setSelectedVersion(3)}
          style={{
            padding: '12px 24px',
            background: selectedVersion === 3 ? 'var(--color-gold)' : 'transparent',
            color: selectedVersion === 3 ? '#1a1340' : 'white',
            border: '2px solid var(--color-gold)',
            borderRadius: '30px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          V3 - Prestige
        </button>
      </div>

      {/* VERSION 1 - MINIMALISTE */}
      {selectedVersion === 1 && (
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
              src="/images/logos/logo-maitrise.svg"
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
      )}

      {/* VERSION 2 - CINÉMATIQUE */}
      {selectedVersion === 2 && (
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
              src="/images/logos/logo-maitrise.svg"
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
      )}

      {/* VERSION 3 - PRESTIGE */}
      {selectedVersion === 3 && (
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
              src="/images/logos/logo-maitrise.svg"
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
      )}
    </div>
  );
}
