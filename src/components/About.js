import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    'Python', 'SQL', 'Machine Learning', 'Power BI',
    'MongoDB', 'Excel', 'Amplitude', 'Statistical Analysis', 'Data Visualization'
  ];

  const researchAreas = [
    {
      title: 'Data Analytics & Business Intelligence',
      icon: '📊'
    },
    {
      title: 'Machine Learning & AI',
      icon: '🤖'
    },
    {
      title: 'Database Management Systems',
      icon: '🗄️'
    },
    {
      title: 'Statistical Analysis & Modeling',
      icon: '📈'
    },
    {
      title: 'Data Visualization & Reporting',
      icon: '📉'
    },
    {
      title: 'International Business Strategy',
      icon: '🌍'
    },
    {
      title: 'Marketing Analytics & Growth',
      icon: '📱'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3 className="about-name">Shweta Sarkar</h3>
            <h4 className="about-role">Data Analytics and Machine Learning Professional & Research Enthusiast</h4>
            <p className="about-description">
              I'm a passionate data analytics professional with expertise in machine learning, predictive modeling, and intelligent database systems. Masters in Business Analytics and International Business from the University of Dundee, I bring a unique blend of technical expertise and business acumen.
            </p>
            <p className="about-description">
              With hands-on experience in behavioral analytics, database management, and operational data analysis, I'm dedicated to advancing data driven decision making through innovative methodologies that integrate AI, database optimization, and business analytics to address complex real-world challenges.
            </p>
            <div className="location-info">
              <i className="fas fa-map-marker-alt"></i>
              <span>Liverpool, Merseyside, United Kingdom</span>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h3 className="subsection-title">Technical Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="research-section">
          <h3 className="subsection-title">Research Areas & Specializations</h3>
          <div className="research-grid">
            {researchAreas.map((area, index) => (
              <div key={index} className="research-card">
                <div className="research-icon">{area.icon}</div>
                <h4 className="research-title">{area.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

