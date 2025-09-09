// Données des 15 événements pour la page Agenda & Billetterie
// Static-first, dynamic later

export interface Event {
  id: number;
  title: string;
  date: { day: string; month: string; year: string };
  time: string;
  category: 'Concert' | 'Festival' | 'Formation' | 'Cantate' | 'Spectacle' | 'Famille';
  description: string;
  image: string;
  price: string;
  location: string;
  featured: boolean;
  tags: string[];
  capacity?: number;
  duration?: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: "Chapelle musicale",
    date: { day: "15", month: "AOÛT", year: "2024" },
    time: "19h30",
    category: "Concert",
    description: "Nobis sunt autem laboriosam, rem sint et ad hic sint quos exercitationem nisi corrupti earum totam ipsum aliquid et.",
    image: "/images/events/chapelle-musicale.jpg",
    price: "Entrée libre - Collecte",
    location: "Cathédrale Notre-Dame de Sion",
    featured: true,
    tags: ["liturgie", "chant", "gratuit"],
    capacity: 200,
    duration: "1h15"
  },
  {
    id: 2,
    title: "Chantre",
    date: { day: "18", month: "AOÛT", year: "2024" },
    time: "10h30",
    category: "Concert",
    description: "Concert dominical avec le chantre principal accompagné de l'ensemble vocal. Répertoire de musique sacrée contemporaine.",
    image: "/images/events/chantre.jpg",
    price: "CHF 20.- / 15.- (AVS/Étudiants)",
    location: "Cathédrale Notre-Dame de Sion",
    featured: false,
    tags: ["chantre", "vocal", "dimanche"],
    capacity: 150,
    duration: "45min"
  },
  {
    id: 3,
    title: "Chœur Cath'voix",
    date: { day: "25", month: "AOÛT", year: "2024" },
    time: "19h30",
    category: "Concert",
    description: "Le chœur d'enfants de la Maîtrise présente un programme varié allant du grégorien aux compositions contemporaines.",
    image: "/images/events/choeur-cathvoix.jpg",
    price: "CHF 25.- / 15.- (Enfants)",
    location: "Cathédrale Notre-Dame de Sion",
    featured: false,
    tags: ["enfants", "chœur", "varié"],
    capacity: 180,
    duration: "1h30"
  },
  {
    id: 4,
    title: "Sion Festival",
    date: { day: "28", month: "AOÛT", year: "2024" },
    time: "20h00",
    category: "Festival",
    description: "Grande soirée d'ouverture du Sion Festival avec invités internationaux. Programme exceptionnel de musique baroque et romantique.",
    image: "/images/events/sion-festival.jpg",
    price: "CHF 45.- / 35.- / 25.-",
    location: "Cathédrale Notre-Dame de Sion",
    featured: true,
    tags: ["festival", "international", "baroque"],
    capacity: 300,
    duration: "2h00"
  },
  {
    id: 5,
    title: "Cantate BWV 147 - Bach",
    date: { day: "03", month: "SEPT", year: "2024" },
    time: "17h00",
    category: "Cantate",
    description: "Interprétation de la célèbre Cantate 'Herz und Mund und Tat und Leben' avec orchestre baroque et solistes.",
    image: "/images/events/cantate-bach-147.jpg",
    price: "CHF 30.- / 20.- (AVS/Étudiants)",
    location: "Cathédrale Notre-Dame de Sion",
    featured: false,
    tags: ["bach", "cantate", "orchestre"],
    capacity: 220,
    duration: "1h45"
  },
  {
    id: 6,
    title: "Formation Chant Grégorien",
    date: { day: "07", month: "SEPT", year: "2024" },
    time: "14h00",
    category: "Formation",
    description: "Atelier d'initiation au chant grégorien ouvert à tous. Découverte des neumes et de l'interprétation traditionnelle.",
    image: "/images/events/formation-gregorien.jpg",
    price: "CHF 40.- (matériel inclus)",
    location: "Salle capitulaire - Cathédrale",
    featured: false,
    tags: ["formation", "grégorien", "initiation"],
    capacity: 25,
    duration: "3h00"
  },
  {
    id: 7,
    title: "Concert Famille - Petit Mozart",
    date: { day: "14", month: "SEPT", year: "2024" },
    time: "15h00",
    category: "Famille",
    description: "Spectacle musical interactif pour les 4-10 ans. Découverte de Mozart et de la musique classique en s'amusant.",
    image: "/images/events/petit-mozart.jpg",
    price: "CHF 15.- / 10.- (Enfants)",
    location: "Cathédrale Notre-Dame de Sion",
    featured: false,
    tags: ["famille", "enfants", "mozart", "interactif"],
    capacity: 200,
    duration: "1h00"
  },
  {
    id: 8,
    title: "Requiem de Fauré",
    date: { day: "21", month: "SEPT", year: "2024" },
    time: "19h30",
    category: "Concert",
    description: "Interprétation du sublime Requiem de Gabriel Fauré avec l'ensemble vocal, orgue et orchestre de chambre.",
    image: "/images/events/requiem-faure.jpg",
    price: "CHF 35.- / 25.- (AVS/Étudiants)",
    location: "Cathédrale Notre-Dame de Sion",
    featured: true,
    tags: ["fauré", "requiem", "orchestre"],
    capacity: 250,
    duration: "1h30"
  },
  {
    id: 9,
    title: "Vêpres Polyphoniques",
    date: { day: "28", month: "SEPT", year: "2024" },
    time: "18h00",
    category: "Concert",
    description: "Office liturgique en polyphonie Renaissance avec les compositeurs Palestrina, Victoria et Lassus.",
    image: "/images/events/vepres-polyphoniques.jpg",
    price: "Entrée libre - Collecte",
    location: "Cathédrale Notre-Dame de Sion",
    featured: false,
    tags: ["polyphonie", "renaissance", "liturgie", "gratuit"],
    capacity: 180,
    duration: "1h00"
  },
  {
    id: 10,
    title: "Festival d'Art Sacré - Gala d'ouverture",
    date: { day: "05", month: "OCT", year: "2024" },
    time: "20h30",
    category: "Festival",
    description: "Soirée d'exception pour l'ouverture du 20ème Festival d'Art Sacré. Programme surprises avec artistes internationaux.",
    image: "/images/events/fas-gala.jpg",
    price: "CHF 65.- / 50.- / 35.-",
    location: "Cathédrale Notre-Dame de Sion",
    featured: true,
    tags: ["festival", "gala", "art-sacré", "anniversaire"],
    capacity: 350,
    duration: "2h30"
  },
  {
    id: 11,
    title: "Masterclass de Direction Chorale",
    date: { day: "12", month: "OCT", year: "2024" },
    time: "09h00",
    category: "Formation",
    description: "Stage intensif de direction chorale avec Maître Jean-Claude Kolly. Ouvert aux chefs de chœur confirmés.",
    image: "/images/events/masterclass-direction.jpg",
    price: "CHF 150.- (2 jours)",
    location: "Salle capitulaire - Cathédrale",
    featured: false,
    tags: ["masterclass", "direction", "professionnel"],
    capacity: 15,
    duration: "2 jours"
  },
  {
    id: 12,
    title: "Cantate BWV 4 - Christ lag in Todesbanden",
    date: { day: "19", month: "OCT", year: "2024" },
    time: "17h00",
    category: "Cantate",
    description: "Une des plus anciennes cantates de Bach, interprétée dans la tradition authentique avec instruments d'époque.",
    image: "/images/events/cantate-bach-4.jpg",
    price: "CHF 28.- / 18.- (AVS/Étudiants)",
    location: "Cathédrale Notre-Dame de Sion",
    featured: false,
    tags: ["bach", "cantate", "authentique"],
    capacity: 200,
    duration: "1h15"
  },
  {
    id: 13,
    title: "Concert d'Automne - Motets a cappella",
    date: { day: "26", month: "OCT", year: "2024" },
    time: "19h30",
    category: "Concert",
    description: "Programme de motets a cappella : Bruckner, Brahms et compositeurs contemporains dans l'acoustique exceptionnelle de la cathédrale.",
    image: "/images/events/motets-automne.jpg",
    price: "CHF 32.- / 22.- (AVS/Étudiants)",
    location: "Cathédrale Notre-Dame de Sion",
    featured: false,
    tags: ["motets", "a-cappella", "bruckner", "brahms"],
    capacity: 220,
    duration: "1h20"
  },
  {
    id: 14,
    title: "Te Deum de Bruckner",
    date: { day: "09", month: "NOV", year: "2024" },
    time: "19h30",
    category: "Concert",
    description: "Monument de la musique sacrée, le Te Deum de Bruckner avec grand orchestre, chœur et solistes internationaux.",
    image: "/images/events/te-deum-bruckner.jpg",
    price: "CHF 55.- / 45.- / 30.-",
    location: "Cathédrale Notre-Dame de Sion",
    featured: true,
    tags: ["bruckner", "te-deum", "orchestre", "solistes"],
    capacity: 400,
    duration: "2h00"
  },
  {
    id: 15,
    title: "Concert de Noël - Oratorio de l'Enfance",
    date: { day: "15", month: "DÉC", year: "2024" },
    time: "17h00",
    category: "Concert",
    description: "Concert traditionnel de Noël avec les enfants de la Maîtrise. Programme de chants de Noël et pièces contemporaines.",
    image: "/images/events/concert-noel.jpg",
    price: "CHF 25.- / 15.- / Gratuit -12 ans",
    location: "Cathédrale Notre-Dame de Sion",
    featured: true,
    tags: ["noël", "enfants", "tradition", "famille"],
    capacity: 500,
    duration: "1h45"
  }
];

// Fonction utilitaire pour filtrer les événements
export const getEventsByCategory = (category?: string) => {
  if (!category) return events;
  return events.filter(event => event.category === category);
};

export const getEventsByMonth = (month?: string) => {
  if (!month) return events;
  return events.filter(event => event.date.month === month);
};

export const getFeaturedEvents = () => {
  return events.filter(event => event.featured);
};

export const getEventsByPrice = (range?: string) => {
  if (!range) return events;
  
  switch(range) {
    case 'free':
      return events.filter(event => event.price.toLowerCase().includes('gratuit') || event.price.toLowerCase().includes('libre'));
    case 'low':
      return events.filter(event => {
        const price = event.price.match(/CHF\s(\d+)/);
        return price && parseInt(price[1]) <= 25;
      });
    case 'medium':
      return events.filter(event => {
        const price = event.price.match(/CHF\s(\d+)/);
        return price && parseInt(price[1]) > 25 && parseInt(price[1]) <= 40;
      });
    case 'high':
      return events.filter(event => {
        const price = event.price.match(/CHF\s(\d+)/);
        return price && parseInt(price[1]) > 40;
      });
    default:
      return events;
  }
};