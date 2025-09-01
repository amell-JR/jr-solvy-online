import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Award, Shield, Users, Heart } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const About = () => {
  const values = [
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Embracing new ideas and technologies'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering quality in everything we do'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Honest and transparent relationships'
    },
    {
      icon: Users,
      title: 'Empowerment',
      description: 'Enabling success for our clients'
    },
    {
      icon: Heart,
      title: 'Service',
      description: 'Putting people first in all we do'
    }
  ];

  return (
    <div className="pt-20">
      <SEOHead
        title="About JRsolvy | Digital Innovation Company"
        description="Learn about JRsolvy's mission to empower individuals, businesses, and communities with innovative digital solutions through AI, IT, and creative services."
        keywords="about JRsolvy, digital innovation, company mission, AI solutions, IT services"
        url="https://jrsolvy.com/about"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-innovation/10 section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-innovation/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container-responsive relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-responsive-3xl font-bold text-foreground mb-6 leading-tight">
              About <span className="bg-gradient-to-r from-primary to-innovation bg-clip-text text-transparent">JRsolvy</span>
            </h1>
            <p className="text-responsive-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We empower individuals, businesses, and communities with innovative digital solutions. 
              We combine technology, creativity, and expertise to solve everyday challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-background section-padding">
        <div className="container-responsive">
          <div className="grid-responsive-2 items-center gap-8 lg:gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-responsive-2xl font-bold text-foreground mb-4">Mission</h2>
                <p className="text-responsive-base text-muted-foreground leading-relaxed">
                  JRsolvy exists to empower individuals, businesses, and communities with innovative digital solutions. 
                  We combine technology, creativity, and expertise to solve everyday challenges.
                </p>
              </div>
              <div>
                <h2 className="text-responsive-2xl font-bold text-foreground mb-4">Vision</h2>
                <p className="text-responsive-base text-muted-foreground leading-relaxed">
                  To become Africa's leading hub for AI innovation, digital solutions, and IT services, 
                  empowering the next generation with technology-driven growth.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-innovation/10 rounded-3xl p-8 backdrop-blur-sm border border-primary/20">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 mx-auto text-innovation bg-innovation/10 rounded-2xl flex items-center justify-center">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Innovation at Scale</h3>
                  <p className="text-muted-foreground">
                    From small startups to established enterprises, we deliver solutions that grow with your ambitions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-secondary/30 section-padding">
        <div className="container-responsive">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-responsive-2xl font-bold text-foreground mb-4">Core Values</h2>
            <p className="text-responsive-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The principles that guide everything we do at JRsolvy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card-modern text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-innovation/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-innovation rounded-full translate-x-48 translate-y-48 blur-3xl"></div>
        </div>
        
        <div className="container-responsive relative">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-responsive-2xl font-bold text-white mb-8">
              Ready to Transform Your Ideas?
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-8">
              <p className="text-responsive-base text-white font-medium leading-relaxed">
                At JRsolvy, we don't just build technology — we build trust, empowerment, and long-lasting impact through digital innovation.
              </p>
            </div>
            
            <div className="flex flex-col xs:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary btn-responsive rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl interactive-scale"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white btn-responsive rounded-2xl font-bold hover:bg-white hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl interactive-scale"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;