import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-brandslider',
  templateUrl: './brandslider.component.html',
  styleUrls: ['./brandslider.component.scss'],
})
export class BrandsliderComponent implements OnInit {
  brands = [
    { imgUrl: '/assets/markalar/hanuta.png' },
    { imgUrl: '/assets/markalar/ferrero.png' },
    { imgUrl: '/assets/markalar/caprisun.png' },
    { imgUrl: '/assets/markalar/ferrero-1.png' },
    { imgUrl: '/assets/markalar/giotto.png' },
    { imgUrl: '/assets/markalar/redbull.png' },
    { imgUrl: '/assets/markalar/kinder.png' },
    { imgUrl: '/assets/markalar/duplo.png' },
    { imgUrl: '/assets/markalar/loacker.png' },
  ];
  configBrand: SwiperOptions = {
    width: window.outerWidth,
    breakpointsBase: 'window',
    loop: true,
    slidesPerView: 10,
    centeredSlides: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      hideOnClick: true,
    },
    spaceBetween: 30,
    speed: 2000,
    autoplay: {
      delay: 2000,
    },

    followFinger: true,
    lazy: {
      loadPrevNext: true,
    },
  };
  constructor() {}

  ngOnInit(): void {}
}
