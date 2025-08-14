import React from 'react';
import { Star, Users, Award, TrendingUp, Heart } from 'lucide-react';

const Testimonials = () => {
  const stats = [
    { number: 'Pro', label: 'Quality Work', icon: Users },
    { number: '100%', label: 'Satisfaction', icon: Award },
    { number: 'Growth', label: 'Focused', icon: TrendingUp },
    { number: '24/7', label: 'Support', icon: Heart }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Client <span className="text-primary">Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover how we help businesses transform their digital presence
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your Project?
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;