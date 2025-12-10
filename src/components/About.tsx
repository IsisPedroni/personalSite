import React from 'react';
import { Award, Target, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export function About() {
  const stats = [
    { icon: Award, label: 'Years of Experience', value: '10+' },
    { icon: Users, label: 'Clients Trained', value: '500+' },
    // { icon: Target, label: 'Success Rate', value: '95%' },
    // { icon: TrendingUp, label: 'Certifications', value: '8' }
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
              src="https://images.unsplash.com/photo-1734189605012-f03d97a4d98f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5pbmclMjB3b3Jrb3V0fGVufDF8fHx8MTc2NTAzMjA3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Personal Trainer"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
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
              Hi! I'm a certified personal trainer with over 10 years of experience helping people achieve their fitness goals in Santiago, USA.
            </p>
            <p className="mb-4 text-gray-700">
              My mission is to transform lives through personalized exercise, proper nutrition, and constant motivation. I believe that each person is unique and deserves a training plan adapted to their specific needs.
            </p>
            <p className="mb-8 text-gray-700">
              Specialized in weight loss, muscle gain, athletic conditioning, and functional training. Let's build the best version of you together!
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