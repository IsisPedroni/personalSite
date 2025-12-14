import { motion } from 'framer-motion';
import React from 'react';
import pesoImage from '../assets/peso.webp';
import weightImage from '../assets/weight.jpg';
import haletresImage from '../assets/haletres.webp';

export function Services() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      image: pesoImage,
      title: '1 hour Group Session',
      price: '$45.00',
      description: 'Thie is great for anyone that likes to train with others and get that extra motivation through a group training session. Groups can be anywhere from 2 to 5 people at a time.',

    },
    {
      image: haletresImage,
      title: '1 hour Single Session',
      price: '$75.00',
      description: 'This is a great option if yout looking for a one on one private session to focus on specific area or goals.',
    },
    {
      image: weightImage,
      title: 'Online Diet & Workout Plan',
      price: '$350.00',
      description: "Can't make it to the gym or don't live in San Diego? No problem! I offer a monthly plan where I can coach you anywhere in the world with daily/weekly check ins and I will provide a customized diet plan and workout that caters to your specific goals and needs.",

    }
  ];

  return (
    <section id="services" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-white text-4xl font-bold">Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Professional training programs designed to help you achieve your fitness goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            return (
              <motion.div
                key={index}
                className="bg-white text-black p-6 rounded-lg hover:scale-105 transition-transform duration-300 flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-full rounded-lg overflow-hidden mb-4" style={{ height: '256px' }}>
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" style={{ height: '100%', width: '100%' }} />
                </div>

                <h3 className="mb-3 text-black">{service.title}</h3>
                <p className="text-black-700 mb-4 text-xm font-bold">
                  {service.price}
                </p>


                <p className="text-gray-600 mb-4 text-sm flex-grow">
                  {service.description}
                </p>




                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg transition-colors mt-auto"
                >
                  Contact
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}