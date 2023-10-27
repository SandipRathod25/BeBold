import { Component } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.less']
})
export class SlideComponent {
  constructor() { }
  slides = [
    { img: "../../assets/logo1.png" },
    { img: "../../assets/logo2.png" },
    { img: "../../assets/logo3.png" },
    { img: "../../assets/logo4.png" },
    { img: "../../assets/logo5.png" },
    { img: "../../assets/logo6.png" },
  ];
}
