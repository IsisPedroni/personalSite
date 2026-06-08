import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import bannerImage from '../assets/logoDuda.png';

const PHONE_DISPLAY = '+1 858 952 4252';
const PHONE_TEL = '+18589524252';

export function Hero() {
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

  return (
    <section id="hero" tabIndex={-1} aria-labelledby="hero-heading" className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.3)'
        }}
      />

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 id="hero-heading" className="mb-6 hero-heading" style={{ fontSize: '24px', fontWeight: 'bold' }}>
          ELEVATE YOUR FITNESS JOURNEY
        </h1>
        <p className="mb-8 text-base hero-subtext">
          Embark on your fitness journey with expert guidance and state-of-the-art equipment that gets you RESULTS. Iprovide personalized training and diet plans to transform your total health and overall well-being so you can look and feel your best at any age.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full max-w-xl mx-auto">
          <a
            href={`tel:${PHONE_TEL}`}
            className="bg-white hover:bg-gray-200 text-black px-6 py-3 sm:px-8 sm:py-4 rounded-full inline-flex items-center justify-center gap-2 transition-colors font-medium max-w-full text-center"
          >
            Call: {PHONE_DISPLAY}
          </a>
          <div className="relative w-full sm:w-auto">
            <button
              type="button"
              onClick={copyPhone}
              aria-label={`Copy phone number ${PHONE_DISPLAY} to clipboard`}
              className="w-full sm:w-auto border-2 border-white hover:bg-white/10 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full inline-flex items-center justify-center gap-2 transition-colors"
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
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap"
                >
                  Copied!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
