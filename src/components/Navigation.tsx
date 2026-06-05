import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import React from 'react';
import logoDuda from '../assets/logoPreto.png';
import { scrollToSection } from '../utils/scrollToSection';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'gallery', label: 'Transformations' },
  { id: 'contact', label: 'Contact' },
] as const;

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id: string) => {
    scrollToSection(id, () => setIsOpen(false));
  };

  return (
    <nav aria-label="Main navigation" className="fixed top-0 w-full bg-white backdrop-blur-sm z-50 shadow-sm zIndex-999">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            type="button"
            onClick={() => handleNavClick('hero')}
            className="flex items-center cursor-pointer"
            aria-label="Team Duda Bueno — go to top"
          >
            <img src={logoDuda} alt="" className="h-10" width="120" height="40" />
          </button>

          <ul className="hidden md:flex gap-8 text-black list-none">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(id)}
                  className="hover:text-gray-600 transition-colors"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="md:hidden text-black"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {isOpen && (
          <div id="mobile-menu" className="md:hidden py-4 space-y-4 text-black">
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => handleNavClick(id)}
                className="block w-full text-left hover:text-gray-600 transition-colors"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
