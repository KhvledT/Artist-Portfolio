import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Palette, Home, Briefcase, Mail } from 'lucide-react';
import { navigationData } from '../data';
import { cn } from '../lib/utils';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getIcon = (itemName) => {
    switch (itemName) {
      case 'Home': return Home;
      case 'Work': return Briefcase;
      case 'Contact': return Mail;
      default: return Home;
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20" 
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Palette className="h-6 w-6 text-white" />
              </div>
              <h1 className={cn(
                "text-2xl font-bold transition-all duration-300",
                isScrolled 
                  ? "bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
                  : "text-white"
              )}>
                Artist Portfolio
              </h1>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navigationData.items.map((item) => {
                const Icon = getIcon(item.name);
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={cn(
                      'flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group',
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : isScrolled
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-white/50 backdrop-blur-sm'
                        : 'text-white hover:text-blue-300 hover:bg-white/10 backdrop-blur-sm'
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full hidden"></div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "p-2 rounded-xl backdrop-blur-sm border transition-all duration-300",
                isScrolled
                  ? "bg-white/10 border-white/20 text-gray-700 hover:text-blue-600 hover:bg-white/20"
                  : "bg-white/10 border-white/20 text-white hover:text-blue-300 hover:bg-white/20"
              )}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden transition-all duration-300 overflow-hidden",
        isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-4 pt-2 pb-4 space-y-2 bg-white/90 backdrop-blur-md border-t border-white/20">
          {navigationData.items.map((item) => {
            const Icon = getIcon(item.name);
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 group',
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-white/50'
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
