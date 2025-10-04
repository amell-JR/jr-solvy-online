import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Send, User, Mail, MessageSquare, Building2 } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceInterest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      serviceInterest: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          serviceInterest: formData.serviceInterest,
          message: formData.message,
        },
      });

      if (error) {
        throw error;
      }
      
      toast({
        title: "Message sent successfully!",
        description: "We'll reply within 2 hours.",
      });
      
      setFormData({ name: '', email: '', company: '', serviceInterest: '', message: '' });
    } catch (error) {
      console.error('Error sending contact email:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            <User className="inline mr-2" size={16} />
            Name
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            <Mail className="inline mr-2" size={16} />
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className="w-full"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
            <Building2 className="inline mr-2" size={16} />
            Company (Optional)
          </label>
          <Input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your company name"
            className="w-full"
          />
        </div>

        <div>
          <label htmlFor="serviceInterest" className="block text-sm font-medium text-foreground mb-2">
            <MessageSquare className="inline mr-2" size={16} />
            Service Interested In
          </label>
          <Select value={formData.serviceInterest} onValueChange={handleSelectChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ai-automation">AI Solutions & Automation</SelectItem>
              <SelectItem value="cybersecurity">Cybersecurity & Protection</SelectItem>
              <SelectItem value="software-development">Custom Software Development</SelectItem>
              <SelectItem value="tech-training">Tech Training & Consulting</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            <MessageSquare className="inline mr-2" size={16} />
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Please describe your project in detail. Include your goals, timeline, budget range, and any specific requirements..."
            className="w-full min-h-[120px]"
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
        size="lg"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2" size={16} />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;