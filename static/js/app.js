var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 1,
  speed : 600,
  preventClicks: true,
  slidesPerView: 1.5,
  loop: true,
  spaceBetween: 0,
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 500,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 3000,
  },
});