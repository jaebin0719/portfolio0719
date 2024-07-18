window.onload = function () {
  var swiper = new Swiper(".portSwiper", {
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  const buttons = document.querySelectorAll(".menu-btn");
  const images = document.querySelectorAll(".menu-btn img, .main-img img");

  buttons.forEach(button => {
      button.addEventListener("click", function(event) {
          event.preventDefault();
          const targetId = button.getAttribute("data-target");

          images.forEach(img => {
              if (img.id === targetId) {
                  img.classList.add("active-img");
                  img.classList.remove("hide-img");
              } else {
                  img.classList.add("hide-img");
                  img.classList.remove("active-img");
              }
          });

          buttons.forEach(btn => {
              btn.querySelector('a').classList.remove("active");
          });
          button.querySelector('a').classList.add("active");
      });
  });
}