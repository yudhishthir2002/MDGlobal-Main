import React from 'react';
import './BestRecruitmentAgencyinDubai.css';

const BestRecruitmentAgencyinDubai = () => {
  const ServicesWeOffer = [
    {
      heading: '1. Access to Exclusive Job Opportunities',
      text: 'Partnering with a job consultancy like MD Global opens doors to job opportunities that are not always advertised publicly. Our extensive network ensures you have access to some of the best positions in Dubai.',
    },
    {
      heading: '2. Personalized Career Guidance',
      text: 'Our consultants provide personalized career advice, helping you understand your strengths and areas for improvement. This tailored approach ensures you are well-prepared for your job search.',
    },
    {
      heading: '3. Time and Stress Reduction',
      text: 'Job hunting can be a time-consuming and stressful process. With MD Global, you can focus on your current responsibilities while we handle the search, matching you with suitable positions efficiently.',
    },
    {
      heading: '4. Enhanced Job Application Materials',
      text: 'We assist in crafting compelling resumes and cover letters that stand out to potential employers, increasing your chances of securing interviews.',
    },
    {
      heading: '5. Interview Coaching',
      text: 'Our interview preparation services ensure you approach each interview with confidence, equipped with the skills and knowledge to impress prospective employers.',
    },
  ];

  return (
    <section className="BestRecruitmentSection px-4 py-10 md:px-10 lg:px-24 bg-gray-50 text-gray-800">
      <div className="w-full mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-2xl text-gray-800 md:text-2xl font-bold mb-4">
            Why MD Global HR Consulting is the Best Recruitment Agency in Dubai?
          </h2>
          <p className="text-lg text-gray-600">
            Since MD Global HR Consulting Services is one of Dubai's top HR
            firms, there are usually a number of positions available. Employer
            and employee satisfaction with MD Global HR Consulting's recruitment
            process is high. MD Global Human Resource Consulting Services is the
            right place to start if you'd like to work in Dubai.
          </p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
            Services We Offer
          </h2>
          <ul className="space-y-6">
            {ServicesWeOffer.map((val, index) => (
              <li key={index}>
                <h3 className="text-xl font-semibold mb-1 text-gray-700">
                  {val.heading}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {val.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BestRecruitmentAgencyinDubai;
