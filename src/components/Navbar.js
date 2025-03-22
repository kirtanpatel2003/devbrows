import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo or Brand Name */}
      <div className="logo">DevBrows</div>

      {/* Tabs inside Navbar */}
      <div className="nav-tabs">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
          About Us
        </NavLink>
        <NavLink to="/pricing" className={({ isActive }) => isActive ? "active" : ""}>
          Pricing
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
