import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
    { path: 'Dashboard', component: SellerDashboardComponent },
    { path: 'Addproduct', component: AddProductComponent },
    { path: 'Dashboard/updateproduct', component: UpdateProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class sellerRoutingModule { }
