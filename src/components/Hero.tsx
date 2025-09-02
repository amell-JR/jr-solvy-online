import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award, Users, Zap, Play, Star } from 'lucide-react';

const Hero = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background">
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-10 text-center lg:text-left">
            
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground block">Smart Solutions.</span>
                <span className="text-primary block">Digital Growth.</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We empower individuals, businesses, and communities with cutting-edge 
                <span className="text-primary font-semibold"> AI</span>, 
                <span className="text-primary font-semibold"> IT</span>, and 
                <span className="text-primary font-semibold"> digital solutions</span>.
              </p>
            </div>

            {/* Key Benefits - Clean Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto lg:mx-0">
              <div className="bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="text-white" size={20} />
                </div>
                <h3 className="text-foreground font-semibold text-base mb-2">People-First</h3>
                <p className="text-muted-foreground text-sm">Designing with human needs at the center.</p>
              </div>
              <div className="bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="text-primary" size={20} />
                </div>
                <h3 className="text-foreground font-semibold text-base mb-2">Accessible</h3>
                <p className="text-muted-foreground text-sm">Technology that works for everyone.</p>
              </div>
              <div className="bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Award className="text-primary" size={20} />
                </div>
                <h3 className="text-foreground font-semibold text-base mb-2">Innovation</h3>
                <p className="text-muted-foreground text-sm">Cutting-edge solutions that drive results.</p>
              </div>
            </div>

            {/* Clean CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="bg-primary text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 hover:bg-primary/90"
              >
                <span>Get Started</span>
                <ArrowRight size={18} />
              </Link>
              
              <Link
                to="/about"
                className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 text-center shadow-sm hover:shadow-md"
              >
                Learn More
              </Link>
            </div>

            {/* Clean Trust Indicators */}
            <div className="pt-6">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 border border-border">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="font-medium">Available for Projects</span>
                </div>
                <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 border border-border">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" />
                    ))}
                  </div>
                  <span className="font-medium">5.0 Rating</span>
                </div>
                <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 border border-border">
                  <Users className="w-4 h-4 text-innovation" />
                  <span className="font-medium">50+ Happy Clients</span>
                </div>
              </div>
            </div>
          </div>

          {/* Clean Dashboard Preview */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-border hover:shadow-2xl transition-all duration-300">
              
              {/* Clean Header */}
              <div className="relative flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center p-2">
                    <img 
                      src="/ma logo real.png" 
                      alt="JR Solvy Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold text-foreground">JR Solvy</h3>
                    <p className="text-primary font-medium text-sm">Digital Innovation</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-xs text-muted-foreground font-medium">Active Now</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clean Services Grid */}
              <div className="relative space-y-4 mb-8">
                <div className="grid grid-cols-2 gap-4">
                  {['AI Solutions', 'Web Apps', 'Mobile Apps', 'Consulting'].map((service, index) => (
                    <div key={index} className="bg-secondary rounded-lg p-4 border border-border">
                      <div className="flex items-center justify-between">
                        <span className="text-foreground font-medium text-sm">{service}</span>
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Available</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clean Stats */}
              <div className="relative pt-6 border-t border-border">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-xs text-muted-foreground font-medium">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-xs text-muted-foreground font-medium">Support</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">5.0</div>
                    <div className="text-xs text-muted-foreground font-medium">Rating</div>
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