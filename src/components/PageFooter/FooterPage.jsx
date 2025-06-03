import React from "react";
import { motion } from "framer-motion";
import "./FooterPage.css";
import logo from "../../assets/images/Logo/Mdglobal (1).png";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { Link } from "react-router-dom"; // Uncomment if using React Router for navigation
const FooterPage = () => {
  const ImportantPages = [
    {
      heading: 'Permanent Staffing',
      path: '/services/Permanent-Staffing-solution',
    },
    {
      heading: 'Contractual Staffing',
      path: '/services/Contractual-Staffing-Services',
    },
    // {
    //   heading: 'Job Consultancy in Dubai',
    //   path: '/job-consultancy-in-dubai'
    // },
    // {
    //   heading: 'Recruitment Agencies In Dubai',
    //   path: '/recruitment-agencies-in-dubai',
    // },
    {
      heading: 'Outsourcing Companies in Dubai',
      path: '/outsourcing-companies-in-dubai',
    },
    // {
    //   heading: 'Top IT Recruitment Agencies in Dubai',
    //   path: '/it-recruitment-agencies-in-dubai',
    // },
    {
      heading: 'Executive Search',
      path: '/services/Executive-Search',
    },
    {
      heading: 'Blue coller Staffing',
      path: '/services/Blue-Collar-Staffing',
    },
    {
      heading: 'Leadership hiring',
      path: '/services/Leadership-Hiring',
    },
  ];

  const QuickLinks = [
    { heading: 'Blog', path: '/' },
    { heading: 'About Us', path: '/about' },
    { heading: 'Contact Us', path: '/contact-us' },
    { heading: 'Privacy Policy', path: '/privacy-Policy' },
  ];

  const OurVerticals = [
    { heading: "BFSI", path: "/" },
    { heading: "Oil & Gas", path: "/" },
    { heading: "FMCG", path: "/" },
    { heading: "Healthcare", path: "/" },
    { heading: "Hospitality", path: "/" },
    { heading: "Automobile", path: "/" },
    { heading: "Manufacturing", path: "/" },
    { heading: "Information Technology", path: "/" },
  ];

  const address = [
    {
      place: 'India',
      OfficeAddress: [
        `PLOT NO 9, GALI NO. 11, ADARSH NAGAR, Ballabgarh, Faridabad-121004`,
      ],
      Email: 'hrindia@mdglobalhr.com',
      PhoneNumber: '(+91) 82850 23400, 92123 62488',
    },
    {
      place: 'UAE Dubai',
      OfficeAddress: [
        'One Stop Business centre, 3floor office no. 28 inside Al ghurair corporate office near union metro station',
      ],
      Email: 'hr@mdglobalhr.com',
      PhoneNumber: '(+971) 52 498 4322, 56 503 5551',
    },
  ];

  const linkVariants = {
    hover: {
      scale: 1.05,
      color: "#FFD700",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    initial: { scale: 1, color: "#e4e4e4" },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  return (
    <footer className="footer-container">
      <motion.div
        className="footer-content"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Logo & About Section */}
          <div className="footer-section">
            <motion.img
              src={logo}
              alt="MD Global HR"
              className="footer-logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            />
            <motion.p
              className="footer-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            ></motion.p>
          </div>

          {/* Important Pages */}
          <div className="footer-section">
            <h3 className="footer-heading">IMPORTANT PAGES</h3>
            <ul className="footer-list">
              {ImportantPages.map((item, index) => (
                <motion.li
                  key={index}
                  variants={linkVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <Link to={item.path} className="footer-link">
                    <span className="footer-arrow">→</span> {item.heading}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-heading">QUICK LINKS</h3>
            <ul className="footer-list">
              {QuickLinks.map((item, index) => (
                <motion.li
                  key={index}
                  variants={linkVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <Link to={item.path} className="footer-link">
                    <span className="footer-arrow">→</span> {item.heading}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Our Verticals */}
          <div className="footer-section">
            <h3 className="footer-heading">OUR VERTICALS</h3>
            <ul className="footer-list">
              {OurVerticals.map((item, index) => (
                <motion.li
                  key={index}
                  variants={linkVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <div  className="footer-link">
                    <span className="footer-arrow">→</span> {item.heading}
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Address Section */}
        <div className="footer-address-section">
          {address.map((loc, index) => (
            // <Link
            // to="/contact">
            <motion.div
              key={index}
              className="footer-address "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + 0.2 * index, duration: 0.5 }}
              whileHover={{ y: -3 }}
            >
              <h4 className="footer-subheading">{loc.place}</h4>
              <div className="footer-address-text">
                <span className="footer-label">
                  <span className="footer-icon-address h-10 w-10 flex items-center justify-center rounded-full  mr-2">
                    <FaMapMarkerAlt className="text-white" />
                  </span>
                  {Array.isArray(loc.OfficeAddress)
                    ? loc.OfficeAddress.map((addr, i) => (
                        <div key={i} className="">{addr}</div>)) : loc.OfficeAddress}
                </span>
              </div>
              <div className="footer-address-text">
                <a href={`mailto:${loc.Email}`} className="footer-email flex">
                  <span className="footer-icon-address h-10 w-8 flex items-center justify-center rounded-full ">
                    <FaEnvelope className="text-white" />
                  </span>
                  <p className="text-[16px]"> {loc.Email}</p>
                </a>
              </div>
              <p className="footer-address-text">
                <span className="footer-label">
                  <span className="footer-icon-address h-6 w-10 flex items-center justify-center rounded-full ">
                    <FaPhoneAlt className="text-white" />
                  </span>
                  {loc.PhoneNumber}
                </span>
              </p>
            </motion.div>
            // </Link>
          ))}
        </div>

        {/* Footer Copyright */}
        <motion.div
          className="footer-copyright"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          © 2025 MD Global HR — All rights reserved.
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default FooterPage;