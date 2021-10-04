import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { product } from 'src/app/seller/seller-dashboard/product.model';
import { category } from 'src/app/seller/add-product/product.model';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-sub-product-view1',
  templateUrl: './sub-product-view1.component.html',
  styleUrls: ['./sub-product-view1.component.css']
})
export class SubProductView1Component implements OnInit {

  res=new product()
  cat=new category

  constructor(private getd:DataserviceService, private pid:ServiceService) { }

  ngOnInit(): void {
    this.displayprod()
    this.displaycat()
  }

  prod:any
  cate:any

  displayprod(){
    this.getd.allprod().subscribe(res=>{
      console.log(res)
      this.prod=res
    })
  }

  displaycat(){
    this.getd.getdata().subscribe(cat=>{
    this.cate=cat;
    console.log(this.cat)
  //  this.dataSource = res;
 
    })
  }

  productview(id:any){
    console.log(id)
    this.pid.sent(id)
    localStorage.setItem('pid',id)
  
  }



}
