import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { product } from './product.model';
import { FormControl, } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  name: any;
  inputValue : any;
  res=new product()
  constructor(private getd:DataserviceService) { 

    this.inputValue="test"
    
  }

  ngOnInit(): void {
    this.name="surya"
  }

  dataSource:any
  gdt:any;

  addproduct(){
    this.getd.createproduct(this.res).subscribe(result=>{
      console.log(result)
    })
  }

}
