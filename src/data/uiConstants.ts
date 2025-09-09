// Constantes UI externalisées - Performance Dr Claude

export const EVENT_TYPE_ICONS: Record<string, string> = {
  'Festival': '🎭',
  'Concert': '🎼',
  'Cantate': '🎵',
  'Formation': '📚',
  'Famille': '👨‍👩‍👧‍👦',
  'Spectacle': '🎪',
} as const;

export const MEDIA_TAB_CONFIG = {
  youtube: {
    icon: '📺',
    label: 'Concerts Vidéo',
    description: 'Découvrez nos plus belles performances en vidéo'
  },
  soundcloud: {
    icon: '🎵',
    label: 'Enregistrements Audio', 
    description: 'Écoutez nos enregistrements et répétitions'
  },
  gallery: {
    icon: '📸',
    label: 'Galerie Photos',
    description: 'Plongez dans l\'univers de la Maîtrise'
  }
} as const;

export const ANIMATION_CONFIGS = {
  cardHover: {
    transform: 'translateY(-8px)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  ctaHover: {
    transform: 'translateY(-3px) scale(1.02)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
  }
} as const;

export type MediaTabType = keyof typeof MEDIA_TAB_CONFIG;
export type EventCategory = keyof typeof EVENT_TYPE_ICONS;