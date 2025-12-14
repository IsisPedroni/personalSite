import { ArrowRight } from 'lucide-react';
import bannerImage from '../assets/logoDuda.png';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-black"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.3)'
        }}
      >
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h6 className="mb-6" style={{ color: '#B5E6FE', fontSize: '24px', fontWeight: 'bold' }}>
          ELEVATE YOUR FITNESS JOURNEY
        </h6>
        <p className="mb-8 text-base opacity-90">
          Embark on your fitness journey with expert guidance and state-of-the-art equipment that gets you RESULTS. Iprovide personalized training and diet plans to transform your total health and overall well-being so you can look and feel your best at any age.        </p>
        <button
          onClick={() => scrollToSection('contact')}
          className="bg-white hover:bg-gray-200 text-black px-8 py-4 rounded-full inline-flex items-center gap-2 transition-colors"
        >
          Phone: 858-952-4252
          {/* <ArrowRight size={20} /> */}
        </button>
      </div>
    </section>
  );
}