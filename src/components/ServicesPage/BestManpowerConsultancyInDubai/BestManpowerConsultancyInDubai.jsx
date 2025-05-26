import React from 'react';
import { motion } from 'framer-motion';
import './BestManpowerConsultancyInDubai.css';
import img from './../../../assets/images/About/Banner.jpg';

const BestManpowerConsultancyInDubai = () => {
  const headerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, when: 'beforeChildren' },
    },
  };

  const bannerVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: { duration: 1.2, ease: 'easeOut', delay: 0.4 },
    },
  };

  const ServicesOfferedManpower = [
    {
      imageURL:
        'https://mdglobalhr.com/wp-content/uploads/2025/04/female-colleagues-discussing-data-cafe-outdoor-400x265.jpg', // replace with real images
      heading: 'Permanent Staffing',
      text: 'Finding the right fit for long-term roles',
    },
    {
      imageURL:
        'https://mdglobalhr.com/wp-content/uploads/2025/04/business-partners-handshake-global-corporate-with-technology-concept-400x267.jpg',
      heading: 'Temporary Staffing',
      text: 'Meeting short-term project requirements',
    },
    {
      imageURL:
        'https://mdglobalhr.com/wp-content/uploads/2024/10/Recruitment-Services-400x267.png',
      heading: 'Executive Search',
      text: 'Identifying top-level executives for leadership roles',
    },
    {
      imageURL:
        'https://mdglobalhr.com/wp-content/uploads/2024/10/2147650887-1-400x266.jpg',
      heading: 'HR Consulting',
      text: 'Offering strategic advice to optimize workforce management',
    },
  ];

    const BenefitsManpower = [
      {
        heading: 'Cost-Effective Solutions:',
        text: ' Save on recruitment costs by outsourcing the hiring process.',
      },
      {
        heading: 'Reduced Turnaround Time:',
        text: ' Fill vacancies quickly without compromising on quality.',
      },
      {
        heading: 'Enhanced Employer Branding:',
        text: ' Present your company as an employer of choice.',
      },
      {
        heading: 'Compliance with Local Laws:',
        text: `Navigate Dubai's labor laws with ease.`,
      },
      {
        heading: 'Customized Recruitment Strategies:',
        text: ' Tailored approaches to meet specific business needs.',
      },
    ];

    const BestManpower = [
      {
        heading: 'Check Credentials:',
        text: 'Look for certifications and affiliations with reputable organizations.',
      },
      {
        heading: 'Read Reviews: ',
        text: 'Client testimonials and online reviews provide valuable insights.',
      },
      {
        heading: 'Evaluate Expertise:',
        text: ' Ensure the consultancy has experience in your industry.',
      },
      {
        heading: 'Assess Communication:',
        text: 'A responsive and transparent consultancy is a reliable partner.',
      },
      {
        heading: 'Compare Costs:',
        text: 'While affordability is important, prioritize quality over price.',
      },
    ];

  return (
    <>
      {/* Header Section */}
      <header>
        <motion.section
          className="relative flex flex-col items-center justify-center w-full h-80 text-white overflow-hidden"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <motion.h1
            className="text-4xl font-extrabold tracking-tight relative z-10 mt-2"
            variants={headerVariants}
          >
      Best Manpower Consultancy in Dubai
          </motion.h1>
          <motion.div
            className="w-16 h-1 bg-white/80 mt-2 rounded-full"
            variants={headerVariants}
            transition={{ delay: 0.2 }}
          ></motion.div>
        </motion.section>
      </header>
      {/* Main Content */}
      <main className="ManpowerMain px-4 py-8 md:py-16">
        <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Best Manpower Consultancy in Dubai: Your Gateway to Exceptional
              Talent
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Dubai, a city synonymous with innovation and growth, has become a
              global hub for businesses across various industries. With its
              dynamic economy and multicultural workforce, the demand for
              skilled professionals is ever-growing. This is where the{' '}
              <em>best manpower consultancy in Dubai</em> steps in, bridging the
              gap between employers and top-tier talent.
            </p>
            <h3 className="text-2xl font-bold text-gray-800">
              Why Choose the Best Manpower Consultancy in Dubai?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              In a competitive market like Dubai, finding the right talent can
              be a daunting task. The{' '}
              <em>best manpower consultancy in Dubai</em> offers tailored
              solutions to meet the unique needs of businesses. From sourcing
              candidates to ensuring a seamless hiring process, these
              consultancies provide end-to-end recruitment services.
            </p>
            <ul className="list-decimal list-inside space-y-4 text-gray-700">
              <li>
                <strong>Expertise Across Industries:</strong> The{' '}
                <em>best manpower consultancy in Dubai</em> boasts a deep
                understanding of sectors like healthcare, IT, construction,
                hospitality, and finance.
              </li>
              <li>
                <strong>Access to a Vast Talent Pool:</strong> They connect
                employers with global candidates, showcasing Dubai's cultural
                and professional diversity.
              </li>
            </ul>
          </div>

          {/* Right Form */}
          <div className="bg-white shadow-xl rounded-lg p-6 space-y-6">
            <form action="#" className="space-y-4">
              <input
                type="text"
                placeholder="Full name"
                className="ManpowerInputMP  w-[90%] border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-400"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Phone"
                  className="ManpowerInputMP border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="ManpowerInputMP border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-400"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your company"
                  className="ManpowerInputMP border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-400"
                />
                <input
                  type="text"
                  placeholder="Designation"
                  className="ManpowerInputMP border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-400"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select
                  className="ManpowerInputMP border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-400"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option>Hiring</option>
                  <option>Job Seeking</option>
                  <option>Partnership</option>
                </select>
                <input
                  type="text"
                  placeholder="Location"
                  className="ManpowerInputMP border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-400"
                />
              </div>
              <textarea
                placeholder="Message"
                rows="4"
                className="ManpowerInputMP w-[90%] border border-gray-300 p-3 rounded-lg focus:ring focus:ring-blue-400"
              ></textarea>
              <div className="text-center">
                <button
                  type="submit"
                  className="ManpowerInputMP bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 w-[90%]"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Services Offered Section */}
        <section className="max-w-7xl mx-auto mt-16 px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Services Offered by the Best Manpower Consultancy in Dubai
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
            The best manpower consultancy in Dubai provides a wide range of
            services to cater to the diverse needs of businesses:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ServicesOfferedManpower.map((val, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
              >
                <img
                  src={val.imageURL}
                  alt={val.heading}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {val.heading}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">{val.text}</p>
                  <button className="ReadMoreButton mt-auto bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium w-[90%] py-2 px-4 rounded transition">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="font-bold text-3xl">
            Benefits of Partnering with the Best Manpower Consultancy in Dubai
          </h2>
          <ul>
            {BenefitsManpower.map((val, index) => {
              return (
                <li key={index}>
                  <p className="texy-xl">
                    <strong>
                      {index + 1}.{val.heading}
                    </strong>
                    {val.text}
                  </p>
                </li>
              );
            })}
          </ul>
          <h2 className="font-bold text-3xl">
            Success Stories: Realizing Potential with the Best Manpower
            Consultancy in Dubai
          </h2>
          <p>
            Many businesses have transformed their operations by partnering with
            the best manpower consultancy in Dubai. For instance, a leading IT
            firm struggling to find skilled developers was able to build a
            robust team within weeks. Similarly, a hospitality chain expanded
            its operations seamlessly by hiring top-notch professionals through
            the consultancy.
          </p>
        </section>
        <section>
          <h2 className="font-bold text-3xl">
            How to Choose the Best Manpower Consultancy in Dubai?
          </h2>
          <p>
            With numerous options available, selecting the best manpower
            consultancy in Dubai can be challenging. Here are some tips to make
            an informed decision:
          </p>
          <ul>
            {BestManpower.map((val, index) => {
              return (
                <li key={index}>
                  <p className="texy-xl">
                    <strong>
                      {index + 1}.{val.heading}
                    </strong>
                    {val.text}
                  </p>
                </li>
              );
            })}
          </ul>
          <h2 className="font-bold text-2xl">
            The Future of Recruitment in Dubai
          </h2>
          <article>
            <p>
              As Dubai continues to evolve, the role of the best manpower
              consultancy in Dubai will become even more critical. With
              advancements in technology, such as AI-driven recruitment tools
              and virtual interviews, the hiring process is set to become more
              efficient and inclusive.
            </p>
            <p>
              Moreover, the focus on sustainability and diversity will shape the
              future of recruitment. The best manpower consultancy in Dubai is
              already adapting to these trends, ensuring that businesses stay
              ahead of the curve.
            </p>
          </article>
        </section>
      </main>
    </>
  );
};

export default BestManpowerConsultancyInDubai;
