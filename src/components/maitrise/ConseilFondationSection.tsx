'use client';

import React from 'react';
import { organigrammeContent } from '@/data/organigrammeContent';

export default function ConseilFondationSection() {
  const { direction, representants, organismes } = organigrammeContent;

  return (
    <div className="section-cream" style={{ position: 'relative' }}>
      <div className="container">

        {/* En-tête de section */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="badge-gold" style={{
            fontSize: '16px',
            padding: '12px 24px',
            marginBottom: '24px'
          }}>
            GOUVERNANCE
          </div>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '300',
            marginBottom: '16px',
            color: 'var(--color-navy)'
          }}>
            Conseil de Fondation
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'var(--color-navy)',
            opacity: '0.7',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            L'organe de gouvernance de la Maîtrise Cathédrale de Sion,
            composé de représentants des institutions partenaires
          </p>
        </div>

        {/* Direction */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '32px'
          }}>
            <h3 style={{
              color: 'var(--color-gold)',
              fontSize: '22px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}>
              Direction
            </h3>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap'
          }}>
            {direction.map((membre, idx) => (
              <div key={idx} style={{
                background: membre.type === 'president' ? 'var(--color-gold)' : 'var(--color-navy)',
                color: 'white',
                padding: '24px 32px',
                borderRadius: '16px',
                textAlign: 'center',
                minWidth: '240px',
                boxShadow: 'var(--shadow-lg)',
                position: 'relative',
                transform: membre.type === 'president' ? 'scale(1.05)' : 'scale(1)',
                border: membre.type === 'president' ? '3px solid var(--color-navy)' : 'none'
              }}>
                {/* Badge pour le président */}
                {membre.type === 'president' && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--color-navy)',
                    color: 'white',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '700'
                  }}>
                    ★ PRÉSIDENT
                  </div>
                )}

                <div style={{
                  fontWeight: '700',
                  fontSize: '18px',
                  lineHeight: '1.3',
                  marginBottom: '8px'
                }}>
                  {membre.nom}
                </div>
                <div style={{
                  fontSize: '14px',
                  opacity: '0.9',
                  fontWeight: '500'
                }}>
                  {membre.poste}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ligne de séparation décorative */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '40px 0',
          gap: '20px'
        }}>
          <div style={{
            height: '2px',
            background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)',
            flex: 1,
            maxWidth: '200px'
          }}></div>
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: 'var(--color-gold)'
          }}></div>
          <div style={{
            height: '2px',
            background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)',
            flex: 1,
            maxWidth: '200px'
          }}></div>
        </div>

        {/* Représentants et Organismes */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '60px'
        }}>

          {/* Représentants Institutionnels */}
          <div>
            <h4 style={{
              textAlign: 'center',
              color: 'var(--color-navy)',
              fontSize: '20px',
              fontWeight: '600',
              marginBottom: '32px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Représentants Institutionnels
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {representants.map((membre, idx) => (
                <div key={idx} style={{
                  background: 'white',
                  border: '2px solid var(--color-navy)',
                  borderRadius: '12px',
                  padding: '20px',
                  transition: 'all 0.3s ease',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px'
                  }}>
                    {/* Avatar avec initiales */}
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: 'var(--color-navy)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '16px',
                      fontWeight: '700',
                      flexShrink: 0
                    }}>
                      {membre.initiales}
                    </div>

                    {/* Infos */}
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontWeight: '600',
                        color: 'var(--color-navy)',
                        fontSize: '16px',
                        lineHeight: '1.3',
                        marginBottom: '4px'
                      }}>
                        {membre.nom}
                      </div>
                      <div style={{
                        fontSize: '14px',
                        color: 'var(--color-navy)',
                        opacity: '0.7',
                        lineHeight: '1.4'
                      }}>
                        {membre.poste}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Représentants Organismes */}
          <div>
            <h4 style={{
              textAlign: 'center',
              color: 'var(--color-gold)',
              fontSize: '20px',
              fontWeight: '600',
              marginBottom: '32px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Représentants Organismes
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {organismes.map((membre, idx) => (
                <div key={idx} style={{
                  background: 'rgba(212, 165, 116, 0.08)',
                  border: '2px solid var(--color-gold)',
                  borderRadius: '12px',
                  padding: '20px',
                  transition: 'all 0.3s ease',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px'
                  }}>
                    {/* Avatar avec initiales */}
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: 'var(--color-gold)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '16px',
                      fontWeight: '700',
                      flexShrink: 0
                    }}>
                      {membre.initiales}
                    </div>

                    {/* Infos */}
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontWeight: '600',
                        color: 'var(--color-navy)',
                        fontSize: '16px',
                        lineHeight: '1.3',
                        marginBottom: '4px'
                      }}>
                        {membre.nom}
                      </div>
                      <div style={{
                        fontSize: '14px',
                        color: 'var(--color-gold)',
                        fontWeight: '600',
                        lineHeight: '1.4'
                      }}>
                        {membre.poste}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Note informative */}
        <div className="highlight-box" style={{
          marginTop: '60px',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '16px',
            color: 'var(--color-navy)',
            opacity: '0.8',
            lineHeight: '1.6',
            margin: 0
          }}>
            Le Conseil de Fondation se réunit régulièrement pour définir les orientations artistiques
            et assurer la pérennité de la Maîtrise Cathédrale de Sion.
          </p>
        </div>

      </div>
    </div>
  );
}