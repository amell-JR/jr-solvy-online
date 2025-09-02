
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
              className="flex items-center space-x-4 focus-ring rounded-xl p-3 -m-3 hover:bg-primary/5 transition-all duration-500 group"
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-primary to-innovation rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl p-2">
                <img 
                  src="/my logo.svg" 
                  alt="JR Solvy Logo" 
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">JR Solvy</span>
                <span className="text-sm text-muted-foreground font-medium hidden lg:block">Digital Innovation Hub</span>
              </div>
            </Link>
          </div>

          {/* Professional Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-6 py-3 rounded-xl text-base font-semibold transition-all duration-500 focus-ring group overflow-hidden ${
                  isActive(item.href)
                    ? 'text-white bg-gradient-to-r from-primary to-innovation shadow-lg border border-primary/30'
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/50 hover:backdrop-blur-sm hover:border hover:border-white/30 hover:shadow-md'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {isActive(item.href) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-innovation to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                )}
                {!isActive(item.href) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-innovation/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
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
