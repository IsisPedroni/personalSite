import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, X } from 'lucide-react';
import image2 from '../assets/1 (2).jpg';
import image7 from '../assets/1 (7).jpg';
import image8 from '../assets/1 (8).jpg';
import image9 from '../assets/1 (9).jpg';
import image10 from '../assets/1 (10).jpg';
import image11 from '../assets/1 (11).jpg';
import image12 from '../assets/1 (12).jpg';
import image13 from '../assets/1 (13).jpg';
import image14 from '../assets/1 (14).jpg';
import image15 from '../assets/1 (15).jpg';
import image16 from '../assets/1 (16).jpg';
import image17 from '../assets/1 (17).jpg';
import image18 from '../assets/1 (18).jpg';
import image19 from '../assets/1 (19).jpg';

export function Gallery() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const allImages = [
    {
      url: image2,
      alt: 'Weight lifting'
    },
    {
      url: image7,
      alt: 'Gym session'
    },
    {
      url: image8,
      alt: 'Fitness coaching'
    },
    {
      url: image9,
      alt: 'Fitness coaching'
    },
    {
      url: image10,
      alt: 'Fitness coaching'
    },
    {
      url: image11,
      alt: 'Fitness coaching'
    },
    {
      url: image12,
      alt: 'Fitness coaching'
    },
    {
      url: image13,
      alt: 'Fitness coaching'
    },
    {
      url: image14,
      alt: 'Fitness coaching'
    },
    {
      url: image15,
      alt: 'Fitness coaching'
    },
    {
      url: image16,
      alt: 'Fitness coaching'
    },
    {
      url: image17,
      alt: 'Fitness coaching'
    },
    {
      url: image18,
      alt: 'Fitness coaching'
    },
    {
      url: image19,
      alt: 'Fitness coaching'
    },
  ];

  const displayedImages = allImages.slice(0, 6);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isGalleryOpen) return;
      if (e.key === 'Escape') setIsGalleryOpen(false);
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isGalleryOpen]);

  useEffect(() => {
    if (isGalleryOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isGalleryOpen]);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">Transformations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out some moments from our training sessions and transformations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setIsGalleryOpen(true)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={() => setIsGalleryOpen(true)}
            className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-all hover:scale-110"
            aria-label="Open gallery"
          >
            <Plus size={32} />
          </button>
        </motion.div>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ height: '100vh', overflowY: 'auto' }}
          >
            {/* Header with close button */}
            <div className="sticky top-0 z-10 flex justify-between items-center p-6 bg-black bg-opacity-90 backdrop-blur-sm">
              <h3 className="text-white text-2xl font-bold">Full Gallery</h3>
              <button
                onClick={() => setIsGalleryOpen(false)}
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Close gallery"
              >
                <X size={32} />
              </button>
            </div>

            {/* Grid with scroll */}
            <div className="max-w-7xl mx-auto px-4 py-8">
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                {allImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}