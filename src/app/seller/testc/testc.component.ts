import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testc',
  templateUrl: './testc.component.html',
  styleUrls: ['./testc.component.css']
})
export class TestcComponent implements OnInit {
  
  public us:any

  constructor() { }

  ngOnInit(): void {
    this.us={
      name:''
    }
  }

}
