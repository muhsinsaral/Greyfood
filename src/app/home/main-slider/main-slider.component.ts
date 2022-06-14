import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';


@Component({
  selector: 'main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit {
  Arr = Array;
  num: number = 4;
  config: SwiperOptions = {
    loop: true,
    pagination: {
      el: '.swiper-pagination', 
      clickable: true,
    },
    
    spaceBetween: 20,
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
  constructor() { }

  ngOnInit(): void {
  }

}
