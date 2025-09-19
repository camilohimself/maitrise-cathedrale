'use client';

import React from 'react';
import Image from 'next/image';
import { maitriseContent } from '@/data/maitriseContent';

export default function DirectionSection() {
  const { direction } = maitriseContent;

  return (
    <div className="section-white">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '80px',
          alignItems: 'center'
        }}>
          {/* Photo du directeur */}
          <div style={{
            position: 'relative',
            height: '500px',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(26, 19, 64, 0.15)'
          }}>
            <Image
              src="/images/direction/jean-david-waeber-card.webp"
              alt="Jean-David Waeber, Directeur artistique et musical"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center 20%'
              }}
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />

            {/* Overlay subtil */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 0%, rgba(26, 19, 64, 0.05) 100%)'
            }} />
          </div>

          {/* Content */}
          <div>
            <h2 style={{
              fontSize: '48px',
              fontWeight: '300',
              marginBottom: '16px',
              color: '#1a1340'
            }}>
              Direction musicale
            </h2>
            
            <h3 style={{
              fontSize: '32px',
              fontWeight: '700',
              color: 'var(--color-gold)',
              marginBottom: '8px'
            }}>
              {direction.nom}
            </h3>
            
            <p style={{
              fontSize: '18px',
              color: 'var(--color-navy)',
              opacity: '0.7',
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
                color: 'var(--color-navy)',
                marginBottom: '16px'
              }}>
                Formation
              </h4>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: 'var(--color-navy)',
              opacity: '0.7'
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
                color: 'var(--color-navy)',
                marginBottom: '16px'
              }}>
                Expérience
              </h4>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: 'var(--color-navy)',
              opacity: '0.7'
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
                color: 'var(--color-navy)',
                marginBottom: '16px'
              }}>
                Spécialités
              </h4>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {direction.bio.specialites.map((spec, idx) => (
                  <span key={idx} className="tag-gold">
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