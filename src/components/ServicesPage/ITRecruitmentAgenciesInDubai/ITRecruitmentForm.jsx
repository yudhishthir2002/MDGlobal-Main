import React, { useState } from 'react';
import './ITRecruitmentForm.css';

const ITRecruitmentForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    designation: '',
    subject: '',
    location: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
    // Add submission logic here (e.g., API call)
  };

  return (
    <section className=" min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 py-8 px-4">
      <div className=" w-full max-w-5xl flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="ITRecruitmentFormform w-full md:w-1/2 bg-white rounded-xl shadow-2xl p-6 md:p-8 transform transition-all duration-300 hover:shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1">
              <input
                name="fullName"
                type="text"
                placeholder="Full name"
                value={formData.fullName}
                onChange={handleChange}
                className="inputMandP w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                required
              />
              <span className="text-red-500 text-sm ml-1">*</span>
            </div>
            <div className="col-span-2 md:col-span-1">
              <input
                name="phone"
                type="text"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full inputMandP p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 placeholder-gray-400"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 inputMandP border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                required
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <input
                name="company"
                type="text"
                placeholder="Your company"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-3 border inputMandP border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 placeholder-gray-400"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <input
                name="designation"
                type="text"
                placeholder="Designation"
                value={formData.designation}
                onChange={handleChange}
                className="w-full p-3 border inputMandP border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 placeholder-gray-400"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border inputMandP border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-gray-400"
                required
              >
                <option value="" disabled>
                  Subject
                </option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Support">Support</option>
                <option value="Feedback">Feedback</option>
              </select>
              {/* <span className="text-red-500 text-sm ml-1">*</span> */}
            </div>
            <div className="col-span-2 md:col-span-1">
              <input
                name="location"
                type="text"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                className="inputMandP w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 placeholder-gray-400"
              />
            </div>
            <div className="col-span-2">
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="inputMandP w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 placeholder-gray-400 resize-none"
              ></textarea>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="FormButton md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-all duration-200 font-semibold tracking-wide"
            >
              SUBMIT
            </button>
          </div>
        </form>

        {/* Image Section */}
        <div className="w-full md:w-1/2 hidden md:block">
          <img
            src="https://mdglobalhr.com/wp-content/uploads/2024/10/MD-Global-Dubai.jpg"
            alt="Buildings"
            className="w-full h-[80vh] object-cover rounded-xl shadow-2xl transform transition-all duration-300 hover:shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ITRecruitmentForm;
