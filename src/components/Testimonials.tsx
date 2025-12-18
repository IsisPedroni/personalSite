import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, PanInfo } from 'motion/react';
import { useState } from 'react';
import image19 from '../assets/4.jpeg';
import image20 from '../assets/5(11).jpeg';
import image21 from '../assets/3 (16).jpeg';
import image22 from '../assets/2 (19).jpeg';
import image23 from '../assets/5(12).jpeg';
import image24 from '../assets/5(13).jpeg';
import image25 from '../assets/5(14).jpeg';
import image26 from '../assets/5(15).jpeg';
import image27 from '../assets/5(16).jpeg';
import image28 from '../assets/5(18).jpeg';


export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const testimonials = [
    {
      name: 'Oscar',
      role: 'Results speak louder than words',
      text: 'When I met Duda, I had already been working out for 12 years but with his help I was able to leave my comfort zone and have intense workouts. In only six months, I improved my shoulders by 200%, my legs got big and lean, and for the first time, I was able to see muscles I did not even know I had. Additionally, Working out with duda is also fun. He keeps you motivated even when you wake up on the left side of your bed. Be ready to do lunges on inclined streets! You will feel like you are dying but believe me it is all worth it. Results speak louder than words. Life made me move to Los Angeles and I had to stop working out with him but I miss him so much. So guys when looking for a trainer in the San Diego area, Duda is the one.',
      rating: 5,
      image: image27
    },
    {
      name: 'Joe S.',
      role: 'A great trainer',
      text: 'Duda Bueno is a great trainer for all levels and ages. He is always kind, encouraging and motivating. Duda has a great understanding of the individual client\'s needs from the beginner to the pro bodybuilder. He can also help with diet and nutrition to support your training goals. His clients range in age as well as ability. And all are well taken care of under Duda\'s guidance. I trained with Duda for about 3 years and saw great gains and a better overall physique, in my 60s!',
      rating: 5
    },
    {
      name: 'Bruna T.',
      role: 'Best choice I\'ve made',
      text: 'Duda Bueno is an awesome personal trainer. Best choice I\'ve made training with him. He is very friendly, professional, motivational and perfectionist with performance. Always correcting your movements so you are sure it\'s a safe workout no matter what fitness level you\'re at. I really like he gives me tips about nutrition and my daily diet. Thank you Duda Bueno for pushing us in the right track!!!',
      rating: 5,
      image: image28
    },
    {
      name: 'Carol C.',
      role: 'I look and feel stronger and healthier',
      text: 'I\'ve never liked working out and couldn\'t stick with it...until I started training with Duda. He is very knowledgable, supportive and motivating. Thanks to Duda I look and feel stronger and healthier. He pushes me to work harder and I could never do that without him!',
      rating: 5,
      image: image20
    },
    {
      name: 'Edylson',
      role: '70 lbs in 6 months!',
      text: 'Mr. Duda Bueno is one of the best trainers I\'ve ever had in my life. Just remembered when I was 300 pounds weight and he took the challenge to make me change it. I reduced over 70 pounds in like 6 months my body became attractive again. Together a very hard workout I improved mu body muscles and it\'s been a pleasure to see. Thank you Mr. Duda, we\'ll do my workout together soon.',
      rating: 5,
      image: image19
    },
    {
      name: 'Bo',
      role: 'Gave me results',
      text: 'Training with Duda pushed me past my limits & gave me results. I thought I knew how to work out until I started training with him. Not only is he a fantastic trainer but also a great friend. He\'s been doing this for a long time & he practices what he preaches. Ps. It\'s growing time!',
      rating: 5
    },
    {
      name: 'Carolyn T.',
      role: 'It\'s Growing Time!',
      text: 'I met Duda through my brother and sister-in-law. They were training with him, and I saw their results and wanted that too! When we started to train, I was out of shape and overweight, had horrible eating habits, and was very weak. Duda, with his knowledge of nutrition, put me on an eating plan, and we been to work out. With his guidance, my body started to change fast. I was losing weight and gaining muscle. Not only that, but I started getting stronger. Not only physically but mentally because when you look good, you feel good! I moved out of San Diego, but the knowledge he gave me has helped me throughout the years. I\'ve met other trainers, but no one comes close to him. Duda cares about his clients; he listens to them, and when you feel like you can\'t do it, he pushes you through with encouragement. Thank you, Duda, for changing my life. "It\'s Growing time!"',
      rating: 5,
      image: image21
    },
    {
      name: 'Joseph P.',
      role: 'Best in San Diego',
      text: 'Let me tell you about Duda Bueno. Hands down the best trainer in San Diego. No, he doesn\'t carry a whistle and notebook to write numbers from his stopwatch. He literally looks at your body, listens to your goals and then uses his God given talent to crate a personal training program. If you are paying someone and not getting what you expect from a trainer, meet with Duda and see if he can change your life for good! He got me from 300 down to 190!',
      rating: 5,
      image: image22
    },
    {
      name: 'Luciano G.',
      role: 'Duda can transform you',
      text: 'Are you thinking U gonna die? Felling bad? Depression? Duda can help you like he helped me! Duda can transform you body, mindset and quit your depression! The hardest part of our workouts is showing up. He makes it simple for you to push yourself to be your personal best, and he gives you more. MORE results. MORE confidence. MORE Life. I really recommend.',
      rating: 5,
      image: image23
    },
    {
      name: 'Jerry G.',
      role: 'Walks the talk',
      text: 'I have been training on and off with Duda for ten years. I am 65 years of age, and he has tailored various programs for me depending on my age, my abilities, my goals, and my time commitment. Duda integrates nutrition and lifestyle changes into his individualized program. I appreciate that Duda is realistic and able to meet clients like me where I am at and considers my family and work commitments. Duda is relatable with a beautiful family. He is an authentic person and walks the talk.',
      rating: 5
    },
    {
      name: 'Mark S.',
      role: 'The Diet Matters',
      text: 'I have been training for years! so, I\'m strong, but my body wasn\'t changing... I had fat in my mid-section and it looked like I had pencils for legs. Working one on one with Duda and following his diet has greatly improved my body composition and my life! I now how muscular legs and a trim upper body with actual abs! I\'m so stoked!',
      rating: 5,
      image: image26
    },
    {
      name: 'Jennifer J.',
      role: 'The Real Deal',
      text: 'I trained with Duda online and am now in the best shape of my life! When I started I was overweight, by a lot, and now I\'m trim and fit! The best part is I can find cute clothes that fit me and I love to shop again! Thanks Duda!',
      rating: 5,
      image: image24
    },
    {
      name: 'Nate R.',
      role: 'Big Changes in a Short Time',
      text: 'With Duda\'s training and diet plan, I was able to lose 20 lbs. in a couple of months! His approach worked great for me, plus he\'s the nicest person.',
      rating: 5,
      image: image25
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

                      {testimonial.image && (
                        <div className="mb-4 flex justify-center items-center">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="rounded-lg  object-cover"
                            style={{ height: '400px', objectFit: 'cover', width: '90%' }}
                          />
                        </div>
                      )}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      <div className="mb-6">
                        <p
                          className={`text-gray-700 italic ${!isExpanded ? 'line-clamp-5' : ''
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
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-black w-8' : 'bg-gray-300'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}