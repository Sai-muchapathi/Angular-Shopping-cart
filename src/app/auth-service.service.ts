import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  //userRole = '';

  constructor() { }

  login() {
    this.isLoggedIn = true;
    console.log('Logged in');
    //this.userRole = 'admin';
  }
}
