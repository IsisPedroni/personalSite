import { Dumbbell, Calendar, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { User, Laptop, Users } from 'lucide-react';
import React from 'react';

export function Services() {
  const services = [
    {
      icon: User,
      title: 'One on One Private Training',
      price: '$75 / Session',
      description: 'One-on-one private training includes personalized attention and customized workouts.',
      features: [
        'A great workout!',
        'Discuss your diet and the best ways to get lean',
        'Discuss your goals and how to get you there'
      ]
    },
    {
      icon: Laptop,
      title: 'Online Training with check-ins',
      price: '$350 / Month',
      description: 'My online coaching system is customized to your exact needs. You\'ll share your lifestyle, habits, weight, height, and photos. I\'ll create an individualized nutrition and training plan. Daily weight check-ins via WhatsApp, with plan adjustments every two weeks based on your progress photos. The best part? If you\'re doing great and sticking to the plan, you\'ll get "cheat" meals 😁',
      features: [
        'Daily Check-ins',
        'Custom meal plan',
        'Text updates',
        'What to expect'
      ],
      paymentInfo: 'The cost for this service is $350 a month, and that is paid each month on the date you choose to start. You can pay with cash, Zelle, PayPal, or Venmo.'
    },
    {
      icon: Users,
      title: 'Group Training w/ small groups',
      price: '$45 / session',
      description: 'Group training sessions include hard workouts tailored for your needs in a positive and supportive environment.',
      features: [
        'Hard workout tailored for your needs',
        'Positive environment',
        'Motivation & support'
      ]
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
          <h2 className="mb-4 text-white">Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Professional training programs designed to help you achieve your fitness goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="bg-white text-black p-6 rounded-lg hover:scale-105 transition-transform duration-300 flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>

                <h3 className="mb-3 text-black">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm flex-grow">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => window.open('https://wa.me/18589524252', '_blank')}
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