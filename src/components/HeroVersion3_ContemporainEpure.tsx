'use client';

import React from 'react';
import Image from 'next/image';

/**
 * VERSION 3 : CONTEMPORAIN ÉPURÉ
 * - Géométrie pure et espace négatif
 * - Split-screen image/texte
 * - Typographie sans-serif moderne
 * - Inspiration : architecture contemporaine, musées, design suisse
 */
const HeroVersion3_ContemporainEpure = () => {
  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      overflow: 'hidden',
      backgroundColor: '#FFFFFF',
    }}>
      {/* Colonne gauche : Image plein format */}
      <div style={{
        position: 'relative',
        height: '100%',
        overflow: 'hidden',
      }}>
        <Image
          src="/images/hero-photo.jpg"
          alt="Maîtrise Cathédrale de Sion"
          fill
          style={{
            objectFit: 'cover',
            filter: 'grayscale(0.2) contrast(1.05)',
          }}
          priority
          quality={90}
        />

        {/* Overlay subtil avec dégradé directionnel */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.3) 100%)',
        }} />

        {/* Badge position absolue en bas à gauche */}
        <div style={{
          position: 'absolute',
          bottom: '3rem',
          left: '3rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: '2px',
          fontFamily: 'var(--font-outfit)',
          fontSize: '0.8rem',
          fontWeight: '600',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--color-navy)',
        }}>
          Sion • Valais
        </div>
      </div>

      {/* Colonne droite : Contenu textuel */}
      <div style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 4rem 0 5rem',
        backgroundColor: '#FAFAF9',
      }}>

        {/* Ligne verticale décorative */}
        <div style={{
          position: 'absolute',
          left: '3rem',
          top: '25%',
          width: '2px',
          height: '50%',
          background: 'linear-gradient(180deg, transparent 0%, var(--color-gold) 50%, transparent 100%)',
        }} />

        {/* Date fondation minimaliste */}
        <div style={{
          fontFamily: 'var(--font-outfit)',
          fontSize: '0.75rem',
          fontWeight: '500',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--color-gold)',
          marginBottom: '1rem',
        }}>
          Est. 2004
        </div>

        {/* Titre ultra-épuré */}
        <h1 style={{
          fontFamily: 'var(--font-outfit)',
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: '700',
          color: 'var(--color-navy)',
          marginBottom: '1.5rem',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
        }}>
          Maîtrise de la
          <br />
          <span style={{
            fontWeight: '300',
          }}>
            Cathédrale
          </span>
          <br />
          <span style={{
            color: 'var(--color-gold)',
            fontWeight: '700',
          }}>
            de Sion
          </span>
        </h1>

        {/* Bloc texte structuré */}
        <div style={{
          maxWidth: '500px',
          marginBottom: '3rem',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '4px 1fr',
            gap: '1rem',
            marginBottom: '1.5rem',
          }}>
            <div style={{
              width: '4px',
              backgroundColor: 'var(--color-gold)',
              borderRadius: '2px',
            }} />
            <p style={{
              fontFamily: 'var(--font-outfit)',
              fontSize: '1.1rem',
              fontWeight: '300',
              color: 'var(--color-gray)',
              lineHeight: 1.8,
              margin: 0,
            }}>
              École de chant liturgique, Ensemble Vocal et Instrumental, Festival d'Art Sacré
            </p>
          </div>

          {/* Stats minimalistes */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            marginTop: '2rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(26, 19, 64, 0.1)',
          }}>
            <div>
              <div style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: '1.8rem',
                fontWeight: '700',
                color: 'var(--color-navy)',
                marginBottom: '0.25rem',
              }}>
                21
              </div>
              <div style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: '0.75rem',
                fontWeight: '400',
                color: 'var(--color-gray)',
                letterSpacing: '0.05em',
              }}>
                Années
              </div>
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: '1.8rem',
                fontWeight: '700',
                color: 'var(--color-navy)',
                marginBottom: '0.25rem',
              }}>
                5
              </div>
              <div style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: '0.75rem',
                fontWeight: '400',
                color: 'var(--color-gray)',
                letterSpacing: '0.05em',
              }}>
                Concerts/an
              </div>
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: '1.8rem',
                fontWeight: '700',
                color: 'var(--color-navy)',
                marginBottom: '0.25rem',
              }}>
                40+
              </div>
              <div style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: '0.75rem',
                fontWeight: '400',
                color: 'var(--color-gray)',
                letterSpacing: '0.05em',
              }}>
              Choristes
              </div>
            </div>
          </div>
        </div>

        {/* CTAs géométriques empilés */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          maxWidth: '350px',
        }}>
          <a
            href="/maitrise"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '18px 24px',
              backgroundColor: 'var(--color-navy)',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '2px',
              fontFamily: 'var(--font-outfit)',
              fontWeight: '600',
              fontSize: '0.95rem',
              letterSpacing: '0.02em',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-gold)';
              e.currentTarget.style.color = 'var(--color-navy)';
              e.currentTarget.style.paddingLeft = '32px';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-navy)';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.paddingLeft = '24px';
            }}
          >
            <span>Découvrir la Maîtrise</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </a>

          <a
            href="/fas"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '18px 24px',
              backgroundColor: 'transparent',
              color: 'var(--color-navy)',
              border: '2px solid var(--color-navy)',
              borderRadius: '2px',
              fontFamily: 'var(--font-outfit)',
              fontWeight: '600',
              fontSize: '0.95rem',
              letterSpacing: '0.02em',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-navy)';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.paddingLeft = '32px';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--color-navy)';
              e.currentTarget.style.paddingLeft = '24px';
            }}
          >
            <span>Festival d'Art Sacré</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Footer minimal avec scroll hint */}
        <div style={{
          position: 'absolute',
          bottom: '3rem',
          right: '4rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          opacity: 0.5,
        }}>
          <div style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '0.7rem',
            fontWeight: '400',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--color-navy)',
          }}>
            Scroll
          </div>
          <div style={{
            width: '40px',
            height: '1px',
            backgroundColor: 'var(--color-navy)',
          }} />
        </div>
      </div>

      {/* Responsive : empilage vertical sur mobile */}
      <style jsx>{`
        @media (max-width: 968px) {
          section {
            grid-template-columns: 1fr !important;
            grid-template-rows: 50vh 50vh !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroVersion3_ContemporainEpure;
