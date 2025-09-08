'use client'

import Link from 'next/link'

export default function HeroSection() {
  return (
    <section 
      style={{
        position: 'relative',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f9fa',
        backgroundImage: 'url("/images/placeholder-hero.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
      }} />
      
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 2rem', 
        position: 'relative', 
        zIndex: 10,
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          fontFamily: 'Outfit, sans-serif',
          fontWeight: '800',
          marginBottom: '1.5rem',
          lineHeight: '1.2',
          color: 'white',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          Voix d&apos;exception<br />
          au cœur de la<br />
          <span style={{ color: '#D2AB5F' }}>Cathédrale</span>
        </h1>
        
        <p style={{
          fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
          lineHeight: '1.6',
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem auto',
          color: 'rgba(255, 255, 255, 0.95)',
          fontFamily: 'Outfit, sans-serif',
          fontWeight: '400'
        }}>
          C&apos;est bien plus qu&apos;un chœur : c&apos;est une aventure humaine, artistique et spirituelle.
        </p>
        
        <Link
          href="/la-maitrise"
          style={{
            display: 'inline-block',
            backgroundColor: 'transparent',
            border: '2px solid #D2AB5F',
            color: '#D2AB5F',
            padding: '12px 30px',
            borderRadius: '4px',
            fontWeight: '700',
            fontSize: '0.9rem',
            textDecoration: 'none',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            fontFamily: 'Outfit, sans-serif',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#D2AB5F'
            e.currentTarget.style.color = 'white'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent'
            e.currentTarget.style.color = '#D2AB5F'
          }}
        >
          En savoir plus
        </Link>
      </div>
    </section>
  )
}