'use client';

import React from 'react';
import { maitriseContent } from '@/data/maitriseContent';

export default function MaitriseHeroSection() {
  const { histoire } = maitriseContent;

  return (
    <div className="hero-section" style={{ 
      background: 'linear-gradient(135deg, #1a1340 0%, #2a2350 100%)', 
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '140px 20px 100px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="badge-gold" style={{
            display: 'inline-block',
            background: 'rgba(212, 165, 116, 0.15)',
            border: '1px solid rgba(212, 165, 116, 0.3)',
            padding: '8px 24px',
            borderRadius: '30px',
            fontSize: '14px',
            fontWeight: '700',
            color: 'var(--color-gold)',
            marginBottom: '24px',
            backdropFilter: 'blur(10px)'
          }}>
            {histoire.sousTitre}
          </div>
          
          <h1 style={{
            fontSize: 'clamp(42px, 6vw, 72px)',
            fontWeight: '300',
            marginBottom: '24px',
            letterSpacing: '-0.02em',
            lineHeight: '1.1',
            color: '#ffffff'
          }}>
            {histoire.titre}
          </h1>
          
          <p style={{
            fontSize: '20px',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto 48px',
            opacity: '0.9',
            color: '#ffffff'
          }}>
            {histoire.description}
          </p>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))',
          gap: '24px',
          marginBottom: '80px'
        }}>
          {Object.entries(histoire.stats).map(([key, value]) => (
            <div key={key} className="stat-card" style={{
              background: 'rgba(212, 165, 116, 0.08)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(212, 165, 116, 0.2)',
              borderRadius: '16px',
              padding: '32px',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                fontSize: '36px',
                fontWeight: '700',
                color: 'var(--color-gold)',
                marginBottom: '8px'
              }}>
                {value}
              </div>
              <div style={{
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                opacity: '0.7',
                color: '#ffffff'
              }}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* MEDIA QUERIES RESPONSIVE */}
      <style jsx>{`
        @media (max-width: 768px) {
          .hero-section .container {
            padding: 100px 16px 60px !important;
          }

          .hero-section h1 {
            font-size: clamp(32px, 8vw, 48px) !important;
          }

          .hero-section p {
            font-size: clamp(16px, 4vw, 18px) !important;
            margin-bottom: 32px !important;
          }

          .hero-section > div > div:last-child {
            margin-bottom: 40px !important;
          }
        }

        @media (max-width: 640px) {
          .hero-section .container {
            padding: 80px 12px 40px !important;
          }

          .badge-gold {
            font-size: 12px !important;
            padding: 6px 16px !important;
            margin-bottom: 16px !important;
          }

          .stat-card {
            padding: 20px !important;
          }

          .stat-card > div:first-child {
            font-size: 28px !important;
          }

          .stat-card > div:last-child {
            font-size: 12px !important;
          }
        }

        @media (max-width: 500px) {
          .hero-section > div > div:nth-child(2) {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </div>
  );
}