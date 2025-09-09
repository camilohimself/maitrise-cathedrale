'use client';

import React, { useState } from 'react';
import type { MediaItem } from '@/types/media';

interface MediaPlayerProps {
  item: MediaItem;
  onClose: () => void;
}

const MediaPlayer: React.FC<MediaPlayerProps> = ({ item, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  const getEmbedUrl = () => {
    if (item.type === 'youtube') {
      return `https://www.youtube.com/embed/${item.embedId}?autoplay=1&rel=0&modestbranding=1`;
    } else if (item.type === 'soundcloud') {
      return `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${item.embedId}&color=%23B8860B&auto_play=true&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`;
    }
    return '';
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        backdropFilter: 'blur(10px)',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          maxWidth: item.type === 'youtube' ? '1200px' : '800px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with close button */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.5rem 2rem',
          borderBottom: '1px solid rgba(139, 0, 0, 0.1)',
          backgroundColor: '#F8F9FA',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: item.type === 'youtube' ? '#FF0000' : '#FF7700',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {item.type === 'youtube' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M23 12s0-3.85-.55-5.7c-.32-1.12-1.27-2.01-2.4-2.26C18.25 4 12 4 12 4s-6.25 0-8.05.04c-1.13.25-2.08 1.14-2.4 2.26C1 8.15 1 12 1 12s0 3.85.55 5.7c.32 1.12 1.27 2.01 2.4 2.26C5.75 20 12 20 12 20s6.25 0 8.05-.04c1.13-.25 2.08-1.14 2.4-2.26C23 15.85 23 12 23 12z"/>
                  <polygon points="10,15 15,12 10,9" fill="#FF0000"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-.36-.24-.48-.66-.24-1.021C17.34 15.46 18 13.8 18 12s-.66-3.46-1.74-4.559c-.24-.359-.12-.781.24-1.021.36-.24.78-.12 1.021.24C18.9 8.28 19.8 10.08 19.8 12s-.9 3.72-2.279 5.34zm-2.581-2.581c-.24.359-.66.48-1.021.24-.36-.24-.48-.66-.24-1.021.48-.719.8-1.56.8-2.478s-.32-1.759-.8-2.478c-.24-.359-.12-.781.24-1.021.36-.24.78-.12 1.021.24.719 1.08 1.16 2.34 1.16 3.759s-.441 2.679-1.16 3.759z"/>
                </svg>
              )}
            </div>
            
            <div>
              <h3 style={{
                fontFamily: 'var(--font-spectral)',
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#8B0000',
                margin: 0,
                lineHeight: 1.2,
              }}>
                {item.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: '0.8rem',
                color: '#666',
                margin: 0,
                textTransform: 'uppercase',
                fontWeight: '500',
              }}>
                {item.type === 'youtube' ? 'YouTube' : 'SoundCloud'} • {item.duration}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: 'rgba(139, 0, 0, 0.1)',
              color: '#8B0000',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#8B0000';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(139, 0, 0, 0.1)';
              e.currentTarget.style.color = '#8B0000';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Media player */}
        <div style={{
          position: 'relative',
          aspectRatio: item.type === 'youtube' ? '16/9' : '16/9',
          backgroundColor: '#000',
        }}>
          {item.embedId ? (
            <iframe
              width="100%"
              height="100%"
              src={getEmbedUrl()}
              title={item.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              onLoad={() => setIsLoading(false)}
              style={{
                opacity: isLoading ? 0 : 1,
                transition: 'opacity 0.3s ease',
              }}
            />
          ) : (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              backgroundColor: '#040A23',
              color: '#FFFFFF',
              backgroundImage: `url(${item.thumbnailUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
              <div style={{
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                padding: '2rem',
                borderRadius: '15px',
                textAlign: 'center',
                maxWidth: '400px',
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                }}>
                  {item.type === 'youtube' ? '📺' : '🎵'}
                </div>
                <h4 style={{
                  fontFamily: 'var(--font-spectral)',
                  fontSize: '1.3rem',
                  marginBottom: '0.5rem',
                  color: '#FFFFFF',
                }}>
                  {item.type === 'youtube' ? 'Vidéo YouTube' : 'Audio SoundCloud'}
                </h4>
                <p style={{
                  fontFamily: 'var(--font-outfit)',
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: 1.5,
                }}>
                  L'embed ID sera ajouté pour faire fonctionner le lecteur intégré
                </p>
              </div>
            </div>
          )}

          {/* Loading overlay */}
          {isLoading && item.embedId && (
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: '#040A23',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                border: '3px solid rgba(184, 134, 11, 0.3)',
                borderTop: '3px solid #B8860B',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
              }} />
              <style jsx>{`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}</style>
            </div>
          )}
        </div>

        {/* Content info */}
        <div style={{
          padding: '2rem',
          backgroundColor: '#FFFFFF',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1rem',
            flexWrap: 'wrap',
          }}>
            <span style={{
              backgroundColor: 'rgba(139, 0, 0, 0.1)',
              color: '#8B0000',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-outfit)',
              fontWeight: '600',
              textTransform: 'uppercase',
            }}>
              {item.category}
            </span>
            <span style={{
              color: '#999',
              fontSize: '0.9rem',
              fontFamily: 'var(--font-outfit)',
            }}>
              {item.date}
            </span>
          </div>

          <p style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '1rem',
            color: '#666',
            lineHeight: 1.6,
            margin: 0,
          }}>
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MediaPlayer;