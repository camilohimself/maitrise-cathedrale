'use client';

import React from 'react';
import { maitriseContent } from '@/data/maitriseContent';

export default function EnsembleSection() {
  const { evi } = maitriseContent;

  return (
    <div className="section-cream" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(40px, 8vw, 80px)',
          alignItems: 'center'
        }}>
          {/* Visual Element */}
          <div className="card-glass" style={{
            textAlign: 'center',
            position: 'relative',
            padding: '48px'
          }}>
            <div style={{
              fontSize: '120px',
              marginBottom: '24px',
              color: 'var(--color-gold)'
            }}>
              ♪
            </div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '700',
              marginBottom: '16px',
              color: '#1a1340'
            }}>
              Intégrale des Cantates de Bach
            </h3>
            <p style={{
              fontSize: '16px',
              opacity: '0.8',
              lineHeight: '1.6',
              color: '#1a1340'
            }}>
              Un projet artistique unique au monde : l'interprétation complète
              des cantates de Jean-Sébastien Bach dans la liturgie catholique.
            </p>

            {/* Badge projet */}
            <div className="tag-gold" style={{
              position: 'absolute',
              top: '20px',
              right: '20px'
            }}>
              Projet unique
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="badge-gold" style={{ marginBottom: '24px' }}>
              Ensemble Vocal & Instrumental
            </div>

            <h2 style={{
              fontSize: '48px',
              fontWeight: '300',
              marginBottom: '24px',
              color: '#1a1340'
            }}>
              {evi.titre}
            </h2>

            <p style={{
              fontSize: '20px',
              lineHeight: '1.8',
              marginBottom: '32px',
              opacity: '0.9',
              color: '#1a1340'
            }}>
              {evi.description}
            </p>

            {/* Projet highlight */}
            <div className="highlight-box" style={{ marginBottom: '40px' }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '700',
                marginBottom: '8px',
                color: 'var(--color-gold)'
              }}>
                {evi.projet}
              </h3>
              <p style={{ 
                opacity: '0.9', 
                color: '#1a1340',
                lineHeight: '1.6'
              }}>
                Un défi artistique et spirituel monumental, entrepris avec passion et rigueur 
                pour faire découvrir l'intégralité de l'œuvre sacrée du Cantor de Leipzig.
              </p>
            </div>

            <h3 style={{
              fontSize: '20px',
              fontWeight: '700',
              marginBottom: '24px',
              color: '#1a1340'
            }}>
              Statistiques du projet
            </h3>

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px'
            }}>
              {Object.entries(evi.stats).map(([key, value]) => (
                <div key={key} className="stat-card">
                  <div style={{
                    fontSize: '32px',
                    fontWeight: '700',
                    marginBottom: '8px',
                    color: 'var(--color-gold)'
                  }}>
                    {value}
                  </div>
                  <div style={{
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#1a1340',
                    opacity: '0.7',
                    fontWeight: '600'
                  }}>
                    {key === 'cantates' ? 'Cantates jouées' : 
                     key === 'musiciens' ? 'Musiciens' : 
                     'Concerts/an'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}