'use client';

import Image from 'next/image';
import Link from 'next/link';
import { fasArtistes } from '@/data/fasContent';

const FASArtistesSection = () => {
  return (
    <section style={{ 
      padding: '100px 40px',
      background: 'white'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header artistes premium */}
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
              Découvrez
            </span>
          </div>
          
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '700',
            color: '#1A1A1A',
            marginBottom: '24px',
            fontFamily: 'var(--font-spectral), Georgia, serif'
          }}>
            Nos Artistes
          </h2>
          
          <div style={{
            width: '60px',
            height: '2px',
            background: 'linear-gradient(90deg, #B8860B, rgba(184, 134, 11, 0.3))',
            margin: '0 auto'
          }}></div>
        </div>
        
        <div className="cards-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {fasArtistes.map((artiste) => (
            <Link 
              key={artiste.id}
              href={`/fas/artiste/${artiste.id}`}
              style={{ textDecoration: 'none' }}
            >
              <article className="card" style={{
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{ 
                  position: 'relative',
                  height: '220px',
                  overflow: 'hidden'
                }}>
                  <Image
                    src={artiste.image}
                    alt={artiste.name}
                    width={250}
                    height={220}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    color: '#1a1340',
                    marginBottom: '8px'
                  }}>
                    {artiste.name}
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#666',
                    margin: 0
                  }}>
                    {artiste.description}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FASArtistesSection;