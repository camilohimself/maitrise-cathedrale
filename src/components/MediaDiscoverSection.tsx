'use client';

import React, { useState, useMemo, memo } from 'react';
import Link from 'next/link';
import MediaPlayer from '@/components/MediaPlayer';
import { MEDIA_TAB_CONFIG } from '@/data/uiConstants';

interface MediaItem {
  id: string;
  title: string;
  type: 'youtube' | 'soundcloud' | 'gallery';
  description: string;
  embedId: string;
  thumbnailUrl: string;
  duration: string;
  category: string;
  date: string;
}

// Données média avec embeds intégrés
const MEDIA_ITEMS: MediaItem[] = [
    {
      id: 'yt-1',
      title: "Concert de Noël 2023 - Ensemble Vocal",
      type: 'youtube',
      description: "L'Ensemble Vocal de la Maîtrise interprète un programme de chants de Noël traditionnels dans le cadre magnifique de la Cathédrale Notre-Dame de Sion. Moment d'exception pour célébrer la Nativité.",
      embedId: "", // Ajouter l'ID YouTube (ex: 'dQw4w9WgXcQ')
      thumbnailUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=225&fit=crop",
      duration: "8:32",
      category: "Concert",
      date: "15 déc 2023"
    },
    {
      id: 'yt-2',
      title: "Cantate BWV 147 - Bach \"Herz und Mund\"",
      type: 'youtube', 
      description: "Interprétation de la célèbre cantate de Jean-Sébastien Bach avec l'orchestre baroque et les solistes. Un moment d'exception dans l'acoustique unique de notre cathédrale.",
      embedId: "", // Ajouter l'ID YouTube
      thumbnailUrl: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&h=225&fit=crop",
      duration: "12:45",
      category: "Cantate",
      date: "3 oct 2023"
    },
    {
      id: 'sc-1',
      title: "Ave Maria - Schubert",
      type: 'soundcloud',
      description: "Enregistrement studio de l'Ensemble Vocal dirigé par Jean-Claude Kolly. Une interprétation sensible et recueillie de ce chef-d'œuvre de Franz Schubert.",
      embedId: "", // Ajouter l'ID SoundCloud (numéro de track)
      thumbnailUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=225&fit=crop",
      duration: "4:18",
      category: "Musique sacrée",
      date: "22 nov 2023"
    },
    {
      id: 'sc-2',
      title: "Répétition École Maîtrisienne",
      type: 'soundcloud',
      description: "Découvrez le travail des jeunes talents de l'École Maîtrisienne lors d'une répétition. Formation d'excellence pour les 8-18 ans dans la tradition des maîtrises cathédrales.",
      embedId: "", // Ajouter l'ID SoundCloud
      thumbnailUrl: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&h=225&fit=crop",
      duration: "6:22",
      category: "Formation",
      date: "5 oct 2023"
    },
    {
      id: 'yt-3',
      title: "Festival d'Art Sacré 2023 - Stile Antico",
      type: 'youtube',
      description: "Moment d'exception avec l'ensemble britannique Stile Antico dans un programme consacré à Palestrina. 19ème édition du Festival d'Art Sacré de Sion.",
      embedId: "", // Ajouter l'ID YouTube
      thumbnailUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=225&fit=crop",
      duration: "25:30",
      category: "Festival",
      date: "7 jan 2023"
    },
    {
      id: 'sc-3',
      title: "Vêpres Polyphoniques - Renaissance",
      type: 'soundcloud',
      description: "Office liturgique en polyphonie Renaissance avec les œuvres de Palestrina, Victoria et Lassus. Une immersion spirituelle et musicale unique.",
      embedId: "", // Ajouter l'ID SoundCloud
      thumbnailUrl: "https://images.unsplash.com/photo-1445985543470-41fba5c3144a?w=400&h=225&fit=crop",
      duration: "18:15",
      category: "Liturgie",
      date: "28 mai 2023"
    }
  ] as const;

const MediaDiscoverSection = memo(() => {
  const [activeTab, setActiveTab] = useState<'youtube' | 'soundcloud' | 'gallery'>('youtube');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  // Performance : Memoization du filtrage
  const filteredItems = useMemo(() => 
    MEDIA_ITEMS.filter(item => item.type === activeTab),
    [activeTab]
  );

  // Configuration externalisée
  const tabConfig = MEDIA_TAB_CONFIG;

  return (
    <section style={{
      backgroundColor: '#040A23',
      padding: '120px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      
      {/* Background patterns */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 80%, rgba(184, 134, 11, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(139, 0, 0, 0.1) 0%, transparent 50%)
        `,
      }} />

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 1,
      }}>
        
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem',
        }}>
          <div style={{
            display: 'inline-block',
            padding: '10px 24px',
            backgroundColor: 'rgba(184, 134, 11, 0.2)',
            border: '1px solid rgba(184, 134, 11, 0.3)',
            borderRadius: '30px',
            color: '#B8860B',
            fontFamily: 'var(--font-outfit)',
            fontSize: '0.9rem',
            fontWeight: '600',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '2rem',
          }}>
            Écouter & Découvrir
          </div>

          <h2 style={{
            fontFamily: 'var(--font-spectral)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '700',
            color: '#FFFFFF',
            marginBottom: '1.5rem',
            lineHeight: 1.1,
          }}>
            Notre Univers Musical
          </h2>

          <p style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '1.3rem',
            fontWeight: '300',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Plongez dans l'excellence artistique de la Maîtrise à travers nos concerts, 
            enregistrements et moments privilégiés
          </p>
        </div>

        {/* Tabs navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '3rem',
          flexWrap: 'wrap',
        }}>
          {Object.entries(tabConfig).map(([key, config]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as any)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 24px',
                backgroundColor: activeTab === key ? '#8B0000' : 'rgba(255, 255, 255, 0.1)',
                color: activeTab === key ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
                border: activeTab === key ? '2px solid #8B0000' : '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50px',
                fontFamily: 'var(--font-outfit)',
                fontWeight: '600',
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={(e) => {
                if (activeTab !== key) {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== key) {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }
              }}
            >
              <div style={{
                width: '24px',
                height: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {key === 'youtube' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 12s0-3.85-.55-5.7c-.32-1.12-1.27-2.01-2.4-2.26C18.25 4 12 4 12 4s-6.25 0-8.05.04c-1.13.25-2.08 1.14-2.4 2.26C1 8.15 1 12 1 12s0 3.85.55 5.7c.32 1.12 1.27 2.01 2.4 2.26C5.75 20 12 20 12 20s6.25 0 8.05-.04c1.13-.25 2.08-1.14 2.4-2.26C23 15.85 23 12 23 12z"/>
                    <polygon points="10,15 15,12 10,9" fill={activeTab === key ? '#8B0000' : 'rgba(255,255,255,0.7)'}/>
                  </svg>
                )}
                {key === 'soundcloud' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-.36-.24-.48-.66-.24-1.021C17.34 15.46 18 13.8 18 12s-.66-3.46-1.74-4.559c-.24-.359-.12-.781.24-1.021.36-.24.78-.12 1.021.24C18.9 8.28 19.8 10.08 19.8 12s-.9 3.72-2.279 5.34zm-2.581-2.581c-.24.359-.66.48-1.021.24-.36-.24-.48-.66-.24-1.021.48-.719.8-1.56.8-2.478s-.32-1.759-.8-2.478c-.24-.359-.12-.781.24-1.021.36-.24.78-.12 1.021.24.719 1.08 1.16 2.34 1.16 3.759s-.441 2.679-1.16 3.759z"/>
                  </svg>
                )}
                {key === 'gallery' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21,15 16,10 5,21"/>
                  </svg>
                )}
              </div>
              <span>{config.label}</span>
            </button>
          ))}
        </div>

        {/* Tab description */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.6)',
            fontStyle: 'italic',
          }}>
            {tabConfig[activeTab].description}
          </p>
        </div>

        {/* Content based on active tab */}
        {activeTab !== 'gallery' ? (
          /* Media grid */
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem',
          }}>
            {filteredItems.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  backdropFilter: 'blur(10px)',
                  cursor: 'pointer',
                }}
                onClick={() => setSelectedMedia(item)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(184, 134, 11, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                {/* Thumbnail */}
                <div style={{
                  position: 'relative',
                  height: '200px',
                  backgroundColor: 'rgba(139, 0, 0, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundImage: item.thumbnailUrl ? `url(${item.thumbnailUrl})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}>
                  {!item.embedId && (
                    <div style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      color: '#FFFFFF',
                      padding: '12px 20px',
                      borderRadius: '25px',
                      fontFamily: 'var(--font-outfit)',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                    }}>
                      {item.type === 'youtube' ? 'Vidéo à ajouter' : 'Audio à ajouter'}
                    </div>
                  )}

                  {/* Play button overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(0, 0, 0, 0.3)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: item.type === 'youtube' ? 'rgba(255, 0, 0, 0.9)' : 'rgba(255, 119, 0, 0.9)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Duration badge */}
                  {item.duration && (
                    <div style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '10px',
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      color: '#FFFFFF',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontFamily: 'var(--font-outfit)',
                      fontSize: '0.8rem',
                      fontWeight: '500',
                    }}>
                      {item.duration}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.5rem',
                  }}>
                    <span style={{
                      backgroundColor: 'rgba(184, 134, 11, 0.2)',
                      color: '#B8860B',
                      padding: '2px 8px',
                      borderRadius: '8px',
                      fontFamily: 'var(--font-outfit)',
                      fontSize: '0.7rem',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                    }}>
                      {item.category}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-outfit)',
                      fontSize: '0.8rem',
                      color: 'rgba(255, 255, 255, 0.5)',
                    }}>
                      {item.date}
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-spectral)',
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    color: '#FFFFFF',
                    marginBottom: '0.5rem',
                    lineHeight: 1.3,
                  }}>
                    {item.title}
                  </h3>

                  <p style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '0.9rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    lineHeight: 1.5,
                  }}>
                    {item.description.length > 100 
                      ? `${item.description.substring(0, 100)}...`
                      : item.description
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Gallery placeholder */
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '20px',
            marginBottom: '4rem',
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              margin: '0 auto 1rem auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(184, 134, 11, 0.1)',
              borderRadius: '20px',
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21,15 16,10 5,21"/>
              </svg>
            </div>
            <h3 style={{
              fontFamily: 'var(--font-spectral)',
              fontSize: '1.5rem',
              color: '#FFFFFF',
              marginBottom: '1rem',
            }}>
              Galerie Photos
            </h3>
            <p style={{
              fontFamily: 'var(--font-outfit)',
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '1rem',
            }}>
              Une sélection de photos sera bientôt disponible ici
            </p>
          </div>
        )}

        {/* Call to action */}
        <div style={{
          textAlign: 'center',
        }}>
          <div style={{
            marginBottom: '2rem',
          }}>
            <Link 
              href="/media"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '18px 40px',
                backgroundColor: 'transparent',
                color: '#B8860B',
                border: '2px solid #B8860B',
                borderRadius: '50px',
                fontFamily: 'var(--font-outfit)',
                fontWeight: '600',
                fontSize: '1.1rem',
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#B8860B';
                e.currentTarget.style.color = '#040A23';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#B8860B';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Voir toute notre médiathèque</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '12px' }}>
                <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <p style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '0.9rem',
            color: 'rgba(255, 255, 255, 0.5)',
            fontStyle: 'italic',
          }}>
            Lecteurs YouTube et SoundCloud intégrés • Cliquez sur un média pour l'écouter
          </p>
        </div>

        {/* Media Player Modal */}
        {selectedMedia && (
          <MediaPlayer
            item={selectedMedia}
            onClose={() => setSelectedMedia(null)}
          />
        )}
      </div>
    </section>
  );
});

MediaDiscoverSection.displayName = 'MediaDiscoverSection';

export default MediaDiscoverSection;