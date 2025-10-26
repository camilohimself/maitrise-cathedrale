'use client';

import Link from 'next/link';

export default function Soutenir() {
  const sections = [
    { title: 'Amis de la Maîtrise', href: '/soutenir/amis-maitrise', description: 'Rejoignez l\'association des Amis de la Maîtrise' },
    { title: 'Contact', href: '/soutenir/contact', description: 'Contactez-nous pour nous soutenir' }
  ];

  const partenaires = [
    { name: 'Bourgeoisie de Sion', image: '/images/partenaires-new/bourgeoisie-sion-card.jpg' },
    { name: 'Chapitre de la Cathédrale', image: '/images/partenaires-new/chapitre-cathedrale-card.jpg' },
    { name: 'Évêché de Sion', image: '/images/partenaires-new/eveche-sion-card.jpg' },
    { name: 'Office du Tourisme Sion', image: '/images/partenaires-new/office-tourisme-sion-card.jpg' },
    { name: 'Ville de Sion', image: '/images/partenaires-new/ville-sion-card.jpg' },
    { name: 'AG Culturel', image: '/images/partenaires-new/ag-culturel-card.jpg' },
    { name: 'Fondation LG', image: '/images/partenaires-new/fondation-lg-card.jpg' },
    { name: 'Canton du Valais', image: '/images/partenaires-new/canton-valais-card.jpg' },
    { name: 'RIDAG', image: '/images/partenaires-new/ridag-card.jpg' },
    { name: 'Loterie Romande', image: '/images/partenaires-new/loterie-romande-card.jpg' },
    { name: 'BCVS', image: '/images/partenaires-new/bcvs-card.jpg' }
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#fafafa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '140px 20px 60px' }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          color: 'var(--color-red)',
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
                  color: 'var(--color-red)',
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
              backgroundColor: 'var(--color-gold)',
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
            border: '2px dashed var(--color-gold)'
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
                backgroundColor: 'var(--color-gold)',
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
                e.currentTarget.style.backgroundColor = 'var(--color-gold)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                Devenir partenaire
              </button>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Tablet responsive */
        @media (max-width: 768px) {
          main > div {
            padding: 100px 16px 40px !important;
          }

          main h1 {
            font-size: 2rem !important;
            margin-bottom: 32px !important;
          }

          main > div > div:first-of-type {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
            margin-bottom: 48px !important;
          }

          main > div > div:last-of-type {
            padding: 32px 24px !important;
            border-radius: 12px !important;
          }

          main > div > div:last-of-type > div:first-of-type h2 {
            font-size: 1.75rem !important;
          }

          main > div > div:last-of-type > div:nth-of-type(2) {
            grid-template-columns: repeat(auto-fit, minmax(min(100%, 160px), 1fr)) !important;
            gap: 20px !important;
          }

          main > div > div:last-of-type > div:last-of-type {
            padding: 24px !important;
            margin-top: 32px !important;
          }

          main > div > div:last-of-type > div:last-of-type h3 {
            font-size: 1.15rem !important;
          }
        }

        /* Mobile responsive */
        @media (max-width: 640px) {
          main > div {
            padding: 80px 12px 32px !important;
          }

          main h1 {
            font-size: 1.75rem !important;
            margin-bottom: 24px !important;
          }

          main > div > div:first-of-type {
            gap: 16px !important;
          }

          main > div > div:last-of-type {
            padding: 24px 16px !important;
          }

          main > div > div:last-of-type > div:first-of-type {
            margin-bottom: 32px !important;
          }

          main > div > div:last-of-type > div:first-of-type h2 {
            font-size: 1.5rem !important;
            margin-bottom: 12px !important;
          }

          main > div > div:last-of-type > div:first-of-type p {
            font-size: 1rem !important;
          }

          main > div > div:last-of-type > div:nth-of-type(2) {
            grid-template-columns: repeat(auto-fit, minmax(min(100%, 140px), 1fr)) !important;
            gap: 16px !important;
          }

          main > div > div:last-of-type > div:nth-of-type(2) > div {
            padding: 16px !important;
          }

          main > div > div:last-of-type > div:nth-of-type(2) > div img {
            max-width: 120px !important;
          }

          main > div > div:last-of-type > div:nth-of-type(2) > div p {
            font-size: 0.85rem !important;
            margin-top: 12px !important;
          }

          main > div > div:last-of-type > div:last-of-type {
            padding: 20px 16px !important;
            margin-top: 24px !important;
          }

          main > div > div:last-of-type > div:last-of-type h3 {
            font-size: 1.1rem !important;
            margin-bottom: 8px !important;
          }

          main > div > div:last-of-type > div:last-of-type p {
            font-size: 0.95rem !important;
            margin-bottom: 20px !important;
          }

          main > div > div:last-of-type > div:last-of-type button {
            padding: 14px 28px !important;
            font-size: 0.95rem !important;
            min-height: 48px;
          }
        }

        /* Extra small mobile */
        @media (max-width: 375px) {
          main > div {
            padding: 70px 10px 24px !important;
          }

          main > div > div:nth-of-type(2) > div:nth-of-type(2) {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </main>
  );
}