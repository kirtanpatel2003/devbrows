import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h1>Pricing Plans</h1>
      <div className="pricing-grid">
        <div className="plan">
          <h2>Basic</h2>
          <p>$199 / Website</p>
          <ul>
            <li>✔️ Custom Landing Page</li>
            <li>✔️ Mobile Responsive</li>
            <li>❌ No eCommerce</li>
          </ul>
        </div>
        <div className="plan popular">
          <h2>Standard</h2>
          <p>$399 / Website</p>
          <ul>
            <li>✔️ 5 Pages Website</li>
            <li>✔️ SEO Optimization</li>
            <li>✔️ Blog & Contact Form</li>
          </ul>
        </div>
        <div className="plan">
          <h2>Premium</h2>
          <p>$699 / Website</p>
          <ul>
            <li>✔️ Unlimited Pages</li>
            <li>✔️ eCommerce + Payment System</li>
            <li>✔️ Ongoing Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
