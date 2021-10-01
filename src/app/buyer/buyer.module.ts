import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerComponent } from './buyer.component';
import { BuyerDashboardComponent } from './buyer-dashboard/buyer-dashboard.component';
import { RoutesModule } from './routes/routes.module';
import { OfferBarComponent } from './offer-bar/offer-bar.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    BuyerComponent,
    BuyerDashboardComponent,
    OfferBarComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    RoutesModule,
  ]
})
export class BuyerModule { }
