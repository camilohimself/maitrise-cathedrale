// Données complètes des tracks SoundCloud - Maîtrise de la Cathédrale de Sion
// Dernière mise à jour : 19 septembre 2024

export const soundcloudTracks = [
  // ===== BACH (8 tracks) =====
  {
    id: "bach-bwv61-coro",
    title: "Nun komm der Heiden Heiland",
    subtitle: "BWV 61 - I. Coro",
    soundcloudUrl: "https://soundcloud.com/maitrise-cathedrale-sion/js-bach-nun-komm-der-heiden-heiland-bwv-61-i-coro",
    duration: "TBD",
    description: "Chœur d'ouverture de la cantate BWV 61 pour le premier dimanche de l'Avent",
    composer: "J.S. Bach",
    category: "bach",
    opus: "BWV 61"
  },
  {
    id: "bach-bwv61-aria",
    title: "Nun komm der Heiden Heiland",
    subtitle: "BWV 61 - V. Aria (soprano)",
    soundcloudUrl: "https://soundcloud.com/maitrise-cathedrale-sion/js-bach-nun-komm-der-heiden-heiland-bwv-61-v-aria",
    duration: "TBD",
    description: "Aria de soprano de la cantate BWV 61",
    composer: "J.S. Bach",
    category: "bach",
    opus: "BWV 61"
  },
  {
    id: "bach-bwv4-choral",
    title: "Christ lag in Todes Banden",
    subtitle: "BWV 4 - VIII. Verset 7 - Choral",
    soundcloudUrl: "https://soundcloud.com/maitrise-cathedrale-sion/js-bach-christ-lag-in-todes-banden-bwv-4-viii-verset-7-choral",
    duration: "TBD",
    description: "Choral final de la cantate pascale BWV 4",
    composer: "J.S. Bach",
    category: "bach",
    opus: "BWV 4"
  },
  {
    id: "bach-bwv4-choeur",
    title: "Christ lag in Todes Banden",
    subtitle: "BWV 4 - V. Verset 4 - Chœur",
    soundcloudUrl: "https://soundcloud.com/maitrise-cathedrale-sion/js-bach-christ-lag-in-todes-banden-bwv-4-v-verset-4-choeur",
    duration: "TBD",
    description: "Chœur du verset 4 de la cantate pascale BWV 4",
    composer: "J.S. Bach",
    category: "bach",
    opus: "BWV 4"
  },
  {
    id: "bach-bwv51-air",
    title: "Jauchzet Gott in allen Landen",
    subtitle: "BWV 51 - Air (soprano)",
    soundcloudUrl: "https://soundcloud.com/maitrise-cathedrale-sion/js-bach-jauchzet-gott-in-allen-landen-bwv-51-air-soprano",
    duration: "TBD",
    description: "Célèbre air de soprano avec trompette de la cantate BWV 51",
    composer: "J.S. Bach",
    category: "bach",
    opus: "BWV 51"
  },
  {
    id: "bach-bwv80-choeur",
    title: "Ein feste Burg ist unser Gott",
    subtitle: "BWV 80 - Chœur d'entrée",
    soundcloudUrl: "https://soundcloud.com/maitrise-cathedrale-sion/js-bach-ein-feste-burg-ist-unser-gott-bwv-80-choeur-dentree",
    duration: "TBD",
    description: "Chœur d'ouverture de la cantate de la Réforme BWV 80",
    composer: "J.S. Bach",
    category: "bach",
    opus: "BWV 80"
  },
  {
    id: "bach-bwv140-choral",
    title: "Wachet auf, ruft uns die Stimme",
    subtitle: "BWV 140 - Choral (ténor)",
    soundcloudUrl: "https://soundcloud.com/maitrise-cathedrale-sion/js-bach-wachet-auf-ruft-uns-die-stimme-bwv-140-choral-tenor",
    duration: "TBD",
    description: "Choral de ténor de la cantate BWV 140 'Wachet auf'",
    composer: "J.S. Bach",
    category: "bach",
    opus: "BWV 140"
  },
  {
    id: "bach-bwv599-choral",
    title: "Nun komm, der Heiden Heiland",
    subtitle: "BWV 599 - Choral d'orgue",
    soundcloudUrl: "https://soundcloud.com/maitrise-cathedrale-sion/js-bach-nun-komm-der-heiden-heiland-bwv-599-choral-dorgue",
    duration: "TBD",
    description: "Choral d'orgue tiré de l'Orgelbüchlein",
    composer: "J.S. Bach",
    category: "bach",
    opus: "BWV 599"
  },

  // ===== SCHÜTZ (2 tracks) =====
  {
    id: "schutz-swv435-introduction",
    title: "Weihnachts-Historie",
    subtitle: "SWV 435 - I. Introduction 'Die Geburt'",
    soundcloudUrl: "https://soundcloud.com/maitrise-cathedrale-sion/h-schutz-weihnachts-historie-swv-435-i-introduction-die-geburt",
    duration: "TBD",
    description: "Introduction de l'Histoire de Noël de Heinrich Schütz",
    composer: "H. Schütz",
    category: "schutz",
    opus: "SWV 435"
  },
  {
    id: "schutz-swv435-intermedium",
    title: "Weihnachts-Historie",
    subtitle: "SWV 435 - III. Intermedium 'Der Engel zu den Hirten'",
    soundcloudUrl: "https://soundcloud.com/maitrise-cathedrale-sion/h-schutz-weihnachts-historie-swv-435-iii-intermedium-der-engel-zu-den-hirten",
    duration: "TBD",
    description: "L'Ange aux bergers de l'Histoire de Noël de Heinrich Schütz",
    composer: "H. Schütz",
    category: "schutz",
    opus: "SWV 435"
  }
];

// Catégories pour l'interface
export const trackCategories = {
  bach: {
    label: "J.S. Bach",
    description: "Cantates et chorals",
    color: "#D4A574",
    count: 8
  },
  schutz: {
    label: "H. Schütz",
    description: "Musique sacrée baroque",
    color: "#E33241",
    count: 2
  }
};

// Fonction utilitaire pour filtrer par catégorie
export const getTracksByCategory = (category) => {
  return soundcloudTracks.filter(track => track.category === category);
};

// Fonction pour obtenir toutes les tracks
export const getAllTracks = () => {
  return soundcloudTracks;
};