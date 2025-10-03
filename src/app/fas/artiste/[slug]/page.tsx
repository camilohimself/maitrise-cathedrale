'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// Données artistes avec détails complets
const artistesData: Record<string, any> = {
  'stile-antico': {
    id: 'stile-antico',
    name: 'Stile Antico',
    concert: 'Stile Antico',
    collaboration: 'En collaboration avec les Riches Heures de Valère',
    subtitle: 'Palestrina - Le Prince de la Musique',
    date: 'Dimanche 4 janvier 2026',
    time: '17H00',
    conference: {
      speaker: 'Marie Favre',
      title: 'Musicologue et docteur en musicologie',
      time: '16H00'
    },
    image: '/images/artistes/stile-antico/stile-antico-1-hero.webp',
    thumbnail: '/images/artistes/stile-antico/stile-antico-2-card.webp',
    gallery: [
      '/images/artistes/stile-antico/stile-antico-1-hero.webp',
      '/images/artistes/stile-antico/stile-antico-2-hero.webp',
      '/images/artistes/stile-antico/stile-antico-3-hero.webp',
      '/images/artistes/stile-antico/stile-antico-4-hero.webp'
    ],
    description: `Nous aurons l'immense honneur d'entendre le prestigieux ensemble anglais Stile Antico dans un programme consacré à Giovanni Pierluigi da Palestrina, "Le Prince de la Musique". Il s'agit d'un des meilleurs ensembles vocaux au monde réputé pour ses interprétations vibrantes et expressives de la musique de la Renaissance.

Cette soirée exceptionnelle sera également précédée d'une conférence de Marie Favre, musicologue et docteur en musicologie, qui nous éclairera sur l'œuvre de Giovanni Pierluigi da Palestrina à 16h00.

Stile Antico nous transportera dans l'univers spirituel et raffiné de la polyphonie Renaissance, où chaque voix s'entrelace dans une architecture sonore d'une beauté transcendante. Un concert prestigieux qui marquera l'apothéose de notre 20ème Festival d'Art Sacré.`
  },
  'choeur-novantiqua': {
    id: 'choeur-novantiqua',
    name: 'Chœur Novantiqua',
    concert: 'Chœur Novantiqua',
    subtitle: 'Ex tenebris lux : Gesualdo, Bruckner, Poulenc',
    date: 'Dimanche 7 décembre 2025',
    time: '17H00',
    altDate: null,
    image: '/images/artistes/choeur-novantiqua/novantiqua-1-hero.webp',
    thumbnail: '/images/artistes/choeur-novantiqua/novantiqua-1-card.webp',
    gallery: [
      '/images/artistes/choeur-novantiqua/novantiqua-1-hero.webp',
      '/images/artistes/choeur-novantiqua/novantiqua-2-hero.webp',
      '/images/artistes/choeur-novantiqua/novantiqua-3-hero.webp',
      '/images/artistes/choeur-novantiqua/novantiqua-4-hero.webp'
    ],
    description: `Sous la direction de Bernard Héritier, le Chœur Novantiqua présente un programme a cappella raffiné intitulé "Ex tenebris lux" (De l'ombre à la lumière). Ce concert exceptionnel explore les œuvres de trois compositeurs majeurs : Carlo Gesualdo, maître de la polyphonie expressive de la Renaissance tardive, Anton Bruckner avec ses motets sacrés d'une profondeur spirituelle intense, et Francis Poulenc dont les compositions liturgiques allient modernité et tradition. Un voyage musical captivant à travers les siècles, de la Renaissance au XXe siècle.`
  },
  'ensemble-vocal': {
    id: 'ensemble-vocal',
    name: 'Ensemble Vocal & Barberine',
    concert: 'Ensemble vocal de la Maîtrise & Ensemble Barberine',
    subtitle: 'Le baroque au féminin : Chiara Margarita Cozzolani',
    date: 'Dimanche 30 novembre 2025',
    time: '17H00',
    altDate: null,
    image: '/images/artistes/ecole-maitrisienne/ecole-1-hero.webp',
    thumbnail: '/images/artistes/ecole-maitrisienne/ecole-1-card.webp',
    gallery: [
      '/images/artistes/ecole-maitrisienne/ecole-1-hero.webp',
      '/images/artistes/ecole-maitrisienne/ecole-2-hero.webp'
    ],
    description: `Concert d'ouverture du 20ème Festival d'Art Sacré avec l'Ensemble Vocal de la Maîtrise et l'Ensemble Barberine. Ce programme exceptionnel met à l'honneur Chiara Margarita Cozzolani (1602-1678), compositrice milanaise méconnue du baroque italien. Religieuse bénédictine, elle fut l'une des rares femmes compositrices de son époque à voir ses œuvres publiées. Ses motets sacrés, d'une expressivité remarquable, témoignent d'une maîtrise parfaite de l'écriture polyphonique et d'une sensibilité spirituelle profonde. Une découverte musicale fascinante au féminin.`
  },
  'ecole-maitrisienne': {
    id: 'ecole-maitrisienne',
    name: 'École Maîtrisienne',
    concert: 'École maîtrisienne & Chœur des collèges',
    subtitle: 'Au ciel et sur la terre : les voix de la jeunesse',
    date: 'Dimanche 21 décembre 2025',
    time: '17H00',
    altDate: null,
    image: '/images/artistes/ecole-maitrisienne/ecole-2-hero.webp',
    thumbnail: '/images/artistes/ecole-maitrisienne/ecole-2-card.webp',
    gallery: [
      '/images/artistes/ecole-maitrisienne/ecole-1-hero.webp',
      '/images/artistes/ecole-maitrisienne/ecole-2-hero.webp'
    ],
    description: `Concert mettant à l'honneur la jeunesse avec l'École Maîtrisienne et le Chœur des collèges. Ces jeunes talents interpréteront un programme varié de musique sacrée, démontrant le fruit de leur formation vocale d'excellence. Un moment émouvant qui célèbre la transmission du patrimoine musical et la passion des nouvelles générations pour le chant choral. Les voix pures et cristallines de nos jeunes chanteurs illumineront la cathédrale en cette période de l'Avent.`
  },
  'ensemble-ad-astra': {
    id: 'ensemble-ad-astra',
    name: 'Ensemble Ad Astra',
    concert: 'Ensemble Ad Astra & Collectif 7 Sed Unum',
    subtitle: 'Vivaldi ou Noël à Venise',
    date: 'Jeudi 26 décembre 2025',
    time: '20H00',
    altDate: null,
    image: '/images/artistes/stile-antico/stile-antico-3-hero.webp',
    thumbnail: '/images/artistes/stile-antico/stile-antico-3-card.webp',
    gallery: [
      '/images/artistes/stile-antico/stile-antico-5-hero.webp',
      '/images/artistes/stile-antico/stile-antico-6-hero.webp',
      '/images/artistes/choeur-novantiqua/novantiqua-1-hero.webp',
      '/images/artistes/choeur-novantiqua/novantiqua-2-hero.webp'
    ],
    description: `L'Ensemble Ad Astra et le Collectif 7 Sed Unum nous transportent dans la Venise baroque avec les célèbres Gloria RV 589 et Magnificat RV 610-611 d'Antonio Vivaldi. Ces deux chefs-d'œuvre de la musique sacrée vénitienne, composés pour les jeunes filles de l'Ospedale della Pietà, rayonnent d'une joie festive et d'une virtuosité éblouissante. Le soir de la Saint-Étienne, laissez-vous emporter par les couleurs chatoyantes et l'énergie contagieuse du "Prêtre Roux" dans leurs versions originales.`
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
            color: 'var(--color-gold)',
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
          color: 'var(--color-gold)',
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
              marginBottom: '0.5rem',
              color: 'white',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)'
            }}>
              {artiste.concert}
            </h1>
            {artiste.collaboration && (
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.8)',
                fontWeight: '400',
                fontStyle: 'italic',
                marginBottom: '0.5rem',
                letterSpacing: '0.02em'
              }}>
                {artiste.collaboration}
              </p>
            )}
            {artiste.subtitle && (
              <p style={{
                fontSize: '1.5rem',
                color: 'var(--color-gold)',
                fontWeight: '500',
                marginBottom: '1.5rem',
                fontStyle: 'italic'
              }}>
                {artiste.subtitle}
              </p>
            )}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '30px',
              flexWrap: 'wrap'
            }}>
              <span style={{
                fontSize: '1.3rem',
                color: 'var(--color-gold)',
                fontWeight: '600'
              }}>
                {artiste.date} • {artiste.time}
              </span>
              <button style={{
                padding: '14px 32px',
                background: 'var(--color-gold)',
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
            color: 'var(--color-gold)'
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
              color: 'var(--color-gold)'
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
              color: 'var(--color-gold)',
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
            
            {artiste.conference && (
              <div style={{
                padding: '12px',
                background: 'rgba(212, 175, 55, 0.1)',
                borderRadius: '12px',
                border: '1px solid rgba(212, 175, 55, 0.3)'
              }}>
                <span style={{
                  fontSize: '0.9rem',
                  color: 'var(--color-gold)',
                  fontWeight: '500'
                }}>
                  Conférence préparatoire :
                </span>
                <p style={{
                  margin: '8px 0 4px',
                  fontSize: '1rem',
                  fontWeight: '600'
                }}>
                  {artiste.conference.time}
                </p>
                <p style={{
                  margin: '0',
                  fontSize: '0.9rem',
                  opacity: 0.8
                }}>
                  {artiste.conference.speaker} - {artiste.conference.title}
                </p>
              </div>
            )}

            {/* Galerie Photos Premium */}
            {artiste.gallery && (
              <div style={{ marginTop: '2rem' }}>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: 'var(--color-gold)'
                }}>
                  Galerie Photos
                </h4>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '8px',
                  borderRadius: '12px',
                  overflow: 'hidden'
                }}>
                  {artiste.gallery.slice(0, 4).map((photo: string, index: number) => (
                    <div
                      key={index}
                      style={{
                        aspectRatio: '1',
                        borderRadius: index === 0 ? '12px 0 0 0' : 
                                     index === 1 ? '0 12px 0 0' :
                                     index === 2 ? '0 0 0 12px' : '0 0 12px 0',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.zIndex = '10';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.zIndex = '1';
                      }}
                    >
                      <Image
                        src={photo}
                        alt={`${artiste.name} - Photo ${index + 1}`}
                        width={150}
                        height={150}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                  ))}
                </div>
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
          color: 'var(--color-gold)',
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
                      color: 'var(--color-gold)'
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