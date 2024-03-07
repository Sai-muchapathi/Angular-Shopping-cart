import {Component, Input, OnInit} from '@angular/core';
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
  truncatedText: string = '';
  showFullText: boolean = false;
  maxLength: number = 100;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.homeService.fetchData().subscribe({
        next: (response: ApiResponse[]) => {
          this.data = response;
          this.truncateText();
        },
      error: (err) => {
        console.log("Error occurred!!!", err);
      }
    });
  }

  toggleReadMore(): void {
    this.showFullText = !this.showFullText;
  }

  truncateText(): void {
    if (this.data.length > 0 && this.data[0].description.length > this.maxLength) {
      this.truncatedText = this.data[0].description.substring(0, this.maxLength) + '...';
    } else {
      this.truncatedText = this.data[0].description;
    }
  }
}
