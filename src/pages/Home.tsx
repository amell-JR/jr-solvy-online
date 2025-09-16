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
      
      {/* Clean CTA Section */}
      <section className="bg-secondary/20 py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Clean headline */}
            <div className="space-y-4 mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                Ready to Bring AI and Innovation
                <span className="text-primary block mt-1">Into Your World?</span>
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Whether you're a startup, enterprise, or individual, JR Solvy is here to deliver AI-powered innovation, cybersecurity, and support for your success.
              </p>
            </div>
            
            {/* Clean CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12">
              <Link
                to="/contact"
                className="group bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-2 hover:-translate-y-0.5"
              >
                <span>Start Your Project</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/services"
                className="bg-background border border-border text-foreground px-8 py-3 rounded-xl font-semibold hover:bg-secondary transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Services
              </Link>
            </div>

            {/* Clean trust indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground text-sm">Successful Projects</div>
              </div>
              
              <div className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground text-sm">Expert Support</div>
              </div>
              
              <div className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center mb-2">
                  <span className="text-3xl font-bold text-primary">5.0</span>
                  <div className="flex ml-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" />
                    ))}
                  </div>
                </div>
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