'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGATracking } from '@/hooks/useGATracking';

const FASConcertsList = () => {
  const [hoveredConcert, setHoveredConcert] = useState<number | null>(null);
  const { trackTicketClick } = useGATracking();

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
      title: "Ensemble Vocal de la Maîtrise & Ensemble Barberine",
      subtitle: "Le baroque au féminin : Chiara Margarita Cozzolani",
      date: "30 novembre 2025",
      time: "17:00",
      category: "OUVERTURE",
      description: "Concert d'ouverture avec l'Ensemble Vocal de la Maîtrise et l'Ensemble Barberine, un des meilleurs ensembles actuels pour ce style de musique.",
      cardImage: "/images/artistes/ensemble-vocal-instrumental/evi-1-card.webp",
      color: "#D2374C",
      featured: true,
      ticketUrl: "https://www.booking-corner.com/cmsscripts/bookOnline.aspx?lang=fr&eco=cathedralesion&page=BookCathedraleSionFAS+2025-26%2f1",
      artistSlug: "ensemble-vocal"
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
      color: "#8B7BB8",
      ticketUrl: "https://www.booking-corner.com/cmsscripts/bookOnline.aspx?lang=fr&eco=cathedralesion&page=BookCathedraleSionFAS25-26%2f2",
      artistSlug: "choeur-novantiqua",
      hasConference: true
    },
    {
      id: 3,
      title: "École Maîtrisienne & Chœur des collèges",
      subtitle: "Au ciel et sur la terre : les voix de la jeunesse",
      date: "21 décembre 2025",
      time: "17:00",
      category: "JEUNESSE",
      description: "Concert mettant à l'honneur la jeunesse avec l'École Maîtrisienne et le Chœur des Collèges de Sion.",
      cardImage: "/images/artistes/ecole-maitrisienne/ecole-stamm-card.webp",
      color: "#FF6B9D",
      ticketUrl: "https://www.booking-corner.com/cmsscripts/bookOnline.aspx?lang=fr&eco=cathedralesion&page=BookCathedraleSionFAS25-26%2f3",
      artistSlug: "ecole-maitrisienne"
    },
    {
      id: 4,
      title: "Ensemble Ad Astra & Collectif 7 Sed Unum",
      subtitle: "Vivaldi ou Noël à Venise",
      date: "26 décembre 2025",
      time: "20:00",
      category: "BAROQUE",
      description: "Les célèbres Gloria et Magnificat de Vivaldi dans leurs versions originales pour voix de femmes.",
      cardImage: "/images/artistes/ensemble-ad-astra/ad-astra-1-card.webp",
      color: "#D2374C",
      ticketUrl: "https://www.booking-corner.com/cmsscripts/bookOnline.aspx?lang=fr&eco=cathedralesion&page=BookCathedraleSionFAS25-26%2f4",
      artistSlug: "ensemble-ad-astra"
    },
    {
      id: 5,
      title: "Stile Antico",
      collaboration: "En collaboration avec les Riches Heures de Valère",
      subtitle: "Palestrina - Le Prince de la Musique",
      date: "4 janvier 2026",
      time: "17:00",
      category: "PRESTIGE",
      description: "Concert exceptionnel du prestigieux ensemble britannique dans un programme consacré à Giovanni Pierluigi da Palestrina.",
      cardImage: "/images/artistes/stile-antico/stile-antico-1-card.webp",
      color: "#D4AF37",
      prestige: true,
      ticketUrl: "https://www.booking-corner.com/cmsscripts/bookOnline.aspx?lang=fr&eco=cathedralesion&page=BookCathedraleSionFAS25-26%2f5",
      artistSlug: "stile-antico",
      hasConference: true
    }
  ];

  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          /* Section principale - COMPACT */
          section {
            padding: 3rem 0 !important;
          }

          /* Background effects - HIDE sur mobile */
          section > div:first-child,
          section > div:nth-child(2) {
            display: none !important;
          }

          /* Container principal */
          section > div:last-child {
            padding: 0 1.25rem !important;
          }

          /* Header - COMPACT */
          section > div:last-child > div:first-child {
            margin-bottom: 2.5rem !important;
          }

          /* Badge programme */
          section > div:last-child > div:first-child > div:first-child {
            padding: 0.6rem 1.5rem !important;
            font-size: 0.75rem !important;
            margin-bottom: 1.25rem !important;
          }

          /* Titre H2 */
          section h2 {
            font-size: 2rem !important;
            margin-bottom: 1rem !important;
            line-height: 1.15 !important;
          }

          /* Sous-titre */
          section > div:last-child > div:first-child > p {
            font-size: 1rem !important;
            line-height: 1.5 !important;
          }

          /* Grid concerts */
          section > div:last-child > div:last-child {
            gap: 1.25rem !important;
          }

          /* Cards concerts - VERTICAL LAYOUT */
          .concert-card {
            display: flex !important;
            flex-direction: column !important;
            gap: 1rem !important;
            padding: 1.25rem !important;
            border-radius: 16px !important;
          }

          /* Image - ALWAYS FIRST ORDER (cohérence mobile) */
          .concert-card .concert-image {
            order: 1 !important;
          }

          /* Force order 1 pour TOUTES les images (override inline styles) */
          section > div:last-child > div:last-child > div .concert-image {
            order: 1 !important;
          }

          .concert-card .concert-image > div {
            height: 160px !important;
            border-radius: 12px !important;
          }

          /* Contenu - ALWAYS SECOND ORDER (cohérence mobile) */
          .concert-card .concert-content {
            order: 2 !important;
          }

          /* Force order 2 pour TOUT le contenu (override inline styles) */
          section > div:last-child > div:last-child > div .concert-content {
            order: 2 !important;
          }

          /* Badge catégorie */
          .concert-card .concert-content > div:first-child {
            padding: 0.4rem 1rem !important;
            font-size: 0.7rem !important;
            margin-bottom: 1rem !important;
          }

          /* Titre artiste - LESS IS MORE */
          .concert-card h3 {
            font-size: 1.2rem !important;
            margin-bottom: 0.6rem !important;
            line-height: 1.25 !important;
          }

          /* Collaboration - SMALLER */
          .concert-card h3 + p {
            font-size: 0.8rem !important;
            margin-bottom: 0.5rem !important;
          }

          /* Sous-titre programme */
          .concert-card h4 {
            font-size: 1.05rem !important;
            margin-bottom: 1rem !important;
            line-height: 1.3 !important;
          }

          /* Date et heure */
          .concert-card h4 + div > div {
            font-size: 1rem !important;
          }

          /* Description - LIMIT 3 LINES (optimisé 60+) */
          .concert-card p:last-of-type {
            font-size: 0.95rem !important;
            line-height: 1.5 !important;
            margin-bottom: 1.25rem !important;
            display: -webkit-box !important;
            -webkit-line-clamp: 3 !important;
            -webkit-box-orient: vertical !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
          }

          /* Bouton billetterie - 44px min Apple HIG */
          .concert-card a {
            padding: 0.875rem 2rem !important;
            font-size: 0.95rem !important;
            min-height: 44px !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
        }

        @media (max-width: 640px) {
          /* Section ultra-compact */
          section {
            padding: 2rem 0 !important;
          }

          section > div:last-child {
            padding: 0 1rem !important;
          }

          /* Header */
          section > div:last-child > div:first-child {
            margin-bottom: 2rem !important;
          }

          section h2 {
            font-size: 1.75rem !important;
          }

          section > div:last-child > div:first-child > p {
            font-size: 0.95rem !important;
          }

          /* Grid */
          section > div:last-child > div:last-child {
            gap: 1rem !important;
          }

          /* Cards */
          .concert-card {
            padding: 1rem !important;
          }

          /* Image */
          .concert-card .concert-image > div {
            height: 140px !important;
          }

          /* Badge prestige/exceptionnel */
          .concert-card .concert-image > div > div:last-child {
            font-size: 0.7rem !important;
            padding: 0.4rem 0.8rem !important;
          }

          /* Titre */
          .concert-card h3 {
            font-size: 1.1rem !important;
          }

          /* Sous-titre */
          .concert-card h4 {
            font-size: 1rem !important;
          }

          /* Description - 1 LINE ONLY */
          .concert-card p:last-of-type {
            font-size: 0.9rem !important;
            -webkit-line-clamp: 1 !important;
          }

          /* Bouton */
          .concert-card a {
            padding: 0.7rem 1.75rem !important;
            font-size: 0.9rem !important;
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
            Du 30 novembre au 4 janvier 2026, cinq concerts exceptionnels de musique sacrée à la cathédrale de Sion.
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

                {/* Titre - Serif uniquement + taille 60+ + Cliquable */}
                <Link
                  href={`/fas/artiste/${concert.artistSlug}`}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-gold)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-navy)';
                  }}
                >
                  <h3 style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    fontFamily: 'var(--font-spectral)',
                    lineHeight: '1.3',
                    color: 'inherit',
                    cursor: 'pointer'
                  }}>
                    {concert.title}
                  </h3>
                </Link>

                {/* Collaboration si présente */}
                {concert.collaboration && (
                  <p style={{
                    fontSize: '0.95rem',
                    fontWeight: '400',
                    fontStyle: 'italic',
                    color: 'var(--color-navy)',
                    marginBottom: '0.75rem',
                    opacity: 0.8,
                    fontFamily: 'var(--font-outfit)'
                  }}>
                    {concert.collaboration}
                  </p>
                )}

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

                {/* Badge Conférence si applicable */}
                {concert.hasConference && (
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.6rem 1.25rem',
                    background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.15) 0%, rgba(212, 165, 116, 0.08) 100%)',
                    border: '1.5px solid rgba(212, 165, 116, 0.4)',
                    borderRadius: '20px',
                    marginBottom: '1.5rem'
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--color-gold)">
                      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                      <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                    </svg>
                    <span style={{
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      color: 'var(--color-gold)',
                      fontFamily: 'var(--font-outfit)'
                    }}>
                      Conférence préparatoire 16h00
                    </span>
                  </div>
                )}

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

                {/* Bouton billetterie - Taille optimisée 60+ */}
                <a
                  href={concert.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackTicketClick(
                    concert.title,
                    concert.date,
                    undefined, // Prix non affiché dans l'interface
                    concert.category
                  )}
                  style={{
                    display: 'inline-block',
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
                    fontFamily: 'var(--font-outfit)',
                    textDecoration: 'none'
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
                  }}
                >
                  Réserver →
                </a>
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