import React from "react";
import "./Header1.css";

const Header1 = () => {
  return (
    <>
      <h1 className="subheading">Header 1</h1>
      <header className="header1">
        <div className="header1_logo_container">
          <a href="/" className="header1_logo_link">
            <h3>Logo</h3>
          </a>
        </div>

        <ul className="header1_nav">
          <li>
            <a href="#" className="header1_nav_link">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="header1_nav_link">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="header1_nav_link">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="header1_nav_link">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="header1_nav_link">
              About
            </a>
          </li>
        </ul>

        <div className="header1_auth_buttons">
          <button type="button" className="btn btn-outline-primary">
            Login
          </button>
          <button type="button" className="btn btn-primary">
            Sign-up
          </button>
        </div>
      </header>
    </>
  );
};

export default Header1;
