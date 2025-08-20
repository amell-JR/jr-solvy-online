
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Safely get location, with fallback
  let location;
  try {
    location = useLocation();
  } catch (error) {
    // Fallback if not in router context
    location = { pathname: '/' };
  }

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/80 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50 transition-all duration-300 shadow-sm">
      <div className="container-responsive">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-3 sm:space-x-4 focus-ring rounded-xl p-2 -m-2 hover:bg-primary/5 transition-all duration-300 group"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 interactive-scale group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                <img 
                  src="/my logo.svg" 
                  alt="JR Solvy Logo" 
                  className="w-full h-full object-contain logo-themed"
                  style={{
                    filter: 'brightness(0) saturate(100%) invert(39%) sepia(74%) saturate(1729%) hue-rotate(204deg) brightness(98%) contrast(91%)'
                  }}
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent whitespace-nowrap">JR Solvy</span>
                <span className="text-xs sm:text-sm text-muted-foreground font-medium hidden sm:block whitespace-nowrap">Digital Innovation</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 lg:px-4 py-2 rounded-xl text-sm lg:text-base font-semibold transition-all duration-300 focus-ring touch-target relative group ${
                  isActive(item.href)
                    ? 'text-primary bg-gradient-to-r from-primary/10 to-primary/5 shadow-sm border border-primary/20'
                    : 'text-muted-foreground hover:text-foreground hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground transition-all duration-300 focus-ring rounded-xl p-2 touch-target hover:bg-primary/5"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-500 ease-smooth overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-4 pb-6 space-y-2 bg-gradient-to-b from-white/50 to-white/80 backdrop-blur-xl border-t border-white/20 rounded-b-2xl">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 focus-ring touch-target ${
                  isActive(item.href)
                    ? 'text-primary bg-gradient-to-r from-primary/10 to-primary/5 shadow-sm border border-primary/20'
                    : 'text-muted-foreground hover:text-foreground hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
