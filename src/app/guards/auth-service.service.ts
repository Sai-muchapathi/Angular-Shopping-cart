import { Injectable } from '@angular/core';
import {FetchUserDataService, User} from "../fetch-data/fetch-users.service";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthorised = false;
  isAdmin = false;

  constructor(private fetchUser: FetchUserDataService) { }

  login(userData: {email: string, password: string, role: string}) {
    const allUsers = this.fetchUser.getAllUsers();
    const user = allUsers.find(cred => cred.email === userData.email &&
      cred.password === userData.password);
    console.log("Role: ", user?.role);
    if(user){
      console.log("User exists")
      this.isAuthorised = true;
      this.isAdmin = user.role === 'admin';
    }
    if(this.isAdmin) {
      console.log("Admin User");
    }
  }
}
