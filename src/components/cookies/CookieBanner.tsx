'use client'

import { useState } from 'react'
import { useCookieConsent } from '@/hooks/useCookieConsent'

const CookieBanner = () => {
  const { showBanner, acceptAll, acceptEssential } = useCookieConsent()
  const [showInfo, setShowInfo] = useState(false)

  if (!showBanner && !showInfo) return null

  const handleInfoClick = () => {
    setShowInfo(true)
  }

  const handleInfoClose = () => {
    setShowInfo(false)
    acceptAll() // Accept all cookies when closing info popup
  }

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && (
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            background: 'linear-gradient(135deg, #1a1340 0%, #2a2050 100%)',
            borderTop: '1px solid rgba(212, 165, 116, 0.2)',
            boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.3)',
            animation: 'slideUp 0.4s ease-out'
          }}
        >
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '1.5rem 1.5rem',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '2rem',
              flexWrap: 'wrap'
            }}>
              <div style={{ flex: '1 1 300px' }}>
                <p style={{
                  color: 'white',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  fontWeight: '300',
                  margin: 0
                }}>
                  Nous utilisons des cookies pour vous offrir la meilleure expérience possible sur notre site Internet.
                  <br />
                  Vous pouvez en savoir plus sur les cookies que nous utilisons ou les désactiver dans{' '}
                  <span
                    onClick={handleInfoClick}
                    style={{
                      color: '#D4A574',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                      fontWeight: '400'
                    }}
                  >
                    les réglages
                  </span>.
                </p>
              </div>

              <div style={{
                display: 'flex',
                gap: '0.75rem',
                alignItems: 'center',
                flexWrap: 'wrap'
              }}>
                <button
                  onClick={acceptAll}
                  style={{
                    padding: '0.625rem 1.5rem',
                    background: '#D4A574',
                    color: '#1a1340',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 8px rgba(212, 165, 116, 0.3)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#e5b685'
                    e.currentTarget.style.transform = 'translateY(-1px)'
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(212, 165, 116, 0.4)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = '#D4A574'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(212, 165, 116, 0.3)'
                  }}
                >
                  Accepter
                </button>

                <button
                  onClick={handleInfoClick}
                  style={{
                    padding: '0.625rem 1.5rem',
                    background: 'white',
                    color: '#1a1340',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#f5f5f5'
                    e.currentTarget.style.transform = 'translateY(-1px)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'white'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>🎼</span>
                  En savoir plus
                </button>

                <button
                  onClick={acceptEssential}
                  style={{
                    padding: '0.625rem 1.5rem',
                    background: 'transparent',
                    color: '#D4A574',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    borderRadius: '6px',
                    border: '1px solid #D4A574',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(212, 165, 116, 0.1)'
                    e.currentTarget.style.transform = 'translateY(-1px)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  Essentiels uniquement
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Info Popup - Thème musical élégant */}
      {showInfo && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 60,
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            animation: 'fadeIn 0.3s ease-out'
          }}
          onClick={handleInfoClose}
        >
          <div
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%)',
              borderRadius: '12px',
              padding: '2rem',
              maxWidth: '500px',
              width: '100%',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              border: '2px solid #D4A574',
              animation: 'scaleIn 0.3s ease-out'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{
                fontSize: '1.75rem',
                fontWeight: '700',
                color: '#1a1340',
                marginBottom: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem'
              }}>
                <span style={{ fontSize: '2rem' }}>🎼</span>
                Notre politique de cookies
              </h2>
              <p style={{
                color: '#666',
                fontSize: '0.95rem',
                margin: 0
              }}>
                En harmonie avec la LPD suisse
              </p>
            </div>

            <div style={{
              color: '#333',
              fontSize: '0.95rem',
              lineHeight: '1.7',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #1a1340 0%, #2a2050 100%)',
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '1rem',
                border: '1px solid #D4A574'
              }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#D4A574',
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  🍪 Types de cookies utilisés
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  color: 'white'
                }}>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#D4A574' }}>♪</span>
                    <strong>Essentiels :</strong> Navigation et sécurité du site
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#D4A574' }}>♪</span>
                    <strong>Analytiques :</strong> Comprendre votre expérience
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#D4A574' }}>♪</span>
                    <strong>Fonctionnels :</strong> Préférences et personnalisation
                  </li>
                  <li style={{ paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#D4A574' }}>♪</span>
                    <strong>Marketing :</strong> Contenus adaptés à vos intérêts
                  </li>
                </ul>
              </div>

              <div style={{
                background: '#f8f8f8',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid #e0e0e0'
              }}>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6' }}>
                  Conformément à la <strong>Loi fédérale sur la protection des données (LPD)</strong>,
                  nous respectons votre vie privée et vous permettons de contrôler l'utilisation
                  de vos données. Vous pouvez modifier vos préférences à tout moment.
                </p>
              </div>
            </div>

            <button
              onClick={handleInfoClose}
              style={{
                width: '100%',
                padding: '0.875rem',
                background: 'linear-gradient(135deg, #D4A574 0%, #c49564 100%)',
                color: '#1a1340',
                fontSize: '1rem',
                fontWeight: '600',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 12px rgba(212, 165, 116, 0.3)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(212, 165, 116, 0.4)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(212, 165, 116, 0.3)'
              }}
            >
              J'ai compris, accepter tous les cookies
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          div[style*="flex-wrap: wrap"] {
            flex-direction: column;
            align-items: stretch;
          }

          button {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}

export default CookieBanner
