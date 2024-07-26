import React, { useEffect } from "react";
import "./Text1.css";

const Text1 = () => {
  let interval = () => {};
  useEffect(() => {
    (function () {
      let words = document.querySelectorAll(".text-word");
      words.forEach((word) => {
        let letters = word.textContent.split("");
        word.textContent = "";

        letters.forEach((letter) => {
          let span = document.createElement("span");
          span.textContent = letter;
          span.className = "letter";
          word.append(span);
        });
      });

      let currentWordIndex = 0;
      let maxWordIndex = words.length - 1;
      words[currentWordIndex].style.opacity = "1";

      let changeText = () => {
        let currentWord = words[currentWordIndex];
        let nextWord =
          currentWordIndex === maxWordIndex
            ? words[0]
            : words[currentWordIndex + 1];

        Array.from(currentWord.children).forEach((letter, i) => {
          setTimeout(() => {
            letter.className = "letter out";
          }, i * 80);
        });

        nextWord.style.opacity = "1";
        Array.from(nextWord.children).forEach((letter, i) => {
          letter.className = "letter behind";

          setTimeout(() => {
            letter.className = "letter in";
          }, 340 + i * 80);
        });
        currentWordIndex =
          currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
      };

      interval = setInterval(() => {
        changeText();
      }, 2000);
    })();
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2 className="subheading">Text #1</h2>
      <div className="text1-container">
        <h1>Hi! I'm Rimon</h1>
        <div className="text-change-text">
          <h3>I'm </h3>
          <h3>
            <span className="text-word">Youtuber</span>
            <span className="text-word">Web&nbsp;Designer</span>
            <span className="text-word">Frontend&nbsp;Developer</span>
            <span className="text-word">Backend&nbsp;Developer</span>
            <span className="text-word">Graphic&nbsp;Designer</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Text1;
