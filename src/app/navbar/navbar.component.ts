import { Component, Input, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../services/product.service';
import { Datatype } from '../datatype';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
})
export class NavbarComponent implements OnInit {
  constructor(public dialog: MatDialog, private _product: ProductService) { }

  cartData: undefined | Datatype[];
  totalPrice: Array<any> = [];

  price: undefined | number = 0;
  productCount: undefined | number = 0;

  @Input() receivedData: undefined | number;

  ngOnInit(): void {
    this._product.getCartData().subscribe((result) => {
      this.cartData = result;
      this.productCount = this.cartData.length;
      this.totalPrice = this.cartData.map(res => res.price1 * res.quantity);
      this.price = this.totalPrice.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    });
  }

  // 
  menuBar: boolean = true;

  toggleMenubar() {
    this.menuBar = !this.menuBar
  }


  dialogRef: any;
  openDialog() {
    this.dialogRef = this.dialog.open(DialogComponent,
      {
        height: '100vh',
        width: '350px',
        position: { right: '0', top: '0' }
      });
  }
}
