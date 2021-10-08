import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

 

  constructor(private getd:DataserviceService,private _router:Router) { }
  name:any
  sres:any
  user:any


  // sr:any
  ngOnInit(): void {
    this.user=localStorage.getItem('username')
    this.name = {
      sr:''
    }
  }

  search(){
    console.log(this.name.sr)
    this.getd.search({'sr':this.name.sr}).subscribe(data=>{
      console.log(data)
      this.sres=data
    });
  }

  logout() {
    localStorage.clear();
    console.log(this.user.token)
    this._router.navigate(['/accounts/login']);
    // this.us.logout();
  }

}
