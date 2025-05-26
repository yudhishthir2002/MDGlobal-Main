import React, { useState } from 'react';
import './FAQS.css';

const FAQS = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const FAQSData = [
    {
      heading: 'What is a Job Consultancy?',
      text: 'A job consultancy is a firm that helps individuals find jobs and companies find suitable employees. They have a wide network of contacts and deep knowledge of the job market, which they use to match job seekers with job openings.',
    },
    {
      heading: 'Why Should I Use a Job Consultancy in Dubai?',
      text: 'Job consultancies have extensive knowledge of the job market in Dubai. They can help you find job opportunities that match your skills and interests. They also provide valuable advice on how to improve your CV and perform well in interviews.',
    },
    {
      heading: 'How Do I Choose a Job Consultancy in Dubai?',
      text: 'Look for a consultancy that specializes in your field of work. Check their reputation by reading reviews and testimonials. Also, consider their success rate in placing candidates in jobs.',
    },
    {
      heading: 'What Services Do Job Consultancies in Dubai Offer?',
      text: 'Job consultancies offer a range of services including CV writing, interview coaching, job search assistance, and career counseling. Some also offer visa and relocation services for international candidates.',
    },
    {
      heading: 'Do I have to pay for job consultancy Services in Dubai ?',
      text: 'A job consultancy is a firm that helps individuals find jobs and companies find suitable employees. They have a wide network of contacts and deep knowledge of the job market, which they use to match job seekers with job openings.',
    },
    {
      heading: 'Can a Job Consultancy in Dubai Guarantee Me a Job ?',
      text: 'No consultancy can guarantee you a job. However, they can increase your chances of finding a job by connecting you with relevant opportunities and helping you present yourself effectively to employers.',
    },
    {
      heading:
        'How Long Does Finding a Job in Dubai Through a Consultancy Take ?',
      text: 'The time it takes to find a job can vary widely depending on your field, experience level, and the job market conditions. It could take anywhere from a few weeks to several months.',
    },
    // Add more items if needed
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqs-section">
      <h3>Frequently Asked Questions (FAQs) About Job Consultancy in Dubai</h3>
      <div className="faq-container">
        {FAQSData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{`Q ${index + 1}. ${faq.heading}`}</span>
              <span className="arrow">{activeIndex === index ? '▲' : '▼'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.text}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQS;
