import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Settings, Palette, GraduationCap, Zap, Star, ArrowRight,
  Code, Shield, Users, Monitor, Bot, Smartphone, CheckCircle
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const Services = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Solutions for Every Field",
      description: "AI-powered automation, data analysis, virtual assistants, and intelligent applications across industries including education, healthcare, retail, security, and more.",
      technologies: ["OpenAI GPT", "TensorFlow", "Python", "Machine Learning"],
      caseStudy: "Deployed AI automation system for RetailCorp across 5 departments, reducing manual tasks by 80% and improving decision-making speed by 60% through predictive analytics.",
      results: ["80% reduction in manual tasks", "60% faster decision-making", "5 departments automated"],
      color: "bg-gradient-to-br from-primary to-primary/80"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Cybersecurity & Ethical Hacking",
      description: "Advanced protection, penetration testing, security training, and customized defense strategies to protect organizations and individuals.",
      technologies: ["Penetration Testing", "Security Audits", "Threat Analysis", "Ethical Hacking"],
      caseStudy: "Conducted comprehensive security assessment for FinanceCorp, identifying 25+ vulnerabilities and implementing defense strategies that prevented 3 major breach attempts.",
      results: ["25+ vulnerabilities identified", "3 breach attempts prevented", "100% security compliance achieved"],
      color: "bg-gradient-to-br from-innovation to-innovation/80"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Software Development",
      description: "Custom mobile apps, web platforms, automation tools, and scalable solutions tailored to client needs across various industries.",
      technologies: ["React", "Node.js", "Mobile Development", "Cloud Platforms"],
      caseStudy: "Built custom inventory management system for LogisticsCorp, streamlining operations across 10 warehouses and reducing processing time by 75%.",
      results: ["10 warehouses connected", "75% faster processing", "Real-time inventory tracking"],
      color: "bg-gradient-to-br from-accent to-accent/80"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Tech Consulting & Training",
      description: "Digital transformation guidance, AI adoption strategies, upskilling programs, and practical training to prepare teams for the future.",
      technologies: ["Digital Strategy", "AI Implementation", "Training Programs", "Change Management"],
      caseStudy: "Led digital transformation for ManufacturingCorp, training 200+ employees on AI tools and increasing operational efficiency by 45% within 6 months.",
      results: ["200+ employees trained", "45% efficiency increase", "Complete digital transformation"],
      color: "bg-gradient-to-br from-purple-600 to-purple-500"
    }
  ];

  const whyChooseUs = [
    { text: 'AI services designed for any industry', icon: Shield },
    { text: 'Trusted cybersecurity and technical support', icon: Monitor },
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="bg-secondary rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Case Study */}
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Success Story:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{service.caseStudy}</p>
                    <div className="space-y-1">
                      {service.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-primary" />
                          <span className="text-xs font-medium text-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
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