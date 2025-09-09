'use client';

import React from 'react';
import Link from 'next/link';

const SupportSection = () => {
  const supportOptions = [
    {
      icon: '🤝',
      title: 'Association des Amis',
      subtitle: 'Rejoignez notre communauté',
      description: 'Devenez membre de l\'Association des Amis de la Maîtrise et soutenez directement nos activités musicales et pédagogiques.',
      benefits: ['Accès privilégié aux concerts', 'Newsletter exclusive', 'Rencontres avec les artistes'],
      cta: 'Devenir Ami',
      link: '/soutenir/amis-maitrise',
      color: '#B8860B'
    },
    {
      icon: '💎',
      title: 'Mécénat & Partenariat',
      subtitle: 'Excellence partagée',
      description: 'Associez votre entreprise ou votre nom à l\'excellence artistique de la Maîtrise par le mécénat culturel.',
      benefits: ['Visibilité lors des concerts', 'Déductions fiscales', 'Événements privés'],
      cta: 'Nous contacter',
      link: '/soutenir/partenaires',
      color: '#8B0000'
    },
    {
      icon: '🎁',
      title: 'Faire un Don',
      subtitle: 'Soutien ponctuel',
      description: 'Votre générosité permet de financer les projets artistiques, les instruments et la formation des jeunes.',
      benefits: ['Don déductible fiscalement', 'Reçu officiel', 'Impact direct sur la formation'],
      cta: 'Faire un don',
      link: '/soutenir/contact',
      color: '#B8860B'
    }
  ];

  const partners = [
    { name: 'Canton du Valais', logo: '🏔️' },
    { name: 'Ville de Sion', logo: '🏛️' },
    { name: 'Fondation Suisse', logo: '🇨🇭' },
    { name: 'Mécènes Privés', logo: '💼' },
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
            backgroundColor: 'rgba(139, 0, 0, 0.1)',
            color: '#8B0000',
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
            color: '#8B0000',
            marginBottom: '1.5rem',
            lineHeight: 1.1,
          }}>
            Nous Soutenir
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
            La Maîtrise de la Cathédrale de Sion existe grâce à la générosité et à l'engagement 
            de ses soutiens. Rejoignez-nous dans cette belle aventure musicale et spirituelle.
          </p>
        </div>

        {/* Support options cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
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
                fontSize: '3.5rem',
                marginBottom: '1.5rem',
                textAlign: 'center',
              }}>
                {option.icon}
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
                  color: '#8B0000',
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

        {/* Partners section */}
        <div style={{
          backgroundColor: '#F8F9FA',
          borderRadius: '25px',
          padding: '3rem',
          textAlign: 'center',
        }}>
          <h3 style={{
            fontFamily: 'var(--font-spectral)',
            fontSize: '2rem',
            fontWeight: '600',
            color: '#8B0000',
            marginBottom: '1rem',
          }}>
            Nos Partenaires
          </h3>

          <p style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '1.1rem',
            color: '#666',
            marginBottom: '2.5rem',
            maxWidth: '600px',
            margin: '0 auto 2.5rem auto',
            lineHeight: 1.6,
          }}>
            La Maîtrise bénéficie du soutien précieux d'institutions publiques et privées 
            qui croient en l'importance de l'éducation musicale d'excellence.
          </p>

          {/* Partners grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem',
          }}>
            {partners.map((partner, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '1.5rem',
                  borderRadius: '15px',
                  border: '1px solid rgba(139, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(139, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '0.5rem',
                }}>
                  {partner.logo}
                </div>
                <p style={{
                  fontFamily: 'var(--font-outfit)',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: '#8B0000',
                  margin: 0,
                }}>
                  {partner.name}
                </p>
              </div>
            ))}
          </div>

          {/* Call to action for partnerships */}
          <Link 
            href="/soutenir/partenaires"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '12px 24px',
              backgroundColor: 'transparent',
              color: '#B8860B',
              border: '2px solid #B8860B',
              borderRadius: '25px',
              fontFamily: 'var(--font-outfit)',
              fontWeight: '600',
              fontSize: '0.9rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#B8860B';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#B8860B';
            }}
          >
            <span>Devenir partenaire</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '8px' }}>
              <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;