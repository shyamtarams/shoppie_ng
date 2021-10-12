import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from 'src/app/account/services/account-service.service';
import { user } from './user-model.model';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-buyer-profile',
  templateUrl: './buyer-profile.component.html',
  styleUrls: ['./buyer-profile.component.css']
})
export class BuyerProfileComponent implements OnInit {

  u=new user()

  constructor(private ac:AccountServiceService, private ss:ServiceService) { }

  ngOnInit(): void {
    this.getuserdetails()
    this.countcart()
  }

  uid:any
  udata:any
  i:any
  getuserdetails(){
    this.uid=localStorage.getItem('user_id')
    // console.log(this.uid)
    this.ac.getusersingle({'uid':this.uid}).subscribe(user=>{
      this.udata=user
       this.u=this.udata
       console.log(this.udata)
      //  for(this.i =0;this.i<=2;this.i++){
      //    console.log(this.udata[this.i])
      //  }
      
    })

  }

  count:any
  tprice:any
  enco:any
  deco:any
  dtl:any

  countcart(){
    this.dtl=localStorage.getItem('key')
    console.log(this.dtl)
    // this.uid=localStorage.getItem('user_id')
    // console.log(btoa(this.uid),"=====")
    // this.dtl={name:"name", uid:12};
    // this.dtl=JSON.stringify(this.dtl);
    // console.log(this.dtl)

    // this.enco=btoa(this.dtl)
    // console.log(this.enco,"en===")
    // console.log(atob(this.enco),"de===")
    this.deco=atob(this.dtl)

    var obj = JSON.parse(this.deco);
    console.log(obj.role,"ob====")
    // console.log(obj.uid)

    this.ss.getcartproduct({'uid':this.uid}).subscribe(res=>{
    console.log(res)
    this.count=res
    this.tprice=0
    for(this.i=0;this.i<=this.count.length;this.i++){
      this.tprice=this.tprice+this.count[this.i].price
      console.log(this.tprice)
    }
   
    // console.log(this.tprice)
    // this.tprice=this.count.price
    // console.log(this.count.length)
    })

  }

}
