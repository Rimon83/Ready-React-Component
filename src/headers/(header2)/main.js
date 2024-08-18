
import $ from "jquery"
const interactive = () => {
  $(document).ready(function () {
    createWords();
    createBubble();
  });

  // display array words dynamically
  function createWords() {
    let words = ["freelancer", "front-end developer", "back-end developer"];
    var i = 0;
    setInterval(function () {
      $("#animate").fadeOut(function () {
        $(this).html(words[i]).fadeIn();
        i = (i + 1) % words.length;
      });
    }, 4000);
  }

  // create bubble span
  function createBubble() {
    const divWidth = $("#header").width() - 150;
    setInterval(function () {
      const randomPosition = Math.floor(Math.random() * divWidth);
      const randomSpeed = Math.floor(Math.random() * 80000 + 60000);
      const randomWidth = Math.floor(Math.random() * 100 + 40);

      const bubble = document.createElement("span");
      bubble.classList.add("bubble")
      bubble.style.right = randomPosition + "px";

      bubble.style.animationDuration = randomSpeed + "ms";
      bubble.style.width = randomWidth + "px";
      bubble.style.height = randomWidth + "px";

      $("#header").append(bubble);
    }, 10000);
  }
}

export default interactive