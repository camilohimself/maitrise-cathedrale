'use client';

import Link from 'next/link';

export default function Soutenir() {
  const sections = [
    { title: 'Amis de la Maîtrise', href: '/soutenir/amis-maitrise', description: 'Rejoignez l\'association des Amis de la Maîtrise' },
    { title: 'Contact', href: '/soutenir/contact', description: 'Contactez-nous pour nous soutenir' }
  ];

  const partenaires = [
    { name: 'Bourgeoisie de Sion', image: '/images/partenaires/bourgeoisie-sion-card.jpg' },
    { name: 'Chapitre de la Cathédrale', image: '/images/partenaires/chapitre-cathedrale-card.jpg' },
    { name: 'Conférence des Présidents', image: '/images/partenaires/conference-presidents-card.jpg' },
    { name: 'Espace2', image: '/images/partenaires/espace2-card.jpg' },
    { name: 'Fondation Blondin', image: '/images/partenaires/fondation-blondin-card.jpg' },
    { name: 'Fondation Sandoz', image: '/images/partenaires/fondation-sandoz-card.jpg' },
    { name: 'Généreux Donateur', image: '/images/partenaires/genereux-donateur-card.jpg' },
    { name: 'Lietti', image: '/images/partenaires/lietti-card.jpg' },
    { name: 'Le Nouvelliste', image: '/images/partenaires/nouvelliste-card.jpg' }
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#fafafa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          color: '#E33241',
          marginBottom: '48px',
          textAlign: 'center'
        }}>
          Nous soutenir
        </h1>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '80px'
        }}>
          {sections.map((section) => (
            <Link key={section.href} href={section.href} style={{ textDecoration: 'none' }}>
              <div style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                padding: '32px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: '1px solid #f0f0f0',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(210, 171, 95, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#E33241',
                  marginBottom: '12px'
                }}>
                  {section.title}
                </h3>
                <p style={{
                  color: '#666',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  margin: 0,
                  flexGrow: 1
                }}>
                  {section.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Section Partenaires */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '16px',
          padding: '48px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          border: '1px solid #f0f0f0'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#1a1340',
              marginBottom: '16px'
            }}>
              Nos partenaires
            </h2>
            <div style={{
              width: '60px',
              height: '3px',
              backgroundColor: '#D4A574',
              margin: '0 auto'
            }}></div>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              marginTop: '16px',
              maxWidth: '600px',
              margin: '16px auto 0'
            }}>
              Ils nous accompagnent dans notre mission de préservation et de rayonnement de la musique sacrée
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px',
            alignItems: 'center'
          }}>
            {partenaires.map((partenaire, index) => (
              <div key={index} style={{
                backgroundColor: '#FAFAF9',
                borderRadius: '12px',
                padding: '24px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                border: '1px solid #f0f0f0',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(212, 165, 116, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <img
                  src={partenaire.image}
                  alt={partenaire.name}
                  style={{
                    width: '100%',
                    maxWidth: '150px',
                    height: 'auto',
                    objectFit: 'contain',
                    margin: '0 auto',
                    display: 'block'
                  }}
                />
                <p style={{
                  marginTop: '16px',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  color: '#1a1340',
                  margin: '16px 0 0 0'
                }}>
                  {partenaire.name}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            textAlign: 'center',
            marginTop: '48px',
            padding: '32px',
            backgroundColor: '#FAFAF9',
            borderRadius: '12px',
            border: '2px dashed #D4A574'
          }}>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '600',
              color: '#1a1340',
              marginBottom: '12px'
            }}>
              Rejoignez nos partenaires
            </h3>
            <p style={{
              color: '#666',
              marginBottom: '24px',
              fontSize: '1rem'
            }}>
              Vous souhaitez soutenir la Maîtrise de la Cathédrale ?
            </p>
            <Link href="/soutenir/contact" style={{ textDecoration: 'none' }}>
              <button style={{
                backgroundColor: '#D4A574',
                color: '#fff',
                padding: '12px 24px',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#c19660';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#D4A574';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                Devenir partenaire
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}