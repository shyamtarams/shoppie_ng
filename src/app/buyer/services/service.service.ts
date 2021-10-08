import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  id:any

  constructor(private httpclient:HttpClient) { }

  sent(id:any){
    this.id=id
  }
  get(){
    return this.id
  }

  getprod(id:any){
    console.log(id)
    return this.httpclient.post('http://localhost:8000/proddetails/',id)
  }
  getcateprod(cate:any){
    console.log(cate)
    return this.httpclient.post('http://localhost:8000/cateprod/',cate)
   }

   crt:any
  //  producttocart(id:any,uid:any){
  //    console.log(id,uid)
  //   // this.crt={
  //   //   id,
  //   //   uid
  //   // }
  //   return this.httpclient.post('http://localhost:8000/cartprod/',id,uid)
  //  }

   producttocart(user:any){
     console.log(user)
    return this.httpclient.post('http://localhost:8000/cartprod/',user)
   }

   getcartproduct(uid:any){
     console.log(uid)
     return this.httpclient.post('http://localhost:8000/viewcart/',uid)
   }

   checkcart(pid:any){
    return this.httpclient.post('http://localhost:8000/checkincart/',pid)
   }

}
