import {Component, OnInit} from '@angular/core';
import {HomeService} from "./home.service";
import {RouterLink} from "@angular/router";
import {JsonPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    JsonPipe
  ],
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  data: any;

  constructor(private homeService: HomeService) {
  }
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.homeService.fetchData().subscribe({
      next: (response) => {
        this.data = response;
      }
      ,
      error: (err) => {
        console.log("Error occurred!!!", err);
      }
    });
  }
}
