import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-side-nav',
  templateUrl: './seller-side-nav.component.html',
  styleUrls: ['./seller-side-nav.component.css']
})
export class SellerSideNavComponent implements OnInit {

  constructor() { }

  user:any
  ngOnInit(): void {
    this.user=localStorage.getItem('username')
  }

}
