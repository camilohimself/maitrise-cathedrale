'use client';

import React, { useState } from 'react';

interface EventCardMobileProps {
  date: {
    day: string;
    month: string;
  };
  time: string;
  title: string;
  subtitle?: string;
  category: string;
  description: string;
  price: string;
  location?: string;
  programme?: string;
  technicalInfo?: string;
  ticketUrl?: string;
}

/**
 * COMPOSANT MOBILE-ONLY
 * Pattern inspiré des best practices Material Design + Apple Calendar
 * - Date badge visible IMMÉDIATEMENT (inline styles = zero flash)
 * - Layout vertical simple
 * - Expansion cliquable pour FAS
 */
const EventCardMobile: React.FC<EventCardMobileProps> = ({
  date,
  time,
  title,
  subtitle,
  category,
  description,
  price,
  location = 'Cathédrale de Sion',
  programme,
  technicalInfo,
  ticketUrl
}) => {
  // État pour l'expansion (FAS uniquement)
  const [isExpanded, setIsExpanded] = useState(false);

  // Détecter si c'est un événement FAS
  const isFASEvent = category.toLowerCase().includes('festival') || category.toLowerCase().includes('fas');

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

  // Toggle expansion pour FAS
  const handleCardClick = () => {
    if (isFASEvent) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      style={{
        backgroundColor: '#FFFFFF',
        border: `2px solid ${colors.borderColor}`,
        borderRadius: '16px',
        marginBottom: '16px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        cursor: isFASEvent ? 'pointer' : 'default',
        transition: 'all 0.3s ease',
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
            margin: '0 0 6px 0',
            display: isExpanded ? 'block' : '-webkit-box',
            WebkitLineClamp: isExpanded ? 'unset' : 2,
            WebkitBoxOrient: 'vertical',
            overflow: isExpanded ? 'visible' : 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {title}
        </h3>

        {/* Sous-titre FAS */}
        {subtitle && isFASEvent && (
          <p
            style={{
              fontFamily: 'var(--font-spectral)',
              fontSize: '0.95rem',
              fontWeight: '500',
              fontStyle: 'italic',
              color: colors.borderColor,
              margin: '0 0 8px 0',
              opacity: 0.85,
            }}
          >
            {subtitle}
          </p>
        )}

        {/* Description */}
        <p
          style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '0.875rem',
            color: '#666',
            lineHeight: '1.5',
            margin: '0 0 12px 0',
            display: isExpanded ? 'block' : '-webkit-box',
            WebkitLineClamp: isExpanded ? 'unset' : 2,
            WebkitBoxOrient: 'vertical',
            overflow: isExpanded ? 'visible' : 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {description}
        </p>

        {/* Indicateur "Voir plus" pour FAS (état replié) */}
        {isFASEvent && !isExpanded && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '10px',
              marginBottom: '12px',
              backgroundColor: `${colors.borderColor}10`,
              borderRadius: '8px',
              color: colors.borderColor,
              fontFamily: 'var(--font-outfit)',
              fontSize: '0.85rem',
              fontWeight: '600',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6"/>
            </svg>
            Voir les détails
          </div>
        )}

        {/* Section expandée FAS - Détails complets */}
        {isFASEvent && isExpanded && (
          <div
            style={{
              marginTop: '12px',
              padding: '16px',
              backgroundColor: `${colors.borderColor}08`,
              borderRadius: '12px',
              border: `1px solid ${colors.borderColor}20`,
            }}
          >
            {/* Programme musical */}
            {programme && (
              <div style={{ marginBottom: '14px' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '0.7rem',
                    fontWeight: '700',
                    color: colors.borderColor,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '6px',
                  }}
                >
                  Programme
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-spectral)',
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    color: '#1a1340',
                    lineHeight: '1.5',
                    fontStyle: 'italic',
                  }}
                >
                  {programme}
                </div>
              </div>
            )}

            {/* Infos techniques */}
            {technicalInfo && (
              <div style={{ marginBottom: '14px' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '0.7rem',
                    fontWeight: '700',
                    color: colors.borderColor,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '6px',
                  }}
                >
                  Informations
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '0.9rem',
                    color: '#666',
                    lineHeight: '1.4',
                  }}
                >
                  {technicalInfo}
                </div>
              </div>
            )}

            {/* Lieu et prix */}
            <div
              style={{
                display: 'flex',
                gap: '20px',
                flexWrap: 'wrap',
                paddingTop: '12px',
                borderTop: `1px solid ${colors.borderColor}15`,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '0.65rem',
                    fontWeight: '600',
                    color: colors.borderColor,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '2px',
                  }}
                >
                  Lieu
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '0.9rem',
                    color: '#1a1340',
                  }}
                >
                  {location}
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '0.65rem',
                    fontWeight: '600',
                    color: colors.borderColor,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '2px',
                  }}
                >
                  Tarif
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#1a1340',
                  }}
                >
                  {price}
                </div>
              </div>
            </div>

            {/* Bouton Réduire */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                marginTop: '14px',
                padding: '8px',
                color: colors.borderColor,
                fontFamily: 'var(--font-outfit)',
                fontSize: '0.85rem',
                fontWeight: '600',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 15l-6-6-6 6"/>
              </svg>
              Réduire
            </div>
          </div>
        )}

        {/* CTA Billetterie si payant */}
        {isPaid && ticketUrl && (
          <a
            href={ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              padding: '14px 20px',
              backgroundColor: colors.badgeColor,
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '10px',
              fontFamily: 'var(--font-outfit)',
              fontWeight: '600',
              fontSize: '1rem',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              marginTop: isExpanded ? '12px' : '0',
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
