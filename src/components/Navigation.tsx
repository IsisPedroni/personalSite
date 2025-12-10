import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import React from 'react';
import logoDuda from '../assets/logoDuda.png';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="cursor-pointer flex items-center" onClick={() => scrollToSection('hero')}>
            <img src={logoDuda} alt="Team Duda Bueno" className="h-10" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-white">
            <button onClick={() => scrollToSection('about')} className="hover:text-gray-300 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="hover:text-gray-300 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-gray-300 transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-gray-300 transition-colors">
              Cases
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-gray-300 transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 text-white">
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left hover:text-gray-300 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="block w-full text-left hover:text-gray-300 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="block w-full text-left hover:text-gray-300 transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="block w-full text-left hover:text-gray-300 transition-colors"
            >
              Cases
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block w-full text-left hover:text-gray-300 transition-colors"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}