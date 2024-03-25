import {Component, OnInit} from '@angular/core';
import {FetchUserDataService, User} from "../fetch-data/fetch-users.service";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {FetchDataService} from "../fetch-data/fetch-data.service";
@Component({
  selector: 'app-user-data',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent implements OnInit{
  // Using BehaviorSubject to hold the user data
  data: User[] = [];

  constructor(private route: ActivatedRoute, protected fetchUserDataService: FetchUserDataService) {}

  ngOnInit(): void {
    // Access resolved data from the route
    this.route.data.subscribe(data => {
      this.data = data['resolvedData']; // Assuming 'userData' is the key used in the resolver
      console.log('Resolved:', this.data);
    });
  }
}
