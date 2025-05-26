import React from "react";
import "./MainServices.css";
import { motion } from "framer-motion";
import execImg from "../../assets/images/executive search.jpg";
import emiratiImg from "../../assets/images/Emiratisation.jpg";
import staffingImg from "../../assets/images/Contractual staffing.jpg";

const fadeVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServiceSections = () => {
  return (
    <section className="homepage-service-container py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
      <motion.div
        className="homepage-service-content w-full max-w-6xl p-6 sm:p-8 lg:p-10 rounded-3xl bg-gray-50 homepage-service-shadow space-y-12"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Heading & Paragraph Section */}
        <motion.div
          id="homepage-service-intro"
          className="homepage-service-text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="homepage-service-title-main text-3xl sm:text-4xl font-bold text-blue-800">Services We Offer</h2>
          <p className="homepage-service-description mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            At MD Global HR Consulting LLC, we deliver result-driven recruitment solutions designed to meet your business goals.
            Whether you operate in the UAE, India, or beyond, our team provides customized staffing support that ensures you find
            the right talent—quickly and efficiently.
          </p>
        </motion.div>

        {/* Section 1: Executive Search */}
        <motion.div
          className="homepage-service-section flex flex-col lg:flex-row items-center gap-6 lg:gap-10"
          id="homepage-service-executive"
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="homepage-service-image-wrapper w-full lg:w-1/2 aspect-[4/3] rounded-xl overflow-hidden">
            <motion.img
              src={execImg}
              alt="Executive Search"
              className="homepage-service-image w-full h-full object-cover rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="homepage-service-content-wrapper w-full lg:w-1/2 space-y-4 px-4 sm:px-6">
            <motion.h2 className="homepage-service-title text-2xl sm:text-3xl" variants={fadeVariant}>Executive Search</motion.h2>
            <motion.h3 className="homepage-service-subtitle text-lg sm:text-xl" variants={fadeVariant}>Leadership that Transforms Your Business</motion.h3>
            <motion.p className="homepage-service-text text-gray-600" variants={fadeVariant}>
              At MD Global Human Resource Consulting LLC, we understand that exceptional organizations are led by extraordinary leaders.
            </motion.p>
            <motion.p className="homepage-service-text text-gray-600" variants={fadeVariant}>
              Our Executive Search service is designed to identify and attract top-tier leadership talent tailored to your company’s unique vision and culture.
            </motion.p>
            <motion.p className="homepage-service-text text-gray-600" variants={fadeVariant}>
              We don’t just fill positions—we help you build a legacy of leadership that drives innovation and long-term growth.
            </motion.p>
          </div>
        </motion.div>

        {/* Section 2: Emiratisation */}
        <motion.div
          className="homepage-service-section flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-10"
          id="homepage-service-emiratisation"
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="homepage-service-image-wrapper w-full lg:w-1/2 aspect-[4/3] rounded-xl overflow-hidden">
            <motion.img
              src={emiratiImg}
              alt="Emiratisation"
              className="homepage-service-image w-full h-full object-cover rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="homepage-service-content-wrapper w-full lg:w-1/2 space-y-4 px-4 sm:px-6">
            <motion.h2 className="homepage-service-title text-2xl sm:text-3xl" variants={fadeVariant}>Emiratisation</motion.h2>
            <motion.h3 className="homepage-service-subtitle text-lg sm:text-xl" variants={fadeVariant}>Empowering the UAE Workforce, One Placement at a Time</motion.h3>
            <motion.p className="homepage-service-text text-gray-600" variants={fadeVariant}>
              As a trusted recruitment partner across the UAE and Saudi Arabia, our Emiratisation services are tailored to support the national vision for workforce localization.
            </motion.p>
            <motion.p className="homepage-service-text text-gray-600" variants={fadeVariant}>
              We assist government entities, multinational corporations, and SMEs in hiring skilled and qualified Emirati and Saudi professionals.
            </motion.p>
            <motion.p className="homepage-service-text text-gray-600" variants={fadeVariant}>
              Our recruitment experts specialize in culturally aligned hiring and long-term retention strategies.
            </motion.p>
          </div>
        </motion.div>

        {/* Section 3: Contractual Staffing */}
        <motion.div
          className="homepage-service-section flex flex-col lg:flex-row items-center gap-6 lg:gap-10"
          id="homepage-service-staffing"
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="homepage-service-image-wrapper w-full lg:w-1/2 aspect-[4/3] rounded-xl overflow-hidden">
            <motion.img
              src={staffingImg}
              alt="Contractual Staffing"
              className="homepage-service-image w-full h-full object-cover rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="homepage-service-content-wrapper w-full lg:w-1/2 space-y-4 px-4 sm:px-6">
            <motion.h2 className="homepage-service-title text-2xl sm:text-3xl" variants={fadeVariant}>Contractual Staffing</motion.h2>
            <motion.h3 className="homepage-service-subtitle text-lg sm:text-xl" variants={fadeVariant}>Scalable and Cost-Effective Workforce Solutions</motion.h3>
            <motion.p className="homepage-service-text text-gray-600" variants={fadeVariant}>
              In today’s dynamic business environment, flexibility is key. Our Contractual Staffing solutions offer on-demand access to qualified professionals.
            </motion.p>
            <motion.p className="homepage-service-text text-gray-600" variants={fadeVariant}>
              We manage the entire hiring lifecycle, from sourcing and screening to onboarding and payroll management.
            </motion.p>
            <motion.p className="homepage-service-text text-gray-600" variants={fadeVariant}>
              With MD Global by your side, scale your workforce efficiently while maintaining compliance, control, and performance excellence.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServiceSections;