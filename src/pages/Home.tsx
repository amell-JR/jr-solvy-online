
import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { Brain, Code, Smartphone, Palette, TrendingUp, Users, Shield, Zap, Star, ArrowRight } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Solutions & Automation',
      description: 'Custom AI tools that reduce manual work by 80% and increase efficiency.',
      benefits: ['Process Automation', 'Predictive Analytics', 'Chatbot Development', 'Data Intelligence'],
      color: 'bg-purple-600',
      hoverColor: 'hover:bg-purple-700'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'High-converting websites that turn visitors into customers with proven results.',
      benefits: ['E-commerce Platforms', 'Business Websites', 'Web Applications', 'API Development'],
      color: 'bg-indigo-600',
      hoverColor: 'hover:bg-indigo-700'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform apps with 4.8+ star ratings and high user retention.',
      benefits: ['iOS Development', 'Android Apps', 'Cross-platform', 'App Store Success'],
      color: 'bg-sky-500',
      hoverColor: 'hover:bg-sky-600'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered designs that increase engagement by 150% and reduce bounce rates.',
      benefits: ['User Research', 'Wireframing', 'Visual Design', 'Usability Testing'],
      color: 'bg-pink-500',
      hoverColor: 'hover:bg-pink-600'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed', sublabel: 'Across 10+ Industries' },
    { number: '25+', label: 'Happy Clients', sublabel: '98% Satisfaction Rate' },
    { number: '3+', label: 'Years Experience', sublabel: 'In Digital Innovation' },
    { number: '40%', label: 'Average ROI Increase', sublabel: 'For Our Clients' }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Startup CEO",
      text: "JR Solvy transformed our business with their AI automation. We saved 15 hours per week!",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Owner",
      text: "Our conversion rate increased by 60% after they redesigned our website. Incredible results!",
      rating: 5
    },
    {
      name: "Priya Patel",
      company: "App Entrepreneur",
      text: "The mobile app they built has over 10,000 downloads and 4.9 stars. Highly recommend!",
      rating: 5
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Proven Track Record",
      description: "50+ successful projects with measurable results and client testimonials."
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Most projects completed 30% faster than industry average without compromising quality."
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "24/7 support and maintenance with 2-hour response time guarantee."
    }
  ];

  return (
    <div>
      <Hero />
      
      {/* Services Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold mb-4">
              <Star className="mr-2" size={16} />
              Premium Digital Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Services That Drive <span className="text-indigo-600">Real Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We don't just deliver projects – we deliver measurable business outcomes that 
              transform your operations and accelerate growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
              >
                <div className={`w-16 h-16 ${service.color} ${service.hoverColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/services"
              className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 space-x-2"
            >
              <span>Explore All Services</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold mb-6">
                <Shield className="mr-2" size={16} />
                Why JR Solvy?
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Results That Speak for <span className="text-indigo-600">Themselves</span>
              </h2>
              <div className="space-y-8">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-indigo-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-indigo-50 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Client Success Stories</h3>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Real metrics from real projects. These numbers represent the tangible value 
              we've delivered to businesses like yours.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl lg:text-6xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-indigo-200 text-sm">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Ready to <span className="text-indigo-600">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Join 25+ successful businesses who've already transformed their operations with our 
              proven digital solutions. Get a free consultation and see exactly how we can help you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-indigo-600 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-indigo-700 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/projects"
                className="border-2 border-indigo-600 text-indigo-600 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Success Stories
              </Link>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">💎 No upfront costs • Free consultation • 30-day money-back guarantee</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
