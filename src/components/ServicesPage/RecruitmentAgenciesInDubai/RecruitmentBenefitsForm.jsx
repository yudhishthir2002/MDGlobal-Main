import { motion } from 'framer-motion';
import { useState } from 'react';
import './RecruitmentBenefitsForm.css';
const RecruitmentBenefitsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  return (
    <div className="max-w-7xl mx-auto p-6 min-h-screen bg-gray-50">
      {/* Centered Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Benefits of Using a Recruitment Agency in Dubai
        </h2>
      </div>
      {/* Grid Layout for Content and Form */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Section: Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="ForMarginPadding space-y-6 text-gray-700 leading-relaxed">
            <p className="paragrphMarginpadding">
              <strong className="text-blue-600">
                Access to a Diverse Talent Pool:
              </strong>{' '}
              Recruitment agencies have an extensive network of candidates,
              including those not actively seeking jobs but open to
              opportunities. This expands your hiring reach beyond typical job
              applicants, ensuring you find the ideal candidate for your
              organization.
            </p>
            <p className="paragrphMarginpadding">
              <strong className="text-blue-600">
                Expertise and Industry Knowledge:
              </strong>{' '}
              Professional recruiters bring deep industry insights and
              understand hiring trends. They tailor recruitment strategies to
              your needs, helping you secure top talent in a competitive market.
            </p>
            <p className="paragrphMarginpadding">
              <strong className="text-blue-600">
                Time and Cost Efficiency:
              </strong>{' '}
              Internal recruitment can be time-consuming and costly. Agencies
              handle sourcing, pre-screening, and shortlisting, streamlining the
              process and freeing your HR team to focus on core tasks.
            </p>
            <p className="paragrphMarginpadding">
              <strong className="text-blue-600">
                Enhanced Candidate Screening:
              </strong>{' '}
              Agencies use rigorous screening to evaluate candidates’ skills,
              experience, and cultural fit, reducing the risk of bad hires and
              ensuring long-term success.
            </p>
          </div>
        </motion.div>

        {/* Right Section: Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="ForMarginPadding bg-white p-8 rounded-2xl shadow-lg flex flex-col space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 className=" text-xl font-semibold text-gray-900">Get in Touch</h3>
          <div className=" space-y-5">
            <div>
              <label className="labelMP block text-sm font-medium text-gray-700">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="inputMP mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <label className="labelMP block text-sm font-medium text-gray-700">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="inputMP mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="labelMP block text-sm font-medium text-gray-700">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="E.g. +971 50 123 4567"
                value={formData.phone}
                onChange={handleChange}
                className="inputMP mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              />
            </div>
            <div>
              <label className="labelMP block text-sm font-medium text-gray-700">
                Upload File
              </label>
              <input
                type="file"
                name="file"
                onChange={handleChange}
                className="inputMP mt-1 w-full text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition"
              />
            </div>
            <div>
              <label className="labelMP block text-sm font-medium text-gray-700">
                Message *
              </label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="inputMP mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Tell us about your needs"
                required
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="inputMP w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 font-medium"
          >
            Submit
          </button>
        </motion.form>
      </div>
      <div className="mt-12 text-gray-700 leading-relaxed">
        <strong>Focused and Targeted Recruitment: </strong>
        <p>
          Recruitment agencies can customize their approach to meet your
          specific hiring needs. Whether you are looking for specialized roles
          or require talent in niche industries, these agencies can tailor their
          recruitment strategies accordingly. These are just a few of the many
          recruitment agencies in Dubai. Each one has its unique strengths and
          specializations, making them valuable resources for job seekers and
          employers alike. Whether you’re a job seeker looking to navigate the
          competitive job market in Dubai, or an employer seeking the right
          talent for your organization, these recruitment agencies can provide
          the support and expertise you need.
        </p>
      </div>
    </div>
  );
};

export default RecruitmentBenefitsForm;