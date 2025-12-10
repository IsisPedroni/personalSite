import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import logo from 'figma:asset/c00da63e1c0581c4cc56aa08421be0170971bc46.png';
import { motion } from 'framer-motion';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white mb-4">Get In Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Ready to transform your life? Schedule your free assessment today!
          </p>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            <motion.div 
              className="bg-gray-900 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <MapPin className="text-white mx-auto mb-3" size={28} />
              <div className="text-white mb-2">Location</div>
              <p className="text-gray-300 text-sm">Santiago, California, USA</p>
            </motion.div>

            <motion.div 
              className="bg-gray-900 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Phone className="text-white mx-auto mb-3" size={28} />
              <div className="text-white mb-2">Phone</div>
              <p className="text-gray-300 text-sm">+1 (555) 123-4567</p>
            </motion.div>

            <motion.div 
              className="bg-gray-900 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Mail className="text-white mx-auto mb-3" size={28} />
              <div className="text-white mb-2">Email</div>
              <p className="text-gray-300 text-sm">contact@dudabueno.com</p>
            </motion.div>
          </div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-white mb-4">Follow Us</div>
            <div className="flex justify-center gap-4">
              <a 
                href="#" 
                className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Instagram size={20} />
              </a>
             
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 pt-12 border-t border-gray-800">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <img src={logo} alt="Team Duda Bueno" className="h-10 mb-4" />
            <p className="text-gray-300 text-sm">
              Transforming lives through personalized fitness training in Santiago, USA.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Cases
                </button>
              </li>
            </ul>
          </div>

          {/* Hours */}
   
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Team Duda Bueno. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}