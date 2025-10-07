'use client';

import React from 'react';
import Link from 'next/link';

/**
 * VERSION 3: MINIMAL BRUTAL
 * Inspiration: Bristol Cathedral, Swiss design, Brutalism élégant
 * Style: Maximum discrétion, une seule ligne, pas de fioritures, efficacité pure
 */

const SupportSectionV3Minimal = () => {
  const supportOptions = [
    {
      title: 'Association des Amis',
      description: 'Devenez membre de l\'Association des Amis de la Maîtrise et soutenez directement nos activités musicales et pédagogiques.',
      cta: 'Devenir Ami',
      link: '/soutenir/amis-maitrise',
    },
    {
      title: 'Mécénat & Partenariat',
      description: 'Associez votre entreprise ou votre nom à l\'excellence artistique de la Maîtrise par le mécénat culturel.',
      cta: 'Nous contacter',
      link: '/soutenir/partenaires',
    },
    {
      title: 'Faire un Don',
      description: 'Votre générosité permet de financer les projets artistiques, les instruments et la formation des jeunes.',
      cta: 'Faire un don',
      link: '/soutenir/contact',
    }
  ];

  return (
    <section style={{
      backgroundColor: '#fafafa',
      padding: '60px 0',
      borderTop: '1px solid #e0e0e0',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 2rem',
      }}>

        {/* Header minimal - une ligne */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: '40px',
          paddingBottom: '20px',
          borderBottom: '1px solid rgba(212, 165, 116, 0.2)',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-spectral)',
            fontSize: '1.75rem',
            fontWeight: '400',
            color: 'var(--color-navy)',
            margin: 0,
          }}>
            Nous soutenir
          </h2>

          <p style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '0.875rem',
            fontWeight: '300',
            color: '#888',
            margin: 0,
            maxWidth: '420px',
            textAlign: 'right',
          }}>
            Grâce à votre soutien, la Maîtrise perpétue son excellence musicale
          </p>
        </div>

        {/* Liste ultra-simple */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0',
        }}>
          {supportOptions.map((option, index) => (
            <Link
              key={index}
              href={option.link}
              style={{
                display: 'grid',
                gridTemplateColumns: '200px 1fr 140px',
                gap: '30px',
                alignItems: 'center',
                padding: '28px 0',
                borderBottom: '1px solid #e8e8e8',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.paddingLeft = '20px';
                e.currentTarget.style.marginLeft = '-20px';
                e.currentTarget.style.paddingRight = '20px';
                e.currentTarget.style.marginRight = '-20px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.paddingLeft = '0';
                e.currentTarget.style.marginLeft = '0';
                e.currentTarget.style.paddingRight = '0';
                e.currentTarget.style.marginRight = '0';
              }}
            >
              {/* Titre */}
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-spectral)',
                  fontSize: '1.15rem',
                  fontWeight: '500',
                  color: 'var(--color-navy)',
                  margin: 0,
                }}>
                  {option.title}
                </h3>
              </div>

              {/* Description */}
              <p style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: '0.875rem',
                fontWeight: '300',
                color: '#777',
                lineHeight: 1.6,
                margin: 0,
              }}>
                {option.description}
              </p>

              {/* CTA arrow */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: '8px',
                fontFamily: 'var(--font-outfit)',
                fontSize: '0.8rem',
                fontWeight: '500',
                color: 'var(--color-gold)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}>
                <span>{option.cta}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer note discrète */}
        <div style={{
          marginTop: '40px',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '0.8rem',
            fontWeight: '300',
            color: '#aaa',
            margin: 0,
          }}>
            Tous les dons sont déductibles fiscalement selon la législation suisse
          </p>
        </div>
      </div>
    </section>
  );
};

export default SupportSectionV3Minimal;
