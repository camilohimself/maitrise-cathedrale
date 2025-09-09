'use client';

import Link from 'next/link';
import fondationContent from '@/data/fondationContent';

export default function AssociationAmisPage() {
  const { associationAmis, contact } = fondationContent;

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#fafafa' }}>

      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #2c3e50 0%, #D2AB5F 100%)',
        color: 'white',
        padding: '100px 20px',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.15)',
            padding: '8px 20px',
            borderRadius: '25px',
            fontSize: '14px',
            fontWeight: '600',
            display: 'inline-block',
            marginBottom: '24px'
          }}>
            🤝 Communauté de soutien
          </div>
          
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '800',
            marginBottom: '32px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            {associationAmis.title}
          </h1>
          
          <p style={{
            fontSize: '1.4rem',
            lineHeight: '1.7',
            opacity: 0.95,
            fontWeight: '300',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {associationAmis.presentation}
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div style={{ padding: '100px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Organisation */}
          <section style={{ marginBottom: '100px' }}>
            <div style={{
              backgroundColor: '#fff',
              borderRadius: '24px',
              padding: '60px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
              border: '1px solid #f0f0f0'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                <div style={{
                  backgroundColor: '#D2AB5F',
                  color: 'white',
                  padding: '10px 24px',
                  borderRadius: '30px',
                  fontSize: '14px',
                  fontWeight: '600',
                  display: 'inline-block',
                  marginBottom: '24px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  🏛️ Structure
                </div>
                
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#2c3e50',
                  marginBottom: '24px'
                }}>
                  Organisation de l&apos;Association
                </h2>
              </div>
              
              <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
                color: '#555',
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                {associationAmis.organisation}
              </p>
            </div>
          </section>

          {/* Avantages */}
          <section style={{ marginBottom: '100px' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <div style={{
                backgroundColor: '#E33241',
                color: 'white',
                padding: '10px 24px',
                borderRadius: '30px',
                fontSize: '14px',
                fontWeight: '600',
                display: 'inline-block',
                marginBottom: '24px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                ⭐ Privilèges
              </div>
              
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#2c3e50',
                marginBottom: '24px'
              }}>
                {associationAmis.avantages.title}
              </h2>
              
              <p style={{
                fontSize: '1.2rem',
                color: '#666',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                En devenant membre Ami, vous bénéficiez d&apos;avantages exclusifs
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px'
            }}>
              {associationAmis.avantages.liste.map((avantage, index) => (
                <div key={index} style={{
                  backgroundColor: '#fff',
                  borderRadius: '20px',
                  padding: '40px 30px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                  border: '1px solid #f0f0f0',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(227,50,65,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)';
                }}>
                  
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: index === 0 ? 'rgba(227,50,65,0.1)' : 'rgba(210,171,95,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px auto',
                    fontSize: '32px'
                  }}>
                    {index === 0 ? '📧' : '💰'}
                  </div>
                  
                  <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.6',
                    color: '#555',
                    margin: 0
                  }}>
                    {avantage}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Formulaire d'adhésion */}
          <section style={{
            backgroundColor: '#2c3e50',
            color: 'white',
            borderRadius: '24px',
            padding: '80px 60px',
            marginBottom: '100px'
          }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '24px'
                }}>
                  {associationAmis.adhesion.title}
                </h2>
                
                <p style={{
                  fontSize: '1.3rem',
                  lineHeight: '1.7',
                  opacity: 0.9
                }}>
                  {associationAmis.adhesion.texte}
                </p>
              </div>

              {/* Contact Form */}
              <div style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderRadius: '16px',
                padding: '50px',
                marginBottom: '40px'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '30px',
                  textAlign: 'center'
                }}>
                  Formulaire de contact
                </h3>
                
                {/* Placeholder form */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '20px',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    height: '50px',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    border: '2px dashed rgba(255,255,255,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    opacity: 0.7
                  }}>
                    Prénom *
                  </div>
                  <div style={{
                    height: '50px',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    border: '2px dashed rgba(255,255,255,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    opacity: 0.7
                  }}>
                    Nom *
                  </div>
                </div>
                
                <div style={{
                  height: '50px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  border: '2px dashed rgba(255,255,255,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  opacity: 0.7,
                  marginBottom: '20px'
                }}>
                  Email *
                </div>
                
                <div style={{
                  height: '120px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  border: '2px dashed rgba(255,255,255,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  opacity: 0.7,
                  marginBottom: '30px'
                }}>
                  Message
                </div>
                
                <div style={{
                  textAlign: 'center'
                }}>
                  <div style={{
                    backgroundColor: '#E33241',
                    color: 'white',
                    padding: '15px 40px',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'inline-block',
                    border: '2px dashed rgba(255,255,255,0.5)'
                  }}>
                    📧 Formulaire à intégrer
                  </div>
                </div>
              </div>

              {/* Contact direct */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '30px',
                textAlign: 'center'
              }}>
                <div>
                  <div style={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px auto',
                    fontSize: '24px'
                  }}>
                    📞
                  </div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Téléphone</h4>
                  <p style={{ opacity: 0.8, margin: 0 }}>
                    {contact.secretariat.telephone}
                  </p>
                </div>
                
                <div>
                  <div style={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px auto',
                    fontSize: '24px'
                  }}>
                    ✉️
                  </div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Email</h4>
                  <p style={{ opacity: 0.8, margin: 0, wordBreak: 'break-word' }}>
                    {contact.email}
                  </p>
                </div>
                
                <div>
                  <div style={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px auto',
                    fontSize: '24px'
                  }}>
                    👩‍💼
                  </div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Secrétariat</h4>
                  <p style={{ opacity: 0.8, margin: 0 }}>
                    {contact.secretariat.responsable}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Navigation Footer */}
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '40px 20px',
        borderTop: '1px solid #e0e0e0',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', color: '#2c3e50' }}>
            Continuez votre découverte
          </h3>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              href="/maitrise/ecole-maitrisienne" 
              style={{
                backgroundColor: '#E33241',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '600'
              }}
            >
              École Maîtrisienne →
            </Link>
            <Link 
              href="/maitrise/organiste" 
              style={{
                backgroundColor: 'transparent',
                color: '#2c3e50',
                padding: '12px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '16px',
                border: '2px solid #e0e0e0'
              }}
            >
              ← Membres Fondateurs
            </Link>
          </div>
        </div>
      </div>

      {/* Responsive CSS */}
      <style jsx>{`
        @media (max-width: 768px) {
          .grid-responsive {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </main>
  );
}