import React from 'react';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import { Link } from 'react-router-dom';
import { Bot, Database, Globe, Shield, Smartphone, Cloud, CheckCircle, Users, Lightbulb, Award, Zap, Star, ArrowRight } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const Home = () => {
  const products = [
    {
      icon: Bot,
      title: "Ask JR",
      description: "Your Personal AI Assistant - AI-powered helper that answers questions, assists with tasks, and learns from your needs.",
      status: "Live",
      statusColor: "text-emerald-600",
      features: ["Question Answering", "Task Assistance", "Personalized Learning", "24/7 Availability"],
      color: "text-blue-600",
      hoverColor: "hover:text-blue-700"
    },
    {
      icon: Globe,
      title: "ibnGPT",
      description: "Ibibio Language Translator - Bridging cultures with an AI that translates English ↔ Ibibio and other local dialects.",
      status: "Coming Soon",
      statusColor: "text-purple-600",
      features: ["Language Translation", "Cultural Preservation", "Local Dialects", "Community-Driven"],
      color: "text-purple-600",
      hoverColor: "hover:text-purple-700"
    },
    {
      icon: Database,
      title: "SmartSpend",
      description: "AI Budget & Finance Tracker - Track your expenses, savings, and get personalized financial advice — powered by AI.",
      status: "Beta",
      statusColor: "text-orange-600",
      features: ["Expense Tracking", "AI Financial Advice", "Savings Goals", "Budget Planning"],
      color: "text-emerald-600",
      hoverColor: "hover:text-emerald-700"
    },
    {
      icon: Shield,
      title: "Uyo SafeAlert",
      description: "Community Safety App - Real-time emergency alert system with QR-based ID verification and security tracking.",
      status: "Beta",
      statusColor: "text-orange-600",
      features: ["Emergency Alerts", "QR ID Verification", "Security Tracking", "Community Safety"],
      color: "text-red-600",
      hoverColor: "hover:text-red-700"
    },
    {
      icon: Smartphone,
      title: "Vibe Coding eBook",
      description: "Beginner-friendly guide to AI-enhanced coding. Digital download available with interactive examples and tutorials.",
      status: "Live",
      statusColor: "text-emerald-600",
      features: ["AI-Enhanced Coding", "Interactive Examples", "Beginner-Friendly", "Digital Download"],
      color: "text-indigo-600",
      hoverColor: "hover:text-indigo-700"
    }
  ];

  const stats = [
    { number: '6+', label: 'Active Products', sublabel: 'Across Multiple Categories' },
    { number: '1000+', label: 'Users Served', sublabel: 'Growing Community' },
    { number: '3+', label: 'Years Innovation', sublabel: 'Continuous Development' },
    { number: '24/7', label: 'Support Available', sublabel: 'Always Here to Help' }
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      company: "Startup Founder",
      text: "Vibe Coding made learning to code actually fun! I built my first app in just 3 weeks.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      company: "Freelancer",
      text: "SmartSpend helped me save 30% more money and finally reach my financial goals.",
      rating: 5
    },
    {
      name: "David Kim",
      company: "Small Business Owner",
      text: "The QR Authenticator system completely eliminated document fraud for our business.",
      rating: 5
    }
  ];

  const whyChooseUs = [
    {
      icon: Lightbulb,
      title: "AI that empowers",
      description: "We create intelligent tools that enhance human capability rather than replacing it, making technology work for you."
    },
    {
      icon: Users,
      title: "User-Centered Design",
      description: "Beautiful, intuitive interfaces that prioritize user experience and accessibility for everyone."
    },
    {
      icon: Award,
      title: "Built with Integrity",
      description: "Every product is designed with privacy, security, and ethical considerations at its core."
    },
    {
      icon: Zap,
      title: "Continuous Innovation",
      description: "We continuously evolve our tools based on user feedback and emerging technologies for real-world impact."
    }
  ];

  return (
    <div>
      <SEOHead
        title="JR Solvy | AI Solutions & Digital Innovation"
        description="Empowering Innovation. Accelerating Tomorrow. Intelligent digital tools that solve real problems for creators, learners, and businesses. Experience Ask JR, SmartSpend, Uyo SafeAlert, and more."
        keywords="AI solutions, digital innovation, Ask JR, SmartSpend, Uyo SafeAlert, AI assistant, budget tracker, safety app, React, React Native, automation"
        url="https://jrsolvy.com"
      />
      <Hero />
      
      {/* Products Preview */}
      <section className="bg-background section-padding">
        <div className="container-responsive">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              <Star className="mr-2" size={16} />
              Our Digital Products
            </div>
            <h2 className="text-responsive-2xl font-bold text-foreground mb-4 lg:mb-6">
              Intelligent Tools for <span className="text-primary">Real Problems</span>
            </h2>
            <p className="text-responsive-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Intelligent digital tools designed to solve everyday problems for creators, learners, and businesses.
            </p>
          </div>

          {/* Products Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.slice(0, 3).map((product, index) => (
              <div key={index} className="group bg-card rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border interactive-glow">
                <div className="flex items-center justify-between mb-4 lg:mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-xl flex items-center justify-center interactive-scale">
                      <product.icon className={`${product.color} group-hover:${product.hoverColor} transition-colors`} size={24} />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-card-foreground">{product.title}</h3>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-muted ${product.statusColor}`}>
                    {product.status}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4 lg:mb-6 leading-relaxed">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <CheckCircle className="text-primary" size={14} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 lg:mt-16">
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 bg-primary text-primary-foreground btn-responsive rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl interactive-scale focus-ring"
            >
              <span>View All Products</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/30 section-padding">
        <div className="container-responsive">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-semibold mb-4">
              <Award className="mr-2" size={16} />
              Why JR Solvy?
            </div>
            <h2 className="text-responsive-2xl font-bold text-foreground mb-4 lg:mb-6">Why JR Solvy?</h2>
            <p className="text-responsive-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Technology startup focused on creating practical digital solutions that solve real problems with integrity and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 lg:space-y-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 interactive-scale">
                    <item.icon className="text-primary group-hover:scale-110 transition-transform" size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg lg:text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-card p-6 lg:p-8 rounded-3xl shadow-xl border">
              <h3 className="text-xl lg:text-2xl font-bold text-card-foreground mb-6">User Testimonials</h3>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-background/50 p-4 lg:p-6 rounded-2xl border">
                    <div className="flex items-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-primary fill-current" size={14} />
                      ))}
                    </div>
                    <p className="text-card-foreground mb-4 italic text-sm lg:text-base">"{testimonial.text}"</p>
                    <div>
                      <div className="font-semibold text-card-foreground text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-background section-padding">
        <div className="container-responsive text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-responsive-2xl font-bold text-foreground mb-4 lg:mb-6">Work With Us</h2>
            <p className="text-responsive-base text-muted-foreground mb-8 lg:mb-12 max-w-2xl mx-auto leading-relaxed">
              Need a custom tool, consultation, or integration? We collaborate with individuals, startups, and businesses to build tailored solutions.
            </p>
            
            <div className="flex flex-col xs:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground btn-responsive rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl interactive-scale focus-ring"
              >
                Get in Touch
              </Link>
              <Link
                to="/projects"
                className="border-2 border-primary text-primary btn-responsive rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl focus-ring"
              >
                Request a Demo
              </Link>
            </div>
            
            <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-border">
              <p className="text-xs lg:text-sm text-muted-foreground mb-4">✨ Tech that matters • Digital tools for a smarter tomorrow • Simple. Secure. Powerful.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
};

export default Home;