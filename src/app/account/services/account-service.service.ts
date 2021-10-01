import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  httpOptions:any;

  public token : any;

  public token_expires : any;
 
  public username !: any;

  public errors: any = [];

  constructor(private httpclient:HttpClient,  private _router:Router,) { 
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }

  
login(user:any){
  this.httpclient.post('http://localhost:8000/api-token-auth/', JSON.stringify(user), this.httpOptions).subscribe(
    data => {
      console.log(typeof data)
      this.updateData(data);
    },
    err => {
      this.errors = err['error'];
    }
  );
}

user_id:any
status:any


private updateData(token:any) {
  this.token = token['token'];
  console.log(this.token)
  this.errors = [];

  // decode the token to read the username and expiration timestamp
  const token_parts = this.token.split(/\./);
  const token_decoded = JSON.parse(window.atob(token_parts[1]));
  this.token_expires = new Date(token_decoded.exp * 1000);
  this.username = token_decoded.username;
  this.user_id = token_decoded.user_id;
  this.status = token_decoded.status;

  console.log(this.username)
  
  console.log(token_decoded)
  localStorage.setItem('token',this.token)
  localStorage.setItem('username',this.username)
  localStorage.setItem('user_id',this.user_id)
 
  this.role(this.user_id)

  this._router.navigate(['']);
  
}

public logout() {
  console.log(this.token)
  this.token = null;
  this.token_expires=null;
  this.username = null;
  console.log(this.token)
}

// public rule:any
public role(id:any){
  this.httpclient.post('http://localhost:8000/check/',id).subscribe(data=>{
        console.log(data)
        // this.rule=data
        if(data == "seller"){
          this._router.navigate(['/seller/Dashboard']);
        }
  })
}

}
