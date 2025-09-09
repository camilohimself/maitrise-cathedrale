'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// Données artistes avec détails complets
const artistesData: Record<string, any> = {
  'stile-antico': {
    id: 'stile-antico',
    name: 'Stile Antico',
    concert: 'Concert Stile Antico',
    date: 'jeudi 4 décembre',
    time: '17H00',
    altDate: '15 décembre',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
    description: `Dans le Londres élisabéthain florissant à l'époque de William Shakespeare, une remarquable école de compositeurs s'est épanouie, créant certaines des plus belles musiques chorales jamais écrites. Les maîtres de la polyphonie Peter Philips et Richard Dering sont morts en exil religieux aux Pays-Bas catholiques ; leurs œuvres, ainsi que celles de compositeurs tels que Robert White et John Dowland, figurent dans ce programme atmosphérique. Les Lamentations poignantes de White côtoient le sublime Ave verum corpus et l'Ave Maria de William Byrd, tandis que Philips se souvient de son Angleterre natale dans son élégie Cantantibus organis. La musique anglaise renaît comme le phénix de ses cendres, ou comme la colombe de Shakespeare, « assis seul, chantant une douce complainte ».`
  },
  'choeur-novantiqua': {
    id: 'choeur-novantiqua',
    name: 'Chœur Novantiqua',
    concert: 'Concert de Noël',
    date: 'samedi 13 décembre',
    time: '20H00',
    altDate: '14 décembre à 17H00',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    description: `Sous la direction de Bernard Héritier, le Chœur Novantiqua présente un programme exceptionnel mêlant œuvres sacrées et profanes de la Renaissance. Fort de ses 30 années d'expérience, l'ensemble explore les richesses de la polyphonie franco-flamande avec une attention particulière portée aux compositeurs de l'école de Notre-Dame. Ce concert mettra en lumière des pièces rares de Josquin des Prés, Johannes Ockeghem et Pierre de la Rue, interprétées avec la finesse et la précision qui font la renommée internationale de Novantiqua. Un voyage musical au cœur de l'âge d'or de la polyphonie européenne.`
  },
  'ensemble-vocal': {
    id: 'ensemble-vocal',
    name: 'Ensemble Vocal',
    concert: 'Vêpres de la Vierge',
    date: 'dimanche 21 décembre',
    time: '16H00',
    altDate: null,
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800',
    thumbnail: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400',
    description: `L'Ensemble Vocal de la Maîtrise de la Cathédrale de Sion présente les somptueuses Vêpres de la Vierge de Claudio Monteverdi. Cette œuvre monumentale, composée en 1610, marque un tournant dans l'histoire de la musique sacrée, alliant avec génie la tradition polyphonique de la Renaissance et les innovations harmoniques du baroque naissant. Sous la direction artistique passionnée de notre chef, les jeunes chanteurs de la Maîtrise donnent vie à cette fresque musicale d'une beauté transcendante, où dialoguent solistes, chœurs et instruments dans une architecture sonore d'une richesse incomparable.`
  },
  'solistes': {
    id: 'solistes',
    name: 'Solistes Invités',
    concert: 'Récital de l\'Avent',
    date: 'mercredi 10 décembre',
    time: '19H30',
    altDate: null,
    image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800',
    thumbnail: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400',
    description: `Pour cette édition spéciale du Festival d'Art Sacré, nous avons le privilège d'accueillir des solistes de renommée internationale. Au programme : un florilège d'arias et de cantates baroques célébrant l'Avent et la Nativité. Les voix exceptionnelles de nos invités feront résonner les œuvres de Bach, Haendel, Vivaldi et Pergolèse dans l'acoustique unique de notre cathédrale. Un moment de grâce où la virtuosité vocale se met au service de la spiritualité, offrant au public une expérience musicale intense et méditative à l'approche des fêtes de Noël.`
  }
};

export default function ArtistePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const artiste = artistesData[slug];

  if (!artiste) {
    return (
      <main style={{
        minHeight: '100vh',
        background: '#1a1340',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Artiste non trouvé</h1>
          <Link href="/fas" style={{
            color: '#D4A574',
            textDecoration: 'none',
            fontSize: '1.1rem'
          }}>
            ← Retour au Festival
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main style={{
      minHeight: '100vh',
      background: '#1B1B2F',
      color: 'white'
    }}>
      {/* Navigation retour */}
      <div style={{
        padding: '20px 40px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <Link href="/fas" style={{
          color: '#D4A574',
          textDecoration: 'none',
          fontSize: '1rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateX(-4px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateX(0)';
        }}>
          ← Retour au Festival d'Art Sacré
        </Link>
      </div>

      {/* Hero Image */}
      <section style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1400px',
        margin: '40px auto',
        padding: '0 40px'
      }}>
        <div style={{
          position: 'relative',
          width: '100%',
          height: '500px',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
        }}>
          <Image
            src={artiste.image}
            alt={artiste.name}
            width={1400}
            height={500}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
            priority
          />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(to top, rgba(27, 27, 47, 0.95) 0%, transparent 100%)',
            padding: '60px 40px 40px',
          }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '900',
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)'
            }}>
              {artiste.concert}
            </h1>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '30px',
              flexWrap: 'wrap'
            }}>
              <span style={{
                fontSize: '1.3rem',
                color: '#D4A574',
                fontWeight: '600'
              }}>
                {artiste.date} • {artiste.time}
              </span>
              <button style={{
                padding: '14px 32px',
                background: '#D4A574',
                color: '#1a1340',
                border: 'none',
                borderRadius: '50px',
                fontSize: '1rem',
                fontWeight: '700',
                letterSpacing: '0.05em',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 30px rgba(212, 175, 55, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(212, 175, 55, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(212, 175, 55, 0.3)';
              }}>
                BILLETTERIE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '40px',
        display: 'grid',
        gridTemplateColumns: '1fr 350px',
        gap: '60px',
        alignItems: 'start'
      }}>
        {/* Main Content */}
        <div>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '2rem',
            color: '#D4AF37'
          }}>
            À propos du concert
          </h2>
          
          <div style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: 'rgba(255, 255, 255, 0.9)',
            textAlign: 'justify',
            letterSpacing: '0.02em'
          }}>
            {artiste.description.split('\n').map((paragraph: string, index: number) => (
              <p key={index} style={{ marginBottom: '1.5rem' }}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Programme Section */}
          <div style={{
            marginTop: '3rem',
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '16px',
            border: '1px solid rgba(212, 175, 55, 0.2)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              color: '#D4A574'
            }}>
              Informations pratiques
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{
                padding: '12px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Lieu</span>
                <span style={{ fontWeight: '500' }}>Cathédrale de Sion</span>
              </li>
              <li style={{
                padding: '12px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Durée</span>
                <span style={{ fontWeight: '500' }}>Environ 90 minutes</span>
              </li>
              <li style={{
                padding: '12px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Tarifs</span>
                <span style={{ fontWeight: '500' }}>CHF 35.- / 25.- (réduit)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <aside>
          {/* Artiste Card */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '20px',
            padding: '24px',
            border: '1px solid rgba(212, 175, 55, 0.2)'
          }}>
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: '700',
              color: '#E33241',
              marginBottom: '1.5rem'
            }}>
              Artiste
            </h3>
            
            <div style={{
              width: '100%',
              height: '200px',
              borderRadius: '12px',
              overflow: 'hidden',
              marginBottom: '1.5rem'
            }}>
              <Image
                src={artiste.thumbnail}
                alt={artiste.name}
                width={300}
                height={200}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            
            <h4 style={{
              fontSize: '1.3rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              {artiste.name}
            </h4>
            
            {artiste.altDate && (
              <div style={{
                padding: '12px',
                background: 'rgba(212, 175, 55, 0.1)',
                borderRadius: '12px',
                border: '1px solid rgba(212, 175, 55, 0.3)'
              }}>
                <span style={{
                  fontSize: '0.9rem',
                  color: '#D4A574',
                  fontWeight: '500'
                }}>
                  Autre date :
                </span>
                <p style={{
                  margin: '8px 0 0',
                  fontSize: '1rem',
                  fontWeight: '600'
                }}>
                  {artiste.altDate}
                </p>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div style={{
            marginTop: '2rem',
            padding: '24px',
            background: '#E33241',
            borderRadius: '20px',
            textAlign: 'center'
          }}>
            <h4 style={{
              fontSize: '1.2rem',
              fontWeight: '700',
              marginBottom: '1rem'
            }}>
              Ne manquez pas ce concert !
            </h4>
            <p style={{
              fontSize: '0.95rem',
              marginBottom: '1.5rem',
              opacity: 0.9
            }}>
              Places limitées, réservez dès maintenant
            </p>
            <button style={{
              width: '100%',
              padding: '14px',
              background: 'white',
              color: '#E33241',
              border: 'none',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              RÉSERVER MAINTENANT
            </button>
          </div>
        </aside>
      </section>

      {/* Related Events */}
      <section style={{
        maxWidth: '1400px',
        margin: '60px auto 0',
        padding: '60px 40px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '700',
          marginBottom: '2rem',
          color: '#D4A574',
          textAlign: 'center'
        }}>
          Autres concerts du festival
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {Object.values(artistesData)
            .filter((a: any) => a.id !== artiste.id)
            .slice(0, 3)
            .map((otherArtiste: any) => (
              <Link
                key={otherArtiste.id}
                href={`/fas/artiste/${otherArtiste.id}`}
                style={{ textDecoration: 'none' }}
              >
                <article style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}>
                  <div style={{
                    height: '180px',
                    overflow: 'hidden'
                  }}>
                    <Image
                      src={otherArtiste.thumbnail}
                      alt={otherArtiste.name}
                      width={280}
                      height={180}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div style={{ padding: '20px' }}>
                    <h4 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '8px',
                      color: 'white'
                    }}>
                      {otherArtiste.concert}
                    </h4>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#D4A574'
                    }}>
                      {otherArtiste.date} • {otherArtiste.time}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}