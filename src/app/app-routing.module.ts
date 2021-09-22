import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerDashboardComponent } from '../app/seller/seller-dashboard/seller-dashboard.component'
import { AddProductComponent } from '../app/seller/add-product/add-product.component'
import { ProductOrdersComponent } from './seller/product-orders/product-orders.component';

const routes: Routes = [
  { path: 'Dashboard', component: SellerDashboardComponent },
  // { path: 'Addproduct', component: AddProductComponent },
  { path: 'Productorders', component:ProductOrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
