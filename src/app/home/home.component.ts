import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {JsonPipe, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {FetchDataService} from "../fetch-data/fetch-data.service";

interface ApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  showFullText: boolean;
  truncatedText: string;
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
  maxLength: number = 100;

  // using FetchDataService class
  constructor(private homeService: FetchDataService) {}

  ngOnInit(): void {
    // call fetchData to get all product details
    this.fetchData();
  }

  fetchData(): void {
    this.homeService.getAllProducts().subscribe(
      (response: ApiResponse[]) => {
        this.data = response.map(record => ({
          ...record,
          showFullText: false,
          truncatedText: this.truncateText(record.description)
        }));
      },
      (error) => {
        console.error("Error occurred!!!", error);
      }
    );
  }

  toggleReadMore(record: ApiResponse): void {
    record.showFullText = !record.showFullText;
  }

  truncateText(text:string): string {
    if (text.length > this.maxLength) {
      return text.substring(0, this.maxLength) + '...';
    } else {
      return text;
    }
  }
}
