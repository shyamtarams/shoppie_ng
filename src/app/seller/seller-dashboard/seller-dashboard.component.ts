import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service'; 
import {product} from './product.model'

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit {

  
  res=new product()
  constructor(private getd:DataserviceService) { }

  ngOnInit(): void {
    this.displaydata();
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

}
