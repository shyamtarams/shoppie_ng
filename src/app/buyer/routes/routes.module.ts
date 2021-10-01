import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BuyerComponent } from '../buyer.component';
import { BuyerDashboardComponent } from '../buyer-dashboard/buyer-dashboard.component';
import { CartComponent } from '../cart/cart.component';


const routes: Routes=[
  { path: 'buyer', component: BuyerComponent,
  children:[
    {path:'dashboard',component: BuyerDashboardComponent},
    {path:'cart',component: CartComponent},
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule { }
