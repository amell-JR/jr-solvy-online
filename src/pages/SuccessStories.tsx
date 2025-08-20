import React from 'react';
import { Star, Users, Award, TrendingUp, Heart, Quote, Building, MapPin, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';

const SuccessStories = () => {
  const stats = [
    { number: '45%', label: 'Conversion Increase', icon: TrendingUp, description: 'Average conversion rate improvement' },
    { number: '200%', label: 'Traffic Growth', icon: Users, description: 'Organic traffic increase in 6 months' },
    { number: '80%', label: 'Support Automation', icon: Award, description: 'Customer inquiries handled by AI' },
    { number: '40hrs', label: 'Time Saved Weekly', icon: Heart, description: 'Operations time saved through automation' }
  ];

  const successStories = [
    {
      id: 1,
      title: 'E-commerce Growth Success',
      client: 'TechFlow Solutions',
      location: 'San Francisco, CA',
      project: 'E-commerce Website Development',
      challenge: 'Low conversion rates and poor mobile experience',
      solution: 'Complete website redesign with mobile-first approach and conversion optimization',
      results: [
        '45% increase in conversions',
        'Page load time reduced by 60%',
        '250% boost in mobile traffic',
        'ROI achieved within first month'
      ],
      testimonial: 'JR Solvy transformed our online presence completely. Their team delivered a stunning e-commerce website that increased our conversion rate by 45% within the first month. The attention to detail and technical expertise exceeded our expectations.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
      featured: true
    },
    {
      id: 2,
      title: 'AI-Powered Customer Support',
      client: 'InnovateLab',
      location: 'Austin, TX',
      project: 'AI Chatbot Development',
      challenge: 'High support costs and 24/7 availability needs',
      solution: 'Intelligent AI chatbot with natural language processing and integration with existing systems',
      results: [
        '80% reduction in support tickets',
        '$50K annual cost savings',
        '24/7 customer support coverage',
        '95% customer satisfaction rate'
      ],
      testimonial: 'The AI chatbot JR Solvy built for us handles 80% of our customer inquiries automatically. This has reduced our support costs significantly while improving customer satisfaction. Highly recommended!',
      technologies: ['OpenAI API', 'Dialogflow', 'Node.js', 'React', 'WebSocket'],
      featured: true
    },
    {
      id: 3,
      title: 'Inventory Automation System',
      client: 'GreenTech Enterprises',
      location: 'Seattle, WA',
      project: 'Business Process Automation',
      challenge: 'Manual inventory management consuming 40+ hours weekly',
      solution: 'Automated inventory system with real-time tracking and predictive analytics',
      results: [
        '40 hours saved weekly',
        '99.9% system uptime',
        '300% faster processing',
        'Zero inventory discrepancies'
      ],
      testimonial: 'JR Solvy automated our inventory management system, saving us 40 hours per week. The ROI was immediate, and the system has been running flawlessly for months.',
      technologies: ['Python', 'PostgreSQL', 'React', 'APIs', 'Automation'],
      featured: false
    },
    {
      id: 4,
      title: 'SEO & Digital Marketing Success',
      client: 'Digital Dynamics',
      location: 'New York, NY',
      project: 'SEO & Digital Marketing',
      challenge: 'Poor search visibility and low organic traffic',
      solution: 'Comprehensive SEO strategy with content optimization and technical improvements',
      results: [
        '200% increase in organic traffic',
        'First page Google rankings',
        '150% more qualified leads',
        '300% improvement in search visibility'
      ],
      testimonial: 'Our organic traffic increased by 200% in just 6 months thanks to JR Solvy\'s SEO expertise. They understand both the technical and content sides of digital marketing.',
      technologies: ['SEO Tools', 'Google Analytics', 'Content Strategy', 'Technical SEO'],
      featured: false
    },
    {
      id: 5,
      title: 'Mobile App Launch Success',
      client: 'HealthTech Solutions',
      location: 'Boston, MA',
      project: 'Mobile App Development',
      challenge: 'Need for cross-platform mobile presence with excellent UX',
      solution: 'React Native app with intuitive design and robust backend integration',
      results: [
        '10K+ downloads in first month',
        '4.8/5 app store rating',
        '85% user retention rate',
        'Featured in app store'
      ],
      testimonial: 'The mobile app JR Solvy developed for us has been downloaded over 10,000 times in the first month. The user experience is exceptional and the technical implementation is solid.',
      technologies: ['React Native', 'Firebase', 'TypeScript', 'Push Notifications'],
      featured: false
    },
    {
      id: 6,
      title: 'Cloud Migration & Cost Optimization',
      client: 'FinanceFirst Corp',
      location: 'Chicago, IL',
      project: 'Cloud Migration & Security',
      challenge: 'High infrastructure costs and scalability issues',
      solution: 'Complete cloud migration with security hardening and cost optimization',
      results: [
        '50% cost reduction',
        '99.99% uptime achieved',
        'Zero security incidents',
        'Improved scalability'
      ],
      testimonial: 'JR Solvy migrated our entire infrastructure to the cloud seamlessly. We reduced costs by 50% while improving performance and security. Professional service throughout.',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Security', 'Monitoring'],
      featured: false
    }
  ];

  const featuredStories = successStories.filter(story => story.featured);
  const otherStories = successStories.filter(story => !story.featured);

  return (
    <div className="pt-20">
      <SEOHead
        title="Success Stories | Real Client Results & Case Studies"
        description="Discover how JR Solvy helped businesses achieve remarkable results: 45% conversion increases, 200% traffic growth, 80% support automation, and more."
        keywords="success stories, case studies, client results, web development results, digital transformation, ROI"
        url="https://jrsolvy.com/success-stories"
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
              Real Results, <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Measurable Impact</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
              Discover how we've helped businesses transform their digital presence and achieve remarkable growth through innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Impact <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">at a Glance</span>
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

      {/* Featured Success Stories */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
              Deep dive into our most impactful client transformations
            </p>
          </div>

          <div className="space-y-16">
            {featuredStories.map((story, index) => (
              <div key={story.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {story.project}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-foreground">
                    {story.title}
                  </h3>
                  
                  <div className="flex items-center space-x-4 text-muted-foreground">
                    <div className="flex items-center">
                      <Building size={16} className="mr-2" />
                      {story.client}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      {story.location}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
                      <p className="text-muted-foreground">{story.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Solution:</h4>
                      <p className="text-muted-foreground">{story.solution}</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center">
                      <CheckCircle className="text-primary mr-2" size={20} />
                      Key Results:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {story.results.map((result, idx) => (
                        <div key={idx} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>

                  <blockquote className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-primary">
                    <Quote className="text-primary mb-4" size={24} />
                    <p className="text-foreground italic leading-relaxed">
                      "{story.testimonial}"
                    </p>
                  </blockquote>

                  <div className="flex flex-wrap gap-2">
                    {story.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl overflow-hidden shadow-2xl relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                          <TrendingUp className="text-primary" size={40} />
                        </div>
                        <div className="text-primary font-bold text-2xl">
                          {story.results[0].split(' ')[0]}
                        </div>
                        <div className="text-primary/80 font-medium">
                          {story.results[0].split(' ').slice(1).join(' ')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              More <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
              Every project is a partnership, every result is a shared success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherStories.map((story) => (
              <div key={story.id} className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/30 group hover:scale-[1.02]">
                <div className="space-y-4">
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {story.project}
                  </div>

                  <h3 className="text-xl font-bold text-foreground">{story.title}</h3>
                  
                  <div className="text-muted-foreground text-sm">
                    <div className="flex items-center mb-2">
                      <Building size={14} className="mr-2" />
                      {story.client} • {story.location}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {story.challenge}
                  </p>

                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2 text-sm">Key Results:</h4>
                    <div className="space-y-1">
                      {story.results.slice(0, 3).map((result, idx) => (
                        <div key={idx} className="text-xs text-muted-foreground flex items-center">
                          <CheckCircle size={10} className="text-primary mr-2" />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {story.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
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
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 font-medium">
              Let's transform your business with innovative digital solutions that deliver measurable results.
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
                View Services
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-primary-foreground/80 text-sm mb-4">Join our growing list of success stories</p>
              <div className="flex items-center justify-center space-x-8 text-white/60">
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} />
                  <span className="text-sm">Proven Results</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} />
                  <span className="text-sm">Expert Team</span>
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

export default SuccessStories;