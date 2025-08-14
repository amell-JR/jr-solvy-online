
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Smartphone, Globe, Brain, Shield } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const Projects = () => {
  const projects = [
    {
      title: 'IBIVoice',
      category: 'AI Voice Assistant',
      description: 'An intelligent voice assistant application with natural language processing capabilities, built to help users with daily tasks and information retrieval.',
      tech: ['React Native', 'AI/ML', 'Voice Recognition', 'Natural Language Processing'],
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=500',
      icon: Brain,
      color: 'bg-purple-600'
    },
    {
      title: 'Vibe Coding',
      category: 'Educational Platform',
      description: 'A comprehensive coding learning platform featuring interactive tutorials, code challenges, and progress tracking for aspiring developers.',
      tech: ['React', 'Node.js', 'MongoDB', 'Code Editor Integration'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500',
      icon: Globe,
      color: 'bg-sky-500'
    },
    {
      title: 'Uyo SafeAlert',
      category: 'Safety & Security App',
      description: 'A community safety application that allows users to report incidents, receive safety alerts, and connect with local authorities in Uyo.',
      tech: ['React Native', 'Firebase', 'Real-time Notifications', 'Geolocation'],
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500',
      icon: Shield,
      color: 'bg-red-500'
    },
    {
      title: 'E-Commerce Dashboard',
      category: 'Business Analytics',
      description: 'A comprehensive analytics dashboard for e-commerce businesses with real-time sales tracking, inventory management, and customer insights.',
      tech: ['React', 'TypeScript', 'Charts.js', 'REST API'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500',
      icon: Globe,
      color: 'bg-emerald-500'
    },
    {
      title: 'AI Content Generator',
      category: 'AI Tool',
      description: 'An AI-powered content creation tool that helps businesses generate marketing copy, blog posts, and social media content automatically.',
      tech: ['Python', 'OpenAI API', 'React', 'Natural Language Processing'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500',
      icon: Brain,
      color: 'bg-indigo-600'
    },
    {
      title: 'Task Management App',
      category: 'Productivity Tool',
      description: 'A cross-platform task management application with team collaboration features, deadline tracking, and progress visualization.',
      tech: ['Flutter', 'Firebase', 'Push Notifications', 'Cloud Sync'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500',
      icon: Smartphone,
      color: 'bg-orange-500'
    }
  ];

  const technologies = [
    'React', 'React Native', 'Flutter', 'Node.js', 'Python', 'TypeScript', 
    'Firebase', 'MongoDB', 'AI/ML', 'OpenAI API', 'Tailwind CSS', 'Next.js'
  ];

  return (
    <div className="pt-20">
      <SEOHead
        title="Portfolio | AI-Powered Projects & Digital Solutions"
        description="Explore our portfolio of innovative projects: IBIVoice AI assistant, Vibe Coding platform, Uyo SafeAlert app, and more cutting-edge digital solutions."
        keywords="portfolio, AI projects, voice assistant, coding platform, safety app, React Native, AI/ML, mobile apps"
        url="https://jrsolvy.com/projects"
      />
      {/* Hero Section */}
      <section className="bg-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-indigo-600">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore our portfolio of innovative solutions, from AI-powered applications to 
              comprehensive web platforms that drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-indigo-200 group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute top-4 left-4 w-10 h-10 ${project.color} rounded-lg flex items-center justify-center`}>
                    <project.icon className="text-white" size={20} />
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                    {project.category}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-md">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-1">
                      <ExternalLink size={14} />
                      <span>View Details</span>
                    </button>
                    <button className="p-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-indigo-300 transition-colors duration-200">
                      <Github size={16} className="text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable, and innovative solutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-gray-100 hover:border-indigo-200"
              >
                <span className="text-gray-700 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Project Success Metrics
            </h2>
            <p className="text-xl text-indigo-100">
              Numbers that showcase our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-indigo-100 font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">25+</div>
              <div className="text-indigo-100 font-medium">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">98%</div>
              <div className="text-indigo-100 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">3+</div>
              <div className="text-indigo-100 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's collaborate to bring your ideas to life with innovative solutions that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Start Your Project
              </Link>
              <Link
                to="/services"
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-200"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
