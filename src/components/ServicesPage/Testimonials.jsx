import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './testimonials.css'

const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'Ritu tanwar',
      role: 'Developer, CodeZap',
      quote:
        'I highly recommend MD Global HR Consulting. Their white-collar recruitment services are efficient, and they always provide high-quality candidates tailored to our needs.',
      image: 'https://via.placeholder.com/100',
    },
    {
      name: 'Riya Gulati',
      role: 'Developer, CodeZap',
      quote: `MD Global's expertise in the recruitment industry is evident. Their dedication to finding the right fit for our company has made a significant impact on our team.`,
      image: 'https://via.placeholder.com/100',
    },
    {
      name: 'Shilpa Sharma',
      role: 'Developer, CodeZap',
      quote: `They are great help to start the career. Awesome experience working with them. Will definitely refer this to family and friends..`,
      image: 'https://via.placeholder.com/100',
    },
    {
      name: 'HR Recruiter - Jitendra Gill',
      role: 'Developer, CodeZap',
      quote: `Helpful in finding a career. The staff were super friendly. The office is nice and cozy, and I got hired.`,
      image: 'https://via.placeholder.com/100',
    },
    ];


  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Auto slide every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="testimonialsMainHeading text-3xl font-bold text-center text-gray-900 mb-16 tracking-wide"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>

        <div className="relative">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              key={currentIndex}
              className="bg-white  p-8 rounded-xl shadow-lg max-w-xl mx-auto border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              style={{ width: '90vw', height: '200px' }}
            >
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-t-xl">
                <h3 className=" text-2xl font-semibold text-gray-800 mb-4 text-center">
                  Delighted with MD Global services!
                </h3>
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="testimonialsCardsStars w-6 h-6 text-yellow-400 fill-current mr-2"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118l-3.39-2.46c-.783-.57-.381-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
                    </svg>
                  ))}
                </div>
                <p className="testimonialsCardsQuote text-gray-700 text-lg leading-relaxed italic mb-6 text-center">
                  " {testimonialsData[currentIndex].quote} "
                </p>
              </div>
              <div className="  flex items-center justify-center p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-b-xl">
                <h4 className="testimonialsCardsHeading text-center text-xl font-bold text-gray-900">
                  {testimonialsData[currentIndex].name}
                </h4>
              </div>
            </motion.div>
          </motion.div>
          <button
            onClick={() =>
              setCurrentIndex(
                (prevIndex) =>
                  (prevIndex - 1 + testimonialsData.length) %
                  testimonialsData.length
              )
            }
            className="MovingButtonLeft flex items-center justify-center  absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 transition-colors"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="MovingButtonRight flex items-center justify-center  absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 transition-colors"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
