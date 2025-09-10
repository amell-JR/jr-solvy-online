import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award, Users, Zap, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Content - Refined spacing and typography */}
          <div className="space-y-12 text-center lg:text-left">
            
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="text-foreground block mb-2">Smart Solutions.</span>
                <span className="text-primary block">Digital Growth.</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                We empower businesses with cutting-edge 
                <span className="text-primary font-medium"> AI</span>, 
                <span className="text-primary font-medium"> IT</span>, and 
                <span className="text-primary font-medium"> digital solutions</span> 
                that drive real results.
              </p>
            </div>

            {/* Refined Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto lg:mx-0">
              <div className="group bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <CheckCircle className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-foreground font-semibold text-lg mb-3">People-First</h3>
                <p className="text-muted-foreground leading-relaxed">Designing with human needs at the center of every solution.</p>
              </div>
              
              <div className="group bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Zap className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-foreground font-semibold text-lg mb-3">Accessible</h3>
                <p className="text-muted-foreground leading-relaxed">Technology that works seamlessly for everyone, everywhere.</p>
              </div>
              
              <div className="group bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Award className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-foreground font-semibold text-lg mb-3">Innovation</h3>
                <p className="text-muted-foreground leading-relaxed">Cutting-edge solutions that deliver measurable outcomes.</p>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="group bg-primary text-primary-foreground px-10 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105"
              >
                <span>Get Started</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/about"
                className="bg-background border-2 border-primary text-primary px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-center shadow-sm hover:shadow-md hover:scale-105"
              >
                Learn More
              </Link>
            </div>

            {/* Professional Trust Indicators */}
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4 font-medium uppercase tracking-wider">Trusted by 50+ Clients</p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                <div className="flex items-center space-x-3 bg-card rounded-2xl px-6 py-3 border border-border shadow-sm">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="font-medium text-foreground">Available Now</span>
                </div>
                
                <div className="flex items-center space-x-3 bg-card rounded-2xl px-6 py-3 border border-border shadow-sm">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" />
                    ))}
                  </div>
                  <span className="font-medium text-foreground">5.0 Rating</span>
                </div>
                
                <div className="flex items-center space-x-3 bg-card rounded-2xl px-6 py-3 border border-border shadow-sm">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="font-medium text-foreground">50+ Projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Dashboard Preview */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative">
              {/* Subtle background glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl blur-2xl"></div>
              
              <div className="relative bg-card rounded-3xl shadow-2xl p-10 border border-border/50 backdrop-blur-sm">
                
                {/* Professional Header */}
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center space-x-5">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center p-3 shadow-lg">
                      <img 
                        src="/ma-logo-real.png" 
                        alt="JR Solvy Logo" 
                        className="w-full h-full object-contain filter brightness-0 invert"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">JR Solvy</h3>
                      <p className="text-primary font-semibold text-base">Digital Innovation Partner</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-muted-foreground font-medium">Available for New Projects</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Services Grid */}
                <div className="space-y-6 mb-10">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Core Services</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'AI Solutions', status: 'Featured' },
                      { name: 'Web Development', status: 'Available' },
                      { name: 'Mobile Apps', status: 'Available' },
                      { name: 'Digital Strategy', status: 'Premium' }
                    ].map((service, index) => (
                      <div key={index} className="bg-secondary/50 rounded-xl p-5 border border-border/50 hover:bg-secondary/80 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-foreground font-semibold text-sm">{service.name}</span>
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                            service.status === 'Featured' ? 'bg-primary/20 text-primary' :
                            service.status === 'Premium' ? 'bg-accent/20 text-accent-foreground' :
                            'bg-emerald-500/20 text-emerald-700'
                          }`}>
                            {service.status}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                          <span className="text-xs text-muted-foreground">Ready to Deploy</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Professional Stats */}
                <div className="border-t border-border/50 pt-8">
                  <div className="grid grid-cols-3 gap-8 text-center">
                    <div className="space-y-2">
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">50+</div>
                      <div className="text-sm text-muted-foreground font-medium">Successful Projects</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">24/7</div>
                      <div className="text-sm text-muted-foreground font-medium">Expert Support</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">5.0</div>
                      <div className="text-sm text-muted-foreground font-medium">Client Rating</div>
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