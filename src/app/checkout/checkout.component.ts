import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Datatype } from '../datatype';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.less']
})
export class CheckoutComponent {
  constructor(private _product: ProductService) { }
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
  isPopupVisible = false;

  showPopup() {
    this.isPopupVisible = true;
    setTimeout(() => {
      this.closePopup();
    }, 5000); // 5000 milliseconds (5 seconds)
  }

  closePopup() {
    this.isPopupVisible = false;
  }
}
