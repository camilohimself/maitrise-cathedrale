'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MaitriseAboutSection = () => {
  const stats = [
    { number: '2004', label: 'Fondation', description: 'Par Constitution officielle' },
    { number: '150+', label: 'Concerts', description: 'Depuis la création' },
    { number: '4', label: 'Formations chorales', description: 'Ensemble Vocal et Instrumental, Ecole Maîtrisienne, Choeur Grégorien, Chapelle Musicale' },
    { number: '20', label: 'Années FAS', description: 'Festival d\'Art Sacré' },
  ];

  const highlights = [
    {
      iconType: 'education',
      title: 'École de chant',
      description: 'Formation d\'excellence pour jeunes talents de 15 à 25 ans. Musique liturgique et messes de l\'époque classique.',
      link: '/maitrise'
    },
    {
      iconType: 'music',
      title: 'Cantates de Bach',
      description: 'Projet unique au monde : intégrale des cantates de Jean-Sébastien Bach dans la liturgie catholique.',
      link: '/maitrise'
    },
    {
      iconType: 'cathedral',
      title: 'Chant grégorien',
      description: 'Chant liturgique dans la tradition grégorienne au cœur de la Cathédrale Notre-Dame de Sion.',
      link: '/maitrise'
    },
    {
      iconType: 'festival',
      title: 'Liturgie à la cathédrale',
      description: 'Chant liturgique et célébrations solennelles dans la tradition cathédrale.',
      link: '/agenda-billetterie'
    }
  ];

  return (
    <section style={{
      backgroundColor: '#F8F9FA',
      padding: '120px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      
      {/* Motifs décoratifs */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-5%',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212, 165, 116, 0.05) 0%, transparent 70%)',
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '-5%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(227, 50, 65, 0.05) 0%, transparent 70%)',
      }} />

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
            Excellence Musicale
          </div>

          <h2 style={{
            fontFamily: 'var(--font-spectral)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '700',
            color: 'var(--color-red)',
            marginBottom: '1.5rem',
            lineHeight: 1.1,
          }}>
            La Maîtrise de la Cathédrale
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
            Depuis 2004, la Fondation de la Maîtrise de la Cathédrale de Sion œuvre pour l'excellence
            de la formation musicale au cœur du Valais.
          </p>
        </div>

        {/* Main layout: Image + Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          marginBottom: '5rem',
        }}>
          
          {/* Image side */}
          <div style={{
            position: 'relative',
          }}>
            <div style={{
              position: 'relative',
              height: '500px',
              borderRadius: '30px',
              overflow: 'hidden',
              border: '3px solid rgba(227, 50, 65, 0.1)',
            }}>
              <Image
                src="/images/hero-photo.jpg"
                alt="Chœur de la Maîtrise en répétition"
                fill
                style={{
                  objectFit: 'cover',
                  filter: 'grayscale(10%) contrast(1.1)',
                }}
                priority
              />
              
              {/* Overlay subtil */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(227, 50, 65, 0.1) 0%, transparent 100%)',
              }} />
            </div>

          </div>

          {/* Content side */}
          <div>
            
            {/* Mission statement */}
            <div style={{
              backgroundColor: 'rgba(212, 165, 116, 0.05)',
              padding: '2rem',
              borderRadius: '20px',
              marginBottom: '2rem',
              borderLeft: '4px solid var(--color-gold)',
            }}>
              <p style={{
                fontFamily: 'var(--font-spectral)',
                fontSize: '1.2rem',
                fontStyle: 'italic',
                color: 'var(--color-red)',
                lineHeight: 1.3,
                margin: 0,
              }}>
                Former les jeunes à l'art du chant dans un esprit d'excellence
                et de tradition, tout en participant activement à la vie liturgique
                et culturelle de notre région.
              </p>
            </div>

            {/* Stats grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.5rem',
              marginBottom: '2rem',
            }}>
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  style={{
                    textAlign: 'center',
                    padding: '1.5rem',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '15px',
                    border: '1px solid rgba(227, 50, 65, 0.1)',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{
                    fontFamily: 'var(--font-spectral)',
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: 'var(--color-red)',
                    lineHeight: 1,
                    marginBottom: '0.5rem',
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'var(--color-gold)',
                    marginBottom: '0.3rem',
                  }}>
                    {stat.label}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '0.8rem',
                    color: '#666',
                    lineHeight: 1.4,
                  }}>
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link 
              href="/maitrise"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '16px 32px',
                backgroundColor: 'var(--color-red)',
                color: '#FFFFFF',
                borderRadius: '50px',
                fontFamily: 'var(--font-outfit)',
                fontWeight: '600',
                fontSize: '1rem',
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 12px 25px rgba(227, 50, 65, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span>Découvrir la Maîtrise</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '10px' }}>
                <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Highlights grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
        }}>
          {highlights.map((highlight, index) => (
            <Link 
              key={index}
              href={highlight.link}
              style={{
                display: 'block',
                backgroundColor: '#FFFFFF',
                padding: '2rem',
                borderRadius: '20px',
                border: '2px solid transparent',
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'rgba(227, 50, 65, 0.2)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(227, 50, 65, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: '80px',
                height: '80px',
                marginBottom: '1rem',
                margin: '0 auto 1rem auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(227, 50, 65, 0.1)',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
              }}>
                {highlight.iconType === 'education' && (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="var(--color-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" stroke="var(--color-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="var(--color-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {highlight.iconType === 'music' && (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18V5l12-2v13" stroke="var(--color-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="6" cy="18" r="3" stroke="var(--color-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="18" cy="16" r="3" stroke="var(--color-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {highlight.iconType === 'cathedral' && (
                  <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
                    {/* Lettrine "D" stylisée */}
                    <path d="M10 8h8c6 0 10 4 10 10s-4 10-10 10h-8V8z" stroke="var(--color-red)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    {/* Neumes grégoriens (notation musicale ancienne) */}
                    <circle cx="14" cy="32" r="1.5" fill="var(--color-red)"/>
                    <circle cx="18" cy="30" r="1.5" fill="var(--color-red)"/>
                    <circle cx="22" cy="32" r="1.5" fill="var(--color-red)"/>
                    <path d="M14 32v-4 M18 30v-4 M22 32v-4" stroke="var(--color-red)" strokeWidth="1" strokeLinecap="round"/>
                    {/* Portée simplifiée */}
                    <path d="M10 36h24 M10 40h24" stroke="var(--color-red)" strokeWidth="0.5" opacity="0.4"/>
                    {/* Second groupe de neumes */}
                    <circle cx="28" cy="34" r="1.5" fill="var(--color-red)"/>
                    <circle cx="32" cy="36" r="1.5" fill="var(--color-red)"/>
                    <path d="M28 34v-4 M32 36v-4" stroke="var(--color-red)" strokeWidth="1" strokeLinecap="round"/>
                  </svg>
                )}
                {highlight.iconType === 'festival' && (
                  <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
                    {/* Croix catholique simple et épaisse */}
                    <path d="M24 8v32" stroke="var(--color-red)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 24h24" stroke="var(--color-red)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              
              <h3 style={{
                fontFamily: 'var(--font-spectral)',
                fontSize: '1.4rem',
                fontWeight: '600',
                color: 'var(--color-red)',
                marginBottom: '1rem',
                lineHeight: 1.3,
              }}>
                {highlight.title}
              </h3>

              <p style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: '0.9rem',
                color: '#666',
                lineHeight: 1.6,
                marginBottom: '1.5rem',
              }}>
                {highlight.description}
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                color: 'var(--color-gold)',
                fontFamily: 'var(--font-outfit)',
                fontWeight: '600',
                fontSize: '0.9rem',
              }}>
                <span>En savoir plus</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '8px' }}>
                  <path d="M7 17l10-10M17 7H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaitriseAboutSection;