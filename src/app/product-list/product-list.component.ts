import { Component, OnInit } from '@angular/core';
import { category } from '../category-nav/category.model'
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  res=new category()
  constructor(private getd:DataserviceService) { }

  ngOnInit(): void {
    this.displaydata();
  }

  
  dataSource:any
  gdt:any;

  displaydata(){
    this.getd.getdata().subscribe(res=>{
    this.gdt=res;
    console.log(this.gdt)
   this.dataSource = res;
 
    })
  }
  
  // addproduct(){
  //   this.getd.createproduct(this.res).subscribe(result=>{
  //     console.log(result)
  //   })
  // }

}
