import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, Code, Brain } from 'lucide-react';

const Blog = () => {
  const categories = [
    { name: 'All', count: 3, active: true },
    { name: 'Development', count: 2, active: false },
    { name: 'Tutorials', count: 1, active: false },
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
              Insights and tutorials from our journey building digital solutions
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

      {/* Resources Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Resources & Tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Resources and guides to help you on your digital journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 shadow-sm border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Development Guides
              </h3>
              <p className="text-muted-foreground mb-4">
                Tutorials and best practices for modern development
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
                Useful tools and utilities for developers
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
                Tech Resources
              </h3>
              <p className="text-muted-foreground mb-4">
                Learn about modern technology practices
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