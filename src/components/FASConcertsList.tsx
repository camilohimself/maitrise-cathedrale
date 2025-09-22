'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const FASConcertsList = () => {
  const [hoveredConcert, setHoveredConcert] = useState<number | null>(null);

  // Labels français corrects pour les catégories
  const getCategoryLabel = (category: string) => {
    const labels: { [key: string]: string } = {
      'OUVERTURE': 'Grande première',
      'VOCAL': 'Pur a cappella',
      'JEUNESSE': 'Relève talentueuse',
      'BAROQUE': 'Trésors vénitiens',
      'PRESTIGE': 'Événement exceptionnel'
    };
    return labels[category] || category;
  };

  const concerts = [
    {
      id: 1,
      title: "Ensemble vocal de la Maîtrise & Ensemble Barberine",
      subtitle: "Le baroque au féminin : Chiara Margarita Cozzolani",
      date: "30 novembre 2025",
      time: "17:00",
      category: "OUVERTURE",
      description: "Concert d'ouverture avec l'ensemble vocal de la Maîtrise et l'Ensemble Barberine, un des meilleurs ensembles actuels pour ce style de musique.",
      cardImage: "/images/artistes/ecole-maitrisienne/ecole-1-card.webp",
      color: "#D2374C",
      featured: true
    },
    {
      id: 2,
      title: "Chœur Novantiqua",
      subtitle: "Ex tenebris lux : Gesualdo, Bruckner, Poulenc",
      date: "7 décembre 2025",
      time: "17:00",
      category: "VOCAL",
      description: "Programme a cappella raffiné autour de Gesualdo, Bruckner et Poulenc, précédé d'une conférence de Marie Favre.",
      cardImage: "/images/artistes/choeur-novantiqua/novantiqua-1-card.webp",
      color: "#8B7BB8"
    },
    {
      id: 3,
      title: "École maîtrisienne & Chœur des collèges",
      subtitle: "Au ciel et sur la terre : les voix de la jeunesse",
      date: "21 décembre 2025",
      time: "17:00",
      category: "JEUNESSE",
      description: "Concert mettant à l'honneur la jeunesse avec l'École Maîtrisienne et le Chœur des Collèges de Sion.",
      cardImage: "/images/artistes/ecole-maitrisienne/ecole-2-card.webp",
      color: "#FF6B9D"
    },
    {
      id: 4,
      title: "Ensemble Ad Astra & Collectif 7 Sed Unum",
      subtitle: "Vivaldi ou Noël à Venise",
      date: "26 décembre 2025",
      time: "17:00",
      category: "BAROQUE",
      description: "Les célèbres Gloria et Magnificat de Vivaldi dans leurs versions originales pour voix de femmes.",
      cardImage: "/images/artistes/ecole-maitrisienne/ecole-1-card.webp",
      color: "#D2374C"
    },
    {
      id: 5,
      title: "Concert de Gala",
      subtitle: "« The Golden Renaissance – Le Prince de la Musique »",
      date: "4 janvier 2026",
      time: "17:00",
      category: "PRESTIGE",
      description: "Concert exceptionnel du prestigieux ensemble britannique dans un programme consacré à Giovanni Pierluigi da Palestrina.",
      cardImage: "/images/artistes/stile-antico/stile-antico-1-card.webp",
      color: "#D4AF37",
      prestige: true
    }
  ];

  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .concert-card {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 1.5rem !important;
            padding: 1.5rem !important;
          }
          .concert-card .concert-image {
            order: 1;
          }
          .concert-card .concert-content {
            order: 2;
          }
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          div[style*="order"] {
            order: unset !important;
          }
        }
      `}</style>

      <section style={{
        background: 'linear-gradient(180deg, #FAFAF9 0%, #F5F0E8 100%)',
        padding: '5rem 0',
        position: 'relative'
      }}>
        {/* Background effects - tons dorés subtils */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 20% 80%, rgba(212, 165, 116, 0.12) 0%, transparent 60%)',
        zIndex: 1
      }} />

      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 80% 20%, rgba(26, 19, 64, 0.05) 0%, transparent 60%)',
        zIndex: 1
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Header - tons sombres pour contraste */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem',
          color: 'var(--color-navy)'
        }}>
          <div style={{
            display: 'inline-block',
            padding: '0.75rem 2rem',
            background: 'linear-gradient(45deg, var(--color-purple), var(--color-purple-dark))',
            color: 'white',
            borderRadius: '30px',
            marginBottom: '2rem',
            fontSize: '0.9rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            boxShadow: '0 8px 25px rgba(107, 70, 193, 0.3)'
          }}>
🎼 Programme complet
          </div>

          <h2 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: '300',
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-spectral)',
            color: 'var(--color-navy)',
            lineHeight: '1.2'
          }}>
Cinq rendez-vous d'exception
          </h2>

          <p style={{
            fontSize: '1.35rem',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.7',
            color: 'var(--color-gray)',
            fontFamily: 'var(--font-outfit)'
          }}>
            De novembre 2025 à janvier 2026, découvrez cinq rendez-vous musicaux d'exception dans la cathédrale de Sion.
          </p>
        </div>

        {/* Liste des concerts */}
        <div style={{
          display: 'grid',
          gap: '2rem'
        }}>
          {concerts.map((concert, index) => (
            <div
              key={concert.id}
              style={{
                display: 'grid',
                gridTemplateColumns: index % 2 === 0 ? '300px 1fr' : '1fr 300px',
                gap: '2.5rem',
                alignItems: 'center',
                padding: '2.5rem',
                background: hoveredConcert === concert.id
                  ? 'rgba(255, 255, 255, 0.95)'
                  : 'rgba(255, 255, 255, 0.85)',
                borderRadius: '24px',
                backdropFilter: 'blur(20px)',
                border: hoveredConcert === concert.id
                  ? '2px solid rgba(107, 70, 193, 0.3)'
                  : '1px solid rgba(212, 165, 116, 0.2)',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                transform: hoveredConcert === concert.id ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredConcert === concert.id
                  ? '0 20px 40px rgba(0, 0, 0, 0.2)'
                  : '0 8px 25px rgba(0, 0, 0, 0.1)'
              }}
              className="concert-card"
              onMouseEnter={() => setHoveredConcert(concert.id)}
              onMouseLeave={() => setHoveredConcert(null)}
            >
              {/* Image */}
              <div className="concert-image" style={{
                order: index % 2 === 0 ? 1 : 2,
                position: 'relative'
              }}>
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '200px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
                }}>
                  <Image
                    src={concert.cardImage}
                    alt={concert.title}
                    fill
                    style={{
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                      transform: hoveredConcert === concert.id ? 'scale(1.05)' : 'scale(1)'
                    }}
                  />

                  {/* Overlay avec badge - plus subtil */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(45deg, rgba(107, 70, 193, 0.2) 0%, rgba(91, 33, 182, 0.2) 100%)'
                  }} />

                  {concert.prestige && (
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      padding: '0.5rem 1rem',
                      background: 'var(--color-gold)',
                      color: 'var(--color-purple-dark)',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      textTransform: 'capitalize'
                    }}>
                      ⭐ Exceptionnel
                    </div>
                  )}
                </div>
              </div>

              {/* Contenu */}
              <div className="concert-content" style={{
                order: index % 2 === 0 ? 2 : 1,
                color: 'var(--color-navy)'
              }}>
                {/* Badge catégorie */}
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1.25rem',
                  background: concert.prestige
                    ? 'linear-gradient(45deg, var(--color-gold), #E6C068)'
                    : 'var(--color-purple)',
                  color: concert.prestige ? 'var(--color-purple-dark)' : 'white',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '1.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  {getCategoryLabel(concert.category)}
                </div>

                {/* Titre - Serif uniquement + taille 60+ */}
                <h3 style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  fontFamily: 'var(--font-spectral)',
                  lineHeight: '1.3',
                  color: 'var(--color-navy)'
                }}>
                  {concert.title}
                </h3>

                {/* Sous-titre - Serif + taille optimisée */}
                <h4 style={{
                  fontSize: '1.25rem',
                  fontWeight: '400',
                  marginBottom: '1.5rem',
                  color: 'var(--color-gold)',
                  fontStyle: 'italic',
                  fontFamily: 'var(--font-spectral)',
                  lineHeight: '1.4'
                }}>
                  {concert.subtitle}
                </h4>

                {/* Date et heure - Sans pastilles + taille 60+ */}
                <div style={{
                  marginBottom: '1.75rem'
                }}>
                  <div style={{
                    fontSize: '1.2rem',
                    color: 'var(--color-gray)',
                    fontWeight: '600',
                    fontFamily: 'var(--font-outfit)',
                    letterSpacing: '0.01em'
                  }}>
                    {concert.date} • {concert.time}
                  </div>
                </div>

                {/* Description - Taille optimisée pour 60+ */}
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  color: 'var(--color-gray)',
                  marginBottom: '2rem',
                  fontFamily: 'var(--font-outfit)'
                }}>
                  {concert.description}
                </p>

                {/* Bouton - Taille optimisée 60+ */}
                <button style={{
                  padding: '1rem 2.5rem',
                  background: 'transparent',
                  color: 'var(--color-gold)',
                  border: '2px solid var(--color-gold)',
                  borderRadius: '25px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                  fontFamily: 'var(--font-outfit)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--color-gold)';
                  e.currentTarget.style.color = 'var(--color-purple-dark)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--color-gold)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                  Réserver →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      </section>
    </>
  );
};

export default FASConcertsList;