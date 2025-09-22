import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Projects', href: '/projects' },
      { name: 'Contact', href: '/contact' },
    ],
    expertise: [
      { name: 'SAP Commerce Cloud Management', href: '/projects' },
      { name: 'Product Owner & Agile Leadership', href: '/projects' },
      { name: 'Application Lifecycle Management', href: '/projects' },
      { name: 'Cross-functional Team Coordination', href: '/projects' },
    ],
    contact: [
      { name: 'duttard27@gmail.com', href: 'mailto:duttard27@gmail.com', icon: Mail },
      { name: '(+91) 8617595261', href: 'tel:+918617595261', icon: Phone },
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/rupan-dutta-335615185', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/rupandutta', icon: Github },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-white">Rupan</span>
              <span style={{ color: 'var(--accent-primary)' }}>Dutta</span>
            </div>
            <p className="body-md max-w-md">
              IT Service Manager & Technical Product Owner specializing in SAP Commerce Cloud application management, 
              agile leadership, and cross-functional team coordination for enterprise solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="h4 mb-4" style={{ color: 'var(--text-primary)' }}>Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="body-sm transition-colors"
                    style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise Links */}
          <div>
            <h4 className="h4 mb-4" style={{ color: 'var(--text-primary)' }}>Expertise</h4>
            <ul className="space-y-3">
              {footerLinks.expertise.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="body-sm transition-colors"
                    style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="h4 mb-4" style={{ color: 'var(--text-primary)' }}>Contact</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((contact) => {
                const Icon = contact.icon;
                return (
                  <li key={contact.name} className="flex items-center space-x-3">
                    <Icon size={16} style={{ color: 'var(--accent-primary)' }} />
                    <a
                      href={contact.href}
                      className="body-sm transition-colors"
                      style={{ color: 'var(--text-muted)' }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                    >
                      {contact.name}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6">
              <Link to="/contact" className="btn-primary">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-subtle mt-12 pt-8 text-center">
          <p className="body-sm">
            © {currentYear} Rupan Dutta. All rights reserved. Built with expertise in SAP Commerce Cloud.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;