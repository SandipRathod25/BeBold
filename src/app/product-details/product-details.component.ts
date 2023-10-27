import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Datatype } from '../datatype';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit {
  constructor(private _activatedRouter: ActivatedRoute, private _product: ProductService, private _snackBar: MatSnackBar) {
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { verticalPosition: 'top', duration: 3000 });
  }

  productData: undefined | Datatype;
  productQuantity: number = 1;
  cartData: undefined | Datatype[];

  ngOnInit(): void {
    let productId = this._activatedRouter.snapshot.paramMap.get('ProductId');
    productId && this._product.getProduct(productId).subscribe((result) => {
      this.productData = result;
    })
  }

  handleQuantity(value: string) {
    if (this.productQuantity <= 10 && value == 'max') {
      this.productQuantity += 1;
    }
    else if (this.productQuantity > 1 && value == 'min') {
      this.productQuantity -= 1;
    }
  }

  addToCart() {
    if (this.productData) {
      this.productData.quantity = this.productQuantity;
      this._product.postCartData(this.productData).subscribe((result) => {
        this.openSnackBar("Product is added to cart", "OK")
      })
    }
  }
}
