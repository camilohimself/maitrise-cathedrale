'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import fasEvents from '@/data/fasEvents.json';
import FASComposerModal from '@/components/FASComposerModal';

interface Event {
  id: number;
  title: string;
  subtitle?: string;
  type: string;
  date?: string;
  dates?: string[];
  day: string;
  time: string;
  duration: number;
  description: string;
  artists: string[];
  featured: boolean;
  category: string;
  image: string;
  prestige?: boolean;
  composer?: string;
  composers?: string[];
  conference?: {
    speaker: string;
    title: string;
    time: string;
  };
  special?: string;
  ticketUrl?: string;
}

const FASEventSection = () => {
  const events: Event[] = fasEvents.events as Event[];
  const [selectedComposer, setSelectedComposer] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mapping compositeurs vers IDs
  const composerIds: Record<string, string> = {
    "Chiara Margarita Cozzolani": "cozzolani",
    "Giovanni Pierluigi da Palestrina": "palestrina",
    "Antonio Vivaldi": "vivaldi"
  };

  const openComposerModal = (composerName: string) => {
    const composerId = composerIds[composerName];
    if (composerId) {
      setSelectedComposer(composerId);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedComposer(null), 300);
  };

  // Fonction pour rendre les noms de compositeurs cliquables
  const _renderInteractiveDescription = (_description: string, _event: Event) => {
    const processedDescription = _description;
    
    // Liste des compositeurs à rendre cliquables
    const composerNames = Object.keys(composerIds);
    
    // Remplacer chaque nom de compositeur par un lien cliquable
    composerNames.forEach(name => {
      if (processedDescription.includes(name)) {
        const parts = processedDescription.split(name);
        return (
          <span key={name}>
            {parts[0]}
            <button
              onClick={() => openComposerModal(name)}
              style={{
                color: 'var(--color-gold)',
                background: 'none',
                border: 'none',
                textDecoration: 'underline',
                cursor: 'pointer',
                fontSize: 'inherit',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-gold)';
                e.currentTarget.style.textShadow = '0 0 10px rgba(255, 215, 0, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-gold)';
                e.currentTarget.style.textShadow = 'none';
              }}
            >
              {name}
            </button>
            {parts[1]}
          </span>
        );
      }
    });
    
    return processedDescription;
  };

  // Styles CSS pour animations
  const animationStyles = `
    @keyframes fadeInScale {
      0% {
        opacity: 0;
        transform: scale(0.8) translateY(10px);
      }
      100% {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }
  `;

  // Fonction pour générer les badges prestige selon l'événement
  const generateEventBadges = (event: Event) => {
    const badges = [];
    
    // Badge 20ème édition (pour tous)
    badges.push({
      text: "20ème Édition",
      style: {
        background: 'linear-gradient(45deg, var(--color-gold), var(--color-gold))',
        color: '#1a1340',
        fontWeight: '700',
        letterSpacing: '0.05em'
      }
    });

    // Badge Prestige pour Stile Antico
    if (event.prestige) {
      badges.push({
        text: "✨ PRESTIGE",
        style: {
          background: 'linear-gradient(45deg, var(--color-red), var(--color-red))',
          color: 'white',
          fontWeight: '700',
          boxShadow: '0 8px 32px rgba(227, 50, 65, 0.4)'
        }
      });
    }

    // Badge Conférence
    if (event.conference) {
      badges.push({
        text: "🎓 Conférence Incluse",
        style: {
          background: 'linear-gradient(45deg, #4C1D95, #7C3AED)',
          color: 'white',
          fontWeight: '600'
        }
      });
    }

    // Badge spécial Messes Rorate
    if (event.special) {
      badges.push({
        text: "🕯️ " + event.special,
        style: {
          background: 'linear-gradient(45deg, #1B1B2F, #2D2D44)',
          color: 'var(--color-gold)',
          fontWeight: '600',
          border: '1px solid rgba(212, 175, 55, 0.3)'
        }
      });
    }

    // Badge Première pour Cozzolani (compositrice méconnue)
    if (event.composer === "Chiara Margarita Cozzolani") {
      badges.push({
        text: "🌟 Compositrice Redécouverte",
        style: {
          background: 'linear-gradient(45deg, #FF6B9D, #FF8CC8)',
          color: 'white',
          fontWeight: '600'
        }
      });
    }

    // Badge Jeunesse
    if (event.category === "jeunesse") {
      badges.push({
        text: "🎼 Jeunes Talents",
        style: {
          background: 'linear-gradient(45deg, #FF6B9D, #FFB3BA)',
          color: '#1a1340',
          fontWeight: '600'
        }
      });
    }

    return badges;
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
      <section style={{ 
        padding: '100px 40px',
        background: '#1a1340',
        position: 'relative'
      }}>
      {/* Background pattern élégant */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(30deg, rgba(167, 139, 250, 0.05) 25%, transparent 25%)',
        backgroundSize: '60px 60px'
      }}></div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        {/* Header section */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{
            display: 'inline-block',
            padding: '10px 28px',
            background: 'rgba(167, 139, 250, 0.15)',
            border: '1px solid rgba(167, 139, 250, 0.3)',
            borderRadius: '50px',
            marginBottom: '32px',
            backdropFilter: 'blur(10px)'
          }}>
            <span style={{
              fontSize: '0.9rem',
              fontWeight: '600',
              color: '#A78BFA',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>
              Ne manquez pas
            </span>
          </div>
          
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '300',
            color: 'white',
            marginBottom: '24px',
            fontFamily: 'var(--font-spectral), Georgia, serif'
          }}>
            L'événement du <span style={{
              fontWeight: '700',
              background: 'linear-gradient(45deg, #A78BFA, #C4B5FD)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>moment</span>
          </h2>
        </div>

        {/* Événement featured */}
        {events.length > 0 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: '60px',
            alignItems: 'center'
          }}>
            {/* Image côté gauche */}
            <div style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
              transform: 'perspective(1000px) rotateY(-5deg)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
              <Image
                src={events[0].image}
                alt={events[0].title}
                width={600}
                height={400}
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover'
                }}
              />
              
              {/* Badges prestige multiples */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                alignItems: 'flex-end'
              }}>
                {generateEventBadges(events[0]).map((badge, index) => (
                  <div 
                    key={index}
                    style={{
                      ...badge.style,
                      padding: '8px 16px',
                      borderRadius: '25px',
                      fontSize: '0.8rem',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap',
                      backdropFilter: 'blur(10px)',
                      animation: `fadeInScale 0.6s ease-out ${index * 0.1}s both`
                    }}
                  >
                    {badge.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Contenu côté droit */}
            <div>
              <div style={{
                display: 'inline-block',
                background: 'rgba(107, 70, 193, 0.2)',
                color: '#6B46C1',
                padding: '8px 20px',
                borderRadius: '50px',
                fontSize: '0.9rem',
                fontWeight: '600',
                marginBottom: '24px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                {events[0].day} • {events[0].time}
              </div>

              <h3 style={{
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                fontWeight: '700',
                color: 'white',
                lineHeight: '1.2',
                marginBottom: '20px',
                fontFamily: 'var(--font-spectral), Georgia, serif'
              }}>
                {events[0].title}
              </h3>

              {events[0].subtitle && (
                <p style={{
                  fontSize: '1.2rem',
                  color: 'var(--color-gold)',
                  fontWeight: '500',
                  marginBottom: '24px',
                  lineHeight: '1.4'
                }}>
                  {events[0].subtitle}
                </p>
              )}

              <p style={{
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.6',
                marginBottom: '16px'
              }}>
                {events[0].description.substring(0, 200)}...
              </p>

              {/* Compositeur cliquable */}
              {(events[0] as any).composer && composerIds[(events[0] as any).composer] && (
                <div style={{ marginBottom: '24px' }}>
                  <span style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '0.9rem',
                    marginRight: '8px'
                  }}>
                    Compositeur :
                  </span>
                  <button
                    onClick={() => openComposerModal((events[0] as any).composer)}
                    style={{
                      background: 'linear-gradient(45deg, var(--color-gold), var(--color-gold))',
                      color: '#1a1340',
                      border: 'none',
                      padding: '6px 16px',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(212, 175, 55, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    🎼 {(events[0] as any).composer}
                  </button>
                </div>
              )}

              {/* Artists tags */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '40px'
              }}>
                {events[0].artists.slice(0, 3).map((artist, index) => (
                  <span
                    key={index}
                    style={{
                      background: 'rgba(167, 139, 250, 0.2)',
                      color: '#A78BFA',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      border: '1px solid rgba(167, 139, 250, 0.3)'
                    }}
                  >
                    {artist}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap'
              }}>
                <a
                  href={events[0].ticketUrl || 'https://www.booking-corner.com/cmsscripts/bookOnline.aspx?lang=fr&eco=cathedralesion&num=6395'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                  style={{
                    display: 'inline-block',
                    padding: '16px 32px',
                    background: 'linear-gradient(45deg, #5B21B6, #6B46C1)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    boxShadow: '0 8px 32px rgba(107, 70, 193, 0.3)',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 16px 48px rgba(107, 70, 193, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(107, 70, 193, 0.3)';
                  }}
                >
                  Réserver maintenant
                </a>

                <Link
                  href="/agenda-billetterie"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '16px 32px',
                    background: 'transparent',
                    color: '#A78BFA',
                    border: '2px solid #A78BFA',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '500',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(167, 139, 250, 0.1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Voir tout l'agenda
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal Compositeur */}
      <FASComposerModal 
        composerId={selectedComposer}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
    </>
  );
};

export default FASEventSection;