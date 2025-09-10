'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import fondationContent from '@/data/fondationContent';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationSections = {
    maitrise: {
      title: 'La Maîtrise',
      links: [
        { label: 'Histoire', href: '/maitrise/histoire' },
        { label: 'Direction musicale', href: '/maitrise/direction-musicale' },
        { label: 'École Maîtrisienne', href: '/maitrise/ecole-maitrisienne' },
        { label: 'Ensemble vocal', href: '/maitrise/ensemble-vocal' },
        { label: 'Chœur Grégorien', href: '/maitrise/choeur-gregorien' },
        { label: 'Chapelle Musicale', href: '/maitrise/chapelle-musicale' }
      ]
    },
    media: {
      title: 'Écouter & Voir',
      links: [
        { label: 'Écouter & voir', href: '/media/ecouter-voir' },
        { label: 'Cantates de Bach', href: '/media/cantates-bach' },
        { label: 'Presse', href: '/media/presse' }
      ]
    },
    soutenir: {
      title: 'Nous soutenir',
      links: [
        { label: 'Devenir Ami', href: '/soutenir/amis-maitrise' },
        { label: 'Partenaires', href: '/soutenir/partenaires' },
        { label: 'Contact', href: '/soutenir/contact' }
      ]
    },
    fas: {
      title: 'Festival d\'Art Sacré',
      links: [
        { label: 'Programmation', href: '/fas/programmation' },
        { label: 'Artistes', href: '/fas/artistes' }
      ]
    }
  };

  const socialLinks = [
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@maitrisecathedralesion',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: 'Email',
      href: `mailto:${fondationContent.contact.email}`,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      )
    },
    {
      name: 'Téléphone',
      href: `tel:${fondationContent.contact.telephone}`,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      )
    }
  ];

  return (
    <footer style={{
      background: '#040A23', // Couleur officielle de la palette
      color: '#ffffff',
      paddingTop: '60px',
      paddingBottom: '40px',
      marginTop: '60px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        {/* Section Logo Large */}
        <div style={{
          background: 'linear-gradient(135deg, #040A23 0%, #1a1a2e 100%)',
          padding: '50px 20px',
          textAlign: 'center',
          borderBottom: '3px solid #D2AB5F',
          marginBottom: '50px'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{
              width: '180px',
              height: '180px',
              background: 'linear-gradient(45deg, #D2AB5F, #E6C068)',
              borderRadius: '50%',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 30px rgba(210, 171, 95, 0.3)',
              marginBottom: '30px'
            }}>
              <Image
                src="/images/logo-mc-final.png"
                alt="Maîtrise Cathédrale de Sion - Logo"
                width={250}
                height={120}
                style={{
                  height: '120px',
                  width: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '700',
              marginBottom: '15px',
              color: '#ffffff',
              fontFamily: 'var(--font-family)'
            }}>
              Maîtrise Cathédrale de Sion
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#D2AB5F',
              marginBottom: '30px',
              lineHeight: 1.6,
              fontFamily: 'var(--font-family)'
            }}>
              Voix d'exception au cœur de la Cathédrale
            </p>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link
                href="/soutenir/amis-maitrise"
                style={{
                  background: '#E33241',
                  color: 'white',
                  padding: '15px 30px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 4px 15px rgba(227, 50, 65, 0.3)',
                  fontFamily: 'var(--font-family)',
                  transition: 'all 0.3s ease'
                }}
              >
                ❤️ Devenir Ami
              </Link>
              
              <Link
                href="/fas"
                style={{
                  background: 'transparent',
                  color: '#D2AB5F',
                  padding: '15px 30px',
                  border: '2px solid #D2AB5F',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontFamily: 'var(--font-family)',
                  transition: 'all 0.3s ease'
                }}
              >
                ⚡ Festival d'Art Sacré
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {Object.entries(navigationSections).map(([key, section]) => (
            <div key={key}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: 'var(--color-gold)',
                marginBottom: '20px',
                fontFamily: 'var(--font-family)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {section.title}
              </h3>
              <ul style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        textDecoration: 'none',
                        fontSize: '15px',
                        fontFamily: 'var(--font-family)',
                        transition: 'all 0.3s ease',
                        display: 'block',
                        padding: '4px 0'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--color-gold)';
                        e.currentTarget.style.paddingLeft = '8px';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                        e.currentTarget.style.paddingLeft = '0';
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Information */}
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '700',
              color: 'var(--color-gold)',
              marginBottom: '20px',
              fontFamily: 'var(--font-family)',
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
                fontSize: '15px',
                lineHeight: '1.4',
                color: 'rgba(255, 255, 255, 0.8)',
                fontFamily: 'var(--font-family)'
              }}>
                <strong style={{ color: '#ffffff' }}>
                  {fondationContent.contact.nom}
                </strong>
                <br />
                {fondationContent.contact.adresse.ligne1}
                <br />
                {fondationContent.contact.adresse.ligne2}
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <a
                  href={`tel:${fondationContent.contact.telephone}`}
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontFamily: 'var(--font-family)',
                    transition: 'color 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  {fondationContent.contact.telephone}
                </a>

                <a
                  href={`mailto:${fondationContent.contact.email}`}
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontFamily: 'var(--font-family)',
                    transition: 'color 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    wordBreak: 'break-all'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  {fondationContent.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Quick Actions */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '30px',
          paddingTop: '40px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          marginBottom: '40px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
          }}>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-gold)';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(210, 171, 95, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center'
          }}>
            <Link
              href="/soutenir/amis-maitrise"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '12px 24px',
                backgroundColor: 'var(--color-red)',
                color: '#ffffff',
                textDecoration: 'none',
                borderRadius: '6px',
                fontSize: '15px',
                fontWeight: '600',
                fontFamily: 'var(--font-family)',
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
              Devenir Ami de la Maîtrise
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </Link>

            <Link
              href="/fas"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '12px 24px',
                backgroundColor: 'transparent',
                color: 'var(--color-gold)',
                textDecoration: 'none',
                borderRadius: '6px',
                fontSize: '15px',
                fontWeight: '600',
                fontFamily: 'var(--font-family)',
                transition: 'all 0.3s ease',
                border: '2px solid var(--color-gold)',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-gold)';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(210, 171, 95, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--color-gold)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Festival d'Art Sacré
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          paddingTop: '30px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Link
              href="/mentions-legales"
              style={{
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                fontSize: '14px',
                fontFamily: 'var(--font-family)',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
            >
              Mentions légales
            </Link>
            
            <Link
              href="/politique-confidentialite"
              style={{
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                fontSize: '14px',
                fontFamily: 'var(--font-family)',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
            >
              Politique de confidentialité
            </Link>

            <span style={{
              color: 'rgba(255, 255, 255, 0.4)',
              fontSize: '14px',
              fontFamily: 'var(--font-family)'
            }}>
              •
            </span>

            <span style={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '14px',
              fontFamily: 'var(--font-family)'
            }}>
              © {currentYear} Fondation Musique sacrée et Maîtrise de la Cathédrale de Sion
            </span>
          </div>

          <div style={{
            fontSize: '13px',
            color: 'rgba(255, 255, 255, 0.5)',
            fontFamily: 'var(--font-family)',
            fontStyle: 'italic'
          }}>
            Fondée le 1er juin 2004 • {fondationContent.anniversaire.title} en 2024
          </div>
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          
          .social-buttons {
            flex-direction: column !important;
            align-items: center !important;
            gap: 12px !important;
          }
          
          .cta-buttons {
            flex-direction: column !important;
            width: 100% !important;
          }
          
          .cta-buttons > a {
            justify-content: center !important;
            width: 100% !important;
            max-width: 300px !important;
          }
          
          .footer-bottom {
            gap: 16px !important;
            text-align: center !important;
          }
          
          .footer-bottom-links {
            flex-direction: column !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;