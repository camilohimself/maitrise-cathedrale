'use client';

import React from 'react';
import { maitriseContent } from '@/data/maitriseContent';

export default function OrganistesSection() {
  const { organistes } = maitriseContent;

  return (
    <div style={{
      background: 'linear-gradient(135deg, #FAFAF9 0%, #F0F0F0 100%)',
      position: 'relative',
      padding: '100px 20px',
      color: '#1a1340'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '48px',
          fontWeight: '300',
          textAlign: 'center',
          marginBottom: '64px',
          color: '#1a1340'
        }}>
          Les Organistes
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
          gap: '48px'
        }}>
          {/* Organiste Titulaire */}
          <div className="card" style={{
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(212, 165, 116, 0.2)',
            borderRadius: '24px',
            padding: '48px',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}>
            <div style={{
              width: '100px',
              height: '100px',
              background: 'linear-gradient(45deg, var(--color-gold), var(--color-gold))',
              borderRadius: '50%',
              margin: '0 auto 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="50" height="50" viewBox="0 0 24 24" fill="white">
                <path d="M12 3v10.55A4 4 0 1014 17V7h4V3h-6z"/>
              </svg>
            </div>

            <h3 style={{
              fontSize: '24px',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '8px',
              color: 'var(--color-gold)'
            }}>
              {organistes.titulaire.nom}
            </h3>

            <p style={{
              fontSize: '16px',
              textAlign: 'center',
              marginBottom: '16px',
              opacity: '0.9',
              fontWeight: '600'
            }}>
              {organistes.titulaire.titre}
            </p>

            <p style={{
              fontSize: '15px',
              lineHeight: '1.8',
              textAlign: 'center',
              opacity: '0.8'
            }}>
              {organistes.titulaire.bio}
            </p>
          </div>

          {/* Organiste Adjointe */}
          <div className="card" style={{
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(212, 165, 116, 0.2)',
            borderRadius: '24px',
            padding: '48px',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}>
            <div style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              margin: '0 auto 24px',
              overflow: 'hidden',
              border: '4px solid var(--color-gold)',
              boxShadow: '0 4px 20px rgba(212, 165, 116, 0.3)'
            }}>
              <img
                src="/images/organistes/catherine-gremaud-card.webp"
                alt="Catherine Gremaud-Babel, Organiste adjointe"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            <h3 style={{
              fontSize: '24px',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '8px',
              color: 'var(--color-gold)'
            }}>
              {organistes.adjointe.nom}
            </h3>

            <p style={{
              fontSize: '16px',
              textAlign: 'center',
              marginBottom: '16px',
              opacity: '0.9',
              fontWeight: '600'
            }}>
              {organistes.adjointe.titre}
            </p>

            <p style={{
              fontSize: '15px',
              lineHeight: '1.8',
              textAlign: 'center',
              opacity: '0.8'
            }}>
              {organistes.adjointe.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}