'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import fondationContent from '@/data/fondationContent';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: '#040A23',
      color: '#ffffff',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '100px 40px 50px'
      }}>
        {/* Header avec logo imposant - Style Royal Opera House */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.08) 0%, rgba(212, 165, 116, 0.02) 100%)',
          borderRadius: '24px',
          padding: '60px',
          marginBottom: '80px',
          textAlign: 'center',
          border: '1px solid rgba(212, 165, 116, 0.1)'
        }}>
          <Image
            src="/images/logo-mc-footer.png"
            alt="Maîtrise Cathédrale de Sion"
            width={450}
            height={140}
            style={{
              height: '140px',
              width: 'auto',
              objectFit: 'contain',
              marginBottom: '40px',
              filter: 'brightness(1.1)'
            }}
          />
          
          <h1 style={{
            fontSize: '48px',
            fontWeight: '400',
            marginBottom: '20px',
            color: '#ffffff',
            letterSpacing: '0.5px'
          }}>
            Maîtrise Cathédrale de Sion
          </h1>
          
          <p style={{
            fontSize: '22px',
            color: '#D4A574',
            fontWeight: '300',
            marginBottom: '40px'
          }}>
            Voix d'exception au cœur de la Cathédrale
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap'
          }}>
            <Link href="/soutenir/amis-maitrise" style={{
              background: '#E33241',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '16px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(227, 50, 65, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(227, 50, 65, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(227, 50, 65, 0.3)';
            }}
            >
              Devenir Ami
            </Link>
            
            <Link href="/fas" style={{
              background: 'transparent',
              color: '#D4A574',
              padding: '16px 32px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '16px',
              border: '2px solid #D4A574',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#D4A574';
              e.currentTarget.style.color = '#040A23';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#D4A574';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              Festival d'Art Sacré
            </Link>
          </div>
        </div>

        {/* Navigation compacte et sophistiquée */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '60px'
        }}>
          {/* Navigation */}
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#D4A574',
              marginBottom: '24px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Navigation
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              {[
                { label: 'La Maîtrise', href: '/maitrise' },
                { label: 'Écouter & Voir', href: '/media' },
                { label: 'Nous soutenir', href: '/soutenir' },
                { label: 'Festival d\'Art Sacré', href: '/fas' },
                { label: 'Agenda & Billetterie', href: '/agenda-billetterie' }
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '16px',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#D4A574',
              marginBottom: '24px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Contact
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <div style={{
                fontSize: '16px',
                lineHeight: '1.6',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                <div style={{ fontWeight: '600', marginBottom: '8px' }}>
                  {fondationContent.contact.nom}
                </div>
                <div>{fondationContent.contact.adresse.ligne1}</div>
                <div>{fondationContent.contact.adresse.ligne2}</div>
              </div>

              <a href={`mailto:${fondationContent.contact.email}`} style={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                fontSize: '16px',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                {fondationContent.contact.email}
              </a>

              <a href={`tel:${fondationContent.contact.telephone}`} style={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                fontSize: '16px',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                {fondationContent.contact.telephone}
              </a>
            </div>
          </div>

          {/* Suivez-nous */}
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#D4A574',
              marginBottom: '24px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Suivez-nous
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <a href="https://www.youtube.com/@maitrisecathedralesion" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 style={{
                   color: 'rgba(255, 255, 255, 0.8)',
                   textDecoration: 'none',
                   fontSize: '16px',
                   transition: 'color 0.3s ease',
                   display: 'flex',
                   alignItems: 'center',
                   gap: '12px'
                 }}
                 onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                 onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>
              
              <Link href="/media" style={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                fontSize: '16px',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                Concerts & Médias
              </Link>
              
              <Link href="/soutenir/contact" style={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                fontSize: '16px',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                Newsletter
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright minimaliste */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '30px',
          textAlign: 'center',
          fontSize: '15px',
          color: 'rgba(255, 255, 255, 0.6)'
        }}>
          © {currentYear} Fondation Maîtrise de la Cathédrale de Sion • Fondée en 2004
        </div>
      </div>

      {/* Mobile Responsive */}
      <style jsx>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;