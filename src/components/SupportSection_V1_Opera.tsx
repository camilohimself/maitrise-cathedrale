'use client';

import React from 'react';
import Link from 'next/link';

/**
 * VERSION 1: OPERA PRESTIGE
 * Inspiration: Metropolitan Opera, La Scala
 * Style: Minimaliste noir & or, très discret, ligne horizontale élégante
 */

const SupportSectionV1Opera = () => {
  const supportOptions = [
    {
      iconType: 'community',
      title: 'Association des Amis',
      subtitle: 'Rejoignez notre communauté',
      description: 'Devenez membre de l\'Association des Amis de la Maîtrise et soutenez directement nos activités musicales et pédagogiques.',
      benefits: ['Accès privilégié aux concerts', 'Newsletter exclusive', 'Rencontres avec les artistes'],
      cta: 'Devenir Ami',
      link: '/soutenir/amis-maitrise',
    },
    {
      iconType: 'partnership',
      title: 'Mécénat & Partenariat',
      subtitle: 'Excellence partagée',
      description: 'Associez votre entreprise ou votre nom à l\'excellence artistique de la Maîtrise par le mécénat culturel.',
      benefits: ['Visibilité lors des concerts', 'Déductions fiscales', 'Événements privés'],
      cta: 'Nous contacter',
      link: '/soutenir/partenaires',
    },
    {
      iconType: 'donation',
      title: 'Faire un Don',
      subtitle: 'Soutien ponctuel',
      description: 'Votre générosité permet de financer les projets artistiques, les instruments et la formation des jeunes.',
      benefits: ['Don déductible fiscalement', 'Reçu officiel', 'Impact direct sur la formation'],
      cta: 'Faire un don',
      link: '/soutenir/contact',
    }
  ];

  return (
    <section style={{
      backgroundColor: '#f8f8f8',
      padding: '80px 0',
      borderTop: '1px solid rgba(212, 165, 116, 0.15)',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 2rem',
      }}>

        {/* Header ultra-discret */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px',
        }}>
          <div style={{
            display: 'inline-block',
            width: '50px',
            height: '1px',
            background: 'var(--color-gold)',
            marginBottom: '20px',
          }}></div>

          <h2 style={{
            fontFamily: 'var(--font-spectral)',
            fontSize: '2.25rem',
            fontWeight: '400',
            color: 'var(--color-navy)',
            marginBottom: '12px',
            letterSpacing: '0.5px',
          }}>
            Nous soutenir
          </h2>

          <p style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '0.95rem',
            fontWeight: '300',
            color: '#666',
            maxWidth: '520px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            La Maîtrise existe grâce à la générosité de ses soutiens
          </p>
        </div>

        {/* 3 options en ligne horizontale */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '40px',
        }}>
          {supportOptions.map((option, index) => (
            <div
              key={index}
              style={{
                textAlign: 'center',
                padding: '30px 20px',
              }}
            >
              {/* Icône minimale */}
              <div style={{
                width: '60px',
                height: '60px',
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(212, 165, 116, 0.3)',
                borderRadius: '50%',
              }}>
                {option.iconType === 'community' && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="var(--color-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" stroke="var(--color-gold)" strokeWidth="1.5"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="var(--color-gold)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                )}
                {option.iconType === 'partnership' && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="var(--color-gold)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                )}
                {option.iconType === 'donation' && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="var(--color-gold)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                )}
              </div>

              {/* Titre */}
              <h3 style={{
                fontFamily: 'var(--font-spectral)',
                fontSize: '1.25rem',
                fontWeight: '500',
                color: 'var(--color-navy)',
                marginBottom: '8px',
              }}>
                {option.title}
              </h3>

              {/* Description courte */}
              <p style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: '0.875rem',
                color: '#666',
                lineHeight: 1.6,
                marginBottom: '20px',
                minHeight: '60px',
              }}>
                {option.description}
              </p>

              {/* CTA discret */}
              <Link
                href={option.link}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: '500',
                  fontSize: '0.875rem',
                  color: 'var(--color-gold)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  borderBottom: '1px solid transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderBottom = '1px solid var(--color-gold)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderBottom = '1px solid transparent';
                }}
              >
                <span>{option.cta}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSectionV1Opera;
