import { Component, OnInit } from '@angular/core';
import { signup } from './signup.model';
import { AccountServiceService } from '../services/account-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  sign=new signup()

  public register:any

  constructor(private ac:AccountServiceService) { }

  ngOnInit(): void {
  }

  sotp:any
  signup(){
    console.log(this.sign)
    this.ac.register(this.sign).subscribe(res=>{
    console.log(res)
    this.sotp=res 
    localStorage.setItem('sotp',this.sotp)
    if(res=="error"){
      console.log("error")
    }
    else{
      location.href="/account/verify";
    }
    })
  }
  
  logout(){

  }


}
