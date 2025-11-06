import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: 'MSc Business Analytics and International Business',
      university: 'University of Dundee',
      location: 'Dundee, United Kingdom',
      period: 'Sept 2024 – Sept 2025',
      highlights: [
        'Data Science & Analytics Foundation: Expertise in Database Management (ER Modeling, Normalization, Relational Algebra, SQL) and advanced Statistical Methods',
        'Machine Learning Applications: Linear Regression, Decision Tree, Random Forest, Naive Bayes, XGBoost for predictive analysis',
        'FinTech & Blockchain Knowledge: AI in Financial Technology, Digital Identity, Cloud Computing, Open Banking, and Digital Payments',
        'Strategic Business Acumen: International Business Strategies, Global Finance, Cross-Border Operations analysis'
      ]
    },
    {
      degree: 'Bachelor of Engineering in Electrical Engineering',
      university: 'Rashtrasant Tukdoji Maharaj Nagpur University',
      location: 'Nagpur, India',
      period: 'Jun 2015 – Jun 2019',
      gpa: 'GPA: 7.70/10',
      highlights: [
        'Built strong foundation in quantitative analysis, problem-solving, and technical reasoning',
        'Applied statistical methods, circuit simulation, and mathematical modeling to complex engineering challenges',
        'Specialized in electrical measurement, network analysis, electronic devices, microprocessors, and power systems',
        'Developed analytical thinking and systematic research skills essential for data handling and technical communication'
      ]
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Academic Background</h2>
          <div className="title-underline"></div>
        </div>

        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-header">
                <h3 className="education-degree">{edu.degree}</h3>
                <h4 className="education-university">{edu.university}</h4>
                <div className="education-meta">
                  <span className="education-period">
                    <i className="fas fa-calendar-alt"></i> {edu.period}
                  </span>
                  <span className="education-location">
                    <i className="fas fa-map-marker-alt"></i> {edu.location}
                  </span>
                  {edu.gpa && (
                    <span className="education-gpa">
                      <i className="fas fa-graduation-cap"></i> {edu.gpa}
                    </span>
                  )}
                </div>
              </div>
              <ul className="education-highlights">
                {edu.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

