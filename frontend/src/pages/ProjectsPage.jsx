import React, { useState } from 'react';
import { ExternalLink, Calendar, Users, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { projects } from '../data/mockData';

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'SAP Commerce Cloud Implementation', 'System Integration', 'Performance Enhancement'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="display-md mb-6" style={{ color: 'var(--text-primary)' }}>
              My Projects
            </h1>
            <p className="body-lg max-w-2xl mx-auto">
              Explore my portfolio of SAP Commerce Cloud implementations, system integrations, 
              and performance optimization projects for enterprise clients.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-12 px-4">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-3 rounded-lg transition-colors ${
                    filter === category ? 'btn-primary' : 'btn-ghost'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="card-grid">
              {filteredProjects.map((project) => (
                <div key={project.id} className="feature-card hover-lift cursor-pointer" onClick={() => openProjectModal(project)}>
                  <div className="mb-4">
                    <div 
                      className="w-full h-48 rounded-lg mb-4"
                      style={{ 
                        backgroundColor: 'var(--bg-tertiary)',
                        backgroundImage: `linear-gradient(135deg, var(--bg-tertiary) 0%, var(--accent-bg) 100%)`
                      }}
                    ></div>
                    <span 
                      className="inline-block px-3 py-1 text-sm rounded-lg mb-3"
                      style={{ 
                        backgroundColor: 'var(--accent-bg)', 
                        color: 'var(--accent-primary)' 
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="h3 mb-3" style={{ color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>
                  
                  <p className="body-md mb-4" style={{ color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm" style={{ color: 'var(--text-muted)' }}>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{project.duration}</span>
                      </div>
                    </div>
                    <ArrowRight size={20} style={{ color: 'var(--accent-primary)' }} />
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 text-xs rounded"
                        style={{ 
                          backgroundColor: 'var(--bg-tertiary)', 
                          color: 'var(--text-muted)' 
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span 
                        className="px-2 py-1 text-xs rounded"
                        style={{ 
                          backgroundColor: 'var(--bg-tertiary)', 
                          color: 'var(--text-muted)' 
                        }}
                      >
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
          onClick={closeProjectModal}
        >
          <div 
            className="max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg p-8"
            style={{ backgroundColor: 'var(--bg-secondary)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <span 
                  className="inline-block px-3 py-1 text-sm rounded-lg mb-3"
                  style={{ 
                    backgroundColor: 'var(--accent-bg)', 
                    color: 'var(--accent-primary)' 
                  }}
                >
                  {selectedProject.category}
                </span>
                <h2 className="h1 mb-2" style={{ color: 'var(--text-primary)' }}>
                  {selectedProject.title}
                </h2>
                <p className="body-md" style={{ color: 'var(--text-secondary)' }}>
                  Duration: {selectedProject.duration}
                </p>
              </div>
              <button 
                onClick={closeProjectModal}
                className="text-2xl"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
              >
                ×
              </button>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="h3 mb-4" style={{ color: 'var(--text-primary)' }}>
                  Project Overview
                </h3>
                <p className="body-md" style={{ color: 'var(--text-secondary)' }}>
                  {selectedProject.overview}
                </p>
              </div>

              <div>
                <h3 className="h3 mb-4" style={{ color: 'var(--text-primary)' }}>
                  Challenges
                </h3>
                <ul className="space-y-2">
                  {selectedProject.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span 
                        className="inline-block w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: 'var(--accent-primary)' }}
                      ></span>
                      <span className="body-md" style={{ color: 'var(--text-secondary)' }}>
                        {challenge}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="h3 mb-4" style={{ color: 'var(--text-primary)' }}>
                  Solutions
                </h3>
                <ul className="space-y-2">
                  {selectedProject.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span 
                        className="inline-block w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: 'var(--accent-primary)' }}
                      ></span>
                      <span className="body-md" style={{ color: 'var(--text-secondary)' }}>
                        {solution}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="h3 mb-4" style={{ color: 'var(--text-primary)' }}>
                  Results & Impact
                </h3>
                <ul className="space-y-2">
                  {selectedProject.results.map((result, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span 
                        className="inline-block w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: 'var(--accent-primary)' }}
                      ></span>
                      <span className="body-md" style={{ color: 'var(--text-secondary)' }}>
                        {result}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="h3 mb-4" style={{ color: 'var(--text-primary)' }}>
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 rounded-lg"
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
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProjectsPage;