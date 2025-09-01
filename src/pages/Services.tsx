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
      title: "AI & Software Solutions",
      description: "AI-powered apps including translation tools, job assistants, fact-checking systems, custom software development, and modern web & mobile applications.",
      technologies: ["React", "Python", "OpenAI GPT", "TensorFlow"],
      caseStudy: "Built an AI translation app for GlobalCorp that supports 50+ languages with 95% accuracy, processing 10,000+ translations daily and reducing translation costs by 70%.",
      results: ["50+ languages supported", "95% translation accuracy", "70% cost reduction"],
      color: "bg-gradient-to-br from-primary to-primary/80"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "IT Support & Technical Services",
      description: "Comprehensive remote & on-site IT support, system troubleshooting & maintenance, cybersecurity awareness & consulting for businesses.",
      technologies: ["Remote Support Tools", "System Monitoring", "Security Audits", "Network Management"],
      caseStudy: "Provided 24/7 IT support for TechStartup, reducing system downtime by 90% and implementing cybersecurity measures that prevented 15+ potential threats.",
      results: ["90% reduction in downtime", "24/7 support coverage", "15+ threats prevented"],
      color: "bg-gradient-to-br from-innovation to-innovation/80"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Digital & Creative Services",
      description: "Professional graphic design & branding, engaging content creation, and comprehensive e-commerce solutions using Shopify, Whop, and Selar platforms.",
      technologies: ["Figma", "Adobe Creative Suite", "Shopify", "Content Strategy"],
      caseStudy: "Created complete brand identity and e-commerce store for StyleBrand, increasing online sales by 200% and building a social media following of 25,000+ in 6 months.",
      results: ["200% increase in sales", "25,000+ social followers", "Complete brand transformation"],
      color: "bg-gradient-to-br from-accent to-accent/80"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education & Training",
      description: "Expert AI tutoring in Physics, Computer Science, and Cybersecurity, plus digital skills training and professional document formatting & consulting.",
      technologies: ["AI Learning Tools", "Interactive Tutorials", "Assessment Systems", "Document Templates"],
      caseStudy: "Developed AI tutoring program for EduCenter, helping 500+ students improve their physics grades by an average of 35% while providing 24/7 personalized learning support.",
      results: ["500+ students helped", "35% grade improvement", "24/7 learning support"],
      color: "bg-gradient-to-br from-purple-600 to-purple-500"
    }
  ];

  const whyChooseUs = [
    { text: 'Professional & reliable services', icon: Shield },
    { text: 'Tailored solutions for your needs', icon: Monitor },
    { text: 'Affordable & flexible packages', icon: CheckCircle },
    { text: 'Dedicated support every step of the way', icon: Users }
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
      <section className="bg-gradient-to-br from-primary/10 via-background to-innovation/10 section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-innovation/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container-responsive relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-full text-sm font-semibold shadow-lg mb-6">
              <Star className="w-4 h-4 mr-2" fill="currentColor" />
              Professional Services
            </div>
            <h1 className="text-responsive-3xl font-bold text-foreground mb-6 leading-tight">
              Our <span className="bg-gradient-to-r from-primary to-innovation bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-responsive-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your unique needs. From AI-powered applications to IT support, 
              we deliver results that drive growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="bg-background section-padding">
        <div className="container-responsive">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-responsive-2xl font-bold text-foreground mb-4">
              What We <span className="bg-gradient-to-r from-primary to-innovation bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-responsive-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Four comprehensive service categories designed to meet all your digital needs
            </p>
          </div>

          <div className="grid-responsive-auto gap-6">
            {services.map((service, index) => (
              <div key={index} className="card-modern hover:scale-105 transition-all duration-300 group">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="bg-secondary/50 rounded-xl p-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Case Study */}
                  <div className="bg-gradient-to-r from-primary/5 to-innovation/5 rounded-xl p-4 border border-primary/10">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Success Story:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{service.caseStudy}</p>
                    <div className="space-y-1">
                      {service.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-innovation" />
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
            <h2 className="text-responsive-2xl font-bold text-foreground mb-4">
              Why Choose <span className="bg-gradient-to-r from-primary to-innovation bg-clip-text text-transparent">JRsolvy</span>
            </h2>
          </div>
          
          <div className="grid-responsive-auto gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="card-modern text-center group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-innovation/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <p className="text-foreground font-semibold">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-background section-padding">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="text-responsive-2xl font-bold text-foreground mb-4">
              Our <span className="bg-gradient-to-r from-primary to-innovation bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-responsive-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A proven methodology that ensures your project's success from start to finish
            </p>
          </div>
          
          <div className="grid-responsive-auto gap-6">
            {process.map((step, index) => (
              <div key={index} className="card-modern text-center group hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center mx-auto mb-4 font-bold group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-innovation section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full translate-x-48 translate-y-48 blur-3xl"></div>
        </div>
        
        <div className="container-responsive relative">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-responsive-2xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-responsive-base text-white/90 leading-relaxed mb-8">
              Let's discuss your project and see how we can help bring your vision to life.
            </p>
            
            <div className="flex flex-col xs:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary btn-responsive rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl interactive-scale flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white btn-responsive rounded-2xl font-bold hover:bg-white hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl interactive-scale"
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