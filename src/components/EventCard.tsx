'use client';

import React from 'react';
import Image from 'next/image';

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
  return (
    <div 
      className="event-card"
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-white)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-md)',
        transition: 'all var(--transition-base)',
        height: featured ? '450px' : '400px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      }}
    >
      {/* Image avec overlay gradient */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '240px',
        overflow: 'hidden',
      }}>
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 100%)',
        }} />
        
        {/* Badge date circulaire */}
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          width: '80px',
          height: '80px',
          backgroundColor: 'var(--color-white)',
          borderRadius: 'var(--radius-full)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-md)',
        }}>
          <span style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '28px',
            fontWeight: 'var(--font-bold)',
            color: 'var(--color-navy)',
            lineHeight: 1,
          }}>
            {date.day}
          </span>
          <span style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '14px',
            fontWeight: 'var(--font-medium)',
            color: 'var(--color-gold)',
            textTransform: 'uppercase',
            marginTop: '2px',
          }}>
            {date.month}
          </span>
        </div>

        {/* Heure */}
        <div style={{
          position: 'absolute',
          bottom: '15px',
          left: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          padding: '4px 12px',
          borderRadius: 'var(--radius-sm)',
          backdropFilter: 'blur(10px)',
        }}>
          <span style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '14px',
            fontWeight: 'var(--font-medium)',
            color: 'var(--color-navy)',
          }}>
            {time}
          </span>
        </div>
      </div>

      {/* Contenu */}
      <div style={{
        padding: 'var(--spacing-md)',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      }}>
        {/* Catégorie */}
        <span style={{
          fontFamily: 'var(--font-outfit)',
          fontSize: '12px',
          fontWeight: 'var(--font-semibold)',
          color: 'var(--color-gold)',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginBottom: 'var(--spacing-xs)',
        }}>
          {category}
        </span>

        {/* Titre */}
        <h3 style={{
          fontFamily: 'var(--font-spectral)',
          fontSize: featured ? '24px' : '20px',
          fontWeight: 'var(--font-bold)',
          color: 'var(--color-navy)',
          marginBottom: 'var(--spacing-sm)',
          lineHeight: 1.3,
        }}>
          {title}
        </h3>

        {/* Description */}
        <p style={{
          fontFamily: 'var(--font-outfit)',
          fontSize: '14px',
          fontWeight: 'var(--font-regular)',
          color: '#666',
          lineHeight: 1.6,
          flex: 1,
          marginBottom: 'var(--spacing-md)',
        }}>
          {description}
        </p>

        {/* Bouton CTA */}
        <button 
          className="btn-gold"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '12px 32px',
            backgroundColor: 'var(--color-gold)',
            color: 'var(--color-white)',
            border: 'none',
            borderRadius: 'var(--radius-sm)',
            fontFamily: 'var(--font-outfit)',
            fontWeight: 'var(--font-semibold)',
            fontSize: 'var(--text-base)',
            cursor: 'pointer',
            transition: 'all var(--transition-base)',
            width: '100%',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
            e.currentTarget.style.boxShadow = 'var(--shadow-gold)';
            e.currentTarget.style.filter = 'brightness(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.filter = 'brightness(1)';
          }}
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
};

export default EventCard;