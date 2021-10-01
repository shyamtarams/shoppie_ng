import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public register:any

  constructor() { }

  ngOnInit(): void {
    this.register={
      username:''
    }
  }

  signup(){
    

  }

}
