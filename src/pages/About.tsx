
import React from 'react';
import { Users, Target, Eye, Award, Code, Brain } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new possibilities in AI and digital solutions.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We build lasting relationships through exceptional service and results.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'We deliver excellence in every project, ensuring robust, scalable, and user-friendly solutions.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on measurable outcomes that drive real business value and growth for our clients.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-indigo-600">JR Solvy</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              JR Digital Insights is where innovation meets expertise. We're passionate about transforming 
              businesses through cutting-edge AI solutions, modern web development, and comprehensive digital services.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Founded with a vision to democratize technology and make AI accessible to businesses of all sizes, 
                  JR Solvy has been at the forefront of digital transformation. What started as a passion project 
                  has evolved into a comprehensive digital solutions company.
                </p>
                <p>
                  Led by Sunday Robert, our team combines technical expertise with creative thinking to deliver 
                  solutions that not only meet current needs but anticipate future challenges. We believe in the 
                  power of technology to transform businesses and improve lives.
                </p>
                <p>
                  From AI-powered tools to custom web applications, from mobile apps to digital marketing strategies, 
                  we've helped dozens of clients achieve their digital goals and drive meaningful growth.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-sky-50 border-2 border-sky-200 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-indigo-600 rounded-full mx-auto flex items-center justify-center">
                    <Code className="text-white" size={48} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-800">Innovation Hub</h3>
                    <p className="text-gray-600">Building Tomorrow's Solutions Today</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-indigo-600">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Target className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with innovative AI-driven solutions and cutting-edge digital technologies 
                that drive growth, efficiency, and competitive advantage in an increasingly digital world.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-sky-500">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center">
                  <Eye className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the leading digital transformation partner that bridges the gap between complex technology 
                and practical business solutions, making advanced AI and digital tools accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center space-y-4 p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300 border-2 border-transparent hover:border-indigo-200"
              >
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto">
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Meet Our Founder
          </h2>
          <p className="text-xl text-indigo-100 mb-12 max-w-3xl mx-auto">
            Led by visionary leadership with a passion for innovation and excellence
          </p>
          
          <div className="max-w-md mx-auto bg-white rounded-2xl p-8 shadow-xl">
            <div className="w-24 h-24 bg-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold text-2xl">SR</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Sunday Robert</h3>
            <p className="text-indigo-600 font-semibold mb-4">Founder & CEO</p>
            <p className="text-gray-600">
              A passionate technologist and entrepreneur with expertise in AI, web development, 
              and digital transformation. Committed to helping businesses thrive in the digital age.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
