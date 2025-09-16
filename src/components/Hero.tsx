import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award, Users, Zap, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[75vh]">
          
          {/* Content - Clean and professional */}
          <div className="space-y-8 text-center lg:text-left">
            
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                <span className="text-foreground block">AI Services, Cybersecurity</span>
                <span className="text-primary block mt-1">& Technical Support</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                JR Solvy delivers intelligent and scalable technology solutions — from 
                <span className="text-primary font-semibold"> AI innovations</span> to 
                <span className="text-primary font-semibold"> cybersecurity</span>, 
                <span className="text-primary font-semibold"> software development</span>, and 
                reliable technical support — helping businesses and individuals succeed in the digital age.
              </p>
            </div>

            {/* Clean Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto lg:mx-0">
              <div className="group bg-card/50 border border-border/50 rounded-xl p-6 hover:bg-card hover:border-primary/30 transition-all duration-300">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <CheckCircle className="text-primary" size={20} />
                </div>
                <h3 className="text-foreground font-semibold text-base mb-2">AI for Every Field</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">AI services designed for any industry</p>
              </div>
              
              <div className="group bg-card/50 border border-border/50 rounded-xl p-6 hover:bg-card hover:border-primary/30 transition-all duration-300">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Zap className="text-primary" size={20} />
                </div>
                <h3 className="text-foreground font-semibold text-base mb-2">Trusted Security</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Advanced cybersecurity and technical support</p>
              </div>
              
              <div className="group bg-card/50 border border-border/50 rounded-xl p-6 hover:bg-card hover:border-primary/30 transition-all duration-300">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Award className="text-primary" size={20} />
                </div>
                <h3 className="text-foreground font-semibold text-base mb-2">Scalable Solutions</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">From startups to enterprises</p>
              </div>
            </div>

            {/* Clean CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="group bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:-translate-y-0.5"
              >
                <span>Get Started</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/about"
                className="bg-background border border-border text-foreground px-8 py-3 rounded-xl font-semibold hover:bg-secondary transition-all duration-300 text-center hover:-translate-y-0.5"
              >
                Learn More
              </Link>
            </div>

            {/* Clean Trust Indicators */}
            <div className="pt-6">
              <p className="text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wider">Trusted by 50+ Clients</p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <div className="flex items-center space-x-2 bg-emerald-50 text-emerald-700 rounded-lg px-3 py-2 text-sm font-medium">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>Available Now</span>
                </div>
                
                <div className="flex items-center space-x-2 bg-yellow-50 text-yellow-700 rounded-lg px-3 py-2 text-sm font-medium">
                  <Star className="w-3 h-3 text-yellow-500" fill="currentColor" />
                  <span>5.0 Rating</span>
                </div>
                
                <div className="flex items-center space-x-2 bg-primary/10 text-primary rounded-lg px-3 py-2 text-sm font-medium">
                  <Users className="w-3 h-3" />
                  <span>50+ Projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Clean Dashboard Preview */}
          <div className="relative order-1 lg:order-2">
            <div className="relative">
              
              <div className="relative bg-card rounded-2xl shadow-xl p-8 border border-border/30">
                
                {/* Clean Header */}
                <div className="flex items-center mb-8">
                  <div className="flex items-center space-x-4">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl bg-primary/10 flex items-center justify-center p-2 lg:p-3">
                  <img 
                    src="/ma-logo-real.png" 
                    alt="JR Solvy Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                    <div>
                      <h3 className="text-lg lg:text-xl font-bold text-foreground">JR Solvy</h3>
                      <p className="text-primary font-semibold text-xs lg:text-sm">AI & Technology Solutions</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-xs text-muted-foreground font-medium">Available for Projects</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clean Services Grid */}
                <div className="space-y-4 mb-6 lg:mb-8">
                  <h4 className="text-sm lg:text-base font-semibold text-foreground">Core Services</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3">
                    {[
                      { name: 'AI for Every Field', status: 'Featured' },
                      { name: 'Cybersecurity', status: 'Available' },
                      { name: 'Software Development', status: 'Available' },
                      { name: 'Technical Support', status: 'Premium' }
                    ].map((service, index) => (
                      <div key={index} className="bg-secondary/30 rounded-lg p-3 lg:p-4 border border-border/30 hover:bg-secondary/50 transition-colors">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-foreground font-medium text-xs lg:text-sm">{service.name}</span>
                          <span className={`text-xs px-1.5 lg:px-2 py-0.5 rounded font-medium ${
                            service.status === 'Featured' ? 'bg-primary/20 text-primary' :
                            service.status === 'Premium' ? 'bg-accent/20 text-accent-foreground' :
                            'bg-emerald-500/20 text-emerald-700'
                          }`}>
                            {service.status}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                          <span className="text-xs text-muted-foreground">Ready</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clean Stats */}
                <div className="border-t border-border/30 pt-6">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-xs text-muted-foreground">Projects</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-primary">24/7</div>
                      <div className="text-xs text-muted-foreground">Support</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-primary">5.0</div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;