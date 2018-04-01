import { Component, OnInit } from '@angular/core';
import { ChildComponent } from './../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  no: number;

  members: any;

  constructor() {
    this.no = 10;
    this.members = [];
  }

  increase(){
    this.no++;
  }

  noChange(event) {
    this.no = event;
  }

  arrayCatched(event){
    console.log(event);
    this.members = event;
  }

  ngOnInit() {
  }

}