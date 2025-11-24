'use client';

import React from 'react';
import Image from 'next/image';
import { maitriseContent } from '@/data/maitriseContent';

export default function EnsembleSection() {
  const { evi } = maitriseContent;

  return (
    <div className="section-cream" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: 'clamp(40px, 8vw, 80px)',
          alignItems: 'center'
        }}>
          {/* Visual Element with Photo */}
          <div className="card-glass photo-card" style={{
            position: 'relative',
            padding: '0',
            overflow: 'hidden',
            borderRadius: '24px',
            cursor: 'pointer'
          }}
          onClick={() => window.open('/images/artistes/ensemble-vocal-instrumental/evi-1-hero.webp', '_blank')}
          >
            {/* Photo EVI */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '400px',
              overflow: 'hidden'
            }}>
              <Image
                src="/images/artistes/ensemble-vocal-instrumental/evi-1-hero.webp"
                alt="Ensemble Vocal et Instrumental de la Maîtrise"
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Overlay gradient pour texte lisible - DESKTOP ONLY */}
              <div className="overlay-desktop" style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(26,19,64,0.9) 0%, rgba(26,19,64,0.3) 50%, transparent 100%)'
              }} />
            </div>

            {/* Texte overlay - DESKTOP ONLY */}
            <div className="text-overlay-desktop" style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '32px',
              color: 'white'
            }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                marginBottom: '12px',
                color: 'white',
                textShadow: '0 2px 8px rgba(0,0,0,0.3)'
              }}>
                Intégrale des Cantates de Bach
              </h3>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.6',
                color: 'rgba(255,255,255,0.95)',
                textShadow: '0 1px 4px rgba(0,0,0,0.3)'
              }}>
                Un projet artistique unique au monde : l'interprétation complète
                des cantates de Jean-Sébastien Bach dans la liturgie catholique.
              </p>
            </div>

            {/* Badge projet - DESKTOP ONLY */}
            <div className="tag-gold badge-desktop" style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              zIndex: 10
            }}>
              Projet unique
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="badge-gold desktop-only" style={{ marginBottom: '24px' }}>
              Ensemble Vocal et Instrumental
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

            {/* Liturgie box */}
            <div style={{
              background: 'rgba(227, 50, 65, 0.08)',
              border: '1px solid rgba(227, 50, 65, 0.2)',
              borderRadius: '16px',
              padding: '24px',
              marginBottom: '40px',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '700',
                marginBottom: '8px',
                color: '#E33241'
              }}>
                Liturgie
              </h3>
              <p style={{
                opacity: '0.9',
                color: '#1a1340',
                marginBottom: '12px'
              }}>
                L'Ensemble Vocal et Instrumental chante la messe de dix heures le <strong>troisième dimanche du mois</strong>.
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                color: 'var(--color-gold)',
                fontWeight: '600'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--color-gold)">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Cathédrale de Sion • 10h00
              </div>
            </div>

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

          </div>
        </div>
      </div>

      {/* RESPONSIVE MOBILE */}
      <style jsx>{`
        @media (max-width: 768px) {
          /* Masquer badge jaune sur mobile */
          .desktop-only {
            display: none !important;
          }

          /* Photo card - Pleine hauteur mobile, cliquable */
          .photo-card {
            height: 300px !important;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            transition: transform 0.2s ease;
          }

          .photo-card:active {
            transform: scale(0.98);
          }

          .photo-card > div {
            height: 100% !important;
          }

          /* Masquer overlays texte en mobile */
          .overlay-desktop,
          .text-overlay-desktop,
          .badge-desktop {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}