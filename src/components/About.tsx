import React from 'react';
import { Award, Target, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/dudaBueno.jpeg';

export function About() {
  const stats = [
    { icon: Award, label: 'Years of Experience', value: '30+' },
    // { icon: Users, label: 'Clients Trained', value: '500+' },

  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={aboutImage}
              alt="Personal Trainer"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover object-top"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6">About Me</h2>
            <p className="mb-4 text-gray-700">
              My name is Duda Bueno and I'm a personal trainer born and raised in Brazil. I have been in San Diego for 20+ years and I've been training people of all ages and levels for 30 years. I was a competitive bodybuilder for 10 years and I am also a prep coach for bodybuilders, figure, bikini and classic physique competitors. I have done, as you can see on my website and Instagram, many body transformations with personalized diet plans and training.
            </p>
            <p className="mb-8 text-gray-700">
              I offer one on one personal training, Group training, and online training programs that include diet and workout plans. It doesn't matter what your age or "genetics," I can help you to be stronger and healthier to have a better quality of life!
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center p-4 bg-white rounded-lg shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Icon className="mx-auto mb-2 text-black" size={32} />
                    <div className="text-black mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}