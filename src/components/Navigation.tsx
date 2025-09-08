'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#agenda', label: 'Agenda & Billetterie' },
    { href: '#maitrise', label: 'La Maîtrise' },
    { href: '#media', label: 'Écouter & voir' },
    { href: '#soutenir', label: 'Nous soutenir' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-[var(--primary-gold)] rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xl">M</span>
            </div>
            <span className="hidden md:block text-white font-light">Maîtrise Cathédrale</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-[var(--primary-gold)] transition-colors duration-200 text-sm font-light tracking-wide"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#festival"
              className="btn-secondary text-sm"
            >
              Festival d'Art Sacré
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 mt-6' : 'max-h-0'
        }`}>
          <div className="bg-black/95 backdrop-blur-md rounded-lg p-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white/80 hover:text-[var(--primary-gold)] transition-colors duration-200 py-2"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#festival"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-secondary inline-block mt-4"
            >
              Festival d'Art Sacré
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}