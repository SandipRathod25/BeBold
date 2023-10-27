import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Datatype } from '../datatype';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.less']
})
export class TrendingComponent implements OnInit {
  constructor(private _product: ProductService) { }

  trendData: undefined | Datatype[]

  ngOnInit(): void {
    this._product.makeupProducts().subscribe((result) => {
      this.trendData = result
    })
  }
}
