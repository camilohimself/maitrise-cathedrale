'use client';

import React, { useState, useEffect } from 'react';

/**
 * VARIANTE C - "Expérience Immersive"
 *
 * Smooth scroll global + Parallax subtil + Bouton "vitrail"
 * - Smooth scroll comportement sur tout le site
 * - Bouton avec effet vitrail cathédrale (dégradés multiples)
 * - Animation sophistiquée avec glow
 * - Micro-interactions premium
 */
export default function ScrollVariantC() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Active le smooth scroll global
    document.documentElement.style.scrollBehavior = 'smooth';

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
    calculateScrollProgress();

    return () => {
      window.removeEventListener('scroll', calculateScrollProgress);
      // Reset au démontage
      document.documentElement.style.scrollBehavior = 'auto';
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
        @keyframes glowPulse {
          0%, 100% {
            box-shadow:
              0 0 20px rgba(212, 165, 116, 0.4),
              0 0 40px rgba(212, 165, 116, 0.2),
              inset 0 0 20px rgba(212, 165, 116, 0.1);
          }
          50% {
            box-shadow:
              0 0 30px rgba(212, 165, 116, 0.6),
              0 0 60px rgba(212, 165, 116, 0.3),
              inset 0 0 30px rgba(212, 165, 116, 0.2);
          }
        }

        @keyframes vitrailShine {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes floatIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .scroll-to-top-c {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 70px;
          height: 70px;
          cursor: pointer;
          z-index: 1000;
          opacity: 0;
          transform: translateY(30px) scale(0.9);
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .scroll-to-top-c.visible {
          animation: floatIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .scroll-to-top-c:hover {
          transform: translateY(-8px) scale(1.08);
        }

        /* Effet vitrail avec dégradés multiples */
        .vitrail-button {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background:
            linear-gradient(135deg,
              #1a1340 0%,
              #2a2050 25%,
              #1a1340 50%,
              #2a2050 75%,
              #1a1340 100%
            );
          background-size: 200% 200%;
          border: 3px solid transparent;
          background-clip: padding-box;
          animation: glowPulse 3s ease-in-out infinite;
          overflow: hidden;
        }

        .scroll-to-top-c:hover .vitrail-button {
          animation: glowPulse 1.5s ease-in-out infinite, vitrailShine 2s ease infinite;
        }

        /* Bordure vitrail animée */
        .vitrail-button::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          padding: 3px;
          background: linear-gradient(
            45deg,
            #D4A574,
            #FFD700,
            #D4A574,
            #B8935F,
            #FFD700,
            #D4A574
          );
          background-size: 300% 300%;
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: vitrailShine 4s ease infinite;
          z-index: -1;
        }

        /* Éclat intérieur */
        .vitrail-button::after {
          content: '';
          position: absolute;
          top: 10%;
          left: 10%;
          right: 10%;
          bottom: 10%;
          background: radial-gradient(
            circle at 30% 30%,
            rgba(255, 215, 0, 0.3) 0%,
            rgba(212, 165, 116, 0.2) 30%,
            transparent 70%
          );
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .scroll-to-top-c:hover .vitrail-button::after {
          opacity: 1;
        }

        /* Contenu du bouton */
        .button-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        .button-content svg {
          width: 28px;
          height: 28px;
          fill: #D4A574;
          transition: all 0.4s ease;
          filter: drop-shadow(0 2px 4px rgba(212, 165, 116, 0.4));
        }

        .scroll-to-top-c:hover .button-content svg {
          fill: #FFD700;
          transform: translateY(-3px);
          filter: drop-shadow(0 4px 8px rgba(255, 215, 0, 0.6));
        }

        /* Pourcentage de progression */
        .progress-text {
          position: absolute;
          bottom: -8px;
          font-size: 9px;
          font-weight: 700;
          color: #D4A574;
          opacity: 0.8;
          transition: all 0.3s ease;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
        }

        .scroll-to-top-c:hover .progress-text {
          color: #FFD700;
          opacity: 1;
          bottom: -10px;
        }

        @media (max-width: 640px) {
          .scroll-to-top-c {
            width: 60px;
            height: 60px;
            bottom: 1.5rem;
            right: 1.5rem;
          }

          .button-content svg {
            width: 24px;
            height: 24px;
          }

          .progress-text {
            font-size: 8px;
            bottom: -6px;
          }
        }
      `}</style>

      <div
        className={`scroll-to-top-c ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="button"
        aria-label="Remonter en haut de page"
      >
        <div className="vitrail-button">
          <div className="button-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
            </svg>
            <span className="progress-text">
              {Math.round(scrollProgress)}%
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
