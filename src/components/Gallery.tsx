import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import React from 'react';

export function Gallery() {
  const [showAll, setShowAll] = useState(false);
  
  const allImages = [
    {
      url: 'https://images.unsplash.com/photo-1620188540300-c156a625c6fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBlcXVpcG1lbnQlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjUwMzA5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Training equipment'
    },
    {
      url: 'https://images.unsplash.com/photo-1606328500899-38351f33df8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWlnaHQlMjBsaWZ0aW5nJTIwZml0bmVzc3xlbnwxfHx8fDE3NjUxMTA1OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Weight lifting'
    },
    {
      url: 'https://images.unsplash.com/photo-1652191090258-5a2df9ad6723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwZml0bmVzcyUyMHRyYWluaW5nfGVufDF8fHx8MTc2NTExMDU5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Outdoor training'
    },
    {
      url: 'https://images.unsplash.com/photo-1739430548261-ccb06b55501c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluaW5nJTIwc2Vzc2lvbnxlbnwxfHx8fDE3NjUwMjc4NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Training session'
    },
    {
      url: 'https://images.unsplash.com/photo-1734189605012-f03d97a4d98f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5pbmclMjB3b3Jrb3V0fGVufDF8fHx8MTc2NTAzMjA3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Fitness workout'
    },
    {
      url: 'https://images.unsplash.com/photo-1745329532608-bbda3b742e00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBneW18ZW58MXx8fHwxNzY1MDI4Mzg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Gym training'
    },
    {
      url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjUwMjgzODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Gym session'
    },
    {
      url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwY29hY2hpbmd8ZW58MXx8fHwxNzY1MDI4Mzg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Fitness coaching'
    },
    
  ];

  const displayedImages = showAll ? allImages : allImages.slice(0, 6);

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
          <h2 className="mb-4">Cases</h2>
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
            >
              <img 
                src={image.url} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button
              onClick={() => setShowAll(true)}
              className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-all hover:scale-110"
              aria-label="Load more photos"
            >
              <Plus size={32} />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}