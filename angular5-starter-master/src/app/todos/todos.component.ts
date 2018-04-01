import { TodoService } from './../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos : any[];

  constructor(public todoService : TodoService){
    
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
      console.log(this.todos);
    });
  }

  ngOnInit() {
  }

}
