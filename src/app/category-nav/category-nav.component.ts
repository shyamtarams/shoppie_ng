import { Component, OnInit } from '@angular/core';
import { category } from './category.model'
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-category-nav',
  templateUrl: './category-nav.component.html',
  styleUrls: ['./category-nav.component.css']
})
export class CategoryNavComponent implements OnInit {

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
}
