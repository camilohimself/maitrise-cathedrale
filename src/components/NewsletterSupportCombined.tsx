'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useGATracking } from '@/hooks/useGATracking';
import { useHoneypot } from '@/hooks/useHoneypot';

/**
 * NEWSLETTER + SUPPORT COMBINED - Style Opera de Paris
 * Layout 50/50: Newsletter gauche | Support droite
 * Mobile: Stack vertical
 */

const NewsletterSupportCombined = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const { trackFormSubmit, trackEvent } = useGATracking();
  const { honeypotProps, fieldName, isHuman } = useHoneypot();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!isHuman()) {
      console.warn('Bot detected');
      setMessage('Une erreur est survenue. Veuillez reessayer.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, [fieldName]: honeypotProps.value }),
      });

      if (response.ok) {
        setMessage('Merci pour votre inscription !');
        setEmail('');
        setTimeout(() => setMessage(''), 5000);
        trackFormSubmit('newsletter');
      } else {
        setMessage('Une erreur est survenue. Veuillez reessayer.');
        trackEvent('form_error', { form_name: 'newsletter', error_message: 'API error' });
      }
    } catch {
      setMessage('Une erreur est survenue. Veuillez reessayer.');
      trackEvent('form_error', { form_name: 'newsletter', error_message: 'Network error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const supportOptions = [
    {
      number: '01',
      title: 'Association des Amis',
      description: 'Rejoignez notre communaute et soutenez nos activites musicales.',
      link: '/soutenir/amis-maitrise',
    },
    {
      number: '02',
      title: 'Mecenat & Partenariat',
      description: 'Associez votre entreprise a l\'excellence artistique.',
      link: '/soutenir/partenaires',
    },
    {
      number: '03',
      title: 'Faire un Don',
      description: 'Soutenez la formation des jeunes talents.',
      link: '/soutenir/contact',
    },
  ];

  return (
    <section style={{
      backgroundColor: '#1a1340',
      position: 'relative',
    }}>
      <div className="newsletter-support-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      }}>

        {/* LEFT: Newsletter */}
        <div style={{
          backgroundColor: '#1a1340',
          padding: '60px',
        }}>
          <span style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '0.7rem',
            fontWeight: '500',
            color: '#D4A574',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            marginBottom: '1rem',
          }}>
            Newsletter
          </span>

          <h2 style={{
            fontFamily: 'var(--font-spectral)',
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: '400',
            color: '#FFFFFF',
            marginBottom: '1rem',
            lineHeight: 1.2,
          }}>
            Recevez nos actualites
          </h2>

          <p style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '1rem',
            fontWeight: '300',
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '2rem',
            lineHeight: 1.6,
          }}>
            Ne manquez aucun concert de la saison. Inscrivez-vous pour recevoir notre programme.
          </p>

          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
          }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre email"
              required
              style={{
                flex: '1 1 200px',
                padding: '16px 20px',
                backgroundColor: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '4px',
                fontFamily: 'var(--font-outfit)',
                fontSize: '1rem',
                color: '#FFFFFF',
                outline: 'none',
                transition: 'all 0.3s ease',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#D4A574';
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
              }}
            />

            {/* Honeypot */}
            <input
              type="text"
              name={fieldName}
              {...honeypotProps}
              style={{
                position: 'absolute',
                left: '-9999px',
                width: '1px',
                height: '1px',
                opacity: 0,
                pointerEvents: 'none',
              }}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: '16px 32px',
                backgroundColor: '#D4A574',
                color: '#1a1340',
                border: 'none',
                borderRadius: '4px',
                fontFamily: 'var(--font-outfit)',
                fontWeight: '600',
                fontSize: '0.9rem',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.backgroundColor = '#e0b68a';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#D4A574';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {isSubmitting ? 'Envoi...' : "S'inscrire"}
            </button>
          </form>

          {message && (
            <div style={{
              marginTop: '1rem',
              padding: '12px 16px',
              backgroundColor: message.includes('Merci') ? 'rgba(76, 175, 80, 0.2)' : 'rgba(244, 67, 54, 0.2)',
              color: message.includes('Merci') ? '#81c784' : '#ef5350',
              borderRadius: '4px',
              fontFamily: 'var(--font-outfit)',
              fontSize: '0.9rem',
            }}>
              {message}
            </div>
          )}
        </div>

        {/* RIGHT: Support */}
        <div style={{
          backgroundColor: '#FAFAF9',
          padding: '60px',
        }}>
          <span style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '0.7rem',
            fontWeight: '500',
            color: '#D4A574',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            marginBottom: '1rem',
          }}>
            Nous soutenir
          </span>

          <h2 style={{
            fontFamily: 'var(--font-spectral)',
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: '400',
            color: '#1a1340',
            marginBottom: '2rem',
            lineHeight: 1.2,
          }}>
            Soutenez la Maitrise
          </h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}>
            {supportOptions.map((option) => (
              <Link
                key={option.number}
                href={option.link}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  textDecoration: 'none',
                  padding: '16px',
                  borderRadius: '4px',
                  transition: 'all 0.3s ease',
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(26, 19, 64, 0.04)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-outfit)',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: '#D4A574',
                  letterSpacing: '1px',
                  minWidth: '24px',
                }}>
                  {option.number}
                </span>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-spectral)',
                    fontSize: '1.1rem',
                    fontWeight: '500',
                    color: '#1a1340',
                    marginBottom: '4px',
                  }}>
                    {option.title}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '0.85rem',
                    fontWeight: '300',
                    color: '#666',
                    lineHeight: 1.5,
                  }}>
                    {option.description}
                  </p>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1a1340"
                  strokeWidth="2"
                  style={{ marginLeft: 'auto', flexShrink: 0, marginTop: '4px' }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 900px) {
          :global(.newsletter-support-grid) {
            grid-template-columns: 1fr !important;
          }

          :global(.newsletter-support-grid) > div {
            padding: 60px 30px !important;
          }
        }

        @media (max-width: 640px) {
          :global(.newsletter-support-grid) > div {
            padding: 48px 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default NewsletterSupportCombined;
