import {Component, OnInit} from '@angular/core';
import {HomeService} from "./home.service";
import {RouterLink} from "@angular/router";
import {JsonPipe, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";

interface ApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    JsonPipe,
    NgForOf,
    NgOptimizedImage
  ],
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  data: ApiResponse[] = [];

  constructor(private homeService: HomeService) {
  }
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.homeService.fetchData().subscribe({
        next: (response: ApiResponse[]) => {
          this.data = response;
        },
      error: (err) => {
        console.log("Error occurred!!!", err);
      }
    });
  }
}
