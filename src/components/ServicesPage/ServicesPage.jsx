import React from 'react'
import { motion } from 'framer-motion';
import OurServices from './OurServices';
import Testimonials from './Testimonials';
import ForClientCandidate from './ForClientCandidate';
import { Outlet } from 'react-router-dom';
import img from './../../assets/images/About/Banner.jpg';


const ServicesPage = () => {
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

     const bannerVariants = {
       hidden: { opacity: 0, scaleX: 0 },
       visible: {
         opacity: 1,
         scaleX: 1,
         transition: {
           duration: 1.2,
           ease: 'easeOut',
           delay: 0.4,
         },
       },
     };

  return (
    <main>
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
          Our Services
        </motion.h1>
        <motion.div
          className="w-16 h-1 bg-white/80 mt-2 rounded-full"
          variants={headerVariants}
          transition={{ delay: 0.2 }}
        ></motion.div>
      </motion.section>
      <section>
        <OurServices></OurServices>
        <ForClientCandidate></ForClientCandidate>
      </section>
      <Outlet />
    </main>
  );
}

export default ServicesPage