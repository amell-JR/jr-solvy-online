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
      
      {/* Clean CTA Section */}
      <section className="bg-secondary/50 py-20 lg:py-24">
        
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
              Transform Your Business with 
              <span className="text-primary block lg:inline"> Digital Excellence</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Join the digital revolution. Let's build something extraordinary that drives real results and creates lasting impact for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="bg-primary text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 hover:bg-primary/90"
              >
                <span>Start Your Project</span>
                <ArrowRight size={18} />
              </Link>
              
              <Link
                to="/services"
                className="bg-white border-2 border-primary text-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Explore Services
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-muted-foreground text-sm">Successful Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-muted-foreground text-sm">Expert Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5.0★</div>
                <div className="text-muted-foreground text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;