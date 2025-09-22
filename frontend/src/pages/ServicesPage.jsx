import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Network, Zap, Shield, ArrowRight, Check } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { services } from '../data/mockData';

const ServicesPage = () => {
  const iconMap = {
    ShoppingCart,
    Network,
    Zap,
    Shield
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="display-md mb-6" style={{ color: 'var(--text-primary)' }}>
              Services
            </h1>
            <p className="body-lg max-w-2xl mx-auto">
              Comprehensive SAP Commerce Cloud consulting services to accelerate your digital transformation 
              and optimize your e-commerce platform performance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="card-grid">
              {services.map((service) => {
                const IconComponent = iconMap[service.icon];
                return (
                  <div key={service.id} className="feature-card">
                    <div className="mb-6">
                      <div className="mb-4">
                        <IconComponent size={48} style={{ color: 'var(--accent-primary)' }} />
                      </div>
                      <h3 className="h3 mb-4" style={{ color: 'var(--text-primary)' }}>
                        {service.title}
                      </h3>
                      <p className="body-md mb-6" style={{ color: 'var(--text-secondary)' }}>
                        {service.description}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="h4 mb-4" style={{ color: 'var(--text-primary)' }}>
                        What's Included:
                      </h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <Check size={16} style={{ color: 'var(--accent-primary)' }} className="mt-1 flex-shrink-0" />
                            <span className="body-sm" style={{ color: 'var(--text-secondary)' }}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="h4 mb-4" style={{ color: 'var(--text-primary)' }}>
                        Key Benefits:
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <span 
                              className="inline-block w-2 h-2 rounded-full mt-2 flex-shrink-0"
                              style={{ backgroundColor: 'var(--accent-primary)' }}
                            ></span>
                            <span className="body-sm" style={{ color: 'var(--text-muted)' }}>
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link to="/contact" className="btn-primary w-full">
                      Get Started
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="display-sm mb-6" style={{ color: 'var(--text-primary)' }}>
                My Process
              </h2>
              <p className="body-lg">
                A proven methodology for delivering successful SAP Commerce Cloud projects
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery & Assessment',
                  description: 'Comprehensive analysis of your current systems, requirements, and business objectives.'
                },
                {
                  step: '02',
                  title: 'Strategy & Planning',
                  description: 'Detailed project roadmap with timelines, milestones, and technical architecture design.'
                },
                {
                  step: '03',
                  title: 'Implementation & Development',
                  description: 'Agile development approach with regular updates and quality assurance testing.'
                },
                {
                  step: '04',
                  title: 'Testing & Deployment',
                  description: 'Comprehensive testing, performance optimization, and seamless production deployment.'
                }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                    style={{ 
                      backgroundColor: 'var(--accent-bg)', 
                      color: 'var(--accent-primary)' 
                    }}
                  >
                    {process.step}
                  </div>
                  <h3 className="h4 mb-3" style={{ color: 'var(--text-primary)' }}>
                    {process.title}
                  </h3>
                  <p className="body-sm" style={{ color: 'var(--text-secondary)' }}>
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
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
              Ready to Get Started?
            </h2>
            <p className="body-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your SAP Commerce Cloud requirements and how I can help transform your e-commerce platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Schedule a Consultation
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

export default ServicesPage;