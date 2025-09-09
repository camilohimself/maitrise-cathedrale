'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MaitriseAboutSection = () => {
  const stats = [
    { number: '2004', label: 'Fondation', description: 'Création officielle juin' },
    { number: '150+', label: 'Concerts', description: 'Depuis la création' },
    { number: '3', label: 'Ensembles', description: 'École • Vocal • Cathvoix' },
    { number: '20', label: 'Années FAS', description: 'Festival Art Sacré' },
  ];

  const highlights = [
    {
      icon: '🎓',
      title: 'École Maîtrisienne',
      description: 'Formation d\'excellence pour jeunes talents de 8 à 18 ans dans la tradition des maîtrises cathédrales.',
      link: '/maitrise/ecole-maitrisienne'
    },
    {
      icon: '🎼',
      title: 'Ensemble Vocal',
      description: 'Chœur professionnel dirigé par Jean-Claude Kolly, spécialisé dans le répertoire sacré et baroque.',
      link: '/maitrise/ensemble-vocal'
    },
    {
      icon: '⛪',
      title: 'Liturgie Cathédrale',
      description: 'Animation des offices liturgiques dans le cadre unique de la Cathédrale Notre-Dame de Sion.',
      link: '/maitrise/chapelle-musicale'
    },
    {
      icon: '🎭',
      title: 'Festival d\'Art Sacré',
      description: '20 éditions d\'excellence artistique réunissant les plus grands interprètes internationaux.',
      link: '/fas'
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
        background: 'radial-gradient(circle, rgba(184, 134, 11, 0.05) 0%, transparent 70%)',
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '-5%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139, 0, 0, 0.05) 0%, transparent 70%)',
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
            Excellence Musicale & Spirituelle
          </div>

          <h2 style={{
            fontFamily: 'var(--font-spectral)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '700',
            color: '#8B0000',
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
            de la formation musicale et spirituelle au cœur du Valais.
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
              border: '3px solid rgba(139, 0, 0, 0.1)',
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
                background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.1) 0%, transparent 100%)',
              }} />
            </div>

            {/* Badge flottant */}
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              right: '20px',
              backgroundColor: '#8B0000',
              color: '#FFFFFF',
              padding: '20px',
              borderRadius: '20px',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(139, 0, 0, 0.3)',
            }}>
              <div style={{
                fontFamily: 'var(--font-spectral)',
                fontSize: '2rem',
                fontWeight: '700',
                lineHeight: 1,
              }}>
                Jean-Claude
              </div>
              <div style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: '0.9rem',
                fontWeight: '500',
                opacity: 0.9,
                marginTop: '4px',
              }}>
                KOLLY
              </div>
              <div style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: '0.7rem',
                fontWeight: '400',
                opacity: 0.8,
                marginTop: '2px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}>
                Direction Musicale
              </div>
            </div>
          </div>

          {/* Content side */}
          <div>
            
            {/* Mission statement */}
            <div style={{
              backgroundColor: 'rgba(184, 134, 11, 0.05)',
              padding: '2rem',
              borderRadius: '20px',
              marginBottom: '2rem',
              borderLeft: '4px solid #B8860B',
            }}>
              <blockquote style={{
                fontFamily: 'var(--font-spectral)',
                fontSize: '1.2rem',
                fontStyle: 'italic',
                color: '#8B0000',
                lineHeight: 1.6,
                margin: 0,
              }}>
                "Former les jeunes à l'art du chant dans un esprit d'excellence 
                et de tradition, tout en participant activement à la vie liturgique 
                et culturelle de notre région."
              </blockquote>
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
                    border: '1px solid rgba(139, 0, 0, 0.1)',
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
                    color: '#8B0000',
                    lineHeight: 1,
                    marginBottom: '0.5rem',
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#B8860B',
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
                backgroundColor: '#8B0000',
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
                e.currentTarget.style.boxShadow = '0 12px 25px rgba(139, 0, 0, 0.3)';
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
                e.currentTarget.style.borderColor = 'rgba(139, 0, 0, 0.2)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(139, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem',
              }}>
                {highlight.icon}
              </div>
              
              <h3 style={{
                fontFamily: 'var(--font-spectral)',
                fontSize: '1.4rem',
                fontWeight: '600',
                color: '#8B0000',
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
                color: '#B8860B',
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