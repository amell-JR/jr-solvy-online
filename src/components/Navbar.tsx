
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
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/90 backdrop-blur-xl border-b border-white/40 sticky top-0 z-50 transition-all duration-300 shadow-lg shadow-primary/5">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-3 focus-ring rounded-xl p-2 -m-2 hover:bg-primary/5 transition-all duration-300 group"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                <img 
                  src="/ma logo real.png" 
                  alt="JR Solvy Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg lg:text-xl font-bold text-foreground">JR Solvy</span>
                <span className="text-xs text-muted-foreground font-medium hidden lg:block">Digital Innovation</span>
              </div>
            </Link>
          </div>

          {/* Professional Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 focus-ring ${
                  isActive(item.href)
                    ? 'text-white bg-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground transition-all duration-300 focus-ring rounded-lg p-2 hover:bg-secondary"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-4 pb-6 space-y-2 bg-white border-t border-border">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 focus-ring ${
                  isActive(item.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
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
