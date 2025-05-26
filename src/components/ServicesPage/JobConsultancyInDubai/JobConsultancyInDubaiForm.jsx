import React from 'react';
import './JobConsultancyInDubaiForm.css';

const JobConsultancyInDubaiForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <section className="jcid-section">
      <h1 className="jcid-heading">
        Job Consultancy in Dubai: Unlock Lucrative Opportunities!
      </h1>

      <div className="jcid-container">
        
        <article className="jcid-content text-justify">
          <p>
            Finding a trusted job consultancy in Dubai used to be challenging, but not anymore. MD Global Human Resource Consultancy is here to meet your recruitment needs.
          </p>
          <p>
            Dubai, one of the seven emirates of the UAE, is a global city and business hub known for its modern architecture, luxury shopping, and vibrant nightlife. Beyond the glamour, it’s a top destination for job seekers worldwide.
          </p>
          <p>
            This is where job consultancies in Dubai play a crucial role.
          </p>
          <p>
            Dubai’s job market is dynamic and opportunity-rich, but navigating it requires expert guidance.
          </p>
          <p>
            At MD Global Human Resource Consulting LLC, we’re a leading recruitment agency in Dubai, dedicated to connecting job seekers and employers seamlessly.
          </p>
        </article>

        
        <div className="jcid-form-wrapper">
          <form className="jcid-form">
            <div className="jcid-form-group">
              <label className="jcid-label">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="jcid-input"
              />
            </div>

            <div className="jcid-form-group">
              <label className="jcid-label">Email Address</label>
              <input
                type="email"
                placeholder="Your Email"
                className="jcid-input"
              />
            </div>

            <div className="jcid-form-group">
              <label className="jcid-label">Phone</label>
              <input
                type="tel"
                placeholder="E.g., +1 300 400 5000"
                className="jcid-input"
              />
            </div>

            <div className="jcid-form-group">
              <label className="jcid-label">Upload File</label>
              <input
                type="file"
                className="jcid-input jcid-file-input"
              />
              <span className="jcid-file-info">PDF/Word, max 5MB</span>
            </div>

            <div className="jcid-form-group">
              <label className="jcid-label">Message</label>
              <textarea
                placeholder="Message"
                rows="4"
                className="jcid-input jcid-textarea"
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="jcid-submit-button"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JobConsultancyInDubaiForm;