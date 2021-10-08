import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { ServiceService } from '../services/service.service';
import { product } from 'src/app/seller/seller-dashboard/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  res = new product()

  constructor(private getd:DataserviceService, private ss:ServiceService) { }

  ngOnInit(): void {
    this.cartproduct()
    
  }

  uid:any
  cprod:any
  cartproduct(){
    this.uid=localStorage.getItem('user_id')
    this.ss.getcartproduct({'uid':this.uid}).subscribe(res=>{
      console.log(res)
      this.cprod=res
    })
  }
  

}
