import { Component, OnInit } from '@angular/core';
// import { DataserviceService } from 'src/app/services/dataservice.service';
import { AccountServiceService } from '../services/account-service.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:any


  // localStorage.setItem('ProductName', 'Mobile');
  // localStorage.ProductName = 'Mobile';
  // let ProductName = localStorage.getItem('ProductName');
  

  constructor(private us:AccountServiceService) { }

  ngOnInit(): void {
    // localStorage.setItem('myCat', 'Tom');
    // localStorage.ProductName = 'Mobile';
    this.user = {
      username:'',
      password:''
    };
  }

  login(){
    
    console.log(this.user)
    this.us.login({'username': this.user.username, 'password':this.user.password});
  }

  logout() {
    console.log(this.user.token)
    this.us.logout();
  }
}
