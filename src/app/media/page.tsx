'use client';

import React from 'react';

export default function Media() {
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

  const soundcloudCollections = {
    bach: {
      label: "Jean-Sébastien Bach",
      color: "#D4A574",
      description: "Cantates et œuvres chorales",
      tracks: [
        {
          id: 'bach-bwv61-coro',
          title: 'Nun komm der Heiden Heiland BWV 61',
          subtitle: 'I. Coro',
          soundcloudUrl: 'https://soundcloud.com/maitrise-cathedrale-sion/js-bach-nun-komm-der-heiden-heiland-bwv-61-i-coro',
          duration: '3:45',
          description: 'Chœur d\'ouverture de cette cantate de l\'Avent'
        },
        {
          id: 'bach-bwv61-aria',
          title: 'Nun komm der Heiden Heiland BWV 61',
          subtitle: 'V. Aria "Öffne dich"',
          soundcloudUrl: 'https://soundcloud.com/maitrise-cathedrale-sion/js-bach-nun-komm-der-heiden-heiland-bwv-61-v-aria-offne-dich',
          duration: '4:20',
          description: 'Aria soprano d\'une beauté contemplative'
        },
        {
          id: 'bach-bwv4-choral',
          title: 'Christ lag in Todes Banden BWV 4',
          subtitle: 'VIII. Choral final',
          soundcloudUrl: 'https://soundcloud.com/maitrise-cathedrale-sion/js-bach-christ-lag-in-todes-banden-bwv-4-viii-verset-7-choral',
          duration: '2:15',
          description: 'Choral final de cette cantate pascale'
        },
        {
          id: 'bach-bwv4-choeur',
          title: 'Christ lag in Todes Banden BWV 4',
          subtitle: 'V. Verset 4 - Chœur',
          soundcloudUrl: 'https://soundcloud.com/maitrise-cathedrale-sion/js-bach-christ-lag-in-todes-banden-bwv-4-v-verset-4-chur',
          duration: '3:30',
          description: 'Polyphonie magistrale du maître de Leipzig'
        },
        {
          id: 'bach-bwv51',
          title: 'Jauchzet Gott in allen Landen BWV 51',
          subtitle: 'Air soprano "Jauchzet"',
          soundcloudUrl: 'https://soundcloud.com/maitrise-cathedrale-sion/js-bach-jauchzet-gott-in-allen-landen-bwv-51-air-soprano-jauchzet',
          duration: '4:45',
          description: 'Virtuosité vocale éblouissante'
        },
        {
          id: 'bach-bwv80',
          title: 'Ein feste Burg ist unser Gott BWV 80',
          subtitle: 'Chœur d\'entrée',
          soundcloudUrl: 'https://soundcloud.com/maitrise-cathedrale-sion/js-bach-ein-feste-burg-ist-unser-gott-bwv-80-chur-dentree',
          duration: '5:10',
          description: 'Cantate de la Réformation, puissance et foi'
        },
        {
          id: 'bach-bwv140',
          title: 'Wachet auf, ruft uns die Stimme BWV 140',
          subtitle: 'Choral',
          soundcloudUrl: 'https://soundcloud.com/maitrise-cathedrale-sion/js-bach-wachet-auf-ruft-uns-die-stimme-bwv-140-choral-tenor',
          duration: '3:55',
          description: 'L\'un des plus beaux chorals de Bach'
        }
      ]
    },
    schutz: {
      label: "Heinrich Schütz",
      color: "#1a1340",
      description: "Musique sacrée baroque allemande",
      tracks: [
        {
          id: 'schutz-swv435-introduction',
          title: 'Weihnachts-Historie SWV 435',
          subtitle: 'I. Introduction "Die Geburt"',
          soundcloudUrl: 'https://soundcloud.com/maitrise-cathedrale-sion/h-schutz-weihnachts-historie-swv-435-i-introduction-die-geburt',
          duration: '4:10',
          description: 'Ouverture solennelle de l\'Histoire de Noël'
        },
        {
          id: 'schutz-swv435-intermedium',
          title: 'Weihnachts-Historie SWV 435',
          subtitle: 'III. Intermedium "Der Engel zu den Hirten"',
          soundcloudUrl: 'https://soundcloud.com/maitrise-cathedrale-sion/h-schutz-weihnachts-historie-swv-435-iii-intermedium-der-engel-zu-den-hirten',
          duration: '3:11',
          description: 'L\'Ange aux bergers, annonce céleste pleine de lumière'
        }
      ]
    }
  };

  const [activeTab, setActiveTab] = React.useState('bach');

  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: 'var(--color-cream)',
      paddingTop: '140px',
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

        {/* SoundCloud Collection */}
        <section>
          <h2 style={{
            fontFamily: 'var(--font-spectral)',
            fontSize: 'var(--text-h2)',
            fontWeight: '600',
            color: 'var(--color-navy)',
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            Collection SoundCloud
          </h2>

          {/* Tabs Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '48px',
            gap: '8px',
            flexWrap: 'wrap'
          }}>
            {Object.entries(soundcloudCollections).map(([key, collection]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                style={{
                  padding: '12px 24px',
                  backgroundColor: activeTab === key ? collection.color : 'transparent',
                  color: activeTab === key ? 'white' : collection.color,
                  border: `2px solid ${collection.color}`,
                  borderRadius: 'var(--radius-lg)',
                  fontFamily: 'var(--font-spectral)',
                  fontSize: 'var(--text-base)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'var(--transition-base)',
                  outline: 'none'
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== key) {
                    (e.target as HTMLElement).style.backgroundColor = `${collection.color}15`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== key) {
                    (e.target as HTMLElement).style.backgroundColor = 'transparent';
                  }
                }}
              >
                {collection.label}
              </button>
            ))}
          </div>

          {/* Active Collection Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '32px',
            padding: 'var(--spacing-lg)',
            backgroundColor: `${soundcloudCollections[activeTab as keyof typeof soundcloudCollections].color}08`,
            borderRadius: 'var(--radius-lg)',
            border: `1px solid ${soundcloudCollections[activeTab as keyof typeof soundcloudCollections].color}20`
          }}>
            <h3 style={{
              fontFamily: 'var(--font-spectral)',
              fontSize: 'var(--text-h3)',
              fontWeight: '600',
              color: soundcloudCollections[activeTab as keyof typeof soundcloudCollections].color,
              marginBottom: '8px'
            }}>
              {soundcloudCollections[activeTab as keyof typeof soundcloudCollections].label}
            </h3>
            <p style={{
              fontSize: 'var(--text-base)',
              color: 'var(--color-gray)',
              margin: 0
            }}>
              {soundcloudCollections[activeTab as keyof typeof soundcloudCollections].description} • {soundcloudCollections[activeTab as keyof typeof soundcloudCollections].tracks.length} enregistrements
            </p>
          </div>

          {/* Tracks Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '24px'
          }}>
            {soundcloudCollections[activeTab as keyof typeof soundcloudCollections].tracks.map((track) => (
              <div key={track.id} className="card-glass" style={{
                padding: '0',
                overflow: 'hidden',
                border: `1px solid ${soundcloudCollections[activeTab as keyof typeof soundcloudCollections].color}20`
              }}>
                {/* Track Header */}
                <div style={{
                  padding: 'var(--spacing-md)',
                  background: `linear-gradient(135deg, ${soundcloudCollections[activeTab as keyof typeof soundcloudCollections].color}08, transparent)`,
                  borderBottom: `1px solid ${soundcloudCollections[activeTab as keyof typeof soundcloudCollections].color}10`
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '8px'
                  }}>
                    <div style={{ flex: 1 }}>
                      <h4 style={{
                        fontFamily: 'var(--font-spectral)',
                        fontSize: 'var(--text-large)',
                        fontWeight: '600',
                        color: 'var(--color-navy)',
                        marginBottom: '4px',
                        lineHeight: 1.2
                      }}>
                        {track.title}
                      </h4>
                      <p style={{
                        fontSize: 'var(--text-base)',
                        color: soundcloudCollections[activeTab as keyof typeof soundcloudCollections].color,
                        fontWeight: '500',
                        margin: 0
                      }}>
                        {track.subtitle}
                      </p>
                    </div>
                    <div style={{
                      backgroundColor: soundcloudCollections[activeTab as keyof typeof soundcloudCollections].color,
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 'var(--font-medium)',
                      marginLeft: '12px'
                    }}>
                      {track.duration}
                    </div>
                  </div>
                  <p style={{
                    fontSize: 'var(--text-small)',
                    color: 'var(--color-gray)',
                    fontStyle: 'italic',
                    margin: 0,
                    lineHeight: 1.4
                  }}>
                    {track.description}
                  </p>
                </div>

                {/* SoundCloud Embed */}
                <div style={{
                  padding: 'var(--spacing-md)',
                  backgroundColor: '#f8f9fa'
                }}>
                  <iframe
                    width="100%"
                    height="166"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(track.soundcloudUrl)}&color=${soundcloudCollections[activeTab as keyof typeof soundcloudCollections].color.replace('#', '')}&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false`}
                    style={{
                      borderRadius: 'var(--radius-sm)',
                      border: 'none'
                    }}
                  />

                  {/* External Link */}
                  <div style={{
                    marginTop: '12px',
                    textAlign: 'center'
                  }}>
                    <a
                      href={track.soundcloudUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: soundcloudCollections[activeTab as keyof typeof soundcloudCollections].color,
                        fontSize: 'var(--text-small)',
                        fontWeight: '500',
                        textDecoration: 'none',
                        transition: 'var(--transition-base)'
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.opacity = '0.7';
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.opacity = '1';
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/>
                      </svg>
                      Écouter sur SoundCloud
                    </a>
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
          backgroundColor: 'rgba(26, 19, 64, 0.1)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid rgba(26, 19, 64, 0.2)'
        }}>
          <p style={{
            fontSize: 'var(--text-base)',
            color: 'var(--color-navy)',
            fontStyle: 'italic',
            margin: 0
          }}>
            🎼 <strong>Collection live :</strong> 9 enregistrements SoundCloud intégrés avec players natifs.
            Les vidéos YouTube sont encore des placeholders en attente des vrais contenus.
          </p>
        </div>
      </div>
    </main>
  );
}