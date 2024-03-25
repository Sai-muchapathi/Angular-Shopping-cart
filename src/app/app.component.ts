import {Component, inject, OnInit} from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd, NavigationError,
  NavigationStart,
  Router,
  RouterLink,
  RouterOutlet
} from '@angular/router';
import {FetchDataService} from "./fetch-data/fetch-data.service";
import {FetchUserDataService} from "./fetch-data/fetch-users.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'practice';
  showLoading: boolean = false;
  router: Router = inject(Router);

  constructor(private fetchDataService: FetchDataService, private fetchUserService: FetchUserDataService) {
  }

  ngOnInit(): void {
    // calling fetchData to get the data ready before main components load
    this.fetchDataService.fetchData();
    this.fetchUserService.fetchUsersData();

    // making use of the router events to watch different routing events occurrences
    this.router.events.subscribe((routerEvent: Event) => {
      // setting to true once the navigation starts
      if (routerEvent instanceof NavigationStart) {
        this.showLoading = true;
      }
      // set to false in case of navigation ends, cancel, or any in the event of any error
      if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError) {
        this.showLoading = false;
      }
    })

  }
}
