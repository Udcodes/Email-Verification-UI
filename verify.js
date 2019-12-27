const numbers = document.querySelectorAll(".num");
numbers[0].focus();

numbers.forEach((number, idx) => {
  number.addEventListener("keydown", e => {
    if (e.key >= 0 && e.key <= 9) {
      setTimeout(() => {
        numbers[idx + 1].focus();
      }, 10);
    } else if (e.key === "Backspace") {
      setTimeout(() => {
        numbers[idx - 1].focus();
      }, 10);
    }
  });
});

// Social Panel

const floatingBtn = document.querySelector(".floating-btn");
const closeBtn = document.querySelector(".close-btn");
const socialPanelContainer = document.querySelector(".social-panel-container");

floatingBtn.addEventListener("click", () => {
  socialPanelContainer.classList.toggle("visible");
});
closeBtn.addEventListener("click", () => {
  closeBtn.classList.remove("visible");
});
