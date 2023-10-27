import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Datatype } from '../datatype';

@Component({
  selector: 'app-skin',
  templateUrl: './skin.component.html',
  styleUrls: ['./skin.component.less']
})
export class SkinComponent implements OnInit {
  constructor(private _product: ProductService) { }

  products: any[] = [];
  page = 1;
  perPage = 8;


  ngOnInit(): void {
    this.loadProducts()
  }
  loadProducts() {
    this._product.skinProducts(this.page, this.perPage)
      .subscribe((data: any) => {
        this.products = data;
        this.page++;
      });
  }
  lessProducts() {
    this._product.skinProducts(this.page, this.perPage)
      .subscribe((data: any) => {
        this.products = data;
        this.page--;
      });
  }
}
