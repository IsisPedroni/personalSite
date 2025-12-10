import { Dumbbell, Users, Calendar, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export function Services() {
  const services = [
    {
      icon: Dumbbell,
      title: 'Personal Training',
      description: 'One-on-one customized workout sessions tailored to your specific goals and fitness level.',
      features: ['Custom workout plans', 'Nutrition guidance', 'Progress tracking']
    },
    {
      icon: Users,
      title: 'Group Training',
      description: 'High-energy group sessions that combine motivation, accountability, and community support.',
      features: ['Small group sizes', 'Fun & challenging', 'Affordable pricing']
    },
    {
      icon: Calendar,
      title: 'Online Coaching',
      description: 'Remote training programs with personalized workouts and video consultations from anywhere.',
      features: ['Flexible scheduling', 'Video check-ins', 'App-based tracking']
    },
    // {
    //   icon: Target,
    //   title: 'Nutrition Planning',
    //   description: 'Customized meal plans and nutritional guidance to complement your training and maximize results.',
    //   features: ['Meal planning', 'Macro tracking', 'Lifestyle coaching']
    // }
  ];

  const scrollToContact = () => {
    const footer = document.querySelector('footer');
    footer?.scrollIntoView({ behavior: 'smooth' });
  };

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  onClick={scrollToContact}
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