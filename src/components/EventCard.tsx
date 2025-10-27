'use client';

import React from 'react';
import Image from 'next/image';
import styles from './EventCard.module.css';

interface EventCardProps {
  date: {
    day: string;
    month: string;
  };
  time: string;
  title: string;
  category: string;
  description: string;
  image: string;
  price: string;
  location: string;
  ctaText?: string;
  featured?: boolean;
  programme?: string;
  technicalInfo?: string;
  ticketUrl?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  date,
  time,
  title,
  category,
  description,
  image,
  price,
  location,
  ctaText = 'Réserver',
  featured = false,
  programme,
  technicalInfo,
  ticketUrl
}) => {
  // Variables marquées comme utilisées pour éviter les warnings lint
  const _ctaText = ctaText;
  const _featured = featured;
  // Configuration des couleurs par type d'événement
  const getEventColors = () => {
    if (category.toLowerCase().includes('messe') || category.toLowerCase().includes('célébration')) {
      return {
        borderColor: 'var(--color-gold)', // Doré pour messes
        badgeColor: 'var(--color-gold)'
      };
    }
    if (category.toLowerCase().includes('festival') || category.toLowerCase().includes('fas')) {
      return {
        borderColor: 'var(--color-purple-dark)', // Violet profond pour FAS
        badgeColor: 'var(--color-purple-dark)'
      };
    }
    // Concert par défaut
    return {
      borderColor: 'var(--color-red)', // Rouge bordeaux pour concerts
      badgeColor: 'var(--color-red)'
    };
  };
  
  const eventColors = getEventColors();
  // Fonction pour obtenir le jour de la semaine calculé dynamiquement
  const getDayOfWeek = () => {
    // Convertir le mois en numéro
    const monthNumber = getMonthNumber(date.month);
    // Déterminer l'année (oct-déc = 2025, jan-juin = 2026)
    const year = parseInt(monthNumber) >= 10 ? 2025 : 2026;
    // Créer la date et obtenir le jour de la semaine
    const dateObj = new Date(year, parseInt(monthNumber) - 1, parseInt(date.day));
    const daysOfWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    return daysOfWeek[dateObj.getDay()];
  };

  // Vérifier si l'événement est payant
  const isPaidEvent = () => {
    return !price.toLowerCase().includes('gratuit') && 
           !price.toLowerCase().includes('libre') && 
           !price.toLowerCase().includes('collecte');
  };

  // Générer le fichier .ics pour l'ajout au calendrier
  const generateICS = () => {
    const startDate = new Date(`2024-${getMonthNumber(date.month)}-${date.day.padStart(2, '0')}T${convertTo24h(time)}`);
    const endDate = new Date(startDate.getTime() + 90 * 60000); // +90 minutes par défaut
    
    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Maîtrise Cathédrale Sion//Event//FR',
      'BEGIN:VEVENT',
      `UID:${Date.now()}@maitrise-cathedrale.ch`,
      `DTSTART:${formatDate(startDate)}`,
      `DTEND:${formatDate(endDate)}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${location}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Convertir le mois en numéro
  const getMonthNumber = (month: string) => {
    const monthMap: { [key: string]: string } = {
      'AOÛT': '08',
      'SEPT': '09',
      'OCT': '10',
      'NOV': '11',
      'DÉC': '12',
      'JAN': '01',
      'FÉV': '02',
      'MAR': '03',
      'AVR': '04',
      'MAI': '05',
      'JUIN': '06'
    };
    return monthMap[month] || '01';
  };

  // Convertir l'heure en format 24h
  const convertTo24h = (time: string) => {
    return time.replace('h', ':').padEnd(5, '0');
  };

  // Partager sur les réseaux sociaux
  const shareEvent = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: description,
        url: window.location.href
      });
    } else {
      // Fallback - copier dans le presse-papier
      const shareText = `${title} - ${date.day} ${date.month} à ${time}\n${description}\n${window.location.href}`;
      navigator.clipboard.writeText(shareText);
      alert('Lien copié dans le presse-papier!');
    }
  };
  return (
    <div 
      className={`event-card ${styles.eventCard}`}
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-white)',
        border: `3px solid ${eventColors.borderColor}`, // Couleur selon type événement
        borderRadius: '0 50px 50px 0', // Forme arrondie uniquement à droite
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        minHeight: '200px', // Hauteur minimale, s'adapte au contenu
        cursor: 'pointer',
        display: 'flex', // Layout horizontal
        flexDirection: 'row',
        marginBottom: '24px',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(227, 50, 65, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Section Date - Côté gauche */}
      <div className={styles.dateSection} style={{
        width: '140px', // Largeur fixe pour la section date
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--color-white)',
        borderRight: `1px solid ${eventColors.borderColor}40`,
      }}>
        {/* Jour de la semaine */}
        <div style={{
          fontFamily: 'var(--font-outfit)',
          fontSize: '14px',
          fontWeight: '600',
          color: eventColors.borderColor,
          textTransform: 'capitalize',
          marginBottom: '8px',
          textAlign: 'center',
        }}>
          {getDayOfWeek()}
        </div>
        
        {/* Numéro du jour - TRÈS GRAND comme dans la maquette */}
        <div className={styles.dayNumber} style={{
          fontFamily: 'var(--font-spectral)',
          fontSize: '72px', // Taille massive comme dans la maquette
          fontWeight: '700',
          color: eventColors.borderColor,
          lineHeight: 0.8,
          textAlign: 'center',
        }}>
          {date.day}
        </div>
        
        {/* Mois */}
        <div style={{
          fontFamily: 'var(--font-outfit)',
          fontSize: '16px',
          fontWeight: '600',
          color: eventColors.borderColor,
          textTransform: 'uppercase',
          marginTop: '4px',
          textAlign: 'center',
        }}>
          {date.month}
        </div>
        
        {/* Heure en petit en dessous */}
        <div style={{
          fontFamily: 'var(--font-outfit)',
          fontSize: '12px',
          fontWeight: '500',
          color: 'var(--color-gold)',
          marginTop: '12px',
          textAlign: 'center',
        }}>
          {time}
        </div>
      </div>

      {/* Section Contenu - Centre */}
      <div className={styles.contentSection} style={{
        flex: 1,
        padding: '20px 20px 16px 20px', // Moins de padding vertical
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // Espacement optimal entre éléments
        height: '100%',
        overflow: 'hidden'
      }}>
        {/* Contenu principal - Groupé */}
        <div style={{ flex: 1 }}>
          {/* Badge catégorie */}
          <div style={{
            display: 'inline-block',
            backgroundColor: eventColors.badgeColor,
            color: 'var(--color-white)',
            padding: '4px 12px',
            borderRadius: '4px',
            fontFamily: 'var(--font-outfit)',
            fontSize: '11px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '8px',
            alignSelf: 'flex-start',
          }}>
            {category}
          </div>

          {/* Titre - Taille réduite pour éviter débordement + Ellipsis 2 lignes */}
          <h3 style={{
            fontFamily: 'var(--font-spectral)',
            fontSize: '24px', // Réduit de 28px à 24px
            fontWeight: '700',
            color: eventColors.borderColor,
            marginBottom: '6px',
            lineHeight: 1.1, // Plus serré
            margin: '0 0 6px 0',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            {title}
          </h3>

          {/* Description - Limitée à 2 lignes max */}
          <p style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '12px', // Réduit de 13px à 12px
            fontWeight: '400',
            color: 'var(--color-gray)',
            lineHeight: 1.3,
            margin: '0',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            {description}
          </p>

          {/* Programme musical - Affichage conditionnel et discret */}
          {programme && (
            <div style={{
              marginTop: '8px',
              padding: '6px 8px',
              backgroundColor: 'var(--color-cream)',
              borderRadius: '4px',
              border: `1px solid ${eventColors.borderColor}20`,
            }}>
              <div style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: 'clamp(9px, 2.5vw, 10px)', // Responsive font size
                fontWeight: '600',
                color: eventColors.borderColor,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '2px',
              }}>
                Programme
              </div>
              <div style={{
                fontFamily: 'var(--font-spectral)',
                fontSize: 'clamp(10px, 2.8vw, 11px)', // Responsive font size
                fontWeight: '500',
                color: 'var(--color-navy)',
                lineHeight: 1.2,
                fontStyle: 'italic',
                wordBreak: 'break-word', // Mobile-friendly text wrapping
              }}>
                {programme}
              </div>
              {technicalInfo && (
                <div style={{
                  fontFamily: 'var(--font-outfit)',
                  fontSize: 'clamp(8px, 2.2vw, 9px)', // Responsive font size
                  color: 'var(--color-gray)',
                  marginTop: '2px',
                }}>
                  {technicalInfo}
                </div>
              )}
            </div>
          )}
        </div>

        {/* CTAs - Fixés en bas avec espacement contrôlé */}
        <div style={{
          display: 'flex',
          gap: '6px', // Gap réduit
          marginTop: '12px', // Margin réduit
          flexShrink: 0, // Empêche la compression des CTAs
          alignItems: 'flex-end'
        }}>
          {/* CTA Billetterie - Seulement si payant ET ticketUrl disponible */}
          {isPaidEvent() && ticketUrl && (
            <a
              href={ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px 12px',
                backgroundColor: 'var(--color-red)',
                color: 'var(--color-white)',
                border: 'none',
                borderRadius: '12px',
                fontFamily: 'var(--font-outfit)',
                fontWeight: '600',
                fontSize: '11px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-red-hover)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-red)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Billetterie
            </a>
          )}
          
          {/* CTA Calendrier */}
          <button 
            onClick={generateICS}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px 16px',
              backgroundColor: 'var(--color-gold)',
              color: 'var(--color-white)',
              border: 'none',
              borderRadius: '16px',
              fontFamily: 'var(--font-outfit)',
              fontWeight: '600',
              fontSize: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-gold-hover)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-gold)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Calendrier
          </button>
          
          {/* CTA Partage */}
          <button 
            onClick={shareEvent}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px 16px',
              backgroundColor: `${eventColors.borderColor}20`,
              color: eventColors.borderColor,
              border: `1px solid ${eventColors.borderColor}60`,
              borderRadius: '16px',
              fontFamily: 'var(--font-outfit)',
              fontWeight: '600',
              fontSize: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `${eventColors.borderColor}40`;
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = `${eventColors.borderColor}20`;
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Partager
          </button>
        </div>
      </div>

      {/* Section Image - Côté droit avec forme arrondie */}
      <div className={styles.imageSection} style={{
        width: '280px', // Largeur fixe pour l'image
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '0 47px 47px 0', // Suit la forme de la card
      }}>
        <Image
          src={image}
          alt={title}
          fill
          style={{ 
            objectFit: 'cover',
          }}
          sizes="280px"
        />
        {/* Léger overlay pour améliorer la lisibilité si besoin */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, transparent 0%, rgba(0,0,0,0.1) 100%)',
        }} />
      </div>

      {/* MOBILE RESPONSIVE - Billetterie CTA prominent (CORRIGÉ P0-8) */}
      <style jsx>{`
        @media (max-width: 768px) {
          /* Billetterie button - Full-width + Prominent */
          :global(.event-card .contentSection a[href]) {
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
            text-align: center !important;
            padding: 14px 20px !important;
            font-size: 1rem !important;
            font-weight: 700 !important;
            min-height: 48px;
            margin-bottom: 8px;
            box-shadow: 0 4px 12px rgba(227, 50, 65, 0.25) !important;
          }
        }

        @media (max-width: 640px) {
          :global(.event-card .contentSection a[href]) {
            padding: 14px 18px !important;
            font-size: 0.95rem !important;
            min-height: 48px;
          }
        }
      `}</style>
    </div>
  );
};

export default EventCard;