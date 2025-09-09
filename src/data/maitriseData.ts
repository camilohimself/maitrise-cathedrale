// Données statiques externalisées pour MaitriseAboutSection - Performance Dr Claude

export const MAITRISE_STATS = [
  { number: '2004', label: 'Fondation', description: 'Création officielle juin' },
  { number: '150+', label: 'Concerts', description: 'Depuis la création' },
  { number: '3', label: 'Ensembles', description: 'École • Vocal • Cathvoix' },
  { number: '20', label: 'Années FAS', description: 'Festival Art Sacré' },
] as const;

export const MAITRISE_HIGHLIGHTS = [
  {
    icon: '🎓',
    title: 'École Maîtrisienne',
    description: 'Formation d\'excellence pour jeunes talents de 8 à 18 ans dans la tradition des maîtrises cathédrales.',
    link: '/maitrise/ecole-maitrisienne'
  },
  {
    icon: '🎼',
    title: 'Ensemble Vocal',
    description: 'Chœur professionnel dirigé par Jean-Claude Kolly, spécialisé dans le répertoire sacré et baroque.',
    link: '/maitrise/ensemble-vocal'
  },
  {
    icon: '⛪',
    title: 'Liturgie Cathédrale',
    description: 'Animation des offices liturgiques dans le cadre unique de la Cathédrale Notre-Dame de Sion.',
    link: '/maitrise/chapelle-musicale'
  },
  {
    icon: '🎭',
    title: 'Festival d\'Art Sacré',
    description: '20 éditions d\'excellence artistique réunissant les plus grands interprètes internationaux.',
    link: '/fas'
  }
] as const;

export type MaitriseStat = typeof MAITRISE_STATS[number];
export type MaitriseHighlight = typeof MAITRISE_HIGHLIGHTS[number];