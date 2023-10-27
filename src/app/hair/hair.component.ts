import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Datatype } from '../datatype';

@Component({
  selector: 'app-hair',
  templateUrl: './hair.component.html',
  styleUrls: ['./hair.component.less']
})
export class HairComponent implements OnInit {
  constructor(private _product: ProductService) { }

  hairData: undefined | Datatype[]
  ngOnInit(): void {
    this._product.hairProducts().subscribe((result) => {
      this.hairData = result
    })
  }
}
