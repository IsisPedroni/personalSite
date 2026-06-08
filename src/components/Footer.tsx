import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import React, { useState } from 'react';
import logoDuda from '../assets/logoDuda.png';
import { scrollToSection } from '../utils/scrollToSection';

const PHONE_DISPLAY = '+1 858 952 4252';
const PHONE_TEL = '+18589524252';

export function Footer() {
  const [copied, setCopied] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PHONE_DISPLAY);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const motionProps = (delay = 0) => ({
    initial: prefersReducedMotion ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : delay },
  });

  return (
    <footer id="contact" tabIndex={-1} aria-labelledby="contact-heading" className="bg-black text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...motionProps()}>
          <h2 id="contact-heading" className="text-white mb-4">Get In Touch</h2>
          <p className="text-a11y-muted max-w-2xl mx-auto mb-8">
            San Diego, It's Growing Time!
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            <motion.div
              className="bg-gray-900 p-6 rounded-lg text-center flex flex-col items-center w-full"
              {...motionProps(0.2)}
            >
              <Phone className="text-white mb-3" size={28} aria-hidden="true" />
              <div className="text-white mb-2">Phone</div>
              <a
                href={`tel:${PHONE_TEL}`}
                className="text-a11y-muted hover:text-white transition-colors mb-3"
              >
                {PHONE_DISPLAY}
              </a>
              <button
                type="button"
                onClick={copyPhone}
                aria-label={`Copy phone number ${PHONE_DISPLAY} to clipboard`}
                className="text-sm text-white underline hover:no-underline"
              >
                Copy number
              </button>
              <div aria-live="polite" aria-atomic="true" className="sr-only">
                {copied ? 'Phone number copied to clipboard' : ''}
              </div>
              <AnimatePresence>
                {copied && (
                  <motion.div
                    initial={prefersReducedMotion ? false : { opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
                    aria-hidden="true"
                    className="mt-2 text-green-400 text-sm"
                  >
                    Copied!
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div className="bg-gray-900 p-6 rounded-lg text-center flex flex-col items-center w-full" {...motionProps(0.3)}>
              <Mail className="text-white mb-3" size={28} aria-hidden="true" />
              <div className="text-white mb-2">Email</div>
              <a href="mailto:dudabuenofitness@gmail.com" className="text-a11y-muted hover:text-white transition-colors break-all">
                dudabuenofitness@gmail.com
              </a>
            </motion.div>

            <motion.div className="bg-gray-900 p-6 rounded-lg text-center flex flex-col items-center w-full" {...motionProps(0.1)}>
              <MapPin className="text-white mb-3" size={28} aria-hidden="true" />
              <div className="text-white mb-2">Location</div>
              <p className="text-a11y-muted text-sm">San Diego, California, USA</p>
            </motion.div>
          </div>

          <motion.div {...motionProps(0.4)}>
            <div className="text-white mb-4">Follow Us</div>
            <div className="flex justify-center gap-4">
              <a
                href="https://instagram.com/dudabuenofitness"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Duda Bueno on Instagram (opens in new tab)"
                className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Instagram size={20} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 pt-12 border-t border-gray-800">
          <div className="md:col-span-1">
            <img src={logoDuda} alt="Team Duda Bueno - Personal Trainer San Diego" className=" mb-4" width="100" height="40" />
            <p className="text-a11y-muted text-sm">
              Transforming lives through personalized fitness training in San Diego, USA.
            </p>
          </div>

          <nav aria-label="Footer quick links">
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { id: 'about', label: 'About' },
                { id: 'services', label: 'Services' },
                { id: 'testimonials', label: 'Testimonials' },
                { id: 'gallery', label: 'Transformations' },
              ].map(({ id, label }) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(id)}
                    className="text-a11y-muted hover:text-white transition-colors text-sm"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-a11y-subtle text-sm">
            <p>&copy; {new Date().getFullYear()} Team Duda Bueno. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
