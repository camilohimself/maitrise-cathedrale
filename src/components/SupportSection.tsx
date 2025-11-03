'use client';

import React from 'react';
import Link from 'next/link';

const SupportSection = () => {
  const supportOptions = [
    {
      iconType: 'community',
      title: 'Association des Amis',
      subtitle: 'Rejoignez notre communauté',
      description: 'Devenez membre de l\'Association des Amis de la Maîtrise et soutenez directement nos activités musicales et pédagogiques.',
      benefits: ['Accès privilégié aux concerts', 'Newsletter exclusive', 'Rencontres avec les artistes'],
      cta: 'Devenir Ami',
      link: '/soutenir/amis-maitrise',
      color: 'var(--color-gold)'
    },
    {
      iconType: 'partnership',
      title: 'Mécénat & Partenariat',
      subtitle: 'Excellence partagée',
      description: 'Associez votre entreprise ou votre nom à l\'excellence artistique de la Maîtrise par le mécénat culturel.',
      benefits: ['Visibilité lors des concerts', 'Déductions fiscales', 'Événements privés'],
      cta: 'Nous contacter',
      link: '/soutenir/partenaires',
      color: 'var(--color-red)'
    },
    {
      iconType: 'donation',
      title: 'Faire un Don',
      subtitle: 'Soutien ponctuel',
      description: 'Votre générosité permet de financer les projets artistiques, les instruments et la formation des jeunes.',
      benefits: ['Don déductible fiscalement', 'Reçu officiel', 'Impact direct sur la formation'],
      cta: 'Faire un don',
      link: '/soutenir/contact',
      color: 'var(--color-gold)'
    }
  ];

  const partners = [
    { name: 'Canton du Valais', iconType: 'mountains' },
    { name: 'Ville de Sion', iconType: 'city' },
    { name: 'Fondation Suisse', iconType: 'foundation' },
    { name: 'Mécènes Privés', iconType: 'business' },
  ];

  return (
    <section style={{
      backgroundColor: '#FFFFFF',
      padding: '120px 0',
      position: 'relative',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
      }}>
        
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '5rem',
        }}>
          <div style={{
            display: 'inline-block',
            padding: '10px 24px',
            backgroundColor: 'rgba(227, 50, 65, 0.1)',
            color: 'var(--color-red)',
            borderRadius: '30px',
            fontFamily: 'var(--font-outfit)',
            fontSize: '0.9rem',
            fontWeight: '600',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '2rem',
          }}>
            Ensemble pour l'Excellence
          </div>

          <h2 style={{
            fontFamily: 'var(--font-spectral)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '700',
            color: 'var(--color-red)',
            marginBottom: '1.5rem',
            lineHeight: 1.1,
          }}>
            Nous soutenir
          </h2>

          <p style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '1.3rem',
            fontWeight: '300',
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            La Maîtrise de la Cathédrale de Sion existe grâce à la générosité et à l'engagement de ses soutiens.
            <br />
            Rejoignez-nous dans cette belle aventure musicale et spirituelle.
          </p>
        </div>

        {/* Support options cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
          gap: '2rem',
          marginBottom: '5rem',
        }}>
          {supportOptions.map((option, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#F8F9FA',
                borderRadius: '25px',
                padding: '2.5rem',
                border: '2px solid transparent',
                position: 'relative',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.borderColor = `${option.color}20`;
                e.currentTarget.style.boxShadow = `0 20px 40px ${option.color}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = '#F8F9FA';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Icon */}
              <div style={{
                width: '90px',
                height: '90px',
                marginBottom: '1.5rem',
                margin: '0 auto 1.5rem auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: `${option.color}15`,
                borderRadius: '25px',
                border: `2px solid ${option.color}30`,
              }}>
                {option.iconType === 'community' && (
                  <svg width="45" height="45" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke={option.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" stroke={option.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke={option.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke={option.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {option.iconType === 'partnership' && (
                  <svg width="45" height="45" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke={option.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="3" stroke={option.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {option.iconType === 'donation' && (
                  <svg width="45" height="45" viewBox="0 0 24 24" fill="none">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke={option.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>

              {/* Content */}
              <div style={{
                textAlign: 'center',
                marginBottom: '2rem',
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-spectral)',
                  fontSize: '1.6rem',
                  fontWeight: '700',
                  color: 'var(--color-red)',
                  marginBottom: '0.5rem',
                  lineHeight: 1.3,
                }}>
                  {option.title}
                </h3>

                <p style={{
                  fontFamily: 'var(--font-outfit)',
                  fontSize: '1rem',
                  fontWeight: '500',
                  color: option.color,
                  marginBottom: '1rem',
                }}>
                  {option.subtitle}
                </p>

                <p style={{
                  fontFamily: 'var(--font-outfit)',
                  fontSize: '0.95rem',
                  color: '#666',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem',
                }}>
                  {option.description}
                </p>
              </div>

              {/* Benefits list */}
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 2rem 0',
              }}>
                {option.benefits.map((benefit, benefitIndex) => (
                  <li 
                    key={benefitIndex}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '0.5rem',
                      fontFamily: 'var(--font-outfit)',
                      fontSize: '0.9rem',
                      color: '#666',
                    }}
                  >
                    <span style={{
                      color: option.color,
                      marginRight: '8px',
                      fontSize: '1.2rem',
                    }}>
                      ✓
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div style={{ textAlign: 'center' }}>
                <Link 
                  href={option.link}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '14px 28px',
                    backgroundColor: option.color,
                    color: '#FFFFFF',
                    borderRadius: '50px',
                    fontFamily: 'var(--font-outfit)',
                    fontWeight: '600',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    width: '100%',
                    maxWidth: '200px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                    e.currentTarget.style.boxShadow = `0 8px 20px ${option.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span>{option.cta}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SupportSection;