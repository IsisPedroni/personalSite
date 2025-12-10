import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1745329532608-bbda3b742e00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBneW18ZW58MXx8fHwxNzY1MDI4Mzg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="mb-6 text-white">
          Transform Your Body,<br />Transform Your Life
        </h1>
        <p className="mb-8 text-xl opacity-90">
          Certified personal trainer in Santiago, USA - Customized training for your goals
        </p>
        <button 
          onClick={scrollToContact}
          className="bg-white hover:bg-gray-200 text-black px-8 py-4 rounded-full inline-flex items-center gap-2 transition-colors"
        >
          Schedule Your Assessment
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}