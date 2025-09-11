'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const FASHeroCarouselSimple = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Version test simplifiée avec 3 images
  const carouselImages = [
    {
      src: '/images/carousel/carousel-1.jpg',
      title: 'Moments de Grâce'
    },
    {
      src: '/images/carousel/carousel-2.jpg', 
      title: 'Concert Cathédrale'
    },
    {
      src: '/images/carousel/carousel-3.jpg',
      title: 'Excellence Musicale'
    }
  ];

  // Auto-play simple
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      background: 'linear-gradient(135deg, #6B46C1 0%, #8B5CF6 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      
      {/* Image de test */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0
      }}>
        <Image
          src={carouselImages[currentSlide].src}
          alt={carouselImages[currentSlide].title}
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          priority
          quality={85}
          onError={(e) => {
            console.error('Erreur chargement image:', carouselImages[currentSlide].src);
            // Fallback vers image hero existante
            e.currentTarget.src = '/images/hero-photo.jpg';
          }}
        />
      </div>

      {/* Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(107, 70, 193, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%)',
        zIndex: 1
      }} />

      {/* Contenu */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        color: 'white',
        padding: '40px'
      }}>
        <div style={{
          display: 'inline-block',
          padding: '12px 32px',
          background: 'rgba(167, 139, 250, 0.9)',
          color: '#1A1A1A',
          fontSize: '0.9rem',
          fontWeight: '700',
          letterSpacing: '0.15em',
          borderRadius: '50px',
          marginBottom: '2rem',
          textTransform: 'uppercase'
        }}>
          Festival d'Art Sacré • 20ème Édition
        </div>

        <h1 style={{
          fontSize: 'clamp(3rem, 8vw, 5.5rem)',
          fontWeight: '300',
          letterSpacing: '-0.02em',
          lineHeight: '0.95',
          marginBottom: '1.5rem',
          fontFamily: 'var(--font-spectral), Georgia, serif',
          textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
        }}>
          {carouselImages[currentSlide].title}
        </h1>

        <p style={{
          fontSize: '1.3rem',
          fontWeight: '300',
          opacity: '0.95',
          marginBottom: '3rem',
          maxWidth: '600px',
          margin: '0 auto 3rem'
        }}>
          Vingt années d'excellence musicale au cœur de la Cathédrale de Sion
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button style={{
            padding: '16px 40px',
            background: 'linear-gradient(45deg, #5B21B6, #6B46C1)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            textTransform: 'uppercase'
          }}>
            Programme 2025-2026
          </button>
        </div>
      </div>

      {/* Indicateurs */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '12px',
        zIndex: 3
      }}>
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: currentSlide === index ? '40px' : '12px',
              height: '4px',
              background: currentSlide === index 
                ? 'linear-gradient(90deg, #A78BFA, #C4B5FD)' 
                : 'rgba(255, 255, 255, 0.4)',
              border: 'none',
              borderRadius: '2px',
              cursor: 'pointer',
              transition: 'all 0.4s ease'
            }}
          />
        ))}
      </div>

      {/* Debug info */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        background: 'rgba(0,0,0,0.5)',
        color: 'white',
        padding: '10px',
        borderRadius: '8px',
        fontSize: '0.8rem',
        zIndex: 10
      }}>
        Image: {currentSlide + 1}/{carouselImages.length}
        <br />
        Path: {carouselImages[currentSlide].src}
      </div>
    </section>
  );
};

export default FASHeroCarouselSimple;