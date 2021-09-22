import { Component, OnInit } from '@angular/core';
import { offer } from './offers-bar.model'
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-offers-bar',
  templateUrl: './offers-bar.component.html',
  styleUrls: ['./offers-bar.component.css']
})
export class OffersBarComponent implements OnInit {
  res=new offer()
  constructor(private getd:DataserviceService) { }

  ngOnInit(): void {
    this.displaydata();
  }

  dataSource:any
  gdt:any;

  displaydata(){
    this.getd.getoffer().subscribe(res=>{
    this.gdt=res;
    console.log(this.gdt)
   this.dataSource = res;
 
    })
  }

}
