import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  users : any[];

  constructor(public http : Http, public r: Router){
    this.r.navigateByUrl("/login");
    // this.http.get('http://localhost:8089')
    // .map(res => res.json())
    // .subscribe(res => {
    //   this.users = res;
    //   console.log(this.users);
    // });
  }

}
