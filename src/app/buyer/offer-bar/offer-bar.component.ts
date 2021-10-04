import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';


@Component({
  selector: 'app-offer-bar',
  templateUrl: './offer-bar.component.html',
  styleUrls: ['./offer-bar.component.css']
})
export class OfferBarComponent implements OnInit {

  constructor(private getd:DataserviceService) { }

  ngOnInit(): void {
    this.displaydata();
  }

  gdt:any;

  displaydata(){
    this.getd.getoffer().subscribe(res=>{
    this.gdt=res;
    console.log(this.gdt)
  //  this.dataSource = res;
 
    })
  }

}
