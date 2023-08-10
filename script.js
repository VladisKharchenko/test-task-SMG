document.addEventListener("DOMContentLoaded", function() {
  const loadingIcon = document.querySelector(".loading-icon");
  const textContainer = document.querySelector(".text-container");
  const textLines = textContainer.querySelectorAll("p");
  const finalMessage = document.querySelector(".final-message");

  setTimeout(() => {
      loadingIcon.style.display = "none";
      textContainer.style.display = "block";
      animateText(textLines, 0);
  }, 2000);

  function animateText(elements, index) {
      if (index < elements.length) {
          setTimeout(() => {
              elements[index].classList.remove("hidden");
              animateText(elements, index + 1);
          }, getRandomDelay());
      } else {
          setTimeout(() => {
              textContainer.style.display = "none";
              finalMessage.style.display = "block";
          }, 1000);
      }
  }

  function getRandomDelay() {
      return Math.floor(Math.random() * 2000) + 1000;
  }
});