import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Datatype } from '../datatype';

@Component({
  selector: 'app-makeup',
  templateUrl: './makeup.component.html',
  styleUrls: ['./makeup.component.less']
})
export class MakeupComponent implements OnInit {

  constructor(private _product: ProductService) { }

  makeupData: undefined | Datatype[]
  ngOnInit(): void {
    this._product.makeupProducts().subscribe((result) => {
      this.makeupData = result
    })
  }
}
