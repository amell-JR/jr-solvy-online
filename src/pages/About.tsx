import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Award, Shield, Users, Heart } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const About = () => {
  const values = [
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Bringing AI and creativity into every field'
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'Delivering solutions with trust and transparency'
    },
    {
      icon: Shield,
      title: 'Accessibility',
      description: 'Making technology usable for all'
    },
    {
      icon: Users,
      title: 'Reliability',
      description: 'Supporting clients with dependable service'
    },
    {
      icon: Heart,
      title: 'Impact',
      description: 'Creating technology that makes a difference'
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
      <section className="bg-secondary/30 section-padding">
        
        <div className="container-responsive">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              About <span className="text-primary">JRsolvy</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              JR Solvy is a technology startup dedicated to building AI-powered solutions, secure systems, and digital tools that work across industries. We believe in making innovation accessible, reliable, and impactful for everyone.
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
                <h2 className="text-2xl font-bold text-foreground mb-4">Mission</h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  To simplify technology for universal adoption, deliver AI solutions that empower people and businesses in every field, and build safe, smart, and sustainable digital systems.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Vision</h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  To be a trusted leader in AI, cybersecurity, and digital innovation, shaping how technology transforms industries.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 border border-border shadow-lg">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 mx-auto text-primary bg-primary/10 rounded-xl flex items-center justify-center">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Technology That Works Everywhere</h3>
                  <p className="text-muted-foreground">
                    In classrooms, businesses, enterprises, and communities — our AI-driven services are designed to meet real needs across industries.
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
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Core Values</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The principles that guide everything we do at JRsolvy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white border border-border rounded-xl p-6 text-center hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="bg-primary section-padding">
        
        <div className="container-responsive">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Ready to Transform Your Ideas?
            </h2>
            <div className="bg-white/10 rounded-2xl p-6 mb-8">
              <p className="text-base text-white leading-relaxed">
                At JR Solvy, we create technology that works everywhere — delivering AI-powered innovation, cybersecurity expertise, and reliable support that drives real impact.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all duration-300"
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