'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * MAITRISE ABOUT CONDENSED - Style Opera de Paris
 * Layout: Image gauche | Contenu droite avec 2x2 grid highlights
 * Mobile: Simplifie - pas de stats, juste CTA
 * Performance: Debounced resize listener
 */

const MaitriseAboutCondensed = () => {
  const [isMobile, setIsMobile] = useState(false);
  const resizeTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();

    const handleResize = () => {
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
      resizeTimeout.current = setTimeout(checkMobile, 150);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
    };
  }, []);

  const highlights = [
    {
      number: '2004',
      label: 'Fondation',
      description: 'Constitution officielle',
    },
    {
      number: '150+',
      label: 'Concerts',
      description: 'Depuis la creation',
    },
    {
      number: '4',
      label: 'Formations',
      description: 'Ensembles choraux',
    },
    {
      number: '20',
      label: 'Annees FAS',
      description: 'Festival d\'Art Sacre',
    },
  ];

  return (
    <section style={{
      backgroundColor: '#FFFFFF',
      padding: '100px 0',
      position: 'relative',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
      }}>

        <div className="maitrise-condensed-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }}>

          {/* LEFT: Image */}
          <div style={{
            position: 'relative',
            height: '500px',
            borderRadius: '4px',
            overflow: 'hidden',
          }}>
            <Image
              src="/images/hero-photo.jpg"
              alt="Choeur de la Maitrise"
              fill
              style={{
                objectFit: 'cover',
              }}
            />
            {/* Overlay subtil */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 60%, rgba(26,19,64,0.3) 100%)',
            }} />
          </div>

          {/* RIGHT: Content */}
          <div>
            <span style={{
              fontFamily: 'var(--font-outfit)',
              fontSize: '0.7rem',
              fontWeight: '500',
              color: '#D4A574',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              display: 'block',
              marginBottom: '1rem',
            }}>
              Depuis 2004
            </span>

            <h2 style={{
              fontFamily: 'var(--font-spectral)',
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: '400',
              color: '#1a1340',
              marginBottom: '1.5rem',
              lineHeight: 1.2,
            }}>
              La Maitrise de la Cathedrale
            </h2>

            <p style={{
              fontFamily: 'var(--font-outfit)',
              fontSize: '1rem',
              fontWeight: '300',
              color: '#666',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
            }}>
              Former les jeunes a l'art du chant dans un esprit d'excellence et de tradition,
              tout en participant activement a la vie liturgique et culturelle du Valais.
            </p>

            {/* 2x2 Grid - Desktop only */}
            {!isMobile && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.75rem',
                marginBottom: '2rem',
              }}>
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    style={{
                      padding: '12px',
                      backgroundColor: '#FAFAF9',
                      borderRadius: '4px',
                      borderLeft: '3px solid #D4A574',
                    }}
                  >
                    <div style={{
                      fontFamily: 'var(--font-spectral)',
                      fontSize: '1.5rem',
                      fontWeight: '600',
                      color: '#1a1340',
                      lineHeight: 1,
                      marginBottom: '2px',
                    }}>
                      {item.number}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-outfit)',
                      fontSize: '0.8rem',
                      fontWeight: '500',
                      color: '#D4A574',
                    }}>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CTA */}
            <Link
              href="/maitrise"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 32px',
                backgroundColor: '#1a1340',
                color: '#FFFFFF',
                borderRadius: '4px',
                fontFamily: 'var(--font-outfit)',
                fontWeight: '500',
                fontSize: '0.9rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2a2350';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1a1340';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Decouvrir la Maitrise</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 900px) {
          :global(.maitrise-condensed-grid) {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }

          :global(.maitrise-condensed-grid) > div:first-child {
            height: 300px !important;
          }
        }

        @media (max-width: 640px) {
          section {
            padding: 60px 0 !important;
          }

          :global(.maitrise-condensed-grid) > div:first-child {
            height: 250px !important;
          }

          :global(.maitrise-stats-grid) {
            gap: 0.75rem !important;
          }

          :global(.maitrise-stat-card) {
            padding: 12px !important;
          }

          :global(.stat-number) {
            font-size: 1.25rem !important;
          }

          :global(.stat-desc) {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default MaitriseAboutCondensed;
