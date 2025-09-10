'use client';

import React from 'react';
import { maitriseContent } from '@/data/maitriseContent';

export default function DirectionSection() {
  const { direction } = maitriseContent;

  return (
    <div className="section-gradient" style={{
      background: 'linear-gradient(180deg, #ffffff 0%, #f8f8f8 100%)',
      padding: '100px 20px'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '80px',
          alignItems: 'center'
        }}>
          {/* Photo placeholder */}
          <div style={{
            position: 'relative',
            height: '500px',
            background: 'linear-gradient(135deg, #D4A574 0%, #E6C068 100%)',
            borderRadius: '24px',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              inset: '0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '120px',
              color: 'rgba(255, 255, 255, 0.3)'
            }}>
              <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 style={{
              fontSize: '48px',
              fontWeight: '300',
              marginBottom: '16px',
              color: '#040A23'
            }}>
              Direction Musicale
            </h2>
            
            <h3 style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#D4A574',
              marginBottom: '8px'
            }}>
              {direction.nom}
            </h3>
            
            <p style={{
              fontSize: '18px',
              color: '#666',
              marginBottom: '32px'
            }}>
              {direction.titre}
            </p>

            <div style={{ marginBottom: '32px' }}>
              <h4 style={{
                fontSize: '16px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#040A23',
                marginBottom: '16px'
              }}>
                Formation
              </h4>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#666'
              }}>
                {direction.bio.formation}
              </p>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h4 style={{
                fontSize: '16px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#040A23',
                marginBottom: '16px'
              }}>
                Expérience
              </h4>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#666'
              }}>
                {direction.bio.experience}
              </p>
            </div>

            <div>
              <h4 style={{
                fontSize: '16px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#040A23',
                marginBottom: '16px'
              }}>
                Spécialités
              </h4>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {direction.bio.specialites.map((spec, idx) => (
                  <span key={idx} style={{
                    background: 'linear-gradient(45deg, #D4A574, #E6C068)',
                    color: '#ffffff',
                    padding: '8px 20px',
                    borderRadius: '24px',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}