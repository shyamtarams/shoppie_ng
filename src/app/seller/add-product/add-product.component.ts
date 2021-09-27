import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { product } from './product.model';
import { category } from './product.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  form: FormGroup;

  product_image !:File
  name !: string
  price !: any
  stock !: any
  category !: string
  description !:string 

  
  cat=new category()
  res=new product()
  constructor( public fb: FormBuilder, private getd:DataserviceService) {
    // this.product_image;
    this.form = this.fb.group({
      name:[''],
      price:[''],
      description:[''],
      product_image:[null],
      stock:[''],
      category:[''],

    })
   }


  ngOnInit(): void {
    this.displaydata();
  }

  //new
  onChange(event:any) {
    this.product_image = event.target.files[0]
  }

  dataSource:any
  gdt:any;

  displaydata(){
    this.getd.getdata().subscribe(cat=>{
    this.gdt=cat;
    console.log(this.gdt)
   this.dataSource = cat;
 
    })
  }

  addproduct(){
    const fd =  new FormData();
    fd.append('image', this.product_image,)
    fd.append('price', this.price,)
    fd.append('description', this.description,)
    fd.append('name', this.name,)
    fd.append('stock', this.stock,)
    fd.append('category', this.category,)

    console.log(fd.get('image'))

    this.getd.createproduct(fd).subscribe(result=>{
      console.log(result)
    })
  }

}
