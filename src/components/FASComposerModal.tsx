'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import fasComposers from '@/data/fasComposers.json';

interface Composer {
  id: string;
  name: string;
  period: string;
  era: string;
  nationality: string;
  title: string;
  description: string;
  biography: string;
  works: string[];
  style: string;
  featured_work: string;
  quote: string;
  color: string;
  image: string;
}

interface FASComposerModalProps {
  composerId: string | null;
  isOpen: boolean;
  onClose: () => void;
}

const FASComposerModal = ({ composerId, isOpen, onClose }: FASComposerModalProps) => {
  const [composer, setComposer] = useState<Composer | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (composerId && isOpen) {
      const found = fasComposers.composers.find(c => c.id === composerId);
      setComposer(found || null);
      setIsVisible(true);
    } else {
      setIsVisible(false);
      setTimeout(() => setComposer(null), 300);
    }
  }, [composerId, isOpen]);

  if (!isOpen || !composer) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease-out'
      }}
      onClick={handleBackdropClick}
    >
      <div
        style={{
          background: 'linear-gradient(135deg, #1a1340 0%, #2D1B69 100%)',
          borderRadius: '24px',
          maxWidth: '800px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'hidden',
          position: 'relative',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.6)',
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        {/* Header avec portrait */}
        <div style={{
          background: `linear-gradient(135deg, ${composer.color}20 0%, ${composer.color}10 100%)`,
          padding: '40px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative'
        }}>
          {/* Bouton fermer */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              color: 'white'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: '30px',
            alignItems: 'start'
          }}>
            {/* Portrait */}
            <div style={{
              position: 'relative',
              width: '120px',
              height: '120px',
              borderRadius: '20px',
              overflow: 'hidden',
              border: `3px solid ${composer.color}`,
              boxShadow: `0 15px 40px ${composer.color}40`
            }}>
              <Image
                src={composer.image}
                alt={composer.name}
                width={120}
                height={120}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              
              {/* Badge époque */}
              <div style={{
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: composer.color,
                color: 'white',
                padding: '4px 12px',
                borderRadius: '12px',
                fontSize: '0.7rem',
                fontWeight: '700',
                whiteSpace: 'nowrap'
              }}>
                {composer.era}
              </div>
            </div>

            {/* Informations principales */}
            <div>
              <div style={{
                background: `${composer.color}20`,
                color: composer.color,
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                display: 'inline-block',
                marginBottom: '12px',
                letterSpacing: '0.05em'
              }}>
                {composer.nationality} • {composer.period}
              </div>

              <h2 style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: '700',
                color: 'white',
                marginBottom: '8px',
                lineHeight: '1.2',
                fontFamily: 'var(--font-spectral), Georgia, serif'
              }}>
                {composer.name}
              </h2>

              <p style={{
                fontSize: '1.1rem',
                color: composer.color,
                fontWeight: '600',
                marginBottom: '16px',
                fontStyle: 'italic'
              }}>
                {composer.title}
              </p>

              <p style={{
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.5'
              }}>
                {composer.description}
              </p>
            </div>
          </div>
        </div>

        {/* Contenu détaillé */}
        <div style={{
          padding: '40px',
          overflowY: 'auto',
          maxHeight: '400px'
        }}>
          {/* Citation en exergue */}
          <div style={{
            background: `linear-gradient(45deg, ${composer.color}15, ${composer.color}25)`,
            border: `2px solid ${composer.color}30`,
            borderRadius: '16px',
            padding: '24px',
            marginBottom: '32px',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '12px',
              left: '20px',
              fontSize: '2rem',
              color: composer.color,
              opacity: 0.5,
              fontFamily: 'Georgia, serif'
            }}>
              "
            </div>
            <p style={{
              fontSize: '1.1rem',
              fontStyle: 'italic',
              color: 'white',
              textAlign: 'center',
              fontWeight: '500',
              lineHeight: '1.6',
              marginTop: '16px'
            }}>
              {composer.quote}
            </p>
          </div>

          {/* Biographie */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '600',
              color: composer.color,
              marginBottom: '16px',
              fontFamily: 'var(--font-spectral), Georgia, serif'
            }}>
              Biographie
            </h3>
            <p style={{
              fontSize: '1rem',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.7'
            }}>
              {composer.biography}
            </p>
          </div>

          {/* Style musical */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '600',
              color: composer.color,
              marginBottom: '16px',
              fontFamily: 'var(--font-spectral), Georgia, serif'
            }}>
              Style Musical
            </h3>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <p style={{
                fontSize: '1rem',
                color: 'white',
                fontWeight: '600',
                marginBottom: '8px'
              }}>
                {composer.style}
              </p>
              <p style={{
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.7)'
              }}>
                Œuvre phare : {composer.featured_work}
              </p>
            </div>
          </div>

          {/* Œuvres principales */}
          <div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '600',
              color: composer.color,
              marginBottom: '16px',
              fontFamily: 'var(--font-spectral), Georgia, serif'
            }}>
              Œuvres Principales
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              {composer.works.map((work, index) => (
                <div
                  key={index}
                  style={{
                    background: `${composer.color}20`,
                    color: composer.color,
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    border: `1px solid ${composer.color}40`
                  }}
                >
                  {work}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FASComposerModal;