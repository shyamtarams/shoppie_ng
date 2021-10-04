import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

 

  constructor(private getd:DataserviceService) { }
  name:any
  sres:any
  user:any


  // sr:any
  ngOnInit(): void {
    this.user=localStorage.getItem('username')
    this.name = {
      sr:''
    }
  }

  search(){
    console.log(this.name.sr)
    this.getd.search({'sr':this.name.sr}).subscribe(data=>{
      console.log(data)
      this.sres=data
    });
  }


}
