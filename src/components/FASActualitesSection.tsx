'use client';

import Link from 'next/link';
import { fasActualites } from '@/data/fasContent';

const FASActualitesSection = () => {
  return (
    <section className="section-gradient" style={{ 
      padding: '100px 40px',
      background: '#F5F5F5',
      position: 'relative'
    }}>
      {/* Background pattern subtil */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(139, 0, 0, 0.05) 1px, transparent 0)',
        backgroundSize: '40px 40px',
        opacity: 0.3
      }}></div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        {/* Header section sophistiqué */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 24px',
            background: 'rgba(139, 0, 0, 0.1)',
            border: '1px solid rgba(139, 0, 0, 0.2)',
            borderRadius: '50px',
            marginBottom: '24px'
          }}>
            <span style={{
              fontSize: '0.9rem',
              fontWeight: '600',
              color: '#8B0000',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>
              À la Une
            </span>
          </div>
          
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '300',
            color: '#1A1A1A',
            marginBottom: '24px',
            fontFamily: 'var(--font-spectral), Georgia, serif'
          }}>
            Actualités du
            <span style={{
              display: 'block',
              fontWeight: '700',
              color: '#8B0000'
            }}>Festival</span>
          </h2>
          
          <div style={{
            width: '60px',
            height: '2px',
            background: 'linear-gradient(90deg, #B8860B, rgba(184, 134, 11, 0.3))',
            margin: '0 auto'
          }}></div>
        </div>
        
        {/* Grid actualités premium */}
        <div className="cards-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '2.5rem'
        }}>
          {fasActualites.map((actu, index) => (
            <Link 
              key={actu.id} 
              href={actu.link}
              style={{ textDecoration: 'none' }}
            >
              <article className="card" style={{
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(139, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 40px rgba(0, 0, 0, 0.08)';
              }}>
                {/* Barre de couleur premium */}
                <div style={{
                  height: '4px',
                  background: `linear-gradient(90deg, #8B0000, ${index % 2 === 0 ? '#B8860B' : '#A0002A'})`,
                  borderRadius: '2px 2px 0 0'
                }}></div>
                
                {/* Contenu premium */}
                <div style={{
                  padding: '40px 32px',
                  minHeight: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  {/* Badge numéro */}
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    width: '32px',
                    height: '32px',
                    background: 'rgba(139, 0, 0, 0.1)',
                    border: '1px solid rgba(139, 0, 0, 0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    color: '#8B0000'
                  }}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  <div>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: '600',
                      lineHeight: '1.4',
                      color: '#1A1A1A',
                      marginBottom: '16px',
                      fontFamily: 'var(--font-spectral), Georgia, serif'
                    }}>
                      {actu.title}
                    </h3>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginTop: '24px'
                  }}>
                    <span style={{
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: '#8B0000',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      En savoir plus
                    </span>
                    <span style={{
                      fontSize: '1.2rem',
                      color: '#B8860B'
                    }}>
                      →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FASActualitesSection;