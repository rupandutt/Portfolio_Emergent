import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Star, Users, Zap, Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { personalInfo, skills, testimonials } from '../data/mockData';

const HomePage = () => {
  const handleDownloadResume = () => {
    // Mock download functionality
    alert('Resume download functionality will be implemented with backend');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            {/* Professional Photo */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <img 
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-32 h-32 rounded-full object-cover border-4 shadow-lg"
                  style={{ borderColor: 'var(--accent-primary)' }}
                />
                <div 
                  className="absolute inset-0 rounded-full opacity-20"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--accent-primary) 0%, transparent 70%)'
                  }}
                ></div>
              </div>
            </div>
            
            <h1 className="display-lg mb-6" style={{ color: 'var(--text-primary)' }}>
              {personalInfo.name}
            </h1>
            <h2 className="h1 mb-6" style={{ color: 'var(--accent-primary)' }}>
              {personalInfo.title}
            </h2>
            <p className="body-lg mb-8 max-w-2xl mx-auto">
              {personalInfo.tagline}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Get In Touch
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <button onClick={handleDownloadResume} className="btn-secondary">
                <Download size={20} className="mr-2" />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center feature-card">
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--accent-primary)' }}>
                {personalInfo.experience}
              </div>
              <p className="body-md">Years of Experience</p>
            </div>
            <div className="text-center feature-card">
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--accent-primary)' }}>
                15+
              </div>
              <p className="body-md">Technologies Mastered</p>
            </div>
            <div className="text-center feature-card">
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--accent-primary)' }}>
                5+
              </div>
              <p className="body-md">Major Projects Delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Skills Section */}
      <section className="py-20 px-4">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="display-sm mb-6" style={{ color: 'var(--text-primary)' }}>
              Core Expertise
            </h2>
            <p className="body-lg max-w-2xl mx-auto">
              Specialized in SAP Commerce Cloud development with deep expertise in enterprise e-commerce solutions
            </p>
          </div>
          
          <div className="card-grid-3 max-w-6xl mx-auto">
            <div className="feature-card">
              <div className="mb-4">
                <Zap size={48} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <h3 className="h3 mb-4" style={{ color: 'var(--text-primary)' }}>
                SAP Commerce Cloud
              </h3>
              <p className="body-md mb-4">
                Expert in Hybris CCV2 development, implementation, and optimization for enterprise-level e-commerce platforms.
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.primary.slice(0, 3).map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 text-sm rounded-lg"
                    style={{ 
                      backgroundColor: 'var(--accent-bg)', 
                      color: 'var(--accent-primary)' 
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="feature-card">
              <div className="mb-4">
                <Users size={48} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <h3 className="h3 mb-4" style={{ color: 'var(--text-primary)' }}>
                System Integration
              </h3>
              <p className="body-md mb-4">
                Seamless integration of enterprise systems including Azure AD, ServiceNow, and monitoring platforms.
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.technical.slice(0, 3).map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 text-sm rounded-lg"
                    style={{ 
                      backgroundColor: 'var(--accent-bg)', 
                      color: 'var(--accent-primary)' 
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="feature-card">
              <div className="mb-4">
                <Shield size={48} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <h3 className="h3 mb-4" style={{ color: 'var(--text-primary)' }}>
                Performance Optimization
              </h3>
              <p className="body-md mb-4">
                Advanced monitoring and optimization using Dynatrace, New Relic, and Kibana for peak performance.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Dynatrace', 'New Relic', 'Kibana'].map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 text-sm rounded-lg"
                    style={{ 
                      backgroundColor: 'var(--accent-bg)', 
                      color: 'var(--accent-primary)' 
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="display-sm mb-6" style={{ color: 'var(--text-primary)' }}>
              What Clients Say
            </h2>
            <p className="body-lg max-w-2xl mx-auto">
              Trusted by leading organizations for delivering exceptional SAP Commerce Cloud solutions
            </p>
          </div>
          
          <div className="card-grid max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="feature-card">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star 
                      key={index} 
                      size={20} 
                      fill="var(--accent-primary)" 
                      style={{ color: 'var(--accent-primary)' }} 
                    />
                  ))}
                </div>
                <p className="body-md mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {testimonial.name}
                  </p>
                  <p className="body-sm">
                    {testimonial.position} at {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container">
          <div 
            className="feature-card text-center max-w-4xl mx-auto"
            style={{
              background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)'
            }}
          >
            <h2 className="display-sm mb-6" style={{ color: 'var(--text-primary)' }}>
              Ready to Transform Your E-commerce Platform?
            </h2>
            <p className="body-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how my SAP Commerce Cloud expertise can help accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Start Your Project
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link to="/projects" className="btn-secondary">
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;