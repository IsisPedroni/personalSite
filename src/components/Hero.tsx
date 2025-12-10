import { ArrowRight } from 'lucide-react';
import React from 'react';
import bannerImage from '../assets/banner.jpg';

export function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="mb-6 text-white">
          Transform Your Body,<br />Transform Your Life
        </h1>
        <p className="mb-8 text-xl opacity-90">
          Certified personal trainer in San Diego, USA - Customized training for your goals
        </p>
        <button
          onClick={() => window.open('https://wa.me/18589524252', '_blank')}
          className="bg-white hover:bg-gray-200 text-black px-8 py-4 rounded-full inline-flex items-center gap-2 transition-colors"
        >
          Schedule Your Assessment
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}