import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from '../add-product/add-product.component';
import { SellerDashboardComponent } from '../seller-dashboard/seller-dashboard.component';
import { UpdateProductComponent } from '../update-product/update-product.component';
import { SellerComponent } from '../seller.component';
import { ProductOrdersComponent } from '../product-orders/product-orders.component';

const routes: Routes = [
    { path:'seller', component:SellerComponent,
    children:[
      { path: 'Dashboard', component: SellerDashboardComponent},
      { path: 'Addproduct', component: AddProductComponent },
      { path: 'orders', component: ProductOrdersComponent },
      { path: 'updateproduct', component: UpdateProductComponent },
    ]
  },
    
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule { }


// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AddProductComponent } from './add-product/add-product.component';
// import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
// import { UpdateProductComponent } from './update-product/update-product.component';
// import { SellerComponent } from './seller.component';
// import { ProductOrdersComponent } from './product-orders/product-orders.component';

// const routes: Routes = [
//     { path:'seller', component:SellerComponent,
//     children:[
//       { path: 'Dashboard', component: SellerDashboardComponent},
//       { path: 'Addproduct', component: AddProductComponent },
//       { path: 'orders', component: ProductOrdersComponent },
//       { path: 'updateproduct', component: UpdateProductComponent },
//     ]
//   },
    
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })


// export class sellerRoutingModule { }
