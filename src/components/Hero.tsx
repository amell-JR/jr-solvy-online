import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award, Users, Zap, Play, Star } from 'lucide-react';

const Hero = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0">
        {/* Primary gradient orbs */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/8 via-primary/4 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-innovation/6 via-innovation/3 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-gradient-to-bl from-accent/4 via-accent/2 to-transparent rounded-full blur-2xl"></div>
        
        {/* Geometric patterns */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-1 h-1 bg-innovation/40 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-accent/50 rounded-full animate-pulse"></div>
        
        {/* Grid overlay for professional feel */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-10 text-center lg:text-left">
            {/* Professional Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-primary rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer group">
              <div className="w-2 h-2 bg-innovation rounded-full mr-3 animate-pulse"></div>
              <span className="bg-gradient-to-r from-primary to-innovation bg-clip-text text-transparent">Premium Digital Solutions</span>
            </div>
            
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="text-foreground block">Smart Solutions.</span>
                <span className="bg-gradient-to-r from-primary via-innovation to-primary bg-clip-text text-transparent block relative">
                  Digital Growth.
                  <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-primary to-innovation rounded-full opacity-60"></div>
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                We empower individuals, businesses, and communities with cutting-edge 
                <span className="text-primary font-medium"> AI</span>, 
                <span className="text-innovation font-medium"> IT</span>, and 
                <span className="text-accent font-medium"> digital solutions</span>.
              </p>
            </div>

            {/* Key Benefits - Professional Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto lg:mx-0">
              <div className="group bg-white/60 backdrop-blur-lg border border-white/30 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="text-white" size={20} />
                </div>
                <h3 className="text-foreground font-bold text-lg mb-2">People-First</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Designing with human needs at the center of every solution.</p>
              </div>
              <div className="group bg-white/60 backdrop-blur-lg border border-white/30 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-innovation to-innovation/80 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="text-white" size={20} />
                </div>
                <h3 className="text-foreground font-bold text-lg mb-2">Accessible</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Technology that works for everyone, everywhere.</p>
              </div>
              <div className="group bg-white/60 backdrop-blur-lg border border-white/30 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="text-foreground" size={20} />
                </div>
                <h3 className="text-foreground font-bold text-lg mb-2">Innovation</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Cutting-edge solutions that drive real results.</p>
              </div>
            </div>

            {/* Professional CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-innovation text-white px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 flex items-center justify-center space-x-3 border border-primary/20 hover:scale-105 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-innovation to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 text-lg">Get Started</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/about"
                className="group bg-white/80 backdrop-blur-lg border-2 border-primary/30 text-primary px-8 py-4 rounded-2xl font-bold hover:bg-primary hover:text-white transition-all duration-500 text-center shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1"
              >
                <span className="flex items-center justify-center space-x-3">
                  <span className="text-lg">Learn More</span>
                  <Play size={16} className="group-hover:scale-110 transition-transform duration-300" />
                </span>
              </Link>
            </div>

            {/* Professional Trust Indicators */}
            <div className="pt-8">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-3 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">Available for Projects</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" />
                    ))}
                  </div>
                  <span className="font-medium">5.0 Rating</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                  <Users className="w-4 h-4 text-innovation" />
                  <span className="font-medium">50+ Happy Clients</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Dashboard Preview */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            {/* Main Professional Card */}
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/40 hover:shadow-3xl transition-all duration-700 hover:scale-105 hover:-translate-y-4 group">
              {/* Sophisticated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-innovation/5 rounded-3xl"></div>
              
              {/* Professional Header */}
              <div className="relative flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary via-primary/90 to-innovation rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500 p-4">
                    <img 
                      src="/my logo.svg" 
                      alt="JR Solvy Logo" 
                      className="w-full h-full object-contain filter brightness-0 invert"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-2xl font-bold text-foreground">JR Solvy</h3>
                    <p className="bg-gradient-to-r from-primary to-innovation bg-clip-text text-transparent font-semibold text-base">Digital Innovation Hub</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-muted-foreground font-medium">Active Now</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Services Grid */}
              <div className="relative space-y-4 mb-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-4 border border-primary/20 hover:border-primary/40 transition-all duration-300 group/item">
                    <div className="flex items-center justify-between">
                      <span className="text-foreground font-semibold text-sm">AI Solutions</span>
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Active</p>
                  </div>
                  <div className="bg-gradient-to-r from-innovation/10 to-innovation/5 rounded-xl p-4 border border-innovation/20 hover:border-innovation/40 transition-all duration-300 group/item">
                    <div className="flex items-center justify-between">
                      <span className="text-foreground font-semibold text-sm">Web Apps</span>
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Available</p>
                  </div>
                  <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl p-4 border border-accent/20 hover:border-accent/40 transition-all duration-300 group/item">
                    <div className="flex items-center justify-between">
                      <span className="text-foreground font-semibold text-sm">Mobile Apps</span>
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Ready</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/10 to-purple-500/5 rounded-xl p-4 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group/item">
                    <div className="flex items-center justify-between">
                      <span className="text-foreground font-semibold text-sm">Consulting</span>
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Open</p>
                  </div>
                </div>
              </div>

              {/* Professional Stats */}
              <div className="relative pt-6 border-t border-border/30">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="group/stat">
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-innovation bg-clip-text text-transparent group-hover/stat:scale-110 transition-transform duration-300">50+</div>
                    <div className="text-xs text-muted-foreground font-medium">Projects</div>
                  </div>
                  <div className="group/stat">
                    <div className="text-2xl font-bold bg-gradient-to-r from-innovation to-accent bg-clip-text text-transparent group-hover/stat:scale-110 transition-transform duration-300">24/7</div>
                    <div className="text-xs text-muted-foreground font-medium">Support</div>
                  </div>
                  <div className="group/stat">
                    <div className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent group-hover/stat:scale-110 transition-transform duration-300">5.0</div>
                    <div className="text-xs text-muted-foreground font-medium">Rating</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sophisticated floating elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl backdrop-blur-sm border border-white/30 opacity-60 animate-float hidden lg:block shadow-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-innovation/20 to-innovation/10 rounded-2xl backdrop-blur-sm border border-white/30 opacity-50 animate-pulse-slow hidden lg:block shadow-lg"></div>
            <div className="absolute top-1/4 -right-4 w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl backdrop-blur-sm border border-white/30 opacity-40 animate-bounce-slow hidden xl:block shadow-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;