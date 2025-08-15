
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
      
      <div className="container-responsive section-padding-sm">
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6 text-center sm:text-left lg:col-span-1">
            <div className="flex items-center justify-center sm:justify-start space-x-3 group">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 glass rounded-2xl flex items-center justify-center interactive-scale shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
                <span className="relative text-primary-foreground font-bold text-lg sm:text-xl gradient-text">JR</span>
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-accent animate-pulse" />
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-xl sm:text-2xl font-bold text-primary-foreground group-hover:text-accent transition-colors duration-300">JR Solvy</span>
                <span className="text-sm text-primary-foreground/80 font-medium tracking-wide">Digital Innovation Expert</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-center sm:justify-start space-x-2 text-primary-foreground/90">
                <Heart className="w-4 h-4 text-accent animate-pulse" fill="currentColor" />
                <span className="font-semibold text-sm">Empowering Digital Transformation</span>
              </div>
              <p className="text-primary-foreground/85 text-sm leading-relaxed max-w-sm mx-auto sm:mx-0 font-medium">
                Crafting cutting-edge AI solutions and digital experiences that drive innovation and accelerate business growth in the modern world.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-primary-foreground flex items-center justify-center sm:justify-start space-x-2">
              <span>Navigation</span>
              <div className="w-1 h-1 bg-accent rounded-full animate-pulse"></div>
            </h3>
            <nav>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  { name: "About", path: "/about" },
                  { name: "Services", path: "/services" },
                  { name: "Projects", path: "/projects" },
                  { name: "Contact", path: "/contact" }
                ].map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="group flex items-center justify-center sm:justify-start space-x-2 text-primary-foreground/85 hover:text-accent transition-all duration-300 text-sm focus-ring rounded-lg p-2 hover:bg-white/10 font-medium"
                    >
                      <span className="w-1 h-1 bg-primary-foreground/50 rounded-full group-hover:bg-accent group-hover:scale-150 transition-all duration-300"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-primary-foreground flex items-center justify-center sm:justify-start space-x-2">
              <span>Expertise</span>
              <div className="w-1 h-1 bg-accent rounded-full animate-pulse"></div>
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {[
                { name: "AI Solutions", highlight: true },
                { name: "Web Development", highlight: false }, 
                { name: "Mobile Applications", highlight: false },
                { name: "Digital Strategy", highlight: false },
                { name: "Technical Consulting", highlight: false }
              ].map((service) => (
                <div key={service.name} className="group flex items-center justify-center sm:justify-start space-x-2">
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    service.highlight 
                      ? 'bg-accent animate-pulse' 
                      : 'bg-primary-foreground/40 group-hover:bg-accent group-hover:scale-125'
                  }`}></div>
                  <span className={`text-sm font-medium transition-colors duration-300 ${
                    service.highlight 
                      ? 'text-accent font-semibold' 
                      : 'text-primary-foreground/85 group-hover:text-primary-foreground'
                  }`}>
                    {service.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-primary-foreground flex items-center justify-center sm:justify-start space-x-2">
              <span>Connect</span>
              <div className="w-1 h-1 bg-accent rounded-full animate-pulse"></div>
            </h3>
            <div className="space-y-4 sm:space-y-5">
              <div className="group">
                <div className="flex items-center justify-center sm:justify-start space-x-3 text-primary-foreground/90 hover:text-accent transition-colors duration-300 p-2 rounded-lg hover:bg-white/10">
                  <div className="w-8 h-8 glass rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail size={16} className="text-accent" />
                  </div>
                  <span className="text-sm font-medium">robertsunday333@gmail.com</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="space-y-3">
                <p className="text-primary-foreground/80 text-sm font-medium">Follow the journey</p>
                <div className="flex justify-center sm:justify-start space-x-4">
                  <a 
                    href="https://linkedin.com/in/robertsunday" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-10 h-10 glass rounded-xl flex items-center justify-center text-primary-foreground/80 hover:text-accent transition-all duration-300 focus-ring touch-target hover:scale-110 hover:shadow-lg"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={18} className="group-hover:scale-110 transition-transform duration-300" />
                  </a>
                  <a 
                    href="https://twitter.com/jrsolvy" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-10 h-10 glass rounded-xl flex items-center justify-center text-primary-foreground/80 hover:text-accent transition-all duration-300 focus-ring touch-target hover:scale-110 hover:shadow-lg"
                    aria-label="Twitter Profile"
                  >
                    <Twitter size={18} className="group-hover:scale-110 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Footer Bottom */}
        <div className="relative mt-8 sm:mt-12">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent"></div>
          <div className="pt-8 sm:pt-10 text-center space-y-4">
            <div className="flex items-center justify-center space-x-3 text-primary-foreground/90">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-semibold">JR Solvy</span>
                <div className="w-1 h-1 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm">© 2025</span>
              </div>
              <Heart className="w-4 h-4 text-accent animate-pulse" fill="currentColor" />
              <span className="text-sm font-medium">Empowering Innovation</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-primary-foreground/70 text-xs">
              <span className="font-medium">Building tomorrow's digital experiences</span>
              <div className="hidden sm:block w-1 h-1 bg-primary-foreground/40 rounded-full"></div>
              <span className="font-medium">Crafted with passion worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
