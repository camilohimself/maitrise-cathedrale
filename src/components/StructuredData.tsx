'use client';

import Script from 'next/script';

interface StructuredDataProps {
  type: 'organization' | 'event' | 'musicGroup' | 'educationalOrganization';
  data?: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const getOrganizationData = () => ({
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Fondation de la Maîtrise de la Cathédrale de Sion",
    "alternateName": "Maîtrise de la Cathédrale de Sion",
    "description": "École de chant et ensemble vocal d'exception au cœur du Valais. Formation musicale et spirituelle depuis 2004.",
    "url": "https://www.maitrise-cathedrale.ch",
    "logo": "https://www.maitrise-cathedrale.ch/images/logo.png",
    "image": "https://www.maitrise-cathedrale.ch/images/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Place de la Cathédrale",
      "addressLocality": "Sion",
      "postalCode": "1950",
      "addressRegion": "Valais",
      "addressCountry": "CH"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+41-27-322-22-20",
      "email": "info@maitrise-cathedrale.ch",
      "contactType": "customer service",
      "availableLanguage": ["French", "German"]
    },
    "foundingDate": "2004-06-01",
    "founder": [
      {
        "@type": "Organization",
        "name": "Chapitre de la Cathédrale"
      },
      {
        "@type": "Organization", 
        "name": "Diocèse de Sion"
      },
      {
        "@type": "Organization",
        "name": "Ville de Sion"
      },
      {
        "@type": "Organization",
        "name": "Canton du Valais"
      },
      {
        "@type": "Organization",
        "name": "Association des Amis de l'Orgue"
      },
      {
        "@type": "Organization",
        "name": "Fondation Eben-Hézer"
      }
    ],
    "areaServed": {
      "@type": "Place",
      "name": "Valais, Switzerland"
    },
    "sameAs": [
      "https://www.youtube.com/@maitrisecathedrale",
      "https://www.facebook.com/maitrisecathedrale"
    ]
  });

  const getMusicGroupData = () => ({
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": "Maîtrise de la Cathédrale de Sion",
    "description": "Ensemble vocal d'exception composé de jeunes chanteurs formés dès le plus jeune âge dans la tradition du chant sacré.",
    "genre": ["Sacred Music", "Gregorian Chant", "Classical Music"],
    "foundingDate": "2004",
    "foundingLocation": {
      "@type": "Place",
      "name": "Sion, Valais, Switzerland"
    },
    "memberOf": {
      "@type": "Organization",
      "name": "Fondation de la Maîtrise de la Cathédrale de Sion"
    }
  });

  const getStructuredData = () => {
    switch (type) {
      case 'organization':
      case 'educationalOrganization':
        return getOrganizationData();
      case 'musicGroup':
        return getMusicGroupData();
      case 'event':
        return data || {};
      default:
        return getOrganizationData();
    }
  };

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  );
};

export default StructuredData;