import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { MyBuilder } from './components/MyBuilder';
import { TrainingClients } from './components/TrainingClients';
import { AccessibilityWidget } from './components/AccessibilityWidget';
import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="skip-links">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <a href="#contact" className="skip-link skip-link-contact">
          Skip to contact
        </a>
      </div>
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <MyBuilder />
        <Services />
        <Testimonials />
        <TrainingClients />
        <Gallery />
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  );
}
