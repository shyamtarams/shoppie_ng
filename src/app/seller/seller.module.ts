import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { SellerNavComponent } from './seller-nav/seller-nav.component';
import { SellerSideNavComponent } from './seller-side-nav/seller-side-nav.component';
import { ListProductComponent } from './list-product/list-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductOrdersComponent } from './product-orders/product-orders.component';
import { sellerRoutingModule } from './sellerrouting.module';



@NgModule({
  declarations: [
    // ListProductComponent,  
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    sellerRoutingModule
  ],
  entryComponents:[
    SellerNavComponent,
    SellerSideNavComponent,
    SellerDashboardComponent,
    AddProductComponent,
    ProductOrdersComponent,
  ],
})

export class SellerModule { }
