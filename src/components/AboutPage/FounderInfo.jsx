import { motion } from 'framer-motion';
import React from 'react';
import './FounderInfo.css';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: 'easeInOut',
    },
  },
};
  

const textMotion = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 1.2,
    },
  },
};

const imageMotion = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 1.2,
    },
  },
};

const FounderInfo = () => {
  return (
    <motion.div
      className="founder-main-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <h2 className="founder-heading">Our Founder</h2>

      <div className="founder-content-wrapper flex flex-col lg:flex-row gap-8 items-center lg:items-start">
        <motion.div
          className="founder-image-wrapper w-full lg:w-1/2"
          variants={imageMotion}
        >
          <div className="founder-img-holder relative w-full h-full max-w-md mx-auto">
            <img
              src=""
              alt="Founder"
              className="Founder-img w-full h-auto object-cover"
            />
            <div className="founder-image-overlay absolute inset-0"></div>
          </div>
        </motion.div>

        <motion.div
          className="founder-text-wrapper w-full lg:w-1/2"
          variants={textMotion}
        >
          <article className="text-justify">
            <motion.p
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: 'tween',
                ease: 'easeInOut',
                duration: 1,
                delay: 0.2,
              }}
            >
              Mr. Yogesh Kumar is a visionary entrepreneur and the driving force
              behind a group of companies that are redefining excellence in
              manpower recruitment and HR consulting across global markets. As
              the Founder and Owner of Balaji Manpower Recruitment, and Managing
              Director of MD Global HR Consulting LLC and MD Global India, Mr.
              Kumar has built a powerful network of operations spanning India,
              the UAE, and Oman.
            </motion.p>
            <motion.p
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: 'tween',
                ease: 'easeInOut',
                duration: 1,
                delay: 0.4,
              }}
            >
              With a deep understanding of global HR dynamics and a passion for
              people development, he has led his companies to become trusted
              partners for organizations seeking effective, ethical, and
              customized workforce solutions. His leadership is defined by a
              commitment to transparency, quality, and long-term client
              relationships.
            </motion.p>
            <motion.p
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: 'tween',
                ease: 'easeInOut',
                duration: 1,
                delay: 0.6,
              }}
            >
              Under Mr. Kumar’s guidance, the group has created meaningful
              connections between talent and opportunity—serving diverse
              industries with integrity and professionalism. His vision goes
              beyond staffing: he aims to build lasting careers, empower
              communities, and contribute to the economic growth of every region
              his companies serve.
            </motion.p>
            <motion.p
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: 'tween',
                ease: 'easeInOut',
                duration: 1,
                delay: 0.8,
              }}
            >
              Recognized for his strategic insight and tireless dedication, Mr.
              Yogesh Kumar continues to inspire excellence across the
              recruitment and HR consulting landscape.
            </motion.p>
          </article>
        </motion.div>
      </div>

      <motion.div
        className="founder-vision-container w-full h-auto bg-white rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="founder-vision-inner">
          <h3 className="founder-vision-heading">Founder’s Vision</h3>
          <article className="founder-vision-text">
            <p>
              Mr. Yogesh Kumar envisions a world where talent meets opportunity
              without barriers—where the right people are empowered to thrive in
              the right roles, regardless of geography or background.
            </p>
            <p>
              His vision is not just about recruitment—it’s about building
              careers, transforming lives, and driving sustainable growth for
              individuals, businesses, and communities. By fostering ethical
              practices, innovation, and global collaboration, Mr. Kumar aims to
              elevate the standards of HR consulting and workforce management.
            </p>
          </article>
          <h4 className="founder-vision-subheading">He is committed to:</h4>
          <ul className="founder-vision-list list-disc pl-6">
            <li>
              Bridging global talent gaps by connecting skilled professionals
              with leading organizations across the world.
            </li>
            <li>
              Uplifting local communities by creating employment opportunities
              that lead to long-term economic and social development.
            </li>
            <li>
              Promoting transparency and integrity in all aspects of recruitment
              and consulting services.
            </li>
            <li>
              Shaping the future of work by staying ahead of industry trends and
              embracing digital transformation in HR solutions. With this
              vision, Mr. Yogesh Kumar continues to lead his companies toward
              becoming trusted global partners in human capital development.
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FounderInfo;
