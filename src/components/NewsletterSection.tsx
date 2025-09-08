'use client';

import React, { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    setTimeout(() => {
      setMessage('Merci pour votre inscription !');
      setEmail('');
      setIsSubmitting(false);
      setTimeout(() => setMessage(''), 5000);
    }, 1000);
  };

  return (
    <section style={{
      backgroundColor: '#F5F5F5',
      padding: '80px 0'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 20px',
        textAlign: 'center'
      }}>
        {/* Icon */}
        <div style={{
          width: '80px',
          height: '80px',
          margin: '0 auto 30px',
          backgroundColor: '#D2AB5F',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </div>

        {/* Title */}
        <h2 style={{
          fontSize: '36px',
          fontWeight: '800',
          color: '#000',
          marginBottom: '20px',
          fontFamily: 'var(--font-family)'
        }}>
          Recevez nos actualités
        </h2>

        {/* Subtitle */}
        <p style={{
          fontSize: '18px',
          color: '#666',
          marginBottom: '40px',
          lineHeight: '1.6',
          fontFamily: 'var(--font-family)'
        }}>
          Ne manquez aucun concert et restez informé de toutes nos activités musicales
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'flex',
            gap: '15px',
            width: '100%',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <input
              type="email"
              placeholder="Adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                flex: '1 1 300px',
                padding: '15px 20px',
                fontSize: '16px',
                border: '2px solid #E5E5E5',
                borderRadius: '4px',
                backgroundColor: '#fff',
                fontFamily: 'var(--font-family)',
                transition: 'border-color 0.3s ease',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#D2AB5F';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#E5E5E5';
              }}
            />
            
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: '15px 40px',
                backgroundColor: isSubmitting ? '#ccc' : '#D2AB5F',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'var(--font-family)'
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(210, 171, 95, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {isSubmitting ? 'Inscription...' : "S'inscrire"}
            </button>
          </div>

          {/* Message */}
          {message && (
            <p style={{
              color: '#4CAF50',
              fontSize: '16px',
              fontWeight: '500',
              marginTop: '10px',
              fontFamily: 'var(--font-family)',
              animation: 'fadeIn 0.5s ease'
            }}>
              {message}
            </p>
          )}
        </form>

        {/* Privacy Notice */}
        <p style={{
          fontSize: '14px',
          color: '#999',
          marginTop: '30px',
          fontFamily: 'var(--font-family)'
        }}>
          En vous inscrivant, vous acceptez de recevoir nos communications. 
          Vous pouvez vous désinscrire à tout moment.
        </p>
      </div>

      {/* Animation */}
      <style jsx>{`
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
      `}</style>
    </section>
  );
};

export default NewsletterSection;