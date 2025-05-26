import React from "react";
import { motion } from "framer-motion";
import "./ForClientCandidate.css";
import { Link } from "react-router-dom";

const ForClientCandidate = () => {
  const cards = [
    {
      heading: 'For Clients',
      text: 'Are you hiring employees? Our consultants are here to help you.',
      imageURL:
        'https://www.corporatestalwarts.com/wp-content/uploads/2025/02/Corporate-Stalwarts-For-Clients.webp',
      buttonText: 'Hire Talent',
      buttonLink: '/request-a-call-back',
    },
    {
      heading: 'For Candidates',
      text: "Drop your CV here and we'll match you with the perfect opportunity.",
      imageURL:
        'https://www.corporatestalwarts.com/wp-content/uploads/2025/02/Corporate-Stalwarts-For-Candidates-1024x838.webp',
      buttonText: 'Submit Your CV',
      buttonLink: '/submit-your-cv',
    },
  ];

  return (
    <section id="for-client-candidate">
      <div className="fcc-container">
        <h1 className="fcc-title">
          Comprehensive Recruitment Solutions for Employers and Job Seekers
          Worldwide
        </h1>
        <p className="fcc-paragraph">
          We connect companies with top-tier talent and guide professionals
          toward meaningful career opportunities. Whether you're looking to
          build your team or take the next step in your career, our global
          network and expert consultants are here to support your journey.
        </p>
        <div className="fcc-card-wrapper">
          {cards.map((val, index) => (
            <motion.div
              key={index}
              className="fcc-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img src={val.imageURL} alt={val.heading} className="fcc-image" />
              <div className="fcc-overlay" />
              <div className="fcc-content">
                <motion.h2
                  className="fcc-heading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {val.heading}
                </motion.h2>
                <motion.p
                  className="fcc-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {val.text}
                </motion.p>
                <Link
                  to={val.buttonLink}
                  // whileHover={{ scale: 1.1 }}
                  className="fcc-button text-center flex items-center justify-center "
                  
                >
                  {val.buttonText}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForClientCandidate;
