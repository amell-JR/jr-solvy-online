
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award, Users, Zap } from 'lucide-react';

const Hero = () => {
  const achievements = [
    { icon: Award, text: "50+ Projects Delivered", color: "text-emerald-600" },
    { icon: Users, text: "25+ Happy Clients", color: "text-blue-600" },
    { icon: Zap, text: "98% Success Rate", color: "text-purple-600" }
  ];

  return (
    <section className="bg-background section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-primary/5"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 transform skew-x-12 translate-x-1/4 hidden lg:block"></div>
      
      <div className="container-responsive relative">
        <div className="grid-responsive-2 items-center gap-8 lg:gap-16">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Brand Badge */}
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-primary text-primary-foreground rounded-full text-xs sm:text-sm font-semibold shadow-lg">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-foreground rounded-full mr-2 sm:mr-3 animate-pulse"></span>
              Award-Winning Digital Solutions
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-responsive-3xl font-bold text-foreground leading-tight">
                Transform Your Business with
                <span className="text-primary block">AI & Innovation</span>
              </h1>
              
              <p className="text-responsive-base text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We don't just build websites and apps – we create digital experiences that 
                <strong className="text-foreground"> increase revenue by 40%</strong> and 
                <strong className="text-foreground"> reduce operational costs by 60%</strong>.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3 sm:space-y-4">
              {[
                "Custom AI solutions that automate your workflows",
                "Modern web applications that convert visitors to customers",
                "Mobile apps that engage users and drive retention"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 text-left max-w-md mx-auto lg:mx-0">
                  <CheckCircle className="text-primary mt-0.5 sm:mt-1 flex-shrink-0" size={16} />
                  <span className="text-muted-foreground font-medium text-sm sm:text-base">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Achievement Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 py-4 sm:py-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <achievement.icon className="text-primary" size={20} />
                  <span className="text-foreground font-semibold text-xs sm:text-sm">{achievement.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground btn-responsive rounded-xl font-semibold interactive-scale shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 border-2 border-primary focus-ring touch-target"
              >
                <span>Get Free Consultation</span>
                <ArrowRight size={16} />
              </Link>
              
              <Link
                to="/projects"
                className="border-2 border-primary text-primary btn-responsive rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-center shadow-lg hover:shadow-xl focus-ring touch-target"
              >
                View Success Stories
              </Link>
            </div>

            {/* Trust Indicator */}
            <div className="pt-6 sm:pt-8 border-t border-border">
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 text-center lg:text-left">Trusted by leading businesses across Nigeria and beyond</p>
              <div className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-6 opacity-60">
                <div className="w-16 h-6 sm:w-20 sm:h-8 bg-muted rounded flex items-center justify-center text-xs font-bold">CLIENT 1</div>
                <div className="w-16 h-6 sm:w-20 sm:h-8 bg-muted rounded flex items-center justify-center text-xs font-bold">CLIENT 2</div>
                <div className="w-16 h-6 sm:w-20 sm:h-8 bg-muted rounded flex items-center justify-center text-xs font-bold">CLIENT 3</div>
              </div>
            </div>
          </div>

          {/* Enhanced Visual */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            {/* Main Card */}
            <div className="relative bg-card rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 border interactive-glow">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg interactive-scale">
                    <span className="text-primary-foreground font-bold text-lg sm:text-2xl">JR</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-2xl font-bold text-card-foreground truncate">JR Solvy</h3>
                    <p className="text-primary font-semibold text-sm sm:text-base">Digital Innovation Hub</p>
                  </div>
                </div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-primary rounded-full animate-pulse"></div>
              </div>

              {/* Services Preview */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between p-3 sm:p-4 bg-primary/10 rounded-lg sm:rounded-xl">
                  <span className="text-card-foreground font-medium text-sm sm:text-base">AI Solutions</span>
                  <span className="text-primary font-bold text-xs sm:text-sm">Active</span>
                </div>
                <div className="flex items-center justify-between p-3 sm:p-4 bg-accent/20 rounded-lg sm:rounded-xl">
                  <span className="text-card-foreground font-medium text-sm sm:text-base">Web Development</span>
                  <span className="text-primary font-bold text-xs sm:text-sm">Ready</span>
                </div>
                <div className="flex items-center justify-between p-3 sm:p-4 bg-secondary/50 rounded-lg sm:rounded-xl">
                  <span className="text-card-foreground font-medium text-sm sm:text-base">Mobile Apps</span>
                  <span className="text-primary font-bold text-xs sm:text-sm">Available</span>
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-card-foreground">3+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-card-foreground">24/7</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements - Hidden on mobile for cleaner look */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 bg-primary rounded-xl sm:rounded-2xl opacity-10 animate-pulse hidden sm:block"></div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-6 h-6 sm:w-8 sm:h-8 bg-accent rounded-lg sm:rounded-xl opacity-20 animate-pulse hidden sm:block"></div>
            <div className="absolute top-1/2 -right-2 sm:-right-4 w-4 h-4 sm:w-6 sm:h-6 bg-primary/30 rounded-full opacity-30 animate-bounce hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
