'use client';

import Link from 'next/link';

export default function AgendaBilletterie() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#fafafa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        {/* Hero Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '800',
            color: '#E33241',
            marginBottom: '24px'
          }}>
            Agenda & Billetterie
          </h1>
          <p style={{
            fontSize: '1.4rem',
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Découvrez nos prochains concerts et événements. Réservez vos places pour vivre des moments musicaux d'exception.
          </p>
        </div>

        {/* Coming Soon Section */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '16px',
          padding: '60px 40px',
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          border: '1px solid #f0f0f0'
        }}>
          <div style={{
            fontSize: '64px',
            marginBottom: '24px'
          }}>
            🎭
          </div>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#2c3e50',
            marginBottom: '20px'
          }}>
            Programmation en cours
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            Notre programme de concerts et d'événements est actuellement en préparation. 
            Restez connectés pour découvrir nos prochaines dates.
          </p>
          
          {/* Contact CTA */}
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link
              href="/soutenir/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '16px 32px',
                backgroundColor: '#E33241',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(227, 50, 65, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Nous contacter
            </Link>
            
            <Link
              href="/media"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '16px 32px',
                backgroundColor: 'transparent',
                color: '#D2AB5F',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                border: '2px solid #D2AB5F',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#D2AB5F';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(210, 171, 95, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#D2AB5F';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
              </svg>
              Écouter nos enregistrements
            </Link>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div style={{
          marginTop: '60px',
          backgroundColor: '#f8f9fa',
          borderRadius: '16px',
          padding: '40px',
          textAlign: 'center',
          border: '1px solid #e9ecef'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#2c3e50',
            marginBottom: '16px'
          }}>
            Restez informés
          </h3>
          <p style={{
            color: '#666',
            fontSize: '1rem',
            marginBottom: '24px',
            maxWidth: '600px',
            margin: '0 auto 24px auto'
          }}>
            Inscrivez-vous à notre newsletter pour être les premiers informés de nos concerts et événements.
          </p>
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            backgroundColor: '#D2AB5F',
            color: '#fff',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '600'
          }}>
            Newsletter à venir
          </div>
        </div>
      </div>
    </main>
  );
}