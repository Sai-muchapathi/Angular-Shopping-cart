import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface User {
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
  __v: string
}

@Injectable({
  providedIn: 'root',
})
export class FetchUserDataService {
  private url = 'https://fakestoreapi.com/users';
  private allUsersSubject = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) {}

  fetchUsersData(): void {
    this.http.get<User[]>(this.url).subscribe((response: User[]) => {
      this.allUsersSubject.next(response);
    });
  }

  // BehaviorSubject to let other components call this method
  getAllUsers(): BehaviorSubject<any[]> {
    return this.allUsersSubject;
  }
}
