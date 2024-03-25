import {Injectable} from '@angular/core';
import {BehaviorSubject, finalize, Observable} from 'rxjs';
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
  users: User[] = [];

  constructor(private http: HttpClient) {
  }
  fetchUsersData() {
    return new Observable<User[]>((sub) => {
      setTimeout(() => {
        try {
          this.http.get<User[]>(this.url).subscribe((response: User[]) => {
            const usersWithRoles = response.map(record => ({
              ...record,
              role: this.getRandomRole()
            }));
            sub.next(usersWithRoles);
          });
          console.log("Fetching completed");
        } catch (err) {
          console.log("Error fetching the data");
        }
      }, 5000)
    });
  }

  private getRandomRole(): string { // Corrected the return type
    const roles: string[] = ['admin', 'user', 'employee']; // Defined roles here
    const randomIndex = Math.floor(Math.random() * roles.length);
    return roles[randomIndex];
  }
  getAllUsers(): User[] {
    return this.users;
  }
}
