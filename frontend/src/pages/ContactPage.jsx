import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { personalInfo } from '../data/mockData';
import { useToast } from '../hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    projectType: 'consulting'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    toast({
      title: "Message sent successfully!",
      description: "I'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: '',
      projectType: 'consulting'
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, '')}`
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: personalInfo.linkedin
    },
    {
      icon: Github,
      label: 'GitHub',
      href: personalInfo.github
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="display-md mb-6" style={{ color: 'var(--text-primary)' }}>
              Let's Work Together
            </h1>
            <p className="body-lg max-w-2xl mx-auto">
              Ready to transform your e-commerce platform with SAP Commerce Cloud? 
              Get in touch to discuss your project requirements and how I can help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-20 px-4">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="feature-card">
                  <h2 className="h2 mb-6" style={{ color: 'var(--text-primary)' }}>
                    Send me a message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block body-md font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border transition-colors"
                          style={{
                            backgroundColor: 'var(--bg-tertiary)',
                            borderColor: 'var(--border-primary)',
                            color: 'var(--text-primary)'
                          }}
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label className="block body-md font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border transition-colors"
                          style={{
                            backgroundColor: 'var(--bg-tertiary)',
                            borderColor: 'var(--border-primary)',
                            color: 'var(--text-primary)'
                          }}
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block body-md font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border transition-colors"
                          style={{
                            backgroundColor: 'var(--bg-tertiary)',
                            borderColor: 'var(--border-primary)',
                            color: 'var(--text-primary)'
                          }}
                          placeholder="Your company name"
                        />
                      </div>
                      
                      <div>
                        <label className="block body-md font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                          Project Type
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border transition-colors"
                          style={{
                            backgroundColor: 'var(--bg-tertiary)',
                            borderColor: 'var(--border-primary)',
                            color: 'var(--text-primary)'
                          }}
                        >
                          <option value="consulting">SAP Commerce Consulting</option>
                          <option value="implementation">New Implementation</option>
                          <option value="optimization">Performance Optimization</option>
                          <option value="integration">System Integration</option>
                          <option value="support">Technical Support</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block body-md font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border transition-colors"
                        style={{
                          backgroundColor: 'var(--bg-tertiary)',
                          borderColor: 'var(--border-primary)',
                          color: 'var(--text-primary)'
                        }}
                        placeholder="Brief subject of your inquiry"
                      />
                    </div>

                    <div>
                      <label className="block body-md font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 rounded-lg border transition-colors resize-vertical"
                        style={{
                          backgroundColor: 'var(--bg-tertiary)',
                          borderColor: 'var(--border-primary)',
                          color: 'var(--text-primary)'
                        }}
                        placeholder="Tell me about your project requirements, timeline, and any specific challenges you're facing..."
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full">
                      <Send size={20} className="mr-2" />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="feature-card">
                  <h3 className="h3 mb-6" style={{ color: 'var(--text-primary)' }}>
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const IconComponent = info.icon;
                      return (
                        <div key={index} className="flex items-start space-x-4">
                          <div 
                            className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: 'var(--accent-bg)' }}
                          >
                            <IconComponent size={20} style={{ color: 'var(--accent-primary)' }} />
                          </div>
                          <div>
                            <p className="body-sm font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
                              {info.label}
                            </p>
                            {info.href ? (
                              <a 
                                href={info.href}
                                className="body-md transition-colors"
                                style={{ color: 'var(--text-secondary)' }}
                                onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="body-md" style={{ color: 'var(--text-secondary)' }}>
                                {info.value}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="feature-card">
                  <h3 className="h3 mb-6" style={{ color: 'var(--text-primary)' }}>
                    Follow Me
                  </h3>
                  
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors"
                          style={{ backgroundColor: 'var(--bg-tertiary)' }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'var(--accent-primary)';
                            e.target.querySelector('svg').style.color = 'var(--bg-primary)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'var(--bg-tertiary)';
                            e.target.querySelector('svg').style.color = 'var(--text-muted)';
                          }}
                        >
                          <IconComponent size={20} style={{ color: 'var(--text-muted)' }} />
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div className="feature-card">
                  <h3 className="h3 mb-4" style={{ color: 'var(--text-primary)' }}>
                    Response Time
                  </h3>
                  <p className="body-md" style={{ color: 'var(--text-secondary)' }}>
                    I typically respond to all inquiries within 24 hours. For urgent matters, 
                    please feel free to call directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;