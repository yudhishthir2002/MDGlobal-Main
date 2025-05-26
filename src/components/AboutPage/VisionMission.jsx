import React from "react";
import "./VisionMission.css";
import meetingImage from "./../../assets/meetingRoom.jpg"; 
import meetingImage2 from "./../../assets/ourMission.jpeg"; 

const VisionMission = () => {
  return (
    <>
      <section id="vision-section">
        <div className="vision-container">
          <div className="vision-image-wrapper">
            <img src={meetingImage} alt="Team Meeting" className="vision-image" />
          </div>
          <div className="vision-content">
            <h4 className="vision-subtitle">Our Vision</h4>
            <h2 className="vision-title">
              Empowering Businesses to Grow Through Strategic Talent Solutions
            </h2>
            <p className="vision-text">
              Since our inception in 2024, MD Global HR Consulting LLC has been
              committed to simplifying recruitment and maximizing business impact
              through people-centric hiring solutions. With a presence in both UAE
              and India, we specialize in delivering customized talent acquisition
              services — from executive leadership hiring to skilled blue- and
              white-collar staffing.
            </p>
            <p className="vision-text">
              Our strength lies in combining deep industry expertise with agile,
              client-focused strategies to deliver recruitment solutions that
              truly drive business performance. Through a blend of teamwork,
              modern methodologies, and a deep understanding of evolving workforce
              trends, we help our clients build high-performing teams.
            </p>
            <p className="vision-text">
              MD Global is driven by transparency, compliance, and a focus on
              long-term client success, offering flexible, responsive staffing
              solutions tailored to each organization’s needs.
            </p>
          </div>
        </div>
      </section>

      <section id="mission-section">
        <div className="mission-container">
          <div className="mission-content">
            <h4 className="mission-subtitle">Our Mission</h4>
            <h2 className="mission-title">
            Bridging Talent and Opportunity
            </h2>
            <p className="mission-text">
              At MD Global HR Consulting LLC, our mission is to empower businesses
              in the UAE and India by delivering top-tier talent that fuels
              innovation, accelerates growth, and strengthens organizational
              performance.
            </p>
            <p className="mission-text">
              We are committed to creating impactful and rewarding career
              opportunities for professionals — from skilled blue-collar workers to
              executive leaders — across diverse industries. By bridging the gap
              between the right talent and the right opportunities, we aim to
              build a future where companies thrive and careers flourish.
            </p>
            <p className="mission-text">
              With a people-first approach and a deep understanding of regional
              and global workforce dynamics, we strive to be the most trusted
              recruitment partner in the Middle East and Indian markets.
            </p>
          </div>
          <div className="mission-image-wrapper">
            <img src={meetingImage2} alt="Team Meeting" className="mission-image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionMission;