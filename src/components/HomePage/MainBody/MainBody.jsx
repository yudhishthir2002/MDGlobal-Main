import React from 'react';
import Moving from './Moving';
import AboutUsMAinPage from './AboutUsMAinPage';
import './MainBody.css';
import ServicesWeOffer from './ServicesWeOffer';

const MainBody = () => {
  const card = [
    { number: '250+', text: 'Happy Clients' },
    { number: '50+', text: 'RPO Engagement' },
    { number: '20000+', text: 'No. of Employees' },
    { number: '15+', text: 'Years' },
  ];

  return (
    <main className="w-full min-h-[100vh] min-w-[100vw]: text-white pt-[12vh]  md:pt-0">
      {/* Black background and white text for the entire main element */}
      <section className="relative">
        <div className="min-h-screen w-full flex flex-col justify-center items-center px-4 md:px-8">
          {/* Removed background image */}
          <h1 className="font-mono font-bold text-4xl sm:text-6xl md:text-8xl text-center p-2 md:p-4">
            Connecting Talent with Opportunity.
          </h1>
          <p className="font-mono font-medium text-lg sm:text-xl md:text-3xl text-center p-2 md:p-4 max-w-3xl">
            From sourcing top talent to helping businesses grow, we are
            committed to delivering staffing solutions that drive results.
            Together, we achieve more.
          </p>
        </div>
      </section>

      <section className="relative py-10 md:py-16">
        {/* Black background inherited from main */}
        <div className="text-center mb-8">
          <h2 className="MD font-mono font-bold text-5xl md:text-5xl  ">
            MD Global At A Glance
          </h2>
          <p className="Achievements font-mono text-lg md:text-xl text-gray-300">
            Our Achievements
          </p>
        </div>

        {/* Responsive card list */}
        <ul className="flex flex-col sm:flex-row justify-center mt-5 items-center gap-6 md:gap-10 px-4 md:px-8">
          {card.map((val, index) => (
            <li
              key={index}
              className="flex flex-col justify-center items-center h-[150px] w-full sm:w-[200px] md:w-[250px] bg-gray-800 shadow-lg rounded-lg p-4"
            >
              <span className="font-mono font-bold text-2xl md:text-3xl text-blue-400">
                {val.number}
              </span>
              <span className="font-mono text-base md:text-lg text-white text-center">
                {val.text}
              </span>
            </li>
          ))}
        </ul>
      </section>
      <section className="w-[100vw] h-[100vh] mb-28 ">
        <Moving />
        <AboutUsMAinPage />
      </section>

      <section className="w-[100vw] h-[100vh] bg-black">
        <ServicesWeOffer />
      </section>
      
    </main>
  );
};

export default MainBody;
