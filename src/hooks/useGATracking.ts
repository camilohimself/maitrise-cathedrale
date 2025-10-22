/**
 * 🎯 HOOK GA4 TRACKING - Maîtrise Cathédrale Sion
 *
 * Hook personnalisé pour tracker les événements Google Analytics 4
 * Conforme au Cookie Banner (respect consentement utilisateur)
 *
 * Usage:
 * ```tsx
 * const { trackEvent } = useGATracking();
 *
 * // Billetterie
 * trackEvent('ticket_click', {
 *   concert_name: 'Stile Antico',
 *   concert_date: '2026-01-04',
 *   concert_price: '25',
 * });
 *
 * // Formulaire
 * trackEvent('form_submit', {
 *   form_name: 'newsletter',
 * });
 * ```
 */

'use client';

import { useCallback } from 'react';

// Types pour les événements trackés
type GAEventName =
  // Billetterie
  | 'ticket_click'
  | 'ticket_view'

  // Formulaires
  | 'form_start'
  | 'form_submit'
  | 'form_error'

  // Liens externes
  | 'external_link_click'
  | 'soundcloud_play'
  | 'youtube_click'
  | 'social_click'

  // Navigation
  | 'artist_page_view'
  | 'pdf_download'

  // Engagement
  | 'scroll_depth'
  | 'time_on_page';

interface GAEventParams {
  // Paramètres communs
  page_path?: string;
  page_title?: string;

  // Billetterie
  concert_name?: string;
  concert_date?: string;
  concert_price?: string;
  concert_type?: string;

  // Formulaires
  form_name?: string;
  error_message?: string;

  // Liens
  link_url?: string;
  link_domain?: string;
  link_text?: string;

  // Artistes
  artist_name?: string;

  // Média
  track_title?: string;

  // Engagement
  scroll_percentage?: number;
  time_spent?: number;

  // Custom
  [key: string]: string | number | boolean | undefined;
}

declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string | Date,
      params?: GAEventParams
    ) => void;
    dataLayer?: any[];
  }
}

export function useGATracking() {
  /**
   * Envoie un événement à Google Analytics 4
   * Vérifie automatiquement le consentement cookies
   */
  const trackEvent = useCallback((
    eventName: GAEventName,
    params?: GAEventParams
  ) => {
    // Vérifier que GA4 est chargé
    if (typeof window === 'undefined' || !window.gtag) {
      console.warn('GA4 not loaded yet');
      return;
    }

    // Vérifier le consentement cookies (localStorage du Cookie Banner)
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent) {
      const consent = JSON.parse(cookieConsent);
      if (!consent.analytics) {
        console.info('Analytics tracking blocked by user consent');
        return;
      }
    }

    // Enrichir les params avec des infos contextuelles
    const enrichedParams: GAEventParams = {
      page_path: window.location.pathname,
      page_title: document.title,
      ...params,
    };

    // Envoyer l'événement
    try {
      window.gtag('event', eventName, enrichedParams);

      // Log en dev (optionnel)
      if (process.env.NODE_ENV === 'development') {
        console.log('📊 GA4 Event:', eventName, enrichedParams);
      }
    } catch (error) {
      console.error('GA4 tracking error:', error);
    }
  }, []);

  /**
   * Helper: Tracker un clic sur billetterie FAS
   */
  const trackTicketClick = useCallback((
    concertName: string,
    concertDate: string,
    concertPrice?: string,
    concertType?: string
  ) => {
    trackEvent('ticket_click', {
      concert_name: concertName,
      concert_date: concertDate,
      concert_price: concertPrice,
      concert_type: concertType,
    });
  }, [trackEvent]);

  /**
   * Helper: Tracker une soumission de formulaire
   */
  const trackFormSubmit = useCallback((formName: string) => {
    trackEvent('form_submit', {
      form_name: formName,
    });
  }, [trackEvent]);

  /**
   * Helper: Tracker un clic sur lien externe
   */
  const trackExternalLink = useCallback((
    url: string,
    linkText?: string
  ) => {
    try {
      const urlObj = new URL(url);
      trackEvent('external_link_click', {
        link_url: url,
        link_domain: urlObj.hostname,
        link_text: linkText,
      });
    } catch (error) {
      trackEvent('external_link_click', {
        link_url: url,
        link_text: linkText,
      });
    }
  }, [trackEvent]);

  /**
   * Helper: Tracker une lecture SoundCloud
   */
  const trackSoundCloudPlay = useCallback((trackTitle: string) => {
    trackEvent('soundcloud_play', {
      track_title: trackTitle,
    });
  }, [trackEvent]);

  return {
    trackEvent,
    trackTicketClick,
    trackFormSubmit,
    trackExternalLink,
    trackSoundCloudPlay,
  };
}
