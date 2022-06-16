import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-blog-slider',
  templateUrl: './blog-slider.component.html',
  styleUrls: ['./blog-slider.component.scss'],
})
export class BlogSliderComponent implements OnInit {
  config: SwiperOptions = {
    loop: true,
    pagination: {
      el: '.swiper-pagination', 
      clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 2000,
    autoplay: {
      delay:2000
    },
    centeredSlides: true,
    followFinger: true,
    lazy: {
      loadPrevNext: true,
    },
  }
  constructor() {}

  ngOnInit(): void {}
}
