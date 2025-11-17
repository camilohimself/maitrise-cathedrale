'use client';

import React from 'react';

interface EventCardMobileProps {
  date: {
    day: string;
    month: string;
  };
  time: string;
  title: string;
  category: string;
  description: string;
  price: string;
  ticketUrl?: string;
}

/**
 * COMPOSANT MOBILE-ONLY
 * Pattern inspiré des best practices Material Design + Apple Calendar
 * - Date badge visible IMMÉDIATEMENT (inline styles = zero flash)
 * - Layout vertical simple
 * - Pas de conflits CSS scoped
 */
const EventCardMobile: React.FC<EventCardMobileProps> = ({
  date,
  time,
  title,
  category,
  description,
  price,
  ticketUrl
}) => {
  // Configuration des couleurs par type d'événement
  const getEventColors = () => {
    if (category.toLowerCase().includes('messe') || category.toLowerCase().includes('célébration')) {
      return {
        borderColor: '#D4A574', // gold
        badgeColor: '#D4A574'
      };
    }
    if (category.toLowerCase().includes('festival') || category.toLowerCase().includes('fas')) {
      return {
        borderColor: '#4A3A7C', // purple-dark
        badgeColor: '#4A3A7C'
      };
    }
    // Concert par défaut
    return {
      borderColor: '#E33241', // red
      badgeColor: '#E33241'
    };
  };

  const colors = getEventColors();

  // Calculer jour de la semaine
  const getDayOfWeek = () => {
    const monthMap: Record<string, number> = {
      'NOV': 10, 'DÉC': 11, 'JAN': 0, 'FÉV': 1, 'MAR': 2, 'AVR': 3, 'MAI': 4, 'JUIN': 5
    };
    const monthNum = monthMap[date.month] ?? 0;
    const year = monthNum >= 10 ? 2025 : 2026;
    const dateObj = new Date(year, monthNum, parseInt(date.day));
    const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    return days[dateObj.getDay()];
  };

  const isPaid = !price.toLowerCase().includes('gratuit') &&
                 !price.toLowerCase().includes('libre');

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        border: `2px solid ${colors.borderColor}`,
        borderRadius: '16px',
        marginBottom: '16px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
      }}
    >
      {/* DATE BADGE - EN HAUT (Pattern Material Design) */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 16px',
          backgroundColor: '#FDFBF8',
          borderBottom: `1px solid ${colors.borderColor}30`,
        }}
      >
        {/* Date compacte horizontale */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span
            style={{
              fontFamily: 'var(--font-outfit)',
              fontSize: '0.75rem',
              fontWeight: '600',
              color: colors.borderColor,
              textTransform: 'capitalize',
            }}
          >
            {getDayOfWeek()}
          </span>

          <span
            style={{
              fontFamily: 'var(--font-spectral)',
              fontSize: '2rem',
              fontWeight: '700',
              color: colors.borderColor,
              lineHeight: '1',
            }}
          >
            {date.day}
          </span>

          <span
            style={{
              fontFamily: 'var(--font-outfit)',
              fontSize: '0.85rem',
              fontWeight: '600',
              color: colors.borderColor,
              textTransform: 'uppercase',
            }}
          >
            {date.month}
          </span>
        </div>

        {/* Heure à droite */}
        <span
          style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '0.9rem',
            fontWeight: '600',
            color: '#D4A574',
          }}
        >
          {time}
        </span>
      </div>

      {/* CONTENU */}
      <div style={{ padding: '16px' }}>
        {/* Badge catégorie */}
        <div
          style={{
            display: 'inline-block',
            backgroundColor: colors.badgeColor,
            color: '#FFFFFF',
            padding: '4px 10px',
            borderRadius: '6px',
            fontSize: '0.65rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '10px',
          }}
        >
          {category}
        </div>

        {/* Titre */}
        <h3
          style={{
            fontFamily: 'var(--font-spectral)',
            fontSize: '1.1rem',
            fontWeight: '700',
            color: colors.borderColor,
            lineHeight: '1.3',
            margin: '0 0 8px 0',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '0.875rem',
            color: '#666',
            lineHeight: '1.5',
            margin: '0 0 14px 0',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {description}
        </p>

        {/* CTA Billetterie si payant */}
        {isPaid && ticketUrl && (
          <a
            href={ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              padding: '12px 20px',
              backgroundColor: colors.badgeColor,
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '10px',
              fontFamily: 'var(--font-outfit)',
              fontWeight: '600',
              fontSize: '0.95rem',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'scale(0.98)';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Billetterie
          </a>
        )}
      </div>
    </div>
  );
};

export default EventCardMobile;
