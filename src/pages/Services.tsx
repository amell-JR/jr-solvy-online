
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
  // State for filtering services
  const [activeFilter, setActiveFilter] = React.useState('All');
  
  const serviceCategories = [
    {
      category: "Digital & Online Services",
      icon: Globe,
      description: "Build a strong online presence with modern tools and creative solutions",
      color: 'bg-gradient-to-br from-blue-600 to-blue-500',
      accent: 'text-blue-600',
      services: [
        { 
          name: 'Web Design & Development', 
          desc: 'Fast, responsive, and user-friendly websites that convert visitors into customers',
          technologies: 'React, Next.js, TypeScript, Tailwind CSS',
          caseStudy: 'Increased client conversion rate by 45% with optimized landing page design'
        },
        { 
          name: 'Mobile App Development', 
          desc: 'Cross-platform apps for Android & iOS that engage users and drive business growth',
          technologies: 'React Native, Flutter, TypeScript',
          caseStudy: 'Built e-commerce app with 10,000+ downloads in first month'
        },
        { 
          name: 'SEO (Search Engine Optimization)', 
          desc: 'Rank higher and get found online with proven SEO strategies',
          technologies: 'Google Analytics, Search Console, Ahrefs',
          caseStudy: 'Achieved 200% increase in organic traffic within 6 months'
        },
        { 
          name: 'Social Media Management & Marketing', 
          desc: 'Grow your brand and engage customers on Facebook, Instagram, LinkedIn & more',
          technologies: 'Meta Business, LinkedIn Ads, Canva',
          caseStudy: 'Generated 500+ qualified leads through targeted social campaigns'
        },
        { 
          name: 'Email Marketing', 
          desc: 'Automated email campaigns that nurture leads and drive sales',
          technologies: 'Brevo, Mailchimp, Resend',
          caseStudy: 'Achieved 35% open rate and 8% click-through rate for B2B client'
        },
        { 
          name: 'Graphic Design', 
          desc: 'Professional logos, branding, and marketing materials that capture your brand essence',
          technologies: 'Adobe Creative Suite, Figma, Canva',
          caseStudy: 'Complete rebrand resulted in 60% increase in brand recognition'
        },
        { 
          name: 'Content Writing & Blogging', 
          desc: 'SEO-optimized content that educates, engages, and converts your audience',
          technologies: 'WordPress, Ghost, SEO tools',
          caseStudy: 'Blog content strategy drove 150% increase in website dwell time'
        },
        { 
          name: 'Video Editing & Animation', 
          desc: 'Compelling video content for social media, ads, and brand storytelling',
          technologies: 'Adobe Premiere Pro, After Effects, DaVinci Resolve',
          caseStudy: 'Promotional video achieved 2M+ views and 25% engagement rate'
        },
        { 
          name: 'Data Analysis & Visualization', 
          desc: 'Transform raw data into actionable insights with interactive dashboards',
          technologies: 'Power BI, Tableau, Python, SQL',
          caseStudy: 'Data dashboard helped client reduce operational costs by 30%'
        },
        { 
          name: 'Virtual Assistance', 
          desc: 'Reliable administrative and technical support to streamline your operations',
          technologies: 'Project management tools, CRM systems',
          caseStudy: 'Automated client workflows, saving 20 hours per week'
        }
      ]
    },
    {
      category: "Tech & Software Services",
      icon: Settings,
      description: "Stay ahead with cutting-edge technology solutions",
      color: 'bg-gradient-to-br from-purple-600 to-purple-500',
      accent: 'text-purple-600',
      services: [
        { 
          name: 'IT Support & Troubleshooting', 
          desc: 'Fast, reliable technical support to keep your business running smoothly',
          technologies: 'Remote support tools, Monitoring systems',
          caseStudy: 'Reduced client downtime by 90% with proactive monitoring'
        },
        { 
          name: 'Software Engineering & Automation', 
          desc: 'Custom software solutions that automate processes and boost productivity',
          technologies: 'Python, Node.js, APIs, Webhooks',
          caseStudy: 'Automated inventory system saved client 40 hours weekly'
        },
        { 
          name: 'AI Chatbot Development', 
          desc: 'Intelligent chatbots that provide 24/7 customer support and lead generation',
          technologies: 'OpenAI API, Dialogflow, Custom ML models',
          caseStudy: 'AI chatbot handled 80% of customer inquiries, reducing support costs'
        },
        { 
          name: 'Cloud Services', 
          desc: 'Scalable cloud infrastructure for improved performance and cost efficiency',
          technologies: 'AWS, Azure, Google Cloud, Supabase, Vercel',
          caseStudy: 'Cloud migration reduced hosting costs by 50% while improving speed'
        },
        { 
          name: 'Cybersecurity Audits', 
          desc: 'Comprehensive security assessments to protect your business from cyber threats',
          technologies: 'Security scanning tools, Penetration testing',
          caseStudy: 'Security audit identified and fixed 15 critical vulnerabilities'
        },
        { 
          name: 'Database Management', 
          desc: 'Optimized, secure database solutions that scale with your business growth',
          technologies: 'PostgreSQL, MongoDB, Redis, Database optimization',
          caseStudy: 'Database optimization improved query performance by 300%'
        }
      ]
    },
    {
      category: "Education & Training",
      icon: BookOpen,
      description: "Knowledge-sharing to empower the next generation",
      color: 'bg-gradient-to-br from-emerald-600 to-emerald-500',
      accent: 'text-emerald-600',
      services: [
        { 
          name: 'Private Tutoring', 
          desc: 'Personalized instruction in Mathematics, Physics, Programming to accelerate learning',
          technologies: 'Interactive tools, Video conferencing, Digital whiteboards',
          caseStudy: 'Student improved math grades from C to A+ in one semester'
        },
        { 
          name: 'Online Courses Creation', 
          desc: 'Comprehensive e-learning platforms with interactive content and assessments',
          technologies: 'LMS platforms, Video production, Assessment tools',
          caseStudy: 'Created programming course with 95% completion rate and 4.8/5 rating'
        },
        { 
          name: 'Exam Preparation Coaching', 
          desc: 'Strategic preparation for academic and professional certifications',
          technologies: 'Practice platforms, Progress tracking, Mock exams',
          caseStudy: 'Helped 50+ students achieve 90%+ pass rate on certification exams'
        },
        { 
          name: 'Language Teaching', 
          desc: 'Conversational and business language training in English, Ibibio, and more',
          technologies: 'Language apps, Audio/video tools, Cultural resources',
          caseStudy: 'Students achieved fluency 40% faster than traditional methods'
        },
        { 
          name: 'Workshops & Training', 
          desc: 'Hands-on tech workshops and professional development sessions',
          technologies: 'Interactive labs, Group collaboration tools',
          caseStudy: 'Trained 200+ professionals in digital skills with 98% satisfaction'
        }
      ]
    },
    {
      category: "Business & Professional Services",
      icon: Briefcase,
      description: "Helping individuals and organizations thrive",
      color: 'bg-gradient-to-br from-orange-600 to-orange-500',
      accent: 'text-orange-600',
      services: [
        { 
          name: 'Business Consulting & Strategy', 
          desc: 'Strategic guidance to transform ideas into profitable, sustainable businesses',
          technologies: 'Business analysis tools, Financial modeling, Market research',
          caseStudy: 'Helped startup achieve $1M revenue in 18 months with strategic planning'
        },
        { 
          name: 'Project Management', 
          desc: 'Expert project coordination ensuring on-time, on-budget delivery',
          technologies: 'Agile, Scrum, Project management software',
          caseStudy: 'Delivered complex software project 20% under budget and 2 weeks early'
        },
        { 
          name: 'Resume & CV Writing', 
          desc: 'Professional resumes and CVs that get you noticed by top employers',
          technologies: 'ATS optimization, Design tools, Industry insights',
          caseStudy: '95% of clients received interview invitations within 2 weeks'
        },
        { 
          name: 'Market Research', 
          desc: 'Data-driven insights into market trends, competitors, and customer behavior',
          technologies: 'Survey tools, Analytics platforms, Research methodologies',
          caseStudy: 'Market research led to product pivot that increased sales by 180%'
        },
        { 
          name: 'Branding & Positioning', 
          desc: 'Strategic brand development that differentiates you in the marketplace',
          technologies: 'Brand strategy frameworks, Design systems',
          caseStudy: 'Brand repositioning increased client market share by 25%'
        }
      ]
    },
    {
      category: "Creative & Personal Services",
      icon: Heart,
      description: "Bringing your ideas and passions to life",
      color: 'bg-gradient-to-br from-pink-600 to-pink-500',
      accent: 'text-pink-600',
      services: [
        { 
          name: 'Photography & Videography', 
          desc: 'Professional visual storytelling for events, products, and brand content',
          technologies: 'Professional cameras, Editing software, Drone photography',
          caseStudy: 'Event photography package increased client bookings by 150%'
        },
        { 
          name: 'Music Production & Voice-Over', 
          desc: 'High-quality audio production for commercials, podcasts, and media content',
          technologies: 'Pro Tools, Audio interfaces, Studio equipment',
          caseStudy: 'Produced podcast intro that helped show grow to 50K+ listeners'
        },
        { 
          name: 'Fitness & Health Coaching', 
          desc: 'Personalized fitness and nutrition plans to achieve your wellness goals',
          technologies: 'Fitness apps, Nutrition tracking, Virtual training',
          caseStudy: 'Clients achieved average 25% improvement in fitness metrics'
        },
        { 
          name: 'Life Coaching & Mentorship', 
          desc: 'Strategic guidance for career advancement, business growth, and personal development',
          technologies: 'Goal-setting frameworks, Progress tracking tools',
          caseStudy: 'Mentored entrepreneur launched successful business with $500K revenue'
        }
      ]
    }
  ];

  // Filter categories for navigation
  const filterCategories = ['All', ...serviceCategories.map(cat => cat.category)];
  
  // Filter services based on active filter
  const filteredCategories = activeFilter === 'All' 
    ? serviceCategories 
    : serviceCategories.filter(cat => cat.category === activeFilter);

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

          {/* Service Filter Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filterCategories.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg scale-105'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground hover:scale-105'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="space-y-16">
            {filteredCategories.map((category, categoryIndex) => (
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
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <Zap className={category.accent} size={14} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-foreground mb-2 text-lg">{service.name}</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-3">{service.desc}</p>
                          </div>
                        </div>
                        
                        {/* Technologies */}
                        <div className="bg-muted/30 rounded-lg p-3">
                          <p className="text-xs font-semibold text-primary mb-1">Technologies:</p>
                          <p className="text-xs text-muted-foreground">{service.technologies}</p>
                        </div>
                        
                        {/* Case Study */}
                        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-3 border-l-3 border-primary">
                          <p className="text-xs font-semibold text-foreground mb-1">Success Story:</p>
                          <p className="text-xs text-muted-foreground">{service.caseStudy}</p>
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
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
