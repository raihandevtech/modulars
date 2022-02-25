// SWIPER SLIDER

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 6000000000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    480: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    940: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },
});

// PROGRESS BAR

// const progress = document.querySelector(".progress");
// const loading = document.querySelector(".loading");

// const fakeUploadPercentage = [0, 10, 25, 40, 42, 60, 70, 75, 90, 100];
// let i = 0;

// const interval = setInterval(() => {
//   item.style[sad] = fakeUploadPercentage[i] + "%";
//   loading.innerHTML = fakeUploadPercentage[i] + "%";
//   i++;
//   console.log(i);
//   if (i == fakeUploadPercentage.length) {
//     clearInterval(interval);
//     loading.innerHTML = "Completed";
//   }
// }, 1000);
