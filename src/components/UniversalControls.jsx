import { Link, useLocation } from 'react-router-dom';
import { Home, ArrowLeft, ArrowUp, Menu, X, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const UniversalControls = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll to top button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
    <>
      {/* Mobile/Tablet Navigation Overlay */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <div className="relative">
          {/* Main Menu Button */}
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Open navigation menu"
          >
            {isVisible ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Navigation Menu */}
          {isVisible && (
            <div className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 min-w-[200px] animate-in slide-in-from-bottom-2 duration-300">
              <div className="space-y-3">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Navigation
                </div>
                
                {/* Home Button - Always visible */}
                <Link
                  to="/"
                  onClick={() => setIsVisible(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    location.pathname === '/'
                      ? 'bg-blue-50 text-blue-600 border border-blue-200'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Home className="h-5 w-5" />
                  <span className="font-medium">Home</span>
                </Link>

                {/* Back to Home Button - Only on Work and Contact pages */}
                {(location.pathname === '/work' || location.pathname === '/contact') && (
                  <Link
                    to="/"
                    onClick={() => setIsVisible(false)}
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-all duration-200"
                  >
                    <ArrowLeft className="h-5 w-5" />
                    <span className="font-medium">Back to Home</span>
                  </Link>
                )}

                {/* Work Button */}
                <Link
                  to="/work"
                  onClick={() => setIsVisible(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    location.pathname === '/work'
                      ? 'bg-blue-50 text-blue-600 border border-blue-200'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="h-5 w-5 bg-gray-400 rounded"></div>
                  <span className="font-medium">Portfolio</span>
                </Link>

                {/* Contact Button */}
                <Link
                  to="/contact"
                  onClick={() => setIsVisible(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    location.pathname === '/contact'
                      ? 'bg-blue-50 text-blue-600 border border-blue-200'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="h-5 w-5 bg-gray-400 rounded"></div>
                  <span className="font-medium">Contact</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 left-4 z-40 bg-white/90 backdrop-blur-sm text-gray-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}

      {/* Mobile/Tablet Back to Home Button - Only on Work and Contact pages */}
      {location.pathname !== '/' && (
        <div className="block lg:hidden fixed top-20 left-4 z-40">
          <Link
            to="/"
            className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200"
          >
            <ArrowLeft className="h-3 w-3" />
            <span className="text-xs font-medium">Back to Home</span>
          </Link>
        </div>
      )}

    </>
  );
};

export default UniversalControls;
