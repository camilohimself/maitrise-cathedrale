'use client';

import React, { useState, useEffect } from 'react';

/**
 * ScrollToTop - Variante "Souffle Ascendant"
 *
 * Bouton de retour en haut de page épuré
 * - Animation de respiration douce (comme une bougie)
 * - Simple chevron doré sans pourcentage
 * - Design adapté à l'univers musique sacrée
 *
 * Design adapté à l'univers Maîtrise de la Cathédrale de Sion
 */
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Active le smooth scroll global
    document.documentElement.style.scrollBehavior = 'smooth';

    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(212, 165, 116, 0.3);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 35px rgba(212, 165, 116, 0.5);
          }
        }

        @keyframes floatUp {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .scroll-to-top {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 1000;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .scroll-to-top.visible {
          opacity: 1;
          pointer-events: auto;
          animation: fadeIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .scroll-button {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(145deg, #1a1340 0%, #251a4a 100%);
          border: 2px solid rgba(212, 165, 116, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          animation: breathe 4s ease-in-out infinite;
          transition: all 0.3s ease;
        }

        .scroll-button:hover {
          border-color: #D4A574;
          box-shadow: 0 0 40px rgba(212, 165, 116, 0.6);
          transform: translateY(-4px) scale(1.08);
        }

        .scroll-button:active {
          transform: translateY(-2px) scale(1.04);
        }

        .scroll-button svg {
          fill: #D4A574;
          width: 22px;
          height: 22px;
          animation: floatUp 2.5s ease-in-out infinite;
          filter: drop-shadow(0 2px 4px rgba(212, 165, 116, 0.4));
          transition: all 0.3s ease;
        }

        .scroll-button:hover svg {
          fill: #FFD700;
          filter: drop-shadow(0 4px 8px rgba(255, 215, 0, 0.6));
        }

        /* Responsive mobile */
        @media (max-width: 640px) {
          .scroll-to-top {
            bottom: 5rem;
            right: 1.5rem;
          }

          .scroll-button {
            width: 50px;
            height: 50px;
          }

          .scroll-button svg {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>

      <div
        className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
        role="button"
        aria-label="Remonter en haut de page"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            scrollToTop();
          }
        }}
      >
        <div className="scroll-button">
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
