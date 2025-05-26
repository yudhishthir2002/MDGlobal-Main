import React from 'react';
import './BenefitsofIT.css';

const BenefitsofIT = () => {
  const BenefitsofITData = [
    {
      heading: 'Access to Skilled Professionals:',
      text: 'Partnering with an IT recruitment agency ensures that you have access to a pool of highly skilled and experienced IT professionals. MD Global leverages its extensive network to connect you with the best candidates.',
    },
    {
      heading: 'Streamlined Recruitment Process:',
      text: 'Our streamlined recruitment process saves you time and effort. We handle everything from sourcing candidates to conducting interviews, ensuring that you find the right fit quickly and efficiently.',
    },
    {
      heading: 'Market Expertise:',
      text: 'With deep knowledge of the IT industry, MD Global provides valuable insights and advice, helping you make informed hiring decisions that align with your business goals.',
    },
    {
      heading: 'Customized Recruitment Solutions:',
      text: `We offer tailored recruitment solutions to meet your specific needs. Whether you're looking for permanent, contract, or temporary IT staff, we have you covered.`,
    },
    {
      heading: 'Cost-Effective Hiring:',
      text: 'By outsourcing your recruitment needs to MD Global, you can reduce hiring costs and focus on your core business activities. Our competitive fees and efficient processes ensure you get the best value for your investment.',
    },
  ];
  return (
    <section className="BenefitsofITSection w-full mx-auto p-5 bg-gray-50">
      <h2 className="w-full font-bold text-3xl text-center mb-6 text-gray-900">
        Benefits of IT Recruitment Agencies in Dubai
      </h2>
      <ol className=" pl-5">
        {BenefitsofITData.map((val, index) => (
          <li key={index} className="  rounded-lg">
            <h3 className=" not-[]:text-xl text-gray-900 font-semibold ">
              {index + 1}.{val.heading}
            </h3>
            <p className="text-base text-gray-700">{val.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default BenefitsofIT;
