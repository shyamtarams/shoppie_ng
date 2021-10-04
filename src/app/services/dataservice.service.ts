import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  url: string;
  httpOptions:any;
 



  constructor(private httpclient:HttpClient) { 
    this.url="https://cybersquare.herokuapp.com/user/"
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }


  getdata(){
    return this.httpclient.get('http://localhost:8000/api/category/')

  }

  getoffer(){
    return this.httpclient.get('http://localhost:8000/api/offer/')
  }

  getproductdata(data:any){
    console.log(data,"user id ===")
    // console.log(this.token)
    // return this.httpclient.get('http://localhost:8000/api/product/')
    return this.httpclient.post('http://localhost:8000/listprod/',data)
  }

  getproduct(){
    return this.httpclient.get('http://localhost:8000/prod/')
  }

  // createproduct(data:any){
  //   return this.httpclient.post('http://localhost:8000/api/product/',data)
  // }
  createproduct(data:any){
    return this.httpclient.post('http://localhost:8000/prod/',data)
  }



  id:any
  updateproduct(data:any){
    console.log(data.get('id'))
    this.id=data.get('id')
    return this.httpclient.put('http://localhost:8000/update/',data)
    // return this.httpclient.put('http://localhost:8000/api/product/'+this.id+'/',data)
    
  }
  delete(data:any){
    return this.httpclient.delete('http://localhost:8000/api/product/'+data)
    // return this.httpclient.delete('http://localhost:8000/delete/',data)
    // this.httpclient.delete('http://localhost:8000/delete/'+data).subscribe(data => {
    //   console.log(data);
    // });
  }
  
  // insertdatas( data:any){
  //   console.log(data)
  //   return this.httpclient.post('https://cybersquare.herokuapp.com/user/',data)
  // }

  // authentication functions
  public token : any;

  public token_expires : any;
 
  public username !: any;

  public errors: any = [];


login(user:any){
  this.httpclient.post('http://localhost:8000/api-token-auth/', JSON.stringify(user), this.httpOptions).subscribe(
  // this.httpclient.post('http://localhost:8000/accounts/tk/', JSON.stringify(user), this.httpOptions).subscribe(
    data => {
      console.log(typeof data)
      // this.token=data['token']
      // console.log(this.t.data["token"])
      this.updateData(data);
    },
    err => {
      this.errors = err['error'];
    }
  );
}

user_id:any
private updateData(token:any) {
  this.token = token['token'];
  // console.log(this.token)
  // console.log("====")
  this.errors = [];

  // decode the token to read the username and expiration timestamp
  const token_parts = this.token.split(/\./);
  const token_decoded = JSON.parse(window.atob(token_parts[1]));
  this.token_expires = new Date(token_decoded.exp * 1000);
  this.username = token_decoded.username;
  this.user_id = token_decoded.user_id;
  // console.log(this.username)
  // console.log(token_decoded)

  localStorage.setItem('token',this.token)
  localStorage.setItem('username',this.username)
  localStorage.setItem('user_id',this.user_id)
}

public logout() {
  // console.log(this.token)
  this.token = null;
  this.token_expires=null;
  this.username = null;
  console.log(this.token)
}

pot(post:any,token:any){
  // this.httpclient.post('http://localhost:8000/create/', JSON.stringify(post), this.httpOptions).subscribe(
  //     data => {
  //       console.log(data)
  //     })
  //   }
  console.log(post)
  console.log(token)

  this.httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + token
    })
  };
  
  console.log(this.httpOptions,"===op")
  this.httpclient.post('http://localhost:8000/create/', JSON.stringify(post), this.httpOptions).subscribe(data=>{
    console.log(data)
  })


  // console.log(name)
  // console.log(token)
  //   this.httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization': 'JWT ' + this.token   // this is our token from the UserService (see Part 1)
  //     })
  //   };
  //   return this.http.post('/api/posts', JSON.stringify(post), httpOptions);
  }

  // search(sr:any){
  //   return this.httpclient.post('http://localhost:8000/search/',sr).subscribe(data=>{
  //     console.log(data)
  //   })

  // }
  search(sr:any){
    return this.httpclient.post('http://localhost:8000/search/',sr)

  }

 allprod(){
   return this.httpclient.get('http://localhost:8000/listproduct')
 }



}
