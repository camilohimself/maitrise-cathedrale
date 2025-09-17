// Calendrier complet Maîtrise Cathédrale 2025-2026
// Données extraites du PDF "Calendrier général 2025-2026.xlsx.pdf"
// Classification par types : Messe, Concert, FAS

export const maitriseEvents = [
  // === AOÛT 2025 ===
  {
    id: 'aout-15-messe-assomption',
    type: 'messe',
    date: { day: '15', month: 'AOÛT' },
    time: '10h00',
    title: 'Messe de l\'Assomption',
    category: 'Messe',
    ensemble: 'Chapelle musicale',
    description: 'Célébration solennelle de l\'Assomption de la Vierge Marie',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
    featured: false
  },
  {
    id: 'aout-15-concert-florianersangerknaben',
    type: 'concert', 
    date: { day: '15', month: 'AOÛT' },
    time: '17h00',
    title: 'Concert St. Florianer Sängerknaben',
    category: 'Concert',
    ensemble: 'St. Florianer Sängerknaben',
    description: 'Concert exceptionnel dans le cadre du Sion Festival',
    location: 'Cathédrale de Sion',
    price: '25 CHF',
    image: '/images/artistes/ecole-maitrisienne/ecole-1-card.jpg',
    featured: true
  },
  {
    id: 'aout-17-messe-chantre',
    type: 'messe',
    date: { day: '17', month: 'AOÛT' },
    time: '10h00', 
    title: 'Messe dominicale',
    category: 'Messe',
    ensemble: 'Chantre',
    description: 'Messe dominicale avec accompagnement du chantre',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
    featured: false
  },
  {
    id: 'aout-24-messe-chantre',
    type: 'messe',
    date: { day: '24', month: 'AOÛT' },
    time: '10h00',
    title: 'Messe dominicale', 
    category: 'Messe',
    ensemble: 'Chantre',
    description: 'Messe dominicale avec accompagnement du chantre',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
    featured: false
  },
  {
    id: 'aout-29-concert-winterfamily',
    type: 'concert',
    date: { day: '29', month: 'AOÛT' },
    time: '20h00',
    title: 'Concert Winter Family',
    category: 'Concert',
    ensemble: 'Winter Family',
    description: 'Performance musicale exceptionnelle en soirée',
    location: 'Cathédrale de Sion',
    price: '30 CHF',
    image: '/images/artistes/ecole-maitrisienne/ecole-1-card.jpg',
    featured: true
  },
  {
    id: 'aout-31-messe-chantre',
    type: 'messe',
    date: { day: '31', month: 'AOÛT' },
    time: '10h00',
    title: 'Messe dominicale',
    category: 'Messe', 
    ensemble: 'Chantre',
    description: 'Messe dominicale avec accompagnement du chantre',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
    featured: false
  },

  // === SEPTEMBRE 2025 ===
  {
    id: 'sept-07-messe-ensemble-schubertiade',
    type: 'messe',
    date: { day: '07', month: 'SEPT' },
    time: '10h00',
    title: 'Messe Schubertiade d\'Espace 2',
    category: 'Messe',
    ensemble: 'Ensemble vocal et instrumental',
    description: 'Messe avec ensemble vocal dans le cadre de la Schubertiade d\'Espace 2',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
    featured: true
  },
  {
    id: 'sept-14-messe-oracantat',
    type: 'messe',
    date: { day: '14', month: 'SEPT' },
    time: '10h00',
    title: 'Messe Oracantat',
    category: 'Messe',
    ensemble: 'Oracantat',
    description: 'Messe dominicale avec le chœur Oracantat',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre', 
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
    featured: false
  },
  {
    id: 'sept-21-messe-ecole-maitrisienne',
    type: 'messe',
    date: { day: '21', month: 'SEPT' },
    time: '10h00',
    title: 'Messe École maîtrisienne',
    category: 'Messe',
    ensemble: 'École maîtrisienne',
    description: 'Messe dominicale avec l\'École maîtrisienne',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
    featured: false
  },
  {
    id: 'sept-28-messe-gregorien',
    type: 'messe',
    date: { day: '28', month: 'SEPT' },
    time: '10h00',
    title: 'Messe en chant grégorien',
    category: 'Messe',
    ensemble: 'Chœur grégorien',
    description: 'Messe dominicale en chant grégorien traditionnel',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
    featured: false
  },

  // === OCTOBRE 2025 ===
  {
    id: 'oct-05-messe-ecole-maitrisienne',
    type: 'messe',
    date: { day: '05', month: 'OCT' },
    time: '10h00',
    title: 'Messe École maîtrisienne',
    category: 'Messe',
    ensemble: 'École maîtrisienne',
    description: 'Messe dominicale avec l\'École maîtrisienne',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
    featured: false
  },
  {
    id: 'oct-12-messe-schola-dedicace',
    type: 'messe',
    date: { day: '12', month: 'OCT' },
    time: '10h00',
    title: 'Messe Solennité de la Dédicace',
    category: 'Messe',
    ensemble: 'Schola',
    description: 'Célébration solennelle de la Dédicace de la cathédrale',
    location: 'Cathédrale de Sion',
    price: 'Entrée libre',
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
    featured: true
  },
  {
    id: 'nov-30-concert-fas-ensemble',
    type: 'fas',
    date: { day: '30', month: 'NOV' },
    time: '17h00',
    title: 'Concert Ensemble vocal - Festival d\'Art Sacré',
    category: 'Festival d\'Art Sacré',
    ensemble: 'Ensemble vocal et instrumental',
    description: 'Concert d\'ouverture du Festival d\'Art Sacré 2025',
    location: 'Cathédrale de Sion',
    price: '35 CHF',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=280&h=200&fit=crop',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
    featured: false
  },
  {
    id: 'dec-07-concert-fas-novantiqua',
    type: 'fas',
    date: { day: '07', month: 'DÉC' },
    time: '17h00',
    title: 'Chœur Novantiqua - Festival d\'Art Sacré',
    category: 'Festival d\'Art Sacré',
    ensemble: 'Chœur Novantiqua',
    description: 'Concert dans le cadre du Festival d\'Art Sacré',
    location: 'Cathédrale de Sion',
    price: '30 CHF',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=280&h=200&fit=crop',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
    featured: false
  },
  {
    id: 'dec-21-concert-fas-colleges',
    type: 'fas',
    date: { day: '21', month: 'DÉC' },
    time: '17h00',
    title: 'Chœur des Collèges et École maîtrisienne - FAS',
    category: 'Festival d\'Art Sacré',
    ensemble: 'Chœur des Collèges et École maîtrisienne',
    description: 'Concert de Noël dans le cadre du Festival d\'Art Sacré',
    location: 'Cathédrale de Sion',
    price: '25 CHF',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=280&h=200&fit=crop',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
    featured: true
  },
  {
    id: 'dec-26-concert-ad-astra-fas',
    type: 'fas',
    date: { day: '26', month: 'DÉC' },
    time: '20h00',
    title: 'Ensemble Ad Astra - Festival d\'Art Sacré',
    category: 'Festival d\'Art Sacré',
    ensemble: 'Ensemble Ad Astra',
    description: 'Concert de Noël exceptionnel',
    location: 'Cathédrale de Sion',
    price: '40 CHF',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=280&h=200&fit=crop',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
    featured: true
  },
  {
    id: 'jan-04-concert-fas-stile-antico',
    type: 'fas',
    date: { day: '04', month: 'JAN' },
    time: '17h00',
    title: 'Stile Antico - Festival d\'Art Sacré',
    category: 'Festival d\'Art Sacré',
    ensemble: 'Stile Antico',
    description: 'Concert exceptionnel du prestigieux ensemble britannique dans le cadre du 20ème Festival d\'Art Sacré',
    location: 'Cathédrale de Sion',
    price: '45 CHF',
    image: '/images/artistes/stile-antico/stile-antico-4-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    description: 'Concert de musique sacrée pour les Rameaux',
    location: 'Cathédrale de Sion',
    price: '25 CHF',
    image: '/images/artistes/ecole-maitrisienne/ecole-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
    featured: false
  },
  {
    id: 'avr-19-concert-ensemble',
    type: 'concert',
    date: { day: '19', month: 'AVR' },
    time: '10h00',
    title: 'Concert Ensemble vocal et instrumental',
    category: 'Concert',
    ensemble: 'Ensemble vocal et instrumental',
    description: 'Concert de musique sacrée de printemps',
    location: 'Cathédrale de Sion',
    price: '20 CHF',
    image: '/images/artistes/ecole-maitrisienne/ecole-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
    image: '/images/artistes/choeur-novantica/novantica-1-card.jpg',
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
  const currentDate = `${today.getDate().toString().padStart(2, '0')}-${today.getMonth() + 1}`;
  
  // Filtre les événements à venir (11 septembre 2025 et après)
  return maitriseEvents
    .filter(event => {
      // Convertir la date de l'événement pour comparaison
      const eventDateStr = `${event.date.day.padStart(2, '0')}-${getMonthNumber(event.date.month)}`;
      
      // Si nous sommes en septembre, ne garder que les événements du 11 et après
      if (today.getMonth() === 8) { // Septembre = mois 8
        if (event.date.month === 'SEPT') {
          return parseInt(event.date.day) >= 11;
        }
        // Garder tous les événements des mois suivants
        return !['AOÛT'].includes(event.date.month);
      }
      
      return true; // Pour les autres mois (au cas où)
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