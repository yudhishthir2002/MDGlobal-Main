import React from 'react';
import './RecruitmentAgencyInfo.css';
const RecruitmentAgencyInfo = () => {
  return (
    <section className="RecruitmentAgencyInfoSection w-full mx-auto p-6 text-gray-800">
      <h2 className="RecruitmentAgencyInfoHeading text-2xl font-bold mb-4">
        How Recruitment Agencies in Dubai Help Businesses
      </h2>
      <p className="RecruitmentAgencyInfoHeading mb-6">
        Recruitment agencies act as <strong>strategic partners</strong>,
        simplifying the hiring process and ensuring companies find the best
        talent.
      </p>

      <h3 className="RecruitmentAgencyInfoHeading text-xl font-semibold mb-2">
        Core Functions of Recruitment Agencies
      </h3>
      <ul className="RecruitmentAgencyInfoHeading list-disc list-inside mb-6 space-y-2">
        <li className='RecruitmentAgencyInfoListItem'>
          <strong>Talent Acquisition</strong> – Sourcing highly qualified
          candidates for various roles.
        </li>
        <li className='RecruitmentAgencyInfoListItem'>
          <strong>Screening & Shortlisting</strong> – Evaluating applicants to
          ensure they meet job requirements.
        </li>
        <li className='RecruitmentAgencyInfoListItem'>
          <strong>Interview Coordination</strong> – Managing interview schedules
          and candidate communications.
        </li>
        <li className='RecruitmentAgencyInfoListItem'>
          <strong>Onboarding Support</strong> – Helping new hires integrate
          smoothly into the company.
        </li>
      </ul>

      <h3 className="RecruitmentAgencyInfoHeading text-xl font-semibold mb-2">
        How to Choose the Best Recruitment Agency in Dubai
      </h3>
      <p className="RecruitmentAgencyInfoHeading mb-6">
        With numerous recruitment firms in Dubai, selecting the right one is
        crucial. Here’s how businesses can make an informed decision:
      </p>

      <h4 className=" RecruitmentAgencyInfoHeadingtext-lg font-semibold mb-2">
        Factors to Consider
      </h4>
      <ol className="RecruitmentAgencyInfoHeading list-decimal list-inside space-y-2">
        <li className='RecruitmentAgencyInfoListItem'>
          <strong>Reputation & Reviews</strong> – Look for agencies with{' '}
          <strong>positive client feedback</strong> and a strong track record.
        </li>
        <li className='RecruitmentAgencyInfoListItem'>
          <strong>Industry Specialization</strong> – Choose an agency that
          specializes in <strong>your sector</strong>.
        </li>
        <li className='RecruitmentAgencyInfoListItem'>
          <strong>Licensing & Compliance</strong> – Ensure the agency is{' '}
          <strong>registered</strong> and follows ethical hiring practices.
        </li>
        <li className='RecruitmentAgencyInfoListItem'>
          <strong>Service Offerings</strong> – Some agencies provide{' '}
          <strong>additional career coaching and resume building</strong>.
        </li>
        <li className='RecruitmentAgencyInfoListItem'>
          <strong>Consultation & Transparency</strong> – Speak with agency
          representatives to understand their{' '}
          <strong>recruitment approach</strong>.
        </li>
      </ol>
    </section>
  );
};

export default RecruitmentAgencyInfo;
