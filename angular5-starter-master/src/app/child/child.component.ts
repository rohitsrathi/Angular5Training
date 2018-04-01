import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  no: number;

  @Output()
  newNo: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  arrayPassed: EventEmitter<Object> = new EventEmitter<Object>();

  constructor() {
    
  }

  emitFunc(){
    this.arrayPassed.emit( [
      {name: "Rohit", age:26},
      {name: "Gaurav", age:21},
      {name: "Ronald", age: 25}
   ])
  }


  increase() {
    this.no++;
    this.newNo.emit(this.no);
    this.emitFunc();
  }

 

  ngOnInit() {
  }

}