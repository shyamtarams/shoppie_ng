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

}
