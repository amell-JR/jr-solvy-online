import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, GraduationCap, ArrowRight,
  Code, Shield, Users, CheckCircle
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const Services = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Solutions & Automation",
      description: "Custom AI tools that automate repetitive tasks, analyze data, and make smarter decisions for your business.",
      whoItsFor: "Small to medium businesses (10-100 employees) looking to reduce manual work",
      benefits: [
        "Save 15-20 hours per week on repetitive tasks",
        "Make faster, data-driven decisions",
        "Reduce human errors in daily operations",
        "24/7 automated customer support"
      ],
      color: "bg-gradient-to-br from-primary to-primary/80"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity & Protection",
      description: "Complete security audits, penetration testing, and ongoing protection to keep your business data safe from threats.",
      whoItsFor: "Nigerian businesses handling customer data, payments, or sensitive information",
      benefits: [
        "Identify security gaps before hackers do",
        "Protect customer trust and your reputation",
        "Meet compliance requirements (NDPR, PCI DSS)",
        "24/7 threat monitoring and response"
      ],
      color: "bg-gradient-to-br from-innovation to-innovation/80"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Software Development",
      description: "Tailored web and mobile apps built specifically for your business processes—no bloated features you don't need.",
      whoItsFor: "Growing businesses that need custom tools (inventory, CRM, booking systems, etc.)",
      benefits: [
        "Software that fits your exact workflow",
        "Faster operations with automation built-in",
        "Mobile access for your team anywhere",
        "Scalable as your business grows"
      ],
      color: "bg-gradient-to-br from-accent to-accent/80"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Tech Training & Consulting",
      description: "Hands-on training for your team to adopt AI tools, cybersecurity best practices, and modern digital workflows.",
      whoItsFor: "Companies upgrading their tech stack or adopting new tools",
      benefits: [
        "Train staff on AI and automation tools",
        "Improve team productivity by 30-40%",
        "Reduce dependency on external consultants",
        "Ongoing support after training"
      ],
      color: "bg-gradient-to-br from-purple-600 to-purple-500"
    }
  ];

  const whyChooseUs = [
    { text: 'AI services designed for any industry', icon: Shield },
    { text: 'Trusted cybersecurity and technical support', icon: Code },
    { text: 'Scalable solutions for startups to enterprises', icon: CheckCircle },
    { text: 'Technology that drives real impact', icon: Users }
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
        description="Transform your business with our comprehensive digital services: AI solutions, web development, mobile apps, IT support, creative design, and education services."
        keywords="AI solutions, web development, mobile app development, IT support, digital design, education, tutoring, cybersecurity"
        url="https://jrsolvy.com/services"
      />

      {/* Hero Section */}
      <section className="bg-secondary/30 section-padding">
        
        <div className="container-responsive">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your unique needs. From AI-powered applications across industries to cybersecurity and technical support, we deliver results that drive growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="bg-background section-padding">
        <div className="container-responsive">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              What We <span className="text-primary">Offer</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Four comprehensive service categories designed to bring AI and innovation to every field
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  
                  {/* Who It's For */}
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border/30">
                    <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center space-x-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span>Who It's For:</span>
                    </h4>
                    <p className="text-muted-foreground text-sm">{service.whoItsFor}</p>
                  </div>

                  {/* Key Benefits */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Benefits:</h4>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-border/30">
                    <Link
                      to="/contact"
                      className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
                    >
                      <span>Schedule Free Consultation</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary/30 section-padding">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Why Choose <span className="text-primary">JRsolvy</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white border border-border rounded-xl p-6 text-center hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                  <item.icon className="w-6 h-6" />
                </div>
                <p className="text-foreground font-medium text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-background section-padding">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A proven methodology that ensures your project's success from start to finish
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div key={index} className="bg-white border border-border rounded-xl p-6 text-center hover:shadow-md transition-all duration-300">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mx-auto mb-4 font-bold text-sm">
                  {step.step}
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary section-padding">
        
        <div className="container-responsive">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-base text-white/90 leading-relaxed mb-8">
              Let's discuss your project and see how we can help bring your vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;