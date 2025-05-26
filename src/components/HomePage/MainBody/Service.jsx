import React from 'react'
import "./service.css";
const Service = () => {
  return (
    <>
    
     <div className="container">
      <div className="card">
        <button className="button">For Employers</button>
        <h2>Find Top Talent for Your Company Today</h2>
        <p id='service-para'>Build High Performance Teams & Gain a Competitive Advantage <span>→</span></p>
        {/* <p className="small-text">See How We Can Help You Get Hired! <span className="link">»</span></p> */}
      </div>
      <div className="card">
        <button className="button">For Job Seeker</button>
          <h2>Upskill Your Team with Tailored Corporate Training Programs</h2>
          
        <p id='service-para'>Enhance Your Employees' Skills & Increase Their Productivity <span>→</span></p>
      </div>
    </div>
    
    </>
  )
}

export default Service;