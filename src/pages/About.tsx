
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Eye, Award, Code, Brain, Calendar, Trophy, Rocket } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Brain,
      title: 'People-First Approach',
      description: 'We care about your growth and success above all else.'
    },
    {
      icon: Users,
      title: 'Affordable & Accessible',
      description: 'Quality solutions for everyone, regardless of budget or technical knowledge.'
    },
    {
      icon: Award,
      title: 'Innovation with Heart',
      description: 'Not just tech, but solutions that connect and empower communities.'
    },
    {
      icon: Target,
      title: 'Trust & Reliability',
      description: 'We deliver what we promise, building lasting relationships.'
    }
  ];

  const journey = [
    {
      year: "2021",
      title: "Foundation",
      description: "Started the journey in digital solutions"
    },
    {
      year: "2022",
      title: "Growth",
      description: "Expanded services and expertise"
    },
    {
      year: "2023",
      title: "Development",
      description: "Enhanced capabilities and client base"
    },
    {
      year: "2024",
      title: "Innovation",
      description: "Continuing to deliver quality solutions"
    }
  ];

  const expertise = [
    { skill: "Web Development", level: 90 },
    { skill: "Mobile Development", level: 85 },
    { skill: "UI/UX Design", level: 80 }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-background section-padding">
        <div className="container-responsive">
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-responsive-3xl font-bold text-foreground mb-4 lg:mb-6">About JRsolvy</h1>
            <p className="text-responsive-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              At JRsolvy, we believe technology should empower, not confuse. Our mission is to create accessible, affordable, and impactful digital solutions tailored to real-world needs.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-6">
                <Code className="mr-2" size={16} />
                Founder's Journey
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Meet <span className="text-indigo-600">Josebert (Sunday Robert)</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  <strong className="text-gray-900">Josebert (Sunday Robert)</strong> is a passionate developer and visionary 
                  with a background in computer science and an insatiable curiosity for emerging technologies. 
                  He recognized early that AI and practical digital tools could reshape how people learn, work, and live.
                </p>
                <p>
                  Guided by a passion for innovation, ethical AI, and meaningful digital transformation, 
                  Sunday founded JR Solvy with a clear mission: 
                  <strong className="text-indigo-600"> build software that solves real problems and empowers creators, learners, and businesses</strong>.
                </p>
                <p>
                  JR Solvy focuses on quality, simplicity, and human-centered design — 
                  creating technology that works for people rather than against them, 
                  with <strong className="text-gray-900">integrity, privacy, and performance</strong> at the core of every product.
                </p>
              </div>

              {/* Key Achievements */}
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center space-x-3 mb-2">
                    <Trophy className="text-yellow-500" size={24} />
                    <span className="font-bold text-2xl text-gray-900">6+</span>
                  </div>
                  <p className="text-gray-600 font-medium">Active Products</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center space-x-3 mb-2">
                    <Users className="text-blue-500" size={24} />
                    <span className="font-bold text-2xl text-gray-900">1000+</span>
                  </div>
                  <p className="text-gray-600 font-medium">Users Served</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              {/* Founder Image Placeholder */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="w-full h-96 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 bg-indigo-600 rounded-full mx-auto flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-4xl">SR</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-800">Sunday Robert</h3>
                      <p className="text-indigo-600 font-semibold">Founder & CEO</p>
                      <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>3+ Years Leading</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Expertise Levels */}
                <div className="space-y-4">
                  {expertise.slice(0, 3).map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">{item.skill}</span>
                        <span className="text-sm text-gray-600">{item.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-indigo-600 h-2 rounded-full transition-all duration-1000" 
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-indigo-600 rounded-2xl opacity-10 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-sky-500 rounded-xl opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Journey */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-indigo-600">Growth Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startup to leading global digital transformation partner in just 3 years
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {journey.map((milestone, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white font-bold text-lg">{milestone.year}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {milestone.title}
                </h3>
                <p className="text-gray-600">
                  {milestone.description}
                </p>
                {index < journey.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Services */}
      <section className="bg-muted/30 section-padding">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <h2 className="text-responsive-2xl font-bold text-foreground mb-4 lg:mb-6">Our Mission</h2>
              <p className="text-responsive-base text-muted-foreground leading-relaxed mb-6">
                We exist to solve everyday tech challenges with simple yet powerful tools, empower communities with education, creativity, and innovation, and build trust by delivering solutions that work, not just promises. We're not just a company — we're your partner in growth.
              </p>
              
              <h2 className="text-responsive-2xl font-bold text-foreground mb-4 lg:mb-6 mt-8">Our Promise</h2>
              <div className="bg-card p-6 rounded-xl border mb-6">
                <p className="text-lg text-card-foreground font-medium text-center leading-relaxed">
                  At JRsolvy, we're building more than solutions.<br />
                  We're building <span className="text-primary font-bold">trust, empowerment, and community through technology.</span>
                </p>
              </div>
            </div>
            
            {/* Team Section */}
            <div className="bg-card p-6 lg:p-8 rounded-3xl shadow-xl border">
              <h2 className="text-responsive-2xl font-bold text-card-foreground mb-6 lg:mb-8">Meet the Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div className="text-center group">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center interactive-scale">
                    <Users className="text-primary group-hover:scale-110 transition-transform" size={32} />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-card-foreground mb-2">Sunday Robert</h3>
                  <p className="text-muted-foreground text-sm mb-3">Founder, Software Engineer, AI Prompt Engineer</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Building the future through intelligent software solutions and AI-powered innovation.
                  </p>
                </div>
                
                <div className="text-center group">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center interactive-scale">
                    <Users className="text-primary group-hover:scale-110 transition-transform" size={32} />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-card-foreground mb-2">Our Network</h3>
                  <p className="text-muted-foreground text-sm mb-3">Designers, Developers & AI Agents</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Supported by a network of talented designers, developers, and AI agents working together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Core <span className="text-indigo-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision, every project, and every client relationship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center space-y-6 p-8 rounded-2xl hover:bg-gray-50 transition-colors duration-300 border-2 border-transparent hover:border-indigo-200 hover:shadow-lg group"
              >
                <div className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Ready to Work with a <span className="text-yellow-300">Proven Leader</span>?
            </h2>
            <p className="text-xl text-indigo-100 mb-12 leading-relaxed">
              Join the 25+ businesses who've already transformed their operations with Sunday's expertise. 
              Get a free consultation and discover exactly how we can accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-indigo-600 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-xl hover:shadow-2xl"
              >
                Schedule Free Consultation
              </Link>
              <Link
                to="/projects"
                className="border-2 border-white text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
