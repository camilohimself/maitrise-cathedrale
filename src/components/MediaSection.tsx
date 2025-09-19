'use client';

import React, { useState } from 'react';
import { soundcloudTracks, trackCategories, getTracksByCategory } from '../data/soundcloudTracks';

interface Track {
  id: string;
  title: string;
  subtitle: string;
  soundcloudUrl: string;
  duration: string;
  description: string;
  composer: string;
  category: string;
  opus: string;
}

const MediaSection = () => {
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('bach');

  const tracks = getTracksByCategory(activeCategory);

  const handlePlayPause = (trackId: string) => {
    if (currentTrack === trackId) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(trackId);
      setIsPlaying(true);
      // Ouvrir SoundCloud dans un nouvel onglet
      const track = soundcloudTracks.find(t => t.id === trackId);
      if (track) {
        window.open(track.soundcloudUrl, '_blank');
      }
    }
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentTrack(null);
    setIsPlaying(false);
  };

  return (
    <section 
      id="media"
      style={{
        backgroundColor: '#040A23',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.05,
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 10px,
          rgba(255,255,255,0.1) 10px,
          rgba(255,255,255,0.1) 20px
        )`
      }}></div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Section Title */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '800',
            color: '#fff',
            marginBottom: '20px',
            fontFamily: 'var(--font-family)'
          }}>
            Écouter & Voir
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '600px',
            margin: '0 auto',
            fontFamily: 'var(--font-family)'
          }}>
            Découvrez les enregistrements de nos concerts et performances
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px'
        }}>
          {/* Audio Player Section */}
          <div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#D4A574',
              marginBottom: '30px',
              fontFamily: 'var(--font-family)'
            }}>
              Nos enregistrements
            </h3>

            {/* Category Tabs */}
            <div style={{
              display: 'flex',
              gap: '15px',
              marginBottom: '30px',
              flexWrap: 'wrap'
            }}>
              {Object.entries(trackCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => handleCategoryChange(key)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '20px',
                    border: `2px solid ${category.color}`,
                    backgroundColor: activeCategory === key ? category.color : 'transparent',
                    color: activeCategory === key ? '#fff' : category.color,
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontFamily: 'var(--font-family)'
                  }}
                  onMouseEnter={(e) => {
                    if (activeCategory !== key) {
                      e.currentTarget.style.backgroundColor = `${category.color}20`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeCategory !== key) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>

            {/* Track List */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px'
            }}>
              {tracks.map((track) => (
                <div
                  key={track.id}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    border: `1px solid ${trackCategories[track.category as keyof typeof trackCategories].color}20`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.borderColor = `${trackCategories[track.category as keyof typeof trackCategories].color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.borderColor = `${trackCategories[track.category as keyof typeof trackCategories].color}20`;
                  }}
                >
                  {/* Play Button */}
                  <button
                    onClick={() => handlePlayPause(track.id)}
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: trackCategories[track.category as keyof typeof trackCategories].color,
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  </button>

                  {/* Track Info */}
                  <div style={{ flex: 1 }}>
                    <h4 style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#fff',
                      marginBottom: '3px',
                      fontFamily: 'var(--font-family)'
                    }}>
                      {track.title}
                    </h4>
                    <p style={{
                      fontSize: '15px',
                      color: trackCategories[track.category as keyof typeof trackCategories].color,
                      marginBottom: '5px',
                      fontFamily: 'var(--font-family)'
                    }}>
                      {track.subtitle}
                    </p>
                    <p style={{
                      fontSize: '13px',
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontFamily: 'var(--font-family)'
                    }}>
                      {track.description}
                    </p>
                  </div>

                  {/* SoundCloud Link */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#ff5500">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span style={{
                      fontSize: '12px',
                      color: 'rgba(255, 255, 255, 0.5)',
                      fontFamily: 'var(--font-family)'
                    }}>
                      SoundCloud
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Section */}
          <div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#D2AB5F',
              marginBottom: '30px',
              fontFamily: 'var(--font-family)'
            }}>
              Vidéos récentes
            </h3>

            {/* Video Placeholder */}
            <div style={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '8px',
              aspectRatio: '16/9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                textAlign: 'center'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(210, 171, 95, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(210, 171, 95, 0.3)';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(210, 171, 95, 0.2)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="#D2AB5F">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                </div>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '16px',
                  fontFamily: 'var(--font-family)'
                }}>
                  Concert de Noël 2024
                </p>
              </div>
            </div>

            {/* YouTube Channel Link */}
            <a 
              href="https://youtube.com/@maitrisecathedrale"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                marginTop: '20px',
                padding: '12px 24px',
                backgroundColor: 'transparent',
                border: '2px solid #D2AB5F',
                color: '#D2AB5F',
                textDecoration: 'none',
                borderRadius: '4px',
                fontSize: '15px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                fontFamily: 'var(--font-family)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#D2AB5F';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#D2AB5F';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Voir toutes nos vidéos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;