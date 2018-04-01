import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


userName : any;
password: any;

  constructor(public loginService: LoginService, public r: Router) { 
   
  }

  ngOnInit(){
    
  }

  login(){
    console.log("here...");
    if(this.userName !== null && this.password !== null){
      console.log("Login Success...");
      this.loginService.enableLogin();
      this.r.navigateByUrl("/todos");
    }
  }

}
