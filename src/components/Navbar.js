
import React, { useState } from "react";
import "./Navbar.css"; // Ensure you have styles for positioning
import logo from "../logo.svg"; // Replace with your logo if needed

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <nav className="navbar">
      {/* Logo or Brand Name */}
      <div className="logo">DevBrows</div>

      {/* Tabs inside Navbar */}
      <div className="nav-tabs">
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
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
