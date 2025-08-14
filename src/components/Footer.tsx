
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-responsive section-padding-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left lg:col-span-1">
            <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center interactive-scale">
                <span className="text-primary-foreground font-bold text-sm sm:text-base">JR</span>
              </div>
              <span className="text-lg sm:text-xl font-bold">JR Solvy</span>
            </div>
            <p className="text-primary-foreground/80 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              Empowering Innovation. Accelerating Tomorrow. Building AI-powered solutions for the future.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
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
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm focus-ring rounded touch-target inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Services</h3>
            <ul className="space-y-2 sm:space-y-3 text-primary-foreground/80">
              {[
                "Ask JR",
                "ibnGPT", 
                "SmartSpend",
                "Uyo SafeAlert",
                "Vibe Coding eBook"
              ].map((service) => (
                <li key={service} className="text-sm">{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Get in Touch</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-center sm:justify-start space-x-2 text-primary-foreground/80">
                <Mail size={14} className="flex-shrink-0" />
                <span className="text-xs sm:text-sm">robertsunday333@gmail.com</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4 mt-3 sm:mt-4">
              <a 
                href="https://linkedin.com/in/robertsunday" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors focus-ring rounded p-1 touch-target"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://twitter.com/jrsolvy" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors focus-ring rounded p-1 touch-target"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-primary-foreground/80 text-xs sm:text-sm mb-2">
            JR Solvy © 2025 | Empowering Innovation. Accelerating Tomorrow.
          </p>
          <p className="text-primary-foreground/60 text-xs">
            Proudly building the future — from anywhere in the world.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
