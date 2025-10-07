'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showGoldenBorder, setShowGoldenBorder] = useState(false);
  const [shineCount, setShineCount] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Trigger golden shine effect 2x with 0.8s interval on homepage
  useEffect(() => {
    if (pathname === '/') {
      setShineCount(0);

      // First shine at T+2s
      const timer1 = setTimeout(() => {
        setShowGoldenBorder(true);
        setShineCount(1);
        setTimeout(() => setShowGoldenBorder(false), 1500);
      }, 2000);

      // Second shine at T+4.3s (2s + 1.5s animation + 0.8s pause)
      const timer2 = setTimeout(() => {
        setShowGoldenBorder(true);
        setShineCount(2);
        setTimeout(() => setShowGoldenBorder(false), 1500);
      }, 4300);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [pathname]);

  const navigationLinks = [
    {
      label: 'Accueil',
      href: '/',
      isActive: pathname === '/'
    },
    {
      label: 'Agenda & Billetterie',
      href: '/agenda-billetterie',
      isActive: pathname?.startsWith('/agenda-billetterie')
    },
    {
      label: 'La Maîtrise',
      href: '/maitrise',
      isActive: pathname?.startsWith('/maitrise')
    },
    {
      label: 'Écouter & voir',
      href: '/media',
      isActive: pathname?.startsWith('/media')
    },
    {
      label: 'Nous soutenir',
      href: '/soutenir',
      isActive: pathname?.startsWith('/soutenir')
    }
  ];

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: isScrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80px'
        }}>
          {/* Logo */}
          <Link href="/" style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
          >
            <Image
              src="/images/logo-mc-couleur.png"
              alt="Maîtrise Cathédrale de Sion"
              width={345}
              height={92}
              style={{
                height: '87px',
                width: 'auto',
                objectFit: 'contain',
                objectPosition: 'center'
              }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <ul style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            listStyle: 'none',
            margin: 0,
            padding: 0
          }} className="hidden md:flex">
            {navigationLinks.map((link) => (
              <li key={link.href} style={{ position: 'relative' }}>
                <Link
                  href={link.href}
                  style={{
                    color: link.isActive ? 'var(--color-red)' : '#000',
                    textDecoration: 'none',
                    fontSize: '18.4px',
                    fontWeight: link.isActive ? '600' : '500',
                    transition: 'all 0.3s ease',
                    fontFamily: 'var(--font-family)',
                    position: 'relative',
                    padding: '8px 0',
                    display: 'block'
                  }}
                  onMouseEnter={(e) => {
                    if (!link.isActive) {
                      e.currentTarget.style.color = 'var(--color-gold)';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!link.isActive) {
                      e.currentTarget.style.color = '#000';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {link.label}
                  {link.isActive && (
                    <span style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: 0,
                      right: 0,
                      height: '3px',
                      backgroundColor: 'var(--color-red)',
                      borderRadius: '2px',
                      animation: 'slideIn 0.3s ease-out'
                    }} />
                  )}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/fas"
                className={`fas-cta-button ${showGoldenBorder ? 'golden-shine-active' : ''}`}
                style={{
                  padding: '10px 24px',
                  backgroundColor: 'var(--color-purple)',
                  color: '#fff',
                  border: '2px solid var(--color-purple)',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontSize: '15px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-family)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(107, 70, 193, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'relative', zIndex: 1 }}>
                  <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
                </svg>
                <span style={{ position: 'relative', zIndex: 1 }}>Festival d&apos;Art Sacré</span>
                {showGoldenBorder && (
                  <span className="golden-shine-scanner" style={{
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '50%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255, 215, 0, 0.4) 20%, rgba(212, 165, 116, 0.8) 50%, rgba(255, 215, 0, 0.4) 80%, transparent 100%)',
                    transform: 'skewX(-20deg)',
                    animation: 'goldenShineSweep 1.5s ease-in-out',
                    pointerEvents: 'none',
                    zIndex: 2,
                    filter: 'blur(2px)',
                    boxShadow: '0 0 20px rgba(212, 165, 116, 0.8)'
                  }}></span>
                )}
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: '4px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px'
            }}
            className="md:hidden"
            aria-label="Menu"
          >
            <span style={{
              width: '24px',
              height: '2px',
              backgroundColor: '#000',
              transition: 'all 0.3s ease',
              transform: isMobileMenuOpen ? 'rotate(45deg) translateY(6px)' : 'none'
            }}></span>
            <span style={{
              width: '24px',
              height: '2px',
              backgroundColor: '#000',
              transition: 'all 0.3s ease',
              opacity: isMobileMenuOpen ? 0 : 1
            }}></span>
            <span style={{
              width: '24px',
              height: '2px',
              backgroundColor: '#000',
              transition: 'all 0.3s ease',
              transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none'
            }}></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu" style={{
            position: 'absolute',
            top: '80px',
            left: 0,
            right: 0,
            backgroundColor: '#fff',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            borderTop: '3px solid var(--color-red)'
          }}>
            <ul style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    style={{
                      color: link.isActive ? 'var(--color-red)' : '#000',
                      textDecoration: 'none',
                      fontSize: '18px',
                      fontWeight: link.isActive ? '600' : '500',
                      fontFamily: 'var(--font-family)',
                      display: 'flex',
                      alignItems: 'center',
                      padding: '12px 0',
                      borderBottom: link.isActive ? '2px solid var(--color-red)' : '2px solid transparent',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.isActive && (
                      <span style={{
                        width: '6px',
                        height: '6px',
                        backgroundColor: 'var(--color-red)',
                        borderRadius: '50%',
                        marginRight: '12px'
                      }} />
                    )}
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/fas"
                  style={{
                    padding: '12px 24px',
                    backgroundColor: 'var(--color-purple)',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '16px',
                    fontWeight: '600',
                    display: 'inline-block',
                    fontFamily: 'var(--font-family)',
                    textAlign: 'center',
                    width: '100%'
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Festival d&apos;Art Sacré
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Responsive and animation styles */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 100%;
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes goldenShineSweep {
          0% {
            left: -100%;
          }
          100% {
            left: 150%;
          }
        }

        @media (max-width: 768px) {
          button[aria-label="Menu"] {
            display: flex !important;
          }

          .mobile-menu {
            animation: fadeIn 0.3s ease-out;
          }
        }

        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;