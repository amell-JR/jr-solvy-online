
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter, Sparkles, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full translate-x-48 translate-y-48 blur-3xl"></div>
      </div>
      
      <div className="container-responsive section-padding-sm">
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left lg:col-span-1">
            <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center interactive-scale shadow-lg relative">
                <span className="text-primary-foreground font-bold text-sm sm:text-base">JR</span>
                <Sparkles className="absolute w-3 h-3 text-primary-foreground/50 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold">JR Solvy</span>
                <span className="text-xs text-primary-foreground/70 font-medium">Digital Innovation</span>
              </div>
            </div>
            <p className="text-primary-foreground/90 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto sm:mx-0 font-medium">
              <span className="flex items-center justify-center sm:justify-start space-x-1 mb-2">
                <Heart className="w-3 h-3 text-red-400" fill="currentColor" />
                <span>Empowering Innovation</span>
              </span>
              Building AI-powered solutions for the future with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-primary-foreground">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Projects", path: "/projects" },
                { name: "Contact", path: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 text-sm focus-ring rounded-lg touch-target inline-block hover:translate-x-1 font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-primary-foreground">Services</h3>
            <ul className="space-y-2 sm:space-y-3 text-primary-foreground/90">
              {[
                "AI Solutions",
                "Web Development", 
                "SmartSpend",
                "Mobile Apps",
                "Consulting"
              ].map((service) => (
                <li key={service} className="text-sm font-medium hover:text-primary-foreground transition-colors duration-300 cursor-pointer">{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-primary-foreground">Get in Touch</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-center sm:justify-start space-x-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-300 group">
                <Mail size={14} className="flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium group-hover:underline">robertsunday333@gmail.com</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4 mt-3 sm:mt-4">
              <a 
                href="https://linkedin.com/in/robertsunday" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/20 transition-all duration-300 focus-ring touch-target hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a 
                href="https://twitter.com/jrsolvy" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/20 transition-all duration-300 focus-ring touch-target hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="relative border-t border-primary-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-primary-foreground/90 text-xs sm:text-sm mb-2 font-medium">
            <span className="flex items-center justify-center space-x-2">
              <span>JR Solvy © 2025</span>
              <Heart className="w-3 h-3 text-red-400 animate-pulse" fill="currentColor" />
              <span>Empowering Innovation. Accelerating Tomorrow.</span>
            </span>
          </p>
          <p className="text-primary-foreground/70 text-xs font-medium">
            Proudly building the future — from anywhere in the world.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
