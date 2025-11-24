'use client';

import React from 'react';
import Image from 'next/image';

interface ConferenceSectionProps {
  conference: {
    speaker: string;
    title: string;
    time: string;
    conferenceTitle: string;
    description: string;
    bio: string;
    photo: string;
  };
}

export default function ConferenceSection({ conference }: ConferenceSectionProps) {
  return (
    <section style={{
      background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.1) 0%, rgba(212, 165, 116, 0.05) 100%)',
      border: '2px solid rgba(212, 165, 116, 0.3)',
      borderRadius: '24px',
      padding: 'clamp(32px, 5vw, 48px)',
      marginTop: '48px',
      marginBottom: '48px'
    }}>
      {/* Header avec icône */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '32px'
      }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--color-gold)">
          <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
          <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
        </svg>
        <div>
          <h3 style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
            fontWeight: '700',
            color: 'var(--color-gold)',
            margin: '0'
          }}>
            Conférence préparatoire
          </h3>
          <p style={{
            fontSize: '1rem',
            color: '#ffffff',
            opacity: '0.85',
            margin: '4px 0 0 0'
          }}>
            {conference.time} • Entrée libre
          </p>
        </div>
      </div>

      {/* Contenu principal */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
        gap: 'clamp(24px, 4vw, 40px)',
        alignItems: 'start'
      }}>
        {/* Photo + Info conférencière */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <div style={{
            width: 'clamp(100px, 25vw, 150px)',
            height: 'clamp(100px, 25vw, 150px)',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4px solid var(--color-gold)',
            boxShadow: '0 4px 20px rgba(212, 165, 116, 0.3)',
            marginBottom: '20px'
          }}>
            <Image
              src={conference.photo}
              alt={conference.speaker}
              width={150}
              height={150}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          <h4 style={{
            fontSize: '1.3rem',
            fontWeight: '700',
            color: '#ffffff',
            margin: '0 0 8px 0'
          }}>
            {conference.speaker}
          </h4>

          <p style={{
            fontSize: '0.95rem',
            color: 'var(--color-gold)',
            fontWeight: '600',
            margin: '0 0 16px 0'
          }}>
            {conference.title}
          </p>

          <p style={{
            fontSize: '0.95rem',
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.9)',
            margin: '0'
          }}>
            {conference.bio}
          </p>
        </div>

        {/* Détails conférence */}
        <div>
          <h4 style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
            fontWeight: '700',
            color: '#ffffff',
            marginBottom: '16px'
          }}>
            {conference.conferenceTitle}
          </h4>

          <p style={{
            fontSize: '1rem',
            lineHeight: '1.7',
            color: 'rgba(255, 255, 255, 0.9)',
            margin: '0'
          }}>
            {conference.description}
          </p>

          {/* CTA */}
          <div style={{
            marginTop: '24px',
            padding: '16px',
            background: 'rgba(212, 165, 116, 0.15)',
            borderRadius: '12px',
            borderLeft: '4px solid var(--color-gold)'
          }}>
            <p style={{
              fontSize: '0.95rem',
              color: '#ffffff',
              fontWeight: '600',
              margin: '0'
            }}>
              💡 Cette conférence vous permettra d'enrichir votre écoute et d'apprécier pleinement les subtilités du concert qui suivra.
            </p>
          </div>
        </div>
      </div>

      {/* Responsive mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 24px !important;
            margin-top: 32px !important;
            margin-bottom: 32px !important;
          }
          h3 {
            font-size: 1.2rem !important;
          }
          h4 {
            font-size: 1.1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
