import React from 'react';
import './ExecutiveSearchServices.css';
import { motion } from 'framer-motion';
import img from './../../../assets/images/About/Banner.jpg';

const ExecutiveSearchServices = () => {
  const headerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, when: 'beforeChildren' },
    },
  };

  const bannerVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: { duration: 1.2, ease: 'easeOut', delay: 0.4 },
    },
  };

  const OurProcess = [
    {
      heading: 'Discovery & Strategic Alignment',
      text: 'We begin by immersing ourselves in your organization’s structure, goals, values, and challenges. This helps us build a complete profile of the kind of leadership your company needs—not just in terms of experience and qualifications, but also mindset, vision, and cultural fit.',
    },
    {
      heading: 'Market Intelligence & Talent Mapping',
      text: 'Our team conducts comprehensive research to map the market and identify potential candidates—both active and passive. We utilize our proprietary database, industry contacts, and headhunting capabilities to build a strong talent pool tailored to your requirements.',
    },
    {
      heading: 'Confidential Outreach & Engagement',
      text: 'We discreetly reach out to shortlisted candidates, often those who are not actively seeking new opportunities but may be open to the right one. Our brand-neutral approach ensures confidentiality for both the client and the candidate throughout the process.',
    },
    {
      heading: 'Evaluation & Assessment',
      text: 'We evaluate each candidate through structured interviews, competency-based assessments, and psychometric tools (if required). Beyond the CV, we assess emotional intelligence, strategic thinking, agility, innovation potential, and team leadership.',
    },
    {
      heading: 'Cultural Fit & Strategic Value',
      text: 'A successful leader must fit into your organization’s DNA. We conduct thorough background and reference checks and align each candidate with your internal values, reporting structures, and long-term strategies.',
    },
    {
      heading: 'Shortlisting & Interview Coordination',
      text: 'We present you with a panel of carefully curated profiles—each supported by detailed insights and our rationale behind the recommendation. We manage the entire interview process, ensuring both speed and efficiency.',
    },
    {
      heading: 'Offer Management &Onboarding Support',
      text: 'Once you’ve selected your preferred candidate, we help facilitate offer negotiations, onboarding, and integration. We stay engaged beyond the hire, offering post-placement support to ensure a smooth transition and long-term success.',
    },
  ];

  const ChooseExecutiveSearch = [
    {
      heading: 'Global Reach, Local Expertise:',
      text: `With established operations in India and UAE, we navigate cross-cultural, legal, and market-specific nuances with ease. Whether you're hiring domestically or relocating international leadership talent, we ensure full compliance and seamless execution.`,
    },
    {
      heading: 'Industry-Specific Knowledge:',
      text: `Our consultants specialize in various industries, enabling us to speak your language and understand the specific skillsets and leadership qualities required in your domain.`,
    },
    {
      heading: 'Strong Leadership Network:',
      text: `Over the years, we've built a robust network of top-tier professionals across healthcare, IT, engineering, oil & gas, logistics, retail, construction, finance, and more. Many of our placements come through referrals and exclusive talent pools.`,
    },
    {
      heading: '\tConfidentiality & Integrity:',
      text: `We maintain the highest level of discretion throughout the process, respecting the sensitivities involved in senior-level hiring.`,
    },
    {
      heading: 'Speed with Precision:',
      text: `Executive hiring is urgent yet strategic. We adhere to clear timelines while ensuring that no step is compromised. Every candidate we recommend is thoroughly vetted for leadership potential and business impact. `,
    },
  ];

  const industries = [
    { name: 'Healthcare & Life Sciences', icon: 'ri-heart-pulse-line' },
    { name: 'Information Technology (IT) & Digital', icon: 'ri-computer-line' },
    { name: 'Manufacturing & Engineering', icon: 'ri-tools-line' },
    { name: 'Real Estate & Construction', icon: 'ri-building-line' },
    { name: 'Banking & Financial Services', icon: 'ri-bank-line' },
    { name: 'Retail, FMCG & Consumer Goods', icon: 'ri-shopping-cart-line' },
    { name: 'Energy, Oil & Gas', icon: 'ri-gas-station-line' },
    { name: 'Hospitality & Travel', icon: 'ri-hotel-line' },
    { name: 'Logistics & Supply Chain', icon: 'ri-truck-line' },
    { name: 'Education & EdTech', icon: 'ri-book-open-line' },
  ];

  const roles = [
    "Chief Executive Officer (CEO)",
    "Chief Operating Officer (COO)",
    "Chief Financial Officer (CFO)",
    "Chief Technology Officer (CTO)",
    "Chief Marketing Officer (CMO)",
    "Managing Director / General Manager",
    "Vice Presidents / Regional Directors",
    "Business Unit Heads",
    "Board Members & Advisors",
    "Senior Functional Heads (Sales, HR, Product, etc.)"
  ];

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
            className="text-4xl font-extrabold tracking-tight relative z-10 mt-2"
            variants={headerVariants}
          >
            Executive Search
          </motion.h1>
          <motion.div
            className="w-16 h-1 bg-white/80 mt-2 rounded-full"
            variants={headerVariants}
            transition={{ delay: 0.2 }}
          ></motion.div>
        </motion.section>
      </header>
      <main className="ExecutiveSearchServicesMainMP px-4 w-full mx-auto space-y-12 py-8">
        <section className="ExecutiveSearchServicesSection space-y-8">
          <article className="ExecutiveSearchServicesArticle space-y-4">
            <h2 className="ExecutiveSearchMP text-2xl md:text-3xl font-bold">
              Finding Visionary Leaders to Shape the Future of Your Organization
            </h2>
            <p className="ExecutiveSearchServicesParagraph">
              In the rapidly evolving business landscape of the 21st century,
              leadership has become the single most critical factor for
              organizational success. At MD Global HR Consultancy, we understand
              that hiring the right leader can transform a company’s culture,
              performance, and trajectory. That's why our Executive Search
              services are meticulously crafted to identify and place the most
              capable, forward-thinking, and results-driven leaders in your
              organization.
            </p>
            <p className="ExecutiveSearchServicesParagraph">
              With operations in <strong>India and the UAE</strong>, we bring a
              regional and global perspective to executive hiring. Our clients
              range from ambitious startups to multinational corporations—each
              looking for leaders who can not only manage change but drive it.
              Whether you’re seeking a visionary CEO, a strategic CFO, a
              transformational CTO, or a dynamic Managing Director, we partner
              with you to find talent that aligns with your business’s vision,
              values, and future goals.
            </p>
          </article>
          <article className="ExecutiveSearchServicesArticle space-y-4">
            <h2 className="ExecutiveSearchMP text-2xl md:text-3xl font-bold">
              Our Executive Search Philosophy
            </h2>
            <p className="ExecutiveSearchServicesParagraph">
              Executive search is not just recruitment—it’s leadership
              consulting. At MD Global, we believe that the leaders you bring on
              board should reflect your brand’s identity, represent your
              corporate culture, and be fully equipped to lead through
              disruption and innovation. Our role is to act as an extension of
              your organization, using our expertise to bring you leadership
              talent that creates long-term value.
            </p>
          </article>
        </section>
        <section className="ExecutiveSearchServicesSection space-y-4">
          <article className="ExecutiveSearchServicesArticle">
            <h2 className="ExecutiveSearchMP text-2xl md:text-3xl font-bold">
              Our Process: Precision Meets Partnership
            </h2>
            <p className="ExecutiveSearchServicesParagraph">
              We follow a structured, strategic, and consultative search
              methodology that ensures each executive recommendation is
              accurate, relevant, and impactful.
            </p>
            <ul className="ExecutiveSearchServicesList space-y-4 mt-4">
              {OurProcess.map((val, index) => (
                <li
                  key={index}
                  className="ExecutiveSearchServicesListItem bg-gray-50 p-4 rounded-lg shadow-sm"
                >
                  <h3 className="ExecutiveSearchServicesSubheading font-semibold text-lg">
                    {index + 1}. {val.heading}
                  </h3>
                  <p className="ExecutiveSearchServicesParagraph mt-1 text-gray-700">
                    {val.text}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        </section>
        <section className="ExecutiveSearchServicesSection space-y-4">
          <article className="ExecutiveSearchServicesArticle">
            <h2 className="ExecutiveSearchMP text-2xl md:text-3xl font-bold">
              Why Choose MD Global for Executive Search?
            </h2>
            <p className="ExecutiveSearchServicesParagraph">
              We understand that leadership hiring is one of the most sensitive
              and impactful decisions you will make. That’s why we offer more
              than recruitment—we deliver trusted advisory, market insight, and
              strategic talent solutions.
            </p>
            <ul className="ExecutiveSearchServicesList space-y-4 mt-4">
              {ChooseExecutiveSearch.map((val, index) => (
                <li
                  key={index}
                  className="ExecutiveSearchServicesListItem bg-gray-50 p-4 rounded-lg shadow-sm"
                >
                  <h3 className="ExecutiveSearchServicesSubheading font-semibold text-lg">
                    {index + 1}. {val.heading}
                  </h3>
                  <p className="ExecutiveSearchServicesParagraph mt-1 text-gray-700">
                    {val.text}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        </section>
        <section className="ExecutiveSearchServicesSection space-y-4">
          <article className="ExecutiveSearchServicesArticle">
            <h2 className="ExecutiveSearchMP text-2xl md:text-3xl font-bold">
              Types of Roles We Cover
            </h2>
            <p className="ExecutiveSearchServicesParagraph">
              We specialize in hiring for executive and strategic roles across verticals:
            </p>
            <div className="roles-container">
              <ul className="roles-list left-list">
                {roles.slice(0, 5).map((role, index) => (
                  <li key={index} className="ExecutiveSearchServicesListItem">
                    {role}
                  </li>
                ))}
              </ul>
              <ul className="roles-list right-list">
                {roles.slice(5).map((role, index) => (
                  <li key={index} className="ExecutiveSearchServicesListItem">
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </section>
        <section className="ExecutiveSearchServicesSection space-y-4">
          <article className="ExecutiveSearchServicesArticle">
            <h2 className="ExecutiveSearchMP text-center text-2xl md:text-3xl font-bold">
              Industries We Serve
            </h2>
            <p className="ExecutiveSearchServicesParagraph text-center">
              Our executive search services span a wide range of industries:
            </p>
            <div className="industries-section-grid">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="industries-section-card flex flex-col"
                >
                  <i className={`${industry.icon} industries-section-icon`}></i>
                  <h2 className="industries-section-card-title">
                    {industry.name}
                  </h2>
                </div>
              ))}
            </div>
          </article>
          <article className="ExecutiveSearchServicesArticle">
            <h2 className="ExecutiveSearchMP text-2xl md:text-3xl font-bold">
              A True Leadership Partner
            </h2>
            <p className="ExecutiveSearchServicesParagraph">
              At MD Global HR Consultantcy, we don't just fill leadership
              roles—we help shape the future of organizations by identifying
              individuals who can build cultures, lead teams, create innovation,
              and deliver performance. We believe the right leader brings
              clarity in uncertainty, direction in chaos, and growth in
              opportunity.
            </p>
            <p className="ExecutiveSearchServicesParagraph">
              Whether you're a startup scaling operations, an enterprise
              undergoing transformation, or a multinational expanding in India
              or the UAE—our executive search team is here to deliver
              exceptional leadership talent that makes a difference.
            </p>
          </article>
        </section>
        <p className="ExecutiveSearchServicesParagraph">
          <article>
            Let us help you hire not just a leader—but a game changer. Contact
            MD Global HR Consultancy today and take the first step toward
            future-ready leadership.
          </article>
        </p>
      </main>
    </>
  );
};

export default ExecutiveSearchServices;