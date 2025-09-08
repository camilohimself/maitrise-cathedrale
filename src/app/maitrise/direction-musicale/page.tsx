'use client';

import Link from 'next/link';
import fondationContent from '@/data/fondationContent';

export default function OrganisationPage() {
  const { organisation } = fondationContent;

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#fafafa' }}>
      {/* Breadcrumb */}
      <div style={{ 
        backgroundColor: '#fff', 
        padding: '16px 20px',
        borderBottom: '1px solid #e0e0e0',
        fontSize: '14px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Link href="/maitrise" style={{ color: '#E33241', textDecoration: 'none' }}>
            La Maîtrise
          </Link>
          <span style={{ margin: '0 8px', color: '#999' }}>→</span>
          <span style={{ color: '#666' }}>Organisation</span>
        </div>
      </div>

      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #D2AB5F 0%, #E33241 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '800',
            marginBottom: '24px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            {organisation.title}
          </h1>
          
          <p style={{
            fontSize: '1.3rem',
            lineHeight: '1.7',
            maxWidth: '800px',
            margin: '0 auto',
            opacity: 0.95,
            fontWeight: '300'
          }}>
            {organisation.description}
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Conseil de Fondation */}
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
                🏛️ Gouvernance
              </div>
              
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#2c3e50',
                marginBottom: '20px'
              }}>
                {organisation.conseil.title}
              </h2>
              
              <p style={{
                fontSize: '1.2rem',
                color: '#666',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Les membres du Conseil de Fondation représentent les institutions fondatrices et assurent la direction stratégique.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px'
            }}>
              {organisation.conseil.membres.map((membre, index) => (
                <div key={index} style={{
                  backgroundColor: '#fff',
                  borderRadius: '16px',
                  padding: '28px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  border: '1px solid #f0f0f0',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}>
                  {/* Avatar placeholder */}
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: '#f0f0f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    fontSize: '32px',
                    border: '3px solid #E33241'
                  }}>
                    👤
                  </div>
                  
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    color: '#2c3e50',
                    marginBottom: '8px',
                    lineHeight: '1.3'
                  }}>
                    {membre.nom || 'À désigner'}
                  </h3>
                  
                  <p style={{
                    color: '#E33241',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    margin: 0,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {membre.fonction}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Bureau du Conseil */}
          <section style={{ marginBottom: '80px' }}>
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
                  ⚙️ Gestion
                </div>
                
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#2c3e50',
                  marginBottom: '20px'
                }}>
                  {organisation.bureau.title}
                </h2>
                
                <p style={{
                  fontSize: '1.2rem',
                  color: '#666',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: '1.6'
                }}>
                  Le Bureau assure la gestion courante, l'administration et l'organisation des activités de la Fondation.
                </p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '30px'
              }}>
                {organisation.bureau.membres.map((membre, index) => (
                  <div key={index} style={{
                    backgroundColor: '#f8f9fa',
                    borderRadius: '16px',
                    padding: '32px 24px',
                    border: '2px solid transparent',
                    transition: 'all 0.3s ease',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#D2AB5F';
                    e.currentTarget.style.backgroundColor = '#fff';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.backgroundColor = '#f8f9fa';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}>
                    
                    {/* Rank indicator */}
                    <div style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      backgroundColor: '#D2AB5F',
                      color: 'white',
                      borderRadius: '50%',
                      width: '28px',
                      height: '28px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      fontWeight: '700'
                    }}>
                      {index + 1}
                    </div>
                    
                    {/* Avatar placeholder */}
                    <div style={{
                      width: '90px',
                      height: '90px',
                      borderRadius: '50%',
                      backgroundColor: '#e9ecef',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '24px',
                      fontSize: '36px',
                      margin: '0 auto 24px auto',
                      border: '4px solid #D2AB5F'
                    }}>
                      👤
                    </div>
                    
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      color: '#2c3e50',
                      marginBottom: '12px',
                      lineHeight: '1.3'
                    }}>
                      {membre.nom || 'À désigner'}
                    </h3>
                    
                    <p style={{
                      color: '#D2AB5F',
                      fontSize: '1rem',
                      fontWeight: '600',
                      margin: 0,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {membre.fonction}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Fonctionnement */}
          <section style={{
            backgroundColor: '#2c3e50',
            color: 'white',
            borderRadius: '24px',
            padding: '60px',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '2.2rem',
              fontWeight: '700',
              marginBottom: '32px'
            }}>
              Fonctionnement
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '40px',
              marginTop: '40px'
            }}>
              <div>
                <div style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                  fontSize: '32px'
                }}>
                  📅
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>
                  Réunions mensuelles
                </h3>
                <p style={{ opacity: 0.8, lineHeight: '1.6', margin: 0 }}>
                  Le Bureau se réunit chaque mois pour assurer la gestion courante
                </p>
              </div>
              
              <div>
                <div style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                  fontSize: '32px'
                }}>
                  🎭
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>
                  Organisation culturelle
                </h3>
                <p style={{ opacity: 0.8, lineHeight: '1.6', margin: 0 }}>
                  Festival d'art sacré, concerts et École cathédrale
                </p>
              </div>
              
              <div>
                <div style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                  fontSize: '32px'
                }}>
                  📋
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>
                  Administration
                </h3>
                <p style={{ opacity: 0.8, lineHeight: '1.6', margin: 0 }}>
                  Secrétariat, comptabilité et gestion administrative
                </p>
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
              href="/maitrise/prof-chant" 
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
              Buts & Objectifs →
            </Link>
            <Link 
              href="/maitrise/histoire" 
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
              ← Histoire
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