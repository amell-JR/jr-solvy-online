import React from 'react';
import { Star, Quote, Users, Award, TrendingUp, Heart } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Tech Entrepreneur',
      company: 'InnovateLab',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=100&h=100&fit=crop&crop=face',
      content: 'JR Solvy transformed our entire digital presence. Their AI solutions have increased our productivity by 300%. Sunday and his team truly understand the future of technology.',
      rating: 5,
      project: 'AI Automation Platform'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CEO',
      company: 'GrowthTech Solutions',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      content: 'Working with JR Solvy was a game-changer. They delivered a mobile app that exceeded all our expectations. The attention to detail and innovative approach is unmatched.',
      rating: 5,
      project: 'Mobile App Development'
    },
    {
      name: 'Dr. Amina Hassan',
      role: 'Research Director',
      company: 'FutureMed Institute',
      image: 'https://images.unsplash.com/photo-1559829578-0cfc3c567b01?w=100&h=100&fit=crop&crop=face',
      content: 'The custom AI solution JR Solvy built for our research has revolutionized how we process data. Their ethical approach to AI development aligns perfectly with our values.',
      rating: 5,
      project: 'Custom AI Development'
    },
    {
      name: 'James Williams',
      role: 'Startup Founder',
      company: 'EcoTech Ventures',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      content: 'JR Solvy helped us bring our vision to life with a stunning web platform. Their technical expertise combined with creative design made all the difference.',
      rating: 5,
      project: 'Web Platform Development'
    },
    {
      name: 'Lisa Park',
      role: 'Digital Marketing Director',
      company: 'Global Brands Inc',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      content: 'The ROI from our project with JR Solvy has been incredible. Their strategic approach to digital transformation helped us reach new markets we never thought possible.',
      rating: 5,
      project: 'Digital Transformation'
    },
    {
      name: 'David Kumar',
      role: 'Product Manager',
      company: 'NextGen Solutions',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      content: 'JR Solvy delivered exactly what we needed, on time and within budget. Their communication throughout the project was exceptional, making the entire process smooth.',
      rating: 5,
      project: 'Product Development'
    }
  ];

  const partners = [
    {
      name: 'TechFlow',
      logo: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=200&h=100&fit=crop',
      description: 'Strategic technology partner for enterprise solutions'
    },
    {
      name: 'InnovateCorp',
      logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=100&fit=crop',
      description: 'Collaboration on AI research and development'
    },
    {
      name: 'FutureLab',
      logo: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=200&h=100&fit=crop',
      description: 'Joint ventures in emerging technologies'
    },
    {
      name: 'GlobalTech',
      logo: 'https://images.unsplash.com/photo-1560472355-109703aa3edc?w=200&h=100&fit=crop',
      description: 'International expansion and market development'
    }
  ];

  const stats = [
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '98%', label: 'Success Rate', icon: Award },
    { number: '300%', label: 'Avg. ROI Increase', icon: TrendingUp },
    { number: '24/7', label: 'Support Available', icon: Heart }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Client <span className="text-primary">Stories</span> & Partnerships
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover how we've helped businesses transform their digital presence and achieve remarkable results
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-primary" size={28} />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real stories from real clients who have experienced the JR Solvy difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-sm border hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>

                <div className="relative mb-6">
                  <Quote className="text-primary/20 absolute -top-2 -left-2" size={32} />
                  <p className="text-muted-foreground leading-relaxed relative z-10">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary">{testimonial.company}</div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <div className="text-xs text-muted-foreground">Project:</div>
                  <div className="text-sm font-medium text-foreground">{testimonial.project}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Strategic Partners
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We collaborate with industry leaders to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-sm border text-center hover:shadow-md transition-all duration-300"
              >
                <div className="w-full h-20 bg-muted/50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-foreground mb-2">{partner.name}</h3>
                <p className="text-sm text-muted-foreground">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let's discuss how we can help transform your business with innovative digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Start Your Project
              </a>
              <a
                href="mailto:robertsunday333@gmail.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200"
              >
                Discuss Partnership
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;