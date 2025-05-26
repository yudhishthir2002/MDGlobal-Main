import React, { useState } from 'react';
import img from './../../../assets/images/About/Banner.jpg';
import { motion } from 'framer-motion';
import './DownloadBrochure.css';

const PDF_URL = './../../public/MD-Global-HR-Consulting-Brochure-Dubai.pdf';

const DownloadBrochure = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.contact.trim())
      newErrors.contact = 'Contact number is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const downloadThePDF = (url) => {
    fetch(url)
      .then((response) => {
        if (!response.ok)
          throw new Error(`Failed to fetch PDF: ${response.statusText}`);
        return response.blob();
      })
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = 'MD-Global-HR-Consulting-Brochure.pdf';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(blobUrl);
      })
      .catch((error) => {
        console.error('Error downloading PDF:', error);
        alert('Failed to download PDF. Please try again later.');
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    downloadThePDF(PDF_URL);
    setFormData({ name: '', email: '', contact: '', message: '' });
    setErrors({});
  };

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

  return (
    <>
      <header>
        <motion.section
          className="relative flex flex-col items-center justify-center w-full h-64 md:h-64 text-white text-center"
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
          <div className="absolute inset-0 bg-black/60"></div>
          <motion.h1
            className="text-3xl md:text-5xl font-bold tracking-tight relative z-10 mt-2 px-4"
            variants={headerVariants}
          >
            Download Brochure
          </motion.h1>
          <motion.div
            className="w-16 h-1 bg-white/80 mt-2 rounded-full relative z-10"
            variants={headerVariants}
            transition={{ delay: 0.2 }}
          />
        </motion.section>
      </header>

      <main className="download-form-wrapper">
        <div className="download-form-box">
          <h2 className="download-title">Get Free Consultation!</h2>
          <form onSubmit={handleSubmit} className="download-form">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full h-8 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && (
                <p className="text-sm text-red-600 mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-8 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">{errors.email}</p>
              )}
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full h-8 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.contact && (
                <p className="text-sm text-red-600 mt-1">{errors.contact}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full h- border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-56 h-9 bg-gradient-to-r from-blue-600 to-blue-800  text-white px-5 py-2 rounded-full shadow-md hover:from-blue-700 hover:to-blue-900 transition duration-300 font-semibold text-sm"
            >
              Submit & Download PDF
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default DownloadBrochure;
