import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Sparkles, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  const benefits = [
    'Early access to new tools and apps',
    'Weekly insights on AI and technology',
    'Exclusive tutorials and resources',
    'Behind-the-scenes development updates'
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Mail className="text-white" size={24} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Stay in the Loop
              </h2>
            </div>
            
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              Get the latest updates on our AI-powered tools, exclusive early access, 
              and insights from the world of technology and innovation.
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-5 h-5 bg-white/20 rounded flex items-center justify-center">
                    <CheckCircle className="text-white flex-shrink-0" size={14} />
                  </div>
                  <span className="text-primary-foreground/90 text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <span>📧</span>
              <span>No spam, unsubscribe anytime</span>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Join 1,000+ Subscribers
              </h3>
              <p className="text-primary-foreground/90 text-sm">
                Weekly updates delivered to your inbox
              </p>
            </div>

            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Welcome to the JR Solvy Community!
                </h4>
                <p className="text-primary-foreground/90 text-sm">
                  Check your email for a confirmation message.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/20 backdrop-blur-sm border-white/30 text-white placeholder:text-white/70 focus:border-white/50 focus:ring-white/25 rounded-xl h-12 font-medium"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={status === 'loading' || !email}
                  className="w-full bg-white text-primary hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl h-12 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {status === 'loading' ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                      <span>Subscribing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send size={18} />
                      <span>Subscribe Now</span>
                    </div>
                  )}
                </Button>

                {status === 'error' && (
                  <p className="text-red-300 text-sm text-center">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}

            <div className="mt-6 pt-6 border-t border-white/20 text-center">
              <p className="text-xs text-primary-foreground/70">
                By subscribing, you agree to our privacy policy and consent to receive updates from JR Solvy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;