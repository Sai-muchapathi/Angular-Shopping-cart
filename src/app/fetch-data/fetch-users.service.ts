import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export interface User {
  address: {
    geolocation: {lat: string, long: string},
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
  private allUsersSubject = new BehaviorSubject<User[]>([]); // Corrected type here

  constructor(private http: HttpClient) {}

  fetchUsersData(): Promise<unknown> {
    return new Promise<void>((resolve, reject) => {
      try {
        this.http.get<User[]>(this.url).subscribe((response: User[]) => {
          const usersWithRoles = response.map(record => ({
            ...record,
            role: this.getRandomRole()
          }));
          this.allUsersSubject.next(usersWithRoles); // Corrected the placement of next()
        });
        console.log("Fetching completed");
        resolve();
      } catch (err) {
        console.log("Error fetching the data");
        reject();
      }
    });
  }

  private getRandomRole(): string { // Corrected the return type
    const roles: string[] = ['admin', 'user', 'employee']; // Defined roles here
    const randomIndex = Math.floor(Math.random() * roles.length);
    return roles[randomIndex];
  }

  // BehaviorSubject to let other components call this method
  getAllUsers(): BehaviorSubject<User[]> { // Corrected return type here
    return this.allUsersSubject;
  }
}
