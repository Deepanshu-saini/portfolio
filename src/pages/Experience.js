import React from 'react';
import './Experience.css';

const experiences = [
  {
    title: 'Software Developer Intern',
    company: 'Company Name',
    duration: '2022 - 2023',
    description: 'Worked on developing web applications using React and Node.js. Contributed to team projects and learned industry best practices.'
  },
  {
    title: 'Freelance Web Developer',
    company: '',
    duration: '2021 - 2022',
    description: 'Built responsive websites for small businesses using modern web technologies.'
  }
];

function Experience() {
  return (
    <div className="experience timeline-container">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <span className="timeline-company">{exp.company}</span>
              <span className="timeline-duration">{exp.duration}</span>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience; 