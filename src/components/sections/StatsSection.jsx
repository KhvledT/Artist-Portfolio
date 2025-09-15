import { useState, useEffect, useRef } from 'react';
import { Award, Users, Clock, Star, TrendingUp, Globe } from 'lucide-react';
import { workData } from '../../data';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    satisfaction: 0,
    countries: 0,
    awards: 0
  });
  const sectionRef = useRef(null);
  const { stats } = workData;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      stats.stats.forEach((stat, index) => {
        const targetValue = stat.value;
        const increment = targetValue / steps;
        let currentValue = 0;

        const timer = setInterval(() => {
          currentValue += increment;
          if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(timer);
          }

          setCounts(prev => ({
            ...prev,
            [stat.label.toLowerCase().replace(/\s+/g, '')]: Math.floor(currentValue)
          }));
        }, stepDuration + (index * 100)); // Stagger the animations
      });
    }
  }, [isVisible, stats.stats]);

  return (
    <section ref={sectionRef} className={`py-20 bg-gradient-to-br ${stats.background.gradient} text-white relative overflow-hidden`}>
      {/* Background Elements */}
      {stats.background.animations.floatingElements && (
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
      )}

      <div className="relative container-responsive">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            {stats.title.main}
            <span className={`block text-transparent bg-clip-text bg-gradient-to-r ${stats.title.highlightGradient}`}>
              {stats.title.highlight}
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl sm:max-w-3xl mx-auto">
            {stats.subtitle}
          </p>
        </div>

        {/* Stats Grid - Mobile 2-column */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {stats.stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group text-center p-4 sm:p-6 lg:p-8 bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${stat.color} rounded-full mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {(() => {
                  const iconMap = {
                    Award,
                    Users,
                    Clock,
                    Star,
                    Globe,
                    TrendingUp
                  };
                  const IconComponent = iconMap[stat.icon];
                  return IconComponent ? <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-white" /> : null;
                })()}
              </div>

              {/* Value */}
              <div className="mb-2 sm:mb-4">
                <span className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {isVisible ? counts[stat.label.toLowerCase().replace(/\s+/g, '')] : 0}
                </span>
                <span className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.suffix}</span>
              </div>

              {/* Label */}
              <h3 className="text-sm sm:text-base lg:text-xl font-semibold text-white mb-2 sm:mb-3">{stat.label}</h3>

              {/* Description - Hidden on mobile to save space */}
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed hidden sm:block">{stat.description}</p>

              {/* Progress Bar */}
              <div className="mt-3 sm:mt-4 lg:mt-6 w-full bg-white/20 rounded-full h-1 sm:h-2 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-2000 ease-out`}
                  style={{
                    width: isVisible ? '100%' : '0%',
                    transitionDelay: `${index * 200}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info - Hidden on mobile to save space */}
        <div className="mt-12 sm:mt-16 text-center hidden sm:block">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">
              Trusted by Creative Professionals Worldwide
            </h3>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl sm:max-w-3xl mx-auto">
              From individual artists to major galleries and international brands, my work has been recognized 
              and celebrated across diverse creative communities and industries.
            </p>
            
            {/* Achievement Badges */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-6 sm:mt-8">
              {[
                'Best Digital Artist 2023',
                'Innovation Award Winner',
                'Client Choice Award',
                'Creative Excellence Recognition'
              ].map((badge, index) => (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-white border border-white/30"
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
