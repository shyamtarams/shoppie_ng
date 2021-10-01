import { Component, OnInit } from '@angular/core';
// import {FormControl, Validators,  FormGroup} from '@angular/forms';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-product-orders',
  templateUrl: './product-orders.component.html',
  styleUrls: ['./product-orders.component.css']
})
export class ProductOrdersComponent implements OnInit {

  public post:any
 
  constructor(private getd:DataserviceService) { }

  ngOnInit(): void {
    // this.ptest()
    this.post = {
      name:''
    }
  }

  token:any
 

  ptest(){
    this.token=localStorage.getItem('token')
    console.log(this.token)
    // this.getd.pot({'user':this.post.name, 'token':this.token});
    this.getd.pot(this.post.name, this.token);
  //   this.getd.pot(this.post.name, this.token).subscribe(data => {
  //     console.log(data)
  //   });
  }


}
