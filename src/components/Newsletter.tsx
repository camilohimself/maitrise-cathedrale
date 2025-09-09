'use client';

import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implémenter la logique d'inscription
    console.log('Email inscrit:', email);
    setEmail('');
  };

  return (
    <section 
      className="newsletter-section"
      style={{
        backgroundColor: 'var(--color-cream)',
        padding: 'var(--spacing-3xl) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 var(--spacing-lg)',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-xl)',
        flexWrap: 'wrap',
      }}>
        {/* Barre dorée latérale */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          width: '4px',
          height: '120px',
          backgroundColor: 'var(--color-gold)',
        }} />

        {/* Contenu texte */}
        <div style={{
          flex: '1 1 500px',
          paddingLeft: 'var(--spacing-lg)',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-spectral)',
            fontSize: 'var(--text-h2)',
            fontWeight: 'var(--font-bold)',
            color: 'var(--color-navy)',
            marginBottom: 'var(--spacing-sm)',
          }}>
            Recevez nos actualités
          </h2>
          <p style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-regular)',
            color: 'var(--color-navy)',
            opacity: 0.8,
          }}>
            et ne manquez aucun concert
          </p>
        </div>

        {/* Formulaire */}
        <form 
          onSubmit={handleSubmit}
          style={{
            flex: '1 1 400px',
            display: 'flex',
            gap: 'var(--spacing-sm)',
            alignItems: 'center',
          }}
        >
          <div style={{
            flex: 1,
            position: 'relative',
          }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Adresse email"
              required
              style={{
                width: '100%',
                padding: '14px 20px',
                backgroundColor: 'var(--color-white)',
                border: '1px solid rgba(26, 19, 64, 0.1)',
                borderRadius: 'var(--radius-sm)',
                fontFamily: 'var(--font-outfit)',
                fontSize: 'var(--text-base)',
                color: 'var(--color-navy)',
                transition: 'all var(--transition-base)',
                outline: 'none',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-gold)';
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(212, 165, 116, 0.1)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(26, 19, 64, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: '14px 36px',
              backgroundColor: 'var(--color-gold)',
              color: 'var(--color-white)',
              border: 'none',
              borderRadius: 'var(--radius-sm)',
              fontFamily: 'var(--font-outfit)',
              fontWeight: 'var(--font-semibold)',
              fontSize: 'var(--text-base)',
              cursor: 'pointer',
              transition: 'all var(--transition-base)',
              transform: isHovered ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
              boxShadow: isHovered ? 'var(--shadow-gold)' : 'none',
              filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            S&apos;inscrire
          </button>
        </form>
      </div>

      {/* Motif décoratif optionnel */}
      <div style={{
        position: 'absolute',
        right: '-100px',
        bottom: '-100px',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        backgroundColor: 'var(--color-gold)',
        opacity: 0.05,
      }} />
    </section>
  );
};

export default Newsletter;