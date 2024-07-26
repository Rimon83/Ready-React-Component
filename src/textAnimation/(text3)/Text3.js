import React, { useEffect } from 'react'
import "./Text3.css"

const Text3 = () => {
  let interval = () => {};
  useEffect(() => {
    (function () {
      let words = document.querySelectorAll(".text_word");
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
            letter.className = "letter_out";
          }, i * 80);
        });

        nextWord.style.opacity = "1";
        Array.from(nextWord.children).forEach((letter, i) => {
          letter.className = "letter_behind";
          setTimeout(() => {
            letter.className = "letter_in";
          }, 340 + i * 80);
        });

        currentWordIndex =
          currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
      };

      interval = setInterval(() => {
        changeText();
      }, 3000);
    })();
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h2 className="subheading">Text #3</h2>
      <div className="text_container">
        <h1>Hi! I am Rimon</h1>
        <div className="text_change">
          <h3>I am</h3>
          <h3>
            <span className="text_word">Youtuber</span>
            <span className="text_word">Frontend&nbsp;Web developer</span>
            <span className="text_word">Backend&nbsp;Web developer</span>
            <span className="text_word">Web&nbsp;designer</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Text3