import React from "react";
import { motion } from "framer-motion";
import AboutMDGlobal from "./AboutMDGlobal";
import AboutGlance from "./AboutGlance";
import VisionMission from "./VisionMission";
import OurPresence from "./OurPresence";
import OurUniqueness from "./OurUniqueness";
import img from '../../assets/images/About/Banner.jpg';

const AboutPage = () => {
  const headerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
      },
    },
  };

  return (
    <main className="flex-1 bg-gradient-to-b from-gray-50 to-white">
      <motion.section
        className="relative flex flex-col items-center justify-center w-full h-80 text-white overflow-hidden"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
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
          About Us
        </motion.h1>
        <motion.div
          className="w-16 h-1 bg-white/80 mt-2 rounded-full"
          variants={headerVariants}
          transition={{ delay: 0.2 }}
        ></motion.div>
      </motion.section>

      <motion.section
        className="w-full py-12 sm:py-16 lg:py-20 bg-gray-50"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <AboutMDGlobal />
      </motion.section>

      {/* <section className="w-full h-[120vh]">
        <OurPresence />
      </section> */}

      <section className="w-full">
        {/* <AboutGlance /> */}
      </section>

      <section className="w-full">
        {/* <VisionMission /> */}
        <OurUniqueness />
      </section>

      <section className="w-full">
        <VisionMission />
        
      </section>
      
    </main>
  );
};

export default AboutPage;