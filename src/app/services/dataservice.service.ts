import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  url: string;

  constructor(private httpclient:HttpClient) { 
    this.url="https://cybersquare.herokuapp.com/user/"
  }


  getdata(){
    // return this.httpclient.get('https://cybersquare.herokuapp.com/user/')
    return this.httpclient.get('http://localhost:8000/api/category/')

  }

  getoffer(){
    return this.httpclient.get('http://localhost:8000/api/offer/')
  }

  getproductdata(){
    return this.httpclient.get('http://localhost:8000/api/product/')
  }

  createproduct(data:any){
    return this.httpclient.post('http://localhost:8000/api/product/',data)
  }
  
  insertdatas( data:any){
    console.log(data)
    return this.httpclient.post('https://cybersquare.herokuapp.com/user/',data)
  }

}
