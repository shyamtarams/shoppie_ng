import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountServiceService } from '../services/account-service.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  constructor(private _router:Router, private ac:AccountServiceService) { }

  account:any
  ngOnInit(): void {
    this.account = {
      tp:''
    }

  }

  ot:any
  uid:any
  
  verify(){
    this.ot=localStorage.getItem('sotp')
    console.log(this.ot)
    console.log(this.account.tp)
    if(this.ot==this.account.tp){
      console.log("verified")
      localStorage.removeItem('sotp')
      this.uid=localStorage.getItem('user_id')
      this.ac.updateprofile({'uid':this.uid}).subscribe(res=>{
        console.log(res)
      })
      location.href="/buyer/dashboard";
    }
  }

}
