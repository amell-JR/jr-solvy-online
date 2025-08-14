
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Code, Smartphone, Palette, TrendingUp, Settings, Zap, Shield, Star, ArrowRight } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Solutions & Automation',
      description: 'Custom AI tools and automation systems to streamline your business processes.',
      features: ['Custom Development', 'Process Automation', 'System Integration'],
      color: 'bg-gradient-to-br from-purple-600 to-purple-500',
      accent: 'text-purple-600'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      features: ['Responsive Design', 'Web Applications', 'CMS Development'],
      color: 'bg-gradient-to-br from-indigo-600 to-indigo-500',
      accent: 'text-indigo-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['iOS Development', 'Android Development', 'Cross-platform Apps'],
      color: 'bg-gradient-to-br from-sky-500 to-sky-400',
      accent: 'text-sky-500'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understanding your requirements and goals.',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Developing the project strategy and roadmap.',
      icon: '📋'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building your solution with modern technologies.',
      icon: '⚡'
    },
    {
      step: '04',
      title: 'Launch',
      description: 'Deploying and supporting your project.',
      icon: '🚀'
    }
  ];

  return (
    <div className="pt-20">
      <SEOHead
        title="Digital Services | AI Solutions, Web Development & More"
        description="Transform your business with our comprehensive digital services: AI solutions, web development, mobile apps, UI/UX design, digital marketing, and IT consulting."
        keywords="AI solutions, web development, mobile app development, digital marketing, UI/UX design, IT consulting, automation, React, React Native"
        url="https://jrsolvy.com/services"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-full text-sm font-semibold shadow-lg mb-6">
              <Star className="w-4 h-4 mr-2" fill="currentColor" />
              Professional Services
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
              Comprehensive digital solutions designed to transform your business and drive growth 
              in today's competitive landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 hover:border-primary/20 group hover:scale-[1.02]"
              >
                <div className={`h-1 ${service.color}`}></div>
                <div className="p-6 sm:p-8">
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="text-white" size={28} />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Zap className={service.accent} size={12} />
                        </div>
                        <span className="text-foreground text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <button className="flex items-center space-x-2 text-primary font-semibold hover:text-primary/80 transition-colors duration-300 group/btn">
                      <span>Learn More</span>
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
              A proven methodology that ensures successful project delivery and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl">{step.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
                Why Choose <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">JR Solvy?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Shield className="text-white" size={16} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">Proven Expertise</h3>
                    <p className="text-muted-foreground leading-relaxed">Years of experience delivering successful projects across various industries.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Zap className="text-white" size={16} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">Cutting-Edge Technology</h3>
                    <p className="text-muted-foreground leading-relaxed">We stay ahead of the curve with the latest technologies and best practices.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="text-white" size={16} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">Results-Driven Approach</h3>
                    <p className="text-muted-foreground leading-relaxed">We focus on delivering measurable results that drive real business value.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Settings className="text-white" size={16} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">Ongoing Support</h3>
                    <p className="text-muted-foreground leading-relaxed">Comprehensive support and maintenance to ensure your continued success.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20 rounded-3xl flex items-center justify-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0">
                  <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/80 rounded-full mx-auto flex items-center justify-center shadow-2xl animate-float">
                    <Settings className="text-white" size={48} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">Excellence in Every Project</h3>
                    <p className="text-muted-foreground font-medium">Quality, Innovation, Results</p>
                    <div className="flex justify-center space-x-1 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full translate-x-48 translate-y-48 blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 font-medium">
              Let's discuss your project and how we can help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-2 group"
              >
                <span>Get Free Consultation</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/projects"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                View Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
