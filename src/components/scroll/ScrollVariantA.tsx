'use client';

import React, { useState, useEffect } from 'react';

/**
 * VARIANTE A - "Cathédrale Minimaliste"
 *
 * Bouton "Remonter" sobre et élégant qui apparaît après 300px de scroll
 * - Fade in/out smooth
 * - Design Navy/Or conforme charte
 * - Animation smooth scroll
 * - Hover élégant
 */
export default function ScrollVariantA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
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
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeOutDown {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(20px);
          }
        }

        .scroll-to-top-a {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #1a1340 0%, #2a2050 100%);
          border: 2px solid #D4A574;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 1000;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(212, 165, 116, 0.3);
          animation: fadeInUp 0.4s ease;
        }

        .scroll-to-top-a.fade-out {
          animation: fadeOutDown 0.4s ease;
        }

        .scroll-to-top-a:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(212, 165, 116, 0.5);
          background: linear-gradient(135deg, #2a2050 0%, #3a3060 100%);
          border-color: #FFD700;
        }

        .scroll-to-top-a svg {
          width: 24px;
          height: 24px;
          fill: #D4A574;
          transition: all 0.3s ease;
        }

        .scroll-to-top-a:hover svg {
          fill: #FFD700;
          transform: translateY(-2px);
        }

        @media (max-width: 640px) {
          .scroll-to-top-a {
            width: 48px;
            height: 48px;
            bottom: 1.5rem;
            right: 1.5rem;
          }

          .scroll-to-top-a svg {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top-a"
          aria-label="Remonter en haut de page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
          </svg>
        </button>
      )}
    </>
  );
}
