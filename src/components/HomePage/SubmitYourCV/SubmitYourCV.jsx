import { motion } from 'framer-motion';
import React, { useState } from 'react';
import img from './../../../assets/images/About/Banner.jpg';
import './SubmitYourCV.css';
import countryData from './countryData.json'

const SubmitYourCV = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    message: '',
    email: '',
    designation: '',
    salary: '',
    cv: null,
    country: '',
    countryCode: '+91', // Default to US
    availability: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'cv') {
      setFormData({ ...formData, cv: files[0] });
    } else if (name === 'country') {
      const selectedCountry = countryData.find((c) => c.code === value);
      setFormData({
        ...formData,
        country: value,
        countryCode: selectedCountry ? selectedCountry.dialCode : '+1',
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullPhoneNumber = `${formData.countryCode}${formData.mobile}`;
    const submittedData = {
      ...formData,
      fullPhoneNumber,
    };
    console.log('Form Data Submitted:', submittedData);
    // Add actual submission logic here (e.g., API call, EmailJS, Formspree)
  };

  const headerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: 'beforeChildren',
      },
    },
  };

  return (
    <>
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
            Submit Your CV
          </motion.h1>
          <motion.div
            className="w-16 h-1 bg-white/80 mt-2 rounded-full"
            variants={headerVariants}
            transition={{ delay: 0.2 }}
          ></motion.div>
        </motion.section>
      </header>
      <main>
        <div className="cv-form-container custom-cv-form-spacing bg-white shadow-md rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Submit Your CV
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block font-medium mb-1">
                Full Name<span className="star">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="custom-input-name w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="Email" className="block font-medium mb-1">
                Email Address<span className="star">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="custom-input-mobile w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="country" className="block font-medium mb-1">
                Country <span className="star">*</span>
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="custom-input-mobile w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled>
                  Select your country
                </option>
                {countryData.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name} ({country.dialCode})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="mobile" className="block font-medium mb-1">
                Mobile Number <span className="star">*</span>
              </label>
              <div className="flex">
                <span
                  className="custom-input-mobile w-1/4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ minWidth: '60px', textAlign: 'center' }}
                >
                  {formData.countryCode}
                </span>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="custom-input-mobile w-3/4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your mobile number"
                  required
                  pattern="[0-9]{7,15}"
                  title="Please enter a valid mobile number (7-15 digits)"
                />
              </div>
            </div>

            <div>
              <label htmlFor="designation" className="block font-medium mb-1">
                Your designation<span className="star">*</span>
              </label>
              <input
                type="text"
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="custom-input-mobile w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="salary" className="block font-medium mb-1">
                Current / Last salary *INR
                <span className="star">*</span>
              </label>
              <input
                type="text"
                id="salary"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                className="custom-input-mobile w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">
                When can you join? <span className="star">*</span>
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="availability"
                    value="Immediately"
                    checked={formData.availability === 'Immediately'}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  Immediately
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="availability"
                    value="After 15 days"
                    checked={formData.availability === 'After 15 days'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  After 15 days
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="availability"
                    value="After 1 month"
                    checked={formData.availability === 'After 1 month'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  After 1 month
                </label>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block font-medium mb-1">
                Message<span className="star">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="custom-input-message w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="cv"
                className="block border text-center border-black w-24 font-medium mb-1"
              >
                Upload CV
                <span className="star">*</span>
              </label>
              <input
                type="file"
                id="cv"
                name="cv"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                className="custom-input-cv w-full"
                required
              />
            </div>

            <button
              type="submit"
              className="w-40 h-12 bg-blue-600 text-white py-2 md:py-3 rounded-2xl hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default SubmitYourCV;
