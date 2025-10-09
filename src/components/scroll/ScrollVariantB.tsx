'use client';

import React, { useState, useEffect } from 'react';

/**
 * VARIANTE B - "Progress Bar Élégante"
 *
 * Barre de progression en haut (dégradé or) + Bouton avec progress circulaire
 * - Progress bar fixe en haut de page
 * - Bouton avec cercle de progression animé
 * - Design premium avec dégradés or
 * - Hover sophistiqué
 */
export default function ScrollVariantB() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset;

      const scrollableHeight = documentHeight - windowHeight;
      const progress = (scrollTop / scrollableHeight) * 100;

      setScrollProgress(progress);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', calculateScrollProgress);
    calculateScrollProgress(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', calculateScrollProgress);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <style jsx>{`
        /* Progress Bar en haut */
        .scroll-progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 4px;
          background: linear-gradient(90deg, #D4A574 0%, #FFD700 50%, #D4A574 100%);
          z-index: 9999;
          transition: width 0.1s ease;
          box-shadow: 0 0 10px rgba(212, 165, 116, 0.6);
        }

        /* Bouton avec progress circulaire */
        .scroll-to-top-b {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 64px;
          height: 64px;
          cursor: pointer;
          z-index: 1000;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.4s ease;
        }

        .scroll-to-top-b.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-to-top-b:hover {
          transform: translateY(-4px) scale(1.05);
        }

        /* Cercle de progression SVG */
        .progress-ring {
          transform: rotate(-90deg);
        }

        .progress-ring-bg {
          fill: none;
          stroke: rgba(212, 165, 116, 0.2);
          stroke-width: 3;
        }

        .progress-ring-circle {
          fill: none;
          stroke: url(#gradient-gold);
          stroke-width: 3;
          stroke-linecap: round;
          transition: stroke-dashoffset 0.1s ease;
        }

        /* Cercle intérieur du bouton */
        .button-inner {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #1a1340 0%, #2a2050 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(212, 165, 116, 0.4);
        }

        .scroll-to-top-b:hover .button-inner {
          background: linear-gradient(135deg, #2a2050 0%, #3a3060 100%);
          box-shadow: 0 8px 30px rgba(212, 165, 116, 0.6);
        }

        .button-inner svg {
          width: 24px;
          height: 24px;
          fill: #D4A574;
          transition: all 0.3s ease;
        }

        .scroll-to-top-b:hover .button-inner svg {
          fill: #FFD700;
          transform: translateY(-2px);
        }

        @media (max-width: 640px) {
          .scroll-progress-bar {
            height: 3px;
          }

          .scroll-to-top-b {
            width: 56px;
            height: 56px;
            bottom: 1.5rem;
            right: 1.5rem;
          }

          .button-inner {
            width: 42px;
            height: 42px;
          }

          .button-inner svg {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>

      {/* Progress Bar fixe en haut */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Bouton avec cercle de progression */}
      <div
        className={`scroll-to-top-b ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
        role="button"
        aria-label="Remonter en haut de page"
      >
        <svg className="progress-ring" width="64" height="64">
          <defs>
            <linearGradient id="gradient-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4A574" />
              <stop offset="50%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#D4A574" />
            </linearGradient>
          </defs>
          {/* Cercle de fond */}
          <circle
            className="progress-ring-bg"
            cx="32"
            cy="32"
            r="28"
          />
          {/* Cercle de progression */}
          <circle
            className="progress-ring-circle"
            cx="32"
            cy="32"
            r="28"
            strokeDasharray={`${2 * Math.PI * 28}`}
            strokeDashoffset={`${2 * Math.PI * 28 * (1 - scrollProgress / 100)}`}
          />
        </svg>

        <div className="button-inner">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
          </svg>
        </div>
      </div>
    </>
  );
}
