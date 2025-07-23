import React from 'react';
import './Skills.css';

const skills = [
  {
    category: 'Languages & Technologies',
    items: [
      { name: 'JavaScript', icon: '🟨' },
      { name: 'TypeScript', icon: '🟦' },
      { name: 'Python', icon: '🐍' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Java', icon: '☕' }
    ]
  },
  {
    category: 'Frameworks',
    items: [
      { name: 'FastAPI' },
      { name: 'Flask' },
      { name: 'Django' },
      { name: 'Express' },
      { name: 'Angular' },
      { name: 'Node.js', icon: '🟩' },
      { name: 'React.js', icon: '⚛️' },
      { name: 'Spring Boot' },
      { name: 'Nest.js' }
    ]
  },
  {
    category: 'Databases & Cloud',
    items: [
      { name: 'MongoDB' },
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'Redis' },
      { name: 'GCP' },
      { name: 'AWS', icon: '☁️' },
      { name: 'Grafana' },
      { name: 'Azure' }
    ]
  },
  {
    category: 'Tools & Concepts',
    items: [
      { name: 'Git', icon: '🔧' },
      { name: 'Jira' },
      { name: 'Cypress' },
      { name: 'Operating Systems' },
      { name: 'System Design' },
      { name: 'Agile' },
      { name: 'Debugging' }
    ]
  }
];

function Skills() {
  return (
    <div className="skills skills-container">
      <h2>Skills</h2>
      {skills.map((group, idx) => (
        <div className="skill-group" key={idx}>
          <h3>{group.category}</h3>
          <div className="skill-badges">
            {group.items.map((skill, i) => (
              <span className="skill-badge" key={i}>
                {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills; 