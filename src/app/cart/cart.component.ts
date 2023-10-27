import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Datatype } from '../datatype';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {

  constructor(private _product: ProductService, private cdr: ChangeDetectorRef, private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string) {
    position: 'top';
    this._snackBar.open(message, action, { verticalPosition: 'top', duration: 3000 });
  }
  cartData: undefined | Datatype[];
  totalPrice: Array<any> = [];
  quantityValue: number = 0;
  price = 0;

  ngOnInit(): void {
    this._product.getCartData().subscribe((result) => {
      this.cartData = result;
      this.cartData.forEach((res) => {
        this.totalPrice.push(res.price1 * res.quantity)
        this.price = this.totalPrice.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      })
    })
  }

  deleteProduct(id: number) {
    const val = confirm("Do you want to delete");
    if (val) {
      this._product.deleteProduct(id).subscribe((result) => {
        this.cartData = this.cartData?.filter(item => item.id !== id);
        this.openSnackBar("Product is deleted!", "OK")

        if (this.cartData) {
          this.totalPrice = this.cartData.map(item => item.price1 * item.quantity);
          this.price = this.totalPrice.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        }
        this.cdr.detectChanges();
      });
    }
  }

}
