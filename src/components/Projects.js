import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'HR Analytics to Track Employee Performance',
      period: '2024',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'SQL', 'Matplotlib', 'Seaborn'],
      description: 'Analysed HR datasets to identify key factors influencing employee productivity and retention.',
      details: [
        'Applied correlation and regression analysis to evaluate the effects of experience, training hours, and workload.',
        'Generated visual summaries using Matplotlib and Seaborn to present performance insights and trends.'
      ]
    },
    {
      title: 'Uber Trips Data Analysis',
      period: '2024',
      technologies: ['Python', 'SQL', 'Pandas', 'Matplotlib'],
      description: 'Performed comprehensive analysis of Uber trip data to uncover ride frequency, duration, and surge pricing trends.',
      details: [
        'Used SQL for data aggregation and Python for temporal and geospatial analysis to detect peak hours and high-demand zones.',
        'Presented findings through visual analytics to support operational decision-making.'
      ]
    },
    {
      title: 'Box Office Revenue Prediction',
      period: '2024',
      technologies: ['Python', 'Scikit-learn', 'NumPy', 'Matplotlib'],
      description: 'Built a regression model to predict movie box office revenue based on budget, genre, and audience engagement features.',
      details: [
        'Conducted feature engineering and hyperparameter tuning to improve predictive accuracy.',
        'Visualized model performance and identified variables most correlated with commercial success.'
      ]
    },
    {
      title: 'AI-Powered Flight Landing Decision System',
      period: 'March 2025 – May 2025',
      technologies: ['GaussianCopulaSynthesizer', 'KMeans', 'RandomForestClassifier', 'OpenWeatherMap API'],
      description: 'Developed system modeling flight landing decisions (Land, Go Around, Divert) using real-time and simulated data',
      details: [
        'Employed unsupervised KMeans clustering to transform unlabeled data into supervised classification problem',
        'Achieved 96.24% accuracy using RandomForestClassifier, identifying key influencing factors',
        'Enhanced aviation safety, reduced fuel costs, and improved operational efficiency'
      ]
    },
    {
      title: 'Comprehensive Database Management System',
      period: 'Sept 2024 – Nov 2024',
      technologies: ['E-R Model', 'SQL', 'CRUD Operations'],
      description: 'Designed comprehensive database management system for Autobest Emporio Ltd',
      details: [
        'Employed robust methodology including E-R diagramming and SQL CREATE statements',
        'Built tailored user interfaces for Administration, Managers, HR, Suppliers, and Customers',
        'Enhanced operational efficiency and supported data-driven decision-making'
      ]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <div className="title-underline"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-period">
                  <i className="fas fa-calendar-alt"></i> {project.period}
                </span>
              </div>
              <p className="project-description">{project.description}</p>
              <ul className="project-details">
                {project.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
              <div className="project-technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

