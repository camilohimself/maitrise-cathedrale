// Données statiques externalisées pour SupportSection - Performance Dr Claude

export const SUPPORT_OPTIONS = [
  {
    icon: '🤝',
    title: 'Association des Amis',
    subtitle: 'Rejoignez notre communauté',
    description: 'Devenez membre de l\'Association des Amis de la Maîtrise et soutenez directement nos activités musicales et pédagogiques.',
    benefits: ['Accès privilégié aux concerts', 'Newsletter exclusive', 'Rencontres avec les artistes'],
    cta: 'Devenir Ami',
    link: '/soutenir/amis-maitrise',
    color: '#B8860B'
  },
  {
    icon: '💎',
    title: 'Mécénat & Partenariat',
    subtitle: 'Excellence partagée',
    description: 'Associez votre entreprise ou votre nom à l\'excellence artistique de la Maîtrise par le mécénat culturel.',
    benefits: ['Visibilité lors des concerts', 'Déductions fiscales', 'Événements privés'],
    cta: 'Nous contacter',
    link: '/soutenir/partenaires',
    color: '#8B0000'
  },
  {
    icon: '🎁',
    title: 'Faire un Don',
    subtitle: 'Soutien ponctuel',
    description: 'Votre générosité permet de financer les projets artistiques, les instruments et la formation des jeunes.',
    benefits: ['Don déductible fiscalement', 'Reçu officiel', 'Impact direct sur la formation'],
    cta: 'Faire un don',
    link: '/soutenir/contact',
    color: '#B8860B'
  }
] as const;

export const PARTNERS = [
  { name: 'Canton du Valais', logo: '🏔️' },
  { name: 'Ville de Sion', logo: '🏛️' },
  { name: 'Fondation Suisse', logo: '🇨🇭' },
  { name: 'Mécènes Privés', logo: '💼' },
] as const;

export type SupportOption = typeof SUPPORT_OPTIONS[number];
export type Partner = typeof PARTNERS[number];