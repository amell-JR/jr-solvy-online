
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter, Sparkles, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-primary-foreground">
      
      <div className="container-responsive py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-3">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center p-2 flex-shrink-0">
                <img 
                  src="/ma logo real.png" 
                  alt="JR Solvy Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-lg font-bold text-primary-foreground">JR Solvy</span>
                <span className="text-sm text-primary-foreground/80 font-medium">Digital Innovation</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm max-w-sm mx-auto sm:mx-0">
              Smart Tech, Simple Solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-base font-semibold mb-4 text-primary-foreground">Quick Links</h3>
            <nav>
              <ul className="space-y-2">
                {[
                  { name: "About", path: "/about" },
                  { name: "Services", path: "/services" },
                  { name: "Contact", path: "/contact" }
                ].map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
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
            <h3 className="text-base font-semibold mb-4 text-primary-foreground">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center sm:justify-start space-x-2 text-primary-foreground/80">
                <Mail size={16} />
                <span className="text-sm">robertsunday333@gmail.com</span>
              </div>
              
              <div className="flex justify-center sm:justify-start space-x-3">
                <a 
                  href="https://linkedin.com/in/robertsunday" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-primary-foreground/80 hover:text-accent transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a 
                  href="https://twitter.com/jrsolvy" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-primary-foreground/80 hover:text-accent transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-6 border-t border-primary-foreground/20">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 text-primary-foreground/80 text-sm">
              <span>Copyright © 2025 JRsolvy</span>
              <span>•</span>
              <span>Smart Tech, Simple Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
