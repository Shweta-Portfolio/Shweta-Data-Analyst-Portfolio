import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Teaching Assistant / Learning Support Assistant',
      company: 'Childwall Abbey School',
      location: 'Liverpool, UK',
      period: 'September 2025 - Present',
      responsibilities: [
        'Supporting classroom teachers in delivering lessons tailored to students with diverse learning needs, including children with special educational needs (SEN).',
        'Providing one-on-one and small-group assistance to facilitate engagement, understanding, and academic progress.',
        'Assisting in developing individualized learning plans (ILPs) and adapting educational materials to meet each student\'s unique needs.',
        'Monitoring student behavior and promoting positive social interaction within a supportive learning environment.',
        'Collaborating with teachers, parents, and staff to track student progress and implement interventions for learning and behavioral challenges.'
      ]
    },
    {
      title: 'OET Interlocutor',
      company: 'LILA Liverpool',
      location: 'Liverpool, UK',
      period: 'August 2025 - Present',
      responsibilities: [
        'Currently working as an OET (Occupational English Test) Interlocutor, conducting speaking assessments for healthcare professionals',
        'Facilitating standardized English language proficiency evaluations for medical practitioners seeking to work in English-speaking healthcare environments',
        'Ensuring fair and consistent assessment delivery while maintaining high professional standards in language testing',
        'Contributing to the international healthcare workforce by evaluating candidates\' communication skills in medical contexts'
      ]
    },
    {
      title: 'Behavioural Analyst',
      company: 'MoovBuddy Ltd',
      location: 'London, UK',
      period: 'May 2025 - July 2025',
      responsibilities: [
        'Conducted comprehensive Business Analytics research project analyzing user behavior and marketing performance for the Kegel Men application',
        'Applied advanced quantitative methods including funnel analysis, retention cohort analysis, and RFM segmentation using Amplitude and Facebook Ads Manager data',
        'Developed interactive dashboards in Excel, Power BI, and Google Sheets to visualize user journeys, churn, and retention patterns',
        'Delivered data-driven recommendations that informed UX/UI improvements, retargeting strategies, and pricing model adjustments, enhancing user retention and lifetime value'
      ]
    },
    {
      title: 'Data Analyst',
      company: 'Indothai Kolkata Pvt Ltd',
      location: 'Kolkata, India',
      period: 'Dec 2021 - March 2023',
      responsibilities: [
        'Engineered robust operational data management protocols, significantly enhancing accuracy and reliability of boarding, check-in, and load & trim records',
        'Conducted comprehensive passenger and transaction data analysis to identify discrepancies in flight manifests, baggage records, and weight balance data',
        'Collaborated cross functionally with ground staff, operations control, and customer service teams to deliver actionable insights',
        'Implemented data quality improvement processes by troubleshooting operational integrity issues in customer handling and flight documentation workflows'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <div className="title-underline"></div>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <h4 className="experience-company">{exp.company}</h4>
                  <div className="experience-meta">
                    <span className="experience-period">
                      <i className="fas fa-calendar-alt"></i> {exp.period}
                    </span>
                    <span className="experience-location">
                      <i className="fas fa-map-marker-alt"></i> {exp.location}
                    </span>
                  </div>
                </div>
                <ul className="experience-responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

