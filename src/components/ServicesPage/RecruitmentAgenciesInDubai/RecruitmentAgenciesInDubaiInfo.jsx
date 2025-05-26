import React from 'react';

const RecruitmentAgenciesInDubaiInfo = () => {
  const infoData = [
    {
      heading: 'CareerLink HR',
      text: 'CareerLink HR LLC is a renowned leader in employment placement and strategy advisory services in the UAE. With a strong commitment to exceeding customer expectations, CareerLink HR stands out as a trusted partner for physicians seeking to begin their practice in Dubai.',
    },
    {
      heading: 'Michael Page',
      text: 'Based out of their office in DIFC Dubai, Michael Page Middle East stands as a prominent professional recruitment consultancy catering to the UAE, Saudi Arabia, and other GCC countries.',
    },
    {
      heading: 'Nathan & Nathan',
      text: 'Nathan & Nathan is another notable recruitment agency in Dubai. They are known for their professional and dedicated services, which have left a lasting impression on their clients.',
    },
    {
      heading: 'Caliberly Talent Search',
      text: 'Caliberly is a recruitment agency that helps companies find the best talent and people find their dream jobs in Dubai. It offers permanent, temporary, C-suite, and Emiratisation recruitment services with AI and expertise.',
    },
    {
      heading: 'Inspire Selection',
      text: 'Inspire Selection is a recruitment agency in Dubai that offers professional and dedicated services for various industries and roles. They have received positive testimonials from satisfied clients and candidates who benefited from their efficient and effective approach.',
    },
  ];

  return (
    <div className="w-full mx-auto p-4 sm:p-6 md:p-8 bg-white shadow-md rounded-xl mt-6">
     
      {infoData.map((val, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            {val.heading}
          </h3>
          <p className="text-gray-700 leading-relaxed">{val.text}</p>
        </div>
      ))}
    </div>
  );
};

export default RecruitmentAgenciesInDubaiInfo;
