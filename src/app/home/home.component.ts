import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mobile:boolean = false
  constructor() {
    if(window.innerWidth <= 991) this.mobile = true
   }

  ngOnInit(): void {
    window.onresize = () => this.mobile = window.innerWidth <= 991;
    
  }

}
