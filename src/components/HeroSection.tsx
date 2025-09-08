'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70 z-10" />
        {/* Background gradient instead of image for now */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-stone-800 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight">
              Voix d'exception
              <br />
              <span className="text-gold">au cœur de la</span>
              <br />
              Cathédrale
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
              La Maîtrise de la Cathédrale de Sion, c'est bien plus qu'un chœur : 
              c'est une aventure humaine, artistique et spirituelle. 
              De jeunes chanteurs passionnés, formés dès le plus jeune âge, 
              unissent leurs voix pour faire vibrer la cathédrale au rythme du 
              chant sacré. Entre tradition et modernité, rigueur musicale et 
              joie de chanter, la Maîtrise illumine les célébrations liturgiques 
              et rayonne sur les scènes suisses et internationales. Une école 
              de vie où l'on apprend à s'écouter, à s'élever... et à émouvoir.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#decouvrir" className="btn-primary group">
                <span>En savoir plus</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#agenda" className="btn-secondary">
                Voir l'agenda
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}