import React, { useState } from "react";
import "./OurUniqueness.css";

// Fallback SVG for images
const fallbackSVG = (
  <svg
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
      fill="#1571fa"
    />
  </svg>
);

const OurUniqueness = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  // Replacing only the uniqueness array for brevity
const uniqueness = [
  {
    heading: "Dual Presence",
    imageURL: "",
    description:
      "With operational bases in Dubai, UAE, and India, we offer seamless local and cross-border recruitment services, helping you access a wider and more diverse talent pool.",
    svg: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="#1571fa" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 3H3v18h18V3zM5 5h14v6H5V5zm0 8h6v6H5v-6zm8 0h6v6h-6v-6z" />
      </svg>
    ),
  },
  {
    heading: "Industry-Focused Expertise",
    imageURL: "",
    description:
      "Our recruiters bring deep knowledge of industry-specific hiring practices, job market trends, and regulatory environments.",
    svg: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="#1571fa" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 13h2v-2H3v2zm4 0h2v-6H7v6zm4 0h2V7h-2v6zm4 0h2v-3h-2v3zm4 0h2V9h-2v4zM3 17h18v2H3v-2z" />
      </svg>
    ),
  },
  {
    heading: "Speed & Precision",
    imageURL: "",
    description:
      "We combine agile recruitment methods with data-driven processes to deliver quality candidates within your timelines.",
    svg: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="#1571fa" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 2v4h2V2h-2zm7.07 2.93l-2.83 2.83 1.42 1.41 2.83-2.82-1.42-1.42zM20 11h-4v2h4v-2zm-8 3a3 3 0 100-6 3 3 0 000 6zm-6.49-1.95l-2.82 2.83 1.41 1.41 2.83-2.82-1.42-1.42zM4 11H2v2h2v-2zm1.93-7.07L4.51 5.34l2.83 2.83 1.41-1.42L5.93 3.93z" />
      </svg>
    ),
  },
  {
    heading: "Consultative Approach",
    imageURL: "",
    description:
      "We partner with clients as advisors, not just vendors — offering insights, benchmarking, and hiring strategy support.",
    svg: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="#1571fa" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a10 10 0 00-7 17.32V22l3.68-1.84A10 10 0 1012 2z" />
      </svg>
    ),
  },
  {
    heading: "End-to-End Solutions",
    imageURL: "",
    description:
      "From sourcing and screening to onboarding and beyond, we manage the entire recruitment lifecycle, ensuring a smooth and hassle-free experience for both clients and candidates.",
    svg: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="#1571fa" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3H5c-1.1 0-2 .9-2 2v14l4-4h9c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM19 7v10h2V7h-2z" />
      </svg>
    ),
  },
  {
    heading: "Compliance & Integrity",
    imageURL: "",
    description:
      "We follow ethical recruitment practices and stay aligned with regional labor laws, ensuring full legal and reputational compliance.",
    svg: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="#1571fa" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L1 9l11 7 9-5.61V17h2V9L12 2zm0 11.79L4.21 9 12 4.21 19.79 9 12 13.79z" />
      </svg>
    ),
  },
];


  return (
    <section className="md-global-uniqueness">
  <div className="glass-card-container">
    <div className="main-container">
      <h1 className="main-title">Why Choose Us?</h1>
      <div className="card-grid">
        {uniqueness.map((item, index) => (
          <div
            key={index}
            className="feature-card"
            onClick={() =>
              setExpandedCard(expandedCard === index ? null : index)
            }
          >
            <div className="icon-container">
              {item.svg ? (
                item.svg
              ) : (
                <img
                  src={item.imageURL || fallbackImage}
                  alt={item.heading}
                  className="feature-icon"
                  onError={(e) => {
                    e.target.src = fallbackImage;
                  }}
                />
              )}
            </div>
            <h2 className="feature-title">{item.heading}</h2>
            <p className="feature-text">
              {expandedCard === index ? item.details : item.description}
            </p>
            {expandedCard === index && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setExpandedCard(null);
                }}
                className="dismiss-btn"
              >
                Close
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  );
};

export default OurUniqueness;
