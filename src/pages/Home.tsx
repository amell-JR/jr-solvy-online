import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
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
      <section className="relative bg-gradient-to-br from-background via-secondary/20 to-background py-24 lg:py-32 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-innovation/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm border border-white/30 rounded-full text-sm font-semibold text-primary mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Ready to Get Started?
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Transform Your Business with 
              <span className="bg-gradient-to-r from-primary to-innovation bg-clip-text text-transparent block lg:inline"> Digital Excellence</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Join the digital revolution. Let's build something extraordinary that drives real results and creates lasting impact for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-innovation text-white px-10 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 flex items-center space-x-3 hover:scale-105 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-innovation to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 text-lg">Start Your Project</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/services"
                className="group bg-white/80 backdrop-blur-lg border-2 border-primary/30 text-primary px-10 py-4 rounded-2xl font-bold hover:bg-primary hover:text-white transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1"
              >
                <span className="text-lg">Explore Services</span>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-innovation bg-clip-text text-transparent">50+</div>
                <div className="text-muted-foreground font-medium">Successful Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-innovation to-accent bg-clip-text text-transparent">24/7</div>
                <div className="text-muted-foreground font-medium">Expert Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">5.0★</div>
                <div className="text-muted-foreground font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;