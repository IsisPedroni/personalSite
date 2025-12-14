import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bannerImage from '../assets/logoDuda.png';

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copyPhone = async () => {
    const phoneNumber = '+1 858 952 4252';
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center">
      {/* <div className="absolute inset-0 bg-black"></div> */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.3)'
        }}
      >
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h6 className="mb-6" style={{ color: '#B5E6FE', fontSize: '24px', fontWeight: 'bold' }}>
          ELEVATE YOUR FITNESS JOURNEY
        </h6>
        <p className="mb-8 text-base opacity-90">
          Embark on your fitness journey with expert guidance and state-of-the-art equipment that gets you RESULTS. Iprovide personalized training and diet plans to transform your total health and overall well-being so you can look and feel your best at any age.        </p>
        <div className="relative inline-block">
          <button
            onClick={copyPhone}
            className="bg-white hover:bg-gray-200 text-black px-8 py-4 rounded-full inline-flex items-center gap-2 transition-colors"
          >
            Phone: +1 858 952 4252
          </button>
          <AnimatePresence>
            {copied && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap"
              >
                Copied!
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}