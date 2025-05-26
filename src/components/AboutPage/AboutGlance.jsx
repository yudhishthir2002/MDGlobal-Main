import React, { useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import officeImg from './../../assets/office-730681_1920.jpg'; // Assuming this matches the image style
import './AboutGlance.css'

const AboutGlance = () => {
  const Glance = [
    { number: '15+', text: 'Years in Business' },
    { number: '250+', text: 'Happy Clients' },
    { number: '20,000+', text: 'Candidates Placed Across Top Industries' },
    { number: '5+', text: 'Offices Globally' },
  ];

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Animation variants for child elements
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  // Animation controls for number counting
  const numberControls = useAnimationControls();

  // Trigger number animation when component is in view
  useEffect(() => {
    const animateNumbers = async () => {
      await numberControls.start({
        scale: [1, 1.2, 1],
        transition: { duration: 0.5, ease: 'easeInOut' },
      });
      await numberControls.start({
        opacity: 1,
        transition: { duration: 0.3 },
      });
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateNumbers();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );
    const target = document.querySelector('.stats-grid');
    if (target) observer.observe(target);
    return () => observer.disconnect();
  }, [numberControls]);

  return (
    <div className="relative w-full h-[90vh] md:h-[70vh] lg:h-[90vh] bg-gray-900 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${officeImg})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent"></div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Heading Section */}
        <motion.div className="w-full md:w-auto text-white text-left ml-3" variants={itemVariants}>
          <h1 className="GlanceHeading text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold">
            MD Global At A Glance
          </h1>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="w-full md:w-auto flex flex-row flex-wrap md:grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 stats-grid"
          variants={itemVariants}
        >
          {Glance.map((val, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center   p-6 sm:p-8 md:p-10 bg-white/10 backdrop-blur-md rounded-lg   border border-gray-300 shadow-md text-white text-center min-h-[90px] sm:min-h-[180px] md:min-h-[140px] w-80 "
              variants={itemVariants}
            >
              <motion.span
                className="  text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold"
                custom={index}
                animate={numberControls}
                initial={{ opacity: 0, scale: 1 }}
              >
                {val.number}
              </motion.span>
              <span className="   text-base sm:text-lg md:text-xl lg:text-2xl">
                {val.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutGlance; 