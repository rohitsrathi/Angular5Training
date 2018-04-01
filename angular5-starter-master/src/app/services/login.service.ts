import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  public isloggedIn : boolean;

  constructor() { 
    this.isloggedIn = false
  }
  enableLogin(){
    this.isloggedIn = true;
  }

}
