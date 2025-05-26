import React from 'react';
import './AboutUsMAinPage.css';
import { Link } from 'react-router-dom';

const AboutUsMAinPage = () => {
  return (
    <div className="main w-full bg-black text-white py-8 sm:py-10 md:py-12">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-6 sm:mb-8 md:mb-10">
        <span className="inline-block text-gray-400 text-sm sm:text-base md:text-lg text-center">
          Who We Are?
        </span>
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mt-2">
          About Us
        </h1>
      </div>

      {/* Card Section */}
      <div className="card flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8">
        {/* Image */}
        <img
          src="https://mdglobalhr.com/wp-content/uploads/2024/10/Recruitment-Services.png"
          alt="About us"
          className="w-full sm:w-[300px] md:w-[400px] lg:w-[480px] h-auto object-cover rounded-lg"
        />
        {/* Text Content */}
        <div className="flex flex-col  justify-between  sm:text-left">
          <p className="text-sm sm:text-base md:text-lg text-center lg:text-xl leading-relaxed">
            MD Global Human Resource Consulting is the fastest-growing staffing
            firm and job consultancy service in the UAE and India. At MD Global
            HR Consulting, we take pride in being the leading staffing firm in
            UAE and India, specializing in Executive Search and Consultancy
            Services. With a commitment to excellence, we bring together
            top-notch talent and esteemed organizations, fostering success and
            growth in the competitive business landscape. At MD Global HR
            Consulting, we deliver top-notch services, including Recruitment,
            Executive Search, and Consultancy Services, from our conveniently
            located offices in Dubai, United Arab Emirates, and India.
          </p>
          <Link
            to="./about"
            className="button mt-4 sm:mt-6 bg-white  w-30 h-10 text-black font-mono text-sm sm:text-base md:text-lg py-2 px-4 rounded-lg self-center sm:self-start flex "
          >
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUsMAinPage;
