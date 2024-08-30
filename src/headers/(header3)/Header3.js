import React, { useState } from "react";
import "./Header3.css";

const Header3 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMouseEnter = () => {
    setMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <h1 className="subheading">Header 3</h1>

      <header className="header3_container">
        <section
          className="header3"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="header3_title">
            <h1>Portfolio</h1>
            <button className="header3_menu_button">
              <div className="header3_menu_icon"></div>
            </button>
          </div>
        </section>

        <nav
          className={`header3_nav ${menuOpen ? "open" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
            <li>
              <a href="#">Experience</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header3;
