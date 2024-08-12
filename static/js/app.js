var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  InitialSlide: 2,
  speed : 600,
  preventClicks: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 350,
    modifier: 1,
    slideShadows: true
  },
  autoplay: {
    delay: 3000,
  },
  on: {
    click(event){
      swiper.slideTo(this.clickedIndex);
    },
  },
});