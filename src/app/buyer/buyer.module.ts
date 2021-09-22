import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerComponent } from './buyer.component';
import { BuyerDashboardComponent } from './buyer-dashboard/buyer-dashboard.component';



@NgModule({
  declarations: [
    BuyerComponent,
    BuyerDashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BuyerModule { }
