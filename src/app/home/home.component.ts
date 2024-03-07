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

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.homeService.fetchData().subscribe({
        next: (response: ApiResponse[]) => {
          this.data = response.map(record => ({
            ...record,
            showFullText:false,
            truncatedText: this.truncateText(record.description)
        }));
        },
      error: (err) => {
        console.log("Error occurred!!!", err);
      }
    });
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
