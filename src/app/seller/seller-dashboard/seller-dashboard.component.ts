import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service'; 
import {product} from './product.model'
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit {

  
  res=new product()
  constructor(private getd:DataserviceService,private sh:SellerService) { }
  message="hey"
  product_count=0
  product_selled=0
  product_returned=0
  product_active=0

  ngOnInit(): void {
    this.displaydata();
    // this.sh.sentmsg(this.message)
  }

  dataSource:any
  gdt:any;
  uid:any

  displaydata(){
    console.log(localStorage.getItem('username'))
    console.log(localStorage.getItem('user_id'))
    this.uid=localStorage.getItem('user_id')

    this.getd.getproductdata({'uid':this.uid}).subscribe(res=>{
    this.gdt=res;
    console.log(this.gdt)
    this.product_count=this.gdt.length
   this.dataSource = res;
 
    })
  }

  // pid:any
  proddata(pid:any){
    console.log(pid)
    this.sh.sentmsg(pid)
  }

delete(pid:any){
  console.log(pid)
  this.getd.delete(pid).subscribe(pid=>{
    console.log(pid)
    this.displaydata()
  });
}

}
