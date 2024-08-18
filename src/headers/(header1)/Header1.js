import React from "react";
import "./Header1.css";

const Header1 = () => {
  return (
    <>
      <h1 className="subheading">Header 1</h1>
      <header className="header">
        <div className="logo-container">
          <a href="/" className="logo-link">
            <h3>Logo</h3>
          </a>
        </div>

        <ul className="nav">
          <li>
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              About
            </a>
          </li>
        </ul>

        <div className="auth-buttons">
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
