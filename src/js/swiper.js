import Swiper from 'swiper';
import 'swiper/swiper.min.css';

const swiper = new Swiper('.music__wrapper', {
  // Optional parameters
  direction: 'vertical',
  loop: false,
});

const swiperMusic = new Swiper('.timer__wrapper', {
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 4,
  loop: false,
});
