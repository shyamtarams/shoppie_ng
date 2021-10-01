import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-nav',
  templateUrl: './seller-nav.component.html',
  styleUrls: ['./seller-nav.component.css']
})
export class SellerNavComponent implements OnInit {

  constructor() { }

  user:any
  ngOnInit(): void {
    this.user=localStorage.getItem('username')
  }

  logout(){
    console.log(this.user)
    localStorage.clear();
    console.log(this.user)

  }

}
