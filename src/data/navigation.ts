import { NavigationItem } from '@/types'

export const navigationItems: NavigationItem[] = [
  {
    label: 'Agenda et billetterie',
    href: '/agenda',
  },
  {
    label: 'La maîtrise',
    href: '/la-maitrise',
    children: [
      { label: 'Histoire', href: '/la-maitrise/histoire' },
      { label: 'Direction musicale', href: '/la-maitrise/direction' },
      { label: 'Prof chant', href: '/la-maitrise/professeurs' },
      { label: 'Organiste', href: '/la-maitrise/organiste' },
      { label: 'Ensemble vocal et instrumental', href: '/la-maitrise/ensemble' },
      { label: 'École Maîtrisienne', href: '/la-maitrise/ecole' },
      { label: 'Chœur Grégorien', href: '/la-maitrise/choeur-gregorien' },
      { label: 'Chapelle Musicale', href: '/la-maitrise/chapelle' },
    ],
  },
  {
    label: 'Média',
    href: '/media',
    children: [
      { label: 'Écouter et voir', href: '/media/ecouter-voir' },
      { label: 'Les Cantates de Bach', href: '/media/cantates-bach' },
      { label: 'Presse', href: '/media/presse' },
    ],
  },
  {
    label: 'Nous soutenir',
    href: '/nous-soutenir',
    children: [
      { label: 'Amis de la Maîtrise', href: '/nous-soutenir/amis' },
      { label: 'Partenaires', href: '/nous-soutenir/partenaires' },
      { label: 'Contact', href: '/nous-soutenir/contact' },
    ],
  },
  {
    label: 'FAS',
    href: '/festival-art-sacre',
    children: [
      { label: 'Programmation', href: '/festival-art-sacre/programmation' },
      { label: 'Artistes', href: '/festival-art-sacre/artistes' },
    ],
  },
]