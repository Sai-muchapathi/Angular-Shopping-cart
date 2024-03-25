import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export interface User {
  address: {
    geolocation: { lat: string, long: string },
    city: string,
    street: string,
    number: number,
    zipcode: number
  },
  id: number,
  email: string,
  password: string,
  name: {
    firstname: string,
    lastname: string
  },
  phone: number,
  __v: string,
  role: string
}

@Injectable({
  providedIn: 'root',
})
export class FetchUserDataService {
  private url = 'https://fakestoreapi.com/users';
  //private allUsersSubject = new BehaviorSubject<User[]>([]); // Corrected type here
  users: User[] = [];

  constructor(private http: HttpClient) {
  }

  // fetchUsersData(): Observable<User[]> {
  //   return new Promise<void>((resolve, reject) => {
  //     try {
  //       this.http.get<User[]>(this.url).subscribe((response: User[]) => {
  //         const usersWithRoles = response.map(record => ({
  //           ...record,
  //           role: this.getRandomRole()
  //         }));
  //         this.allUsersSubject.next(usersWithRoles); // Corrected the placement of next()
  //       });
  //       console.log("Fetching completed");
  //       resolve();
  //     } catch (err) {
  //       console.log("Error fetching the data");
  //       reject();
  //     }
  //   });
  // }

  fetchUsersData() {
    return new Observable<User[]>((sub) => {
      //setTimeout(() => {
        try {
          this.http.get<User[]>(this.url).subscribe((response: User[]) => {
            const usersWithRoles = response.map(record => ({
              ...record,
              role: this.getRandomRole()
            }));
            sub.next(usersWithRoles); // Corrected the placement of next()
          });
          console.log("Fetching completed");
        } catch (err) {
          console.log("Error fetching the data");
        }
      //}, 5000)
    })
  }

  private getRandomRole(): string { // Corrected the return type
    const roles: string[] = ['admin', 'user', 'employee']; // Defined roles here
    const randomIndex = Math.floor(Math.random() * roles.length);
    return roles[randomIndex];
  }

  //BehaviorSubject to let other components call this method
  getAllUsers(): User[] { // Corrected return type here
    return this.users;
  }
}
