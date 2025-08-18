
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter, Sparkles, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-primary-foreground relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white/30 to-transparent rounded-full -translate-x-48 -translate-y-48 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/30 to-transparent rounded-full translate-x-48 translate-y-48 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-white/10 to-accent/10 rounded-full -translate-x-32 -translate-y-32 blur-2xl"></div>
      </div>
      
      <div className="container-responsive py-8 sm:py-12">
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-3">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 glass rounded-xl flex items-center justify-center shadow-lg p-3 sm:p-4 flex-shrink-0">
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
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary-foreground whitespace-nowrap">JR Solvy</span>
                <span className="text-sm sm:text-base text-primary-foreground/80 font-medium whitespace-nowrap">Digital Innovation</span>
              </div>
            </div>
            <p className="text-primary-foreground/85 text-sm leading-relaxed max-w-sm mx-auto sm:mx-0 font-medium">
              Building AI-powered solutions and digital experiences for modern businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold mb-4 text-primary-foreground">Quick Links</h3>
            <nav>
              <ul className="space-y-2">
                {[
                  { name: "About", path: "/about" },
                  { name: "Services", path: "/services" },
                  { name: "Projects", path: "/projects" },
                  { name: "Contact", path: "/contact" }
                ].map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-primary-foreground/85 hover:text-accent transition-colors duration-300 text-sm font-medium hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold mb-4 text-primary-foreground">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center sm:justify-start space-x-2 text-primary-foreground/90">
                <Mail size={16} />
                <span className="text-sm font-medium">robertsunday333@gmail.com</span>
              </div>
              
              <div className="flex justify-center sm:justify-start space-x-3">
                <a 
                  href="https://linkedin.com/in/robertsunday" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 glass rounded-lg flex items-center justify-center text-primary-foreground/80 hover:text-accent transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a 
                  href="https://twitter.com/jrsolvy" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 glass rounded-lg flex items-center justify-center text-primary-foreground/80 hover:text-accent transition-all duration-300 hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="relative mt-8 pt-6 border-t border-primary-foreground/20">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 text-primary-foreground/90 text-sm">
              <span className="font-semibold">JR Solvy © 2025</span>
              <Heart className="w-3 h-3 text-accent" fill="currentColor" />
              <span>Empowering Innovation</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
