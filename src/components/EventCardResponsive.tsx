'use client';

import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import EventCardMobile from './EventCardMobile';

interface EventCardResponsiveProps {
  date: {
    day: string;
    month: string;
  };
  time: string;
  title: string;
  subtitle?: string;
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

/**
 * Wrapper responsive qui charge le composant adapté:
 * - Mobile (<=768px): EventCardMobile (simple, inline styles, zero flash)
 * - Desktop (>768px): EventCard (layout complexe avec image)
 *
 * Pattern utilisé: Client-side detection avec SSR-safe useEffect
 */
const EventCardResponsive: React.FC<EventCardResponsiveProps> = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Marquer qu'on est côté client
    setIsClient(true);

    // Détection mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // SSR: Afficher mobile par défaut (mobile-first)
  if (!isClient) {
    return <EventCardMobile {...props} />;
  }

  // Client-side: Afficher le bon composant
  return isMobile ? <EventCardMobile {...props} /> : <EventCard {...props} />;
};

export default EventCardResponsive;
