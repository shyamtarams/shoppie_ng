import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { SellerNavComponent } from './seller-nav/seller-nav.component';
import { SellerSideNavComponent } from './seller-side-nav/seller-side-nav.component';
// import { ListProductComponent } from './list-product/list-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductOrdersComponent } from './product-orders/product-orders.component';
import { sellerRoutingModule } from './seller-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UpdateProductComponent } from './update-product/update-product.component';



@NgModule({
  declarations: [
    // ListProductComponent,  
    AddProductComponent,
    UpdateProductComponent,
  ],
  imports: [
    CommonModule,
    // FormsModule,
    // ReactiveFormsModule,
    sellerRoutingModule,
    SharedModule
  ],
  entryComponents:[
    SellerNavComponent,
    SellerSideNavComponent,
    SellerDashboardComponent,
    // AddProductComponent,
    ProductOrdersComponent,
  ],
})

export class SellerModule { }
