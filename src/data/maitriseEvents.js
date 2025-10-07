// Calendrier complet Maîtrise Cathédrale 2025-2026
// Données extraites du CSV "calendrier_maitrise_sion_2025-2026.csv"
// Mise à jour : 7 octobre 2025
// Classification par types : Messe, Concert, FAS

export const maitriseEvents = [
  // === OCTOBRE 2025 ===
  {
    id: 'oct-12-messe-schola-dedicace',
    type: 'messe',
    date: { day: '12', month: 'OCT' },
    time: '10h00',
    title: 'Solennité de la Dédicace',
    category: 'Messe',
    ensemble: 'Schola',
    description: 'Célébration solennelle de la Dédicace de la cathédrale',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: true
  },
  {
    id: 'oct-19-messe-ensemble',
    type: 'messe',
    date: { day: '19', month: 'OCT' },
    time: '10h00',
    title: 'Messe avec ensemble',
    category: 'Messe',
    ensemble: 'Ensemble vocal et instrumental',
    description: 'Messe dominicale avec ensemble vocal et instrumental',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: false
  },
  {
    id: 'oct-26-messe-gregorien',
    type: 'messe',
    date: { day: '26', month: 'OCT' },
    time: '10h00',
    title: 'Messe en chant grégorien',
    category: 'Messe',
    ensemble: 'Chœur grégorien',
    description: 'Messe dominicale en chant grégorien traditionnel',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: false
  },

  // === NOVEMBRE 2025 ===
  {
    id: 'nov-01-messe-toussaint',
    type: 'messe',
    date: { day: '01', month: 'NOV' },
    time: '10h00',
    title: 'Messe de la Toussaint',
    category: 'Messe',
    ensemble: 'Chœur Cath\'voix',
    description: 'Célébration solennelle de la Toussaint',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: true
  },
  {
    id: 'nov-02-messe-defunts',
    type: 'messe',
    date: { day: '02', month: 'NOV' },
    time: '10h00', 
    title: 'Commémoration des fidèles défunts',
    category: 'Messe',
    ensemble: 'Chœur grégorien',
    description: 'Messe de commémoration des fidèles défunts',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: false
  },
  {
    id: 'nov-07-messe-eveques-defunts',
    type: 'messe',
    date: { day: '07', month: 'NOV' },
    time: '18h00',
    title: 'Messe Évêques et prêtres défunts',
    category: 'Messe',
    ensemble: 'Schola',
    description: 'Messe commémorative pour les évêques et prêtres défunts',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: false
  },
  {
    id: 'nov-09-messe-oracantat',
    type: 'messe',
    date: { day: '09', month: 'NOV' },
    time: '10h00',
    title: 'Messe Oracantat',
    category: 'Messe',
    ensemble: 'Oracantat',
    description: 'Messe dominicale avec le chœur Oracantat',
    location: 'Cathédrale de Sion', 
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: false
  },
  {
    id: 'nov-16-messe-ensemble',
    type: 'messe',
    date: { day: '16', month: 'NOV' },
    time: '10h00',
    title: 'Messe avec ensemble',
    category: 'Messe',
    ensemble: 'Ensemble vocal et instrumental',
    description: 'Messe dominicale avec ensemble vocal et instrumental',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    programme: 'Bach, Allein zu dir, Herr Jesu Christ BWV 33',
    featured: false
  },
  {
    id: 'nov-23-messe-servants-messe',
    type: 'messe',
    date: { day: '23', month: 'NOV' },
    time: '10h00',
    title: 'Fête des servants de messe',
    category: 'Messe',
    ensemble: 'École maîtrisienne',
    description: 'Messe en l\'honneur des servants de messe',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/ecole-maitrisienne/ecole-cathedrale-card.webp',
    featured: true
  },
  {
    id: 'nov-30-messe-avent',
    type: 'messe',
    date: { day: '30', month: 'NOV' },
    time: '10h00',
    title: '1er Dimanche de l\'Avent',
    category: 'Messe',
    ensemble: 'Oracantat',
    description: 'Ouverture du temps de l\'Avent',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: true
  },
  {
    id: 'nov-30-concert-fas-ensemble',
    type: 'fas',
    date: { day: '30', month: 'NOV' },
    time: '17h00',
    title: 'Ensemble vocal de la Maîtrise & Ensemble Barberine',
    subtitle: 'Le baroque au féminin : Chiara Margarita Cozzolani',
    category: 'Festival d\'art sacré',
    ensemble: 'Ensemble vocal et instrumental',
    description: 'Concert d\'ouverture avec l\'ensemble vocal de la Maîtrise et l\'Ensemble Barberine dans des œuvres de Chiara Margarita Cozzolani',
    location: 'Cathédrale de Sion',
    price: '35 CHF',
    image: '/images/artistes/ensemble-vocal-instrumental/evi-1-card.webp',
    ticketUrl: 'https://www.booking-corner.com/cmsscripts/bookOnline.aspx?lang=fr&eco=cathedralesion&page=BookCathedraleSionFAS+2025-26%2f1',
    featured: true
  },

  // === DÉCEMBRE 2025 ===
  {
    id: 'dec-07-messe-ecole-maitrisienne',
    type: 'messe',
    date: { day: '07', month: 'DÉC' },
    time: '10h00',
    title: 'Messe École maîtrisienne',
    category: 'Messe',
    ensemble: 'École maîtrisienne',
    description: 'Messe du 2ème dimanche de l\'Avent',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/ecole-maitrisienne/ecole-group1-card.webp',
    featured: false
  },
  {
    id: 'dec-07-concert-fas-novantiqua',
    type: 'fas',
    date: { day: '07', month: 'DÉC' },
    time: '17h00',
    title: 'Chœur Novantiqua',
    subtitle: 'Ex tenebris lux : Gesualdo, Bruckner, Poulenc',
    category: 'Festival d\'art sacré',
    ensemble: 'Chœur Novantiqua',
    description: 'Programme a cappella raffiné autour de Gesualdo, Bruckner et Poulenc, précédé d\'une conférence de Marie Favre',
    location: 'Cathédrale de Sion',
    price: '30 CHF',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    ticketUrl: 'https://www.booking-corner.com/cmsscripts/bookOnline.aspx?lang=fr&eco=cathedralesion&page=BookCathedraleSionFAS25-26%2f2',
    featured: true
  },
  {
    id: 'dec-08-messe-immaculee-conception',
    type: 'messe',
    date: { day: '08', month: 'DÉC' },
    time: '10h00',
    title: 'Solennité de l\'Immaculée Conception',
    category: 'Messe',
    ensemble: 'Chapelle musicale',
    description: 'Célébration de l\'Immaculée Conception de la Vierge Marie',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: true
  },
  {
    id: 'dec-14-messe-oracantat',
    type: 'messe',
    date: { day: '14', month: 'DÉC' },
    time: '10h00',
    title: 'Messe Oracantat',
    category: 'Messe',
    ensemble: 'Oracantat',
    description: 'Messe du 3ème dimanche de l\'Avent',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: false
  },
  {
    id: 'dec-21-messe-ensemble',
    type: 'messe',
    date: { day: '21', month: 'DÉC' },
    time: '10h00',
    title: 'Messe avec ensemble',
    category: 'Messe',
    ensemble: 'Ensemble vocal et instrumental',
    description: 'Messe du 4ème dimanche de l\'Avent',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    programme: 'Bach, Schwingt freudig euch empor BWV 36',
    featured: false
  },
  {
    id: 'dec-21-concert-fas-colleges',
    type: 'fas',
    date: { day: '21', month: 'DÉC' },
    time: '17h00',
    title: 'École maîtrisienne & Chœur des collèges de Sion',
    subtitle: 'Au ciel et sur la terre : les voix de la jeunesse',
    category: 'Festival d\'art sacré',
    ensemble: 'École maîtrisienne et Chœur des Collèges',
    description: 'Concert mettant à l\'honneur la jeunesse avec l\'École Maîtrisienne et le Chœur des Collèges de Sion',
    location: 'Cathédrale de Sion',
    price: '25 CHF',
    image: '/images/artistes/ecole-maitrisienne/ecole-stamm-card.webp',
    ticketUrl: 'https://www.booking-corner.com/cmsscripts/bookOnline.aspx?lang=fr&eco=cathedralesion&page=BookCathedraleSionFAS25-26%2f3',
    featured: true
  },
  {
    id: 'dec-25-messe-nuit-noel',
    type: 'messe',
    date: { day: '25', month: 'DÉC' },
    time: '00h00',
    title: 'Messe de la nuit de Noël',
    category: 'Messe',
    ensemble: 'Schola',
    description: 'Célébration solennelle de la naissance du Christ',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: true
  },
  {
    id: 'dec-25-messe-jour-noel',
    type: 'messe',
    date: { day: '25', month: 'DÉC' },
    time: '10h00',
    title: 'Messe du jour de Noël',
    category: 'Messe',
    ensemble: 'Chœur Cath\'voix',
    description: 'Célébration joyeuse du jour de Noël',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: true
  },
  {
    id: 'dec-26-concert-ad-astra-fas',
    type: 'fas',
    date: { day: '26', month: 'DÉC' },
    time: '20h00',
    title: 'Ensemble Ad Astra & Collectif 7 Sed Unum',
    subtitle: 'Vivaldi ou Noël à Venise',
    category: 'Festival d\'art sacré',
    ensemble: 'Ensemble Ad Astra & Collectif 7 Sed Unum',
    description: 'Les célèbres Gloria et Magnificat de Vivaldi dans leurs versions originales pour voix de femmes',
    location: 'Cathédrale de Sion',
    price: '40 CHF',
    image: '/images/artistes/ensemble-ad-astra/ad-astra-1-card.webp',
    ticketUrl: 'https://www.booking-corner.com/cmsscripts/bookOnline.aspx?lang=fr&eco=cathedralesion&page=BookCathedraleSionFAS25-26%2f4',
    featured: true
  },
  {
    id: 'dec-28-messe-chantre',
    type: 'messe',
    date: { day: '28', month: 'DÉC' },
    time: '10h00',
    title: 'Messe dominicale',
    category: 'Messe',
    ensemble: 'Chantre',
    description: 'Messe dans l\'octave de Noël',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: false
  },

  // === JANVIER 2026 ===
  {
    id: 'jan-01-messe-sainte-marie',
    type: 'messe',
    date: { day: '01', month: 'JAN' },
    time: '10h00',
    title: 'Solennité de Sainte Marie Mère de Dieu',
    category: 'Messe',
    ensemble: 'Chantre',
    description: 'Célébration du Nouvel An liturgique',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: true
  },
  {
    id: 'jan-04-messe-cloture-annee-sainte',
    type: 'messe',
    date: { day: '04', month: 'JAN' },
    time: '10h00',
    title: 'Clôture de l\'Année sainte',
    category: 'Messe',
    ensemble: 'École maîtrisienne',
    description: 'Célébration de clôture de l\'Année sainte',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/ecole-maitrisienne/ecole-group2-card.webp',
    featured: true
  },
  {
    id: 'jan-04-concert-fas-stile-antico',
    type: 'fas',
    date: { day: '04', month: 'JAN' },
    time: '17h00',
    title: 'Stile Antico',
    subtitle: 'Palestrina - Le Prince de la Musique',
    collaboration: 'En collaboration avec les Riches Heures de Valère',
    category: 'Festival d\'art sacré',
    ensemble: 'Stile Antico',
    description: 'Concert exceptionnel du prestigieux ensemble britannique dans un programme consacré à Giovanni Pierluigi da Palestrina, précédé d\'une conférence de Marie Favre',
    location: 'Cathédrale de Sion',
    price: '45 CHF',
    image: '/images/artistes/stile-antico/stile-antico-4-card.webp',
    ticketUrl: 'https://www.booking-corner.com/cmsscripts/bookOnline.aspx?lang=fr&eco=cathedralesion&page=BookCathedraleSionFAS25-26%2f5',
    featured: true
  },
  {
    id: 'jan-11-messe-oracantat',
    type: 'messe',
    date: { day: '11', month: 'JAN' },
    time: '10h00',
    title: 'Messe Oracantat',
    category: 'Messe',
    ensemble: 'Oracantat',
    description: 'Messe dominicale avec le chœur Oracantat',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: false
  },
  {
    id: 'jan-18-messe-ensemble',
    type: 'messe',
    date: { day: '18', month: 'JAN' },
    time: '10h00',
    title: 'Messe avec ensemble',
    category: 'Messe',
    ensemble: 'Ensemble vocal et instrumental',
    description: 'Messe dominicale avec ensemble vocal et instrumental',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    programme: 'Bach, Christ unser Herr zum Jordan kam BWV 7',
    featured: false
  },
  {
    id: 'jan-25-messe-gregorien',
    type: 'messe',
    date: { day: '25', month: 'JAN' },
    time: '10h00',
    title: 'Messe en chant grégorien',
    category: 'Messe',
    ensemble: 'Chœur grégorien',
    description: 'Messe dominicale en chant grégorien traditionnel',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: false
  },

  // === FÉVRIER 2026 ===
  {
    id: 'fev-01-messe-ecole-maitrisienne',
    type: 'messe',
    date: { day: '01', month: 'FÉV' },
    time: '10h00',
    title: 'Messe École maîtrisienne',
    category: 'Messe',
    ensemble: 'École maîtrisienne',
    description: 'Messe dominicale avec l\'École maîtrisienne',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/ecole-maitrisienne/ecole-cathedrale-card.webp',
    featured: false
  },
  {
    id: 'fev-08-messe-oracantat',
    type: 'messe',
    date: { day: '08', month: 'FÉV' },
    time: '10h00',
    title: 'Messe Oracantat',
    category: 'Messe',
    ensemble: 'Oracantat',
    description: 'Messe dominicale avec le chœur Oracantat',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: false
  },
  {
    id: 'fev-15-messe-ensemble',
    type: 'messe',
    date: { day: '15', month: 'FÉV' },
    time: '10h00',
    title: 'Messe avec ensemble',
    category: 'Messe',
    ensemble: 'Ensemble vocal et instrumental',
    description: 'Messe dominicale avec ensemble vocal et instrumental',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    programme: 'Bach, Alles nur nach Gottes Willen BWV 72',
    featured: false
  },
  {
    id: 'fev-22-messe-gregorien',
    type: 'messe',
    date: { day: '22', month: 'FÉV' },
    time: '10h00',
    title: 'Messe en chant grégorien',
    category: 'Messe',
    ensemble: 'Chœur grégorien',
    description: 'Messe dominicale en chant grégorien traditionnel',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: false
  },

  // === MARS 2026 ===
  {
    id: 'mar-01-messe-ecole-maitrisienne',
    type: 'messe',
    date: { day: '01', month: 'MAR' },
    time: '10h00',
    title: 'Messe École maîtrisienne',
    category: 'Messe',
    ensemble: 'École maîtrisienne',
    description: 'Messe dominicale avec l\'École maîtrisienne',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/ecole-maitrisienne/ecole-group1-card.webp',
    featured: false
  },
  {
    id: 'mar-08-messe-oracantat',
    type: 'messe',
    date: { day: '08', month: 'MAR' },
    time: '10h00',
    title: 'Messe Oracantat',
    category: 'Messe',
    ensemble: 'Oracantat',
    description: 'Messe dominicale avec le chœur Oracantat',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: false
  },
  {
    id: 'mar-15-messe-laetare',
    type: 'messe',
    date: { day: '15', month: 'MAR' },
    time: '10h00',
    title: 'Dimanche de Laetare',
    category: 'Messe',
    ensemble: 'Ensemble vocal et instrumental',
    description: 'Messe du 4ème dimanche de Carême - Dimanche de Laetare',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    programme: 'Bach, Jesu, meine Freude BWV 227',
    technicalInfo: 'Continuo: 19.15',
    featured: true
  },
  {
    id: 'mar-19-messe-saint-joseph',
    type: 'messe',
    date: { day: '19', month: 'MAR' },
    time: '10h00',
    title: 'Solennité de Saint Joseph',
    category: 'Messe',
    ensemble: 'Chapelle musicale',
    description: 'Célébration de la solennité de saint Joseph',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: true
  },
  {
    id: 'mar-22-messe-gregorien',
    type: 'messe',
    date: { day: '22', month: 'MAR' },
    time: '10h00',
    title: 'Messe en chant grégorien',
    category: 'Messe',
    ensemble: 'Chœur grégorien',
    description: 'Messe dominicale en chant grégorien traditionnel',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: false
  },
  {
    id: 'mar-29-messe-rameaux',
    type: 'messe',
    date: { day: '29', month: 'MAR' },
    time: '10h00',
    title: 'Dimanche des Rameaux',
    category: 'Messe',
    ensemble: 'Oracantat',
    description: 'Célébration solennelle du dimanche des Rameaux',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: true
  },
  {
    id: 'mar-29-concert-novantiqua',
    type: 'concert',
    date: { day: '29', month: 'MAR' },
    time: '17h00',
    title: 'Concert Chœur Novantiqua',
    category: 'Concert',
    ensemble: 'Chœur Novantiqua',
    description: 'Concert de musique sacrée pour le Dimanche des Rameaux.',
    location: 'Cathédrale de Sion',
    price: '25 CHF',
    image: '/images/artistes/ecole-maitrisienne/ecole-1-card.webp',
    featured: true
  },

  // === AVRIL 2026 ===
  {
    id: 'avr-03-celebration-chemin-croix',
    type: 'messe',
    date: { day: '03', month: 'AVR' },
    time: '15h00',
    title: 'Chemin de Croix',
    category: 'Célébration',
    ensemble: 'Chapelle musicale',
    description: 'Célébration du Chemin de Croix du Vendredi Saint',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: true
  },
  {
    id: 'avr-05-messe-paques',
    type: 'messe',
    date: { day: '05', month: 'AVR' },
    time: '10h00',
    title: 'Solennité de la Résurrection du Seigneur',
    category: 'Messe',
    ensemble: 'Schola',
    description: 'Célébration solennelle de Pâques',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: true
  },
  {
    id: 'avr-12-messe-oracantat',
    type: 'messe',
    date: { day: '12', month: 'AVR' },
    time: '10h00',
    title: 'Messe Oracantat',
    category: 'Messe',
    ensemble: 'Oracantat',
    description: 'Messe du dimanche in Albis',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: false
  },
  {
    id: 'avr-19-messe-ensemble',
    type: 'messe',
    date: { day: '19', month: 'AVR' },
    time: '10h00',
    title: 'Messe Ensemble vocal et instrumental',
    category: 'Messe',
    ensemble: 'Ensemble vocal et instrumental',
    description: 'Messe dominicale avec musique sacrée de printemps',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/ecole-maitrisienne/ecole-1-card.webp',
    programme: 'Bach, Erfreut euch, ihr Herzen BWV 66',
    featured: true
  },
  {
    id: 'avr-26-messe-gregorien',
    type: 'messe',
    date: { day: '26', month: 'AVR' },
    time: '10h00',
    title: 'Messe en chant grégorien',
    category: 'Messe',
    ensemble: 'Chœur grégorien',
    description: 'Messe dominicale en chant grégorien traditionnel',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: false
  },

  // === MAI 2026 ===
  {
    id: 'mai-03-messe-premieres-communions',
    type: 'messe',
    date: { day: '03', month: 'MAI' },
    time: '10h00',
    title: 'Premières communions',
    category: 'Messe',
    ensemble: 'Chœur Cath\'voix',
    description: 'Célébration des premières communions',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: true
  },
  {
    id: 'mai-10-messe-oracantat',
    type: 'messe',
    date: { day: '10', month: 'MAI' },
    time: '10h00',
    title: 'Messe Oracantat',
    category: 'Messe',
    ensemble: 'Oracantat',
    description: 'Messe dominicale avec le chœur Oracantat',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: false
  },
  {
    id: 'mai-14-messe-ascension',
    type: 'messe',
    date: { day: '14', month: 'MAI' },
    time: '10h00',
    title: 'Solennité de l\'Ascension',
    category: 'Messe',
    ensemble: 'Chapelle musicale',
    description: 'Célébration de l\'Ascension du Seigneur',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: true
  },
  {
    id: 'mai-17-messe-ensemble',
    type: 'messe',
    date: { day: '17', month: 'MAI' },
    time: '10h00',
    title: 'Messe avec ensemble',
    category: 'Messe',
    ensemble: 'Ensemble vocal et instrumental',
    description: 'Messe dominicale avec ensemble vocal et instrumental',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    programme: 'Bach, Auf Christi Himmelfahrt allein BWV 128',
    featured: false
  },
  {
    id: 'mai-24-messe-confirmations',
    type: 'messe',
    date: { day: '24', month: 'MAI' },
    time: '10h00',
    title: 'Confirmations',
    category: 'Messe',
    ensemble: 'Chœur Cath\'voix',
    description: 'Célébration du sacrement de confirmation',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: true
  },
  {
    id: 'mai-31-messe-trinite',
    type: 'messe',
    date: { day: '31', month: 'MAI' },
    time: '10h00',
    title: 'Solennité de la Sainte Trinité',
    category: 'Messe',
    ensemble: 'Oracantat',
    description: 'Célébration de la Sainte Trinité',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: true
  },

  // === JUIN 2026 ===
  {
    id: 'juin-04-messe-saint-sacrement',
    type: 'messe',
    date: { day: '04', month: 'JUIN' },
    time: '10h00',
    title: 'Solennité du Saint-Sacrement',
    category: 'Messe',
    ensemble: 'Schola',
    description: 'Célébration du Saint-Sacrement (Fête-Dieu)',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: true
  },
  {
    id: 'juin-07-messe-ecole-maitrisienne',
    type: 'messe',
    date: { day: '07', month: 'JUIN' },
    time: '10h00',
    title: 'Messe École maîtrisienne',
    category: 'Messe',
    ensemble: 'École maîtrisienne',
    description: 'Messe dominicale avec l\'École maîtrisienne',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/ecole-maitrisienne/ecole-group2-card.webp',
    featured: false
  },
  {
    id: 'juin-14-messe-oracantat',
    type: 'messe',
    date: { day: '14', month: 'JUIN' },
    time: '10h00',
    title: 'Messe Oracantat',
    category: 'Messe',
    ensemble: 'Oracantat',
    description: 'Messe dominicale avec le chœur Oracantat',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: false
  },
  {
    id: 'juin-21-messe-ensemble',
    type: 'messe',
    date: { day: '21', month: 'JUIN' },
    time: '10h00',
    title: 'Messe avec ensemble',
    category: 'Messe',
    ensemble: 'Ensemble vocal et instrumental',
    description: 'Messe dominicale avec ensemble vocal et instrumental',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    programme: 'Bach, Man singet mit Freuden vom Sieg BWV 149',
    featured: false
  },
  {
    id: 'juin-28-messe-gregorien',
    type: 'messe',
    date: { day: '28', month: 'JUIN' },
    time: '10h00',
    title: 'Messe en chant grégorien',
    category: 'Messe',
    ensemble: 'Chœur grégorien',
    description: 'Messe dominicale en chant grégorien traditionnel',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    featured: false
  }
];

// Fonctions utilitaires pour filtrer les événements
export const getEventsByType = (type) => {
  return maitriseEvents.filter(event => event.type === type);
};

export const getEventsByMonth = (month) => {
  return maitriseEvents.filter(event => event.date.month === month);
};

export const getFeaturedEvents = () => {
  return maitriseEvents.filter(event => event.featured);
};

export const getUpcomingEvents = (limit = 10) => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1; // 1-12
  const currentDay = today.getDate();

  // Filtre les événements à venir (aujourd'hui et après)
  return maitriseEvents
    .filter(event => {
      const eventMonth = getMonthNumber(event.date.month);
      const eventDay = parseInt(event.date.day);

      // Déterminer l'année de l'événement (2025 pour oct-déc, 2026 pour jan-juin)
      const eventYear = eventMonth >= 10 ? 2025 : 2026;

      // Créer des timestamps pour comparaison
      const eventDate = new Date(eventYear, eventMonth - 1, eventDay);
      const todayDate = new Date(currentYear, currentMonth - 1, currentDay);

      // Garder uniquement les événements futurs ou d'aujourd'hui
      return eventDate >= todayDate;
    })
    .slice(0, limit);
};

// Fonction helper pour convertir le mois en numéro
const getMonthNumber = (month) => {
  const monthMap = {
    'AOÛT': 8,
    'SEPT': 9,
    'OCT': 10,
    'NOV': 11,
    'DÉC': 12,
    'JAN': 1,
    'FÉV': 2,
    'MAR': 3,
    'AVR': 4,
    'MAI': 5,
    'JUIN': 6
  };
  return monthMap[month] || 1;
};