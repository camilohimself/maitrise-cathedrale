'use client';

import Image from 'next/image';
import Link from 'next/link';
import fasEvents from '@/data/fasEvents.json';

interface Event {
  id: number;
  title: string;
  subtitle?: string;
  type: string;
  date?: string;
  dates?: string[];
  day: string;
  time: string;
  duration: number;
  description: string;
  artists: string[];
  featured: boolean;
  category: string;
  image: string;
  prestige?: boolean;
  conference?: {
    speaker: string;
    title: string;
    time: string;
  };
  special?: string;
}

const FASEventSection = () => {
  const events: Event[] = fasEvents.events as Event[];

  return (
    <section style={{ 
      padding: '100px 40px',
      background: '#1a1340',
      position: 'relative'
    }}>
      {/* Background pattern élégant */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(30deg, rgba(184, 134, 11, 0.05) 25%, transparent 25%)',
        backgroundSize: '60px 60px'
      }}></div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        {/* Header section */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{
            display: 'inline-block',
            padding: '10px 28px',
            background: 'rgba(184, 134, 11, 0.15)',
            border: '1px solid rgba(184, 134, 11, 0.3)',
            borderRadius: '50px',
            marginBottom: '32px',
            backdropFilter: 'blur(10px)'
          }}>
            <span style={{
              fontSize: '0.9rem',
              fontWeight: '600',
              color: '#B8860B',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>
              Ne manquez pas
            </span>
          </div>
          
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '300',
            color: 'white',
            marginBottom: '24px',
            fontFamily: 'var(--font-spectral), Georgia, serif'
          }}>
            L'événement du
            <span style={{
              display: 'block',
              fontWeight: '700',
              background: 'linear-gradient(45deg, #B8860B, #DAA520)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Moment</span>
          </h2>
        </div>

        {/* Événement featured */}
        {events.length > 0 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: '60px',
            alignItems: 'center'
          }}>
            {/* Image côté gauche */}
            <div style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
              transform: 'perspective(1000px) rotateY(-5deg)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
              <Image
                src={events[0].image}
                alt={events[0].title}
                width={600}
                height={400}
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover'
                }}
              />
              
              {/* Badge prestige premium */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'linear-gradient(45deg, #8B0000, #A0002A)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '50px',
                fontSize: '0.9rem',
                fontWeight: '700',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                boxShadow: '0 8px 32px rgba(139, 0, 0, 0.4)'
              }}>
                ⭐ À ne pas manquer
              </div>
            </div>

            {/* Contenu côté droit */}
            <div>
              <div style={{
                display: 'inline-block',
                background: 'rgba(139, 0, 0, 0.2)',
                color: '#8B0000',
                padding: '8px 20px',
                borderRadius: '50px',
                fontSize: '0.9rem',
                fontWeight: '600',
                marginBottom: '24px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                {events[0].day} • {events[0].time}
              </div>

              <h3 style={{
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                fontWeight: '700',
                color: 'white',
                lineHeight: '1.2',
                marginBottom: '20px',
                fontFamily: 'var(--font-spectral), Georgia, serif'
              }}>
                {events[0].title}
              </h3>

              {events[0].subtitle && (
                <p style={{
                  fontSize: '1.2rem',
                  color: '#B8860B',
                  fontWeight: '500',
                  marginBottom: '24px',
                  lineHeight: '1.4'
                }}>
                  {events[0].subtitle}
                </p>
              )}

              <p style={{
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.6',
                marginBottom: '32px'
              }}>
                {events[0].description.substring(0, 200)}...
              </p>

              {/* Artists tags */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '40px'
              }}>
                {events[0].artists.slice(0, 3).map((artist, index) => (
                  <span
                    key={index}
                    style={{
                      background: 'rgba(184, 134, 11, 0.2)',
                      color: '#B8860B',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      border: '1px solid rgba(184, 134, 11, 0.3)'
                    }}
                  >
                    {artist}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap'
              }}>
                <button className="btn-gold" style={{
                  padding: '16px 32px',
                  background: 'linear-gradient(45deg, #8B0000, #A0002A)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  boxShadow: '0 8px 32px rgba(139, 0, 0, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(139, 0, 0, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(139, 0, 0, 0.3)';
                }}>
                  Réserver maintenant
                </button>

                <Link 
                  href="/agenda-billetterie"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '16px 32px',
                    background: 'transparent',
                    color: '#B8860B',
                    border: '2px solid #B8860B',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '500',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(184, 134, 11, 0.1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Voir tout l'agenda
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FASEventSection;