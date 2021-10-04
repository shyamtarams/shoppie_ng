import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BuyerComponent } from '../buyer.component';
import { BuyerDashboardComponent } from '../buyer-dashboard/buyer-dashboard.component';
import { CartComponent } from '../cart/cart.component';
import { ProductView1Component } from '../product-view1/product-view1.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';



const routes: Routes=[
  { path: 'buyer', component: BuyerComponent,
  children:[
    {path:'',component: BuyerDashboardComponent,
    children:[
      {path:'dashboard',component: ProductView1Component},
      {path:'cart',component: CartComponent},
      {path:'product',component: ProductDetailsComponent},
        ]
    },
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
