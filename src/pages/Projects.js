import React from 'react';
import './Projects.css';

const professionalProjects = [
  {
    title: 'Professional Project One',
    description: 'Description for professional project one. Key features, technologies used, and your role.',
    tech: ['React', 'Node.js'],
    demo: '#',
    image: ''
  },
  {
    title: 'Professional Project Two',
    description: 'Description for professional project two. Key features, technologies used, and your role.',
    tech: ['Express', 'MongoDB'],
    demo: '#',
    image: ''
  },
  {
    title: 'Professional Project Three',
    description: 'Description for professional project three. Key features, technologies used, and your role.',
    tech: ['TypeScript', 'AWS'],
    demo: '#',
    image: ''
  }
];

const personalProjects = [
  {
    title: 'Personal Project One',
    description: 'Description for personal project one. Key features, technologies used, and your role.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    demo: '#',
    image: ''
  },
  {
    title: 'Personal Project Two',
    description: 'Description for personal project two. Key features, technologies used, and your role.',
    tech: ['React', 'Firebase'],
    github: '#',
    demo: '#',
    image: ''
  },
  {
    title: 'Personal Project Three',
    description: 'Description for personal project three. Key features, technologies used, and your role.',
    tech: ['Python', 'Flask'],
    github: '#',
    demo: '#',
    image: ''
  }
];

function Projects() {
  return (
    <div className="projects tile-container">
      <h2>Projects</h2>
      <h3 className="section-title">Professional Projects</h3>
      <div className="tile-grid">
        {professionalProjects.map((project, idx) => (
          <div className="project-tile" key={idx}>
            <div className="tile-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-list">
                {project.tech.map((t, i) => (
                  <span className="tech-item" key={i}>{t}</span>
                ))}
              </div>
              <div className="tile-links">
                <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3 className="section-title">Personal Projects</h3>
      <div className="tile-grid">
        {personalProjects.map((project, idx) => (
          <div className="project-tile" key={idx}>
            <div className="tile-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-list">
                {project.tech.map((t, i) => (
                  <span className="tech-item" key={i}>{t}</span>
                ))}
              </div>
              <div className="tile-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="more-projects">See more personal projects on my <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
    </div>
  );
}

export default Projects; 