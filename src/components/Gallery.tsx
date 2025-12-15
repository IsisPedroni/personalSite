import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, X } from 'lucide-react';
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
import image19 from '../assets/4.jpeg';
import newImage1 from '../assets/2 (1).jpeg';
import newImage2 from '../assets/2 (2).jpeg';
import newImage3 from '../assets/2 (3).jpeg';
import newImage4 from '../assets/2 (4).jpeg';
import newImage5 from '../assets/2 (5).jpeg';
import newImage6 from '../assets/2 (6).jpeg';
import newImage7 from '../assets/2 (7).jpeg';
import newImage8 from '../assets/2 (8).jpeg';
import newImage9 from '../assets/2 (9).jpeg';
import newImage10 from '../assets/2 (10).jpeg';
import newImage11 from '../assets/2 (11).jpeg';
import newImage12 from '../assets/2 (12).jpeg';
import newImage13 from '../assets/2 (13).jpeg';
import newImage14 from '../assets/2 (14).jpeg';
import newImage15 from '../assets/2 (15).jpeg';
import newImage16 from '../assets/2 (16).jpeg';
import newImage17 from '../assets/2 (17).jpeg';
import newImage18 from '../assets/2 (18).jpeg';
import newImage19 from '../assets/2 (19).jpeg';
import newImage20 from '../assets/2 (20).jpeg';
import newImage21 from '../assets/2 (21).jpeg';
import image3_1 from '../assets/3 (1).jpeg';
import image3_2 from '../assets/3 (2).jpeg';
import image3_3 from '../assets/3 (3).jpeg';
import image3_4 from '../assets/3 (4).jpeg';
import image3_5 from '../assets/3 (5).jpeg';
import image3_6 from '../assets/3 (6).jpeg';
import image3_7 from '../assets/3 (7).jpeg';
import image3_8 from '../assets/3 (8).jpeg';
import image3_9 from '../assets/3 (9).jpeg';
import image3_10 from '../assets/3 (10).jpeg';
import image3_11 from '../assets/3 (11).jpeg';
import image3_12 from '../assets/3 (12).jpeg';
import image3_13 from '../assets/3 (13).jpeg';
import image3_14 from '../assets/3 (14).jpeg';
import image3_15 from '../assets/3 (15).jpeg';
import image3_16 from '../assets/3 (16).jpeg';
import image3_17 from '../assets/3 (17).jpeg';
import image3_18 from '../assets/3 (18).jpeg';
import image3_19 from '../assets/3 (19).jpeg';
import image3_20 from '../assets/3 (20).jpeg';
import image3_21 from '../assets/3 (21).jpeg';
import image3_22 from '../assets/3 (22).jpeg';
import image3_23 from '../assets/3 (23).jpeg';
import image3_24 from '../assets/3 (24).jpeg';
import image3_25 from '../assets/3 (25).jpeg';
import image3_26 from '../assets/3 (26).jpeg';
import image3_27 from '../assets/3 (27).jpeg';
import image3_28 from '../assets/3 (28).jpeg';
import image3_29 from '../assets/3 (29).jpeg';
import image5 from '../assets/5.jpeg';

export function Gallery() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const allImages = [

    {
      url: image7,
      alt: 'Gym session',
      type: 'image'
    },
    {
      url: image8,
      alt: 'Fitness coaching',
      type: 'image'
    },
    {
      url: image9,
      alt: 'Fitness coaching',
      type: 'image'
    },
    {
      url: image10,
      alt: 'Fitness coaching',
      type: 'image'
    },
    {
      url: image13,
      alt: 'Fitness coaching',
      type: 'image'
    },
    {
      url: image14,
      alt: 'Fitness coaching',
      type: 'image'
    },
    {
      url: image15,
      alt: 'Fitness coaching',
      type: 'image'
    },
    {
      url: image16,
      alt: 'Fitness coaching',
      type: 'image'
    },
    {
      url: image17,
      alt: 'Fitness coaching',
      type: 'image'
    },
    {
      url: image18,
      alt: 'Fitness coaching',
      type: 'image'
    },
    {
      url: image19,
      alt: 'Fitness coaching',
      type: 'image'
    },
    {
      url: newImage1,
      alt: 'Fitness transformation',
      type: 'image'
    },
    // {
    //   url: newImage2,
    //   alt: 'Fitness transformation',
    //   type: 'image'
    // },
    {
      url: newImage3,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: newImage4,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: newImage5,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: newImage6,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: newImage7,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: newImage8,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: newImage9,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: newImage10,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: newImage11,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: newImage12,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: newImage13,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: newImage14,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: newImage15,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: newImage16,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: newImage17,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: newImage18,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: newImage19,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: newImage20,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: newImage21,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: image3_1,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: image3_2,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: image3_3,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: image3_4,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: image3_5,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: image3_6,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: image3_7,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: image3_8,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: image3_9,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: image3_10,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: image3_11,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: image3_12,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: image3_13,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: image3_14,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: image3_15,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: image3_16,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: image3_17,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: image3_18,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: image3_19,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: image3_20,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: image3_21,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: image3_22,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: image3_23,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: image3_24,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: image3_25,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: image3_26,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: image3_27,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: image3_28,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: image3_29,
      alt: 'Fitness transformation',
      type: 'image'
    },
    {
      url: image5,
      alt: 'Fitness transformation',
      type: 'image'
    },
  ];

  const displayedImages = allImages.slice(0, 6);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isGalleryOpen) {
        setIsGalleryOpen(false);
      }
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
            <div className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center p-6 bg-black bg-opacity-90 backdrop-blur-sm">
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
            <div className="max-w-7xl mx-auto px-4 py-8 pt-24">
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