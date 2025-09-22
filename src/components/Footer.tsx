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
            color: 'var(--color-gold)',
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
              color: 'var(--color-gold)',
              padding: '16px 32px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '16px',
              border: '2px solid var(--color-gold)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-gold)';
              e.currentTarget.style.color = '#040A23';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--color-gold)';
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
              color: 'var(--color-gold)',
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
              color: 'var(--color-gold)',
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
              color: 'var(--color-gold)',
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
              <a href="https://www.facebook.com/MaitriseSion/"
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
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>

              <a href="https://www.instagram.com/maitrise_cathedrale/"
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
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                </svg>
                Instagram
              </a>

              <a href="https://soundcloud.com/maitrise-cathedrale-sion"
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
                  <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154c-.007.054.038.103.088.103h.47c.05 0 .095-.046.102-.1l.233-2.154c.007-.054-.038-.103-.088-.103h-.47zm2.23-1.149c-.051 0-.095.046-.102.1l-.39 3.616c-.007.054.038.102.088.102h.478c.05 0 .094-.046.101-.1l.39-3.616c.007-.054-.038-.102-.088-.102h-.478zm2.382-.92c-.05 0-.094.046-.101.1l-.626 5.795c-.007.054.038.103.088.103h.494c.05 0 .095-.046.102-.1l.626-5.795c.007-.054-.038-.103-.088-.103h-.494zm2.397-.783c-.05 0-.094.046-.101.1l-.814 7.534c-.007.054.038.102.088.102h.51c.05 0 .095-.046.102-.1l.814-7.534c.007-.054-.038-.102-.088-.102h-.51zm7.31.696c-.322-.418-.848-.666-1.488-.666-.69 0-1.256.213-1.677.64-.43.434-.645 1.08-.645 1.926v3.745c0 .867.2 1.515.584 1.926.385.412.943.62 1.668.62.817 0 1.403-.283 1.738-.844.333-.557.497-1.395.497-2.508 0-.967-.176-1.714-.51-2.22zm-.887 5.942c-.065.22-.168.38-.307.488-.138.108-.307.156-.5.156-.177 0-.337-.049-.473-.142-.135-.092-.238-.245-.302-.45-.065-.207-.097-.49-.097-.859v-4.279c0-.337.039-.612.114-.816.076-.203.19-.35.34-.433.148-.08.337-.12.557-.12.184 0 .342.052.468.152.125.1.22.247.282.433.06.188.09.468.09.85v4.35c0 .3-.037.538-.104.72zm5.69-6.638c-.69 0-1.256.213-1.677.64-.43.434-.645 1.08-.645 1.926v3.745c0 .867.2 1.515.584 1.926.385.412.943.62 1.668.62.817 0 1.403-.283 1.738-.844.333-.557.497-1.395.497-2.508 0-.967-.176-1.714-.51-2.22-.322-.418-.848-.666-1.488-.666-.69 0-1.256.213-1.677.64-.43.434-.645 1.08-.645 1.926v3.745c0 .867.2 1.515.584 1.926.385.412.943.62 1.668.62.817 0 1.403-.283 1.738-.844.333-.557.497-1.395.497-2.508 0-.967-.176-1.714-.51-2.22zm-.887 5.942c-.065.22-.168.38-.307.488-.138.108-.307.156-.5.156-.177 0-.337-.049-.473-.142-.135-.092-.238-.245-.302-.45-.065-.207-.097-.49-.097-.859v-4.279c0-.337.039-.612.114-.816.076-.203.19-.35.34-.433.148-.08.337-.12.557-.12.184 0 .342.052.468.152.125.1.22.247.282.433.06.188.09.468.09.85v4.35c0 .3-.037.538-.104.72z"/>
                </svg>
                SoundCloud
              </a>

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