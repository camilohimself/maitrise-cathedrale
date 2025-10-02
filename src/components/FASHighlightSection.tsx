'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FASHighlightSection = () => {
  const highlightEvents = [
    {
      id: 1,
      title: "Ouverture du FAS",
      subtitle: "Ensemble Vocal & Ensemble Barberine",
      date: "30 novembre 2025",
      time: "17h00",
      category: "OUVERTURE",
      description: "Concert d'ouverture avec l'Ensemble Barberine dans des œuvres de Chiara Margarita Cozzolani, compositrice baroque injustement méconnue.",
      image: "/images/artistes/ecole-maitrisienne/ecole-1-card.webp",
      featured: true
    },
    {
      id: 4,
      title: "Vivaldi - Gloria et Magnificat",
      subtitle: "Ensemble Ad Astra & Collectif baroque 7 Sed Unum",
      date: "26 décembre 2025",
      time: "20h00",
      category: "BAROQUE",
      description: "Les célèbres Gloria et Magnificat de Vivaldi dans leur version originale pour voix de femmes avec Jean-David Waeber et Daniela Numico.",
      image: "/images/artistes/ecole-maitrisienne/ecole-2-card.webp",
      featured: true
    },
    {
      id: 5,
      title: "Stile Antico",
      collaboration: "En collaboration avec les Riches Heures de Valère",
      subtitle: "Palestrina - Le Prince de la Musique",
      date: "4 janvier 2026",
      time: "17h00",
      category: "PRESTIGE",
      description: "L'immense honneur d'entendre le prestigieux ensemble anglais Stile Antico dans un programme consacré à Giovanni Pierluigi da Palestrina. Un des meilleurs ensembles vocaux au monde.",
      image: "/images/artistes/stile-antico/stile-antico-1-card.webp",
      prestige: true
    }
  ];

  return (
    <section style={{
      backgroundColor: 'var(--color-cream)',
      padding: '120px 0',
      position: 'relative',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
      }}>
        
        {/* Header avec badge 20ème */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem',
          position: 'relative',
        }}>
          
          {/* Badge 20ème édition */}
          <div style={{
            display: 'inline-block',
            padding: '12px 32px',
            backgroundColor: 'rgba(107, 70, 193, 0.1)',
            border: '2px solid rgba(107, 70, 193, 0.3)',
            borderRadius: '50px',
            color: 'var(--color-purple)',
            fontFamily: 'var(--font-outfit)',
            fontSize: '14px',
            fontWeight: '700',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '2rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, var(--color-gold-transparent), transparent)',
            }} />
            <span style={{ position: 'relative', zIndex: 1 }}>
              20ème Édition • 2025-2026
            </span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-spectral)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '700',
            color: 'var(--color-purple)',
            marginBottom: '1.5rem',
            lineHeight: 1.1,
          }}>
            Festival d'Art Sacré
          </h2>

          <p style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '1.3rem',
            fontWeight: '300',
            color: 'var(--color-navy)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Du 30 novembre 2025 au 4 janvier 2026
            <br />
            <span style={{ color: 'var(--color-gold)', fontWeight: '500' }}>
              Deux décennies d'excellence artistique et de beauté
            </span>
          </p>
        </div>

        {/* Grid événements phares */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem',
        }}>
          {highlightEvents.map((event, index) => (
            <div
              key={event.id}
              style={{
                backgroundColor: 'var(--color-white)',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '2px solid rgba(107, 70, 193, 0.1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(107, 70, 193, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(107, 70, 193, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(107, 70, 193, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(107, 70, 193, 0.1)';
              }}
            >
              {/* Badge prestige */}
              {event.prestige && (
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  zIndex: 2,
                  backgroundColor: 'var(--color-gold)',
                  color: 'var(--color-white)',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontFamily: 'var(--font-outfit)',
                  fontSize: '10px',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                }}>
                  PRESTIGE
                </div>
              )}
              
              {/* Image */}
              <div style={{
                position: 'relative',
                height: '200px',
                overflow: 'hidden',
              }}>
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  style={{
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 0%, var(--color-dark-overlay) 100%)',
                }} />
              </div>

              {/* Contenu */}
              <div style={{ padding: '2rem' }}>
                
                {/* Date et catégorie */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: 'var(--color-gold)',
                  }}>
                    {event.date} • {event.time}
                  </span>
                  <span style={{
                    backgroundColor: 'rgba(107, 70, 193, 0.1)',
                    color: 'var(--color-purple)',
                    padding: '2px 8px',
                    borderRadius: '8px',
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '0.7rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}>
                    {event.category}
                  </span>
                </div>

                {/* Titre */}
                <h3 style={{
                  fontFamily: 'var(--font-spectral)',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: 'var(--color-purple)',
                  marginBottom: '0.5rem',
                  lineHeight: 1.3,
                }}>
                  {event.title}
                </h3>

                {/* Collaboration */}
                {event.collaboration && (
                  <p style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '0.85rem',
                    fontWeight: '400',
                    fontStyle: 'italic',
                    color: 'var(--color-navy)',
                    marginBottom: '0.5rem',
                    opacity: 0.8,
                  }}>
                    {event.collaboration}
                  </p>
                )}

                {/* Sous-titre */}
                <p style={{
                  fontFamily: 'var(--font-outfit)',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  color: 'var(--color-gold)',
                  marginBottom: '1rem',
                  lineHeight: 1.4,
                }}>
                  {event.subtitle}
                </p>

                {/* Description */}
                <p style={{
                  fontFamily: 'var(--font-outfit)',
                  fontSize: '0.9rem',
                  color: 'var(--color-navy)',
                  lineHeight: 1.5,
                  marginBottom: '1.5rem',
                }}>
                  {event.description}
                </p>

                {/* CTA */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'var(--color-purple)',
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease',
                }}>
                  <span>Découvrir</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '8px', transition: 'transform 0.3s ease' }}>
                    <path d="M7 17l10-10M17 7H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA vers programme complet */}
        <div style={{
          textAlign: 'center',
        }}>
          <Link 
            href="/fas"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '18px 40px',
              backgroundColor: 'var(--color-purple)',
              color: 'var(--color-white)',
              borderRadius: '50px',
              fontFamily: 'var(--font-outfit)',
              fontWeight: '600',
              fontSize: '1.1rem',
              textDecoration: 'none',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(107, 70, 193, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(107, 70, 193, 0.2)';
            }}
          >
            <span>Voir tout le programme</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '12px' }}>
              <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FASHighlightSection;