import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { product } from 'src/app/seller/seller-dashboard/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {


  res=new product()
  cres=new product()
  constructor(private pid:ServiceService,private ms:DataserviceService) { }

  crt:any
  ngOnInit(): void {
    this.checkincart()
    this.viewproduct()
    this.crt={
      pid:'',
      uid:''
    }
  }

  p:any
  id:any
  cate:any
  prod:any
  pc:any

  viewproduct(){
    console.log(localStorage.getItem('pid'))
    this.id=localStorage.getItem('pid')
    // this.id=this.pid.get()
    console.log(this.id)
    this.pid.getprod({'pid':this.id}).subscribe(res=>{
      console.log(res)
      this.prod=res
      console.log(this.prod.category)

      // localStorage.setItem('cate',this.prod.category)
      this.cateprod(this.prod.category)
    })
  }

  cartcheck:any
  checkincart(){
    this.id=localStorage.getItem('pid')
    console.log(this.id,"checkk===")
    this.pid.checkcart({'pid':this.id}).subscribe(cr=>{
      console.log(cr,"c====")
      this.cartcheck=cr
    })
    

  }

cateprod(cprod:any){
  console.log(cprod)
  this.pid.getcateprod({'cate':cprod}).subscribe(cres=>{
    console.log(cres)
    this.pc=cres
    console.log(this.pc)
  })
}

user:any

addcart(cpid:any){
  console.log(cpid)
  this.user=localStorage.getItem('user_id')

  this.crt={
    'pid':cpid,
    'uid':this.user
  }

  this.pid.producttocart({'u':this.crt}).subscribe(res=>{
    console.log(res)
  })


}

}
