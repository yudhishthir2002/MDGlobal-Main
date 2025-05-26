import React from 'react';
import './ITRecruitmentAgenciesInDubaiInfo.css';

const ITRecruitmentAgenciesInDubaiInfo = () => {
  const ITRecruitmentAgenciesInDubaiInfoDta = [
    {
      heading: 'IT Recruitment Agencies in Dubai',
      text: `Dubai, a global city and business hub of the Middle East, is home to numerous IT recruitment agencies. These agencies play a crucial role in matching top talent with companies looking for specific skill sets.

The tech industry in Dubai is growing rapidly, and the demand for skilled IT professionals has never been higher. Navigating the tech job market requires the expertise of specialized IT recruitment agencies. MD Global Human Resource Consulting LLC is a leading IT recruitment agency in Dubai, dedicated to connecting top tech talent with innovative companies.`,
    },
  ];

  const topAgenciesIntro = {
    heading: '4 Best IT Recruitment Agencies in Dubai',
    text: 'Here are some of the prominent IT recruitment agencies in Dubai:',
  };

  const topAgencies = [
    {
      heading: 'AIQU',
      text: `AIQU is a specialized tech recruitment agency that matches top talent with companies looking for their skill sets. They have six dedicated divisions led by experienced recruitment experts. Their specializations include Digital, IT Infrastructure & Cyber Security, Business Intelligence, Big Data & Analytics, Software Engineering, ERP & CRM, and compliance & Financial Crimes. They claim to understand your business needs and recruit tech specialists that fit your specific requirements on a contract or permanent basis.`,
    },
    {
      heading: 'MD Global HR Consulting',
      text: `MD Global Human Resource Consulting LLC is Dubai’s fastest growing Recruitment and Job Consultancy Services provider. MD Global HR Consulting takes pride in being Dubai’s premier recruiting firm, specializing in executive search and consultancy services. With a dedication to quality, we bring together top people and prestigious organizations to support success and progress in today’s competitive business world.

MD Global HR Consulting provides high-quality services including as recruitment, executive search, Blue-Collar manpower, and consulting from our conveniently located location in Dubai, United Arab Emirates.`,
    },
    {
      heading: 'Robert Half UAE',
      text: `Robert Half is a leading international IT recruitment agency. Their technology recruitment team can quickly find highly skilled IT professionals who are the best fit for your project or permanent hiring needs. They use skills testing combined with the knowledge of their dedicated specialist technology recruitment consultants to match the right technology professional with the right role. They offer more than just algorithms, with over 70 years of placement expertise behind them.`,
    },
    {
      heading: 'Other Notable Agencies',
      text: `Several other IT recruitment agencies in Dubai are worth mentioning. These include Staff Connect, Charterhouse, Hays, BAC Middle East, Kershaw Leonard, Gulf Recruitment, NADIA Recruitment, and Marc Ellis Consulting. These agencies have access to leading IT companies and trained professionals in this field, helping you quickly find the best possible candidates that will take your IT business and career to the next level.`,
    },
  ];

  return (
    <section className="ITrecruitmentSection py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="w-full mx-auto">
        {/* Main Info Section */}
        <ul className="space-y-8">
          {ITRecruitmentAgenciesInDubaiInfoDta.map((val, index) => (
            <li key={index} className=" text-center">
              <h3 className="ITlistElement text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
                {val.heading}
              </h3>
              <p className="ITlistElement text-gray-700 leading-relaxed text-lg w-full mx-auto">
                {val.text}
              </p>
            </li>
          ))}
        </ul>

        {/* Top Agencies Intro */}
        <div className="mt-12 text-center">
          <h3 className="ITlistElement text-2xl font-bold text-gray-900 mb-4">
            {topAgenciesIntro.heading}
          </h3>
          <p className="ITlistElement text-gray-700 leading-relaxed text-lg w-full mx-auto">
            {topAgenciesIntro.text}
          </p>
        </div>

        {/* Top Agencies List */}
        <div className="mt-8 space-y-10">
          {topAgencies.map((agency, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-6 last:border-b-0"
            >
              <h4 className="ITlistElement text-xl font-semibold text-gray-900 mb-3 text-left">
                {agency.heading}
              </h4>
              <p className="ITlistElement text-gray-600 text-base leading-relaxed text-left">
                {agency.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITRecruitmentAgenciesInDubaiInfo;
