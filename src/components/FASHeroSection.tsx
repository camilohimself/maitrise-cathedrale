'use client';

import fasEvents from '@/data/fasEvents.json';

const FASHeroSection = () => {
  const festival = fasEvents.festival;

  return (
    <section className="hero-section" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #8B0000 0%, #A0002A 100%)',
      color: 'white',
      overflow: 'hidden'
    }}>
      {/* Background overlay pour sophistication */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(45deg, rgba(26, 26, 26, 0.3) 0%, rgba(0, 0, 0, 0.1) 100%)',
        zIndex: 1
      }} />
      
      {/* Hero Content */}
      <div style={{ 
        position: 'relative',
        zIndex: 2,
        maxWidth: '1200px', 
        margin: '0 auto',
        padding: '0 40px',
        textAlign: 'center'
      }}>
        {/* Badge Edition Premium */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          background: 'rgba(184, 134, 11, 0.9)',
          color: '#1A1A1A',
          fontSize: '0.9rem',
          fontWeight: '600',
          letterSpacing: '0.15em',
          padding: '12px 32px',
          borderRadius: '50px',
          marginBottom: '3rem',
          textTransform: 'uppercase',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(184, 134, 11, 0.3)',
          boxShadow: '0 8px 32px rgba(184, 134, 11, 0.2)'
        }}>
          <span style={{
            width: '8px',
            height: '8px',
            background: '#1A1A1A',
            borderRadius: '50%',
            marginRight: '12px'
          }}></span>
          {festival.edition}
        </div>
        
        {/* Main Title - Typography premium */}
        <h1 style={{
          fontSize: 'clamp(3.5rem, 8vw, 6rem)',
          fontWeight: '300',
          letterSpacing: '-0.03em',
          lineHeight: '0.95',
          marginBottom: '2rem',
          fontFamily: 'var(--font-spectral), Georgia, serif',
          textShadow: '0 6px 40px rgba(0, 0, 0, 0.5)'
        }}>
          Festival d'Art
          <span style={{
            display: 'block',
            fontWeight: '700',
            background: 'linear-gradient(45deg, #B8860B, #DAA520)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Sacré
          </span>
        </h1>
        
        {/* Subtitle élégant */}
        <div style={{
          maxWidth: '700px',
          margin: '0 auto 3rem'
        }}>
          <p style={{
            fontSize: '1.4rem',
            fontWeight: '300',
            opacity: '0.95',
            marginBottom: '1.5rem',
            letterSpacing: '0.02em',
            lineHeight: '1.4'
          }}>
            {festival.period}
          </p>
          
          <div style={{
            width: '80px',
            height: '2px',
            background: 'linear-gradient(90deg, #B8860B, rgba(184, 134, 11, 0.3))',
            margin: '0 auto 2rem'
          }}></div>
          
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.6',
            opacity: '0.9',
            fontWeight: '400',
            letterSpacing: '0.01em'
          }}>
            Vingt années d'excellence musicale au cœur de la Cathédrale de Sion
          </p>
        </div>

        {/* CTA Buttons Premium */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button className="btn-gold" style={{
            padding: '16px 40px',
            background: 'linear-gradient(45deg, #B8860B, #DAA520)',
            color: '#1A1A1A',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            letterSpacing: '0.05em',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 8px 32px rgba(184, 134, 11, 0.3)',
            textTransform: 'uppercase'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 16px 48px rgba(184, 134, 11, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(184, 134, 11, 0.3)';
          }}>
            Programme Complet
          </button>
          
          <button style={{
            padding: '16px 40px',
            background: 'transparent',
            color: 'white',
            border: '2px solid rgba(255, 255, 255, 0.6)',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '500',
            letterSpacing: '0.05em',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            textTransform: 'uppercase'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.borderColor = 'white';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            Billetterie
          </button>
        </div>
      </div>

      {/* Scroll indicator subtil */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2
      }}>
        <div style={{
          width: '1px',
          height: '60px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.8), transparent)',
          margin: '0 auto',
          animation: 'pulse 2s ease-in-out infinite'
        }}></div>
      </div>
    </section>
  );
};

export default FASHeroSection;