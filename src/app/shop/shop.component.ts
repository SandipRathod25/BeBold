import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Datatype } from '../datatype';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.less']
})
export class ShopComponent implements OnInit {
  constructor(private _product: ProductService) { }

  products: any[] = [];
  page = 1;
  perPage = 8;


  ngOnInit(): void {
    this.loadProducts()
  }
  loadProducts() {
    this._product.shopProducts(this.page, this.perPage)
      .subscribe((data: any) => {
        this.products = data;
        this.page++;
      });
  }
  lessProducts() {
    this._product.shopProducts(this.page, this.perPage)
      .subscribe((data: any) => {
        this.products = data;
        this.page--;
      });
  }
}
