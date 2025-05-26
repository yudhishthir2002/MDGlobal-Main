import React from 'react';
import { motion } from 'motion/react';
import ITRecruitmentAgenciesInDubaiInfo from './ITRecruitmentAgenciesInDubaiInfo';
import img from './../../../assets/banner.jpeg'
import BenefitsofIT from './BenefitsofIT';
import TheRightITRecruitmentAgency from './TheRightITRecruitmentAgency';
import CommonMistakes from './CommonMistakes';
import FAQSITRecruitment from './FAQSITRecruitment';
import ITRecruitmentForm from './ITRecruitmentForm';
import banner from './../../../assets/images/About/Banner.jpg';

const ITRecruitmentAgenciesInDubai = () => {
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
            backgroundImage: `url(${banner})`,
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
            Top IT Recruitment Agencies in Dubai
          </motion.h1>
          <motion.div
            className="w-16 h-1 bg-white/80 mt-2 rounded-full"
            variants={headerVariants}
            transition={{ delay: 0.2 }}
          ></motion.div>
        </motion.section>
      </header>
      <main>
        {/* <section className="w-full h-[90vh]">
          <img src={img} alt="" className=" banner w-full h-[100%]" />
        </section> */}
        <>
          <ITRecruitmentAgenciesInDubaiInfo></ITRecruitmentAgenciesInDubaiInfo>
          <BenefitsofIT></BenefitsofIT>
          <TheRightITRecruitmentAgency></TheRightITRecruitmentAgency>
          <CommonMistakes></CommonMistakes>
          <FAQSITRecruitment></FAQSITRecruitment>
          <ITRecruitmentForm></ITRecruitmentForm>
        </>
      </main>
    </>
  );
};

export default ITRecruitmentAgenciesInDubai;
