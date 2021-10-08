import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerComponent } from './buyer.component';
import { BuyerDashboardComponent } from './buyer-dashboard/buyer-dashboard.component';
import { RoutesModule } from './routes/routes.module';
import { OfferBarComponent } from './offer-bar/offer-bar.component';
import { CartComponent } from './cart/cart.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SharedModule } from '../shared/shared.module';
import { ProductView1Component } from './product-view1/product-view1.component';
import { CategoryNavComponent } from './category-nav/category-nav.component';
import { SubProductView1Component } from './sub-product-view1/sub-product-view1.component';
import { BrandsComponent } from './brands/brands.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { Offer1Component } from './offers/offer1/offer1.component';
import { BuyerProfileComponent } from './buyer-profile/buyer-profile.component';



@NgModule({
  declarations: [
    BuyerComponent,
    BuyerDashboardComponent,
    OfferBarComponent,
    CartComponent,
    TopNavComponent,
    ProductView1Component,
    CategoryNavComponent,
    SubProductView1Component,
    BrandsComponent,
    ProductDetailsComponent,
    Offer1Component,
    BuyerProfileComponent
  ],
  imports: [
    CommonModule,
    RoutesModule,
    SharedModule,
  ]
})
export class BuyerModule { }
