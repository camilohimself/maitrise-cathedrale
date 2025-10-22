'use client';

import React, { useState } from 'react';
import { useGATracking } from '@/hooks/useGATracking';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const { trackFormSubmit, trackEvent } = useGATracking();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Merci pour votre inscription ! 🎼');
        setEmail('');
        setTimeout(() => setMessage(''), 5000);

        // Track successful form submission
        trackFormSubmit('newsletter');
      } else {
        setMessage('Une erreur est survenue. Veuillez réessayer.');

        // Track form error
        trackEvent('form_error', {
          form_name: 'newsletter',
          error_message: 'API error'
        });
      }
    } catch (error) {
      setMessage('Une erreur est survenue. Veuillez réessayer.');

      // Track form error
      trackEvent('form_error', {
        form_name: 'newsletter',
        error_message: 'Network error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      className="newsletter-section"
      style={{
        backgroundColor: 'var(--color-cream)',
        padding: 'var(--spacing-3xl) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 var(--spacing-lg)',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-xl)',
        flexWrap: 'wrap',
      }}>
        {/* Barre dorée latérale */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          width: '4px',
          height: '120px',
          backgroundColor: 'var(--color-gold)',
        }} />

        {/* Contenu texte */}
        <div style={{
          flex: '1 1 500px',
          paddingLeft: 'var(--spacing-lg)',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-spectral)',
            fontSize: 'var(--text-h2)',
            fontWeight: 'var(--font-bold)',
            color: 'var(--color-navy)',
            marginBottom: 'var(--spacing-sm)',
          }}>
            Recevez nos actualités
          </h2>
          <p style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-regular)',
            color: 'var(--color-navy)',
            opacity: 0.8,
          }}>
            et ne manquez aucun concert
          </p>
        </div>

        {/* Formulaire */}
        <form 
          onSubmit={handleSubmit}
          style={{
            flex: '1 1 400px',
            display: 'flex',
            gap: 'var(--spacing-sm)',
            alignItems: 'center',
          }}
        >
          <div style={{
            flex: 1,
            position: 'relative',
          }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Adresse email"
              required
              style={{
                width: '100%',
                padding: '14px 20px',
                backgroundColor: 'var(--color-white)',
                border: '1px solid rgba(26, 19, 64, 0.1)',
                borderRadius: 'var(--radius-sm)',
                fontFamily: 'var(--font-outfit)',
                fontSize: 'var(--text-base)',
                color: 'var(--color-navy)',
                transition: 'all var(--transition-base)',
                outline: 'none',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-gold)';
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(212, 165, 116, 0.1)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(26, 19, 64, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              padding: '14px 36px',
              backgroundColor: isSubmitting ? '#ccc' : 'var(--color-gold)',
              color: 'var(--color-white)',
              border: 'none',
              borderRadius: 'var(--radius-sm)',
              fontFamily: 'var(--font-outfit)',
              fontWeight: 'var(--font-semibold)',
              fontSize: 'var(--text-base)',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              transition: 'all var(--transition-base)',
              transform: isHovered && !isSubmitting ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
              boxShadow: isHovered && !isSubmitting ? 'var(--shadow-gold)' : 'none',
              filter: isHovered && !isSubmitting ? 'brightness(1.1)' : 'brightness(1)',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={() => !isSubmitting && setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isSubmitting ? 'Inscription...' : "S'inscrire"}
          </button>
        </form>

        {/* Message de confirmation */}
        {message && (
          <div style={{
            marginTop: '20px',
            padding: '12px 20px',
            backgroundColor: message.includes('Merci') ? '#d4edda' : '#f8d7da',
            color: message.includes('Merci') ? '#155724' : '#721c24',
            borderRadius: 'var(--radius-sm)',
            textAlign: 'center',
            fontFamily: 'var(--font-outfit)',
            fontSize: 'var(--text-base)',
          }}>
            {message}
          </div>
        )}
      </div>

      {/* Motif décoratif optionnel */}
      <div style={{
        position: 'absolute',
        right: '-100px',
        bottom: '-100px',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        backgroundColor: 'var(--color-gold)',
        opacity: 0.05,
      }} />

      {/* Styles mobiles responsive */}
      <style jsx>{`
        @media (max-width: 768px) {
          .newsletter-section > div {
            flex-direction: column !important;
            gap: 1.5rem !important;
            text-align: center !important;
          }

          .newsletter-section form {
            flex-direction: column !important;
            width: 100% !important;
          }

          .newsletter-section button {
            width: 100% !important;
            padding: 12px 28px !important;
          }
        }

        @media (max-width: 640px) {
          .newsletter-section {
            padding: 3rem 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Newsletter;