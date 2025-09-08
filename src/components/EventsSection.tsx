'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Event {
  id: number;
  date: string;
  day: string;
  month: string;
  time: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  type: 'concert' | 'messe' | 'festival';
  ticketUrl?: string;
}

const events: Event[] = [
  {
    id: 1,
    date: '15',
    day: 'JEUDI',
    month: 'AOÛT',
    time: '19H30',
    title: 'LA PROCHAINE',
    subtitle: 'CANTATE DE BACH',
    description: 'Nobilium usque aurum observentur inminuto nuptias artuum manibus inpigre ubi vel cavatis sunt inminuto artuum haec tamen ad instituta.',
    image: '/images/event-bach.jpg',
    type: 'concert',
    ticketUrl: '#'
  },
  {
    id: 2,
    date: '30',
    day: 'DIMANCHE',
    month: 'NOV',
    time: '10H00',
    title: 'Choeur grégorien',
    description: 'Le Chœur Grégorien de la Maîtrise de la Cathédrale est un ensemble de voix masculines qui interprète le grand trésor du chant grégorien.',
    image: '/images/event-gregorien.jpg',
    type: 'messe',
    ticketUrl: '#'
  },
  {
    id: 3,
    date: '30',
    day: 'DIMANCHE',
    month: 'NOV',
    time: '10H00',
    title: 'Ensemble vocal',
    subtitle: 'et instrumental',
    description: 'Une performance exceptionnelle mêlant voix et instruments pour une expérience musicale unique.',
    image: '/images/event-ensemble.jpg',
    type: 'concert',
    ticketUrl: '#'
  },
  {
    id: 4,
    date: '30',
    day: 'DIMANCHE',
    month: 'NOV',
    time: '14H00',
    title: "Festival d'Art Sacré",
    description: 'Un festival dédié à la musique sacrée avec des artistes internationaux.',
    image: '/images/event-festival.jpg',
    type: 'festival',
    ticketUrl: '#'
  }
];

export default function EventsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="agenda" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-[var(--primary-gold)] mb-4">
            Événements
          </h2>
          <a href="#tous-evenements" className="btn-primary text-black border-black hover:bg-black hover:text-white">
            Découvrir
          </a>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Featured Event - Spans 2 columns */}
          <div className="md:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-2xl bg-black h-[600px]">
            <Image
              src={events[0].image}
              alt={events[0].title}
              fill
              className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-[var(--primary-gold)] text-sm font-medium">
                  {events[0].day} {events[0].date} {events[0].month} - {events[0].time}
                </span>
              </div>
              <h3 className="text-3xl font-serif mb-2">{events[0].title}</h3>
              <h4 className="text-3xl font-serif mb-4">{events[0].subtitle}</h4>
              <p className="text-white/80 mb-6 line-clamp-3">{events[0].description}</p>
              <button className="btn-primary">
                Réserver
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Regular Events */}
          {events.slice(1).map((event) => (
            <div
              key={event.id}
              className="group relative overflow-hidden rounded-2xl bg-gray-900 h-[290px] cursor-pointer"
              onMouseEnter={() => setHoveredCard(event.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-[var(--primary-gold)] text-xs font-medium mb-2">
                  {event.day} {event.date} {event.month}
                </div>
                <h3 className="text-xl font-serif mb-1">{event.title}</h3>
                {event.subtitle && (
                  <h4 className="text-lg font-serif mb-3">{event.subtitle}</h4>
                )}
                
                {/* Show description on hover */}
                <div className={`transition-all duration-300 ${
                  hoveredCard === event.id ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <p className="text-white/80 text-sm mb-3 line-clamp-2">{event.description}</p>
                </div>
                
                <button className="text-[var(--primary-gold)] text-sm font-medium hover:text-white transition-colors">
                  Billet →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}