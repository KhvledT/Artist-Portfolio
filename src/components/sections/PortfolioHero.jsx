import { useState, useEffect } from 'react';
import { Filter, Grid, List, Sparkles, Award, Users, Clock } from 'lucide-react';
import { workData } from '../../data';

const PortfolioHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { portfolioHero } = workData;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`relative bg-gradient-to-br ${portfolioHero.background.gradient} text-white py-24 overflow-hidden`}>
      {/* Animated Background Elements */}
      {portfolioHero.background.animations.floatingElements && (
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              {portfolioHero.title.main}
              <span className={`block text-transparent bg-clip-text bg-gradient-to-r ${portfolioHero.title.highlightGradient} animate-pulse`}>
                {portfolioHero.title.highlight}
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
              {portfolioHero.subtitle}
            </p>
          </div>
          
          {/* Stats Section - Removed as it's handled by StatsSection */}
          
          {/* View Controls */}
          <div className={`flex justify-center items-center space-x-4 pt-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button 
              onClick={() => {
                const awardSection = document.getElementById('award-winning-projects');
                if (awardSection) {
                  awardSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex items-center space-x-2 px-6 py-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 hover:scale-105"
            >
              <Award className="h-5 w-5 text-blue-600" />
              <span className="text-blue-600">Award-Winning Projects</span>
            </button>
            <div className="flex items-center space-x-1 ml-2 px-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-1 border border-white border-opacity-20">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
