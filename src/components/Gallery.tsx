import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, X, Play } from 'lucide-react';
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
import video1 from '../assets/2 (1).mp4';
import video2 from '../assets/2 (2).mp4';
import video3 from '../assets/2 (3).mp4';
import video4 from '../assets/2 (4).mp4';
import video5 from '../assets/2 (5).mp4';

export function Gallery() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

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
      url: image11,
      alt: 'Fitness coaching',
      type: 'image'
    },
    {
      url: image12,
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
    {
      url: newImage2,
      alt: 'Fitness transformation',
      type: 'image'
    },
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
      url: video1,
      alt: 'Fitness video',
      type: 'video'
    },
    {
      url: video2,
      alt: 'Fitness video',
      type: 'video'
    },
    {
      url: video3,
      alt: 'Fitness video',
      type: 'video'
    },
    {
      url: video4,
      alt: 'Fitness video',
      type: 'video'
    },
    {
      url: video5,
      alt: 'Fitness video',
      type: 'video'
    },
  ];

  const displayedImages = allImages.slice(0, 6);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedVideo) {
          setSelectedVideo(null);
        } else if (isGalleryOpen) {
          setIsGalleryOpen(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isGalleryOpen, selectedVideo]);

  useEffect(() => {
    if (isGalleryOpen || selectedVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isGalleryOpen, selectedVideo]);

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
              onClick={() => {
                if (image.type === 'video') {
                  setSelectedVideo(image.url);
                } else {
                  setIsGalleryOpen(true);
                }
              }}
            >
              {image.type === 'video' ? (
                <>
                  <video
                    src={image.url}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 pointer-events-none"
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-white bg-opacity-80 rounded-full p-4 group-hover:scale-110 transition-transform shadow-lg pointer-events-none">
                      <Play className="text-black" size={32} fill="black" />
                    </div>
                  </div>
                </>
              ) : (
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              )}
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
                    onClick={() => {
                      if (image.type === 'video') {
                        setIsGalleryOpen(false);
                        setSelectedVideo(image.url);
                      }
                    }}
                  >
                    {image.type === 'video' ? (
                      <>
                        <video
                          src={image.url}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 pointer-events-none"
                          muted
                          loop
                          playsInline
                        />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="bg-white bg-opacity-80 rounded-full p-3 group-hover:scale-110 transition-transform shadow-lg pointer-events-none">
                            <Play className="text-black" size={24} fill="black" />
                          </div>
                        </div>
                      </>
                    ) : (
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black bg-opacity-80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            style={{ zIndex: 9999 }}
          >
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors z-10"
                aria-label="Close video"
              >
                <X size={32} />
              </button>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-black rounded-lg overflow-hidden"
              >
                <video
                  src={selectedVideo}
                  className="w-full h-auto max-h-[80vh] rounded-lg"
                  controls
                  autoPlay
                  playsInline
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}