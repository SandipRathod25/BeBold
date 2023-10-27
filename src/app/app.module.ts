import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroComponent } from './hero/hero.component';
import { SlideComponent } from './slide/slide.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TrendingComponent } from './trending/trending.component';
import { SellingComponent } from './selling/selling.component';
import { NewCollectionComponent } from './new-collection/new-collection.component';
import { ReviewComponent } from './review/review.component';
import { AwesomeComponent } from './awesome/awesome.component';
import { ProviderComponent } from './provider/provider.component';
import { FooterComponent } from './footer/footer.component';
import { ShopComponent } from './shop/shop.component';
import { MakeupComponent } from './makeup/makeup.component';
import { SkinComponent } from './skin/skin.component';
import { HairComponent } from './hair/hair.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RelatedComponent } from './related/related.component';
import { HttpClientModule } from '@angular/common/http'
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    SlideComponent,
    TrendingComponent,
    SellingComponent,
    NewCollectionComponent,
    ReviewComponent,
    AwesomeComponent,
    ProviderComponent,
    FooterComponent,
    ShopComponent,
    MakeupComponent,
    SkinComponent,
    HairComponent,
    AboutComponent,
    ContactComponent,
    CartComponent,
    DialogComponent,
    CheckoutComponent,
    ProductDetailsComponent,
    RelatedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatDialogModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
