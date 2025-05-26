import React from 'react';
import { motion } from 'framer-motion';
import './LeadershipHiringServices.css';
import ITRecruitmentForm from '../ITRecruitmentAgenciesInDubai/ITRecruitmentForm';
import img from './../../../assets/images/About/Banner.jpg';

const LeadershipHiringServices = () => {
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

  const ChooseMD = [
    {
      heading: 'Specialization in Leadership Hiring',
      text: 'At MD Global HR Consulting, leadership hiring is more than just filling a position. It’s about identifying individuals who can drive businesses forward, enhance growth, and make strategic decisions.',
    },
    {
      heading: 'Expanding Reach Across India and UAE',
      text: 'With its base in Faridabad, India, MD Global has successfully expanded its recruitment services across UAE and Globally.',
    },
    {
      heading: 'The Importance of Leadership Hiring in Today’s Market',
      text: 'Leadership can make or break a business. Therefore, getting the right leadership talent is essential, and MD Global HR Consulting ensures that businesses can rely on the best people for these key positions.',
    },
  ];

  return (
    <>
      <header id="leadership-hero">
        <motion.section
          className="hero-banner-ls"
          style={{
            backgroundImage: `url(${img})`,
          }}
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <div className="overlay"></div>
          <motion.h1 className="hero-title" variants={headerVariants}>
            Leadership Hiring Services
          </motion.h1>
          <motion.div
            className="hero-underline"
            variants={headerVariants}
            transition={{ delay: 0.2 }}
          ></motion.div>
        </motion.section>
      </header>

      <main id="leadership-main" className="content-wrapper">
        <section className="section-intro">
          <div className="intro-text">
            <h2 className="section-title">
              Are you Looking for Leadership Hiring Services?
            </h2>
            <div className="section-description">
              <p>
                MD Global Human Resource Consulting is here to help you find top
                talent for your business.
              </p>
              <p>
                In today's competitive market, businesses face the challenge of
                finding top talent, especially for leadership positions.
              </p>
              <p>
                MD Global is a premier recruitment agency known for excellence
                in leadership hiring and recruitment services.
              </p>
              <p>
                We carefully select candidates who align with your business
                goals. Our process is efficient and results-driven.
              </p>
              <p>
                We work with startups and established companies alike, providing
                tailored solutions for every client.
              </p>
            </div>
          </div>

          <div className="intro-image">
            <img
              src="https://mdglobalhr.com/wp-content/uploads/2024/10/Leadership-hiring.jpeg"
              alt="Leadership hiring"
              className="responsive-image"
            />
          </div>
        </section>

        <section id="why-choose-md">
          <h2 className="choose-title">
            Why Choose MD Global HR Consulting for Leadership Hiring Services?
          </h2>
          <ul className="choose-list">
            {ChooseMD.map((val, index) => (
              <li key={index} className="choose-item">
                <h4 className="choose-heading">{val.heading}</h4>
                <p className="choose-text">{val.text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* <section className="form-section">
          <ITRecruitmentForm />
        </section> */}
      </main>
    </>
  );
};

export default LeadershipHiringServices;
