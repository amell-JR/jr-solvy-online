import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, Code, Brain, Smartphone } from 'lucide-react';

const Blog = () => {
  const categories = [
    { name: 'All', count: 12, active: true },
    { name: 'AI & Tech', count: 5, active: false },
    { name: 'Development', count: 4, active: false },
    { name: 'Tutorials', count: 3, active: false },
  ];

  const featuredPost = {
    title: 'Building the Future with AI: Our Journey Creating SpiritGuardian AI',
    excerpt: 'Discover how we developed an ethical AI companion that combines emotional intelligence with motivational support.',
    author: 'Sunday Robert',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'AI & Tech',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop',
    featured: true
  };

  const posts = [
    {
      title: 'Complete Guide to Learning Vibe Coding',
      excerpt: 'Everything you need to know to get started with our interactive coding eBook.',
      author: 'Sunday Robert',
      date: '2024-01-10',
      readTime: '5 min read',
      category: 'Tutorials',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
      icon: BookOpen
    },
    {
      title: 'Smart Personal Finance: Building SmartSpend',
      excerpt: 'How AI can revolutionize the way you manage your money and achieve financial goals.',
      author: 'Sunday Robert',
      date: '2024-01-08',
      readTime: '6 min read',
      category: 'AI & Tech',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      icon: Brain
    },
    {
      title: 'Document Processing with AI: JR Docs Formatter',
      excerpt: 'Transform scanned documents into clean, formatted Word files using cutting-edge AI.',
      author: 'Sunday Robert',
      date: '2024-01-05',
      readTime: '4 min read',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop',
      icon: Code
    },
    {
      title: 'Language Preservation Through Technology: ibnGPT',
      excerpt: 'How we are using AI to preserve and promote underrepresented languages.',
      author: 'Sunday Robert',
      date: '2024-01-03',
      readTime: '7 min read',
      category: 'AI & Tech',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop',
      icon: Smartphone
    },
    {
      title: 'QR Code Authentication: Security in the Digital Age',
      excerpt: 'Building trust and preventing fraud with our QR Authenticator system.',
      author: 'Sunday Robert',
      date: '2023-12-28',
      readTime: '5 min read',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop',
      icon: Code
    },
    {
      title: 'The Psychology of AI Wellness Apps',
      excerpt: 'Understanding the human element behind SpiritGuardian AI and ethical AI development.',
      author: 'Sunday Robert',
      date: '2023-12-25',
      readTime: '6 min read',
      category: 'AI & Tech',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=250&fit=crop',
      icon: Brain
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Blog & <span className="text-primary">Resources</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Insights, tutorials, and stories from our journey building innovative digital solutions
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  category.active
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Featured Article</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-card rounded-2xl p-8 shadow-sm border">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {featuredPost.category}
                </span>
                <span className="bg-secondary/50 text-secondary-foreground px-3 py-1 rounded-full text-sm">
                  Featured
                </span>
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                {featuredPost.title}
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
              <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Read Article
                <ArrowRight size={16} />
              </button>
            </div>
            <div className="relative">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-12">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="bg-card rounded-xl shadow-sm border hover:shadow-md transition-all duration-300 overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="mt-4 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                    Read More
                    <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Resources & Tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Free resources, guides, and tools to help you on your digital journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 shadow-sm border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Coding Guides
              </h3>
              <p className="text-muted-foreground mb-4">
                Free coding tutorials and best practices for beginners and experts
              </p>
              <button className="text-primary font-medium hover:underline">
                Browse Guides →
              </button>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Development Tools
              </h3>
              <p className="text-muted-foreground mb-4">
                Useful tools and utilities for developers and creators
              </p>
              <button className="text-primary font-medium hover:underline">
                Explore Tools →
              </button>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                AI Resources
              </h3>
              <p className="text-muted-foreground mb-4">
                Learn about AI development and ethical technology practices
              </p>
              <button className="text-primary font-medium hover:underline">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;