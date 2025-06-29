
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Target } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-sky-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="text-indigo-600" size={24} />
                <span className="text-indigo-600 font-semibold">JR Digital Insights</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Empowering Your
                <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent"> Digital Future</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your business with cutting-edge AI solutions, innovative web development, 
                and digital experiences that drive real results.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Zap className="text-sky-500" size={20} />
                <span className="text-gray-700 font-medium">AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="text-indigo-600" size={20} />
                <span className="text-gray-700 font-medium">Result-Driven</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="text-purple-500" size={20} />
                <span className="text-gray-700 font-medium">Innovative</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="bg-gradient-to-r from-indigo-600 to-sky-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight size={20} />
              </Link>
              
              <Link
                to="/projects"
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-200 text-center"
              >
                View Projects
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-indigo-100 to-sky-100 rounded-2xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-gradient-to-r from-indigo-600 to-sky-500 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-white font-bold text-3xl">JR</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-800">JR Solvy</h3>
                  <p className="text-gray-600">Digital Innovation Hub</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-indigo-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-sky-500 rounded-full opacity-30 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
