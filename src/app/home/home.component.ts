import { Component, OnInit } from '@angular/core';
import { home } from './home.model'
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  res=new home()
  constructor(private getd:DataserviceService) { }

  ngOnInit(): void {
    this.displaydata();
  }

  // displayedColumns: string[] = [ 'f_name', 'l_name', 'gender', 'dob', 'email', 'action'];
  dataSource:any

  gdt:any;

  // insertfn(){
  //   console.log(this.res)
  //   this.serve.insertdatas(this.res).subscribe(result=>{
  //     console.log(result)
      
  //   })
  // }

  displaydata(){
    this.getd.getdata().subscribe(res=>{
    this.gdt=res;
    console.log(this.gdt)
   this.dataSource = res;
 
    })
  }

}
