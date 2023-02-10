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
  (function() {
    const heart = document.getElementById('heart');
    heart.addEventListener('click', function() {
      heart.classList.toggle('black');
    });
  })();

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

    /*==============swiper js*==============*/
    var swiper = new Swiper(".slide_container", {
      slidesPerView: 1,
      spaceBetween: 30,//
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        1024: {
          slidesPerView: 5,
          spaceBetween: 30,

        },
       
      },
    });