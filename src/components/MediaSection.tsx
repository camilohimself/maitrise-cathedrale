'use client';

import { useState } from 'react';
import Image from 'next/image';

interface MediaItem {
  id: number;
  title: string;
  subtitle?: string;
  type: 'audio' | 'video';
  thumbnail: string;
  url: string;
  duration?: string;
}

const mediaItems: MediaItem[] = [
  {
    id: 1,
    title: 'Herr, wenn ich nur dir',
    type: 'audio',
    thumbnail: '/images/media-1.jpg',
    url: '#',
    duration: '4:32'
  },
  {
    id: 2,
    title: 'Ave Maria',
    subtitle: 'Franz Schubert',
    type: 'audio',
    thumbnail: '/images/media-2.jpg',
    url: '#',
    duration: '5:15'
  },
  {
    id: 3,
    title: 'Cantate BWV 147',
    subtitle: 'J.S. Bach',
    type: 'video',
    thumbnail: '/images/media-3.jpg',
    url: '#',
    duration: '12:45'
  },
  {
    id: 4,
    title: 'Gloria in Excelsis Deo',
    type: 'audio',
    thumbnail: '/images/media-4.jpg',
    url: '#',
    duration: '6:20'
  }
];

export default function MediaSection() {
  const [activeMedia, setActiveMedia] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = (id: number) => {
    if (activeMedia === id) {
      setIsPlaying(!isPlaying);
    } else {
      setActiveMedia(id);
      setIsPlaying(true);
    }
  };

  return (
    <section id="media" className="py-20 bg-[var(--dark-blue)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, var(--primary-gold) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, var(--primary-gold) 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, var(--primary-gold) 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-[var(--primary-gold)] mb-6">
            Écouter & Voir
          </h2>
          <a href="#mediatheque" className="btn-primary">
            Découvrir
          </a>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mediaItems.map((item) => (
            <div
              key={item.id}
              className="group relative cursor-pointer"
              onClick={() => handlePlayClick(item.id)}
            >
              {/* Circular Media Card */}
              <div className="relative w-full aspect-square">
                <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-[var(--primary-gold)] group-hover:border-4 transition-all duration-300">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeMedia === item.id && isPlaying 
                        ? 'scale-110 bg-[var(--primary-gold)]' 
                        : 'group-hover:scale-110'
                    }`}>
                      {activeMedia === item.id && isPlaying ? (
                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Duration Badge */}
                  {item.duration && (
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {item.duration}
                    </div>
                  )}
                </div>
              </div>

              {/* Title */}
              <div className="text-center mt-6">
                <h3 className="text-white font-medium text-lg group-hover:text-[var(--primary-gold)] transition-colors">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-white/60 text-sm mt-1">{item.subtitle}</p>
                )}
                <button className="mt-3 text-[var(--primary-gold)] text-sm font-medium hover:text-white transition-colors">
                  Écouter
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Video */}
        <div className="mt-20">
          <h3 className="text-3xl font-serif text-white text-center mb-10">
            Concert en vedette
          </h3>
          <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden group cursor-pointer">
            <Image
              src="/images/featured-concert.jpg"
              alt="Concert en vedette"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
              <div className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-black ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
              <h4 className="text-2xl font-serif text-white mb-2">
                Messe de Noël 2024
              </h4>
              <p className="text-white/80">
                Cathédrale de Sion - 24 décembre 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}