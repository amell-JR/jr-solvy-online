import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, Code, Brain, User, Tag, TrendingUp, Zap, Smartphone, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';

const Blog = () => {
  const [activeCategory, setActiveCategory] = React.useState('All');
  
  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable React Applications with TypeScript',
      excerpt: 'Learn how to structure and build maintainable React applications using TypeScript, modern patterns, and best practices for large-scale development.',
      content: 'In today\'s fast-paced development world, building scalable React applications is crucial for long-term success. TypeScript provides the type safety and developer experience that makes large applications manageable...',
      author: 'JR Solvy Team',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      category: 'Development',
      tags: ['React', 'TypeScript', 'Frontend', 'Architecture'],
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 2,
      title: 'The Complete Guide to AI Chatbot Development',
      excerpt: 'Step-by-step tutorial on creating intelligent chatbots using modern AI APIs, from basic conversation flows to advanced natural language processing.',
      content: 'AI chatbots are revolutionizing customer service and user engagement. This comprehensive guide walks you through building chatbots that can understand context, maintain conversations, and provide value...',
      author: 'JR Solvy Team',
      publishDate: '2024-01-10',
      readTime: '12 min read',
      category: 'AI & Automation',
      tags: ['AI', 'Chatbots', 'OpenAI', 'Automation'],
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 3,
      title: 'Mobile-First Design: Creating Responsive Web Applications',
      excerpt: 'Master the art of mobile-first design with practical tips, CSS techniques, and responsive patterns that ensure your web apps work perfectly on all devices.',
      content: 'With mobile traffic accounting for over 50% of web usage, mobile-first design isn\'t just a trend—it\'s essential. Learn how to create responsive applications that provide excellent user experiences...',
      author: 'JR Solvy Team',
      publishDate: '2024-01-05',
      readTime: '6 min read',
      category: 'Design',
      tags: ['Mobile', 'Responsive', 'CSS', 'UX Design'],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 4,
      title: 'Database Optimization Techniques for High-Performance Apps',
      excerpt: 'Discover proven strategies to optimize database queries, improve performance, and scale your applications efficiently with practical examples.',
      content: 'Database performance can make or break your application. This guide covers indexing strategies, query optimization, caching mechanisms, and scaling techniques that we use in production...',
      author: 'JR Solvy Team',
      publishDate: '2023-12-28',
      readTime: '10 min read',
      category: 'Backend',
      tags: ['Database', 'Performance', 'PostgreSQL', 'Optimization'],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 5,
      title: 'SEO Best Practices for Modern Web Applications',
      excerpt: 'Comprehensive guide to implementing SEO strategies that actually work in 2024, from technical SEO to content optimization.',
      content: 'SEO has evolved significantly with modern web applications. Learn the latest techniques for technical SEO, content optimization, and performance improvements that drive organic traffic...',
      author: 'JR Solvy Team',
      publishDate: '2023-12-20',
      readTime: '9 min read',
      category: 'Marketing',
      tags: ['SEO', 'Marketing', 'Web Performance', 'Content'],
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 6,
      title: 'Building Real-Time Applications with WebSockets',
      excerpt: 'Learn how to implement real-time features in your web applications using WebSockets, with practical examples and best practices.',
      content: 'Real-time communication is essential for modern applications. This tutorial covers WebSocket implementation, handling connections, managing state, and building scalable real-time features...',
      author: 'JR Solvy Team',
      publishDate: '2023-12-15',
      readTime: '11 min read',
      category: 'Development',
      tags: ['WebSockets', 'Real-time', 'JavaScript', 'Backend'],
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  const categories = [
    { name: 'All', count: blogPosts.length },
    { name: 'Development', count: blogPosts.filter(post => post.category === 'Development').length },
    { name: 'AI & Automation', count: blogPosts.filter(post => post.category === 'AI & Automation').length },
    { name: 'Design', count: blogPosts.filter(post => post.category === 'Design').length },
    { name: 'Backend', count: blogPosts.filter(post => post.category === 'Backend').length },
    { name: 'Marketing', count: blogPosts.filter(post => post.category === 'Marketing').length },
  ];

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const otherPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="pt-20">
      <SEOHead
        title="Blog & Resources | Development Insights & Tutorials"
        description="Expert insights, tutorials, and resources on web development, AI, mobile apps, and digital marketing from the JR Solvy team."
        keywords="web development blog, AI tutorials, mobile app development, digital marketing, React, TypeScript, SEO"
        url="https://jrsolvy.com/blog"
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
              <BookOpen className="w-4 h-4 mr-2" />
              Tech Insights & Tutorials
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Blog & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Resources</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
              Expert insights, practical tutorials, and proven strategies from our experience building digital solutions for businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Featured Article</h2>
              <p className="text-muted-foreground">Our latest deep-dive into modern development practices</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar size={16} className="mr-2" />
                    {new Date(featuredPost.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Clock size={16} className="mr-2" />
                    {featuredPost.readTime}
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-foreground leading-tight">
                  {featuredPost.title}
                </h3>
                
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {featuredPost.tags.map((tag, index) => (
                    <span key={index} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <button className="bg-primary text-white px-8 py-3 rounded-2xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-2">
                  <span>Read Full Article</span>
                  <ArrowRight size={18} />
                </button>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <Code size={64} className="text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeCategory === category.name
                    ? 'bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg scale-105'
                    : 'bg-white text-muted-foreground hover:bg-muted/80 hover:text-foreground hover:scale-105 shadow-sm'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest insights, tutorials, and industry trends
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20 group hover:scale-[1.02]">
                <div className="aspect-[16/10] bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    {post.category === 'Development' && <Code size={32} className="text-primary" />}
                    {post.category === 'AI & Automation' && <Brain size={32} className="text-primary" />}
                    {post.category === 'Design' && <Smartphone size={32} className="text-primary" />}
                    {post.category === 'Backend' && <Globe size={32} className="text-primary" />}
                    {post.category === 'Marketing' && <TrendingUp size={32} className="text-primary" />}
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-primary px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-border/50">
                    <button className="text-primary font-semibold hover:text-primary/80 transition-colors duration-300 flex items-center space-x-2 group">
                      <span>Read More</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full translate-x-48 translate-y-48 blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 font-medium">
              Get weekly updates on development trends, tutorials, and industry insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-2xl border-0 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-primary px-8 py-3 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;