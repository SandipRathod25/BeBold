import { Component } from '@angular/core';

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.less']
})
export class RelatedComponent {
  cards1 = [
    { img: "../../assets/shop5.jpg", price1: 570, price2: 250, name: "Bootle of glass" },
    { img: "../../assets/shop2.jpg", price1: 570, price2: 250, name: "Bootle of glass" },
    { img: "../../assets/shop7.jpg", price1: 570, price2: 250, name: "Bootle of glass" },
    { img: "../../assets/shop8.jpg", price1: 570, price2: 250, name: "Bootle of glass" }
  ]
}
