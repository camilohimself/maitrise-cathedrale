'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#000',
      color: '#fff',
      padding: '60px 0 30px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {/* Logo & Description */}
          <div>
            <h3 style={{
              fontSize: '32px',
              fontWeight: '800',
              color: '#D2AB5F',
              marginBottom: '20px',
              fontFamily: 'var(--font-family)'
            }}>
              M
            </h3>
            <p style={{
              fontSize: '15px',
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: '1.6',
              fontFamily: 'var(--font-family)'
            }}>
              La Maîtrise de la Cathédrale de Sion<br />
              Voix d&apos;exception au cœur de la Cathédrale
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#D2AB5F',
              marginBottom: '20px',
              fontFamily: 'var(--font-family)'
            }}>
              Navigation
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <li>
                <Link 
                  href="#agenda"
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '15px',
                    transition: 'color 0.3s ease',
                    fontFamily: 'var(--font-family)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#D2AB5F'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  Agenda & Billetterie
                </Link>
              </li>
              <li>
                <Link 
                  href="#maitrise"
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '15px',
                    transition: 'color 0.3s ease',
                    fontFamily: 'var(--font-family)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#D2AB5F'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  La Maîtrise
                </Link>
              </li>
              <li>
                <Link 
                  href="#media"
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '15px',
                    transition: 'color 0.3s ease',
                    fontFamily: 'var(--font-family)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#D2AB5F'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  Écouter & voir
                </Link>
              </li>
              <li>
                <Link 
                  href="#soutenir"
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '15px',
                    transition: 'color 0.3s ease',
                    fontFamily: 'var(--font-family)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#D2AB5F'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  Nous soutenir
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#D2AB5F',
              marginBottom: '20px',
              fontFamily: 'var(--font-family)'
            }}>
              Contact
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <a 
                href="mailto:info@maitrise-cathedrale.ch"
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  fontSize: '15px',
                  transition: 'color 0.3s ease',
                  fontFamily: 'var(--font-family)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#D2AB5F'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
              >
                info@maitrise-cathedrale.ch
              </a>
              <p style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '15px',
                fontFamily: 'var(--font-family)'
              }}>
                Cathédrale de Sion<br />
                Rue de la Cathédrale 13<br />
                1950 Sion
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#D2AB5F',
              marginBottom: '20px',
              fontFamily: 'var(--font-family)'
            }}>
              Suivez-nous
            </h4>
            <div style={{
              display: 'flex',
              gap: '15px'
            }}>
              <a 
                href="https://facebook.com/maitrisecathedrale"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#D2AB5F';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/maitrisecathedrale"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#D2AB5F';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com/@maitrisecathedrale"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#D2AB5F';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#000"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '30px',
          marginTop: '30px'
        }}>
          {/* Legal Links & Copyright */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div style={{
              display: 'flex',
              gap: '30px',
              flexWrap: 'wrap'
            }}>
              <Link 
                href="/contact"
                style={{
                  color: 'rgba(255, 255, 255, 0.5)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.3s ease',
                  fontFamily: 'var(--font-family)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#D2AB5F'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)'}
              >
                Contact
              </Link>
              <Link 
                href="/presse"
                style={{
                  color: 'rgba(255, 255, 255, 0.5)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.3s ease',
                  fontFamily: 'var(--font-family)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#D2AB5F'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)'}
              >
                Presse
              </Link>
              <Link 
                href="/mentions-legales"
                style={{
                  color: 'rgba(255, 255, 255, 0.5)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.3s ease',
                  fontFamily: 'var(--font-family)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#D2AB5F'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)'}
              >
                Mentions légales
              </Link>
              <Link 
                href="/politique-confidentialite"
                style={{
                  color: 'rgba(255, 255, 255, 0.5)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.3s ease',
                  fontFamily: 'var(--font-family)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#D2AB5F'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)'}
              >
                Politiques de Confidentialités
              </Link>
            </div>
            
            <p style={{
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: '14px',
              fontFamily: 'var(--font-family)'
            }}>
              © 2025 par OSOM
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;