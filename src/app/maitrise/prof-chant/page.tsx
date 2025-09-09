'use client';

import Link from 'next/link';
import fondationContent from '@/data/fondationContent';

export default function ButsObjectifsPage() {
  const { objectifs } = fondationContent;

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#fafafa' }}>

      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #E33241 0%, #D2AB5F 100%)',
        color: 'white',
        padding: '100px 20px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '800',
            marginBottom: '32px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            {objectifs.title}
          </h1>
          
          {/* Vision Image Placeholder */}
          <div style={{
            maxWidth: '600px',
            height: '300px',
            margin: '0 auto 40px',
            backgroundColor: 'rgba(255,255,255,0.15)',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '3px dashed rgba(255,255,255,0.3)'
          }}>
            <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.8)' }}>
              <div style={{ fontSize: '64px', marginBottom: '16px' }}>👼</div>
              <p style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>
                Visuel ange
              </p>
              <p style={{ margin: '8px 0 0 0', fontSize: '14px' }}>
                Image à intégrer
              </p>
            </div>
          </div>
          
          <p style={{
            fontSize: '1.4rem',
            lineHeight: '1.7',
            opacity: 0.95,
            fontWeight: '300',
            fontStyle: 'italic'
          }}>
            {objectifs.vision.content}
          </p>
        </div>
        
        {/* Background pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage: 'radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Buts Section */}
      <div style={{ padding: '100px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{
              backgroundColor: '#E33241',
              color: 'white',
              padding: '12px 28px',
              borderRadius: '30px',
              fontSize: '16px',
              fontWeight: '600',
              display: 'inline-block',
              marginBottom: '32px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              🎯 Nos Missions
            </div>
            
            <h2 style={{
              fontSize: '2.8rem',
              fontWeight: '700',
              color: '#2c3e50',
              marginBottom: '24px'
            }}>
              Trois piliers fondamentaux
            </h2>
            
            <p style={{
              fontSize: '1.3rem',
              color: '#666',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.7'
            }}>
              La Fondation poursuit des objectifs ambitieux pour développer l'excellence musicale et spirituelle
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px'
          }}>
            {objectifs.buts.map((but, index) => (
              <div key={but.id} style={{
                backgroundColor: '#fff',
                borderRadius: '24px',
                padding: '50px 40px',
                boxShadow: '0 15px 50px rgba(0,0,0,0.08)',
                border: '1px solid #f0f0f0',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 25px 70px rgba(227,50,65,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(0,0,0,0.08)';
              }}>
                
                {/* Number indicator */}
                <div style={{
                  position: 'absolute',
                  top: '30px',
                  right: '30px',
                  backgroundColor: index === 0 ? '#E33241' : index === 1 ? '#D2AB5F' : '#2c3e50',
                  color: 'white',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  fontWeight: '800'
                }}>
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  backgroundColor: index === 0 ? 'rgba(227,50,65,0.1)' : index === 1 ? 'rgba(210,171,95,0.1)' : 'rgba(44,62,80,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '30px',
                  fontSize: '40px'
                }}>
                  {index === 0 ? '🎼' : index === 1 ? '🏛️' : '🎓'}
                </div>
                
                <h3 style={{
                  fontSize: '1.6rem',
                  fontWeight: '700',
                  color: '#2c3e50',
                  marginBottom: '20px',
                  lineHeight: '1.3'
                }}>
                  {but.title}
                </h3>
                
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  color: '#555',
                  margin: 0
                }}>
                  {but.content}
                </p>
                
                {/* Decorative element */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: index === 0 ? '#E33241' : index === 1 ? '#D2AB5F' : '#2c3e50'
                }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div style={{
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '24px'
          }}>
            Rejoignez notre mission
          </h2>
          
          <p style={{
            fontSize: '1.3rem',
            lineHeight: '1.7',
            opacity: 0.9,
            marginBottom: '40px'
          }}>
            La Fondation offre à nos contemporains l'occasion de trouver un surplus de sens à travers la beauté de la musique sacrée.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              href="/maitrise/ensemble-vocal" 
              style={{
                backgroundColor: '#E33241',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(227,50,65,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Association des Amis →
            </Link>
            
            <Link 
              href="/soutenir/contact" 
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '600',
                border: '2px solid rgba(255,255,255,0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.borderColor = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
              }}
            >
              Nous contacter
            </Link>
          </div>
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
              href="/maitrise/organiste" 
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
              Membres Fondateurs →
            </Link>
            <Link 
              href="/maitrise/direction-musicale" 
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
              ← Organisation
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}