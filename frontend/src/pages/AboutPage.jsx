import React from 'react';
import { Download, Award, MapPin, Calendar } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import SkillProgress from '../components/SkillProgress';
import AvailabilityStatus from '../components/AvailabilityStatus';
import { personalInfo, skills, experience, education, honorsAwards, recommendations } from '../data/mockData';

const AboutPage = () => {
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
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 items-start">
              <div className="md:col-span-2">
                <h1 className="display-md mb-6" style={{ color: 'var(--text-primary)' }}>
                  About Me
                </h1>
                <div className="prose prose-lg max-w-none">
                  <div className="body-lg mb-6 leading-relaxed">
                    {personalInfo.bio.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
                <button onClick={handleDownloadResume} className="btn-primary">
                  <Download size={20} className="mr-2" />
                  Download Resume
                </button>
              </div>
              
              <div className="feature-card">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin size={20} style={{ color: 'var(--accent-primary)' }} />
                    <span className="body-md">{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar size={20} style={{ color: 'var(--accent-primary)' }} />
                    <span className="body-md">{personalInfo.experience} Experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award size={20} style={{ color: 'var(--accent-primary)' }} />
                    <span className="body-md">SAP Certified</span>
                  </div>
                </div>
              </div>
              
              {/* Availability Status */}
              <AvailabilityStatus />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="display-sm mb-12 text-center" style={{ color: 'var(--text-primary)' }}>
              Professional Experience
            </h2>
            
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={exp.id} className="feature-card">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="md:col-span-1">
                      <p className="body-sm mb-2" style={{ color: 'var(--accent-primary)' }}>
                        {exp.duration}
                      </p>
                      <h3 className="h4 mb-2" style={{ color: 'var(--text-primary)' }}>
                        {exp.position}
                      </h3>
                      <p className="body-md font-medium" style={{ color: 'var(--text-secondary)' }}>
                        {exp.company}
                      </p>
                    </div>
                    
                    <div className="md:col-span-3">
                      <p className="body-md mb-4" style={{ color: 'var(--text-secondary)' }}>
                        {exp.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="body-md font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="body-sm flex items-start" style={{ color: 'var(--text-muted)' }}>
                              <span 
                                className="inline-block w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0"
                                style={{ backgroundColor: 'var(--accent-primary)' }}
                              ></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 text-sm rounded-lg"
                            style={{ 
                              backgroundColor: 'var(--accent-bg)', 
                              color: 'var(--accent-primary)' 
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="display-sm mb-12 text-center" style={{ color: 'var(--text-primary)' }}>
              Skills & Expertise
            </h2>
            
            <div className="space-y-12">
              {/* Core Skills with Progress */}
              <div className="feature-card">
                <h3 className="h3 mb-6" style={{ color: 'var(--text-primary)' }}>
                  Core SAP Commerce Skills
                </h3>
                <div className="space-y-4">
                  <SkillProgress skill="SAP Commerce Cloud (CCV2)" level={95} delay={0} />
                  <SkillProgress skill="Technical Product Ownership" level={90} delay={200} />
                  <SkillProgress skill="Application Lifecycle Management" level={88} delay={400} />
                  <SkillProgress skill="Agile & Scrum Leadership" level={92} delay={600} />
                  <SkillProgress skill="Cross-functional Coordination" level={85} delay={800} />
                </div>
              </div>

              {/* Technical Skills */}
              <div className="feature-card">
                <h3 className="h3 mb-6" style={{ color: 'var(--text-primary)' }}>
                  Technical Tools & Platforms
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.technical.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 rounded-lg border transition-colors hover:border-accent-primary"
                      style={{ 
                        backgroundColor: 'var(--bg-tertiary)',
                        borderColor: 'var(--border-primary)',
                        color: 'var(--text-secondary)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.borderColor = 'var(--accent-primary)';
                        e.target.style.color = 'var(--accent-primary)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.borderColor = 'var(--border-primary)';
                        e.target.style.color = 'var(--text-secondary)';
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="feature-card">
                <h3 className="h3 mb-6" style={{ color: 'var(--text-primary)' }}>
                  Professional Skills
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {skills.softSkills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: 'var(--accent-primary)' }}
                      ></span>
                      <span className="body-md" style={{ color: 'var(--text-secondary)' }}>
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="feature-card">
                <h3 className="h3 mb-6" style={{ color: 'var(--text-primary)' }}>
                  Professional Certifications
                </h3>
                <div className="space-y-4">
                  {skills.certifications.map((cert, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Award size={20} style={{ color: 'var(--accent-primary)' }} className="mt-1 flex-shrink-0" />
                      <div>
                        <span className="body-md font-medium" style={{ color: 'var(--text-secondary)' }}>
                          {cert.name}
                        </span>
                        <p className="body-sm" style={{ color: 'var(--text-muted)' }}>
                          {cert.date} {cert.provider && `• ${cert.provider}`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="display-sm mb-12 text-center" style={{ color: 'var(--text-primary)' }}>
              Education
            </h2>
            
            <div className="space-y-8">
              {education.map((edu) => (
                <div key={edu.id} className="feature-card">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="md:col-span-1">
                      <p className="body-sm mb-2" style={{ color: 'var(--accent-primary)' }}>
                        {edu.duration}
                      </p>
                      <p className="body-md font-medium" style={{ color: 'var(--text-primary)' }}>
                        {edu.grade}
                      </p>
                    </div>
                    
                    <div className="md:col-span-3">
                      <h3 className="h4 mb-2" style={{ color: 'var(--text-primary)' }}>
                        {edu.degree} {edu.field && `in ${edu.field}`}
                      </h3>
                      <p className="body-md" style={{ color: 'var(--text-secondary)' }}>
                        {edu.institution}, {edu.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Honors & Awards Section */}
      <section className="py-20 px-4">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="display-sm mb-12 text-center" style={{ color: 'var(--text-primary)' }}>
              Honors & Awards
            </h2>
            
            <div className="space-y-8">
              {honorsAwards.map((award) => (
                <div key={award.id} className="feature-card">
                  <div className="flex items-start space-x-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'var(--accent-bg)' }}
                    >
                      <Award size={24} style={{ color: 'var(--accent-primary)' }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="h4 mb-2" style={{ color: 'var(--text-primary)' }}>
                        {award.title}
                      </h3>
                      <p className="body-md mb-2" style={{ color: 'var(--accent-primary)' }}>
                        {award.organization} • {award.date}
                      </p>
                      <p className="body-md" style={{ color: 'var(--text-secondary)' }}>
                        {award.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="py-20 px-4">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="display-sm mb-12 text-center" style={{ color: 'var(--text-primary)' }}>
              Professional Recommendations
            </h2>
            
            <div className="space-y-8">
              {recommendations.map((rec) => (
                <div key={rec.id} className="feature-card">
                  <div className="mb-4">
                    <p className="body-lg italic mb-6" style={{ color: 'var(--text-secondary)' }}>
                      "{rec.content}"
                    </p>
                    <div className="flex items-center space-x-4">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: 'var(--accent-bg)' }}
                      >
                        <span className="font-bold text-lg" style={{ color: 'var(--accent-primary)' }}>
                          {rec.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                          {rec.name}
                        </p>
                        <p className="body-sm" style={{ color: 'var(--text-muted)' }}>
                          {rec.position} at {rec.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BackToTop />
      <Footer />
    </div>
  );
};

export default AboutPage;