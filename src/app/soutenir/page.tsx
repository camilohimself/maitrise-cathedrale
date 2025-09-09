'use client';

import Link from 'next/link';

export default function Soutenir() {
  const sections = [
    { title: 'Amis de la Maîtrise', href: '/soutenir/amis-maitrise', description: 'Rejoignez l\'association des Amis de la Maîtrise' },
    { title: 'Partenaires', href: '/soutenir/partenaires', description: 'Nos partenaires et mécènes' },
    { title: 'Contact', href: '/soutenir/contact', description: 'Contactez-nous pour nous soutenir' }
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
          gap: '24px'
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
      </div>
    </main>
  );
}