import React from 'react';
import img from './../../assets/images/About/Banner.jpg';
import { motion } from 'framer-motion';
import './ContactPage.css';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import UAE_Flag from './../../assets/flages/UAE_flaf.png';
import India_Flag from './../../assets/flages/india-flag.png';

const ContactPage = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const officeData = [
    {
      country: 'UAE Office',
      flag: UAE_Flag,
      address:
        'Al Fajer Complex, Office: 203-217, Second Floor, Oud Metha, Dubai',
      phone: '+971 504099390, 56 503 5551',
      email: 'hr@mdglobalhr.com',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3608.8262116816813!2d55.30903882408264!3d25.242777779855395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAl%20Fajer%20Complex%2C%20Office%3A%20203-217%2C%20Second%20Floor%2C%20Oud%20Metha%2C%20Dubai!5e0!3m2!1sen!2sin!4v1745831021542!5m2!1sen!2sin',
    },
    {
      country: 'India Office',
      flag: India_Flag,
      address: ' Office UG 19, SRS Tower, Sec 31, Faridabad, Haryana',
      phone: '+91 9212362488, 8285023400',
      email: 'hrindia@mdglobalhr.com',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.080935863823!2d77.30639257421481!3d28.446976492485113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce745c186e61f%3A0x671628d9df0d8a1c!2sSRS%20Towers!5e0!3m2!1sen!2sin!4v1745831274518!5m2!1sen!2sin',
    },
  ];

  return (
    <>
      <header>
        <motion.section
          className="relative flex flex-col items-center justify-center w-full h-72 text-white overflow-hidden contact-banner"
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
            className="text-4xl font-extrabold tracking-tight relative z-10"
            variants={headerVariants}
          >
            Contact Us
          </motion.h1>
          <motion.div
            className="w-16 h-1 bg-white/80 mt-2 rounded-full relative z-10"
            variants={headerVariants}
            transition={{ delay: 0.2 }}
          ></motion.div>
        </motion.section>
      </header>
      <main className="container-contact w-full mx-auto px-4 py-12 ">
        <motion.div
          className="OfficeMainDiv w-full  gap-6 sm:gap-8"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          {officeData.map((office, index) => (
            <motion.div
              key={index}
              className="OfficeDataCards w-full bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center justify-center transition-transform hover:shadow-xl"
              variants={cardVariants}
            >
              <div className="flex flex-col justify-center items-center w-full p-6 sm:p-8">
                <div className="OfficeMainFlag w-full flex justify-center items-center">
                  <img
                    src={office.flag}
                    alt={`${office.country} Flag`}
                    className=" h-14 w-20  object-cover rounded-sm"
                    loading="lazy"
                  />
                </div>
                <h3 className="OfficeMainHeading text-xl sm:text-2xl font-bold mt-4 text-gray-800">
                  {office.country}
                </h3>
                <div className="OfficeMainMap w-full h-[200px] sm:h-[250px] mt-4 rounded-lg overflow-hidden">
                  <iframe
                    src={office.mapSrc}
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className=" Map-iframe border-0"
                    title={`${office.country} Location Map`}
                  />
                </div>
                <div className="flex flex-col items-start mt-6 text-gray-600 space-y-4 w-full">
                  <div className="OfficeMainData flex items-center space-x-3">
                    <FaMapMarkerAlt className="text-blue-600 text-lg" />
                    <span className="MPForAPE text-sm sm:text-base">
                      {office.address}
                    </span>
                  </div>
                  <div className="OfficeMainData flex items-center space-x-3">
                    <FaPhoneAlt className="text-blue-600 text-lg" />
                    <a
                      href={`tel:${office.phone.split(',')[0].trim()}`}
                      className="MPForAPE text-sm sm:text-base hover:text-blue-700"
                    >
                      {office.phone}
                    </a>
                  </div>
                  <div className="OfficeMainData flex items-center space-x-3">
                    <FaEnvelope className="text-blue-600 text-lg" />
                    <a
                      href={`mailto:${office.email}`}
                      className=" MPForAPE text-sm sm:text-base hover:text-blue-700"
                    >
                      {office.email}
                    </a>
                  </div>
                </div>
                <div className="OfficeMainSMMain flex space-x-4 mt-6">
                  <a
                    href="#"
                    className="OfficeMainSM text-blue-600 hover:text-blue-800 transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebookF size={20} />
                  </a>
                  <a
                    href="#"
                    className="OfficeMainSM text-blue-400 hover:text-blue-600 transition-colors"
                    aria-label="Twitter"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href="#"
                    className="OfficeMainSM text-blue-700 hover:text-blue-900 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn size={20} />
                  </a>
                  <a
                    href="#"
                    className="OfficeMainSM text-pink-600 hover:text-pink-800 transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <h2 className="OfficeFormMP text-center text-3xl font-bold text-gray-600">
          Partner with us today, and let's build the future together!
        </h2>
        <div className="contact-form-container">
          <form className="contact-form">
            <h2 className="contact-form-title">Get in Touch</h2>

            <label htmlFor="name" className="contact-form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="contact-form-input"
              required
            />

            <label htmlFor="mobile" className="contact-form-label">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              className="contact-form-input"
              required
            />

            <label htmlFor="email" className="contact-form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="contact-form-input"
              required
            />

            <label htmlFor="message" className="contact-form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="contact-form-textarea"
              required
            ></textarea>

            <button type="submit" className="contact-form-button">
              Send Message
            </button>
          </form>
        </div>
      </main>{' '}
    </>
  );
};

export default ContactPage;
