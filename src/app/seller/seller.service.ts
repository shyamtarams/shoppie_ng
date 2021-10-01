import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  message:any

  constructor() { }
  sentmsg(data:any){
    this.message=data
  }
  getmsg(){
    return this.message
  }
  
  ps(){
    
  }
}
