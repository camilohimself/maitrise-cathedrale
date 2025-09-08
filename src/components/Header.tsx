'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationLinks = [
    { label: 'Agenda & Billetterie', href: '/agenda-billetterie' },
    { label: 'La Maîtrise', href: '/maitrise' },
    { label: 'Écouter & voir', href: '/media' },
    { label: 'Nous soutenir', href: '/soutenir' }
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
            textDecoration: 'none'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#E33241',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: '800',
              color: '#fff',
              fontFamily: 'var(--font-family)',
              letterSpacing: '-1px'
            }}>
              M
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            listStyle: 'none',
            margin: 0,
            padding: 0
          }} className="hidden md:flex">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  style={{
                    color: '#000',
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontWeight: '500',
                    transition: 'color 0.3s ease',
                    fontFamily: 'var(--font-family)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#D2AB5F'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#000'}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link 
                href="/fas"
                style={{
                  padding: '10px 24px',
                  backgroundColor: '#D2AB5F',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontSize: '15px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                  fontFamily: 'var(--font-family)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(210, 171, 95, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Festival d&apos;Art Sacré
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
          <div style={{
            position: 'absolute',
            top: '80px',
            left: 0,
            right: 0,
            backgroundColor: '#fff',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            padding: '20px'
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
                      color: '#000',
                      textDecoration: 'none',
                      fontSize: '18px',
                      fontWeight: '500',
                      fontFamily: 'var(--font-family)'
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/fas"
                  style={{
                    padding: '12px 24px',
                    backgroundColor: '#D2AB5F',
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

      {/* Mobile menu button styles for responsive */}
      <style jsx>{`
        @media (max-width: 768px) {
          button[aria-label="Menu"] {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;