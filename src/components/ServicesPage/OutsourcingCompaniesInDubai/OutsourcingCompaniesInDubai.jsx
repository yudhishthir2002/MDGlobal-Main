import React, { useState } from "react";
import { motion } from "framer-motion";
import ITRecruitmentForm from "../ITRecruitmentAgenciesInDubai/ITRecruitmentForm";
import img from "./../../../assets/images/About/Banner.jpg";
import "./OutsourcingCompaniesInDubai.css";

const OutsourcingCompaniesInDubai = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const ServicesOffered = [
    { heading: "Staff Outsourcing", text: "Hiring and onboarding skilled professionals for multinational companies." },
    { heading: "Payroll Outsourcing", text: "Outsource payroll management to ensure timely salary processing." },
    { heading: "Software Outsourcing", text: "Includes web design, app development, and portal creation." },
    { heading: "BPO", text: "Covers customer support, back-office services, and transaction processing." },
    { heading: "Offshore Outsourcing", text: "Covers software engineering, co-creation, and QA testing." },
  ];

  const BenefitsofOutsourcing = [
    { heading: "Focus on Core Competencies", text: "Companies can focus on what they do best." },
    { heading: "Cost and Time Efficiency", text: "Save time and budget by leveraging expert partners." },
    { heading: "Expert Knowledge", text: "Gain access to deep industry experience." },
    { heading: "Scalability", text: "Easily scale operations up or down." },
    { heading: "Global Talent Access", text: "Tap into worldwide expertise." },
    { heading: "Data Protection", text: "Dubai enforces strict data laws." },
    { heading: "Compliance", text: "Ensures alignment with local & international regulations." },
    { heading: "IP Rights Protection", text: "Protects your intellectual property legally." },
  ];

  const FAQSQues = [
    {
      heading: "What Are Outsourcing Companies?",
      text: "Agencies hired to manage tasks like IT, HR, or support outside your organization.",
    },
    {
      heading: "Why Do Businesses Use Them in Dubai?",
      text: "To streamline operations while leveraging local expertise and services.",
    },
    {
      heading: "How Do I Choose One?",
      text: "Focus on reputation, service quality, and alignment with your goals.",
    },
    {
      heading: "What Are The Benefits?",
      text: "Talent access, cost reduction, and operational focus.",
    },
    {
      heading: "What Services Do They Offer?",
      text: "HR, IT, customer service, and more to optimize your business."
    },
  ];

  return (
    <>
      <motion.section
        className="ocd-hero"
        style={{
          backgroundImage: `url(${img})`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="ocd-hero-overlay"></div>
        <div className="ocd-hero-content">
          <h1 className="ocd-hero-title">Top 5 Outsourcing Companies in Dubai 2025</h1>
          <div className="ocd-hero-underline" />
        </div>
      </motion.section>

      <main className="ocd-main">
        <section className="ocd-intro">
          <h2 className="ocd-section-title">Outsourcing Companies in Dubai</h2>
          <p className="ocd-intro-text">
            Dubai is a global hub for businesses with a robust outsourcing industry that helps companies
            streamline operations, reduce costs, and boost competitiveness.
          </p>
        </section>

        <section className="ocd-what">
          <h2 className="ocd-section-title">What is Outsourcing?</h2>
          <p className="ocd-what-text">
            Outsourcing involves delegating certain business functions to third-party service providers.
            This allows organizations to focus on their strengths while gaining access to expert services.
          </p>
        </section>

        <section className="ocd-companies">
          <h2 className="ocd-section-title">Top Outsourcing Companies in Dubai</h2>
          <ul className="ocd-companies-list">
            {[
              ["MD Global HR Consulting", "Executive search and consulting services in HR."],
              ["Dubai Outsource", "Staff, payroll, BPO, and offshore services for 1500+ global clients."],
              ["AMS International", "Known for well-rounded outsourcing solutions."],
              ["Parker Connect Consultants", "Specialized in HR, IT, and finance support."],
              ["HRSG Recruitment Company", "Leads in HR outsourcing and staffing services."]
            ].map(([name, desc], i) => (
              <li key={i} className="ocd-company-item">
                <h3 className="ocd-company-name">{name}</h3>
                <p className="ocd-company-desc">{desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="ocd-services">
          <h2 className="ocd-section-title">Services Offered</h2>
          <div className="ocd-services-grid">
            {ServicesOffered.map((item, i) => (
              <div key={i} className="ocd-service-card">
                <h3 className="ocd-service-heading">{item.heading}</h3>
                <p className="ocd-service-text">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="ocd-benefits">
          <h2 className="ocd-section-title">Benefits of Outsourcing</h2>
          <div className="ocd-benefits-grid">
            {BenefitsofOutsourcing.map((item, i) => (
              <div key={i} className="ocd-benefit-card">
                <h3 className="ocd-benefit-heading">{item.heading}</h3>
                <p className="ocd-benefit-text">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="ocd-faqs">
          <h2 className="ocd-section-title">Frequently Asked Questions</h2>
          <div className="ocd-faqs-list">
            {FAQSQues.map((faq, i) => (
              <div
                key={i}
                className="ocd-faq-item"
                onClick={() => toggleFAQ(i)}
              >
                <h3 className="ocd-faq-heading">
                  {faq.heading}
                </h3>
                {activeIndex === i && (
                  <p className="ocd-faq-text">{faq.text}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="ocd-contact">
          <p className="ocd-contact-text">
            Call: <strong>(+971) 52 498 4322, 56 503 5551</strong> | Website:
            <a href="https://mdglobalhr.com" className="ocd-contact-link">
              mdglobalhr.com
            </a>{" "}
            | Email: <span className="ocd-contact-email">hr@mdglobalhr.com</span>
          </p>
        </section>

        
      </main>
    </>
  );
};

export default OutsourcingCompaniesInDubai;