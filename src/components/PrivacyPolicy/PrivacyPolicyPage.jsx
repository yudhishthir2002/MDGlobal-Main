import { motion } from 'framer-motion';
import React from 'react'
import './PrivacyPolicy.css';
import img from './../../assets/images/About/Banner.jpg';

const PrivacyPolicyPage = () => {
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
                 className="text-4xl font-extrabold tracking-tight relative z-10 mt-2"
                 variants={headerVariants}
                 >
                 Privacy Policy
                 
               </motion.h1>
               <motion.div
                 className="w-16 h-1 bg-white/80 mt-2 rounded-full"
                 variants={headerVariants}
                 transition={{ delay: 0.2 }}
               ></motion.div>
             </motion.section>
       </header>
      <main className="PrivacyPolicyMain">
        <section>
          <article className="PrivacyPolicyArticle text-gray-700">
            <p className="PrivacypolicyPMain">
              At <strong>MD Global Human Resource Consulting LLC</strong>, your
              privacy is our priority. This Privacy Policy outlines how we
              collect, use, protect, and disclose your personal information when
              you visit our website and use our recruitment and HR consulting
              services across <strong>Dubai, UAE, and India.</strong>.
            </p>
          </article>
          <article>
            <h3 className="privacyPolicyheading font-medium text-2xl">
              {' '}
              Information We Collect
            </h3>
            <p className="PrivacypolicyP">
              We may collect the following types of personal information:
            </p>
            <ul>
              <li>
                <p className="PrivacypolicyP">
                  <strong>1. Personal Identification Information:</strong> Full
                  name, email address, phone number, date of birth, location,
                  and address.
                </p>
              </li>
              <li>
                <p className="PrivacypolicyP">
                  <strong>2. Professional Information:</strong> CV/resume,
                  current and past employment details, education history,
                  skillsets, certifications, and references.
                </p>
              </li>
              <li>
                <p className="PrivacypolicyP">
                  <strong>3. Usage Data:</strong> Information on how you use our
                  website, including IP address, browser type, device type,
                  pages visited, and time spent.
                </p>
              </li>
            </ul>
          </article>
          <article>
            <h3 className="privacyPolicyheading font-medium text-2xl">
              How We Use Your Information
            </h3>
            <p className="PrivacypolicyP">We use your information to:</p>
            <ul className="list-disc">
              <li className="PrivacypolicyList_element">
                1. Provide recruitment and HR consulting services
              </li>
              <li className="PrivacypolicyList_element">
                2. Match candidates with suitable job opportunities
              </li>
              <li className="PrivacypolicyList_element">
                3. Communicate with you regarding job openings, interviews, and
                updates
              </li>
              <li className="PrivacypolicyList_element">
                4. Improve our website and user experience
              </li>
              <li className="PrivacypolicyList_element">
                5. Comply with applicable laws and regulations
              </li>
            </ul>
          </article>
          <article>
            <h3 className="privacyPolicyheading font-medium text-2xl">
              Sharing Your Information
            </h3>
            <p className="PrivacypolicyP">
              We do not sell, rent, or trade your personal information. However,
              we may share your information with:
            </p>
            <ul>
              <li className="PrivacypolicyList_element">
                1. Verified employers and hiring partners
              </li>
              <li className="PrivacypolicyList_element">
                2. Our affiliated companies and partners in India and UAE
              </li>
              <li className="PrivacypolicyList_element">
                3. Service providers assisting in our operations (e.g., IT
                support, cloud hosting)
              </li>
              <li className="PrivacypolicyList_element">
                4. Legal authorities when required by law or for the protection
                of our legal rights
              </li>
            </ul>
          </article>
          <article>
            <h3 className="privacyPolicyheading font-medium text-2xl">
              Data Security
            </h3>
            <p className="PrivacypolicyP">
              We implement appropriate technical and organizational measures to
              safeguard your personal data from unauthorized access, misuse,
              disclosure, or destruction. However, no method of data
              transmission over the internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </article>
          <article>
            <h3 className="privacyPolicyheading font-medium text-2xl">
              International Data Transfers
            </h3>
            <p className="PrivacypolicyP">
              Your personal information may be transferred to, and processed in,
              countries outside of your residence, including India and the
              United Arab Emirates, where we and our partners operate. We ensure
              appropriate safeguards are in place to protect your information
              during such transfers.
            </p>
          </article>
          <article>
            <h3 className="privacyPolicyheading font-medium text-2xl">
              Your Rights
            </h3>
            <p className="PrivacypolicyP">
              Depending on your location, you may have the following rights:
            </p>
            <ul>
              <li className="PrivacypolicyList_element">
                1.Access to your personal data
              </li>
              <li className="PrivacypolicyList_element">
                2. Request correction or deletion of your data
              </li>
              <li className="PrivacypolicyList_element">
                3. Object to or restrict certain types of processing
              </li>
              <li className="PrivacypolicyList_element">
                4. Withdraw consent at any time
              </li>
              <li className="PrivacypolicyList_element">
                4. Lodge a complaint with a data protection authority
              </li>
            </ul>
            <p className="PrivacypolicyP">
              To exercise your rights, please contact us at: hr@mdglobalhr.com
            </p>
          </article>
          <article>
            <h3 className="privacyPolicyheading font-medium text-2xl">
              Cookies and Tracking Technologies{' '}
            </h3>
            <p className="PrivacypolicyP">
              Our website may use cookies and similar technologies to enhance
              your experience, analyze website usage, and personalize content.
              You can control cookie settings through your browser preferences.
            </p>
          </article>
          <article>
            <h3 className="privacyPolicyheading font-medium text-2xl">
              Third-Party Links
            </h3>
            <p className="PrivacypolicyP">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of these websites and
              encourage you to review their privacy policies before sharing any
              personal data.
            </p>
          </article>
          <article>
            <h3 className="privacyPolicyheading font-medium text-2xl">
              {' '}
              Children’s Privacy
            </h3>
            <p className="PrivacypolicyP">
              Our services are not directed to individuals under the age of 18.
              We do not knowingly collect personal data from children. If we
              become aware that a child has provided us with personal data, we
              will delete it immediately.
            </p>
          </article>
          <article>
            <h3 className="privacyPolicyheading font-medium text-2xl">
              {' '}
              Changes to This Policy
            </h3>
            <p className="PrivacypolicyP">
              We may update this Privacy Policy periodically. The latest version
              will always be available on our website with the updated
              "Effective Date." We encourage you to review it regularly to stay
              informed.
            </p>
          </article>
          <article>
            <h3 className="privacyPolicyheading font-medium text-2xl">
              {' '}
              Contact Us
            </h3>
            <p className="PrivacypolicyP">
              If you have any questions about this Privacy Policy or how your
              data is handled, please contact us at:
            </p>
          </article>
        </section>
        <section>
          <strong> MD Global Human Resource Consulting LLC</strong>
          <br />
          Email: sales@mdglobalhr.com
        </section>
      </main>
    </>
  );
}

export default PrivacyPolicyPage