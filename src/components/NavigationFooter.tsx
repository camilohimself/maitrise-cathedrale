'use client';

import React from 'react';
import Link from 'next/link';

interface NavigationLink {
  href: string;
  label: string;
  direction: 'prev' | 'next';
}

interface NavigationFooterProps {
  title?: string;
  links: NavigationLink[];
  backgroundColor?: string;
}

const NavigationFooter: React.FC<NavigationFooterProps> = ({ 
  title = "Continuez votre découverte",
  links,
  backgroundColor = '#f8f9fa'
}) => {
  return (
    <div style={{
      backgroundColor,
      padding: '40px 20px',
      borderTop: '1px solid #e0e0e0',
      textAlign: 'center',
      marginTop: '60px',
      marginBottom: '40px' // Réduit l'espacement avant le Footer global
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h3 style={{ 
          fontSize: '1.4rem', 
          marginBottom: '20px', 
          color: '#2c3e50',
          fontFamily: 'var(--font-family)',
          fontWeight: '600'
        }}>
          {title}
        </h3>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '24px',
          flexWrap: 'wrap'
        }}>
          {links.map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                backgroundColor: link.direction === 'prev' ? '#6c757d' : 'var(--color-red)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '6px',
                fontSize: '15px',
                fontWeight: '500',
                fontFamily: 'var(--font-family)',
                transition: 'all 0.3s ease',
                minWidth: '160px',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = link.direction === 'prev' 
                  ? '0 6px 20px rgba(108, 117, 125, 0.3)'
                  : '0 6px 20px rgba(227, 50, 65, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {link.direction === 'prev' && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H6m6-7l-7 7 7 7"/>
                </svg>
              )}
              {link.label}
              {link.direction === 'next' && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h13m-6-7 7 7-7 7"/>
                </svg>
              )}
            </Link>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="display: flex"] {
            flex-direction: column !important;
            align-items: center !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default NavigationFooter;