import React, { useState } from 'react'
import './FAQSITRecruitment.css';

const FAQSITRecruitment = () => {
     const [activeIndex, setActiveIndex] = useState(null);

    const FAQSQues = [
      {
        heading: 'What Are IT Recruitment Agencies?',
        text: 'Ans: IT recruitment agencies are firms that specialize in hiring professionals for the Information Technology sector. They have a deep understanding of the industry and its specific needs, and they use this knowledge to match job seekers with companies looking for specific skill sets.',
      },
      {
        heading: 'Why Should I Use An IT Recruitment Agency In Dubai??',
        text: 'Ans: recruitment agencies in Dubai have a wide network of contacts in the IT industry and a large pool of pre-screened candidates. They can save you time and effort in the hiring process and help you find the best fit for your company’s needs.',
      },
      {
        heading: 'How Do IT Recruitment Agencies In Dubai Work?',
        text: 'Ans:Ans: IT recruitment agencies in Dubai work by understanding the specific needs of your business and the roles you are looking to fill. They then use their resources and networks to find suitable candidates. These candidates are pre-screened and often interviewed by the agency before they are recommended to you.',
      },
      {
        heading:
          'Can IT Recruitment Agencies In Dubai Help With Hiring For Temporary or Contract Positions?',
        text: `Ans: Yes, many IT recruitment agencies in Dubai can help with hiring for both permanent and temporary positions. They have access to a wide range of candidates looking for different types of employment arrangements.

Conclusion:

IT recruitment agencies in Dubai offer a wide range of services to both job seekers and employers. They understand the specific needs of the IT industry and have the expertise to match the right candidate with the right job. Whether you’re an employer looking to hire or a job seeker looking for your next opportunity, these agencies can provide the support you need.`,
      },
    ];


  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    };
    
  return (
    <section>
      <h2>
        Frequently Asked Questions (FAQs) About IT Recruitment Agencies in Dubai
      </h2>
      <p>
        Here are some frequently asked questions (FAQs) about IT Recruitment
        Agencies in Dubai:
      </p>
      <div className="faq-container">
              {
                  FAQSQues.map((faq, index) => (
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
}

export default FAQSITRecruitment