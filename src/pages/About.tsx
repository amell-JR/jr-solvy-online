
import React from 'react';
import { Users, Target, Eye, Award, Code, Brain, Calendar, Trophy, Rocket } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We pioneer cutting-edge AI and digital solutions that give our clients a competitive edge in their markets worldwide.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Every project is measured by one metric: did we help our client achieve their business goals and increase their revenue?'
    },
    {
      icon: Award,
      title: 'Excellence Delivered',
      description: 'We deliver exceptional quality on time, every time. Our 98% client satisfaction rate speaks for itself.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on measurable outcomes that drive real business value, with an average 40% ROI increase for our clients.'
    }
  ];

  const journey = [
    {
      year: "2021",
      title: "The Beginning",
      description: "Started with a vision to make AI accessible to businesses worldwide"
    },
    {
      year: "2022",
      title: "First Breakthrough",
      description: "Delivered our first AI automation system, saving a client 20 hours per week"
    },
    {
      year: "2023",
      title: "Rapid Growth",
      description: "Expanded to serve 25+ clients globally with proven digital transformation results"
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description: "Established as a leading global digital innovation partner with 50+ successful projects"
    }
  ];

  const expertise = [
    { skill: "AI & Machine Learning", level: 95 },
    { skill: "Web Development", level: 98 },
    { skill: "Mobile Development", level: 92 },
    { skill: "UI/UX Design", level: 90 },
    { skill: "Digital Strategy", level: 96 }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-50/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-full text-sm font-semibold mb-8 shadow-lg">
              <Rocket className="mr-2" size={16} />
              Meet the Founder & Visionary
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              The Story Behind <span className="text-indigo-600">JR Solvy</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
              From a passionate developer to a leading global digital transformation expert, 
              discover the journey that built JR Solvy into the innovation powerhouse it is today.
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
                Meet <span className="text-indigo-600">Sunday Robert</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  <strong className="text-gray-900">Sunday Robert</strong> didn't start as just another developer. 
                  With a background in computer science and an insatiable curiosity for emerging technologies, 
                  he recognized early that AI and automation would reshape how businesses operate globally.
                </p>
                <p>
                  After witnessing countless businesses struggle with outdated processes and 
                  missed digital opportunities, Sunday founded JR Solvy with a clear mission: 
                  <strong className="text-indigo-600"> make cutting-edge technology accessible and profitable for every business worldwide</strong>.
                </p>
                <p>
                  Today, Sunday leads a team that has delivered <strong className="text-gray-900">50+ successful projects</strong>, 
                  helped clients achieve an average <strong className="text-gray-900">40% increase in ROI</strong>, 
                  and established JR Solvy as a premier global digital transformation partner.
                </p>
              </div>

              {/* Key Achievements */}
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center space-x-3 mb-2">
                    <Trophy className="text-yellow-500" size={24} />
                    <span className="font-bold text-2xl text-gray-900">50+</span>
                  </div>
                  <p className="text-gray-600 font-medium">Projects Delivered</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center space-x-3 mb-2">
                    <Users className="text-blue-500" size={24} />
                    <span className="font-bold text-2xl text-gray-900">98%</span>
                  </div>
                  <p className="text-gray-600 font-medium">Client Satisfaction</p>
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

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Target className="text-white" size={28} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To democratize advanced technology by creating AI-driven solutions and digital experiences 
                that empower businesses worldwide to compete globally, increase their revenue by at least 40%, 
                and build sustainable competitive advantages in the digital economy.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-sky-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Eye className="text-white" size={28} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To become the world's leading digital transformation partner by 2027, known for delivering 
                measurable business results, pioneering AI innovations, and empowering 1000+ businesses 
                to thrive in the digital-first economy.
              </p>
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
              <a
                href="/contact"
                className="bg-white text-indigo-600 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-xl hover:shadow-2xl"
              >
                Schedule Free Consultation
              </a>
              <a
                href="/projects"
                className="border-2 border-white text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                View Success Stories
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
