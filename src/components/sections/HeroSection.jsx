import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { homeData } from '../../data';

const HeroSection = () => {
  const { hero } = homeData;

  return (
    <section className={`relative h-screen overflow-hidden bg-gradient-to-b ${hero.background.gradient} text-white`}>
      {/* Animated Water Waves */}
      {hero.background.animations.waves && (
        <div className="absolute inset-0">
          {/* Wave 1 */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cyan-500/30 to-transparent animate-wave-1 rounded-t-full blur-[1px]"></div>
          {/* Wave 2 */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-blue-500/40 to-transparent animate-wave-2 rounded-t-full blur-[0.5px]"></div>
          {/* Wave 3 */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-cyan-400/50 to-transparent animate-wave-3 rounded-t-full"></div>
        </div>
      )}
      
      {/* Animated Bubbles */}
      {hero.background.animations.bubbles && (
        <div className="absolute inset-0">
          {/* Bubble 1 */}
          <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-gradient-to-br from-white/30 to-white/10 rounded-full animate-bubble-1 shadow-lg shadow-cyan-500/20"></div>
          {/* Bubble 2 */}
          <div className="absolute bottom-32 left-1/3 w-6 h-6 bg-gradient-to-br from-white/25 to-white/8 rounded-full animate-bubble-2 shadow-lg shadow-blue-500/20"></div>
          {/* Bubble 3 */}
          <div className="absolute bottom-16 left-2/3 w-3 h-3 bg-gradient-to-br from-white/35 to-white/12 rounded-full animate-bubble-3 shadow-md shadow-cyan-400/25"></div>
          {/* Bubble 4 */}
          <div className="absolute bottom-40 left-3/4 w-5 h-5 bg-gradient-to-br from-white/28 to-white/9 rounded-full animate-bubble-4 shadow-lg shadow-blue-400/20"></div>
          {/* Bubble 5 */}
          <div className="absolute bottom-24 left-1/6 w-4 h-4 bg-gradient-to-br from-white/32 to-white/11 rounded-full animate-bubble-5 shadow-md shadow-cyan-300/25"></div>
          {/* Bubble 6 */}
          <div className="absolute bottom-36 left-5/6 w-3 h-3 bg-gradient-to-br from-white/22 to-white/7 rounded-full animate-bubble-6 shadow-lg shadow-blue-300/20"></div>
          {/* Bubble 7 */}
          <div className="absolute bottom-28 left-1/2 w-5 h-5 bg-gradient-to-br from-white/30 to-white/10 rounded-full animate-bubble-7 shadow-lg shadow-cyan-500/20"></div>
          {/* Bubble 8 */}
          <div className="absolute bottom-44 left-2/5 w-4 h-4 bg-gradient-to-br from-white/26 to-white/9 rounded-full animate-bubble-8 shadow-md shadow-blue-500/25"></div>
          {/* Bubble 9 */}
          <div className="absolute bottom-20 left-4/5 w-3 h-3 bg-gradient-to-br from-white/33 to-white/12 rounded-full animate-bubble-9 shadow-lg shadow-cyan-400/20"></div>
          {/* Bubble 10 */}
          <div className="absolute bottom-32 left-1/5 w-6 h-6 bg-gradient-to-br from-white/24 to-white/8 rounded-full animate-bubble-10 shadow-lg shadow-blue-400/20"></div>
        </div>
      )}

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-responsive w-full">
          <div className="text-center space-responsive-lg">
            <div className="space-responsive-md">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                {hero.title.main}
                <span className={`block text-transparent bg-clip-text bg-gradient-to-r ${hero.title.highlightGradient}`}>
                  {hero.title.highlight}
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-cyan-100 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
                {hero.subtitle}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              {hero.ctaButtons.map((button, index) => (
                <Link
                  key={index}
                  to={button.link}
                  className={`inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 ${
                    button.variant === 'primary' 
                      ? 'bg-cyan-600 hover:bg-cyan-700 text-white' 
                      : 'border-2 border-white text-white hover:bg-white hover:text-cyan-900'
                  } font-semibold rounded-full transition-all duration-300 group shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base`}
                >
                  {button.text}
                  {button.icon && <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 group-hover:translate-x-1 transition-transform" />}
                </Link>
              ))}
            </div>

            {/* Floating Stats - Hidden on Mobile */}
            <div className="hidden sm:grid grid-cols-3 gap-6 lg:gap-8 pt-12 max-w-2xl mx-auto">
              {hero.stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-sm text-cyan-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
    </section>
  );
};

export default HeroSection;
