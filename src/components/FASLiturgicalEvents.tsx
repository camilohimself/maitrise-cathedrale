'use client';

import liturgicalEvents from '@/data/liturgicalEvents.json';

const FASLiturgicalEvents = () => {
  const { liturgical } = liturgicalEvents;

  return (
    <section style={{
      background: 'linear-gradient(180deg, #0a0a1a 0%, #1a1340 100%)',
      padding: 'clamp(40px, 10vw, 100px) clamp(16px, 5vw, 40px)',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: 'clamp(40px, 8vw, 60px)'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 6vw, 3rem)',
            fontWeight: '300',
            color: 'white',
            fontFamily: 'var(--font-spectral), Georgia, serif',
            marginBottom: '16px'
          }}>
            {liturgical.title}
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
            color: '#D4A574',
            fontStyle: 'italic',
            marginBottom: '12px'
          }}>
            {liturgical.subtitle}
          </p>
          <p style={{
            fontSize: 'clamp(0.95rem, 2.2vw, 1rem)',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '700px',
            margin: '0 auto',
            padding: '0 16px'
          }}>
            {liturgical.description}
          </p>
        </div>

        {/* Grid messes - DESKTOP */}
        <div className="messes-grid-desktop">
          {liturgical.dates.map((messe) => (
            <div
              key={messe.id}
              className="messe-card-desktop"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: 'clamp(16px, 3vw, 20px)',
                padding: 'clamp(20px, 4vw, 32px)',
                border: '1px solid rgba(212, 165, 116, 0.2)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(212, 165, 116, 0.4)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(212, 165, 116, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(212, 165, 116, 0.2)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Background glow */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(212, 165, 116, 0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(40px)',
                pointerEvents: 'none'
              }} />

              {/* Date badge */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(12px, 2.5vw, 16px)',
                marginBottom: 'clamp(16px, 3vw, 20px)',
                flexWrap: 'wrap'
              }}>
                <div style={{
                  minWidth: 'clamp(70px, 14vw, 80px)',
                  textAlign: 'center',
                  padding: 'clamp(10px, 2vw, 14px)',
                  background: 'rgba(212, 165, 116, 0.15)',
                  borderRadius: 'clamp(10px, 2vw, 14px)',
                  border: '1px solid rgba(212, 165, 116, 0.3)',
                  flexShrink: 0
                }}>
                  <div style={{
                    fontSize: 'clamp(1.5rem, 4vw, 1.8rem)',
                    fontWeight: '700',
                    color: '#D4A574',
                    lineHeight: '1'
                  }}>
                    {messe.dayNumber}
                  </div>
                  <div style={{
                    fontSize: 'clamp(0.75rem, 1.7vw, 0.8rem)',
                    color: 'rgba(212, 165, 116, 0.8)',
                    marginTop: '4px',
                    fontWeight: '600'
                  }}>
                    {messe.month}
                  </div>
                </div>

                <div style={{ flex: '1 1 auto' }}>
                  <div style={{
                    fontSize: 'clamp(0.85rem, 1.9vw, 0.9rem)',
                    color: 'rgba(255, 255, 255, 0.6)',
                    marginBottom: '2px'
                  }}>
                    {messe.day}
                  </div>
                  <div style={{
                    fontSize: 'clamp(1rem, 2.2vw, 1.1rem)',
                    fontWeight: '600',
                    color: '#D4A574'
                  }}>
                    {messe.time}
                  </div>
                </div>
              </div>

              {/* Occasion */}
              {messe.occasion && (
                <div style={{
                  display: 'inline-block',
                  padding: '6px 12px',
                  background: 'rgba(212, 165, 116, 0.1)',
                  border: '1px solid rgba(212, 165, 116, 0.2)',
                  borderRadius: '8px',
                  fontSize: 'clamp(0.75rem, 1.7vw, 0.8rem)',
                  color: 'rgba(212, 165, 116, 0.9)',
                  fontWeight: '500',
                  marginBottom: 'clamp(12px, 2.5vw, 16px)'
                }}>
                  {messe.occasion}
                </div>
              )}

              {/* Performers */}
              <div style={{
                fontSize: 'clamp(1rem, 2.2vw, 1.15rem)',
                fontWeight: '600',
                color: 'white',
                marginBottom: 'clamp(12px, 2.5vw, 16px)',
                fontFamily: 'var(--font-spectral), Georgia, serif'
              }}>
                {messe.performers}
              </div>

              {/* Work */}
              <div style={{
                fontSize: 'clamp(0.9rem, 2vw, 0.95rem)',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.5',
                marginBottom: '8px',
                fontStyle: 'italic'
              }}>
                {messe.work}
              </div>

              {/* Composer */}
              {messe.composer && (
                <div style={{
                  fontSize: 'clamp(0.85rem, 1.9vw, 0.9rem)',
                  color: 'rgba(255, 255, 255, 0.6)'
                }}>
                  {messe.composer}
                </div>
              )}

              {/* Entrée libre badge */}
              <div style={{
                marginTop: 'clamp(16px, 3vw, 20px)',
                paddingTop: 'clamp(16px, 3vw, 20px)',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span style={{
                  fontSize: 'clamp(0.85rem, 1.9vw, 0.9rem)',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontWeight: '500'
                }}>
                  Entrée libre
                </span>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#D4A574',
                  boxShadow: '0 0 10px rgba(212, 165, 116, 0.5)'
                }} />
              </div>
            </div>
          ))}
        </div>

        {/* Liste messes - MOBILE ONLY */}
        <div className="messes-list-mobile">
          {liturgical.dates.map((messe) => (
            <div
              key={`mobile-${messe.id}`}
              className="messe-card-mobile"
            >
              {/* Layout horizontal compact */}
              <div className="messe-mobile-row">
                {/* Date badge compact */}
                <div className="messe-mobile-date">
                  <span className="messe-mobile-day">{messe.dayNumber}</span>
                  <span className="messe-mobile-month">{messe.month}</span>
                </div>

                {/* Contenu principal */}
                <div className="messe-mobile-content">
                  {/* Occasion badge */}
                  {messe.occasion && (
                    <span className="messe-mobile-occasion">{messe.occasion}</span>
                  )}
                  {/* Performers */}
                  <div className="messe-mobile-performers">{messe.performers}</div>
                  {/* Work */}
                  <div className="messe-mobile-work">{messe.work}</div>
                  {/* Composer */}
                  {messe.composer && (
                    <div className="messe-mobile-composer">{messe.composer}</div>
                  )}
                </div>

                {/* Heure */}
                <div className="messe-mobile-time">{messe.time}</div>
              </div>

              {/* Footer */}
              <div className="messe-mobile-footer">
                <span>Entrée libre</span>
                <div className="messe-mobile-dot" />
              </div>
            </div>
          ))}
        </div>

        {/* Note bas de section */}
        <div style={{
          marginTop: 'clamp(30px, 6vw, 50px)',
          textAlign: 'center',
          padding: 'clamp(20px, 4vw, 30px)',
          background: 'rgba(212, 165, 116, 0.05)',
          borderRadius: 'clamp(12px, 2vw, 16px)',
          border: '1px solid rgba(212, 165, 116, 0.15)'
        }}>
          <p style={{
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '1.6',
            margin: 0
          }}>
            Ces messes enrichissent le Festival d'Art Sacré avec des programmes musicaux d'exception. <br />
            <span style={{ color: '#D4A574', fontWeight: '600' }}>Accès libre</span>, bienvenue à tous.
          </p>
        </div>
      </div>
      {/* RESPONSIVE STYLES */}
      <style jsx>{`
        /* DESKTOP: Grid visible, Mobile list hidden */
        .messes-grid-desktop {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
          gap: clamp(20px, 4vw, 30px);
        }
        .messes-list-mobile {
          display: none;
        }

        /* MOBILE < 640px: Grid hidden, Mobile list visible */
        @media (max-width: 640px) {
          .messes-grid-desktop {
            display: none !important;
          }
          .messes-list-mobile {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          /* Card mobile compacte */
          .messe-card-mobile {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(212, 165, 116, 0.2);
            border-radius: 12px;
            padding: 16px;
            overflow: hidden;
          }

          /* Row principal: Date | Contenu | Heure */
          .messe-mobile-row {
            display: flex;
            align-items: flex-start;
            gap: 12px;
          }

          /* Date badge compact */
          .messe-mobile-date {
            min-width: 50px;
            text-align: center;
            padding: 8px;
            background: rgba(212, 165, 116, 0.15);
            border-radius: 8px;
            border: 1px solid rgba(212, 165, 116, 0.3);
            flex-shrink: 0;
          }
          .messe-mobile-day {
            display: block;
            font-size: 1.3rem;
            font-weight: 700;
            color: #D4A574;
            line-height: 1;
          }
          .messe-mobile-month {
            display: block;
            font-size: 0.7rem;
            color: rgba(212, 165, 116, 0.8);
            margin-top: 2px;
            font-weight: 600;
          }

          /* Contenu central */
          .messe-mobile-content {
            flex: 1;
            min-width: 0;
          }
          .messe-mobile-occasion {
            display: inline-block;
            padding: 3px 8px;
            background: rgba(212, 165, 116, 0.1);
            border: 1px solid rgba(212, 165, 116, 0.2);
            border-radius: 6px;
            font-size: 0.7rem;
            color: rgba(212, 165, 116, 0.9);
            font-weight: 500;
            margin-bottom: 6px;
          }
          .messe-mobile-performers {
            font-size: 0.95rem;
            font-weight: 600;
            color: white;
            margin-bottom: 4px;
            font-family: var(--font-spectral), Georgia, serif;
          }
          .messe-mobile-work {
            font-size: 0.85rem;
            color: rgba(255, 255, 255, 0.8);
            font-style: italic;
            line-height: 1.4;
          }
          .messe-mobile-composer {
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.6);
            margin-top: 2px;
          }

          /* Heure à droite */
          .messe-mobile-time {
            font-size: 0.9rem;
            font-weight: 600;
            color: #D4A574;
            flex-shrink: 0;
          }

          /* Footer compact */
          .messe-mobile-footer {
            margin-top: 12px;
            padding-top: 12px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.7);
            font-weight: 500;
          }
          .messe-mobile-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #D4A574;
            box-shadow: 0 0 8px rgba(212, 165, 116, 0.5);
          }
        }
      `}</style>
    </section>
  );
};

export default FASLiturgicalEvents;
