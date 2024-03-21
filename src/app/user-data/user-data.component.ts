import {Component, OnInit} from '@angular/core';
import {FetchUserDataService, User} from "../fetch-data/fetch-users.service";
import {NgForOf} from "@angular/common";
import {BehaviorSubject} from "rxjs";
@Component({
  selector: 'app-user-data',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent implements OnInit{
  // Using BehaviorSubject to hold the user data
  data: User[] = [];

  constructor(private userService: FetchUserDataService) {}

  ngOnInit(): void {
    // Call fetchUsersData to get all user details
    this.fetchUsersData();
  }

  fetchUsersData(): void {
    // Subscribe to the BehaviorSubject to get the user data
    this.userService.getAllUsers().subscribe(users => {
      this.data = users;
    });
  }
}
