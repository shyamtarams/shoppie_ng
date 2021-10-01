import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { TopnavComponent } from './topnav/topnav.component';
import { CategoryNavComponent } from './category-nav/category-nav.component';
import { OffersBarComponent } from './offers-bar/offers-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
// import { SellerNavComponent } from './seller/seller-nav/seller-nav.component';
// import { SellerSideNavComponent } from './seller/seller-side-nav/seller-side-nav.component';
import { SellerDashboardComponent } from './seller/seller-dashboard/seller-dashboard.component';
import { SellerModule } from './seller/seller.module';
import { AccountModule } from './account/account.module';
// import { ReactiveFormsModule } from '@angular/forms';
import { BuyerModule } from './buyer/buyer.module';

import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopnavComponent,
    CategoryNavComponent,
    OffersBarComponent,
    ProductListComponent,
    // SellerNavComponent,
    // SellerSideNavComponent,
    SellerDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SellerModule,
    // ReactiveFormsModule,
    SharedModule,
    AccountModule,
    BuyerModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
