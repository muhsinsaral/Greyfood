import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-mainslider',
  templateUrl: './mainslider.component.html',
  styleUrls: ['./mainslider.component.scss']
})
export class MainsliderComponent implements OnInit {
  Arr = Array;
  num: number = 4;
  config: SwiperOptions = {
    
    loop: true,
    pagination: {
      el: '.swiper-pagination', 
      clickable: true,
    },
    slidesPerView: 1,
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
