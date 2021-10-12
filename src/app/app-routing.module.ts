import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerDashboardComponent } from '../app/seller/seller-dashboard/seller-dashboard.component'
import { AddProductComponent } from '../app/seller/add-product/add-product.component'
import { ProductOrdersComponent } from './seller/product-orders/product-orders.component';
import { LoginComponent } from './account/login/login.component';
import { AccountComponent } from './account/account.component';
import { BuyerModule } from './buyer/buyer.module';
import { BuyerComponent } from './buyer/buyer.component';

const routes: Routes = [
  // { path: 'Dashboard', component: SellerDashboardComponent },
  // { path: 'Addproduct', component: AddProductComponent },
  // { path: 'Productorders', component:ProductOrdersComponent },
  // {path:'login', component:LoginComponent},
  {path:'', component:AccountComponent
  // children: [
  //   { path: 'buyer', loadChildren: './buyer/buyer.module#BuyerModule' },
    
  // ]
},
// {path:'buyer', component:BuyerComponent},
// { path: 'buyer', loadChildren: './buyer/BuyerModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

