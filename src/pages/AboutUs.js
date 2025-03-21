import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About DevBrows</h1>
      <p>
        DevBrows is a company started by passionate developers who want to 
        create custom websites for small businesses and local markets.
        We focus on bringing unique, tailored solutions that help businesses
        stand out online.
      </p>
      <h2>Our Mission</h2>
      <p>
        To empower businesses by providing **affordable, high-quality**, and **custom-designed websites** 
        that reflect their unique identity and needs.
      </p>
      <h2>Why Choose Us?</h2>
      <ul>
        <li>🚀 **Custom-built websites** - Tailored to your brand</li>
        <li>🎨 **Modern & Responsive Designs**</li>
        <li>🔒 **Secure & Optimized for Performance**</li>
        <li>📞 **Friendly Support & Easy Maintenance**</li>
      </ul>
    </div>
  );
};

export default AboutUs;
