import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award, Users, Zap, Play, Star } from 'lucide-react';

const Hero = () => {

  return (
    <section className="bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/3 to-accent/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-responsive relative">
        <div className="grid-responsive-2 items-center gap-8 lg:gap-16">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Brand Badge */}
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-full text-xs sm:text-sm font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 animate-spin" fill="currentColor" />
              Smart Digital Solutions
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-responsive-3xl font-bold text-foreground leading-tight">
                Smart Digital Solutions,
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">Rooted in Innovation</span>
              </h1>
              
              <p className="text-responsive-base text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                At JRsolvy, we simplify technology for individuals, businesses, and communities. From AI-powered tools to creative digital services, we're here to help you grow, connect, and succeed.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center space-x-3 bg-white/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <div className="w-8 h-8 bg-primary/15 rounded-lg flex items-center justify-center">
                  <CheckCircle className="text-primary" size={16} />
                </div>
                <span className="text-foreground font-semibold text-sm">People-First</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <div className="w-8 h-8 bg-accent/15 rounded-lg flex items-center justify-center">
                  <Zap className="text-accent" size={16} />
                </div>
                <span className="text-foreground font-semibold text-sm">Accessible</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <div className="w-8 h-8 bg-emerald-500/15 rounded-lg flex items-center justify-center">
                  <Award className="text-emerald-500" size={16} />
                </div>
                <span className="text-foreground font-semibold text-sm">Innovation</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground btn-responsive rounded-2xl font-bold interactive-scale shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 border-2 border-primary focus-ring touch-target group"
              >
                <span>Let's Build Together</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/services"
                className="bg-white/80 backdrop-blur-sm border-2 border-primary/20 text-primary btn-responsive rounded-2xl font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-center shadow-lg hover:shadow-xl focus-ring touch-target group"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>View Services</span>
                  <Play size={14} className="group-hover:scale-110 transition-transform duration-300" />
                </span>
              </Link>
            </div>

            {/* Trust Indicator */}
            <div className="pt-6 sm:pt-8">
              <div className="flex items-center justify-center lg:justify-start space-x-6 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span>Available for projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
                  <span>5-star rated</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Visual */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            {/* Main Card */}
            <div className="relative bg-white/70 backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 border border-white/30 hover:shadow-xl transition-all duration-300">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-accent/3 rounded-2xl sm:rounded-3xl"></div>
              
              {/* Header */}
              <div className="relative flex items-center justify-between mb-6 sm:mb-8">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 bg-gradient-to-br from-primary to-primary/80 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-xl interactive-scale p-3 sm:p-4 md:p-5 lg:p-6 flex-shrink-0">
                    <img 
                      src="/my logo.svg" 
                      alt="JR Solvy Logo" 
                      className="w-full h-full object-contain logo-themed"
                      style={{
                        filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)'
                      }}
                    />
                  </div>
                  <div className="min-w-0 flex-1 overflow-hidden">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-card-foreground truncate">JR Solvy</h3>
                    <p className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">Digital Innovation Hub</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-muted-foreground font-medium">Online</span>
                </div>
              </div>

              {/* Services Preview */}
              <div className="relative space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl sm:rounded-2xl border border-primary/10 hover:border-primary/20 transition-all duration-300 group">
                  <span className="text-card-foreground font-medium text-sm sm:text-base">Web Development</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-primary font-bold text-xs sm:text-sm">Available</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-accent/20 to-accent/10 rounded-xl sm:rounded-2xl border border-accent/20 hover:border-accent/30 transition-all duration-300 group">
                  <span className="text-card-foreground font-medium text-sm sm:text-base">Mobile Apps</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-accent font-bold text-xs sm:text-sm">Available</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-orange-500/10 to-orange-500/5 rounded-xl sm:rounded-2xl border border-orange-500/10 hover:border-orange-500/20 transition-all duration-300 group">
                  <span className="text-card-foreground font-medium text-sm sm:text-base">Tutoring</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-orange-600 font-bold text-xs sm:text-sm">Available</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-purple-500/10 to-purple-500/5 rounded-xl sm:rounded-2xl border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300 group">
                  <span className="text-card-foreground font-medium text-sm sm:text-base">Consulting</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-purple-600 font-bold text-xs sm:text-sm">Available</span>
                  </div>
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="relative mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border/50">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                  <div>
                    <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Pro</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Quality</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">24/7</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Support</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements - Hidden on mobile for cleaner look */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-primary/80 rounded-2xl sm:rounded-3xl opacity-20 animate-pulse hidden sm:block shadow-xl"></div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-accent to-accent/80 rounded-xl sm:rounded-2xl opacity-30 animate-pulse hidden sm:block shadow-lg"></div>
            <div className="absolute top-1/2 -right-2 sm:-right-4 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-purple-500 to-purple-400 rounded-full opacity-40 animate-bounce hidden lg:block shadow-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;