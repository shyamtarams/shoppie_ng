import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { product } from '../seller-dashboard/product.model';
// import { FormBuilder, FormGroup } from '@angular/forms';
import { category } from '../add-product/product.model';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  
  cat=new category()
  res=new product()

  pid:any
  constructor(private sh:SellerService,private getd:DataserviceService) { }
  product_image !:File
  name !: string
  price !: any
  stock !: any
  category !: string
  description !:string 
  id:any
  author:any

  ngOnInit(): void {
    // this.message=this.sh.getmsg()
    // console.log(this.message)
    this.displaydata()
    this.displayCat()
    
  }

  gdc:any
  dataSource:any

  // displayCat(){
  //   this.gdt.getdata().subscribe(cate=>{
  //     this.getc=cate;
  //     console.log(this.getc)
  //     this.dataSource = cate;
  //     })
  // }


  displayCat(){
    this.getd.getdata().subscribe(cat=>{
    this.gdc=cat;
    console.log(this.gdc)
  //  this.dataSource = cat;
 
    })
  }


  gdt:any;
  dt:any
  uid:any
  displaydata(){
    this.uid=localStorage.getItem('user_id')
    
    this.pid=this.sh.getmsg()
    this.getd.getproduct().subscribe(res=>{
    this.dt=res;
    for (var i = 0; i < this.dt.length; i++) {
      if (this.dt[i].id == this.pid) {
        this.gdt=this.dt[i]
        console.log(this.gdt.name)
        this.name=this.gdt.name
        this.description=this.gdt.description
        this.price=this.gdt.price
        this.stock=this.gdt.stock
        this.id=this.gdt.id
        // this.product_image=this.gdt.product_image
        this.category=this.gdt.category
        this.author=this.gdt.author
      }
    }
   
 
    })
  }

  onChange(event:any) {
    this.product_image = event.target.files[0]
  }

  update(){
    // console.log(this.name)
    const fd =  new FormData();
    fd.append('product_image', this.product_image,)
    fd.append('price', this.price,)
    fd.append('description', this.description,)
    fd.append('name', this.name,)
    fd.append('stock', this.stock,)
    fd.append('category', this.category,)
    fd.append('id', this.id,)
    fd.append('author', this.author,)

    console.log("===========")
    console.log(fd.get('id'))
    console.log(fd.get('name'))
    console.log(fd.get('category'))
    console.log(fd.get('product_image'))

    this.getd.updateproduct(fd).subscribe(result=>{
      console.log(result)
    })
    
  }


}
