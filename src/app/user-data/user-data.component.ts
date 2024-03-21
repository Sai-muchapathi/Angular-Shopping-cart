import { Component } from '@angular/core';
import {FetchUserDataService} from "../fetch-data/fetch-users.service";
import {NgForOf} from "@angular/common";

interface ApiResponse {
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
@Component({
  selector: 'app-user-data',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent {
  data: ApiResponse[] = [];


  // using FetchUserDataService class
  constructor(private userService: FetchUserDataService) {}

  ngOnInit(): void {
    // call fetchUsersData to get all user details
    this.fetchUsersData();
  }

  fetchUsersData(): void {
    this.userService.getAllUsers().subscribe(
      (response: ApiResponse[]) => {
        this.data = response.map(record => ({
          ...record,
        }));

      },
      (error) => {
        console.error("Error occurred!!!", error);
      }
    );
  }
}
