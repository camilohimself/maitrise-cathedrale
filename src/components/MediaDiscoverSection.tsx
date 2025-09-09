'use client';

import React, { useState, useMemo, memo, useCallback } from 'react';
import Link from 'next/link';
import { MEDIA_TAB_CONFIG } from '@/data/uiConstants';

interface MediaItem {
  id: number;
  title: string;
  type: 'youtube' | 'soundcloud' | 'gallery';
  description: string;
  embedUrl?: string;
  thumbnailUrl?: string;
  duration?: string;
  category: string;
}

// Performance Dr Claude: Données externalisées
const MEDIA_ITEMS: MediaItem[] = [
    {
      id: 1,
      title: "Concert de Noël 2023",
      type: 'youtube',
      description: "L'Ensemble Vocal de la Maîtrise interprète un programme de chants de Noël traditionnels",
      embedUrl: "", // Tu ajouteras l'URL YouTube
      thumbnailUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=225&fit=crop",
      duration: "8:32",
      category: "Concert"
    },
    {
      id: 2,
      title: "Cantate BWV 147 - Bach",
      type: 'youtube', 
      description: "Interprétation de la célèbre cantate 'Herz und Mund und Tat und Leben'",
      embedUrl: "", // Tu ajouteras l'URL YouTube
      thumbnailUrl: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&h=225&fit=crop",
      duration: "12:45",
      category: "Cantate"
    },
    {
      id: 3,
      title: "Ave Maria - Schubert",
      type: 'soundcloud',
      description: "Enregistrement studio de l'Ensemble Vocal dirigé par Jean-Claude Kolly",
      embedUrl: "", // Tu ajouteras l'URL SoundCloud
      thumbnailUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=225&fit=crop",
      duration: "4:18",
      category: "Musique sacrée"
    },
    {
      id: 4,
      title: "Répétition École Maîtrisienne",
      type: 'soundcloud',
      description: "Les jeunes talents en préparation pour le prochain concert",
      embedUrl: "", // Tu ajouteras l'URL SoundCloud  
      thumbnailUrl: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&h=225&fit=crop",
      duration: "6:22",
      category: "Formation"
    }
  ] as const;

const MediaDiscoverSection = memo(() => {
  const [activeTab, setActiveTab] = useState<'youtube' | 'soundcloud' | 'gallery'>('youtube');

  // Performance Dr Claude: Memoization du filtrage
  const filteredItems = useMemo(() => 
    MEDIA_ITEMS.filter(item => item.type === activeTab),
    [activeTab]
  );

  // Performance Dr Claude: Configuration externalisée
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
              <span style={{ fontSize: '1.2rem' }}>{config.icon}</span>
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
                {/* Thumbnail placeholder */}
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
                  {!item.embedUrl && (
                    <div style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      color: '#FFFFFF',
                      padding: '12px 20px',
                      borderRadius: '25px',
                      fontFamily: 'var(--font-outfit)',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                    }}>
                      {activeTab === 'youtube' ? 'Vidéo à ajouter' : 'Audio à ajouter'}
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
                      backgroundColor: 'rgba(139, 0, 0, 0.9)',
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
                    {item.description}
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
              fontSize: '4rem',
              marginBottom: '1rem',
            }}>
              📸
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
            Page YouTube et SoundCloud dédiées bientôt disponibles
          </p>
        </div>
      </div>
    </section>
  );
});

MediaDiscoverSection.displayName = 'MediaDiscoverSection';

export default MediaDiscoverSection;