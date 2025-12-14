import React from 'react';
import { Award, Target, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/dudaBueno.jpeg';

export function About() {

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
              Hi, I'm Duda Bueno—a personal trainer originally from Brazil and proudly based in San Diego for more than 25 years. With over 30 years of experience coaching clients of all ages and fitness levels, my mission is to help you build real, lasting strength and health from the inside out.            </p>
            <p className="mb-8 text-gray-700">
              I competed in bodybuilding for over 10 years and know what it takes to get you to ANY desired level.
              With the knowledge I have gained from both school and personal experiences I have supported countless clients through full body transformations using personalized training and tailored nutrition programs.
              I work with all levels of clients from someone that may be their first time training to another that is at a competition level and wants to get on a stage.
              Through them all, I thrive on helping you get HEALTHY so you're not only looking great but feeling better more than anything else!            </p>

           
          </motion.div>
        </div>
      </div>
    </section>
  );
}