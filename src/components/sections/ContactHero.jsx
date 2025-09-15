import { useState, useEffect } from 'react';
import { Mail, MessageCircle, Phone, ArrowRight, Sparkles, Clock, CheckCircle, Star } from 'lucide-react';
import { contactData } from '../../data';

const ContactHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { contactHero } = contactData;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % contactHero.testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [contactHero.testimonials.length]);

  return (
    <section className={`relative bg-gradient-to-br ${contactHero.background.gradient} text-white py-24 overflow-hidden`}>
      {/* Animated Background Elements */}
      {contactHero.background.animations.floatingElements && (
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10"> 
        <div className="text-center space-y-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              {contactHero.title.main}
              <span className={`block text-transparent bg-clip-text bg-gradient-to-r ${contactHero.title.highlightGradient} animate-pulse`}>
                {contactHero.title.highlight}
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
              {contactHero.subtitle}
            </p>
          </div>

          {/* Testimonial Carousel - Hidden on mobile */}
          <div className={`hidden sm:block transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
              <div className="flex items-center justify-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg italic text-gray-200 mb-2">
                "{contactHero.testimonials[currentTestimonial]}"
              </p>
              <p className="text-sm text-gray-400">- Happy Client</p>
            </div>
          </div>
          
          {/* Quick Contact Options */}
          <div className={`hidden sm:flex flex-wrap justify-center gap-6 pt-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {contactHero.quickActions.map((action, index) => {
              const iconMap = {
                Mail,
                Phone,
                MessageCircle
              };
              const IconComponent = iconMap[action.icon];
              return (
                <a
                  key={index}
                  href={action.action}
                  className={`group flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 ${action.bgColor}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`p-2 rounded-lg ${action.bgColor}`}>
                    <IconComponent className={`h-6 w-6 ${action.color}`} />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-gray-300">{action.title}</div>
                    <div className="font-semibold text-white">{action.subtitle}</div>
                    <div className="text-xs text-gray-400">{action.description}</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                </a>
              );
            })}
          </div>

          {/* Trust Indicators - Hidden on mobile */}
          <div className={`hidden sm:flex flex-wrap justify-center gap-8 pt-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {contactHero.trustIndicators.map((indicator, index) => {
              const iconMap = {
                CheckCircle,
                Clock,
                Sparkles
              };
              const IconComponent = iconMap[indicator.icon];
              return (
                <div key={index} className="flex items-center space-x-2 text-gray-300">
                  <IconComponent className={`h-5 w-5 ${indicator.color}`} />
                  <span className="text-sm">{indicator.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
