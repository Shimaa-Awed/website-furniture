
//counter
const counterElements = document.querySelectorAll('.counter span');

counterElements.forEach((element, index) => {
  const target = [+300, +400, +500][index];
  let count = 0;

  const interval = setInterval(() => {
    element.textContent = count.toFixed(0);
    count += target / 100;

    if (count >= target) {
      element.textContent = target;
      clearInterval(interval);
    }
  }, 20);
});
// Select the element with the class "up" and store it in the variable spanEl
let spanEl = document.querySelector(".up");

// When the window is scrolled, execute the following function
window.onscroll = function () {

  this.scrollY >= 10

    ? spanEl.classList.add("show")

    : spanEl.classList.remove("show");
};

spanEl.onclick = function () {

  window.scrollTo({
    top: 0, // Scroll to the top of the page
    behavior: "smooth", // Smooth scrolling effect
  });
};

// accordon

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}