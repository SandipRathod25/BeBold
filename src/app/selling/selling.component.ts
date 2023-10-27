import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Datatype } from '../datatype';

@Component({
  selector: 'app-selling',
  templateUrl: './selling.component.html',
  styleUrls: ['./selling.component.less']
})
export class SellingComponent implements OnInit {
  constructor(private _product: ProductService) { }

  sellData: undefined | Datatype[]

  ngOnInit(): void {
    this._product.hairProducts().subscribe((result) => {
      this.sellData = result
    })
  }
}
