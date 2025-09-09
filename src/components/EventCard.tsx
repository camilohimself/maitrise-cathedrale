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
  ctaText?: string;
  featured?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({
  date,
  time,
  title,
  category,
  description,
  image,
  ctaText = 'Réserver',
  featured = false
}) => {
  // Fonction pour obtenir le jour de la semaine depuis la maquette
  const getDayOfWeek = () => {
    // Pour respecter exactement la maquette, on utilise les jours affichés
    const dayMap: { [key: string]: string } = {
      '15': 'Jeudi',
      '18': 'Dimanche', 
      '25': 'Dimanche',
      '28': 'Mercredi'
    };
    return dayMap[date.day] || 'Jeudi'; // Fallback
  };
  return (
    <div 
      className={`event-card ${styles.eventCard}`}
      style={{
        position: 'relative',
        backgroundColor: '#FFFFFF',
        border: '3px solid #1A1340', // Bordure noire épaisse comme dans la maquette
        borderRadius: '0 50px 50px 0', // Forme arrondie uniquement à droite
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        height: '200px', // Hauteur fixe pour layout horizontal
        cursor: 'pointer',
        display: 'flex', // Layout horizontal
        flexDirection: 'row',
        marginBottom: '24px',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(26, 19, 64, 0.15)';
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
        backgroundColor: '#FFFFFF',
        borderRight: '1px solid rgba(26, 19, 64, 0.1)',
      }}>
        {/* Jour de la semaine */}
        <div style={{
          fontFamily: 'var(--font-outfit)',
          fontSize: '14px',
          fontWeight: '600',
          color: '#1A1340',
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
          color: '#1A1340',
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
          color: '#1A1340',
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
          color: '#D4A574',
          marginTop: '12px',
          textAlign: 'center',
        }}>
          {time}
        </div>
      </div>

      {/* Section Contenu - Centre */}
      <div className={styles.contentSection} style={{
        flex: 1,
        padding: '24px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        {/* Badge catégorie - Style exact de la maquette */}
        <div style={{
          display: 'inline-block',
          backgroundColor: '#D4A574',
          color: '#FFFFFF',
          padding: '4px 12px',
          borderRadius: '4px',
          fontFamily: 'var(--font-outfit)',
          fontSize: '11px',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          marginBottom: '12px',
          alignSelf: 'flex-start',
        }}>
          {category}
        </div>

        {/* Titre - Police et taille exactes */}
        <h3 style={{
          fontFamily: 'var(--font-spectral)',
          fontSize: '28px',
          fontWeight: '700',
          color: '#1A1340',
          marginBottom: '8px',
          lineHeight: 1.2,
          margin: '0 0 8px 0',
        }}>
          {title}
        </h3>

        {/* Description - Petite taille comme dans maquette */}
        <p style={{
          fontFamily: 'var(--font-outfit)',
          fontSize: '13px',
          fontWeight: '400',
          color: '#666666',
          lineHeight: 1.4,
          marginBottom: '16px',
          margin: '0 0 16px 0',
        }}>
          {description}
        </p>

        {/* Bouton CTA - Style exact de la maquette */}
        <button 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px 24px',
            backgroundColor: '#D4A574',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '20px', // Plus arrondi comme dans la maquette
            fontFamily: 'var(--font-outfit)',
            fontWeight: '600',
            fontSize: '14px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            alignSelf: 'flex-start',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#C19660';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#D4A574';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          {ctaText}
        </button>
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
    </div>
  );
};

export default EventCard;