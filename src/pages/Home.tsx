import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
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
      
      {/* CTA Section */}
      <section className="bg-background section-padding">
        <div className="container-responsive text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-responsive-2xl font-bold text-foreground mb-4 lg:mb-6">Ready to take the next step?</h2>
            <p className="text-responsive-base text-muted-foreground mb-8 lg:mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's create something amazing together.
            </p>
            
            <div className="flex flex-col xs:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground btn-responsive rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl interactive-scale focus-ring"
              >
                Contact Us
              </Link>
              <Link
                to="/services"
                className="border-2 border-primary text-primary btn-responsive rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl focus-ring"
              >
                View Services
        </div>
      </section>

      
    </div>
  );
};

export default Home;
  )
}