
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Eye, Award, Code, Brain, Calendar, Trophy, Rocket, Shield, Heart, TrendingUp } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const About = () => {
  const values = [
    {
      icon: Brain,
      title: 'People-First Approach',
      description: 'Every solution is designed around real needs'
    },
    {
      icon: Heart,
      title: 'Affordable & Accessible',
      description: 'Quality technology for businesses of all sizes'
    },
    {
      icon: TrendingUp,
      title: 'Innovation with Purpose',
      description: 'Tools that empower, not just impress'
    },
    {
      icon: Shield,
      title: 'Trust & Reliability',
      description: 'Long-term partnerships built on delivery and integrity'
    }
  ];

  const journey = [
    {
      year: "2021",
      title: "Foundation",
      description: "Launched JR Solvy to provide smart digital solutions"
    },
    {
      year: "2022",
      title: "Growth",
      description: "Expanded expertise and diversified services"
    },
    {
      year: "2023",
      title: "Development",
      description: "Strengthened product offerings and client partnerships"
    },
    {
      year: "2024",
      title: "Innovation",
      description: "Advanced AI-powered solutions to meet modern needs"
    }
  ];

  const stats = [
    { number: "6+", label: "Active Products", icon: Trophy },
    { number: "1,000+", label: "Users Served", icon: Users },
    { number: "25+", label: "Businesses Supported", icon: Target }
  ];

  return (
    <div className="pt-20">
      <SEOHead
        title="About JR Solvy | Digital Innovation Company"
        description="Learn about JR Solvy's mission to deliver accessible, affordable, and impactful digital solutions that empower growth through AI-powered software and web platforms."
        keywords="about JR Solvy, digital innovation, company mission, leadership, Josebert"
        url="https://jrsolvy.com/about"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">JR Solvy</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
              JR Solvy is a digital innovation company dedicated to building <strong>accessible, affordable, and impactful solutions</strong> that simplify technology and empower growth. We create AI-powered software, web platforms, and mobile applications that solve real-world challenges for businesses, creators, and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Mission</span>
            </h2>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 border border-primary/10">
              <p className="text-xl text-foreground font-medium leading-relaxed max-w-4xl mx-auto">
                To deliver simple, reliable, and human-centered technology that helps people and organizations unlock opportunities, improve efficiency, and thrive in a digital world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Journey */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Growth Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
              From foundation to innovation in just 3 years
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {journey.map((milestone, index) => (
              <div key={index} className="text-center relative group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{milestone.year}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {milestone.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {milestone.description}
                </p>
                {index < journey.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              What We <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Stand For</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
              The principles that guide every decision, every project, and every client relationship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const colors = [
                'bg-gradient-to-br from-indigo-600 to-indigo-500',
                'bg-gradient-to-br from-pink-600 to-pink-500',
                'bg-gradient-to-br from-emerald-600 to-emerald-500',
                'bg-gradient-to-br from-orange-600 to-orange-500'
              ];
              return (
                <div
                  key={index}
                  className="text-center space-y-6 p-8 rounded-3xl hover:bg-muted/20 transition-all duration-300 border-2 border-transparent hover:border-primary/20 hover:shadow-xl group"
                >
                  <div className={`w-20 h-20 ${colors[index]} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              By the <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Numbers</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Leadership</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium mb-8">
              JR Solvy is guided by a team of innovators, designers, and developers.
            </p>
            
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 border border-primary/10 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-white font-bold text-2xl">J</span>
                </div>
              </div>
              <p className="text-lg text-foreground font-medium">
                <strong>Founder & CEO: Josebert</strong> — driving innovation in web development, mobile solutions, and AI-powered technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full translate-x-48 translate-y-48 blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              Our Promise
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <p className="text-xl text-white font-medium leading-relaxed">
                At JR Solvy, we don't just build technology — we build trust, empowerment, and long-lasting impact through digital innovation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
