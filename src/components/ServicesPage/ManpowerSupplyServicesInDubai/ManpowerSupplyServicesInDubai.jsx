import React from 'react';
import { motion } from 'framer-motion'; // Correct motion import
import ITRecruitmentForm from '../ITRecruitmentAgenciesInDubai/ITRecruitmentForm';
import './ManpowerSupplyServicesInDubai.css'; // Your custom styles (optional)
import img from './../../../assets/images/About/Banner.jpg';

const ManpowerSupplyServicesInDubai = () => {
  const headerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
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

  const ChooseMDGlobalHR = [
    {
      heading: 'Extensive Talent Network',
      text: 'We maintain a vast database of qualified professionals across industries, from construction and hospitality to IT and healthcare.',
    },
    {
      heading: 'Quick & Hassle-Free Recruitment',
      text: 'Our streamlined hiring process ensures you get the right candidates without delays.',
    },
    {
      heading: '100% Compliance with UAE Labor Laws',
      text: 'We handle contracts, visas, and legal formalities, ensuring a smooth onboarding process.',
    },
    {
      heading: 'Customized Staffing Solutions',
      text: 'Whether you need short-term project staff or long-term employees, we tailor our services to fit your requirements.',
    },
  ];

  const BenefitsManpower = [
    {
      heading: 'Reduced Hiring Cost',
      text: 'Avoid expensive job postings, background checks, and training—we handle it all.',
    },
    {
      heading: 'Access to Pre-Screened Professionals',
      text: 'Our rigorous selection process ensures only the best candidates join your team.',
    },
    {
      heading: 'Increased Operation Efficiency',
      text: 'Spend less time on recruitment and more time growing your business.',
    },
    {
      heading: 'Flexible Workforce Management',
      text: 'Scale your team up or down based on demand without long-term commitments.',
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
            Manpower Supply Services in Dubai
          </motion.h1>
          <motion.div
            className="w-16 h-1 bg-white/80 mt-2 rounded-full"
            variants={headerVariants}
            transition={{ delay: 0.2 }}
          ></motion.div>
        </motion.section>
      </header>
      {/* Main Content */}
      <main className="ManpowerSupplyDubaiMAin">
        {/* About Section */}
        <section className="w-full py-12 px-4 md:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Manpower Supply Services in Dubai for Your Business Growth
              </h2>
              <div className="text-gray-600 space-y-4 text-sm sm:text-base">
                <p>
                  <strong className="text-blue-600">
                    Manpower supply services in Dubai
                  </strong>{' '}
                  provide the perfect solution for businesses struggling with
                  recruitment challenges. In a dynamic market like Dubai, quick
                  access to skilled professionals can make or break your
                  success.
                </p>
                <p>
                  At{' '}
                  <strong className="text-blue-600">
                    MD Global Human Resource Consulting,
                  </strong>{' '}
                  we deliver top-tier staffing solutions tailored to your needs
                  — temporary, contract, or permanent hires, handled seamlessly.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <img
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                src="https://mdglobalhr.com/wp-content/uploads/2025/04/Manpower-Supply-Services-in-Dubai-400x266.webp"
                alt="Manpower Supply Services In Dubai"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-12 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Does Your Business Need Manpower Supply Services?
            </h2>
            <p className="text-gray-600 w-full mx-auto">
              As a{' '}
              <strong className="text-blue-600">
                top recruitment consultancy in Dubai
              </strong>
              , we stand out for our excellence. Here’s why businesses trust us:
            </p>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
              {ChooseMDGlobalHR.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
                >
                  <h3 className="text-lg font-semibold text-blue-600 mb-2">
                    {index + 1}. {item.heading}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-12 px-4 md:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Key Benefits of Our Manpower Supply Services
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
              {BenefitsManpower.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
                >
                  <h3 className="text-lg font-semibold text-blue-600 mb-2">
                    {index + 1}. {item.heading}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why MD Global HR Section */}
        <section className="w-full py-12 px-4 md:px-8">
          <div className="w-full mx-auto space-y-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Why MD Global HR Consulting is the Best Manpower Supply Company in
              Dubai?
            </h2>
            <div className="text-gray-600 text-sm sm:text-base space-y-2">
              <p>
                <strong className="text-blue-600">Proven Track Record:</strong>{' '}
                Trusted by leading businesses.
              </p>
              <p>
                <strong className="text-blue-600">Transparent Pricing:</strong>{' '}
                No hidden fees.
              </p>
              <p>
                <strong className="text-blue-600">24/7 Support:</strong> Always
                available for you.
              </p>
              <p>
                <strong className="text-blue-600">Fast Placements:</strong>{' '}
                Quick access to talent when needed.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-12 px-4 md:px-8  text-gray-700">
          <div className="w-full mx-auto text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Looking for Reliable Manpower Supply in Dubai?
            </h2>
            <p className="text-sm sm:text-base">
              <strong>MD Global HR Consulting LLC</strong> is your trusted
              partner. We provide{' '}
              <strong>top-quality manpower supply services in Dubai</strong> to
              ensure your success. 📞 <strong>Call us today</strong> and build a
              workforce that drives your business forward!
            </p>
          </div>
        </section>
        <section>
          <ITRecruitmentForm />
        </section>
      </main>
    </>
  );
};

export default ManpowerSupplyServicesInDubai;
