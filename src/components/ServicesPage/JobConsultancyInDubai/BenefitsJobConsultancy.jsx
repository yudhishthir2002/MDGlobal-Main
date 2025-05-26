import React from 'react';
import './BenefitsJobConsultancy.css';

const BenefitsJobConsultancy = () => {
  const benefitsData = [
    {
      title: 'Access to Exclusive Job Opportunities',
      description:
        'Partnering with a job consultancy like MD Global opens doors to job opportunities that are not always advertised publicly. Our extensive network ensures you have access to some of the best positions in Dubai.',
      icon: '🌟',
    },
    {
      title: 'Personalized Career Guidance',
      description:
        'Our consultants provide personalized career advice, helping you understand your strengths and areas for improvement. This tailored approach ensures you are well-prepared for your job search.',
      icon: '📈',
    },
    {
      title: 'Time and Stress Reduction',
      description:
        'Job hunting can be a time-consuming and stressful process. With MD Global, you can focus on your current responsibilities while we handle the search, matching you with suitable positions efficiently.',
      icon: '⏳',
    },
    {
      title: 'Enhanced Job Application Materials',
      description:
        'We assist in crafting compelling resumes and cover letters that stand out to potential employers, increasing your chances of securing interviews.',
      icon: '📄',
    },
    {
      title: 'Interview Coaching',
      description:
        'Our interview preparation services ensure you approach each interview with confidence, equipped with the skills and knowledge to impress prospective employers.',
      icon: '🎤',
    },
  ];

  return (
    <section className="bjc-section">
      <h2 className="bjc-heading">
        Benefits of Job Consultancy in Dubai
      </h2>

      <div className="bjc-container">
        <div className="bjc-image-wrapper">
          <img
            src="https://mdglobalhr.com/wp-content/uploads/2025/01/Job-Consultancy-In-Dubai.jpg"
            alt="Job Consultancy in Dubai"
            className="bjc-image"
          />
          <div className="bjc-image-overlay">
            <h3 className="bjc-image-title">MD Global HR</h3>
            <p className="bjc-image-subtitle">Your Partner in Dubai</p>
            <button className="bjc-image-button">Contact Us</button>
          </div>
        </div>

        <div className="bjc-benefits-grid">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="bjc-benefit-card">
              <div className="bjc-benefit-icon">{benefit.icon}</div>
              <h3 className="bjc-benefit-title">{benefit.title}</h3>
              <p className="bjc-benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsJobConsultancy;