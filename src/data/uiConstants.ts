// Constantes UI externalisées - Performance Dr Claude

export const EVENT_TYPE_CONFIG: Record<string, { icon: string; color: string }> = {
  'Festival': { icon: 'star', color: '#8B0000' },
  'Concert': { icon: 'music', color: '#B8860B' },
  'Cantate': { icon: 'note', color: '#8B0000' },
  'Formation': { icon: 'education', color: '#B8860B' },
  'Famille': { icon: 'community', color: '#8B0000' },
  'Spectacle': { icon: 'performance', color: '#B8860B' },
} as const;

export const MEDIA_TAB_CONFIG = {
  youtube: {
    label: 'Concerts Vidéo',
    description: 'Découvrez nos plus belles performances en vidéo'
  },
  soundcloud: {
    label: 'Enregistrements Audio', 
    description: 'Écoutez nos enregistrements et répétitions'
  },
  gallery: {
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
export type EventCategory = keyof typeof EVENT_TYPE_CONFIG;