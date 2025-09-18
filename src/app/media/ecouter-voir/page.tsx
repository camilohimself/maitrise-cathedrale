'use client';

import React from 'react';

export default function EcouterVoir() {
  const videos = [
    {
      id: 'cantate147',
      title: 'Cantate BWV 147 - Jean-Sébastien Bach',
      description: 'Herz und Mund und Tat und Leben - Ensemble vocal et instrumental de la Maîtrise',
      youtubeId: 'dQw4w9WgXcQ', // Placeholder ID
      duration: '18:30',
      date: '2024',
      featured: true
    },
    {
      id: 'magnificat',
      title: 'Magnificat en ré majeur BWV 243 - Bach',
      description: 'Concert exceptionnel à la Cathédrale de Sion',
      youtubeId: 'dQw4w9WgXcQ', // Placeholder ID
      duration: '25:45',
      date: '2023',
      featured: false
    },
    {
      id: 'gregorien',
      title: 'Chant grégorien - Veni Creator Spiritus',
      description: 'Chœur grégorien de la Maîtrise',
      youtubeId: 'dQw4w9WgXcQ', // Placeholder ID
      duration: '6:20',
      date: '2024',
      featured: false
    }
  ];

  const audios = [
    {
      id: 'cantate78',
      title: 'Cantate BWV 78 - Jesu, der du meine Seele',
      artist: 'Ensemble vocal de la Maîtrise',
      soundcloudUrl: 'https://soundcloud.com/example', // Placeholder URL
      duration: '22:15',
      date: '2024'
    },
    {
      id: 'motets',
      title: 'Motets de Palestrina',
      artist: 'Chœur de la Cathédrale',
      soundcloudUrl: 'https://soundcloud.com/example', // Placeholder URL
      duration: '15:30',
      date: '2023'
    }
  ];

  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: 'var(--color-cream)',
      paddingTop: '120px',
      paddingBottom: '80px'
    }}>
      <div className="container">
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          <div className="badge-gold" style={{ marginBottom: '24px' }}>
            Médiathèque
          </div>
          <h1 style={{
            fontFamily: 'var(--font-spectral)',
            fontSize: 'var(--text-hero)',
            fontWeight: '300',
            color: 'var(--color-navy)',
            marginBottom: '24px',
            lineHeight: 1.1
          }}>
            Écouter et voir
          </h1>
          <p style={{
            fontSize: 'var(--text-large)',
            color: 'var(--color-gray)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Découvrez notre répertoire à travers nos enregistrements et vidéos de concerts
          </p>
        </div>

        {/* Videos Section */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontFamily: 'var(--font-spectral)',
            fontSize: 'var(--text-h2)',
            fontWeight: '600',
            color: 'var(--color-navy)',
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            Vidéos
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '32px'
          }}>
            {videos.map((video) => (
              <div key={video.id} className="card-glass" style={{
                padding: '0',
                overflow: 'hidden',
                position: 'relative'
              }}>
                {/* Video Thumbnail */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '200px',
                  backgroundColor: 'var(--color-navy)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                onClick={() => window.open(`https://youtube.com/watch?v=${video.youtubeId}`, '_blank')}
                >
                  {/* Play Button */}
                  <div style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'var(--transition-base)'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-navy)">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>

                  {/* Duration Badge */}
                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 'var(--font-medium)'
                  }}>
                    {video.duration}
                  </div>

                  {video.featured && (
                    <div className="tag-gold" style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px'
                    }}>
                      À la une
                    </div>
                  )}
                </div>

                {/* Content */}
                <div style={{ padding: 'var(--spacing-md)' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-spectral)',
                    fontSize: 'var(--text-h3)',
                    fontWeight: '600',
                    color: 'var(--color-navy)',
                    marginBottom: '8px',
                    lineHeight: 1.3
                  }}>
                    {video.title}
                  </h3>
                  <p style={{
                    fontSize: 'var(--text-base)',
                    color: 'var(--color-gray)',
                    marginBottom: '16px',
                    lineHeight: 1.5
                  }}>
                    {video.description}
                  </p>
                  <div style={{
                    fontSize: 'var(--text-small)',
                    color: 'var(--color-gold)',
                    fontWeight: 'var(--font-medium)'
                  }}>
                    {video.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Audio Section */}
        <section>
          <h2 style={{
            fontFamily: 'var(--font-spectral)',
            fontSize: 'var(--text-h2)',
            fontWeight: '600',
            color: 'var(--color-navy)',
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            Enregistrements audio
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {audios.map((audio) => (
              <div key={audio.id} className="card-glass" style={{
                padding: 'var(--spacing-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}>
                {/* Audio Icon */}
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: 'var(--color-gold)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  cursor: 'pointer'
                }}
                onClick={() => window.open(audio.soundcloudUrl, '_blank')}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                  </svg>
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontFamily: 'var(--font-spectral)',
                    fontSize: 'var(--text-large)',
                    fontWeight: '600',
                    color: 'var(--color-navy)',
                    marginBottom: '4px'
                  }}>
                    {audio.title}
                  </h3>
                  <p style={{
                    fontSize: 'var(--text-base)',
                    color: 'var(--color-gray)',
                    marginBottom: '8px'
                  }}>
                    {audio.artist}
                  </p>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: 'var(--text-small)',
                    color: 'var(--color-gold)',
                    fontWeight: 'var(--font-medium)'
                  }}>
                    <span>{audio.duration}</span>
                    <span>{audio.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Note about content */}
        <div style={{
          marginTop: '80px',
          textAlign: 'center',
          padding: 'var(--spacing-lg)',
          backgroundColor: 'rgba(212, 165, 116, 0.1)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid rgba(212, 165, 116, 0.2)'
        }}>
          <p style={{
            fontSize: 'var(--text-base)',
            color: 'var(--color-navy)',
            fontStyle: 'italic',
            margin: 0
          }}>
            💡 <strong>Note :</strong> Les liens YouTube et SoundCloud sont actuellement des placeholders.
            Ils seront remplacés par les vrais contenus lors de la mise en production.
          </p>
        </div>
      </div>
    </main>
  );
}