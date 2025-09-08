'use client';

import React from 'react';
import Image from 'next/image';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  price?: string;
}

const EventsSection = () => {
  const events: Event[] = [
    {
      id: 1,
      title: "La Prochaine Cantate de Bach",
      date: "Jeudi 15 Août",
      time: "19h30",
      location: "Cathédrale de Sion",
      description: "Une interprétation exceptionnelle de la cantate BWV 147 de Jean-Sébastien Bach.",
      image: "/images/event1.jpg",
      price: "Entrée libre - collecte"
    },
    {
      id: 2,
      title: "Ensemble vocal et instrumental",
      date: "Dimanche 30 Novembre",
      time: "17h00",
      location: "Cathédrale de Sion",
      description: "Concert avec orchestre baroque et solistes internationaux.",
      image: "/images/event2.jpg",
      price: "CHF 25.- / 15.-"
    },
    {
      id: 3,
      title: "Festival d'Art Sacré",
      date: "Dimanche 30 Novembre",
      time: "20h00",
      location: "Cathédrale de Sion",
      description: "Trois jours de concerts exceptionnels dédiés à la musique sacrée.",
      image: "/images/event3.jpg",
      price: "CHF 35.- / 20.-"
    }
  ];

  return (
    <section 
      id="agenda"
      style={{
        backgroundColor: '#fff',
        padding: '80px 0'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        {/* Section Title */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '800',
            color: '#D2AB5F',
            marginBottom: '20px',
            fontFamily: 'var(--font-family)'
          }}>
            Événements
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto',
            fontFamily: 'var(--font-family)'
          }}>
            Découvrez nos prochains concerts et événements musicaux
          </p>
        </div>

        {/* Events Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginBottom: '50px'
        }}>
          {events.map((event) => (
            <article 
              key={event.id}
              style={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              }}
            >
              {/* Event Image */}
              <div style={{
                position: 'relative',
                height: '200px',
                backgroundColor: '#f0f0f0',
                overflow: 'hidden'
              }}>
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  style={{
                    objectFit: 'cover'
                  }}
                />
                {/* Date Badge */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  backgroundColor: '#D2AB5F',
                  color: '#fff',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontWeight: '600',
                  fontFamily: 'var(--font-family)'
                }}>
                  {event.date}
                </div>
              </div>

              {/* Event Content */}
              <div style={{
                padding: '25px'
              }}>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '700',
                  color: '#000',
                  marginBottom: '10px',
                  fontFamily: 'var(--font-family)'
                }}>
                  {event.title}
                </h3>
                
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  marginBottom: '15px'
                }}>
                  <p style={{
                    fontSize: '15px',
                    color: '#666',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: 'var(--font-family)'
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D2AB5F" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    {event.time}
                  </p>
                  <p style={{
                    fontSize: '15px',
                    color: '#666',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: 'var(--font-family)'
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D2AB5F" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {event.location}
                  </p>
                </div>

                <p style={{
                  fontSize: '15px',
                  color: '#666',
                  lineHeight: '1.6',
                  marginBottom: '20px',
                  fontFamily: 'var(--font-family)'
                }}>
                  {event.description}
                </p>

                {event.price && (
                  <p style={{
                    fontSize: '14px',
                    color: '#D2AB5F',
                    fontWeight: '600',
                    fontFamily: 'var(--font-family)'
                  }}>
                    {event.price}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div style={{
          textAlign: 'center'
        }}>
          <a 
            href="#billetterie"
            style={{
              display: 'inline-block',
              padding: '14px 40px',
              backgroundColor: '#D2AB5F',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              fontFamily: 'var(--font-family)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(210, 171, 95, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Voir tous les événements
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;