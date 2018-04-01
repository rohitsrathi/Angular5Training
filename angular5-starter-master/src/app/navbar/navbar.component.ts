import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  login: boolean

  constructor(public loginService : LoginService, public r: Router) { 

  }

  ngOnInit(){
    console.log('navbar init');
  }

  Logout(){
    this.loginService.isloggedIn = false;
    this.r.navigateByUrl("/login");
  }

}