import React from 'react';
import './CommonMistakes.css';
const CommonMistakes = () => {
  const CommonMistakesPoint = [
    {
      heading: 'Not Clarifying Your Requirements for Hiring:',
      text: 'Insufficiently specific recruitment goals can mislead hiring agencies and produce candidates who are not a good fit for your business.',
    },
    {
      heading: 'Ignoring Areas of Specialization: ',
      text: 'Choosing a generalist agency may fail because they often lack the deep market knowledge and contacts essential for your industry.',
    },
    {
      heading: 'Ignoring the Approach of the Recruiting Agency:',
      text: 'Overlooking the interviewing and assessment process that a recruitment firm uses might affect the quality of the candidates you hire.',
    },
    {
      heading: 'Ignoring Previous Results:',
      text: 'You must carefully consider a recruitment agency’s history to avoid working with one that makes grand claims but delivers poor results.',
    },
    {
      heading: 'Poor Communication: ',
      text: 'A good recruitment agency should communicate clearly and regularly with you throughout the hiring process.',
    },
  ];

  return (
    <section className="CommonMistakesSection w-full ">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 ">
        What Are The Common Mistakes To Avoid When Choosing A Recruitment
        Agency?
      </h2>
      <p className="text-gray-700 mb-6 text-sm sm:text-base">
        When choosing a recruitment agency, it’s important to avoid the
        following common mistakes:
      </p>
      <ul className="">
        {CommonMistakesPoint.map((val, index) => (
          <li key={index} className="flex items-start">
            <p className="text-gray-700 text-sm sm:text-base">
              <span className="text-gray-900  bullet">•</span>
              <strong>{val.heading}</strong> {val.text}
            </p>
          </li>
        ))}
      </ul>
      <p className="text-gray-700 mt-6 text-sm sm:text-base">
        By avoiding these mistakes, you can ensure that you choose a recruitment
        agency that best suits your needs and provides the most qualified
        candidates for your organization.
      </p>
    </section>
  );
};

export default CommonMistakes;
