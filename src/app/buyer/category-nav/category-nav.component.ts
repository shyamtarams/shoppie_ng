import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-category-nav',
  templateUrl: './category-nav.component.html',
  styleUrls: ['./category-nav.component.css']
})
export class CategoryNavComponent implements OnInit {

  constructor(private getd:DataserviceService) { }

  ngOnInit(): void {
    this.displaydata();
  }

  gdt:any

  displaydata(){
    this.getd.getdata().subscribe(res=>{
    this.gdt=res;
    console.log(this.gdt,"caategory")
  //  this.dataSource = res;
 
    })
  }

}
