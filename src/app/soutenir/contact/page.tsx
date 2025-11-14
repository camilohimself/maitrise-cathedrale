'use client';

import { useState } from 'react';
import { useGATracking } from '@/hooks/useGATracking';
import { useHoneypot } from '@/hooks/useHoneypot';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { trackFormSubmit, trackEvent } = useGATracking();
  const { honeypotProps, fieldName, isHuman, reset } = useHoneypot();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Anti-spam: Vérifier le honeypot
    if (!isHuman()) {
      console.warn('🤖 Bot détecté via honeypot');
      alert('Erreur lors de l\'envoi. Veuillez réessayer.');
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(e.currentTarget);
    const data = {
      prenom: formData.get('prenom'),
      nom: formData.get('nom'),
      email: formData.get('_replyto'),
      telephone: formData.get('telephone'),
      sujet: formData.get('sujet'),
      message: formData.get('message'),
      [fieldName]: honeypotProps.value // Honeypot pour validation serveur
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.');
        e.currentTarget.reset();

        // Track successful form submission
        trackFormSubmit('contact');
      } else {
        alert('Erreur lors de l\'envoi. Veuillez réessayer.');

        // Track form error
        trackEvent('form_error', {
          form_name: 'contact',
          error_message: 'API error'
        });
      }
    } catch (error) {
      alert('Erreur lors de l\'envoi. Veuillez réessayer.');

      // Track form error
      trackEvent('form_error', {
        form_name: 'contact',
        error_message: 'Network error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#FAFAF9' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '140px 20px 60px 20px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#1a1340',
            marginBottom: '24px'
          }}>
            Nous contacter
          </h1>
          <div style={{
            width: '80px',
            height: '3px',
            backgroundColor: 'var(--color-gold)',
            margin: '0 auto'
          }}></div>
          <p style={{
            fontSize: '1.2rem',
            color: '#4a5568',
            marginTop: '24px',
            maxWidth: '600px',
            margin: '24px auto 0'
          }}>
            Une question ? Un projet ? N'hésitez pas à nous contacter, nous vous répondrons dans les plus brefs délais.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'start'
        }}>

          {/* Contact Info */}
          <div>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: '#1a1340',
              marginBottom: '32px'
            }}>
              Informations de contact
            </h2>

            <div style={{
              backgroundColor: '#fff',
              borderRadius: '16px',
              padding: '40px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: '1px solid #f0f0f0',
              marginBottom: '32px'
            }}>
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#1a1340',
                  marginBottom: '16px'
                }}>
                  Fondation Musique Sacrée et Maitrise de la Cathédrale de Sion
                </h3>
                <div style={{ lineHeight: '1.8', color: '#4a5568' }}>
                  <p>Rue de la Cathédrale 13</p>
                  <p>1950 Sion, Valais</p>
                  <p>Suisse</p>
                </div>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#1a1340',
                  marginBottom: '12px'
                }}>
                  Téléphone
                </h4>
                <a
                  href="tel:+41796169094"
                  style={{
                    color: 'var(--color-gold)',
                    fontSize: '1.1rem',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#c19660'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
                >
                  +41 79 616 90 94
                </a>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#1a1340',
                  marginBottom: '12px'
                }}>
                  Email
                </h4>
                <a
                  href="mailto:info@maitrise-cathedrale.ch"
                  style={{
                    color: 'var(--color-gold)',
                    fontSize: '1.1rem',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#c19660'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
                >
                  info@maitrise-cathedrale.ch
                </a>
              </div>

              <div>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#1a1340',
                  marginBottom: '12px'
                }}>
                  IBAN
                </h4>
                <p style={{ color: '#4a5568', fontSize: '0.95rem', lineHeight: '1.8' }}>
                  Fondation Musique Sacrée et Maitrise de la Cathédrale de Sion
                  <br />
                  CH90 8080 8004 7602 6591 8
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div style={{
              backgroundColor: '#fff',
              borderRadius: '16px',
              padding: '40px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: '1px solid #f0f0f0'
            }}>
              <h3 style={{
                fontSize: '1.75rem',
                fontWeight: '600',
                color: '#1a1340',
                marginBottom: '24px',
                textAlign: 'center'
              }}>
                Envoyer un message
              </h3>

              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      color: '#1a1340',
                      marginBottom: '8px'
                    }}>
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="prenom"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e2e8f0',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                      onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      color: '#1a1340',
                      marginBottom: '8px'
                    }}>
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e2e8f0',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                      onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    color: '#1a1340',
                    marginBottom: '8px'
                  }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="_replyto"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    color: '#1a1340',
                    marginBottom: '8px'
                  }}>
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    color: '#1a1340',
                    marginBottom: '8px'
                  }}>
                    Sujet *
                  </label>
                  <select
                    name="sujet"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      backgroundColor: '#fff',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="information">Demande d'information</option>
                    <option value="soutien">Soutien et partenariat</option>
                    <option value="concert">Concerts et événements</option>
                    <option value="adhesion">Adhésion Amis de la Maîtrise</option>
                    <option value="media">Médias et presse</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    color: '#1a1340',
                    marginBottom: '8px'
                  }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                    placeholder="Votre message..."
                  />
                </div>

                {/* Honeypot - Champ invisible pour bloquer les bots */}
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
                    pointerEvents: 'none'
                  }}
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    backgroundColor: isSubmitting ? '#9ca3af' : 'var(--color-gold)',
                    color: '#fff',
                    padding: '16px 32px',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = '#c19660';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = 'var(--color-gold)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* MEDIA QUERIES RESPONSIVE */}
      <style jsx>{`
        @media (max-width: 768px) {
          main > div {
            padding: 100px 16px 60px !important;
          }

          main > div > div:nth-child(2) {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }

          main > div > div:first-child h1 {
            font-size: 2rem !important;
          }

          main > div > div:first-child p {
            font-size: 16px !important;
          }
        }

        @media (max-width: 640px) {
          main > div {
            padding: 80px 12px 40px !important;
          }

          main > div > div:first-child h1 {
            font-size: 1.75rem !important;
          }

          /* Form grid 1 column */
          form > div:first-child {
            grid-template-columns: 1fr !important;
          }

          /* Inputs font-size 16px (évite zoom iOS) */
          input, select, textarea {
            font-size: 16px !important;
            padding: 14px 16px !important;
          }

          /* Labels */
          label {
            font-size: 14px !important;
          }

          /* Submit button */
          button[type="submit"] {
            padding: 16px 32px !important;
            font-size: 16px !important;
            min-height: 48px;
          }
        }
      `}</style>
    </main>
  );
}
