
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Code, Smartphone, Palette, TrendingUp, Settings, Zap, Shield, Star, ArrowRight,
  Globe, Search, Share2, Mail, Camera, Video, Database, Users, 
  Monitor, Cloud, Lock, BookOpen, Award, Briefcase, BarChart3, Heart,
  PenTool, Music, Dumbbell, Target
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const Services = () => {
  const serviceCategories = [
    {
      category: "Digital & Online Services",
      icon: Globe,
      description: "Build a strong online presence with modern tools and creative solutions",
      color: 'bg-gradient-to-br from-blue-600 to-blue-500',
      accent: 'text-blue-600',
      services: [
        { name: 'Web Design & Development', desc: 'Fast, responsive, and user-friendly websites' },
        { name: 'Mobile App Development', desc: 'Cross-platform apps for Android & iOS' },
        { name: 'SEO (Search Engine Optimization)', desc: 'Rank higher and get found online' },
        { name: 'Social Media Management & Marketing', desc: 'Grow your brand on Facebook, Instagram, LinkedIn & more' },
        { name: 'Email Marketing', desc: 'Campaigns using Brevo, Mailchimp, or Resend' },
        { name: 'Graphic Design', desc: 'Logos, flyers, business cards, and branding' },
        { name: 'Content Writing & Blogging', desc: 'Engaging content to attract your audience' },
        { name: 'Video Editing & Animation', desc: 'Creative visuals for ads, reels, and promotions' },
        { name: 'Data Analysis & Visualization', desc: 'Transform data into actionable insights' },
        { name: 'Virtual Assistance', desc: 'Reliable online support for your daily tasks' }
      ]
    },
    {
      category: "Tech & Software Services",
      icon: Settings,
      description: "Stay ahead with cutting-edge technology solutions",
      color: 'bg-gradient-to-br from-purple-600 to-purple-500',
      accent: 'text-purple-600',
      services: [
        { name: 'IT Support & Troubleshooting', desc: 'Fast help when tech issues strike' },
        { name: 'Software Engineering & Automation', desc: 'Custom tools to save time & money' },
        { name: 'AI Chatbot Development', desc: 'Smart bots to enhance customer experience' },
        { name: 'Cloud Services', desc: 'AWS, Azure, Supabase, Vercel, and more' },
        { name: 'Cybersecurity Audits', desc: 'Protect your business from threats' },
        { name: 'Database Management', desc: 'Secure, scalable, and optimized systems' }
      ]
    },
    {
      category: "Education & Training",
      icon: BookOpen,
      description: "Knowledge-sharing to empower the next generation",
      color: 'bg-gradient-to-br from-emerald-600 to-emerald-500',
      accent: 'text-emerald-600',
      services: [
        { name: 'Private Tutoring', desc: 'Mathematics, Physics, Programming, and more' },
        { name: 'Online Courses Creation', desc: 'Custom e-learning solutions' },
        { name: 'Exam Preparation Coaching', desc: 'Excel in your academics with guided training' },
        { name: 'Language Teaching', desc: 'English, Ibibio, and more' },
        { name: 'Workshops & Training', desc: 'Practical sessions for tech and skills growth' }
      ]
    },
    {
      category: "Business & Professional Services",
      icon: Briefcase,
      description: "Helping individuals and organizations thrive",
      color: 'bg-gradient-to-br from-orange-600 to-orange-500',
      accent: 'text-orange-600',
      services: [
        { name: 'Business Consulting & Strategy', desc: 'Turn ideas into profitable ventures' },
        { name: 'Project Management', desc: 'Organize and deliver results on time' },
        { name: 'Resume & CV Writing', desc: 'Land your dream job with a professional CV' },
        { name: 'Market Research', desc: 'Understand trends, customers, and opportunities' },
        { name: 'Branding & Positioning', desc: 'Stand out from the competition' }
      ]
    },
    {
      category: "Creative & Personal Services",
      icon: Heart,
      description: "Bringing your ideas and passions to life",
      color: 'bg-gradient-to-br from-pink-600 to-pink-500',
      accent: 'text-pink-600',
      services: [
        { name: 'Photography & Videography', desc: 'Capture moments that matter' },
        { name: 'Music Production & Voice-Over', desc: 'Professional sound for your projects' },
        { name: 'Fitness & Health Coaching', desc: 'Achieve your personal wellness goals' },
        { name: 'Life Coaching & Mentorship', desc: 'Guidance for career, business, and personal growth' }
      ]
    }
  ];

  const whyChooseUs = [
    { text: 'Professional & reliable services', icon: Shield },
    { text: 'Tailored solutions for your needs', icon: Target },
    { text: 'Affordable & flexible packages', icon: Heart },
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

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
              Top-notch digital, tech, educational, and professional solutions designed to help you achieve your goals
            </p>
          </div>

          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gradient-to-br from-muted/20 to-background rounded-3xl p-8 border border-border/30">
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mr-6 shadow-lg`}>
                    <category.icon className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{category.category}</h3>
                    <p className="text-muted-foreground font-medium">{category.description}</p>
                  </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/40 hover:border-primary/20 group hover:scale-[1.02]">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <Zap className={category.accent} size={14} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-foreground mb-2 text-lg">{service.name}</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
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
                {whyChooseUs.map((reason, index) => {
                  const colors = [
                    'bg-gradient-to-br from-indigo-600 to-indigo-500',
                    'bg-gradient-to-br from-sky-500 to-sky-400', 
                    'bg-gradient-to-br from-purple-600 to-purple-500',
                    'bg-gradient-to-br from-emerald-600 to-emerald-500'
                  ];
                  return (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className={`w-12 h-12 ${colors[index]} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <reason.icon className="text-white" size={16} />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-2 text-lg">{reason.text}</h3>
                      </div>
                    </div>
                  );
                })}
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
              Ready to take the next step?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 font-medium">
              Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-2 group"
              >
                <span>Contact Us</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/projects"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
