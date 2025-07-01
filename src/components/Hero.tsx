
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award, Users, Zap } from 'lucide-react';

const Hero = () => {
  const achievements = [
    { icon: Award, text: "50+ Projects Delivered", color: "text-emerald-600" },
    { icon: Users, text: "25+ Happy Clients", color: "text-blue-600" },
    { icon: Zap, text: "98% Success Rate", color: "text-purple-600" }
  ];

  return (
    <section className="bg-white py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-indigo-50/30"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-sky-50/20 transform skew-x-12 translate-x-1/4"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Brand Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-semibold shadow-lg">
              <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></span>
              Award-Winning Digital Solutions
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Transform Your Business with
                <span className="text-indigo-600 block">AI & Innovation</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                We don't just build websites and apps – we create digital experiences that 
                <strong className="text-gray-900"> increase revenue by 40%</strong> and 
                <strong className="text-gray-900"> reduce operational costs by 60%</strong>.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-4">
              {[
                "Custom AI solutions that automate your workflows",
                "Modern web applications that convert visitors to customers",
                "Mobile apps that engage users and drive retention"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-emerald-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Achievement Stats */}
            <div className="flex flex-wrap gap-6 py-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <achievement.icon className={achievement.color} size={24} />
                  <span className="text-gray-800 font-semibold">{achievement.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contact"
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 border-2 border-indigo-600"
              >
                <span>Get Free Consultation</span>
                <ArrowRight size={20} />
              </Link>
              
              <Link
                to="/projects"
                className="border-3 border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 text-center shadow-lg hover:shadow-xl"
              >
                View Success Stories
              </Link>
            </div>

            {/* Trust Indicator */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">Trusted by leading businesses across Nigeria and beyond</p>
              <div className="flex items-center space-x-6 opacity-60">
                <div className="w-20 h-8 bg-gray-300 rounded flex items-center justify-center text-xs font-bold">CLIENT 1</div>
                <div className="w-20 h-8 bg-gray-300 rounded flex items-center justify-center text-xs font-bold">CLIENT 2</div>
                <div className="w-20 h-8 bg-gray-300 rounded flex items-center justify-center text-xs font-bold">CLIENT 3</div>
              </div>
            </div>
          </div>

          {/* Enhanced Visual */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-2xl">JR</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">JR Solvy</h3>
                    <p className="text-indigo-600 font-semibold">Digital Innovation Hub</p>
                  </div>
                </div>
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              </div>

              {/* Services Preview */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-xl">
                  <span className="text-gray-700 font-medium">AI Solutions</span>
                  <span className="text-indigo-600 font-bold">Active</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-sky-50 rounded-xl">
                  <span className="text-gray-700 font-medium">Web Development</span>
                  <span className="text-sky-600 font-bold">Ready</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                  <span className="text-gray-700 font-medium">Mobile Apps</span>
                  <span className="text-purple-600 font-bold">Available</span>
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">3+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-600">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-indigo-600 rounded-2xl opacity-10 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-sky-500 rounded-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-1/2 -right-4 w-6 h-6 bg-purple-500 rounded-full opacity-30 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
