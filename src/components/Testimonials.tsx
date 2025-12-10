import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, PanInfo } from 'motion/react';
import { useState } from 'react';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Lost 35 lbs in 4 months',
      text: 'Amazing! The personalized workouts and constant support helped me achieve results I never imagined. 100% recommend!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Gained 18 lbs of muscle',
      text: 'Extremely dedicated and knowledgeable professional. The workouts are challenging but very effective. aaaaaaaaaa aaaaaaaaaa aaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaBest investment I made in my health!',
      rating: 5
    },
    {
      name: 'Jessica Martinez',
      role: 'Improved overall fitness',
      text: 'After years of being sedentary, I finally found a trainer who understands my limitations and motivates me to overcome them. I\'m stronger and more confident!',
      rating: 5
    },
    {
      name: 'David Thompson',
      role: 'Marathon preparation',
      text: 'Prepared me perfectly for my first marathon. His knowledge in functional training and endurance is impressive!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lost 20 lbs in 3 months',
      text: 'The nutrition planning combined with personal training was exactly what I needed. I feel healthier and more energetic than ever!',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Improved strength & mobility',
      text: 'At 55, I thought I was too old to get in shape. This trainer proved me wrong! I\'m stronger now than I was in my 30s.',
      rating: 5
    }
  ];

  const itemsPerPage = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 2;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      prevSlide();
    } else if (info.offset.x < -threshold) {
      nextSlide();
    }
  };

  const toggleExpanded = (index: number) => {
    setExpandedCards((prev) => 
      prev.includes(index) 
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  const getGlobalIndex = (localIndex: number) => {
    return currentIndex * itemsPerPage + localIndex;
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what my clients say about their results
          </p>
        </motion.div>

        <div className="relative md:px-16">
          {/* Previous Button - Hidden on mobile, visible on desktop */}
          {/* <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black text-white rounded-full items-center justify-center hover:bg-gray-800 transition-colors"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={24} />
          </button> */}

          {/* Carousel Content */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className="grid md:grid-cols-2 gap-8 cursor-grab active:cursor-grabbing"
              >
                {visibleTestimonials.map((testimonial, index) => {
                  const globalIndex = getGlobalIndex(index);
                  const isExpanded = expandedCards.includes(globalIndex);
                  
                  return (
                    <div key={index} className="bg-gray-50 p-6 md:p-8 rounded-lg relative">
                      <Quote className="absolute top-4 right-4 text-black opacity-20" size={40} />
                      
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      <div className="mb-6">
                        <p 
                          className={`text-gray-700 italic ${
                            !isExpanded ? 'line-clamp-5' : ''
                          }`}
                        >
                          "{testimonial.text}"
                        </p>
                        
                        {testimonial.text.length > 200 && (
                          <button
                            onClick={() => toggleExpanded(globalIndex)}
                            className="text-black hover:text-gray-700 text-sm mt-2 underline"
                          >
                            {isExpanded ? 'Read less' : 'Read more'}
                          </button>
                        )}
                      </div>

                      <div>
                        <div className="text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-black">{testimonial.role}</div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Button - Hidden on mobile, visible on desktop */}
          {/* <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black text-white rounded-full items-center justify-center hover:bg-gray-800 transition-colors"
            aria-label="Next testimonials"
          >
            <ChevronRight size={24} />
          </button> */}

          {/* Mobile Navigation Arrows - Small and at bottom */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            {/* <button
              onClick={prevSlide}
              className="w-10 h-10 bg-gray-200 text-black rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-gray-200 text-black rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight size={20} />
            </button> */}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-black w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}