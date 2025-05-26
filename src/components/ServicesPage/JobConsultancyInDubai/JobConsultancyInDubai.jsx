import React from 'react'
import { motion } from 'motion/react';
import './JobConsultancyInDubai.css';
import JobConsultancyInDubaiForm from './JobConsultancyInDubaiForm';
import RoleJobConsultancies from './RoleJobConsultancies';
import BenefitsJobConsultancy from './BenefitsJobConsultancy';
import BestRecruitmentAgencyinDubai from './BestRecruitmentAgencyinDubai';
import FAQS from './FAQS';
import img from './../../../assets/images/About/Banner.jpg';


const JobConsultancyInDubai = () => {
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
            className="text-3xl font-bold text-center tracking-tight relative z-10 mt-2"
            variants={headerVariants}
          >
        Best Job Consultancy in Dubai | Recruitment Consultants In Dubai 2025
          </motion.h1>
          <motion.div
            className="w-16 h-1 bg-white/80 mt-2 rounded-full"
            variants={headerVariants}
            transition={{ delay: 0.2 }}
          ></motion.div>
        </motion.section>
      </header>
      <JobConsultancyInDubaiForm></JobConsultancyInDubaiForm>
      <RoleJobConsultancies></RoleJobConsultancies>
      <BenefitsJobConsultancy></BenefitsJobConsultancy>
      <BestRecruitmentAgencyinDubai></BestRecruitmentAgencyinDubai>
      <FAQS></FAQS>
    </>
  );
}

export default JobConsultancyInDubai