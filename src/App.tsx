import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { MyBuilder } from './components/MyBuilder';
import { TrainingClients } from './components/TrainingClients';
import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <MyBuilder />
      <Services />
      <Testimonials />
      <TrainingClients />
      <Gallery />
      <Footer />
    </div>
  );
}