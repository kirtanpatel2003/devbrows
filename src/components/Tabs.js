import React, { useState } from "react";
import "./Tabs.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="tabs-container">
      {/* Tab Headers */}
      <div className="tabs">
        <button 
          className={activeTab === "home" ? "home" : ""} 
          onClick={() => setActiveTab("home")}
        >
          Home
        </button>
        <button 
          className={activeTab === "about" ? "active" : ""} 
          onClick={() => setActiveTab("about")}
        >
          About Us
        </button>
        <button 
          className={activeTab === "pricing" ? "active" : ""} 
          onClick={() => setActiveTab("pricing")}
        >
          Pricing
        </button>
        <button 
          className={activeTab === "contact" ? "active" : ""} 
          onClick={() => setActiveTab("contact")}
        >
          Contact Form
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "Home" && (
          <div>
          </div>
        )}
        {activeTab === "about" && (
          <div>
            <h2>About Us</h2>
            <p>DevBrows creates stunning, high-performance websites tailored for businesses of all sizes.</p>
          </div>
        )}
        {activeTab === "pricing" && (
          <div>
            <h2>Pricing</h2>
            <p>We offer competitive pricing with flexible plans to suit your needs.</p>
            <ul>
              <li>Basic Plan - $99</li>
              <li>Premium Plan - $199</li>
              <li>Enterprise Plan - $299</li>
            </ul>
          </div>
        )}
        {activeTab === "contact" && (
          <div>
            <h2>Contact Us</h2>
            <form>
              <label>Name:</label>
              <input type="text" placeholder="Your Name" required />
              <label>Email:</label>
              <input type="email" placeholder="Your Email" required />
              <label>Message:</label>
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
