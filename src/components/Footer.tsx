'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import fondationContent from '@/data/fondationContent';
import { useGATracking } from '@/hooks/useGATracking';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { trackExternalLink } = useGATracking();

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
      }} className="footer-container">
        {/* Header MINIMALISTE V1 - Logo XXL */}
        <div style={{
          background: '#FAFAF9',
          borderRadius: '24px',
          padding: '80px 60px',
          marginBottom: '80px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }} className="footer-header">
          {/* Logo XXL centré */}
          <div style={{
            position: 'relative',
            width: 'min(500px, 90vw)',
            height: 'min(500px, 90vw)',
            marginBottom: '4rem',
            filter: 'drop-shadow(0 20px 60px rgba(0, 0, 0, 0.08))'
          }}>
            <Image
              src="/images/logo-mc-couleur.png"
              alt="Maîtrise Cathédrale de Sion"
              fill
              style={{ objectFit: 'contain' }}
              className="footer-logo"
            />
          </div>

          {/* Titre épuré */}
          <h1 style={{
            fontFamily: 'var(--font-spectral)',
            fontSize: 'clamp(1.75rem, 6vw, 3.5rem)',
            fontWeight: '700',
            color: '#1a1340',
            textAlign: 'center',
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            maxWidth: '90vw'
          }} className="footer-title">
            Maîtrise Cathédrale de Sion
          </h1>

          {/* Baseline élégante */}
          <p style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '1.5rem',
            fontWeight: '300',
            color: '#D4A574',
            textAlign: 'center',
            marginBottom: '4rem',
            letterSpacing: '0.02em'
          }}>
            Voix d'exception au cœur de la Cathédrale
          </p>

          {/* CTAs minimalistes */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <Link
              href="/soutenir/amis-maitrise"
              style={{
                padding: '18px 40px',
                background: '#1a1340',
                color: 'white',
                borderRadius: '8px',
                fontFamily: 'var(--font-outfit)',
                fontWeight: '600',
                fontSize: '1.1rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(26, 19, 64, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Devenir Ami
            </Link>

            <Link
              href="/fas"
              style={{
                padding: '18px 40px',
                background: 'transparent',
                color: '#D4A574',
                border: '2px solid #D4A574',
                borderRadius: '8px',
                fontFamily: 'var(--font-outfit)',
                fontWeight: '600',
                fontSize: '1.1rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#D4A574';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#D4A574';
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
                 onClick={() => trackExternalLink('https://www.facebook.com/MaitriseSion/', 'Facebook')}
                 style={{
                   color: 'rgba(255, 255, 255, 0.8)',
                   textDecoration: 'none',
                   fontSize: '16px',
                   transition: 'color 0.3s ease',
                   display: 'flex',
                   alignItems: 'center',
                   gap: '12px',
                   minHeight: '44px',
                   padding: '8px 0'
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
                 onClick={() => trackExternalLink('https://www.instagram.com/maitrise_cathedrale/', 'Instagram')}
                 style={{
                   color: 'rgba(255, 255, 255, 0.8)',
                   textDecoration: 'none',
                   fontSize: '16px',
                   transition: 'color 0.3s ease',
                   display: 'flex',
                   alignItems: 'center',
                   gap: '12px',
                   minHeight: '44px',
                   padding: '8px 0'
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
                 onClick={() => trackExternalLink('https://soundcloud.com/maitrise-cathedrale-sion', 'SoundCloud')}
                 style={{
                   color: 'rgba(255, 255, 255, 0.8)',
                   textDecoration: 'none',
                   fontSize: '16px',
                   transition: 'color 0.3s ease',
                   display: 'flex',
                   alignItems: 'center',
                   gap: '12px',
                   minHeight: '44px',
                   padding: '8px 0'
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
                 onClick={() => trackExternalLink('https://www.youtube.com/@maitrisecathedralesion', 'YouTube')}
                 style={{
                   color: 'rgba(255, 255, 255, 0.8)',
                   textDecoration: 'none',
                   fontSize: '16px',
                   transition: 'color 0.3s ease',
                   display: 'flex',
                   alignItems: 'center',
                   gap: '12px',
                   minHeight: '44px',
                   padding: '8px 0'
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
          <div style={{ marginBottom: '12px' }}>
            © {currentYear} Fondation Maîtrise de la Cathédrale de Sion • Fondée en 2004
          </div>
          <div style={{
            fontSize: '13px',
            fontStyle: 'italic',
            color: 'rgba(255, 255, 255, 0.4)',
            transition: 'color 0.3s ease'
          }}>
            Orchestré avec soin par{' '}
            <a
              href="https://www.osom.ch"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackExternalLink('https://www.osom.ch', 'OSOM')}
              style={{
                color: 'rgba(212, 165, 116, 0.6)',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(212, 165, 116, 1)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(212, 165, 116, 0.6)'}
            >
              OSOM
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Responsive - LESS IS MORE */}
      <style jsx>{`
        /* Tablet: Réduction modérée */
        @media (max-width: 768px) {
          :global(.footer-container) {
            padding: 50px 20px 35px !important;
          }

          :global(.footer-header) {
            padding: 32px 20px !important;
            margin-bottom: 40px !important;
            border-radius: 16px !important;
          }

          :global(.footer-logo) {
            height: 75px !important;
            max-width: 100%;
            margin-bottom: 24px !important;
          }

          :global(.footer-title) {
            font-size: 32px !important;
            margin-bottom: 16px !important;
          }

          footer p {
            font-size: 18px !important;
          }

          footer a[href^="/soutenir/amis-maitrise"],
          footer a[href^="/fas"] {
            padding: 16px 32px !important;
            font-size: 15px !important;
            min-height: 48px;
          }
        }

        /* Mobile: LESS IS MORE radical */
        @media (max-width: 640px) {
          :global(.footer-container) {
            padding: 40px 16px 30px !important;
          }

          :global(.footer-header) {
            padding: 24px 16px !important;
            margin-bottom: 32px !important;
            border-radius: 12px !important;
          }

          :global(.footer-logo) {
            height: 60px !important;
            margin-bottom: 20px !important;
          }

          :global(.footer-title) {
            font-size: 24px !important;
            margin-bottom: 12px !important;
            line-height: 1.3 !important;
          }

          /* Masquer tagline sur mobile */
          footer p {
            font-size: 16px !important;
            display: none !important;
          }

          /* Boutons full-width */
          footer a[href^="/soutenir/amis-maitrise"],
          footer a[href^="/fas"] {
            padding: 12px 24px !important;
            font-size: 14px !important;
            width: 100% !important;
            display: block !important;
            text-align: center !important;
            box-sizing: border-box !important;
          }

          /* Grid 1 colonne forcée */
          footer > div > div:nth-child(2) {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }

          /* Titres sections plus petits */
          footer h3 {
            font-size: 16px !important;
            margin-bottom: 16px !important;
          }

          /* Liens plus compacts */
          footer a {
            font-size: 14px !important;
          }

          /* Copyright compact */
          footer > div > div:last-child {
            padding-top: 24px !important;
            font-size: 13px !important;
          }

          footer > div > div:last-child > div:last-child {
            font-size: 11px !important;
          }
        }

        /* Petits mobiles: Ultra compact */
        @media (max-width: 480px) {
          :global(.footer-container) {
            padding: 32px 12px 24px !important;
          }

          :global(.footer-header) {
            padding: 20px 12px !important;
            margin-bottom: 24px !important;
          }

          :global(.footer-logo) {
            height: 50px !important;
            margin-bottom: 16px !important;
          }

          :global(.footer-title) {
            font-size: 20px !important;
            margin-bottom: 10px !important;
          }

          footer > div > div:nth-child(2) {
            gap: 24px !important;
          }

          footer h3 {
            font-size: 15px !important;
            margin-bottom: 12px !important;
          }

          footer a {
            font-size: 13px !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;