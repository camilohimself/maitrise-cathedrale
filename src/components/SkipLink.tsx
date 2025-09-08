'use client';

import React from 'react';

const SkipLink: React.FC = () => {
  return (
    <a 
      href="#main-content" 
      className="sr-only"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 9999,
        padding: '8px 16px',
        backgroundColor: 'var(--red-primary)',
        color: 'var(--white)',
        textDecoration: 'none',
        fontSize: '14px',
        fontWeight: 'bold',
        transform: 'translateY(-100%)',
        transition: 'transform 0.3s'
      }}
      onFocus={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.classList.remove('sr-only');
      }}
      onBlur={(e) => {
        e.currentTarget.style.transform = 'translateY(-100%)';
        e.currentTarget.classList.add('sr-only');
      }}
    >
      Aller au contenu principal
    </a>
  );
};

export default SkipLink;