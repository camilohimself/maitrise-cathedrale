'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

/**
 * HERO FESTIVAL COUNTDOWN - Version Opéra Style
 * Desktop: Layout horizontal luxe
 * Mobile: Layout vertical native, pense mobile-first
 */

const FESTIVAL_START = new Date('2025-11-30T17:00:00');

interface CountdownValues {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const HeroFestivalCountdown = () => {
  const [countdown, setCountdown] = useState<CountdownValues>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const heroImages = [
    '/images/artistes/stile-antico-1-hero.webp',
    '/images/artistes/choeur-novantiqua/novantiqua-1-hero.webp',
    '/images/artistes/ensemble-ad-astra/ad-astra-1-hero.webp',
    '/images/hero-photo.webp',
  ];

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Countdown logic
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = FESTIVAL_START.getTime() - now.getTime();
      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // ============ VERSION MOBILE - Style Opera de Paris ============
  if (isMobile) {
    return (
      <section style={{
        position: 'relative',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#1a1340',
      }}>
        {/* Image hero - PURE, sans texte - MAX SIZE */}
        <div style={{
          position: 'relative',
          height: '58vh',
          minHeight: '320px',
          overflow: 'hidden',
        }}>
          {heroImages.map((src, index) => (
            <div
              key={src}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: currentImageIndex === index ? 1 : 0,
                transition: 'opacity 1.5s ease-in-out',
              }}
            >
              <Image
                src={src}
                alt="Festival d'Art Sacre"
                fill
                style={{
                  objectFit: 'cover',
                  filter: 'brightness(0.85)',
                }}
                priority={index === 0}
              />
            </div>
          ))}

          {/* Overlay gradient subtil vers navy */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, transparent 0%, transparent 50%, rgba(26,19,64,0.8) 85%, #1a1340 100%)',
          }} />

        </div>

        {/* Contenu - Style Opera */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '16px 20px 24px',
          textAlign: 'center',
        }}>
          {/* Badge edition */}
          <span style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '0.7rem',
            fontWeight: '500',
            color: '#D4A574',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '8px',
          }}>
            20e edition
          </span>

          {/* Titre principal */}
          <h1 style={{
            fontFamily: 'var(--font-spectral)',
            fontSize: '2rem',
            fontWeight: '400',
            color: '#FFFFFF',
            lineHeight: 1.1,
            marginBottom: '4px',
          }}>
            Festival d'Art Sacre
          </h1>

          {/* Lieu */}
          <p style={{
            fontFamily: 'var(--font-spectral)',
            fontSize: '1rem',
            fontWeight: '400',
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '6px',
          }}>
            Cathedrale de Sion
          </p>

          {/* Dates */}
          <p style={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.5)',
            marginBottom: '20px',
          }}>
            30 novembre 2025 - 4 janvier 2026
          </p>

          {/* Countdown - 4 colonnes taille fixe */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 65px)',
            gap: '10px',
            marginBottom: '24px',
            justifyContent: 'center',
          }}>
            {[
              { value: countdown.days, label: 'Jours' },
              { value: countdown.hours, label: 'Heures' },
              { value: countdown.minutes, label: 'Min' },
              { value: countdown.seconds, label: 'Sec' },
            ].map((item) => (
              <div key={item.label} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '65px',
                height: '70px',
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderRadius: '10px',
                border: '1px solid rgba(255,255,255,0.08)',
              }}>
                <span style={{
                  fontFamily: 'var(--font-spectral)',
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#FFFFFF',
                  lineHeight: 1,
                }}>
                  {String(item.value).padStart(2, '0')}
                </span>
                <span style={{
                  fontFamily: 'var(--font-outfit)',
                  fontSize: '0.55rem',
                  color: 'rgba(255,255,255,0.4)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginTop: '6px',
                }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs cote a cote comme Opera */}
          <div style={{
            display: 'flex',
            gap: '12px',
            width: '100%',
            maxWidth: '300px',
          }}>
            <a
              href="/fas"
              style={{
                flex: 1,
                display: 'block',
                padding: '14px 16px',
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '30px',
                fontFamily: 'var(--font-outfit)',
                fontWeight: '500',
                fontSize: '0.8rem',
                textDecoration: 'none',
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Programme
            </a>
            <a
              href="/agenda-billetterie"
              style={{
                flex: 1,
                display: 'block',
                padding: '14px 16px',
                backgroundColor: '#FFFFFF',
                color: '#1a1340',
                border: 'none',
                borderRadius: '30px',
                fontFamily: 'var(--font-outfit)',
                fontWeight: '600',
                fontSize: '0.8rem',
                textDecoration: 'none',
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Reserver
            </a>
          </div>
        </div>
      </section>
    );
  }

  // ============ VERSION DESKTOP ============
  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      minHeight: '700px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: '#1a1340',
    }}>
      {/* Images carousel */}
      {heroImages.map((src, index) => (
        <div
          key={src}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            opacity: currentImageIndex === index ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out',
          }}
        >
          <Image
            src={src}
            alt="Festival d'Art Sacre"
            fill
            style={{
              objectFit: 'cover',
              filter: 'brightness(0.65) contrast(1.1)',
            }}
            priority={index === 0}
            quality={90}
          />
        </div>
      ))}

      {/* Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 2,
        background: `linear-gradient(180deg,
          rgba(26, 19, 64, 0.85) 0%,
          rgba(26, 19, 64, 0.4) 25%,
          transparent 50%,
          rgba(0, 0, 0, 0.5) 75%,
          rgba(26, 19, 64, 0.9) 100%
        )`,
      }} />

      {/* Ligne doree */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1px',
        height: '100%',
        background: 'linear-gradient(180deg, transparent 0%, rgba(212, 165, 116, 0.3) 30%, rgba(212, 165, 116, 0.3) 70%, transparent 100%)',
        zIndex: 3,
      }} />

      {/* Contenu */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        maxWidth: '1000px',
        padding: '0 2rem',
        width: '100%',
      }}>
        {/* Logo */}
        <div style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}>
          <Image
            src="/images/fas-logo-white.png"
            alt="20e Festival d'Art Sacre"
            width={450}
            height={150}
            style={{
              width: 'clamp(280px, 50vw, 450px)',
              height: 'auto',
              filter: 'drop-shadow(0 4px 30px rgba(0, 0, 0, 0.5))',
            }}
            priority
          />
        </div>

        <p style={{
          fontFamily: 'var(--font-spectral)',
          fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
          fontWeight: '400',
          color: '#D4A574',
          marginBottom: '2.5rem',
          letterSpacing: '0.05em',
        }}>
          Cathedrale de Sion
        </p>

        {/* Countdown */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 'clamp(1rem, 4vw, 3rem)',
          marginBottom: '3rem',
        }}>
          {[
            { value: countdown.days, label: 'Jours' },
            { value: countdown.hours, label: 'Heures' },
            { value: countdown.minutes, label: 'Minutes' },
            { value: countdown.seconds, label: 'Secondes' },
          ].map((item) => (
            <div key={item.label} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <div style={{
                fontFamily: 'var(--font-spectral)',
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: '700',
                color: '#FFFFFF',
                lineHeight: 1,
                minWidth: '80px',
                textShadow: '0 0 30px rgba(212, 165, 116, 0.3)',
              }}>
                {String(item.value).padStart(2, '0')}
              </div>
              <div style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)',
                fontWeight: '400',
                color: 'rgba(255, 255, 255, 0.6)',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                marginTop: '8px',
              }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <p style={{
          fontFamily: 'var(--font-outfit)',
          fontSize: 'clamp(1rem, 2vw, 1.3rem)',
          fontWeight: '300',
          color: 'rgba(255, 255, 255, 0.8)',
          marginBottom: '2.5rem',
          letterSpacing: '0.5px',
        }}>
          30 novembre 2025 - 4 janvier 2026
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <a
            href="/fas"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '18px 48px',
              backgroundColor: '#D4A574',
              color: '#1a1340',
              border: 'none',
              borderRadius: '4px',
              fontFamily: 'var(--font-outfit)',
              fontWeight: '600',
              fontSize: '16px',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(212, 165, 116, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(212, 165, 116, 0.4)';
              e.currentTarget.style.backgroundColor = '#e0b68a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(212, 165, 116, 0.3)';
              e.currentTarget.style.backgroundColor = '#D4A574';
            }}
          >
            Decouvrir le programme
          </a>
          <a
            href="/agenda-billetterie"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '18px 48px',
              backgroundColor: 'transparent',
              color: '#FFFFFF',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              borderRadius: '4px',
              fontFamily: 'var(--font-outfit)',
              fontWeight: '500',
              fontSize: '16px',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.8)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            Billetterie
          </a>
        </div>
      </div>

      {/* Indicateurs carousel */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
        display: 'flex',
        gap: '8px',
      }}>
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            style={{
              width: currentImageIndex === index ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              backgroundColor: currentImageIndex === index ? '#D4A574' : 'rgba(255, 255, 255, 0.3)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroFestivalCountdown;
