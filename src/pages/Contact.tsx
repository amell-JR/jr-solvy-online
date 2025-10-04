
import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import SEOHead from '@/components/SEOHead';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'robertsunday333@gmail.com',
      description: 'Send us an email anytime',
      color: 'bg-primary'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+234 708 305 7837',
      description: 'Call us during business hours',
      color: 'bg-innovation'
    }
  ];

  const services = [
    'AI Solutions & Automation',
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Digital Marketing',
    'IT Consulting',
    'Other'
  ];

  if (isSubmitted) {
    return (
      <div className="pt-16 lg:pt-20 min-h-screen flex items-center justify-center bg-secondary/20">
        <div className="text-center max-w-sm lg:max-w-md mx-auto p-6 lg:p-8">
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-white" size={32} />
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Thank You!</h2>
          <p className="text-muted-foreground mb-6 text-sm lg:text-base">
            Your message has been sent successfully. We'll get back to you within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-primary text-primary-foreground px-6 lg:px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 text-sm lg:text-base"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <SEOHead
        title="Contact Us | Get Your Free Consultation"
        description="Ready to transform your business? Contact JR Solvy for AI solutions, web development, mobile apps, and digital marketing. Free consultation available."
        keywords="contact, consultation, AI solutions, web development, mobile apps, digital marketing, project quote"
        url="https://jrsolvy.com/contact"
      />
      {/* Hero Section */}
      <section className="bg-secondary/20 py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">
              Let's Work <span className="bg-gradient-to-r from-primary to-innovation bg-clip-text text-transparent">Together</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Whether you're a startup, enterprise, or individual, JR Solvy is here to deliver AI-powered innovation, cybersecurity, and support for your success. Connect with us today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16 max-w-2xl mx-auto">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center p-6 lg:p-8 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/30"
              >
                <div className={`w-14 h-14 lg:w-16 lg:h-16 ${info.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-2">
                  {info.title}
                </h3>
                <p className="text-base lg:text-lg font-medium text-foreground mb-1">
                  {info.value}
                </p>
                <p className="text-muted-foreground text-sm">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-20 bg-secondary/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Form */}
            <div>
              <div className="bg-card rounded-2xl shadow-lg p-6 lg:p-8 border border-border/50">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 lg:mb-6">
                  Send us a Message
                </h2>
                <p className="text-muted-foreground mb-6 lg:mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <ContactForm />
              </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-6 lg:space-y-8">
              <div className="bg-gradient-to-r from-primary to-innovation rounded-2xl p-6 lg:p-8 text-white">
                <h3 className="text-xl lg:text-2xl font-bold mb-4">Why Work With Us?</h3>
                <ul className="space-y-3 lg:space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={18} className="mt-1 flex-shrink-0" />
                    <span className="text-sm lg:text-base">AI services designed for any industry</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={18} className="mt-1 flex-shrink-0" />
                    <span className="text-sm lg:text-base">Trusted cybersecurity and technical support</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={18} className="mt-1 flex-shrink-0" />
                    <span className="text-sm lg:text-base">Scalable solutions for startups to enterprises</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={18} className="mt-1 flex-shrink-0" />
                    <span className="text-sm lg:text-base">Technology that drives real impact</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-2xl shadow-lg p-6 lg:p-8 border border-border/50">
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
                  What Happens Next?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 lg:space-x-4">
                    <div className="w-7 h-7 lg:w-8 lg:h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs lg:text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm lg:text-base">We Review Your Message</h4>
                      <p className="text-muted-foreground text-xs lg:text-sm">Our team carefully reviews your requirements and project details.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 lg:space-x-4">
                    <div className="w-7 h-7 lg:w-8 lg:h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs lg:text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm lg:text-base">Initial Consultation</h4>
                      <p className="text-muted-foreground text-xs lg:text-sm">We schedule a free consultation call to discuss your project in detail.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 lg:space-x-4">
                    <div className="w-7 h-7 lg:w-8 lg:h-8 bg-innovation rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs lg:text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm lg:text-base">Proposal & Timeline</h4>
                      <p className="text-muted-foreground text-xs lg:text-sm">We provide a detailed proposal with timeline and pricing information.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
