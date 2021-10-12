import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {

  constructor() { }

  key:any
  ngOnInit(): void {
    this.key=localStorage.getItem('user_id')
    console.log(this.key=="null")
    if(this.key==null){
      location.href="/account/login";
    }
  }

}
