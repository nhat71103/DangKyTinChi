import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            We are a team dedicated to creating interactive and engaging
            web designs.
          </p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: contact@example.com</p>
          <p>Phone: +123 456 789</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/congtydaksystem" className="icon facebook"><FaFacebookF size={20} /></a>
            <a href="#twitter" className="icon twitter"><FaTwitter size={20} /></a>
            <a href="#instagram" className="icon instagram"><FaInstagram size={20} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
