import { motion } from 'framer-motion';
import './PermanentStaffingSolutions.css';
import img from './../../../assets/images/About/Banner.jpg';
import img2 from './../../../assets/Permanent Staffing/PermanentStaffing.jpeg';

const PermanentStaffingSolutions = () => {
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

  const ConsultingDeliversPermanent = [
    {
      heading: 'Understanding Your Needs',
      text: `We start by thoroughly understanding your business, including its goals, culture, and staffing needs. Our team works closely with you to define the skills, qualifications, and personality traits that are crucial for the positions you're looking to fill.`,
    },
    {
      heading: 'Talent Search and Screening',
      text: `We have an extensive database of qualified candidates, and we also leverage industry networks and advanced recruitment tools to identify top talent. Once potential candidates are sourced, we conduct an in-depth screening process. This includes interviews, reference checks, and skill assessments to ensure that the candidate is not only a match for the job but also a cultural fit for your organization.`,
    },
    {
      heading: 'Personalized Candidate Presentation',
      text: `After screening, we present you with a shortlist of highly qualified candidates who meet your specific requirements. Each candidate profile includes detailed insights into their professional background, experience, and how they align with the position.`,
    },
    {
      heading: 'Interview and Selection',
      text: `We assist in coordinating the interview process and provide support throughout the decision-making phase. We help you assess each candidate’s potential and make informed decisions, offering advice on compensation, benefits, and market trends to ensure competitive offers.`,
    },
    {
      heading: 'Onboarding Support',
      text: `Our role doesn’t end once a candidate is hired. We assist with the onboarding process, ensuring that your new team member integrates smoothly into your organization. This includes follow-up support to address any concerns or challenges that may arise in the initial stages of employment.`,
    },
  ];

  const ConsultingDifference = [
    {
      heading: 'Industry Expertise',
      text: 'We work across a wide range of industries, including IT, healthcare, manufacturing, finance, and more. This breadth of experience allows us to provide you with the best possible candidates who understand the unique challenges and opportunities in your sector.',
    },
    {
      heading: 'Quality Over Quantity',
      text: 'We believe in quality over quantity. Instead of bombarding you with resumes, we focus on providing a select group of top-tier candidates who are well-suited for your organization. This saves you time and ensures that you only meet with individuals who meet your exact specifications.',
    },
    {
      heading: 'Long-Term Commitment',
      text: 'We are committed to long-term success, both for your company and the candidates we place. We take pride in building strong, lasting relationships with both clients and job seekers, ensuring that everyone benefits from our services.',
    },
    {
      heading: 'Comprehensive Market Knowledge',
      text: 'We stay on top of the latest trends in the job market, allowing us to provide valuable insights on salary benchmarks, hiring practices, and the overall employment landscape. This helps you stay competitive in attracting and retaining top talent.',
    },
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
            className="text-3xl font-bold-400 tracking-tight relative z-10 mt-2"
            variants={headerVariants}
          >
            Your Trusted Global Partner for Permanent Staffing Solutions
          </motion.h1>
          <motion.div
            className="w-16 h-1 bg-white/80 mt-2 rounded-full"
            variants={headerVariants}
            transition={{ delay: 0.2 }}
          ></motion.div>
        </motion.section>
      </header>
      <main className="PermanenStaffingSolutionsMain px-4 py-10 w-full mx-auto space-y-16">
        <section className="space-y-6 text-center md:text-left">
          <h2 className="PermanentStaffingSolutionsHeading text-2xl md:text-3xl font-bold text-blue-700">
            Are you looking for Expert Permanent Staffing Solutions?
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify ChoosePermanentPMP">
            At MD Global HR Consulting, we recognize that your organization’s
            success hinges on the talent you employ. The foundation of any
            thriving business is built on skilled, dedicated, and loyal staff
            who are committed to driving the company forward. That’s where our
            expertise in staffing solutions comes in, making us a trusted
            partner for organizations seeking effective workforce strategies.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify ChoosePermanentPMP">
            Whether you’re a startup or an established corporation, finding the
            right talent can be challenging. At MD Global HR Consulting, we
            bridge the gap between skilled professionals and innovative
            companies. With our in-depth market understanding and commitment to
            delivering personalized staffing solutions, we ensure that your
            business has access to the best talent available, no matter where
            you are in the world.
          </p>
        </section>
        <section className="w-full py-8 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto space-y-8">
            <h2 className="choose-permanent-staffing text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 text-center">
              Why Choose Permanent Staffing?
            </h2>
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
              <div className="w-full lg:w-1/2 space-y-4 text-gray-700">
                <p className="ChoosePermanentPMP">
                  Permanent staffing is about building a workforce that stays
                  with your organization for the long haul, driving its success
                  and growth. Permanent employees are more than just
                  resources—they are integral to a company's performance,
                  innovation, and culture.
                </p>
                <p className="ChoosePermanentPMP">
                  Hiring the right talent for permanent positions is crucial. As
                  an employer, you seek individuals who not only fit into your
                  team but also align with your company’s vision and contribute
                  to its long-term goals.
                </p>
                <p className="ChoosePermanentPMP">
                  For employees, permanent roles offer stability and a clear
                  career path, which is why getting the hiring process right
                  from the start is essential.
                </p>
                <p className="ChoosePermanentPMP">
                  At MD Global HR Consulting, we understand this responsibility.
                  We ensure that the candidates we place in your organization
                  are not only skilled and qualified but also aligned with your
                  company’s culture, values, and objectives. Our goal is to help
                  you build a strong, dedicated, and effective team that drives
                  your organization forward.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <img
                  src={img2}
                  alt="Recruitment"
                  className="w-full h-auto max-w-full rounded-xl shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="PermanentStaffingSolutionsHeading text-center text-2xl">
            How MD Global HR Consulting Delivers Permanent Staffing Solutions
          </h2>
          <p className="text-gray-700 ChoosePermanentPMP">
            Our process for permanent staffing is meticulously designed to meet
            the specific needs of our clients. We combine our years of
            experience with a deep understanding of industry trends to create a
            customized hiring process that ensures you get the right fit for
            your company. Here’s a breakdown of how we approach permanent
            staffing:
          </p>
          <ul className="text-gray-700">
            {ConsultingDeliversPermanent.map((val, index) => (
              <li key={index} className="DeliversPermanentMP">
                <strong>
                  {index + 1}. {val.heading} :
                </strong>
                <p>{val.text}</p>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="PermanentStaffingSolutionsHeading text-center text-3xl font-medium">
            The MD Global HR Consulting Difference
          </h2>
          <p className="text-gray-700 ChoosePermanentPMP">
            When it comes to permanent staffing, MD Global HR Consulting stands
            out for several reasons:
          </p>
          <ul className="text-gray-700">
            {ConsultingDifference.map((val, index) => (
              <li key={index} className="DeliversPermanentMP">
                <strong>
                  {index + 1}. {val.heading} :
                </strong>
                <p>{val.text}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default PermanentStaffingSolutions;