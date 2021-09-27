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

  ngOnInit(): void {
    this.displaydata();
    // this.sh.sentmsg(this.message)
  }

  dataSource:any
  gdt:any;

  displaydata(){
    this.getd.getproductdata().subscribe(res=>{
    this.gdt=res;
    console.log(this.gdt)
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
