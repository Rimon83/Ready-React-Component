import React from "react";
import "./Header4.css";

const Header4 = () => {
  return (
    <section className="header4_container">
      <section className="header4">
        <figure className="header4_figure_image">
          <img
            src="/images/header4/profile.jpg"
            alt="profile image"
            width="800"
            height="800"
          />
        </figure>
        <h1 className="header4_introduction">
          <span className="nowrap">Hello &#x1F44B;</span>
          <span className="nowrap">I'm Mary</span>
        </h1>
      </section>
    </section>
  );
};

export default Header4;
