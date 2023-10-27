import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { HeroComponent } from './hero/hero.component';
import { MakeupComponent } from './makeup/makeup.component';
import { SkinComponent } from './skin/skin.component';
import { HairComponent } from './hair/hair.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: 'shop', component: ShopComponent, title: "Shop - Be Bold" },
  { path: 'makeup', component: MakeupComponent, title: "Makeup Archives - Be Bold" },
  { path: 'skin', component: SkinComponent, title: "Skin Care Archives - Be Bold" },
  { path: 'hair', component: HairComponent, title: "Hair Care Archives - Be Bold" },
  { path: 'about', component: AboutComponent, title: "About - Be Bold" },
  { path: 'contact', component: ContactComponent, title: "Contact - Be Bold" },
  { path: 'cart', component: CartComponent, title: "Cart - Be Bold" },
  { path: 'checkout', component: CheckoutComponent, title: "Checkout - Be Bold" },
  { path: 'details/:ProductId', component: ProductDetailsComponent, title: "Product_details - Be Bold" },
  { path: '', component: HeroComponent, title: "Home - Be Bold" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
