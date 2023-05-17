const swiper = new Swiper('.slider', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 400,
  spaceBetween: 30,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: '.slider__pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
