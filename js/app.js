/* ======= Header===== */

var elements = document.querySelectorAll(
  "header > #header_wrapper > nav > ul > li > a"
);
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");

    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}
  /* ======= Header===== */

    /* ======= My Cart===== */
    function increaseValue() {
      var value = parseInt(document.getElementById('number').value, 10);
      value = isNaN(value) ? 0 : value;
      value++;
      document.getElementById('number').value = value;
    }
    
    function decreaseValue() {
      var value = parseInt(document.getElementById('number').value, 10);
      value = isNaN(value) ? 0 : value;
      value < 1 ? value = 1 : '';
      value--;
      document.getElementById('number').value = value;
    }
     /* ======= My Cart===== */