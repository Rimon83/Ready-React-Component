import React from "react";

// need to install npm i typewriter-effect
import Typewriter from "typewriter-effect";
import "./Text2.css";

const Text2 = () => {
  return (
    <div className="text2_container">
      <h2 className="subheading">Text #2</h2>
      <div className="header-info ">
        <h1>Hi! I'm Rimon</h1>
        <div className="change-text">
          <h3>
            I am
            <span className="text">
              <Typewriter
                options={{
                  strings: [
                    "Frontend web developer",
                    "Backend web developer",
                    "Web designer",
                    "Freelancer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                }}
              />
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Text2;
