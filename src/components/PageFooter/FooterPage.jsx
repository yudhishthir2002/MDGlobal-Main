import React from "react";
import { motion } from "framer-motion";
import "./FooterPage.css";
import logo from "../../assets/images/Logo/Mdglobal (1).png";
import { Link } from "react-router-dom";

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
    {
      heading: 'Job Consultancy in Dubai',
      path: '/job-consultancy-in-dubai'
    },
    {
      heading: 'Recruitment Agencies In Dubai',
      path: '/recruitment-agencies-in-dubai',
    },
    {
      heading: 'Outsourcing Companies in Dubai',
      path: '/outsourcing-companies-in-dubai',
    },
    {
      heading: 'Top IT Recruitment Agencies in Dubai',
      path: '/it-recruitment-agencies-in-dubai',
    },
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
    { heading: 'Contact Us', path: '/contact' },
    { heading: 'Privacy Policy', path: '/privacy-Policy' },
  ];

  const OurVerticals = [
    { heading: "BFSI", path: "/" },
    { heading: "FMCG", path: "/" },
    { heading: "Healthcare", path: "/" },
    { heading: "Automobile", path: "/" },
    { heading: "Manufacturing", path: "/" },
    { heading: "Information Technology", path: "/" },
  ];

  const address = [
    {
      place: "India",
      OfficeAddress: "Office UG 18, SRS Tower, Sec 31, Faridabad, Haryana",
      Email: "hrindia@mdglobalhr.com",
      PhoneNumber: "(+91) 82850 23400, 92123 62488",
    },
    {
      place: "UAE Dubai",
      OfficeAddress: "Al Fajer Complex, Office: 203-217, Second Floor, Oud Metha, Dubai",
      Email: "hr@mdglobalhr.com",
      PhoneNumber: "(+971) 52 498 4322, 56 503 5551",
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
                  <a href={item.path} className="footer-link">
                    <span className="footer-arrow">→</span> {item.heading}
                  </a>
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
                  <a href={item.path} className="footer-link">
                    <span className="footer-arrow">→</span> {item.heading}
                  </a>
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
                  <a href={item.path} className="footer-link">
                    <span className="footer-arrow">→</span> {item.heading}
                  </a>
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
                className="footer-address"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + 0.2 * index, duration: 0.5 }}
                whileHover={{ y: -3 }}
              >
                <h4 className="footer-subheading">{loc.place}</h4>
                <p className="footer-address-text">
                  <span className="footer-label">Address:</span>{' '}
                  {loc.OfficeAddress}
                </p>
                <p className="footer-address-text">
                  <span className="footer-label">Email:</span>{' '}
                  <a href={`mailto:${loc.Email}`} className="footer-email">
                    {loc.Email}
                  </a>
                </p>
                <p className="footer-address-text">
                  <span className="footer-label">Phone:</span> {loc.PhoneNumber}
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