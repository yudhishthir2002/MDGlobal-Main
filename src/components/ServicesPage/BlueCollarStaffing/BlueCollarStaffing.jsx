import React from "react";
import "./BlueCollarStaffing.css";
import { motion } from "framer-motion";
import "remixicon/fonts/remixicon.css";
import blueCollarImg from "./../../../assets/bluecollerImage/whatisBlueColler.jpeg";
import ChooseBlueCollar from "./../../../assets/bluecollerImage/ChooseBlueColler.jpeg";
import BenefitsBlueCollar from "./../../../assets/bluecollerImage/BenefitsBlueColler.jpeg";
import blueCollarUAE from "./../../../assets/bluecollerImage/blueCollerUAE.jpeg";
import img from "./../../../assets/images/About/Banner.jpg";

const BlueCollarStaffing = () => {
  const headerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, when: "beforeChildren" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const SetsUsApart = [
    {
      heading: "Pan-India and UAE Sourcing Network",
      text: "With recruitment hubs across India and an extensive partner network in the UAE, we ensure quick availability of manpower tailored to your job site and requirements.",
      icon: "ri-map-pin-line",
    },
    {
      heading: "Skill & Background Verification",
      text: "All candidates go through rigorous screening, trade tests (if needed), and background checks before deployment—ensuring reliability and safety.",
      icon: "ri-shield-check-line",
    },
    {
      heading: "Legal Compliance",
      text: "We handle visa processing, medical checks, labor law documentation, and onboarding compliance for UAE-based roles. In India, we ensure adherence to regional labor norms and wage structures.",
      icon: "ri-file-text-line",
    },
    {
      heading: "Flexible Deployment Models",
      text: "We offer contract-based, project-based, or full-time manpower solutions based on your timelines and budget.",
      icon: "ri-stack-line",
    },
    {
      heading: "On-Time Workforce Mobilization",
      text: "We know how critical timelines are in operational roles. Our team ensures fast mobilization without compromising on quality or compliance.",
      icon: "ri-time-line",
    },
    {
      heading: "Industry-Specific Workforce Expertise",
      text: "We provide skilled blue-collar talent for construction, logistics, manufacturing, oil & gas, and facility management—ensuring each placement meets industry-specific skills and certification standards.",
      icon: "ri-tools-line",
    },
    {
      heading: "End-to-End Recruitment & Deployment Support",
      text: "We handle the entire manpower process—from sourcing to post-deployment—streamlining workforce management so you can focus on your core operations.",
      icon: "ri-group-line",
    },
    {
      heading: "Strong Client-Centric Approach",
      text: "We build lasting relationships by understanding your unique needs, offering responsive support and tailored staffing solutions that grow with your business.",
      icon: "ri-hand-heart-line",
    },
  ];

  const RolesWeProvide = [
    { role: "Drivers (Light & Heavy Vehicle)", icon: "ri-steering-2-line" },
    { role: "HVAC & Electrical Technicians", icon: "ri-plug-line" },
    { role: "Machine Operators & CNC Technicians", icon: "ri-settings-3-line" },
    {
      role: "Welders, Plumbers, Fitters, Electricians",
      icon: "ri-hammer-line",
    },
    { role: "Masons, Painters, Carpenters", icon: "ri-paint-brush-line" },
    { role: "Warehouse & Packaging Staff", icon: "ri-archive-line" },
    { role: "Construction Labourers", icon: "ri-building-2-line" },
    { role: "Loading & Unloading Crew", icon: "ri-truck-line" },
  ];

  const IndustriesWeServe = [
    { industry: "Manufacturing & Production", icon: "ri-building-4-line" },
    { industry: "Construction & Infrastructure", icon: "ri-building-2-line" },
    { industry: "Oil & Gas", icon: "ri-gas-station-line" },
    { industry: "Transport & Logistics", icon: "ri-truck-line" },
    { industry: "Facility Management", icon: "ri-building-line" },
    { industry: "Hospitality & Maintenance", icon: "ri-hotel-line" },
    { industry: "Retail & Warehousing", icon: "ri-store-line" },
    { industry: "Utilities & Municipal Services", icon: "ri-lightbulb-line" },
  ];

  const UAEservices = [
    "Visa and labor contract processing",
    "Accommodation and transportation coordination",
    "Arabic-speaking workers when needed",
    "Compliance with UAE labor law and WPS (Wage Protection System)",
  ];

  const Benefits = [
    {
      heading: "Reduced Hiring Time and HR Overheads",
      text: "Outsourcing your blue collar workforce needs to MD Global HR Consulting LLC streamlines the recruitment process, saving you time and internal resources. Our pre-screened candidate database, quick turnaround times, and efficient onboarding processes help reduce hiring cycles and lower your recruitment and HR overheads.",
    },
    {
      heading: "Improved Workforce Productivity and Reliability",
      text: "We deploy trained, job-ready personnel who contribute to your operations from day one. Our workers are selected based on your specific requirements, ensuring minimal downtime, greater task accuracy, and dependable performance.",
    },
    {
      heading: "Legally Compliant and Transparent Processes",
      text: "All our staffing services follow strict compliance with local labor laws and industry-specific regulations. From contract management to payroll and statutory benefits, we handle it all with full transparency—eliminating legal risks and ensuring ethical practices.",
    },
    {
      heading: "Access to a Vast Talent Pool of Trained Workers",
      text: "MD Global HR Consulting LLC maintains a wide-reaching network of skilled and semi-skilled blue collar professionals across Oman and the region. Whether you require drivers, warehouse workers, electricians, cleaners, or factory staff, we provide access to a ready talent pool that meets your workforce requirements efficiently.",
    },
  ];

  return (
    <>
      <header>
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
            className="text-3xl sm:text-4xl font-extrabold tracking-tight relative z-10 mt-2"
            variants={headerVariants}
          >
            Blue Collar Staffing Solutions
          </motion.h1>
          <motion.div
            className="w-16 h-1 bg-white/80 mt-2 rounded-full"
            variants={headerVariants}
            transition={{ delay: 0.2 }}
          ></motion.div>
        </motion.section>
      </header>

      <main className="bcs-main">
        
        <section className="bcs-section">
          <article className="bcs-article">
            <h2 className="text-2xl sm:text-3xl font-bold text-center">
              Reliable Workforce Solutions for Operational Efficiency
            </h2>
            <p className="text-gray-700 bcs-p">
              At MD Global HR Consultancy LLC, we specialize in blue collar
              staffing services that power critical industries with skilled and
              semi-skilled workers across India and the UAE. Whether you're
              running a manufacturing unit, construction site, logistics
              warehouse, or industrial facility, our workforce solutions help
              you meet operational demands with discipline, efficiency, and
              reliability.
            </p>
            <p className="text-gray-700 bcs-p">
              In today’s competitive and fast-paced environment, organizations
              need a dependable blue-collar workforce to maintain productivity
              and meet deadlines. We help businesses build that
              workforce—recruiting individuals who are not only technically
              capable but also culturally aligned and ready to perform from day
              one.
            </p>
          </article>
        </section>

        <section className="bcs-section">
          <div className="w-full flex flex-col md:flex-row items-center">
            <article className="bcs-article w-full md:w-1/2 order-1 md:order-2">
              <h2 className="text-2xl sm:text-3xl font-bold">
                What is Blue Collar Staffing?
              </h2>
              <p className="text-gray-700 bcs-p">
                Blue collar staffing involves sourcing and deploying workers for
                hands-on roles that require physical labor, specific trade
                skills, or technical know-how. These include workers in sectors
                such as construction, manufacturing, logistics, facility
                management, transportation, and utilities.
              </p>
              <p className="text-gray-700 bcs-p">
                At MD Global, we streamline the entire blue collar recruitment
                process—from sourcing and screening to onboarding and
                compliance—so you get workers who are ready to contribute
                without delay.
              </p>
              <p className="text-gray-700 bcs-p">
                MD Global HR Consulting LLC delivers reliable blue-collar
                staffing for construction, logistics, and maintenance. We
                provide skilled and semi-skilled workers tailored to your
                industry. Fast deployment, verified candidates, and flexible
                hiring across Oman and the Gulf.
              </p>
            </article>
            <motion.div
              className="bcs-image-container w-full md:w-1/2 mb-4 md:mb-0 md:pr-4 order-2 md:order-1"
              initial="hidden"
              animate="visible"
              variants={imageVariants}
            >
              <img
                src={blueCollarImg}
                alt="Blue collar workers at a construction site"
                className="w-full rounded-lg shadow-md object-cover"
              />
            </motion.div>
          </div>
        </section>

        <section className="bcs-section bcs-why-choose-section">
          <div className="bcs-why-choose-wrapper">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
              Why Choose MD Global for Blue Collar Staffing?
            </h2>
            <p className="text-gray-700 text-center bcs-p mb-8">
              Our strength lies in our vast recruitment network, stringent
              vetting process, and deep understanding of industry-specific labor
              needs. With sourcing hubs across India, and an on-ground presence
              in the UAE, we ensure rapid mobilization of blue-collar workers
              for short-term, long-term, or project-based roles.
            </p>
            <div className="bcs-why-choose-content relative">
              <div
                className="bcs-why-choose-bg-image hidden md:block absolute inset-0 opacity-30"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="bcs-why-choose-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                {SetsUsApart.map((val, index) => (
                  <div
                    key={index}
                    className="bcs-why-choose-card rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300"
                    tabIndex={0}
                  >
                    <div className="bcs-card-icon mb-4">
                      <i className={`${val.icon} text-4xl text-blue-600`}></i>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">
                      {index + 1}. {val.heading}
                    </h3>
                    <p className="text-gray-600 text-sm">{val.text}</p>
                  </div>
                ))}
              </div>
              <motion.div
                className="bcs-image-container w-full mt-8 md:hidden"
                initial="hidden"
                animate="visible"
                variants={imageVariants}
              ></motion.div>
            </div>
          </div>
        </section>

        <section className="bcs-section">
          <article className="bcs-article">
            <h2 className="text-2xl sm:text-3xl font-bold text-center">
              Roles We Commonly Provide
            </h2>
            <p className="text-gray-700 text-center bcs-p">
              We supply reliable manpower for a wide range of blue-collar jobs,
              including but not limited to:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 bcs-industries-grid">
              {RolesWeProvide.map((item, index) => (
                <div
                  key={index}
                  className="bcs-industry-card w-64 bg-gray-50 rounded-lg shadow-sm p-4 flex flex-col items-center text-center hover:shadow-md hover:scale-100 transition-transform duration-300"
                >
                  <i className={`${item.icon} text-3xl text-blue-600 mb-2`}></i>
                  <p className="text-gray-700 text-sm font-medium">
                    {item.role}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="bcs-section bcs-benefits-section">
          <div
            className="bcs-benefits-header relative flex items-center justify-center h-48 mb-6 rounded-lg overflow-hidden"
            style={{
              backgroundImage: `url(${BenefitsBlueCollar})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <h2 className="benifits-blue-color text-2xl sm:text-3xl font-bold text-white relative z-10">
              Benefits of Our Blue Collar Staffing Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bcs-benefit-card bg-white rounded-lg shadow-md mt-5 p-6 hover:shadow-lg transition-shadow duration-300"
                initial="hidden"
                animate="visible"
                variants={imageVariants}
              >
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {index + 1}. {benefit.heading}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bcs-section">
          <article className="bcs-article">
            <h2 className="text-2xl sm:text-3xl font-bold text-center">
              Industries We Serve
            </h2>
            <p className="text-gray-700 text-center bcs-p">
              Our blue-collar staffing solutions support a broad spectrum of
              industries:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 bcs-industries-grid">
              {IndustriesWeServe.map((item, index) => (
                <div
                  key={index}
                  className="bcs-industry-card w-64 bg-gray-50 rounded-lg shadow-sm p-4 flex flex-col items-center text-center hover:shadow-md hover:scale-100 transition-transform duration-300"
                >
                  <i className={`${item.icon} text-3xl text-blue-600 mb-2`}></i>
                  <p className="text-gray-700 text-sm font-medium">
                    {item.industry}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="bcs-section">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
            Blue Collar Staffing in the UAE
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            <motion.div
              className="bcs-image-container w-full md:w-1/2 order-2 md:order-1"
              initial="hidden"
              animate="visible"
              variants={imageVariants}
            >
              <img
                src={blueCollarUAE}
                alt="Team of blue collar workers"
                className="w-full rounded-lg shadow-md object-cover"
              />
            </motion.div>
            <article className="bcs-article w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 order-1 md:order-2">
              <p className="text-gray-900 text-lg font-medium BlueCollarUAE text-center md:text-left">
                For UAE-based clients, we offer end-to-end workforce solutions
                including:
              </p>
              <ul className="bcs-list-bulleted BlueCollarUAE list-disc pl-5 text-gray-700">
                {UAEservices.map((service, index) => (
                  <li key={index}>
                    {index + 1}. {service}
                  </li>
                ))}
              </ul>
              <p className="text-gray-900 text-lg font-medium BlueCollarUAE text-center md:text-left">
                Our local team ensures all deployment meets the highest
                standards of compliance and professionalism.
              </p>
            </article>
          </div>
        </section>

        <section className="bcs-section">
          <article className="bcs-article">
            <h2 className="text-2xl sm:text-3xl font-medium text-center">
              Build Your Operations with the Right People
            </h2>
            <p className="text-gray-800 bcs-p">
              At MD Global HR Consultancy, we don’t just fill blue-collar
              roles—we build dependable, productive workforces that form the
              backbone of your business. With a focus on quality, compliance,
              and speed, we help you maintain operational excellence while
              keeping your business agile and competitive.
            </p>
            <p className="text-gray-800 bcs-p">
              Contact MD Global HR Consultancy LLC today to discuss your
              manpower requirements and learn how our blue-collar staffing
              services can help your business thrive.
            </p>
          </article>
        </section>
      </main>
    </>
  );
};

export default BlueCollarStaffing;
