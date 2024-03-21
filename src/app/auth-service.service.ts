import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor() { }

  login() {
    this.isLoggedIn = true;
    console.log('Logged in check completed');
  }
}
