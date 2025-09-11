'use client';

import React from 'react';
import Image from 'next/image';

const AgendaTestPage = () => {
  // Exemples de vignettes avec les 3 types d'événements
  const eventExamples = [
    {
      id: 1,
      type: 'messe',
      title: 'Messe de l\'Assomption',
      date: { day: '15', month: 'AOÛT' },
      time: '10h00',
      location: 'Cathédrale de Sion',
      ensemble: 'Chapelle musicale',
      description: 'Célébration solennelle de l\'Assomption de la Vierge Marie',
      category: 'Messe',
      price: 'Entrée libre',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=280&h=200&fit=crop'
    },
    {
      id: 2,
      type: 'concert',
      title: 'Concert Winter Family',
      date: { day: '29', month: 'AOÛT' },
      time: '20h00',
      location: 'Cathédrale de Sion',
      ensemble: 'Winter Family',
      description: 'Performance musicale exceptionnelle dans la cathédrale',
      category: 'Concert',
      price: '25 CHF',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=280&h=200&fit=crop'
    },
    {
      id: 3,
      type: 'fas',
      title: 'Stile Antico - Festival d\'Art Sacré',
      date: { day: '04', month: 'JAN' },
      time: '17h00',
      location: 'Cathédrale de Sion',
      ensemble: 'Stile Antico',
      description: 'Concert dans le cadre du 20ème Festival d\'Art Sacré',
      category: 'Festival d\'Art Sacré',
      price: '35 CHF',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=280&h=200&fit=crop'
    }
  ];

  // Configuration des couleurs selon les types demandés
  const typeConfig = {
    messe: {
      borderColor: '#D4A574', // Doré pour messe
      badgeColor: '#D4A574'
    },
    concert: {
      borderColor: '#8B0000', // Rouge bordeaux (vrai rouge du site)
      badgeColor: '#8B0000'
    },
    fas: {
      borderColor: '#4A1B87', // Violet profond (équivalent bordeaux du violet)
      badgeColor: '#4A1B87'
    }
  };

  // Fonction pour obtenir le jour de la semaine
  const getDayOfWeek = (day: string) => {
    const dayMap: { [key: string]: string } = {
      '15': 'Vendredi',
      '29': 'Vendredi', 
      '04': 'Dimanche'
    };
    return dayMap[day] || 'Dimanche';
  };

  // Vérifier si l'événement est payant
  const isPaidEvent = (price: string) => {
    return !price.toLowerCase().includes('gratuit') && 
           !price.toLowerCase().includes('libre') && 
           !price.toLowerCase().includes('collecte');
  };

  return (
    <div style={{
      minHeight: '100vh',
      paddingTop: '80px',
      paddingBottom: '80px',
      backgroundColor: '#FAFAF9'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0 24px'
      }}>
        <h1 style={{
          fontSize: '42px',
          fontWeight: '700',
          color: '#1a1340',
          marginBottom: '16px',
          textAlign: 'center'
        }}>
          Test Vignettes Agenda - Style EventCard Existant
        </h1>
        <p style={{
          fontSize: '18px',
          color: '#6B7280',
          textAlign: 'center',
          marginBottom: '48px'
        }}>
          3 types avec codes couleur de bordure : Messe (Doré) • Concert (Rouge) • FAS (Violet)
        </p>

        {/* Liste des 3 vignettes - Style EventCard horizontal */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          marginBottom: '64px'
        }}>
          {eventExamples.map((event) => {
            const config = typeConfig[event.type as keyof typeof typeConfig];
            return (
              <div
                key={event.id}
                style={{
                  position: 'relative',
                  backgroundColor: '#FFFFFF',
                  border: `3px solid ${config.borderColor}`, // Couleur de bordure selon le type
                  borderRadius: '0 50px 50px 0',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  height: '200px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'row'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = `0 8px 32px ${config.borderColor}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Section Date - Côté gauche */}
                <div style={{
                  width: '140px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#FFFFFF',
                  borderRight: `1px solid ${config.borderColor}40`
                }}>
                  {/* Jour de la semaine */}
                  <div style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: config.borderColor,
                    textTransform: 'capitalize',
                    marginBottom: '8px',
                    textAlign: 'center'
                  }}>
                    {getDayOfWeek(event.date.day)}
                  </div>
                  
                  {/* Numéro du jour - TRÈS GRAND */}
                  <div style={{
                    fontFamily: 'var(--font-spectral)',
                    fontSize: '72px',
                    fontWeight: '700',
                    color: config.borderColor,
                    lineHeight: 0.8,
                    textAlign: 'center'
                  }}>
                    {event.date.day}
                  </div>
                  
                  {/* Mois */}
                  <div style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '16px',
                    fontWeight: '600',
                    color: config.borderColor,
                    textTransform: 'uppercase',
                    marginTop: '4px',
                    textAlign: 'center'
                  }}>
                    {event.date.month}
                  </div>
                  
                  {/* Heure */}
                  <div style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '12px',
                    fontWeight: '500',
                    color: '#B8860B',
                    marginTop: '12px',
                    textAlign: 'center'
                  }}>
                    {event.time}
                  </div>
                </div>

                {/* Section Contenu - Centre */}
                <div style={{
                  flex: 1,
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  {/* Badge catégorie avec couleur du type */}
                  <div style={{
                    display: 'inline-block',
                    backgroundColor: config.badgeColor,
                    color: '#FFFFFF',
                    padding: '4px 12px',
                    borderRadius: '4px',
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '11px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '12px',
                    alignSelf: 'flex-start'
                  }}>
                    {event.category}
                  </div>

                  {/* Titre */}
                  <h3 style={{
                    fontFamily: 'var(--font-spectral)',
                    fontSize: '28px',
                    fontWeight: '700',
                    color: config.borderColor, // Titre de la couleur du type
                    marginBottom: '8px',
                    lineHeight: 1.2,
                    margin: '0 0 8px 0'
                  }}>
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '13px',
                    fontWeight: '400',
                    color: '#666666',
                    lineHeight: 1.4,
                    marginBottom: '16px',
                    margin: '0 0 16px 0'
                  }}>
                    {event.description}
                  </p>

                  {/* CTAs */}
                  <div style={{
                    display: 'flex',
                    gap: '8px',
                    marginTop: '16px'
                  }}>
                    {/* CTA Billetterie - Seulement si payant */}
                    {isPaidEvent(event.price) && (
                      <button style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '8px 16px',
                        backgroundColor: config.borderColor,
                        color: '#FFFFFF',
                        border: 'none',
                        borderRadius: '16px',
                        fontFamily: 'var(--font-outfit)',
                        fontWeight: '600',
                        fontSize: '12px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}>
                        Billetterie
                      </button>
                    )}
                    
                    {/* CTA Calendrier */}
                    <button style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '8px 16px',
                      backgroundColor: '#B8860B',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '16px',
                      fontFamily: 'var(--font-outfit)',
                      fontWeight: '600',
                      fontSize: '12px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}>
                      Calendrier
                    </button>
                    
                    {/* CTA Partage */}
                    <button style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '8px 16px',
                      backgroundColor: `${config.borderColor}20`,
                      color: config.borderColor,
                      border: `1px solid ${config.borderColor}60`,
                      borderRadius: '16px',
                      fontFamily: 'var(--font-outfit)',
                      fontWeight: '600',
                      fontSize: '12px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}>
                      Partager
                    </button>
                  </div>
                </div>

                {/* Section Image - Côté droit */}
                <div style={{
                  width: '280px',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '0 47px 47px 0'
                }}>
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    style={{ 
                      objectFit: 'cover'
                    }}
                    sizes="280px"
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, transparent 0%, rgba(0,0,0,0.1) 100%)'
                  }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Légende des couleurs */}
        <div style={{
          padding: '32px',
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#1a1340',
            marginBottom: '20px'
          }}>
            Système de couleurs EventCard :
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px'
          }}>
            {Object.entries(typeConfig).map(([key, config]) => (
              <div key={key} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px',
                borderRadius: '8px',
                backgroundColor: `${config.borderColor}10`,
                border: `2px solid ${config.borderColor}`
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: config.borderColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}>
                  {key === 'messe' ? 'M' : key === 'concert' ? 'C' : 'F'}
                </div>
                <div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: config.borderColor
                  }}>
                    {key === 'messe' ? 'Messe' : key === 'concert' ? 'Concert' : 'Festival d\'Art Sacré'}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#6B7280'
                  }}>
                    Bordure: {config.borderColor}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgendaTestPage;