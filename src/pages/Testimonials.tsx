import React from 'react';
import { Star, Users, Award, TrendingUp, Heart, Quote, Building, MapPin, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';

const Testimonials = () => {
  const stats = [
    { number: '100+', label: 'Happy Clients', icon: Users, description: 'Businesses served across multiple industries' },
    { number: '98%', label: 'Client Satisfaction', icon: Award, description: 'Based on project completion surveys' },
    { number: '250%', label: 'Average ROI', icon: TrendingUp, description: 'Return on investment for our clients' },
    { number: '24/7', label: 'Support Available', icon: Heart, description: 'Dedicated support when you need it' }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Marketing Director',
      company: 'TechFlow Solutions',
      location: 'San Francisco, CA',
      image: '/api/placeholder/80/80',
      rating: 5,
      date: '2024-01-15',
      project: 'E-commerce Website Development',
      testimonial: 'JR Solvy transformed our online presence completely. Their team delivered a stunning e-commerce website that increased our conversion rate by 45% within the first month. The attention to detail and technical expertise exceeded our expectations.',
      results: ['45% increase in conversions', 'Page load time reduced by 60%', '250% boost in mobile traffic'],
      featured: true
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'CEO & Founder',
      company: 'InnovateLab',
      location: 'Austin, TX',
      image: '/api/placeholder/80/80',
      rating: 5,
      date: '2024-01-08',
      project: 'AI Chatbot Development',
      testimonial: 'The AI chatbot JR Solvy built for us handles 80% of our customer inquiries automatically. This has reduced our support costs significantly while improving customer satisfaction. Highly recommended!',
      results: ['80% reduction in support tickets', '$50K annual cost savings', '24/7 customer support'],
      featured: true
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      title: 'Operations Manager',
      company: 'GreenTech Enterprises',
      location: 'Seattle, WA',
      image: '/api/placeholder/80/80',
      rating: 5,
      date: '2023-12-20',
      project: 'Business Process Automation',
      testimonial: 'JR Solvy automated our inventory management system, saving us 40 hours per week. The ROI was immediate, and the system has been running flawlessly for months.',
      results: ['40 hours saved weekly', '99.9% system uptime', '300% faster processing'],
      featured: false
    },
    {
      id: 4,
      name: 'David Kim',
      title: 'Marketing Lead',
      company: 'Digital Dynamics',
      location: 'New York, NY',
      image: '/api/placeholder/80/80',
      rating: 5,
      date: '2023-12-10',
      project: 'SEO & Digital Marketing',
      testimonial: 'Our organic traffic increased by 200% in just 6 months thanks to JR Solvy\'s SEO expertise. They understand both the technical and content sides of digital marketing.',
      results: ['200% increase in organic traffic', 'First page Google rankings', '150% more qualified leads'],
      featured: false
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      title: 'Product Manager',
      company: 'HealthTech Solutions',
      location: 'Boston, MA',
      image: '/api/placeholder/80/80',
      rating: 5,
      date: '2023-11-25',
      project: 'Mobile App Development',
      testimonial: 'The mobile app JR Solvy developed for us has been downloaded over 10,000 times in the first month. The user experience is exceptional and the technical implementation is solid.',
      results: ['10K+ downloads in first month', '4.8/5 app store rating', '85% user retention rate'],
      featured: false
    },
    {
      id: 6,
      name: 'James Wilson',
      title: 'IT Director',
      company: 'FinanceFirst Corp',
      location: 'Chicago, IL',
      image: '/api/placeholder/80/80',
      rating: 5,
      date: '2023-11-15',
      project: 'Cloud Migration & Security',
      testimonial: 'JR Solvy migrated our entire infrastructure to the cloud seamlessly. We reduced costs by 50% while improving performance and security. Professional service throughout.',
      results: ['50% cost reduction', '99.99% uptime achieved', 'Zero security incidents'],
      featured: false
    }
  ];

  const featuredTestimonials = testimonials.filter(t => t.featured);
  const otherTestimonials = testimonials.filter(t => !t.featured);

  return (
    <div className="pt-20">
      <SEOHead
        title="Client Testimonials & Success Stories | Real Results"
        description="Read genuine testimonials from our satisfied clients. Discover how JR Solvy helped businesses achieve remarkable results with digital solutions."
        keywords="client testimonials, success stories, JR Solvy reviews, web development results, digital transformation"
        url="https://jrsolvy.com/testimonials"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-full text-sm font-semibold shadow-lg mb-6">
              <Star className="w-4 h-4 mr-2" fill="currentColor" />
              Client Success Stories
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Real Stories, <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Real Results</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
              Discover how we've helped businesses transform their digital presence and achieve remarkable growth through innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Impact <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">By Numbers</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
              Measurable results that drive business growth and success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-muted/30 to-background rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <stat.icon className="text-white" size={32} />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                <div className="text-muted-foreground text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
              Hear directly from our clients about their experience and results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredTestimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-border/30 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/10 rounded-full"></div>
                
                <div className="relative">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Quote className="text-primary" size={24} />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>

                  {/* Testimonial */}
                  <blockquote className="text-foreground text-lg leading-relaxed mb-6 font-medium">
                    "{testimonial.testimonial}"
                  </blockquote>

                  {/* Results */}
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-4 mb-6">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <CheckCircle className="text-primary mr-2" size={16} />
                      Key Results:
                    </h4>
                    <ul className="space-y-2">
                      {testimonial.results.map((result, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4 pt-6 border-t border-border/30">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                      <Users className="text-primary" size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-foreground">{testimonial.name}</div>
                      <div className="text-primary font-medium">{testimonial.title}</div>
                      <div className="text-muted-foreground text-sm flex items-center">
                        <Building size={12} className="mr-1" />
                        {testimonial.company}
                        <span className="mx-2">•</span>
                        <MapPin size={12} className="mr-1" />
                        {testimonial.location}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      <Calendar size={12} className="inline mr-1" />
                      {new Date(testimonial.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              More Client <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Testimonials</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
              Every project is a partnership, every result is a shared success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/30 group hover:scale-[1.02]">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                  ))}
                </div>

                {/* Project Type */}
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {testimonial.project}
                </div>

                {/* Testimonial */}
                <blockquote className="text-foreground leading-relaxed mb-4 text-sm">
                  "{testimonial.testimonial}"
                </blockquote>

                {/* Key Results */}
                <div className="bg-muted/30 rounded-lg p-3 mb-4">
                  <div className="text-xs font-semibold text-foreground mb-2">Key Results:</div>
                  <div className="space-y-1">
                    {testimonial.results.slice(0, 2).map((result, idx) => (
                      <div key={idx} className="text-xs text-muted-foreground flex items-center">
                        <CheckCircle size={10} className="text-primary mr-2" />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-3 pt-4 border-t border-border/30">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                    <Users className="text-primary" size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-primary text-xs font-medium">{testimonial.title}</div>
                    <div className="text-muted-foreground text-xs">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full translate-x-48 translate-y-48 blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 font-medium">
              Let's create your next success story together. Start your digital transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-2 group"
              >
                <span>Start Your Project</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                View Our Services
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-primary-foreground/80 text-sm mb-4">Trusted by businesses worldwide</p>
              <div className="flex items-center justify-center space-x-8 text-white/60">
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} />
                  <span className="text-sm">100% Satisfaction</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} />
                  <span className="text-sm">On-Time Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} />
                  <span className="text-sm">Ongoing Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;