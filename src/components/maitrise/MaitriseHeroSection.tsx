'use client';

import React from 'react';
import { maitriseContent } from '@/data/maitriseContent';

export default function MaitriseHeroSection() {
  const { histoire, conseilFondation } = maitriseContent;

  return (
    <div className="hero-section" style={{ 
      background: 'linear-gradient(135deg, #1a1340 0%, #2a2350 100%)', 
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '80px 20px 100px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="badge-gold" style={{
            display: 'inline-block',
            background: 'rgba(212, 165, 116, 0.15)',
            border: '1px solid rgba(212, 165, 116, 0.3)',
            padding: '8px 24px',
            borderRadius: '30px',
            fontSize: '14px',
            fontWeight: '700',
            color: '#D4A574',
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
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
                color: '#D4A574',
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

        {/* Conseil de Fondation */}
        <div style={{
          background: 'rgba(212, 165, 116, 0.05)',
          borderRadius: '24px',
          padding: '48px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(212, 165, 116, 0.15)'
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '300',
            marginBottom: '32px',
            textAlign: 'center',
            color: '#D4A574'
          }}>
            Conseil de Fondation
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '16px'
          }}>
            {conseilFondation.map((membre, idx) => (
              <div key={idx} style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: '8px',
                background: idx === 0 ? 'rgba(212, 165, 116, 0.1)' : 'transparent',
                borderLeft: idx === 0 ? '3px solid #D4A574' : 'none'
              }}>
                <span style={{ color: '#D2AB5F', fontSize: '14px' }}>{membre.poste}</span>
                <span style={{ color: '#ffffff', fontSize: '14px', fontWeight: '500' }}>{membre.nom}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}