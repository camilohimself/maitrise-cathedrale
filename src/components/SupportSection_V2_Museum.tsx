'use client';

import React from 'react';
import Link from 'next/link';

/**
 * VERSION 2: MUSEUM RAFFINÉ
 * Inspiration: MoMA, Tate Modern, Louvre
 * Style: Fond blanc pur, typographie fine, espacement généreux, cards subtiles
 */

const SupportSectionV2Museum = () => {
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
      backgroundColor: '#ffffff',
      padding: '70px 0',
      borderTop: '1px solid #e8e8e8',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 3rem',
      }}>

        {/* Header épuré avec marge latérale */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '60px',
          marginBottom: '50px',
          alignItems: 'start',
        }}>
          <div>
            <h2 style={{
              fontFamily: 'var(--font-spectral)',
              fontSize: '2.5rem',
              fontWeight: '300',
              color: 'var(--color-navy)',
              marginBottom: '0',
              lineHeight: 1.2,
            }}>
              Nous
              <br />
              soutenir
            </h2>
          </div>

          <div>
            <p style={{
              fontFamily: 'var(--font-outfit)',
              fontSize: '1rem',
              fontWeight: '300',
              color: '#666',
              lineHeight: 1.8,
              marginBottom: '20px',
            }}>
              La Maîtrise de la Cathédrale de Sion existe grâce à la générosité et à l'engagement de ses soutiens. Rejoignez-nous dans cette belle aventure musicale et spirituelle.
            </p>
          </div>
        </div>

        {/* Cards minimalistes */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2px',
          background: '#e8e8e8',
        }}>
          {supportOptions.map((option, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#fff',
                padding: '40px 30px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#fafafa';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#fff';
              }}
            >
              {/* Numéro discret */}
              <div style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: '0.75rem',
                fontWeight: '500',
                color: 'var(--color-gold)',
                letterSpacing: '2px',
                marginBottom: '20px',
              }}>
                0{index + 1}
              </div>

              {/* Contenu */}
              <h3 style={{
                fontFamily: 'var(--font-spectral)',
                fontSize: '1.4rem',
                fontWeight: '400',
                color: 'var(--color-navy)',
                marginBottom: '12px',
                lineHeight: 1.3,
              }}>
                {option.title}
              </h3>

              <p style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: '0.875rem',
                fontWeight: '300',
                color: '#777',
                lineHeight: 1.7,
                marginBottom: '25px',
                minHeight: '75px',
              }}>
                {option.description}
              </p>

              {/* Benefits liste minimaliste */}
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 25px 0',
                fontSize: '0.8rem',
                color: '#999',
              }}>
                {option.benefits.map((benefit, i) => (
                  <li
                    key={i}
                    style={{
                      marginBottom: '6px',
                      paddingLeft: '15px',
                      position: 'relative',
                      fontFamily: 'var(--font-outfit)',
                      fontWeight: '300',
                    }}
                  >
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: 'var(--color-gold)',
                    }}>
                      •
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* CTA texte souligné */}
              <Link
                href={option.link}
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: '400',
                  fontSize: '0.875rem',
                  color: 'var(--color-navy)',
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-gold)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-navy)';
                }}
              >
                {option.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSectionV2Museum;
