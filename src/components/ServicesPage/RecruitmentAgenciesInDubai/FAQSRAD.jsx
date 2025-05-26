import React, { useState } from 'react';
import './FAQSRAD.css'; // Importing your custom CSS

const FAQSRAD = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const FAQSRADDta = [
    {
      heading: 'What Is A Recruitment Agency ?',
      text: 'A recruitment agency is a company that acts as a bridge between employers and job seekers, helping to match the right candidate with the right job',
    },
    {
      heading: 'What Industries Do Recruitment Agencies in Dubai Cover ?',
      text: 'Recruitment agencies in Dubai cover a wide range of industries, including IT, finance, healthcare, engineering, hospitality, construction, and many others.',
    },
    {
      heading: 'Which Do Recruitment agencies in Dubai?',
      text: 'The best recruitment agency in Dubai is one that can meet your local, regional, offshore, and remote workforce requirements on schedule while adhering to the best standards. MD Global HR Consultancy is one such firm that provides excellent time, efficiency, and cost-effective services.',
    },
    {
      heading: 'How Do Recruitment in Dubai Work?',
      text: 'Recruitment agencies in Dubai work by sourcing candidates for job vacancies from their extensive network. They screen and shortlist candidates based on the job requirements, and then present these candidates to the employer. The agency earns a fee from the employer when a candidate they’ve introduced is hired',
    },
    {
      heading: 'How Do I Choose The Right Recruitment Agency In Dubai?',
      text: 'Choosing the right recruitment agency depends on your specific needs. Consider factors such as the agency’s reputation, their expertise in your industry, and the services they offer. It’s also important to ensure that the agency is licensed and follows ethical recruitment practices.',
    },
    {
      heading:
        'Should I Pay A Fee to A Recruitment Agency in Dubai as a Job Seeker ?',
      text: 'No, as a candidate, you should never pay a fee to a recruitment agency. The agency earns a fee from the employer, not the job seeker.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faqs-section">
      <h3>Frequently Asked Questions (FAQs) About Job Consultancy in Dubai</h3>
      <div className="faq-container">
        {FAQSRADDta.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{`Q ${index + 1}. ${faq.heading}`}</span>
              <span className="arrow">{openIndex === index ? '▲' : '▼'}</span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">{faq.text}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSRAD;
