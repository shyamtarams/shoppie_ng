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
}
