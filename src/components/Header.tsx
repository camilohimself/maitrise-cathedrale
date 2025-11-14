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

  // Block body scroll when mobile menu is open (iOS fix)
  useEffect(() => {
    if (isMobileMenuOpen) {
      const previousOverflow = document.body.style.overflow;
      const previousPosition = document.body.style.position;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      return () => {
        document.body.style.overflow = previousOverflow;
        document.body.style.position = previousPosition;
        document.body.style.width = '';
      };
    }
  }, [isMobileMenuOpen]);

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
        padding: '0 20px',
        position: 'relative'
      }}>
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px'
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
                height: '60px',
                width: 'auto',
                objectFit: 'contain',
                objectPosition: 'center'
              }}
              className="header-logo"
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
          }} className="desktop-nav">
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
                    padding: '12px 0',
                    minHeight: '44px',
                    alignItems: 'center',
                    display: 'flex'
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
              flexDirection: 'column',
              gap: '4px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px'
            }}
            className="mobile-menu-button"
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
            position: 'fixed',
            top: '64px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#fff',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            padding: '20px 16px',
            paddingBottom: 'calc(20px + env(safe-area-inset-bottom))',
            borderTop: '2px solid var(--color-red)',
            height: '100dvh',
            minHeight: '100svh',
            maxHeight: 'calc(100dvh - 64px)',
            overflowY: 'auto',
            overscrollBehavior: 'contain',
            WebkitOverflowScrolling: 'touch',
            zIndex: 999
          }}>
            <ul style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      color: link.isActive ? 'var(--color-red)' : '#000',
                      textDecoration: 'none',
                      fontSize: '16px',
                      fontWeight: link.isActive ? '600' : '500',
                      fontFamily: 'var(--font-family)',
                      display: 'flex',
                      alignItems: 'center',
                      padding: '14px 8px',
                      minHeight: '44px',
                      borderBottom: link.isActive ? '2px solid var(--color-red)' : '1px solid rgba(0,0,0,0.1)',
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
              <li style={{ marginTop: '8px' }}>
                <Link
                  href="/fas"
                  style={{
                    padding: '12px 20px',
                    backgroundColor: 'var(--color-purple)',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontSize: '15px',
                    fontWeight: '600',
                    display: 'block',
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

        /* Mobile-first: Hamburger par défaut */
        .mobile-menu-button {
          display: flex;
          margin-left: auto; /* Force à droite */
        }

        .desktop-nav {
          display: none;
        }

        /* Desktop: Show nav, hide hamburger */
        @media (min-width: 769px) {
          .desktop-nav {
            display: flex !important;
          }

          .mobile-menu-button {
            display: none !important;
          }

          .mobile-menu {
            display: none !important;
          }
        }

        /* Mobile: Hide nav, show hamburger - LESS IS MORE */
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }

          .mobile-menu-button {
            display: flex !important;
          }

          .mobile-menu {
            animation: fadeIn 0.3s ease-out;
            top: 56px !important;
            height: 100dvh !important;
            min-height: 100svh !important;
            max-height: calc(100dvh - 56px) !important;
            padding-bottom: calc(20px + env(safe-area-inset-bottom)) !important;
          }

          nav {
            height: 56px !important;
          }

          :global(.header-logo) {
            height: 50px !important;
            max-width: 70vw;
          }

          header > div {
            padding: 0 16px !important;
          }
        }

        /* Petits mobiles - Ultra compact */
        @media (max-width: 480px) {
          nav {
            height: 55px !important;
          }

          .mobile-menu {
            top: 55px !important;
            height: 100dvh !important;
            min-height: 100svh !important;
            max-height: calc(100dvh - 55px) !important;
            padding-bottom: calc(20px + env(safe-area-inset-bottom)) !important;
          }

          :global(.header-logo) {
            height: 42px !important;
            max-width: 60vw;
          }

          header > div {
            padding: 0 12px !important;
          }

          .mobile-menu-button {
            padding: 8px !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;