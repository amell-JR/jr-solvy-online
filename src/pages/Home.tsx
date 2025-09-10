import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Star } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const Home = () => {
  return (
    <div>
      <SEOHead
        title="JR Solvy | AI Solutions & Digital Innovation"
        description="Empowering Innovation. Accelerating Tomorrow. Digital solutions for modern businesses."
        keywords="AI solutions, digital innovation, web development, mobile apps"
        url="https://jrsolvy.com"
      />
      <Hero />
      
      {/* Professional CTA Section */}
      <section className="bg-gradient-to-br from-secondary/30 via-background to-secondary/30 py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Enhanced headline with better spacing */}
            <div className="space-y-6 mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Transform Your Business with
                <span className="text-primary block mt-2">Digital Excellence</span>
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                Join the digital revolution. Let's build something extraordinary that drives real results and creates lasting impact for your business.
              </p>
            </div>
            
            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                to="/contact"
                className="group bg-primary text-primary-foreground px-10 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3 hover:scale-105"
              >
                <span>Start Your Project</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/services"
                className="bg-background border-2 border-primary text-primary px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
              >
                Explore Services
              </Link>
            </div>

            {/* Professional trust indicators with cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-3">50+</div>
                <div className="text-muted-foreground font-medium">Successful Projects Delivered</div>
              </div>
              
              <div className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-3">24/7</div>
                <div className="text-muted-foreground font-medium">Dedicated Expert Support</div>
              </div>
              
              <div className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-center mb-3">
                  <span className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">5.0</span>
                  <div className="flex ml-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" />
                    ))}
                  </div>
                </div>
                <div className="text-muted-foreground font-medium">Average Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;