import React from "react";
import { motion } from "framer-motion";
import officeImg from "./../../assets/office-730681_1920.jpg";
import "./AboutMDGlobal.css";

const AboutMDGlobal = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="mdg-about-section">
      <motion.div
        className="mdg-main-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mdg-content-layout">
          {/* Text Content */}
          <div className="mdg-text-block">
            <motion.span className="mdg-subheading" variants={textVariants}>
              Your Trusted Recruitment Partner in India and Dubai
            </motion.span>
            <motion.h1 className="mdg-heading" variants={textVariants}>
              MD Global Human Resource Consulting
            </motion.h1>
            <motion.p className="mdg-paragraph" variants={textVariants}>
              MD Global HR Consulting LLC is a client-focused recruitment and HR
              services company with a strong presence in the UAE and India.
              Since our founding in 2024, we've become a trusted talent
              acquisition partner across industries.
            </motion.p>

            <motion.p className="mdg-paragraph" variants={textVariants}>
              We offer customized recruitment solutions including executive
              search, permanent and contract staffing, blue-collar hiring, and
              staff outsourcing. Our expertise spans healthcare, construction,
              logistics, IT, banking, manufacturing, and more.
            </motion.p>
            <motion.p className="mdg-paragraph" variants={textVariants}>
              At MD Global, we believe people are the foundation of every
              business. Our strategic, human-centered approach ensures every
              placement supports long-term success for both clients and
              candidates.
            </motion.p>
          </div>

          {/* Image Section */}
          <motion.div className="mdg-image-section" variants={imageVariants}>
            <div className="mdg-image-holder">
              <img src={officeImg} alt="Office" className="mdg-office-img" />
              <div className="mdg-image-overlay"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMDGlobal;
