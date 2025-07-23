import React from 'react';
import './Education.css';

const educationData = [
  {
    icon: '🎓',
    degree: 'Bachelor of Technology in Computer Science',
    school: 'University Name',
    duration: '2018 - 2022',
    description: 'Studied core computer science subjects, participated in coding competitions, and completed several projects.'
  },
  {
    icon: '🏫',
    degree: 'High School',
    school: 'School Name',
    duration: '2016 - 2018',
    description: 'Focused on science and mathematics, participated in science fairs and extracurricular activities.'
  }
];

function Education() {
  return (
    <div className="education timeline-container">
      <h2>Education</h2>
      <div className="timeline">
        {educationData.map((edu, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-dot edu-dot">
              <span className="edu-icon" role="img" aria-label="icon">{edu.icon}</span>
            </div>
            <div className="timeline-content">
              <h3>{edu.degree}</h3>
              <span className="timeline-company">{edu.school}</span>
              <span className="timeline-duration">{edu.duration}</span>
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education; 