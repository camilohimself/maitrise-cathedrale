/**
 * CONTENU FONDATION - MAÎTRISE CATHÉDRALE DE SION
 * Structure JSON pour intégration Claude Code
 * Extrait le: 08/09/2025
 * Source: https://maitrise-cathedrale.ch/
 */

const fondationContent = {
  // ============================
  // META INFORMATIONS
  // ============================
  meta: {
    siteName: "Maîtrise Cathédrale de Sion",
    sectionName: "Fondation",
    extractionDate: "2025-09-08",
    baseUrl: "https://maitrise-cathedrale.ch"
  },

  // ============================
  // PAGE: HISTORIQUE / PRÉSENTATION
  // ============================
  historique: {
    title: "Historique",
    subtitle: "Des origines à aujourd'hui",
    heroImage: {
      url: "https://maitrise-cathedrale.ch/wp-content/uploads/2021/07/voûtes_historique-scaled.jpg",
      alt: "Voûtes historique",
      credit: "Photo: Robert Hofer"
    },
    
    sections: {
      naissance: {
        title: "La naissance de la Fondation",
        content: `La Fondation a vu le jour le 1er juin 2004 lors d'une cérémonie à l'évêché de Sion. On citera, au nombre des fondateurs, le Vénérable Chapitre de la Cathédrale de Sion, la Paroisse de la Cathédrale, l'évêque de Sion, mais aussi des organismes laïcs tels la Municipalité de Sion, la Bourgeoisie de Sion et le Conservatoire cantonal de Musique. La participation de ceux-ci montre l'intérêt de la collectivité pour l'émergence, à Sion, d'une structure destinée à promouvoir la musique sacrée et à se spécialiser dans ce registre si particulier.`,
        date: "1er juin 2004"
      },
      
      mission: {
        title: "Mission principale",
        content: `La première tâche de la Fondation a été de bâtir formellement la Maîtrise de la Cathédrale. Cette Maîtrise est conçue comme une structure permettant de réunir les différentes forces musicales et religieuses qui assurent le chant liturgique des offices célébrés à la Cathédrale de Sion.`,
        focus: "Chant liturgique des offices"
      },
      
      formation: {
        title: "Œuvre de formation",
        content: `La Fondation entend surtout poursuivre l'œuvre de formation musicale et spirituelle, qui est l'intuition originelle et multiséculaire des Maîtrises cathédrales, par la création, le soutien et le développement d'une de ses composantes principales: l'Ecole maîtrisienne. Elle se propose ainsi de ranimer les racines historiques, culturelles et religieuses qui plongent aux origines mêmes de notre civilisation. Elle veut le faire autour d'un édifice qui rassemble, depuis des siècles, les forces religieuses et culturelles de la cité.`
      },
      
      lieu: {
        title: "Un lieu d'exception",
        content: `Au cœur de Sion se dresse en effet une magnifique Cathédrale, lieu de beauté et de célébration, joyau culturel de la capitale du Valais et religieux du Diocèse de Sion. C'est dans ce haut lieu valaisan que la Fondation se propose de réaliser ses buts par le truchement de la musique sous son double aspect spirituel et culturel.`,
        image: {
          url: "https://maitrise-cathedrale.ch/wp-content/uploads/2021/06/Cathédrale_extérieur_Sion-scaled.jpg",
          alt: "Cathédrale extérieur Sion",
          credit: "Photo: Robert Hofer"
        }
      }
    },
    
    videos: [
      {
        title: "la Maîtrise de la cathédrale, Sylvain Jaccard",
        url: "https://www.youtube.com/watch?v=ToSUQqEsBHw"
      },
      {
        title: "Concert du dixième anniversaire de la Maîtrise de la Cathédrale de Sion",
        url: "https://www.youtube.com/watch?v=K8FhSkT23cE"
      }
    ]
  },

  // ============================
  // PAGE: BUTS & OBJECTIFS
  // ============================
  objectifs: {
    title: "Buts de la Fondation",
    
    vision: {
      content: `Elle aimerait ainsi offrir à nos contemporains, souvent désorientés par certains aspects déshumanisants de la société moderne, l'occasion de trouver un surplus de sens. Dans cette optique, les buts fixés statutairement et que la Fondation entend poursuivre sont nombreux.`,
      image: {
        url: "https://maitrise-cathedrale.ch/wp-content/uploads/2021/06/visuel_ange.jpg",
        alt: "Visuel ange"
      }
    },
    
    buts: [
      {
        id: "principal",
        title: "But principal",
        content: "Soutenir et gérer les ensembles vocaux et instrumentaux assurant le chant liturgique de la Cathédrale au sens large (i.e. offices religieux et concerts), pour y favoriser l'émergence d'un pôle d'excellence et favoriser un rayonnement en matière de musique sacrée."
      },
      {
        id: "culturel",
        title: "Rayonnement culturel",
        content: "Promouvoir l'aspect culturel de la Fondation comme image de marque de la Ville de Sion, de l'Evêché et du Canton du Valais."
      },
      {
        id: "excellence",
        title: "Pôle d'excellence",
        content: "Attirer en Valais et à Sion des professeurs et artistes de haut niveau et réunir les compétences et les énergies disponibles en vue de constituer une Ecole maîtrisienne capable de proposer un enseignement de qualité en matière musicale et liturgique."
      }
    ]
  },

  // ============================
  // PAGE: ORGANISATION
  // ============================
  organisation: {
    title: "Organisation & Fonctionnement",
    
    description: `La Fondation Musique sacrée et Maîtrise de la Cathédrale de Sion est dirigée par un Conseil de Fondation composé, entre autres, de représentants de ses membres fondateurs. La gestion courante, l'administration et le secrétariat, de même que l'organisation du Festival d'art sacré, de l'Ecole cathédrale et des concerts est assumée par le Bureau de la Fondation (une secrétaire salariée à temps partiel, une comptable, le directeur artistique, la présidente, le vice-président et deux membres du Conseil de Fondation, en réunions mensuelles).`,
    
    conseil: {
      title: "Conseil de Fondation",
      membres: [
        { fonction: "Président", nom: "M. Pierre-Christian von Roten" },
        { fonction: "Secrétaire administrative", nom: "Mme Sylvie Bernhard" },
        { fonction: "Directeur artistique", nom: "M. Jean-David Waeber" },
        { fonction: "Représentant de l'évêché", nom: "Mgr Pierre-Yves Maillard" },
        { fonction: "Représentant du Chapitre cathédral", nom: "Mgr Pierre-Yves Maillard" },
        { fonction: "Représentant de la Paroisse de la Cathédrale", nom: "Abbé François Roten" },
        { fonction: "Représentant de la municipalité de Sion", nom: "Mme Carole Schmid" },
        { fonction: "Représentante de la Bourgeoisie de Sion", nom: "M. Grégoire Iten" },
        { fonction: "Représentant du Conservatoire cantonal", nom: "M. Thierry Debons" },
        { fonction: "Représentante de l'Association des Amis", nom: "" },
        { fonction: "Vice-président", nom: "M. Johan Beltramini" },
        { fonction: "Membre", nom: "M. Jean-Hugues Seppey" }
      ]
    },
    
    bureau: {
      title: "Bureau du Conseil",
      membres: [
        { fonction: "Présidente", nom: "M. Pierre-Christian von Roten" },
        { fonction: "Secrétaire", nom: "Mme Sylvie Bernhard" },
        { fonction: "Comptable", nom: "Mme Pascale Sidler Rey" },
        { fonction: "Directeur artistique", nom: "M. Jean-David Waeber" },
        { fonction: "Vice-président", nom: "M. Johan Beltramini" },
        { fonction: "Membre", nom: "M. Jean-Hugues Seppey" }
      ]
    }
  },

  // ============================
  // PAGE: MEMBRES FONDATEURS
  // ============================
  fondateurs: {
    title: "Membres fondateurs",
    date: "1er juin 2004",
    liste: [
      {
        nom: "Vénérable Chapitre de la Cathédrale de Sion",
        type: "Institution religieuse"
      },
      {
        nom: "Paroisse de la Cathédrale",
        type: "Institution religieuse"
      },
      {
        nom: "Evêque de Sion",
        type: "Institution religieuse"
      },
      {
        nom: "Municipalité de Sion",
        type: "Institution laïque"
      },
      {
        nom: "Bourgeoisie de Sion",
        type: "Institution laïque"
      },
      {
        nom: "Conservatoire cantonal de Musique",
        type: "Institution laïque"
      }
    ]
  },

  // ============================
  // PAGE: ASSOCIATION DES AMIS
  // ============================
  associationAmis: {
    title: "L'Association des Amis",
    
    presentation: `L'Association des Amis de la Fondation Musique Sacrée et Maîtrise de la Cathédrale de Sion a été constituée le même jour que la Fondation. Elle s'est donnée comme objectif de soutenir la Fondation pour l'aider à atteindre ses buts, en lui assurant notamment son aide dans la récolte des fonds nécessaires à son bon fonctionnement. Elle l'aide aussi dans la mise en œuvre des moyens propres à lui assurer son rayonnement.`,
    
    organisation: `L'Association a un comité indépendant, composé d'un-e président-e, d'un-e représentant-e du clergé sédunois, de l'Ensemble vocal et instrumental de la Maîtrise, de l'Ecole maîtrisienne, du Chœur liturgique Cath'Voix, du Maître de chapelle.`,
    
    avantages: {
      title: "Avantages membres",
      liste: [
        "Information régulière des activités de la Fondation",
        "Réduction de 5 francs sur le prix de l'entrée aux concerts de la Cathédrale"
      ]
    },
    
    adhesion: {
      title: "Devenir membre",
      texte: "Vous pouvez devenir membre Ami de notre Fondation en contactant notre secrétariat",
      contact: {
        telephone: "079 616 90 94",
        email: "musiquesacree@cath-vs.org"
      }
    }
  },

  // ============================
  // INFORMATIONS PRATIQUES
  // ============================
  contact: {
    nom: "Fondation Musique sacrée et Maîtrise de la Cathédrale de Sion",
    adresse: {
      ligne1: "Rue de la Cathédrale 13",
      ligne2: "1950 Sion"
    },
    telephone: "079 616 90 94",
    email: "musiquesacree@cath-vs.org",
    secretariat: {
      responsable: "Mme Sylvie Bernhard",
      telephone: "079 616 90 94"
    }
  },

  // ============================
  // TEXTE INTRODUCTIF GÉNÉRAL
  // ============================
  introduction: {
    tagline: "LA FONDATION MUSIQUE SACREE ET MAITRISE DE LA CATHEDRALE DE SION A POUR OBJECTIF LE DEVELOPPEMENT DE LA MUSIQUE SACREE A LA CATHEDRALE, LIEU DE CELEBRATION ET DE BEAUTE, EGLISE-MERE DU DIOCESE DE SION ET JOYAU CULTUREL DE LA CAPITALE",
    
    shortDescription: "La Fondation Musique sacrée et Maîtrise de la Cathédrale de Sion a pour objectif le développement de la musique sacrée à la Cathédrale, lieu de célébration et de beauté, église-mère du diocèse de Sion et joyau culturel de la capitale."
  },

  // ============================
  // ÉVÉNEMENT MARQUANT
  // ============================
  anniversaire: {
    title: "20 ans de la Fondation",
    date: "2 juin 2024",
    description: "La Fondation Musique Sacrée et Maîtrise de la Cathédrale de Sion a fêté ses 20 ans avec un concert anniversaire extraordinaire et un partage festif et chaleureux dans les jardins de l'Evêché.",
    changements: [
      "Prise de congé de la Présidente Liliane Varone",
      "Accueil du successeur Pierre-Christian von Roten"
    ]
  }
};

export default fondationContent;